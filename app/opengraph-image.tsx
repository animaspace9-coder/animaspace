import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Anima Space — Psychological Consulting & Counselling Centre";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          display: "flex",
          flexDirection: "column",
          background: "#F6F4EB",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Background decorative circles */}
        <div
          style={{
            position: "absolute",
            top: "-120px",
            right: "-120px",
            width: "480px",
            height: "480px",
            borderRadius: "50%",
            background: "#C5E0F2",
            opacity: 0.5,
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-80px",
            left: "-80px",
            width: "340px",
            height: "340px",
            borderRadius: "50%",
            background: "#FAD1CB",
            opacity: 0.4,
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "200px",
            right: "80px",
            width: "160px",
            height: "160px",
            borderRadius: "50%",
            background: "#A67D76",
            opacity: 0.15,
          }}
        />

        {/* Main content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            height: "100%",
            padding: "80px 100px",
            position: "relative",
            zIndex: 1,
          }}
        >
          {/* Badge */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "32px",
            }}
          >
            <div
              style={{
                background: "#2D3B2D",
                color: "#F6F4EB",
                fontSize: "14px",
                fontWeight: 600,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                padding: "8px 20px",
                borderRadius: "100px",
              }}
            >
              Well-being Centre
            </div>
          </div>

          {/* Logo / Brand name */}
          <div
            style={{
              display: "flex",
              alignItems: "baseline",
              gap: "12px",
              marginBottom: "24px",
            }}
          >
            <span
              style={{
                fontSize: "72px",
                fontWeight: 800,
                color: "#0A1C33",
                lineHeight: 1,
                letterSpacing: "-0.02em",
              }}
            >
              Anima
            </span>
            <span
              style={{
                fontSize: "72px",
                fontWeight: 800,
                color: "#A67D76",
                lineHeight: 1,
                letterSpacing: "-0.02em",
              }}
            >
              Space
            </span>
          </div>

          {/* Tagline */}
          <div
            style={{
              fontSize: "26px",
              color: "#2F3E4D",
              lineHeight: 1.4,
              maxWidth: "620px",
              marginBottom: "48px",
              fontWeight: 400,
            }}
          >
            Psychological Consulting & Counselling Centre
          </div>

          {/* Services row */}
          <div
            style={{
              display: "flex",
              gap: "16px",
              flexWrap: "wrap",
            }}
          >
            {[
              "Child Counselling",
              "Adolescent Therapy",
              "Career Guidance",
              "Coaching",
            ].map((service) => (
              <div
                key={service}
                style={{
                  background: "rgba(255,255,255,0.7)",
                  border: "1.5px solid rgba(10,28,51,0.12)",
                  color: "#0A1C33",
                  fontSize: "15px",
                  fontWeight: 500,
                  padding: "10px 20px",
                  borderRadius: "100px",
                }}
              >
                {service}
              </div>
            ))}
          </div>
        </div>

        {/* Right side — domain + trust */}
        <div
          style={{
            position: "absolute",
            bottom: "48px",
            right: "80px",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
            gap: "8px",
          }}
        >
          <div
            style={{
              fontSize: "18px",
              fontWeight: 600,
              color: "#A67D76",
              letterSpacing: "0.01em",
            }}
          >
            www.animaspace.net
          </div>
          <div
            style={{
              fontSize: "14px",
              color: "#2F3E4D",
              opacity: 0.6,
            }}
          >
            A safe space to understand, heal & grow
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}

