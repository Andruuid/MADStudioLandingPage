import { ImageResponse } from "next/og";

export const runtime = "edge";

export const size = {
  width: 180,
  height: 180,
};
export const contentType = "image/png";

export default function AppleIcon() {
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
          borderRadius: "32px",
        }}
      >
        <div
          style={{
            color: "white",
            display: "flex",
            fontSize: "118px",
            fontWeight: 500,
            lineHeight: 1,
            position: "relative",
          }}
        >
          D
          <span
            style={{
              position: "absolute",
              left: "-7px",
              top: "54px",
              width: "24px",
              height: "24px",
              borderRadius: "50%",
              background: "#675cff",
            }}
          />
        </div>
      </div>
    ),
    { ...size }
  );
}
