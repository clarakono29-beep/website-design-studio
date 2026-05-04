import { Search, Star, MessageSquare, ShieldCheck, Smartphone, MapPin, Bell, DollarSign, FileText, Users, Hash } from "lucide-react";
import platformImg from "@/assets/nova-platform.jpg";
import { useInView } from "@/hooks/useInView";

const employerFeatures = [
  { icon: Search, text: "Search & filter by province, specialisation, language, and availability" },
  { icon: Star, text: "Full maid profiles with certifications, work history, and ratings" },
  { icon: MessageSquare, text: "Secure in-platform messaging and interview scheduling" },
  { icon: ShieldCheck, text: "Escrow payment system with 7-day replacement guarantee" },
  { icon: FileText, text: "Labour-compliant contract templates (Domestic Workers Act)" },
  { icon: Users, text: "Bulk corporate membership for companies placing 5+ maids annually" },
];
const maidFeatures = [
  { icon: Smartphone, text: "Free profile creation — showcase Nova Rise certification and skills" },
  { icon: Bell, text: "Real-time job notifications via app, SMS, or WhatsApp" },
  { icon: MapPin, text: "GPS-based job matching to nearby opportunities" },
  { icon: DollarSign, text: "In-app salary negotiation guidance and minimum wage alerts" },
  { icon: ShieldCheck, text: "Safety feature: emergency contact and SOS button" },
  { icon: Hash, text: "USSD (*263*NOVA#) for feature phone users without data" },
];
const revenueModel = [
  { item: "Employer Registration", price: "Contact for price", note: "One-time verified account" },
  { item: "Placement Commission", price: "Contact for price", note: "Of first month's agreed salary" },
  { item: "Premium Maid Listing", price: "Contact for price", note: "Featured priority placement" },
  { item: "Background Check", price: "Contact for price", note: "ZRP clearance facilitation" },
  { item: "Contract Templates", price: "Contact for price", note: "Per download" },
  { item: "Corporate Membership", price: "Contact for price", note: "5+ placements annually" },
];

export default function PlatformSection() {
  const { ref, inView } = useInView();
  const goContact = () => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  return (
    <section id="platform" style={{ background: "var(--warm)" }}>
      <div className="container py-20 lg:py-28" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          <div style={{ opacity: inView ? 1 : 0, transform: inView ? "translateX(0)" : "translateX(-40px)", transition: "all 0.8s ease 0.2s" }}>
            <img src={platformImg} alt="Nova Rise Digital Placement Platform" className="w-full object-cover" style={{ borderRadius: 4, boxShadow: "0 30px 60px color-mix(in oklab, var(--navy) 18%, transparent)" }} />
          </div>
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="gold-rule" />
              <span style={{ fontFamily: "var(--font-sans)", fontWeight: 500, fontSize: "0.72rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--gold)" }}>03 — Digital Placement Platform</span>
            </div>
            <h2 className="font-display" style={{ fontWeight: 700, fontSize: "clamp(2rem, 4vw, 3rem)", color: "var(--navy)", lineHeight: 1.2, marginBottom: "1.25rem" }}>
              Zimbabwe's First<br />
              <em style={{ color: "var(--gold)" }}>Domestic Worker Platform</em>
            </h2>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: "1rem", color: "color-mix(in oklab, var(--navy) 65%, transparent)", lineHeight: 1.75, marginBottom: "1.5rem" }}>
              A web and mobile Progressive Web App connecting verified, trained domestic workers with employers across all ten provinces of Zimbabwe. Designed for the Zimbabwean context — including USSD fallback for feature phone users without internet data.
            </p>
            <div className="inline-flex items-center gap-2 px-4 py-2" style={{ background: "color-mix(in oklab, var(--navy) 6%, transparent)", borderRadius: 2, border: "1px solid color-mix(in oklab, var(--navy) 10%, transparent)" }}>
              <Smartphone size={14} style={{ color: "var(--gold)" }} />
              <span style={{ fontFamily: "var(--font-sans)", fontSize: "0.8rem", color: "var(--navy)", fontWeight: 500 }}>USSD: *263*NOVA# — works on any mobile phone</span>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          <div className="p-8" style={{ background: "var(--navy)", borderRadius: 4, opacity: inView ? 1 : 0, transform: inView ? "translateY(0)" : "translateY(30px)", transition: "all 0.7s ease 0.3s" }}>
            <div style={{ fontFamily: "var(--font-sans)", fontWeight: 600, fontSize: "0.7rem", letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--gold)", marginBottom: "0.75rem" }}>For Employers</div>
            <h3 className="font-display" style={{ fontWeight: 600, fontSize: "1.4rem", color: "var(--warm)", marginBottom: "1.5rem" }}>Find Trusted, Trained Help</h3>
            <div className="flex flex-col gap-3">
              {employerFeatures.map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-start gap-3">
                  <Icon size={16} style={{ color: "var(--gold)", marginTop: 3, flexShrink: 0 }} />
                  <span style={{ fontFamily: "var(--font-sans)", fontSize: "0.85rem", color: "color-mix(in oklab, var(--warm) 80%, transparent)", lineHeight: 1.5 }}>{text}</span>
                </div>
              ))}
            </div>
            <button className="btn-gold mt-6" onClick={goContact}>Register as Employer</button>
          </div>

          <div className="p-8" style={{ background: "white", borderRadius: 4, border: "1px solid var(--warm-line)", opacity: inView ? 1 : 0, transform: inView ? "translateY(0)" : "translateY(30px)", transition: "all 0.7s ease 0.45s" }}>
            <div style={{ fontFamily: "var(--font-sans)", fontWeight: 600, fontSize: "0.7rem", letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--gold)", marginBottom: "0.75rem" }}>For Domestic Workers</div>
            <h3 className="font-display" style={{ fontWeight: 600, fontSize: "1.4rem", color: "var(--navy)", marginBottom: "1.5rem" }}>Find Dignified Employment</h3>
            <div className="flex flex-col gap-3">
              {maidFeatures.map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-start gap-3">
                  <Icon size={16} style={{ color: "var(--gold)", marginTop: 3, flexShrink: 0 }} />
                  <span style={{ fontFamily: "var(--font-sans)", fontSize: "0.85rem", color: "color-mix(in oklab, var(--navy) 65%, transparent)", lineHeight: 1.5 }}>{text}</span>
                </div>
              ))}
            </div>
            <button className="btn-navy-outline mt-6" onClick={goContact}>Create Your Profile</button>
          </div>
        </div>

        {/* Maid Profile Previews */}
        <div style={{ marginBottom: "4rem" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "1rem", marginBottom: "1.5rem" }}>
            <h3 className="font-display" style={{ fontWeight: 600, fontSize: "1.5rem", color: "var(--navy)" }}>Sample Worker Profiles</h3>
            <span style={{ fontFamily: "var(--font-sans)", fontSize: "0.78rem", color: "color-mix(in oklab, var(--navy) 45%, transparent)", fontStyle: "italic" }}>Full details unlocked after employer registration</span>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: "1.25rem" }}>
            {[
              { initials: "TM", name: "Tendai M.", province: "Harare", exp: "4 yrs", level: "Level 2", skills: ["Deep Cleaning", "Childcare", "Cooking"], rating: 4.9, reviews: 12, available: true, color: "#1A2F5A" },
              { initials: "RN", name: "Rudo N.", province: "Harare", exp: "2 yrs", level: "Level 2", skills: ["Laundry & Ironing", "Cleaning", "Kitchen"], rating: 4.8, reviews: 8, available: true, color: "#2C5F3F" },
              { initials: "CK", name: "Chipo K.", province: "Bulawayo", exp: "6 yrs", level: "Level 2", skills: ["Elderly Care", "Cooking", "First Aid"], rating: 5.0, reviews: 21, available: false, color: "#7A4A1E" },
            ].map((p) => (
              <div key={p.name} style={{ background: "white", border: "1px solid var(--warm-line)", borderRadius: 4, overflow: "hidden" }}>
                <div style={{ padding: "1.25rem 1.25rem 1rem", background: "var(--warm)", borderBottom: "1px solid var(--warm-line)", display: "flex", alignItems: "center", gap: "0.85rem" }}>
                  <div style={{ width: 46, height: 46, borderRadius: "50%", background: `color-mix(in oklab, ${p.color} 14%, transparent)`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <span className="font-display" style={{ fontWeight: 700, fontSize: "0.95rem", color: p.color }}>{p.initials}</span>
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                      <span style={{ fontFamily: "var(--font-sans)", fontWeight: 600, fontSize: "0.92rem", color: "var(--navy)" }}>{p.name}</span>
                      <span style={{ fontSize: "0.62rem", fontFamily: "var(--font-sans)", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", padding: "2px 7px", borderRadius: 2, background: p.available ? "color-mix(in oklab, #25D366 15%, transparent)" : "color-mix(in oklab, var(--navy) 8%, transparent)", color: p.available ? "#187A3A" : "color-mix(in oklab, var(--navy) 40%, transparent)" }}>
                        {p.available ? "Available" : "Placed"}
                      </span>
                    </div>
                    <div style={{ fontFamily: "var(--font-sans)", fontSize: "0.73rem", color: "color-mix(in oklab, var(--navy) 50%, transparent)", marginTop: 2 }}>{p.province} · {p.exp}</div>
                  </div>
                </div>
                <div style={{ padding: "1rem 1.25rem" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.4rem", marginBottom: "0.7rem" }}>
                    <svg width={12} height={12} viewBox="0 0 24 24" fill="var(--gold)"><polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" /></svg>
                    <span style={{ fontFamily: "var(--font-sans)", fontWeight: 700, fontSize: "0.8rem", color: "var(--navy)" }}>{p.rating}</span>
                    <span style={{ fontFamily: "var(--font-sans)", fontSize: "0.72rem", color: "color-mix(in oklab, var(--navy) 45%, transparent)" }}>({p.reviews})</span>
                    <span style={{ marginLeft: "auto", fontFamily: "var(--font-sans)", fontSize: "0.67rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--gold)" }}>{p.level} ✓</span>
                  </div>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "0.35rem", marginBottom: "0.9rem" }}>
                    {p.skills.map((s) => (
                      <span key={s} style={{ fontFamily: "var(--font-sans)", fontSize: "0.7rem", fontWeight: 500, padding: "3px 8px", background: "var(--warm)", border: "1px solid var(--warm-line)", borderRadius: 2, color: "color-mix(in oklab, var(--navy) 60%, transparent)" }}>{s}</span>
                    ))}
                  </div>
                  <button onClick={goContact} disabled={!p.available}
                    style={{ width: "100%", padding: "0.6rem", fontFamily: "var(--font-sans)", fontWeight: 600, fontSize: "0.76rem", letterSpacing: "0.06em", textTransform: "uppercase", background: p.available ? "var(--navy)" : "color-mix(in oklab, var(--navy) 12%, transparent)", color: p.available ? "var(--warm)" : "color-mix(in oklab, var(--navy) 35%, transparent)", border: "none", borderRadius: 2, cursor: p.available ? "pointer" : "not-allowed" }}>
                    {p.available ? "Register to Contact →" : "Currently Placed"}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-display" style={{ fontWeight: 600, fontSize: "1.5rem", color: "var(--navy)", marginBottom: "1.25rem" }}>Platform Fee Structure</h3>
          <div className="overflow-x-auto">
            <table className="w-full" style={{ borderCollapse: "collapse" }}>
              <thead>
                <tr style={{ borderBottom: "2px solid var(--navy)" }}>
                  {["Service", "Fee", "Notes"].map((h) => (
                    <th key={h} className="text-left py-3 px-4" style={{ fontFamily: "var(--font-sans)", fontWeight: 600, fontSize: "0.74rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--navy)" }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {revenueModel.map((row, i) => (
                  <tr key={row.item} style={{ borderBottom: "1px solid var(--warm-line)", background: i % 2 === 0 ? "white" : "transparent" }}>
                    <td className="py-3 px-4" style={{ fontFamily: "var(--font-sans)", fontWeight: 500, fontSize: "0.88rem", color: "var(--navy)" }}>{row.item}</td>
                    <td className="py-3 px-4 font-display" style={{ fontWeight: 700, fontSize: "1rem", color: "var(--gold)" }}>{row.price}</td>
                    <td className="py-3 px-4" style={{ fontFamily: "var(--font-sans)", fontSize: "0.82rem", color: "color-mix(in oklab, var(--navy) 55%, transparent)" }}>{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
