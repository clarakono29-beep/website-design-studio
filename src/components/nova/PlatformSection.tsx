import { Search, Star, MessageSquare, ShieldCheck, Smartphone, MapPin, Bell, DollarSign, FileText, Users } from "lucide-react";
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
  { icon: Smartphone, text: "USSD (*263*NOVA#) for feature phone users without data" },
];
const revenueModel = [
  { item: "Employer Registration", price: "USD 10", note: "One-time verified account" },
  { item: "Placement Commission", price: "15%", note: "Of first month's agreed salary" },
  { item: "Premium Maid Listing", price: "USD 5/mo", note: "Featured priority placement" },
  { item: "Background Check", price: "USD 15", note: "ZRP clearance facilitation" },
  { item: "Contract Templates", price: "USD 8", note: "Per download" },
  { item: "Corporate Membership", price: "USD 120/yr", note: "5+ placements annually" },
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
