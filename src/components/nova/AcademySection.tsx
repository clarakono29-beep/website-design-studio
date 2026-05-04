import { CheckCircle, Clock, Award, BookOpen, Calendar } from "lucide-react";
import academyImg from "@/assets/nova-academy.jpg";
import { useInView } from "@/hooks/useInView";
import { useEffect, useState } from "react";

const NEXT_INTAKE = new Date("2026-06-08T08:00:00");

function useCountdown(target: Date) {
  const calc = () => {
    const diff = target.getTime() - Date.now();
    if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    return {
      days: Math.floor(diff / 86400000),
      hours: Math.floor((diff % 86400000) / 3600000),
      minutes: Math.floor((diff % 3600000) / 60000),
      seconds: Math.floor((diff % 60000) / 1000),
    };
  };
  const [time, setTime] = useState(calc);
  useEffect(() => {
    const id = setInterval(() => setTime(calc()), 1000);
    return () => clearInterval(id);
  }, []);
  return time;
}

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
  const countdown = useCountdown(NEXT_INTAKE);
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
            {/* Intake countdown */}
            <div style={{ background: "color-mix(in oklab, var(--gold) 10%, transparent)", border: "1px solid color-mix(in oklab, var(--gold) 28%, transparent)", borderRadius: 4, padding: "1.25rem 1.5rem", marginBottom: "1.5rem" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.75rem" }}>
                <Calendar size={14} style={{ color: "var(--gold)" }} />
                <span style={{ fontFamily: "var(--font-sans)", fontWeight: 600, fontSize: "0.7rem", letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--gold)" }}>
                  Next Intake — 8 June 2026 · Limited Seats
                </span>
              </div>
              <div style={{ display: "flex", gap: "1.25rem" }}>
                {[
                  { val: countdown.days, label: "Days" },
                  { val: countdown.hours, label: "Hours" },
                  { val: countdown.minutes, label: "Min" },
                  { val: countdown.seconds, label: "Sec" },
                ].map(({ val, label }) => (
                  <div key={label} style={{ textAlign: "center" }}>
                    <div className="font-display" style={{ fontWeight: 700, fontSize: "1.75rem", color: "var(--warm)", lineHeight: 1, minWidth: "2.5rem" }}>
                      {String(val).padStart(2, "0")}
                    </div>
                    <div style={{ fontFamily: "var(--font-sans)", fontSize: "0.6rem", letterSpacing: "0.14em", textTransform: "uppercase", color: "color-mix(in oklab, var(--warm) 50%, transparent)", marginTop: 2 }}>
                      {label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem" }}>
              <button className="btn-gold" onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}>Enrol Now</button>
              <a
                href="https://wa.me/263000000000?text=Hi%20Nova%20Rise%2C%20I%27d%20like%20to%20enquire%20about%20Academy%20enrolment%20for%20the%20June%202026%20intake."
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", padding: "0.8rem 1.4rem", background: "#25D366", borderRadius: 2, textDecoration: "none" }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" width={16} height={16}><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                <span style={{ fontFamily: "var(--font-sans)", fontWeight: 600, fontSize: "0.82rem", color: "white", letterSpacing: "0.04em" }}>Ask on WhatsApp</span>
              </a>
            </div>
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
