import { Building2, GraduationCap, Hotel, Stethoscope, Home, Factory, PartyPopper, Landmark } from "lucide-react";
import cleaningImg from "@/assets/nova-cleaning.jpg";
import { useInView } from "@/hooks/useInView";

const services = [
  { icon: Building2, title: "Office Deep Cleaning", desc: "Floor-to-ceiling corporate cleaning: carpets, windows, kitchens, and ablution facilities. Scheduled nightly, weekly, or monthly." },
  { icon: GraduationCap, title: "School & College Cleaning", desc: "Comprehensive cleaning of classrooms, labs, boarding facilities, and sports halls during school holidays or weekends." },
  { icon: Stethoscope, title: "Hospital & Clinic Cleaning", desc: "Infection-control compliant cleaning using medical-grade disinfectants. Staff trained in IPC protocols." },
  { icon: PartyPopper, title: "Wedding & Event Venues", desc: "Pre-event setup and post-event deep cleaning of ballrooms, garden venues, tents, and marquees." },
  { icon: Hotel, title: "Hotels & Lodges", desc: "Room servicing, linen management, public area cleaning, and deep-cleaning of kitchens and pool facilities." },
  { icon: Home, title: "Private Residential", desc: "One-off deep cleans: spring cleaning, post-renovation, move-in/move-out cleaning for households." },
  { icon: Factory, title: "Industrial & Warehouses", desc: "High-pressure washing of factory floors, storage areas, machinery surrounds, and commercial kitchens." },
  { icon: Landmark, title: "Government & Embassies", desc: "Tender-based provision of cleaning for government buildings, embassies, and parastatals via PRAZ." },
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
                
                <div className="mt-4 pt-4 flex flex-col gap-1.5" style={{ borderTop: "1px solid color-mix(in oklab, var(--navy) 10%, transparent)" }}>
                  <a
                    href={`https://wa.me/263000000000?text=Hi%20Nova%20Rise%2C%20I%27d%20like%20a%20quote%20for%20${encodeURIComponent(s.title)}.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem", fontFamily: "var(--font-sans)", fontSize: "0.78rem", color: "#187A3A", fontWeight: 600, textDecoration: "none" }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width={13} height={13}><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                    WhatsApp for rates →
                  </a>
                  <a href={`mailto:info@novarisezw.co.zw?subject=Rates enquiry — ${encodeURIComponent(s.title)}`} style={{ fontFamily: "var(--font-sans)", fontSize: "0.75rem", color: "color-mix(in oklab, var(--navy) 45%, transparent)", fontWeight: 500, textDecoration: "none" }}>
                    Or email us →
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
