import { ImageResponse } from "next/og";

export const size = {
  width: 32,
  height: 32,
};
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background:
            "linear-gradient(135deg, #020b1a 0%, #041226 50%, #0a3152 100%)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "6px",
        }}
      >
        <svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="6" cy="7" r="2" fill="#675cff" />
          <circle cx="18" cy="7" r="2" fill="#063b5b" />
          <circle cx="12" cy="18" r="2" fill="#063b5b" />
          <path d="m7.7 8.1 3.2 7.8M16.3 8.1l-3.2 7.8M8 7h8" />
        </svg>
      </div>
    ),
    { ...size }
  );
}
