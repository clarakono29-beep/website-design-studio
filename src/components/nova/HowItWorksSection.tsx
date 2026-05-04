import { useState } from "react";
import { Search, UserCheck, CreditCard, Smartphone, GraduationCap, Briefcase } from "lucide-react";
import { useInView } from "@/hooks/useInView";

const flows = {
  employer: [
    {
      icon: UserCheck,
      step: "01",
      title: "Register & Verify",
      desc: "Create a free employer account. Upload your ID or company registration. Verification takes under 2 hours.",
    },
    {
      icon: Search,
      step: "02",
      title: "Browse Verified Profiles",
      desc: "Filter by province, specialisation (cleaning, childcare, cooking), availability, certification level, and language.",
    },
    {
      icon: Smartphone,
      step: "03",
      title: "Interview & Select",
      desc: "Message candidates directly via the platform, schedule interviews, and review Nova Rise certification records.",
    },
    {
      icon: CreditCard,
      step: "04",
      title: "Hire with Escrow Protection",
      desc: "Pay the placement fee into escrow. Funds release only after your 7-day satisfaction window. Zero-risk hiring.",
    },
  ],
  worker: [
    {
      icon: GraduationCap,
      step: "01",
      title: "Complete the Academy",
      desc: "Enrol in our 10-week Nova Rise Maid Training Academy and earn your nationally recognised Level 2 certificate.",
    },
    {
      icon: Smartphone,
      step: "02",
      title: "Create Your Free Profile",
      desc: "Build a verified profile with your certifications, skills, work history, and availability. Works on any phone — even via USSD *263*NOVA#.",
    },
    {
      icon: Search,
      step: "03",
      title: "Get Matched",
      desc: "Receive real-time job alerts via app, SMS, or WhatsApp. GPS-based matching shows you the closest opportunities.",
    },
    {
      icon: Briefcase,
      step: "04",
      title: "Start Working",
      desc: "Accept an offer, sign a labour-compliant contract template, and begin work. Your salary is protected from day one.",
    },
  ],
};

export default function HowItWorksSection() {
  const [tab, setTab] = useState<"employer" | "worker">("employer");
  const { ref, inView } = useInView(0.1);
  const steps = flows[tab];

  return (
    <section id="how-it-works" style={{ background: "var(--navy)" }} className="grain-overlay">
      <div className="container py-20 lg:py-28 relative z-10" ref={ref}>
        <div className="flex items-center gap-3 mb-4">
          <span className="gold-rule" />
          <span style={{ fontFamily: "var(--font-sans)", fontWeight: 500, fontSize: "0.72rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--gold)" }}>
            How It Works
          </span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem", marginBottom: "3rem" }}>
          <h2 className="font-display" style={{ fontWeight: 700, fontSize: "clamp(2rem, 4vw, 3rem)", color: "var(--warm)", lineHeight: 1.2 }}>
            Simple Steps to<br />
            <em style={{ color: "var(--gold)" }}>Transform Your Home</em>
          </h2>

          {/* Tab switcher */}
          <div style={{ display: "inline-flex", background: "color-mix(in oklab, var(--warm) 6%, transparent)", border: "1px solid color-mix(in oklab, var(--gold) 20%, transparent)", borderRadius: 4, padding: 4 }}>
            {(["employer", "worker"] as const).map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                style={{
                  padding: "0.6rem 1.5rem",
                  fontFamily: "var(--font-sans)",
                  fontWeight: 600,
                  fontSize: "0.8rem",
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  border: "none",
                  cursor: "pointer",
                  borderRadius: 2,
                  transition: "all 0.25s ease",
                  background: tab === t ? "var(--gold)" : "transparent",
                  color: tab === t ? "var(--navy)" : "color-mix(in oklab, var(--warm) 60%, transparent)",
                }}
              >
                {t === "employer" ? "For Employers" : "For Workers"}
              </button>
            ))}
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "0" }}>
          {steps.map(({ icon: Icon, step, title, desc }, i) => (
            <div
              key={step}
              style={{
                padding: "2rem 1.75rem",
                position: "relative",
                borderLeft: i === 0 ? "none" : "1px solid color-mix(in oklab, var(--gold) 12%, transparent)",
                opacity: inView ? 1 : 0,
                transform: inView ? "translateY(0)" : "translateY(28px)",
                transition: `all 0.6s ease ${i * 0.12}s`,
              }}
            >
              {/* Step connector line (desktop) */}
              {i < steps.length - 1 && (
                <div
                  style={{
                    position: "absolute",
                    top: "2.75rem",
                    right: 0,
                    width: 1,
                    height: 20,
                    background: "color-mix(in oklab, var(--gold) 30%, transparent)",
                    display: "none", // hidden; border handles it
                  }}
                />
              )}

              <div style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "3.5rem", color: "color-mix(in oklab, var(--gold) 12%, transparent)", lineHeight: 1, marginBottom: "1rem", userSelect: "none" }}>
                {step}
              </div>

              <div style={{ width: 44, height: 44, borderRadius: 4, background: "color-mix(in oklab, var(--gold) 14%, transparent)", border: "1px solid color-mix(in oklab, var(--gold) 28%, transparent)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "1.25rem" }}>
                <Icon size={20} style={{ color: "var(--gold)" }} />
              </div>

              <h3 className="font-display" style={{ fontWeight: 600, fontSize: "1.15rem", color: "var(--warm)", marginBottom: "0.6rem", lineHeight: 1.3 }}>
                {title}
              </h3>
              <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.84rem", color: "color-mix(in oklab, var(--warm) 65%, transparent)", lineHeight: 1.65 }}>
                {desc}
              </p>
            </div>
          ))}
        </div>

        <div style={{ marginTop: "3rem", paddingTop: "2rem", borderTop: "1px solid color-mix(in oklab, var(--gold) 14%, transparent)", display: "flex", gap: "1rem", flexWrap: "wrap" }}>
          <button className="btn-gold" onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}>
            {tab === "employer" ? "Register as Employer" : "Start Your Application"}
          </button>
          <button className="btn-white-outline" onClick={() => document.querySelector("#platform")?.scrollIntoView({ behavior: "smooth" })}>
            View Platform Details
          </button>
        </div>
      </div>
    </section>
  );
}
