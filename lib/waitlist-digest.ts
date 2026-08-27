import "server-only";

import type { PendingWaitlistSubmission } from "@/lib/waitlist-db";

function escapeHtml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function formatUtc(value: string): string {
  const date = new Date(value);
  return Number.isNaN(date.getTime())
    ? value
    : `${date.toISOString().replace("T", " ").replace(".000Z", "Z")}`;
}

export function buildWaitlistDigest(submissions: PendingWaitlistSubmission[]) {
  const count = submissions.length;
  const label = count === 1 ? "submission" : "submissions";
  const subject = `MAD Studio waitlist digest — ${count} ${label}`;

  const textEntries = submissions.map((submission, index) => {
    const notes = submission.notes || "—";
    return [
      `${index + 1}. ${submission.email}`,
      `Industry: ${submission.industry}`,
      `Use cases: ${submission.useCases.join(", ")}`,
      `Notes: ${notes}`,
      `Created: ${formatUtc(submission.createdAt)}`,
      `Last updated: ${formatUtc(submission.updatedAt)}`,
    ].join("\n");
  });

  const htmlEntries = submissions
    .map((submission) => {
      const notes = submission.notes ? escapeHtml(submission.notes) : "&mdash;";
      const useCases = submission.useCases.map(escapeHtml).join(", ");

      return `
        <section style="margin:0 0 24px;padding:20px;border:1px solid #e4e4e7;border-radius:10px;">
          <h2 style="margin:0 0 12px;font-size:18px;">${escapeHtml(submission.email)}</h2>
          <p style="margin:6px 0;"><strong>Industry:</strong> ${escapeHtml(submission.industry)}</p>
          <p style="margin:6px 0;"><strong>Use cases:</strong> ${useCases}</p>
          <p style="margin:6px 0;"><strong>Notes:</strong> ${notes}</p>
          <p style="margin:12px 0 0;color:#71717a;font-size:12px;">
            Created ${escapeHtml(formatUtc(submission.createdAt))}<br>
            Last updated ${escapeHtml(formatUtc(submission.updatedAt))}
          </p>
        </section>
      `;
    })
    .join("");

  return {
    subject,
    text: [
      `MAD Studio received ${count} new or updated waitlist ${label}.`,
      "",
      ...textEntries.flatMap((entry) => [entry, ""]),
      "The authoritative list is in Vercel → Storage → Neon → waitlist_submissions.",
    ].join("\n"),
    html: `
      <!doctype html>
      <html lang="en">
        <body style="margin:0;padding:32px;background:#f4f4f5;color:#18181b;font-family:Arial,sans-serif;">
          <main style="max-width:680px;margin:0 auto;padding:28px;background:#ffffff;border-radius:14px;">
            <h1 style="margin:0 0 8px;font-size:24px;">MAD Studio waitlist digest</h1>
            <p style="margin:0 0 24px;color:#52525b;">${count} new or updated ${label} since the last successful digest.</p>
            ${htmlEntries}
            <p style="margin:24px 0 0;color:#71717a;font-size:12px;">
              The authoritative list is in Vercel &rarr; Storage &rarr; Neon &rarr; waitlist_submissions.
            </p>
          </main>
        </body>
      </html>
    `,
  };
}

