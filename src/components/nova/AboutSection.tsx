import { Eye, Target, Heart, Zap, Users, Gem } from "lucide-react";
import { useInView } from "@/hooks/useInView";

const values = [
  { icon: Gem, title: "Integrity", desc: "Transparent pricing, honest dealings, no hidden charges." },
  { icon: Zap, title: "Excellence", desc: "Service standards benchmarked against SADC best practices." },
  { icon: Heart, title: "Dignity", desc: "Treating every domestic worker as a skilled professional." },
  { icon: Target, title: "Innovation", desc: "Leveraging digital tools in a traditionally offline industry." },
  { icon: Users, title: "Community", desc: "Reinvesting in local Zimbabwean communities through employment." },
];

export default function AboutSection() {
  const { ref, inView } = useInView();
  return (
    <section id="about" className="grain-overlay" style={{ background: "var(--navy)" }}>
      <div className="container py-20 lg:py-28 relative z-10" ref={ref}>
        <div className="flex items-center gap-3 mb-4">
          <span className="gold-rule" />
          <span style={{ fontFamily: "var(--font-sans)", fontWeight: 500, fontSize: "0.72rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--gold)" }}>About Nova Rise</span>
        </div>
        <div className="grid lg:grid-cols-2 gap-16 mb-16">
          <div>
            <h2 className="font-display" style={{ fontWeight: 700, fontSize: "clamp(2rem, 4vw, 3rem)", color: "var(--warm)", lineHeight: 1.2, marginBottom: "1.5rem" }}>
              A Forward-Looking<br />
              <em style={{ color: "var(--gold)" }}>Zimbabwean Company</em>
            </h2>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: "1rem", color: "color-mix(in oklab, var(--warm) 75%, transparent)", lineHeight: 1.8, marginBottom: "1.5rem" }}>
              Nova Rise Private Limited is incorporated under the Companies and Other Business Entities Act [Chapter 24:31]. We operate across three synergistic business verticals — professional deep cleaning, a structured Maid Training Academy, and an innovative online Domestic Worker Placement Platform.
            </p>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: "1rem", color: "color-mix(in oklab, var(--warm) 75%, transparent)", lineHeight: 1.8 }}>
              Zimbabwe's cleaning and domestic services sector is largely informal, fragmented, and underregulated. Nova Rise identifies this as a prime opportunity to introduce internationally benchmarked standards, transparent pricing, and digital technology — positioning itself as the most trusted brand in Zimbabwe's domestic services industry.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {[
              { icon: Eye, title: "Vision", text: "To be Zimbabwe's most trusted and innovative professional cleaning and domestic services company, transforming lives through dignified employment, world-class training, and superior service delivery.", delay: 0.2 },
              { icon: Target, title: "Mission", text: "To deliver impeccable, eco-friendly cleaning solutions; to empower domestic workers with certified skills; and to harness technology to create a safe, efficient hiring marketplace across Zimbabwe.", delay: 0.35 },
            ].map(({ icon: Icon, title, text, delay }) => (
              <div key={title} className="p-6"
                style={{
                  background: "color-mix(in oklab, var(--warm) 5%, transparent)",
                  border: "1px solid color-mix(in oklab, var(--gold) 22%, transparent)",
                  borderRadius: 2,
                  opacity: inView ? 1 : 0, transform: inView ? "translateX(0)" : "translateX(30px)",
                  transition: `all 0.7s ease ${delay}s`,
                }}>
                <div className="flex items-center gap-3 mb-3">
                  <Icon size={18} style={{ color: "var(--gold)" }} />
                  <span style={{ fontFamily: "var(--font-sans)", fontWeight: 600, fontSize: "0.72rem", letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--gold)" }}>{title}</span>
                </div>
                <p className="font-display" style={{ fontStyle: "italic", fontSize: "1rem", color: "var(--warm)", lineHeight: 1.6 }}>"{text}"</p>
              </div>
            ))}
          </div>
        </div>

        <div style={{ borderTop: "1px solid color-mix(in oklab, var(--gold) 22%, transparent)", paddingTop: "3rem" }}>
          <h3 className="font-display" style={{ fontWeight: 600, fontSize: "1.5rem", color: "var(--warm)", marginBottom: "1.5rem" }}>Our Core Values</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {values.map(({ icon: Icon, title, desc }, i) => (
              <div key={title} className="p-5 text-center" style={{
                background: "color-mix(in oklab, var(--warm) 5%, transparent)",
                border: "1px solid color-mix(in oklab, var(--gold) 12%, transparent)",
                borderRadius: 2,
                opacity: inView ? 1 : 0, transform: inView ? "translateY(0)" : "translateY(20px)",
                transition: `all 0.6s ease ${0.4 + i * 0.08}s`,
              }}>
                <div className="w-10 h-10 flex items-center justify-center mx-auto mb-3" style={{ background: "color-mix(in oklab, var(--gold) 18%, transparent)", borderRadius: "50%" }}>
                  <Icon size={18} style={{ color: "var(--gold)" }} />
                </div>
                <h4 className="font-display" style={{ fontWeight: 600, fontSize: "1rem", color: "var(--warm)", marginBottom: "0.5rem" }}>{title}</h4>
                <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.78rem", color: "color-mix(in oklab, var(--warm) 60%, transparent)", lineHeight: 1.5 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
