"use server";

import {
  getWaitlistEnvironment,
  upsertWaitlistSubmission,
} from "@/lib/waitlist-db";
import {
  validateWaitlistSubmission,
  type WaitlistSubmissionInput,
} from "@/lib/waitlist";

export type WaitlistActionResult =
  | { ok: true }
  | { ok: false; error: string };

export async function submitWaitlist(
  input: WaitlistSubmissionInput
): Promise<WaitlistActionResult> {
  const validation = validateWaitlistSubmission(input);

  if (validation.kind === "spam") {
    return { ok: true };
  }

  if (validation.kind === "invalid") {
    return { ok: false, error: validation.error };
  }

  try {
    await upsertWaitlistSubmission(
      validation.submission,
      getWaitlistEnvironment()
    );
    return { ok: true };
  } catch (error) {
    console.error("Waitlist submission could not be stored", error);
    return {
      ok: false,
      error: "We couldn’t save your request right now. Please try again later.",
    };
  }
}

