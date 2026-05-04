import { useInView } from "@/hooks/useInView";

const faqs = [
  {
    cat: "Cleaning Services",
    items: [
      {
        q: "Do you bring your own equipment and chemicals?",
        a: "Yes. Every Nova Rise team arrives with hospital-grade equipment and EMA-compliant, eco-friendly biodegradable chemicals. You do not need to supply anything. Our chemicals are safe for children, pets, and sensitive surfaces.",
      },
      {
        q: "Are your cleaning staff uniformed and ID-badged?",
        a: "All Nova Rise field staff wear branded uniforms and carry photo ID badges. You will always know exactly who is entering your premises. Staff are also background-checked via ZRP clearance.",
      },
      {
        q: "Can I request the same cleaning team each time?",
        a: "Yes, for ongoing contracts we assign dedicated teams wherever possible. Continuity means your team learns your specific requirements and preferred standards over time.",
      },
      {
        q: "What if I'm not satisfied with the clean?",
        a: "We offer a 24-hour satisfaction re-service guarantee. If any area does not meet your expectations, contact us within 24 hours and we will return at no extra charge. No arguments, no forms.",
      },
      {
        q: "Do you work weekends and public holidays?",
        a: "Yes. We understand that schools, events, and businesses often need cleaning outside of standard hours. Weekend and holiday bookings are available — rates may vary. Contact us for scheduling.",
      },
    ],
  },
  {
    cat: "Academy Enrolment",
    items: [
      {
        q: "Do I need any prior qualifications to enrol?",
        a: "No formal qualifications are required. All you need is a willingness to learn, basic literacy in English or Shona, and a commitment to the full 10-week programme. We welcome applicants from all provinces.",
      },
      {
        q: "Is the Nova Rise certificate recognised nationally?",
        a: "Yes. The Nova Rise Domestic Professional Certificate (Level 2) is registered with the Ministry of Higher and Tertiary Education and linked to ZIMDEF. It is recognised by employers across Zimbabwe.",
      },
      {
        q: "Will I get a job after completing the Academy?",
        a: "Graduates are immediately eligible for listing on the Nova Rise Digital Placement Platform, giving them direct access to verified employers across all ten provinces. While we cannot guarantee placement, our job-matching rate for graduates is very high.",
      },
      {
        q: "Can my employer pay for my training?",
        a: "Yes. We offer an Employer-Sponsored tier specifically for households and companies wishing to upskill their existing domestic workers. Contact us for bulk or corporate enrolment rates.",
      },
    ],
  },
  {
    cat: "Platform & Hiring",
    items: [
      {
        q: "How are domestic workers verified on the platform?",
        a: "Every listed worker must hold a valid Nova Rise Level 2 Certificate, have completed ZRP background clearance, and have had their identity verified by our team. Only then is their profile made visible to employers.",
      },
      {
        q: "What is the escrow payment system?",
        a: "When you hire via the platform, the placement fee is held in escrow — not released to Nova Rise — until your 7-day satisfaction window expires. If you are unhappy within 7 days, you receive a free replacement. This protects you completely.",
      },
      {
        q: "What if I don't have internet access?",
        a: "We designed the platform for the Zimbabwean context. Workers and employers with feature phones can access core functionality via USSD (*263*NOVA#) — no internet data required.",
      },
      {
        q: "Do you operate outside of Harare?",
        a: "Yes. The platform covers all ten provinces of Zimbabwe. Our cleaning services are currently concentrated in Harare, with Bulawayo expansion planned for Year 2. Platform placement operates nationwide from launch.",
      },
    ],
  },
];

export default function FAQSection() {
  const { ref, inView } = useInView(0.1);

  return (
    <section id="faq" style={{ background: "var(--warm)" }}>
      <div className="container py-20 lg:py-28" ref={ref}>
        <div className="flex items-center gap-3 mb-4">
          <span className="gold-rule" />
          <span style={{ fontFamily: "var(--font-sans)", fontWeight: 500, fontSize: "0.72rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--gold)" }}>
            Frequently Asked Questions
          </span>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "0", marginBottom: "2rem" }}>
          <h2 className="font-display" style={{ fontWeight: 700, fontSize: "clamp(2rem, 4vw, 3rem)", color: "var(--navy)", lineHeight: 1.2 }}>
            Everything You Need<br />
            <em style={{ color: "var(--gold)" }}>to Know</em>
          </h2>
        </div>

        <div style={{ display: "grid", gap: "3rem", opacity: inView ? 1 : 0, transition: "opacity 0.7s ease" }}>
          {faqs.map((group) => (
            <div key={group.cat}>
              <h3
                style={{
                  fontFamily: "var(--font-sans)",
                  fontWeight: 700,
                  fontSize: "0.68rem",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "var(--gold)",
                  marginBottom: "1rem",
                  paddingBottom: "0.75rem",
                  borderBottom: "1px solid var(--warm-line)",
                }}
              >
                {group.cat}
              </h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
                {group.items.map((item, i) => (
                  <details
                    key={i}
                    className="faq-item"
                    style={{
                      borderBottom: "1px solid var(--warm-line)",
                    }}
                  >
                    <summary
                      style={{
                        listStyle: "none",
                        cursor: "pointer",
                        padding: "1.25rem 0",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        gap: "1rem",
                        fontFamily: "var(--font-sans)",
                        fontWeight: 600,
                        fontSize: "0.95rem",
                        color: "var(--navy)",
                        userSelect: "none",
                      }}
                    >
                      <span>{item.q}</span>
                      <span className="faq-chevron" style={{ flexShrink: 0, width: 20, height: 20, color: "var(--gold)" }}>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="6 9 12 15 18 9" />
                        </svg>
                      </span>
                    </summary>
                    <div
                      style={{
                        paddingBottom: "1.25rem",
                        fontFamily: "var(--font-sans)",
                        fontSize: "0.88rem",
                        color: "color-mix(in oklab, var(--navy) 65%, transparent)",
                        lineHeight: 1.75,
                        maxWidth: "72ch",
                      }}
                    >
                      {item.a}
                    </div>
                  </details>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: "3rem", textAlign: "center" }}>
          <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.9rem", color: "color-mix(in oklab, var(--navy) 55%, transparent)", marginBottom: "1.25rem" }}>
            Still have questions? Our team responds within 24 hours.
          </p>
          <button className="btn-gold" onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}>
            Ask Us Anything
          </button>
        </div>
      </div>

      <style>{`
        .faq-item summary::-webkit-details-marker { display: none; }
        .faq-item[open] .faq-chevron { transform: rotate(180deg); }
        .faq-chevron { transition: transform 0.3s ease; }
        .faq-item summary:hover { color: var(--gold) !important; }
      `}</style>
    </section>
  );
}
