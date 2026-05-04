import { Building2, GraduationCap, Hotel, Stethoscope, Home, Factory, PartyPopper, Landmark } from "lucide-react";
import cleaningImg from "@/assets/nova-cleaning.jpg";
import { useInView } from "@/hooks/useInView";

const services = [
  { icon: Building2, title: "Office Deep Cleaning", desc: "Floor-to-ceiling corporate cleaning: carpets, windows, kitchens, and ablution facilities. Scheduled nightly, weekly, or monthly.", price: "From USD 80" },
  { icon: GraduationCap, title: "School & College Cleaning", desc: "Comprehensive cleaning of classrooms, labs, boarding facilities, and sports halls during school holidays or weekends.", price: "From USD 400" },
  { icon: Stethoscope, title: "Hospital & Clinic Cleaning", desc: "Infection-control compliant cleaning using medical-grade disinfectants. Staff trained in IPC protocols.", price: "From USD 250/day" },
  { icon: PartyPopper, title: "Wedding & Event Venues", desc: "Pre-event setup and post-event deep cleaning of ballrooms, garden venues, tents, and marquees.", price: "From USD 150" },
  { icon: Hotel, title: "Hotels & Lodges", desc: "Room servicing, linen management, public area cleaning, and deep-cleaning of kitchens and pool facilities.", price: "Contract rates" },
  { icon: Home, title: "Private Residential", desc: "One-off deep cleans: spring cleaning, post-renovation, move-in/move-out cleaning for households.", price: "From USD 60" },
  { icon: Factory, title: "Industrial & Warehouses", desc: "High-pressure washing of factory floors, storage areas, machinery surrounds, and commercial kitchens.", price: "From USD 300" },
  { icon: Landmark, title: "Government & Embassies", desc: "Tender-based provision of cleaning for government buildings, embassies, and parastatals via PRAZ.", price: "Tender-based" },
];

export default function ServicesSection() {
  const { ref, inView } = useInView();
  return (
    <section id="services" style={{ background: "var(--warm)" }}>
      <div className="relative overflow-hidden" style={{ background: "var(--navy)", minHeight: "340px" }}>
        <div className="absolute inset-0" style={{ backgroundImage: `url(${cleaningImg})`, backgroundSize: "cover", backgroundPosition: "center", opacity: 0.25 }} />
        <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, var(--navy) 40%, color-mix(in oklab, var(--navy) 60%, transparent) 100%)" }} />
        <div className="container relative z-10 py-20 lg:py-28">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="gold-rule" />
              <span style={{ fontFamily: "var(--font-sans)", fontWeight: 500, fontSize: "0.72rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--gold)" }}>01 — Professional Cleaning</span>
            </div>
            <h2 className="font-display" style={{ fontWeight: 700, fontSize: "clamp(2rem, 4vw, 3rem)", color: "var(--warm)", lineHeight: 1.2, marginBottom: "1rem" }}>
              Deep Cleaning Services<br />
              <em style={{ color: "var(--gold)" }}>Built for Zimbabwe</em>
            </h2>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: "1rem", color: "color-mix(in oklab, var(--warm) 75%, transparent)", lineHeight: 1.7, maxWidth: "520px" }}>
              Hospital-grade equipment, eco-friendly biodegradable chemicals compliant with EMA standards, and uniformed teams with photo ID badges — delivering international benchmarks to Zimbabwean businesses.
            </p>
          </div>
        </div>
      </div>

      <div className="container py-16" ref={ref}>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <div key={s.title} className="card-service p-6 flex flex-col"
                style={{ opacity: inView ? 1 : 0, transform: inView ? "translateY(0)" : "translateY(30px)", transition: `all 0.6s ease ${i * 0.07}s` }}>
                <div className="w-10 h-10 flex items-center justify-center mb-4" style={{ background: "color-mix(in oklab, var(--gold) 12%, transparent)", borderRadius: "4px" }}>
                  <Icon size={20} style={{ color: "var(--gold)" }} />
                </div>
                <h3 className="font-display" style={{ fontWeight: 600, fontSize: "1rem", color: "var(--navy)", marginBottom: "0.5rem", lineHeight: 1.3 }}>{s.title}</h3>
                <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.82rem", color: "color-mix(in oklab, var(--navy) 60%, transparent)", lineHeight: 1.6, marginBottom: "1rem" }}>{s.desc}</p>
                <span style={{ fontFamily: "var(--font-sans)", fontWeight: 600, fontSize: "0.78rem", color: "var(--gold)", letterSpacing: "0.05em" }}>{s.price}</span>
                <div className="mt-4 pt-4 flex flex-col gap-1.5" style={{ borderTop: "1px solid color-mix(in oklab, var(--navy) 10%, transparent)" }}>
                  <a href={`tel:+263772123456`} style={{ fontFamily: "var(--font-sans)", fontSize: "0.78rem", color: "var(--navy)", fontWeight: 500, textDecoration: "none" }}>
                    📞 +263 77 212 3456
                  </a>
                  <a href={`mailto:rates@novarise.co.zw?subject=Rates enquiry — ${encodeURIComponent(s.title)}`} style={{ fontFamily: "var(--font-sans)", fontSize: "0.78rem", color: "var(--gold)", fontWeight: 600, textDecoration: "none" }}>
                    Contact for rates →
                  </a>
                </div>
              </div>
            );
          })}
        </div>
        <div className="mt-10 flex flex-wrap gap-4 items-center">
          <button className="btn-gold" onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}>Request a Quote</button>
          <span style={{ fontFamily: "var(--font-sans)", fontSize: "0.82rem", color: "color-mix(in oklab, var(--navy) 55%, transparent)" }}>
            All quotes issued within 24 hours of site inspection · Monthly contracts receive 15–20% discount
          </span>
        </div>
      </div>
    </section>
  );
}
