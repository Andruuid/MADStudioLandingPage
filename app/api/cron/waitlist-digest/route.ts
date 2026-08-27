import { createHash } from "node:crypto";

import { Resend } from "resend";

import {
  getPendingProductionSubmissions,
  markSubmissionsAsDigested,
} from "@/lib/waitlist-db";
import { buildWaitlistDigest } from "@/lib/waitlist-digest";

export const dynamic = "force-dynamic";

function getRequiredEnvironmentVariable(name: string): string {
  const value = process.env[name]?.trim();
  if (!value) {
    throw new Error(`${name} is not configured`);
  }
  return value;
}

export async function GET(request: Request) {
  const cronSecret = process.env.CRON_SECRET;
  if (
    !cronSecret ||
    request.headers.get("authorization") !== `Bearer ${cronSecret}`
  ) {
    return Response.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const submissions = await getPendingProductionSubmissions();
    if (submissions.length === 0) {
      return Response.json({ ok: true, sent: 0 });
    }

    const digest = buildWaitlistDigest(submissions);
    const apiKey = getRequiredEnvironmentVariable("RESEND_API_KEY");
    const to = getRequiredEnvironmentVariable("WAITLIST_DIGEST_TO");
    const from =
      process.env.WAITLIST_DIGEST_FROM?.trim() ||
      "MAD Studio <waitlist@multiagentdebates.com>";
    const digestFingerprint = createHash("sha256")
      .update(
        submissions
          .map((submission) => `${submission.id}:${submission.updatedAt}`)
          .join("|")
      )
      .digest("hex");

    const resend = new Resend(apiKey);
    const { data, error } = await resend.emails.send(
      {
        from,
        to,
        subject: digest.subject,
        html: digest.html,
        text: digest.text,
      },
      { idempotencyKey: `mad-waitlist-digest-${digestFingerprint}` }
    );

    if (error || !data?.id) {
      throw new Error(error?.message || "Resend did not return an email ID");
    }

    await markSubmissionsAsDigested(submissions);

    return Response.json({
      ok: true,
      sent: submissions.length,
      emailId: data.id,
    });
  } catch (error) {
    console.error("Waitlist digest failed", error);
    return Response.json(
      { error: "The waitlist digest could not be sent." },
      { status: 500 }
    );
  }
}

