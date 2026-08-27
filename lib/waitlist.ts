export const INDUSTRIES = [
  "Film & Media",
  "Politics & Government",
  "Marketing & Advertising",
  "Legal",
  "Research & Academia",
  "Education",
  "Product & Strategy",
  "Journalism",
  "Finance & Investing",
  "Other",
] as const;

export const USE_CASES = [
  "Focus Groups",
  "1:1 Debates",
  "Team Debates",
  "Shark Tank Pitch",
  "Marketing Showdown",
  "Tribe Mind",
  "Virtual Jury",
  "Boardroom Challenge",
  "Strategy War Room",
  "Red Team Arena",
  "Crisis Simulation",
  "Investment Committee",
  "Idea Tournament",
  "Comedy Battle",
] as const;

export type WaitlistSubmissionInput = {
  email: string;
  industry: string;
  customIndustry: string;
  useCases: string[];
  notes: string;
  website: string;
};

export type ValidatedWaitlistSubmission = {
  email: string;
  industry: string;
  useCases: string[];
  notes: string;
};

export type WaitlistValidationResult =
  | { kind: "valid"; submission: ValidatedWaitlistSubmission }
  | { kind: "spam" }
  | { kind: "invalid"; error: string };

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

export function validateWaitlistSubmission(
  input: unknown
): WaitlistValidationResult {
  if (!isRecord(input)) {
    return { kind: "invalid", error: "Please check your answers and try again." };
  }

  if (typeof input.website !== "string") {
    return { kind: "invalid", error: "Please check your answers and try again." };
  }

  if (input.website.trim()) {
    return { kind: "spam" };
  }

  if (
    typeof input.email !== "string" ||
    typeof input.industry !== "string" ||
    typeof input.customIndustry !== "string" ||
    !Array.isArray(input.useCases) ||
    typeof input.notes !== "string"
  ) {
    return { kind: "invalid", error: "Please check your answers and try again." };
  }

  const email = input.email.trim().toLowerCase();
  if (!email || email.length > 254 || !EMAIL_PATTERN.test(email)) {
    return { kind: "invalid", error: "Please enter a valid email address." };
  }

  if (!INDUSTRIES.includes(input.industry as (typeof INDUSTRIES)[number])) {
    return { kind: "invalid", error: "Please select a valid industry." };
  }

  const customIndustry = input.customIndustry.trim();
  const industry = input.industry === "Other" ? customIndustry : input.industry;
  if (!industry || industry.length > 100) {
    return {
      kind: "invalid",
      error: "Please enter an industry using 100 characters or fewer.",
    };
  }

  const useCases = input.useCases.filter(
    (value): value is string => typeof value === "string"
  );
  const uniqueUseCases = new Set(useCases);
  const allowedUseCases = new Set<string>(USE_CASES);
  if (
    useCases.length !== 3 ||
    uniqueUseCases.size !== 3 ||
    useCases.some((useCase) => !allowedUseCases.has(useCase))
  ) {
    return { kind: "invalid", error: "Please choose exactly three use cases." };
  }

  const notes = input.notes.trim();
  if (notes.length > 2000) {
    return {
      kind: "invalid",
      error: "Please keep the additional notes under 2,000 characters.",
    };
  }

  return {
    kind: "valid",
    submission: { email, industry, useCases, notes },
  };
}

