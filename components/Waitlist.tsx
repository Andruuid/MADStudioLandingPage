"use client";

import { useState } from "react";

type Status = "idle" | "loading" | "success" | "error";

const FORMSPREE_ENDPOINT =
  process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT ?? "";

export default function Waitlist() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(null);

    if (!email || !email.includes("@")) {
      setStatus("error");
      setError("Please enter a valid email address.");
      return;
    }

    if (!FORMSPREE_ENDPOINT) {
      setStatus("success");
      setEmail("");
      return;
    }

    try {
      setStatus("loading");
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, source: "multiagentdebates.com" }),
      });

      if (!res.ok) {
        throw new Error(`Submission failed (${res.status})`);
      }

      setStatus("success");
      setEmail("");
    } catch (err) {
      setStatus("error");
      setError(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again."
      );
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
          Be among the first to deploy{" "}
          <span className="bg-gradient-to-r from-accent via-accent-glow to-accent-cyan bg-clip-text text-transparent">
            a real debate engine.
          </span>
        </h2>
        <p className="max-w-xl text-balance text-zinc-400 md:text-lg">
          Closed beta is rolling out now. Join the waitlist for free early
          access — no card, no commitment, no spam.
        </p>

        <form
          onSubmit={handleSubmit}
          className="mt-4 flex w-full max-w-xl flex-col gap-3 sm:flex-row"
        >
          <label htmlFor="waitlist-email" className="sr-only">
            Email address
          </label>
          <input
            id="waitlist-email"
            type="email"
            inputMode="email"
            autoComplete="email"
            placeholder="you@domain.com"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (status === "error") {
                setStatus("idle");
                setError(null);
              }
            }}
            disabled={status === "loading" || status === "success"}
            className="flex-1 rounded-md border border-white/10 bg-ink-900/80 px-4 py-3 text-sm text-white placeholder:text-zinc-500 focus:border-accent/60 focus:outline-none focus:ring-2 focus:ring-accent/30 disabled:opacity-60"
            aria-describedby="waitlist-status"
            required
          />
          <button
            type="submit"
            disabled={status === "loading" || status === "success"}
            className="group inline-flex items-center justify-center gap-2 rounded-md bg-gradient-to-r from-accent to-accent-glow px-6 py-3 text-sm font-semibold text-white shadow-[0_0_40px_-10px_rgba(124,92,255,0.8)] transition hover:shadow-[0_0_60px_-8px_rgba(124,92,255,1)] disabled:cursor-not-allowed disabled:opacity-70"
          >
            {status === "loading"
              ? "Submitting…"
              : status === "success"
                ? "You're on the list"
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
        </form>

        <p
          id="waitlist-status"
          className="min-h-[1.25rem] text-sm"
          aria-live="polite"
        >
          {status === "success" && (
            <span className="text-accent-cyan">
              Thanks — we'll be in touch when your invite is ready.
            </span>
          )}
          {status === "error" && error && (
            <span className="text-rose-400">{error}</span>
          )}
        </p>

        <p className="text-xs text-zinc-600">
          By joining, you agree to receive infrequent product updates. Unsubscribe anytime.
        </p>
      </div>
    </section>
  );
}
