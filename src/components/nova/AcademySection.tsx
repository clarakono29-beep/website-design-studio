import { CheckCircle, Clock, Award, BookOpen } from "lucide-react";
import academyImg from "@/assets/nova-academy.jpg";
import { useInView } from "@/hooks/useInView";

const modules = [
  "Personal Grooming, Professionalism & Workplace Etiquette",
  "Domestic Cleaning Techniques — Surfaces, Fabrics, Bathrooms & Kitchens",
  "Laundry, Ironing & Garment Care including delicate fabrics",
  "Child Care Fundamentals — ages 0–12, first aid & education support",
  "Elderly Care & Special Needs Assistance",
  "Cooking & Meal Preparation — Zimbabwean and International Cuisine",
  "Kitchen Hygiene, Food Storage & Nutrition",
  "Employer–Employee Relations & Zimbabwean Labour Law rights",
  "Personal Safety, Digital Literacy & Using the Nova Rise Platform",
  "Practical Attachment — supervised placement in a partner household",
];

const tiers = [
  { label: "Self-Sponsored", price: "Contact for price", note: "Full 10-week course" },
  { label: "Employer-Sponsored", price: "Contact for price", note: "Company pays for their maid" },
  { label: "NGO / Government", price: "Contact for price", note: "Min. 20 students per batch" },
  { label: "Single Module", price: "Contact for price", note: "Per module, individual" },
];

export default function AcademySection() {
  const { ref, inView } = useInView();
  return (
    <section id="academy" className="grain-overlay" style={{ background: "var(--navy)" }}>
      <div className="container py-20 lg:py-28 relative z-10" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-16 items-start mb-16">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="gold-rule" />
              <span style={{ fontFamily: "var(--font-sans)", fontWeight: 500, fontSize: "0.72rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--gold)" }}>02 — Maid Training Academy</span>
            </div>
            <h2 className="font-display" style={{ fontWeight: 700, fontSize: "clamp(2rem, 4vw, 3rem)", color: "var(--warm)", lineHeight: 1.2, marginBottom: "1.25rem" }}>
              Professionalising<br />
              <em style={{ color: "var(--gold)" }}>Zimbabwe's Domestic Sector</em>
            </h2>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: "1rem", color: "color-mix(in oklab, var(--warm) 75%, transparent)", lineHeight: 1.75, marginBottom: "2rem" }}>
              The Nova Rise Maid Training Academy is a formal vocational programme registered with the Ministry of Higher and Tertiary Education and ZIMDEF. Graduates receive the nationally recognised <strong style={{ color: "var(--gold)" }}>Nova Rise Domestic Professional Certificate (Level 2)</strong> and are immediately eligible for listing on the placement platform.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-8">
              {[
                { icon: Clock, label: "Duration", value: "10 weeks full-time" },
                { icon: BookOpen, label: "Modules", value: "10 comprehensive modules" },
                { icon: Award, label: "Certification", value: "Nationally recognised" },
                { icon: CheckCircle, label: "Placement", value: "Immediate platform listing" },
              ].map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex items-start gap-3">
                  <Icon size={18} style={{ color: "var(--gold)", marginTop: 2, flexShrink: 0 }} />
                  <div>
                    <div style={{ fontFamily: "var(--font-sans)", fontSize: "0.7rem", color: "color-mix(in oklab, var(--warm) 50%, transparent)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 2 }}>{label}</div>
                    <div style={{ fontFamily: "var(--font-sans)", fontWeight: 500, fontSize: "0.85rem", color: "var(--warm)" }}>{value}</div>
                  </div>
                </div>
              ))}
            </div>
            <button className="btn-gold" onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}>Enrol Now</button>
          </div>

          <div className="relative" style={{ opacity: inView ? 1 : 0, transform: inView ? "translateX(0)" : "translateX(40px)", transition: "all 0.8s ease 0.3s" }}>
            <div className="absolute -top-4 -left-4 w-full h-full" style={{ border: "2px solid color-mix(in oklab, var(--gold) 35%, transparent)", borderRadius: 2 }} />
            <img src={academyImg} alt="Nova Rise Maid Training Academy classroom" className="w-full object-cover relative z-10" style={{ borderRadius: 2, maxHeight: 460 }} />
            <div className="absolute -bottom-5 -right-5 z-20 p-4" style={{ background: "var(--gold)", borderRadius: 2, boxShadow: "0 8px 24px color-mix(in oklab, var(--gold) 45%, transparent)" }}>
              <div className="font-display" style={{ fontWeight: 700, fontSize: "1.5rem", color: "var(--navy)", lineHeight: 1 }}>Level 2</div>
              <div style={{ fontFamily: "var(--font-sans)", fontSize: "0.65rem", color: "var(--navy)", letterSpacing: "0.12em", textTransform: "uppercase", marginTop: 2 }}>Certified</div>
            </div>
          </div>
        </div>

        <div style={{ borderTop: "1px solid color-mix(in oklab, var(--gold) 22%, transparent)", paddingTop: "3rem" }}>
          <h3 className="font-display" style={{ fontWeight: 600, fontSize: "1.5rem", color: "var(--warm)", marginBottom: "1.5rem" }}>Training Curriculum</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-10">
            {modules.map((mod, i) => (
              <div key={mod} className="flex items-start gap-3 p-4"
                style={{
                  background: "color-mix(in oklab, var(--warm) 5%, transparent)",
                  border: "1px solid color-mix(in oklab, var(--gold) 12%, transparent)",
                  borderRadius: 2,
                  opacity: inView ? 1 : 0, transform: inView ? "translateY(0)" : "translateY(20px)",
                  transition: `all 0.5s ease ${0.3 + i * 0.04}s`,
                }}>
                <span className="font-display" style={{ fontWeight: 700, fontSize: "1.2rem", color: "var(--gold)", opacity: 0.55, lineHeight: 1, flexShrink: 0, minWidth: "2rem" }}>{String(i + 1).padStart(2, "0")}</span>
                <span style={{ fontFamily: "var(--font-sans)", fontSize: "0.82rem", color: "color-mix(in oklab, var(--warm) 80%, transparent)", lineHeight: 1.5 }}>{mod}</span>
              </div>
            ))}
          </div>

          <h3 className="font-display" style={{ fontWeight: 600, fontSize: "1.5rem", color: "var(--warm)", marginBottom: "1.25rem" }}>Training Fees</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {tiers.map((t, i) => (
              <div key={t.label} className="p-5" style={{
                background: i === 0 ? "var(--gold)" : "color-mix(in oklab, var(--warm) 6%, transparent)",
                border: i === 0 ? "none" : "1px solid color-mix(in oklab, var(--gold) 22%, transparent)",
                borderRadius: 2,
              }}>
                <div style={{ fontFamily: "var(--font-sans)", fontWeight: 600, fontSize: "0.74rem", letterSpacing: "0.12em", textTransform: "uppercase", color: i === 0 ? "var(--navy)" : "var(--gold)", marginBottom: "0.5rem" }}>{t.label}</div>
                <div className="font-display" style={{ fontWeight: 700, fontSize: "1.1rem", color: i === 0 ? "var(--navy)" : "var(--warm)", lineHeight: 1.2, marginBottom: "0.4rem" }}>{t.price}</div>
                <div style={{ fontFamily: "var(--font-sans)", fontSize: "0.75rem", color: i === 0 ? "color-mix(in oklab, var(--navy) 70%, transparent)" : "color-mix(in oklab, var(--warm) 50%, transparent)" }}>{t.note}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
