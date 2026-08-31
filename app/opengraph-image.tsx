import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Delibora — Structured Multi-Agent Deliberation";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "linear-gradient(135deg, #020b1a 0%, #041226 55%, #071f3b 100%)",
          padding: "72px",
          fontFamily: "Inter, system-ui, sans-serif",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "-200px",
            right: "-150px",
            width: "600px",
            height: "600px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(45,156,255,0.28) 0%, transparent 70%)",
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-180px",
            left: "-120px",
            width: "500px",
            height: "500px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(0,213,220,0.2) 0%, transparent 70%)",
            display: "flex",
          }}
        />

        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <div
            style={{
              width: "56px",
              height: "56px",
              borderRadius: "12px",
              background:
                "linear-gradient(135deg, rgba(124,92,255,0.5) 0%, rgba(34,211,238,0.3) 100%)",
              border: "1px solid rgba(255,255,255,0.15)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <svg
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="6" cy="7" r="2" />
              <circle cx="18" cy="7" r="2" />
              <circle cx="12" cy="18" r="2" />
              <path d="M7.5 8.4 L11 16.4" />
              <path d="M16.5 8.4 L13 16.4" />
              <path d="M8 7 L16 7" />
            </svg>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div
              style={{
                fontSize: "28px",
                fontWeight: 700,
                color: "white",
                letterSpacing: "-0.01em",
                lineHeight: 1,
              }}
            >
              Delibora
            </div>
            <div
              style={{
                fontSize: "14px",
                color: "rgba(255,255,255,0.5)",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                marginTop: "4px",
              }}
            >
              Structured deliberation
            </div>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "24px", maxWidth: "900px" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              fontSize: "16px",
              color: "rgba(255,255,255,0.6)",
              fontFamily: "monospace",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
            }}
          >
            <div
              style={{
                width: "8px",
                height: "8px",
                borderRadius: "50%",
                background: "#7c5cff",
                display: "flex",
              }}
            />
            Multi-agent deliberation workspace
          </div>
          <div
            style={{
              fontSize: "76px",
              fontWeight: 700,
              color: "white",
              lineHeight: 1.05,
              letterSpacing: "-0.025em",
              display: "flex",
              flexWrap: "wrap",
            }}
          >
            <span>Put more than one&nbsp;</span>
            <span
              style={{
                background:
                  "linear-gradient(90deg, #7c5cff 0%, #a78bfa 50%, #22d3ee 100%)",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              perspective
            </span>
            <span>&nbsp;on the question.</span>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            color: "rgba(255,255,255,0.55)",
            fontSize: "18px",
          }}
        >
          <div style={{ display: "flex", gap: "32px" }}>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div style={{ fontSize: "12px", letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(255,255,255,0.4)" }}>
                Agents
              </div>
              <div style={{ fontFamily: "monospace", color: "white", fontSize: "20px", marginTop: "4px" }}>
                2–100
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div style={{ fontSize: "12px", letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(255,255,255,0.4)" }}>
                Phases
              </div>
              <div style={{ fontFamily: "monospace", color: "white", fontSize: "20px", marginTop: "4px" }}>
                1–10
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div style={{ fontSize: "12px", letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(255,255,255,0.4)" }}>
                Concurrent
              </div>
              <div style={{ fontFamily: "monospace", color: "white", fontSize: "20px", marginTop: "4px" }}>
                1–100
              </div>
            </div>
          </div>
          <div style={{ fontFamily: "monospace", color: "rgba(255,255,255,0.4)" }}>
            multiagentdebates.com
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
