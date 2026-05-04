const clients = [
  { name: "Harare City Council", type: "Government" },
  { name: "St. John's College", type: "Education" },
  { name: "Parirenyatwa Group", type: "Healthcare" },
  { name: "Rainbow Tourism Group", type: "Hospitality" },
  { name: "UNICEF Zimbabwe", type: "NGO" },
  { name: "Old Mutual Zimbabwe", type: "Finance" },
  { name: "Econet Wireless", type: "Telecoms" },
  { name: "Meikles Hotel", type: "Hospitality" },
  { name: "Ministry of Education", type: "Government" },
  { name: "Barclays Zimbabwe", type: "Finance" },
];

// Duplicate for seamless loop
const items = [...clients, ...clients];

export default function ClientLogoBar() {
  return (
    <section style={{ background: "var(--warm)", borderTop: "1px solid var(--warm-line)", borderBottom: "1px solid var(--warm-line)", overflow: "hidden", padding: "2rem 0" }}>
      <div style={{ textAlign: "center", fontFamily: "var(--font-sans)", fontSize: "0.65rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "color-mix(in oklab, var(--navy) 35%, transparent)", marginBottom: "1.5rem" }}>
        Trusted by leading organisations across Zimbabwe
      </div>

      <div style={{ position: "relative" }}>
        {/* Fade edges */}
        <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: 120, zIndex: 2, background: "linear-gradient(to right, var(--warm), transparent)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", right: 0, top: 0, bottom: 0, width: 120, zIndex: 2, background: "linear-gradient(to left, var(--warm), transparent)", pointerEvents: "none" }} />

        <div className="logo-ticker">
          {items.map((client, i) => (
            <div
              key={i}
              style={{
                display: "inline-flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "0.3rem",
                padding: "0.6rem 2rem",
                borderRight: "1px solid var(--warm-line)",
                flexShrink: 0,
              }}
            >
              <span style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "0.95rem", color: "color-mix(in oklab, var(--navy) 55%, transparent)", whiteSpace: "nowrap", letterSpacing: "-0.01em" }}>
                {client.name}
              </span>
              <span style={{ fontFamily: "var(--font-sans)", fontSize: "0.6rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--gold)", fontWeight: 500 }}>
                {client.type}
              </span>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .logo-ticker {
          display: flex;
          animation: ticker-scroll 38s linear infinite;
          width: max-content;
        }
        .logo-ticker:hover { animation-play-state: paused; }
        @keyframes ticker-scroll {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}
