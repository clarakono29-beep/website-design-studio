import { useEffect, useState } from "react";
import { ArrowRight, Shield, Award, Users } from "lucide-react";
import heroImg from "@/assets/nova-hero.jpg";

const badges = [
  { icon: Shield, text: "Insured & Bonded" },
  { icon: Award, text: "Certified Professionals" },
  { icon: Users, text: "350+ Trained Workers" },
];

export default function HeroSection() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 80);
    return () => clearTimeout(t);
  }, []);
  const go = (id: string) => document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden grain-overlay" style={{ background: "var(--navy)" }}>
      <div
        className="absolute inset-y-0 right-0 w-full lg:w-3/5"
        style={{ backgroundImage: `url(${heroImg})`, backgroundSize: "cover", backgroundPosition: "center" }}
      >
        <div className="absolute inset-0" style={{ background: "linear-gradient(90deg, var(--navy) 0%, var(--navy) 30%, color-mix(in oklab, var(--navy) 85%, transparent) 55%, color-mix(in oklab, var(--navy) 30%, transparent) 100%)" }} />
        <div className="absolute inset-x-0 bottom-0 h-32" style={{ background: "linear-gradient(to top, var(--navy), transparent)" }} />
      </div>

      <div className="container relative z-10 pt-24 pb-16 lg:pt-32 lg:pb-24">
        <div className="max-w-xl lg:max-w-2xl">
          <div className="flex items-center gap-3 mb-6" style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(20px)", transition: "all 0.7s ease 0.1s" }}>
            <span className="gold-rule" />
            <span style={{ fontFamily: "var(--font-sans)", fontWeight: 500, fontSize: "0.72rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--gold)" }}>
              Zimbabwe's Premier Cleaning &amp; Placement Company
            </span>
          </div>

          <h1
            className="font-display"
            style={{
              fontWeight: 800, fontSize: "clamp(2.5rem, 5vw, 4.5rem)", lineHeight: 1.05, color: "var(--warm)", marginBottom: "1.5rem",
              opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(30px)", transition: "all 0.7s ease 0.2s",
            }}
          >
            Raising Standards.<br />
            <em style={{ color: "var(--gold)", fontStyle: "italic" }}>Transforming Lives.</em>
          </h1>

          <p style={{
            fontFamily: "var(--font-sans)", fontSize: "1.1rem", lineHeight: 1.7, color: "color-mix(in oklab, var(--warm) 80%, transparent)",
            marginBottom: "2.5rem", maxWidth: "480px",
            opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(30px)", transition: "all 0.7s ease 0.35s",
          }}>
            Professional deep cleaning services, a certified Maid Training Academy, and Zimbabwe's first digital domestic worker placement platform — all under one trusted brand.
          </p>

          <div className="flex flex-wrap gap-4 mb-12" style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(30px)", transition: "all 0.7s ease 0.5s" }}>
            <button className="btn-gold" onClick={() => go("#contact")}>
              Get a Free Quote <ArrowRight size={16} />
            </button>
            <button className="btn-white-outline" onClick={() => go("#platform")}>Find a Maid</button>
          </div>

          <div className="flex flex-wrap gap-6" style={{ opacity: visible ? 1 : 0, transition: "opacity 0.7s ease 0.65s" }}>
            {badges.map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-2">
                <Icon size={16} style={{ color: "var(--gold)" }} />
                <span style={{ fontFamily: "var(--font-sans)", fontSize: "0.8rem", color: "color-mix(in oklab, var(--warm) 70%, transparent)", fontWeight: 500 }}>{text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2" style={{ opacity: visible ? 0.6 : 0, transition: "opacity 1s ease 1s" }}>
        <span style={{ fontFamily: "var(--font-sans)", fontSize: "0.65rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--gold)" }}>Scroll</span>
        <div className="w-px h-10" style={{ background: "linear-gradient(to bottom, var(--gold), transparent)", animation: "fadeUp 1.5s ease infinite" }} />
      </div>
    </section>
  );
}
