import { Quote } from "lucide-react";
import { useInView } from "@/hooks/useInView";

const testimonials = [
  {
    name: "Tendai Moyo",
    role: "Operations Manager",
    company: "St. John's College, Harare",
    category: "cleaning",
    rating: 5,
    text: "Nova Rise transformed our school facilities. Their team arrived on time, in uniform, with ID badges — a first in our experience with local cleaning companies. The hospital-grade equipment removed stains we thought were permanent. We've since signed a monthly retainer.",
    initials: "TM",
    color: "#1A2F5A",
  },
  {
    name: "Ruvimbo Chikwanda",
    role: "HR Director",
    company: "Rainbow Tourism Group",
    category: "cleaning",
    rating: 5,
    text: "We service 3 hotels. After struggling with unreliable cleaning contractors for years, Nova Rise delivered consistency, professionalism, and actual accountability. Their escrow-based pricing model means we only pay when satisfied. Genuinely game-changing for our industry.",
    initials: "RC",
    color: "#2C5F3F",
  },
  {
    name: "Patience Ncube",
    role: "Homeowner",
    company: "Borrowdale, Harare",
    category: "cleaning",
    rating: 5,
    text: "I booked a post-renovation deep clean and was blown away. Every surface, every corner. They even cleaned inside the oven and the window tracks. I've already recommended Nova Rise to six of my neighbours. Worth every dollar.",
    initials: "PN",
    color: "#7A4A1E",
  },
  {
    name: "Dr. Farai Mupfumira",
    role: "Medical Director",
    company: "Avenues Clinic, Harare",
    category: "cleaning",
    rating: 5,
    text: "Infection-control compliant cleaning is not optional in our line of work. Nova Rise was the first Zimbabwean company that understood our IPC protocols without needing weeks of training. Their staff arrived already knowing the difference between clinical and non-clinical zones.",
    initials: "FM",
    color: "#4A1E7A",
  },
  {
    name: "Blessing Dube",
    role: "Nova Rise Graduate — Cohort 2",
    company: "Now employed in Borrowdale",
    category: "academy",
    rating: 5,
    text: "Before the Academy, I had no formal skills and struggled to find dignified work. Ten weeks later, I have a nationally recognised certificate, a verified profile on the platform, and a job paying three times what I earned before. Nova Rise changed my life.",
    initials: "BD",
    color: "#C9A84C",
    highlight: true,
  },
  {
    name: "Grace Mutasa",
    role: "Employer",
    company: "Platform user since launch",
    category: "platform",
    rating: 5,
    text: "The platform made finding a trained, background-checked domestic worker incredibly simple. I could see Chipo's full profile, her Nova Rise certification, references, and even schedule an interview from the app. The 7-day replacement guarantee gave me confidence to commit.",
    initials: "GM",
    color: "#1A2F5A",
  },
];

function Stars({ n }: { n: number }) {
  return (
    <div style={{ display: "flex", gap: 2 }}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width={14} height={14} viewBox="0 0 24 24" fill={i < n ? "var(--gold)" : "none"} stroke="var(--gold)" strokeWidth={1.5}>
          <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
        </svg>
      ))}
    </div>
  );
}

export default function TestimonialsSection() {
  const { ref, inView } = useInView(0.1);

  return (
    <section id="testimonials" style={{ background: "var(--warm)" }}>
      <div className="container py-20 lg:py-28" ref={ref}>
        <div className="flex items-center gap-3 mb-4">
          <span className="gold-rule" />
          <span style={{ fontFamily: "var(--font-sans)", fontWeight: 500, fontSize: "0.72rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--gold)" }}>
            What Our Clients Say
          </span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 0, marginBottom: "3rem" }}>
          <h2
            className="font-display"
            style={{ fontWeight: 700, fontSize: "clamp(2rem, 4vw, 3rem)", color: "var(--navy)", lineHeight: 1.2 }}
          >
            Trusted by Businesses,<br />
            <em style={{ color: "var(--gold)" }}>Loved by Families</em>
          </h2>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              style={{
                background: t.highlight ? "var(--navy)" : "white",
                border: t.highlight ? "none" : "1px solid var(--warm-line)",
                borderRadius: 4,
                padding: "2rem",
                display: "flex",
                flexDirection: "column",
                gap: "1.25rem",
                position: "relative",
                opacity: inView ? 1 : 0,
                transform: inView ? "translateY(0)" : "translateY(24px)",
                transition: `all 0.6s ease ${i * 0.08}s`,
                boxShadow: t.highlight
                  ? "0 20px 50px -16px color-mix(in oklab, var(--navy) 45%, transparent)"
                  : "0 2px 16px -8px color-mix(in oklab, var(--navy) 10%, transparent)",
              }}
            >
              <Quote
                size={24}
                style={{
                  color: t.highlight ? "var(--gold)" : "color-mix(in oklab, var(--navy) 12%, transparent)",
                  position: "absolute",
                  top: "1.5rem",
                  right: "1.5rem",
                }}
              />

              <Stars n={t.rating} />

              <p
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "0.9rem",
                  lineHeight: 1.7,
                  color: t.highlight
                    ? "color-mix(in oklab, var(--warm) 85%, transparent)"
                    : "color-mix(in oklab, var(--navy) 70%, transparent)",
                  fontStyle: "italic",
                }}
              >
                "{t.text}"
              </p>

              <div style={{ display: "flex", alignItems: "center", gap: "0.85rem", marginTop: "auto", paddingTop: "1rem", borderTop: `1px solid ${t.highlight ? "color-mix(in oklab, var(--gold) 22%, transparent)" : "var(--warm-line)"}` }}>
                <div
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: "50%",
                    background: t.highlight ? "var(--gold)" : `color-mix(in oklab, ${t.color} 12%, transparent)`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-display)",
                      fontWeight: 700,
                      fontSize: "0.85rem",
                      color: t.highlight ? "var(--navy)" : t.color,
                    }}
                  >
                    {t.initials}
                  </span>
                </div>
                <div>
                  <div
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontWeight: 600,
                      fontSize: "0.85rem",
                      color: t.highlight ? "var(--warm)" : "var(--navy)",
                    }}
                  >
                    {t.name}
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: "0.75rem",
                      color: t.highlight ? "var(--gold)" : "color-mix(in oklab, var(--navy) 45%, transparent)",
                    }}
                  >
                    {t.role} · {t.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
