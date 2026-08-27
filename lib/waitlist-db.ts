import "server-only";

import { neon } from "@neondatabase/serverless";

import type { ValidatedWaitlistSubmission } from "@/lib/waitlist";

export type WaitlistEnvironment = "production" | "preview" | "development";

export type PendingWaitlistSubmission = {
  id: string;
  email: string;
  industry: string;
  useCases: string[];
  notes: string;
  createdAt: string;
  updatedAt: string;
};

let database: ReturnType<typeof neon> | null = null;

function getDatabase() {
  if (database) {
    return database;
  }

  const connectionString = process.env.DATABASE_URL;
  if (!connectionString) {
    throw new Error("DATABASE_URL is not configured");
  }

  database = neon(connectionString);
  return database;
}

export function getWaitlistEnvironment(): WaitlistEnvironment {
  const environment = process.env.VERCEL_ENV;
  if (environment === "production" || environment === "preview") {
    return environment;
  }

  return "development";
}

export async function upsertWaitlistSubmission(
  submission: ValidatedWaitlistSubmission,
  environment: WaitlistEnvironment
) {
  const sql = getDatabase();

  await sql`
    INSERT INTO waitlist_submissions (
      email,
      industry,
      use_cases,
      notes,
      environment,
      source
    )
    VALUES (
      ${submission.email},
      ${submission.industry},
      ${JSON.stringify(submission.useCases)}::jsonb,
      ${submission.notes},
      ${environment},
      ${"multiagentdebates.com"}
    )
    ON CONFLICT (environment, email)
    DO UPDATE SET
      industry = EXCLUDED.industry,
      use_cases = EXCLUDED.use_cases,
      notes = EXCLUDED.notes,
      source = EXCLUDED.source,
      updated_at = NOW(),
      digest_sent_at = NULL
  `;
}

type PendingRow = {
  id: string | number | bigint;
  email: string;
  industry: string;
  use_cases: unknown;
  notes: string;
  created_at: string;
  updated_at: string;
};

function parseUseCases(value: unknown): string[] {
  if (Array.isArray(value)) {
    return value.filter((item): item is string => typeof item === "string");
  }

  if (typeof value === "string") {
    try {
      const parsed: unknown = JSON.parse(value);
      return Array.isArray(parsed)
        ? parsed.filter((item): item is string => typeof item === "string")
        : [];
    } catch {
      return [];
    }
  }

  return [];
}

export async function getPendingProductionSubmissions(): Promise<
  PendingWaitlistSubmission[]
> {
  const sql = getDatabase();
  const result = await sql`
    SELECT
      id,
      email,
      industry,
      use_cases,
      notes,
      created_at::text AS created_at,
      updated_at::text AS updated_at
    FROM waitlist_submissions
    WHERE environment = 'production'
      AND digest_sent_at IS NULL
    ORDER BY updated_at ASC, id ASC
  `;

  return (result as PendingRow[]).map((row) => ({
    id: String(row.id),
    email: row.email,
    industry: row.industry,
    useCases: parseUseCases(row.use_cases),
    notes: row.notes,
    createdAt: row.created_at,
    updatedAt: row.updated_at,
  }));
}

export async function markSubmissionsAsDigested(
  submissions: PendingWaitlistSubmission[]
) {
  if (submissions.length === 0) {
    return;
  }

  const sql = getDatabase();
  await sql.transaction((transaction) =>
    submissions.map((submission) => transaction`
      UPDATE waitlist_submissions
      SET digest_sent_at = NOW()
      WHERE id = ${submission.id}::bigint
        AND environment = 'production'
        AND digest_sent_at IS NULL
        AND updated_at = ${submission.updatedAt}::timestamptz
    `)
  );
}

