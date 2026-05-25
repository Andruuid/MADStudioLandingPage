const endpoints = [
  { method: "POST", path: "/v1/sessions" },
  { method: "POST", path: "/v1/sessions/{id}/start" },
  { method: "POST", path: "/v1/sessions/{id}/intervene" },
  { method: "GET", path: "/v1/sessions/{id}/turns" },
  { method: "GET", path: "/v1/sessions/{id}/transcript" },
  { method: "POST", path: "/v1/teams/{a}/vs/{b}" },
];

const mcpTools = [
  "mad.session.create",
  "mad.session.start",
  "mad.session.intervene",
  "mad.session.transcript",
  "mad.team.battle",
  "mad.experiment.run",
];

export default function ApiSection() {
  return (
    <section
      id="api"
      className="relative border-t border-white/5 py-28 md:py-36"
    >
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 mx-auto h-px max-w-6xl bg-gradient-to-r from-transparent via-accent/30 to-transparent"
      />
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col gap-4 md:max-w-2xl">
          <span className="font-mono text-[11px] uppercase tracking-[0.24em] text-accent">
            03 / Programmable
          </span>
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-white md:text-5xl">
            Drive every debate from your own stack.
          </h2>
          <p className="text-balance text-zinc-400 md:text-lg">
            Full REST API and a first-class Model Context Protocol server.
            Spin up sessions, inject human turns, stream transcripts, and run
            entire experiments — programmatically, from anywhere.
          </p>
        </div>

        <div className="mt-14 grid gap-4 lg:grid-cols-2">
          <article className="glow-border relative overflow-hidden rounded-xl border border-white/10 bg-ink-900/70 p-6 md:p-8">
            <div className="flex items-center gap-3">
              <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent-cyan">
                REST API
              </span>
              <span className="h-px flex-1 bg-white/5" />
              <span className="font-mono text-[10px] text-zinc-600">v1</span>
            </div>
            <h3 className="mt-4 text-xl font-semibold text-white md:text-2xl">
              Full REST API
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-zinc-400">
              Every UI action is mirrored as a documented endpoint with stable
              contracts, idempotency keys, and webhook callbacks for long-running
              runs.
            </p>

            <ul className="mt-6 space-y-2 font-mono text-xs">
              {endpoints.map((endpoint) => (
                <li
                  key={endpoint.path}
                  className="flex items-center gap-3 rounded-md border border-white/5 bg-ink-800/60 px-3 py-2"
                >
                  <span className="rounded bg-accent/20 px-1.5 py-0.5 text-[10px] font-semibold tracking-wider text-accent-glow">
                    {endpoint.method}
                  </span>
                  <span className="text-zinc-300">{endpoint.path}</span>
                </li>
              ))}
            </ul>
          </article>

          <article className="glow-border relative overflow-hidden rounded-xl border border-white/10 bg-ink-900/70 p-6 md:p-8">
            <div className="flex items-center gap-3">
              <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent-cyan">
                MCP server
              </span>
              <span className="h-px flex-1 bg-white/5" />
              <span className="font-mono text-[10px] text-zinc-600">stdio · http</span>
            </div>
            <h3 className="mt-4 text-xl font-semibold text-white md:text-2xl">
              Model Context Protocol native
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-zinc-400">
              Drop MAD Studio into Claude Desktop, Cursor, or any MCP-compatible
              client. Orchestrate full debates as a callable tool — your agent
              of agents.
            </p>

            <ul className="mt-6 grid grid-cols-1 gap-2 font-mono text-xs sm:grid-cols-2">
              {mcpTools.map((tool) => (
                <li
                  key={tool}
                  className="flex items-center gap-2 rounded-md border border-white/5 bg-ink-800/60 px-3 py-2 text-zinc-300"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-accent-cyan shadow-[0_0_8px_1px_rgba(34,211,238,0.7)]" />
                  {tool}
                </li>
              ))}
            </ul>

            <pre className="mt-6 overflow-x-auto rounded-md border border-white/5 bg-ink-950/80 p-4 font-mono text-[11px] leading-relaxed text-zinc-400">
{`{
  "mcpServers": {
    "mad-studio": {
      "command": "npx",
      "args": ["-y", "@mad-studio/mcp"]
    }
  }
}`}
            </pre>
          </article>
        </div>
      </div>
    </section>
  );
}
