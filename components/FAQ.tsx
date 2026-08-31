import Link from "next/link";
import { faqs } from "@/lib/faq";

function FaqLink({ href, label }: { href: string; label: string }) {
  const className =
    "text-accent-glow underline decoration-accent/30 underline-offset-2 transition hover:text-white";

  if (href.startsWith("/")) {
    return (
      <Link href={href} className={className}>
        {label}
      </Link>
    );
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      {label}
    </a>
  );
}

export default function FAQ() {
  return (
    <section
      id="faq"
      className="relative border-t border-white/5 bg-ink-900/40 py-28 md:py-36"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col gap-4 md:max-w-2xl">
          <span className="font-mono text-[11px] uppercase tracking-[0.24em] text-accent">
            Frequently asked
          </span>
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-white md:text-5xl">
            Multi-agent debate, demystified.
          </h2>
          <p className="text-balance text-zinc-400 md:text-lg">
            Quick answers to the questions teams ask before they run their
            first Delibora session.
          </p>
        </div>

        <div className="mt-14 divide-y divide-white/5 overflow-hidden rounded-xl border border-white/10 bg-ink-900/60">
          {faqs.map((faq, idx) => (
            <details
              key={faq.question}
              className="group"
              open={idx === 0}
            >
              <summary className="flex cursor-pointer items-start justify-between gap-6 px-6 py-5 text-left text-base font-semibold text-white transition hover:bg-white/[0.02] md:text-lg [&::-webkit-details-marker]:hidden">
                <span className="flex items-start gap-4">
                  <span className="mt-1 font-mono text-[10px] tracking-wider text-zinc-600">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <span>{faq.question}</span>
                </span>
                <span
                  aria-hidden
                  className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-white/10 text-xs text-zinc-400 transition group-open:rotate-45 group-open:border-accent/60 group-open:text-accent-glow"
                >
                  +
                </span>
              </summary>
              <div className="px-6 pb-6 pl-[3.75rem] text-sm leading-relaxed text-zinc-400 md:text-base">
                <p>{faq.answer}</p>
                {"links" in faq && faq.links && faq.links.length > 0 && (
                  <ul className="mt-3 space-y-2">
                    {faq.links.map((link) => (
                      <li key={link.href}>
                        <FaqLink href={link.href} label={link.label} />
                      </li>
                    ))}
                  </ul>
                )}
                {"links" in faq && faq.links && (
                  <p className="mt-3">
                    <a
                      href="#science"
                      className="text-xs font-medium text-zinc-500 underline decoration-white/10 underline-offset-2 transition hover:text-accent-glow"
                    >
                      See all 11 foundational papers ↓
                    </a>
                  </p>
                )}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
