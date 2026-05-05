import { CheckCircle, Tag } from "lucide-react";
import { useInView } from "@/hooks/useInView";

const cleaningPrices = [
  { service: "Standard Office Clean (up to 200 sqm)", range: "Contact for price", note: "Monthly contract: 15% discount" },
  { service: "Large Office / NGO (200–500 sqm)", range: "Contact for price", note: "Quarterly contract: 20% discount" },
  { service: "School Building Deep Clean", range: "Contact for price", note: "Per building, seasonal" },
  { service: "Hospital / Clinic (per day)", range: "Contact for price", note: "Frequency contract available" },
  { service: "Wedding / Event Venue", range: "Contact for price", note: "Pre + post package available" },
  { service: "Private Residential Deep Clean", range: "Contact for price", note: "By room count / sqm" },
  { service: "Industrial Warehouse", range: "Contact for price", note: "Quotation-based" },
];
const highlights = [
  "All quotes issued within 24 hours of site inspection",
  "Pricing in ZiG calculated at prevailing RBZ official rate on invoice date",
  "50% deposit required on all new contracts before service delivery",
  "Net 7-day payment terms for corporate clients",
  "EcoCash and InnBucks accepted for fast domestic collections",
  "7-day maid replacement guarantee at no charge",
];

export default function PricingSection() {
  const { ref, inView } = useInView();
  return (
    <section id="pricing" style={{ background: "var(--warm)" }}>
      <div className="container py-20 lg:py-28" ref={ref}>
        <div className="flex items-center gap-3 mb-4">
          <span className="gold-rule" />
          <span style={{ fontFamily: "var(--font-sans)", fontWeight: 500, fontSize: "0.72rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--gold)" }}>Transparent Pricing</span>
        </div>
        <div className="grid lg:grid-cols-3 gap-12 mb-12">
          <div className="lg:col-span-2">
            <h2 className="font-display" style={{ fontWeight: 700, fontSize: "clamp(2rem, 4vw, 3rem)", color: "var(--navy)", lineHeight: 1.2, marginBottom: "1rem" }}>
              Cleaning Service<br /><em style={{ color: "var(--gold)" }}>Price Guide</em>
            </h2>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: "1rem", color: "color-mix(in oklab, var(--navy) 60%, transparent)", lineHeight: 1.7 }}>
              Value-based pricing — slightly above the informal market to justify quality, insurance, and certification, but positioned below large international firms. Penetration pricing applies in the first 6 months (10–15% introductory discount).
            </p>
          </div>
          <div className="p-7 self-start" style={{ background: "var(--navy)", borderRadius: 2, boxShadow: "0 18px 40px -20px color-mix(in oklab, var(--navy) 50%, transparent)" }}>
            <div className="flex items-center gap-2 mb-3">
              <Tag size={16} style={{ color: "var(--gold)" }} />
              <span style={{ fontFamily: "var(--font-sans)", fontWeight: 500, fontSize: "0.68rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--gold)" }}>Launch Offer</span>
            </div>
            <div className="font-display" style={{ fontWeight: 700, fontSize: "1.4rem", color: "var(--warm)", lineHeight: 1.2, marginBottom: "0.6rem" }}>10–15% off everything</div>
            <div style={{ fontFamily: "var(--font-sans)", fontSize: "0.85rem", color: "color-mix(in oklab, var(--warm) 70%, transparent)", lineHeight: 1.6 }}>
              Introductory discount during our first 6 months. Sign a monthly retainer and save an additional 15%.
            </div>
          </div>
        </div>

        <div className="overflow-x-auto mb-10" style={{ opacity: inView ? 1 : 0, transform: inView ? "translateY(0)" : "translateY(30px)", transition: "all 0.7s ease 0.2s" }}>
          <table className="w-full" style={{ borderCollapse: "collapse" }}>
            <thead>
              <tr style={{ background: "var(--navy)" }}>
                {["Service Type", "Pricing", "Notes"].map((h) => (
                  <th key={h} className="text-left py-4 px-5" style={{ fontFamily: "var(--font-sans)", fontWeight: 600, fontSize: "0.72rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--gold)" }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {cleaningPrices.map((row, i) => (
                <tr key={row.service} style={{ borderBottom: "1px solid var(--warm-line)", background: i % 2 === 0 ? "white" : "var(--warm)" }}>
                  <td className="py-4 px-5" style={{ fontFamily: "var(--font-sans)", fontWeight: 500, fontSize: "0.9rem", color: "var(--navy)" }}>{row.service}</td>
                  <td className="py-4 px-5 font-display" style={{ fontWeight: 600, fontSize: "0.92rem", color: "var(--gold)", whiteSpace: "nowrap", letterSpacing: "0.01em" }}>{row.range}</td>
                  <td className="py-4 px-5" style={{ fontFamily: "var(--font-sans)", fontSize: "0.82rem", color: "color-mix(in oklab, var(--navy) 55%, transparent)" }}>{row.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="p-8" style={{ background: "white", border: "1px solid var(--warm-line)", borderRadius: 2 }}>
          <h3 className="font-display" style={{ fontWeight: 600, fontSize: "1.2rem", color: "var(--navy)", marginBottom: "1.25rem" }}>Our Service Guarantee</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {highlights.map((h) => (
              <div key={h} className="flex items-start gap-3">
                <CheckCircle size={16} style={{ color: "var(--gold)", marginTop: 2, flexShrink: 0 }} />
                <span style={{ fontFamily: "var(--font-sans)", fontSize: "0.83rem", color: "color-mix(in oklab, var(--navy) 65%, transparent)", lineHeight: 1.5 }}>{h}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 text-center">
          <button className="btn-gold" onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}>Request a Custom Quote</button>
        </div>
      </div>
    </section>
  );
}
