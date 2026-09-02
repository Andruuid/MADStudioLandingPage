"use client";

import { useState } from "react";

import { submitWaitlist } from "@/app/actions/waitlist";
import { INDUSTRIES, USE_CASES } from "@/lib/waitlist";

type Status = "idle" | "loading" | "success" | "error";

export default function Waitlist() {
  const [step, setStep] = useState(1);
  const [industry, setIndustry] = useState("");
  const [customIndustry, setCustomIndustry] = useState("");
  const [useCases, setUseCases] = useState<string[]>([]);
  const [notes, setNotes] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  const industryIsValid =
    Boolean(industry) &&
    (industry !== "Other" || Boolean(customIndustry.trim()));
  const useCasesAreValid = useCases.length === 3;

  function clearError() {
    if (status === "error") {
      setStatus("idle");
      setError(null);
    }
  }

  function toggleUseCase(useCase: string) {
    clearError();
    setUseCases((current) => {
      if (current.includes(useCase)) {
        return current.filter((item) => item !== useCase);
      }

      if (current.length >= 3) {
        return current;
      }

      return [...current, useCase];
    });
  }

  function goToStep(nextStep: number) {
    clearError();
    setStep(nextStep);
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(null);
    const form = event.currentTarget;

    if (!industryIsValid || !useCasesAreValid) {
      setStatus("error");
      setError("Please complete the previous steps before submitting.");
      return;
    }

    if (!email.trim() || !email.includes("@")) {
      setStatus("error");
      setError("Please enter a valid email address.");
      return;
    }

    try {
      setStatus("loading");
      const formData = new FormData(form);
      const result = await submitWaitlist({
        email,
        industry,
        customIndustry,
        useCases,
        notes,
        website: String(formData.get("website") ?? ""),
      });

      if (!result.ok) {
        setStatus("error");
        setError(result.error);
        return;
      }

      setStatus("success");
      setEmail("");
    } catch {
      setStatus("error");
      setError("Something went wrong. Please try again.");
    }
  }

  return (
    <section
      id="waitlist"
      className="relative isolate overflow-hidden border-t border-white/5 py-32 md:py-40"
    >
      <div
        aria-hidden
        className="absolute inset-0 grid-bg radial-fade opacity-40"
      />
      <div
        aria-hidden
        className="absolute left-1/2 top-1/2 -z-10 h-[420px] w-[820px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/20 blur-3xl"
      />

      <div className="relative mx-auto flex max-w-3xl flex-col items-center gap-8 px-6 text-center">
        <span className="font-mono text-[11px] uppercase tracking-[0.24em] text-accent">
          07 / Beta access
        </span>
        <h2 className="text-balance text-4xl font-semibold tracking-tight text-white md:text-6xl">
          See whether Multi Agent Debates fits{" "}
          <span className="bg-gradient-to-r from-accent via-accent-glow to-accent-cyan bg-clip-text text-transparent">
            your way of working.
          </span>
        </h2>
        <p className="max-w-xl text-balance text-zinc-400 md:text-lg">
          Closed beta is rolling out gradually. Tell us what you would use it
          for, and we will send an invite when there is room.
        </p>

        <div className="w-full max-w-2xl rounded-2xl border border-white/10 bg-ink-900/80 p-5 text-left shadow-2xl shadow-black/20 backdrop-blur sm:p-8">
          <div className="mb-8">
            <div className="mb-3 flex items-center justify-between gap-4">
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent-cyan">
                Step {step} of 3
              </p>
              <p className="text-xs text-zinc-500">
                {step === 1 && "Your field"}
                {step === 2 && "Your use case"}
                {step === 3 && "Your invite"}
              </p>
            </div>
            <ol className="grid grid-cols-3 gap-2" aria-label="Signup progress">
              {[1, 2, 3].map((progressStep) => (
                <li
                  key={progressStep}
                  aria-current={step === progressStep ? "step" : undefined}
                  className={`h-1.5 rounded-full transition-colors ${
                    progressStep <= step ? "bg-accent" : "bg-white/10"
                  }`}
                >
                  <span className="sr-only">
                    Step {progressStep}
                    {step === progressStep ? ", current step" : ""}
                  </span>
                </li>
              ))}
            </ol>
          </div>

          <form onSubmit={handleSubmit} noValidate>
            <div
              className="pointer-events-none absolute -left-[10000px] top-auto h-px w-px overflow-hidden"
              aria-hidden="true"
            >
              <label htmlFor="waitlist-website">Website</label>
              <input
                id="waitlist-website"
                name="website"
                type="text"
                tabIndex={-1}
                autoComplete="off"
              />
            </div>

            {step === 1 && (
              <fieldset>
                <legend className="text-xl font-semibold text-white sm:text-2xl">
                  What industry or niche are you in?
                </legend>
                <p className="mt-2 text-sm text-zinc-400">
                  Choose the field that best describes your work.
                </p>

                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {INDUSTRIES.map((option) => (
                    <label
                      key={option}
                      className={`flex cursor-pointer items-center gap-3 rounded-lg border px-4 py-3 text-sm transition ${
                        industry === option
                          ? "border-accent/70 bg-accent/15 text-white"
                          : "border-white/10 bg-ink-800/50 text-zinc-300 hover:border-white/20 hover:bg-ink-800"
                      }`}
                    >
                      <input
                        type="radio"
                        name="industry"
                        value={option}
                        checked={industry === option}
                        onChange={() => {
                          setIndustry(option);
                          clearError();
                        }}
                        className="h-4 w-4 border-white/20 bg-ink-900 text-accent focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-ink-900"
                      />
                      <span>{option}</span>
                    </label>
                  ))}
                </div>

                {industry === "Other" && (
                  <div className="mt-5">
                    <label
                      htmlFor="custom-industry"
                      className="text-sm font-medium text-zinc-200"
                    >
                      Tell us your industry or niche
                    </label>
                    <input
                      id="custom-industry"
                      name="customIndustry"
                      type="text"
                      value={customIndustry}
                      onChange={(event) => {
                        setCustomIndustry(event.target.value);
                        clearError();
                      }}
                      autoFocus
                      maxLength={100}
                      className="mt-2 w-full rounded-md border border-white/10 bg-ink-950/70 px-4 py-3 text-sm text-white placeholder:text-zinc-500 focus:border-accent/60 focus:outline-none focus:ring-2 focus:ring-accent/30"
                      placeholder="e.g. Healthcare, Gaming, Nonprofit"
                      required
                    />
                  </div>
                )}

                <div className="mt-8 flex justify-end">
                  <button
                    type="button"
                    onClick={() => goToStep(2)}
                    disabled={!industryIsValid}
                    className="inline-flex items-center justify-center rounded-md bg-gradient-to-r from-accent to-accent-glow px-6 py-3 text-sm font-semibold text-white shadow-[0_0_40px_-10px_rgba(124,92,255,0.8)] transition hover:shadow-[0_0_60px_-8px_rgba(124,92,255,1)] disabled:cursor-not-allowed disabled:opacity-40 disabled:shadow-none"
                  >
                    Continue
                  </button>
                </div>
              </fieldset>
            )}

            {step === 2 && (
              <fieldset>
                <legend className="text-xl font-semibold text-white sm:text-2xl">
                  What would you use Multi Agent Debates for?
                </legend>
                <div className="mt-2 flex items-center justify-between gap-4">
                  <p className="text-sm text-zinc-400">Choose exactly three.</p>
                  <p className="font-mono text-xs text-accent-cyan">
                    {useCases.length} / 3 selected
                  </p>
                </div>

                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {USE_CASES.map((useCase) => {
                    const isSelected = useCases.includes(useCase);
                    const isDisabled = useCases.length >= 3 && !isSelected;

                    return (
                      <label
                        key={useCase}
                        className={`flex items-center gap-3 rounded-lg border px-4 py-3 text-sm transition ${
                          isSelected
                            ? "cursor-pointer border-accent/70 bg-accent/15 text-white"
                            : isDisabled
                              ? "cursor-not-allowed border-white/5 bg-ink-950/30 text-zinc-600"
                              : "cursor-pointer border-white/10 bg-ink-800/50 text-zinc-300 hover:border-white/20 hover:bg-ink-800"
                        }`}
                      >
                        <input
                          type="checkbox"
                          name="useCases"
                          value={useCase}
                          checked={isSelected}
                          disabled={isDisabled}
                          onChange={() => toggleUseCase(useCase)}
                          className="h-4 w-4 rounded border-white/20 bg-ink-900 text-accent focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-ink-900 disabled:opacity-40"
                        />
                        <span>{useCase}</span>
                      </label>
                    );
                  })}
                </div>

                <div className="mt-6">
                  <label
                    htmlFor="waitlist-notes"
                    className="text-sm font-medium text-zinc-200"
                  >
                    Anything else you’d like to use Multi Agent Debates for?{" "}
                    <span className="font-normal text-zinc-500">Optional</span>
                  </label>
                  <textarea
                    id="waitlist-notes"
                    name="notes"
                    value={notes}
                    onChange={(event) => setNotes(event.target.value)}
                    rows={3}
                    maxLength={2000}
                    className="mt-2 w-full resize-y rounded-md border border-white/10 bg-ink-950/70 px-4 py-3 text-sm text-white placeholder:text-zinc-500 focus:border-accent/60 focus:outline-none focus:ring-2 focus:ring-accent/30"
                    placeholder="Tell us about the debate, decision, or audience you have in mind."
                  />
                </div>

                <div className="mt-8 flex items-center justify-between gap-3">
                  <button
                    type="button"
                    onClick={() => goToStep(1)}
                    className="rounded-md border border-white/10 px-5 py-3 text-sm font-medium text-zinc-300 transition hover:border-white/20 hover:bg-white/5 hover:text-white"
                  >
                    Back
                  </button>
                  <button
                    type="button"
                    onClick={() => goToStep(3)}
                    disabled={!useCasesAreValid}
                    className="inline-flex items-center justify-center rounded-md bg-gradient-to-r from-accent to-accent-glow px-6 py-3 text-sm font-semibold text-white shadow-[0_0_40px_-10px_rgba(124,92,255,0.8)] transition hover:shadow-[0_0_60px_-8px_rgba(124,92,255,1)] disabled:cursor-not-allowed disabled:opacity-40 disabled:shadow-none"
                  >
                    Continue
                  </button>
                </div>
              </fieldset>
            )}

            {step === 3 && (
              <fieldset disabled={status === "loading" || status === "success"}>
                <legend className="text-xl font-semibold text-white sm:text-2xl">
                  Where should we send your invite?
                </legend>
                <p className="mt-2 text-sm text-zinc-400">
                  You’re one step away from the Multi Agent Debates beta.
                </p>

                <div className="mt-6">
                  <label
                    htmlFor="waitlist-email"
                    className="text-sm font-medium text-zinc-200"
                  >
                    Email address
                  </label>
                  <input
                    id="waitlist-email"
                    name="email"
                    type="email"
                    inputMode="email"
                    autoComplete="email"
                    placeholder="you@domain.com"
                    value={email}
                    onChange={(event) => {
                      setEmail(event.target.value);
                      clearError();
                    }}
                    className="mt-2 w-full rounded-md border border-white/10 bg-ink-950/70 px-4 py-3 text-sm text-white placeholder:text-zinc-500 focus:border-accent/60 focus:outline-none focus:ring-2 focus:ring-accent/30 disabled:opacity-60"
                    aria-describedby="waitlist-status"
                    autoFocus
                    required
                    maxLength={254}
                  />
                </div>

                <div className="mt-8 flex flex-col-reverse gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <button
                    type="button"
                    onClick={() => goToStep(2)}
                    className="rounded-md border border-white/10 px-5 py-3 text-sm font-medium text-zinc-300 transition hover:border-white/20 hover:bg-white/5 hover:text-white"
                  >
                    Back
                  </button>
                  <button
                    type="submit"
                    className="group inline-flex items-center justify-center gap-2 rounded-md bg-gradient-to-r from-accent to-accent-glow px-6 py-3 text-sm font-semibold text-white shadow-[0_0_40px_-10px_rgba(124,92,255,0.8)] transition hover:shadow-[0_0_60px_-8px_rgba(124,92,255,1)] disabled:cursor-not-allowed disabled:opacity-70"
                  >
                    {status === "loading"
                      ? "Submitting…"
                      : status === "success"
                        ? "You’re on the list"
                        : "Request free beta access"}
                    {status !== "success" && status !== "loading" && (
                      <svg
                        className="h-4 w-4 transition group-hover:translate-x-0.5"
                        viewBox="0 0 16 16"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        aria-hidden
                      >
                        <path
                          d="M3 8h10M9 4l4 4-4 4"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    )}
                  </button>
                </div>
              </fieldset>
            )}
          </form>

          <p
            id="waitlist-status"
            className="mt-5 min-h-[1.25rem] text-center text-sm"
            aria-live="polite"
          >
            {status === "success" && (
              <span className="text-accent-cyan">
                Thanks — we’ll be in touch when your invite is ready.
              </span>
            )}
            {status === "error" && error && (
              <span className="text-rose-400">{error}</span>
            )}
          </p>

          {step === 3 && (
            <p className="mt-3 text-center text-xs text-zinc-600">
              By joining, you agree to receive infrequent product updates.
              Unsubscribe anytime. Questions?{" "}
              <a
                href="mailto:mad@multiagentdebates.com"
                className="text-zinc-500 underline decoration-white/10 underline-offset-2 transition hover:text-zinc-300"
              >
                mad@multiagentdebates.com
              </a>
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
