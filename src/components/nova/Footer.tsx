import { Facebook, Instagram, Linkedin, Youtube, Phone, Mail, MapPin } from "lucide-react";

const footerLinks: Record<string, string[]> = {
  Services: ["Office Deep Cleaning", "School & College Cleaning", "Hospital & Clinic Cleaning", "Wedding & Event Venues", "Private Residential", "Industrial & Warehouses"],
  Academy: ["About the Academy", "Training Curriculum", "Enrolment & Fees", "Certification", "Employer Sponsorship", "ZIMDEF Levy"],
  Platform: ["For Employers", "For Domestic Workers", "Register as Employer", "Create Maid Profile", "Fee Structure", "USSD Access"],
  Company: ["About Nova Rise", "Our Values", "Careers", "Press & Media", "Privacy Policy", "Terms of Service"],
};

const socials = [
  { icon: Facebook, label: "Facebook" },
  { icon: Instagram, label: "Instagram" },
  { icon: Linkedin, label: "LinkedIn" },
  { icon: Youtube, label: "YouTube" },
];

const map: Record<string, string> = {
  // Services section
  "Office Deep Cleaning": "#services",
  "School & College Cleaning": "#services",
  "Hospital & Clinic Cleaning": "#services",
  "Wedding & Event Venues": "#services",
  "Private Residential": "#services",
  "Industrial & Warehouses": "#services",
  // Academy section
  "About the Academy": "#academy",
  "Training Curriculum": "#academy",
  "Enrolment & Fees": "#academy",
  "Certification": "#academy",
  "Employer Sponsorship": "#academy",
  "ZIMDEF Levy": "#academy",
  // Platform section
  "For Employers": "#platform",
  "For Domestic Workers": "#platform",
  "Register as Employer": "#platform",
  "Create Maid Profile": "#platform",
  "Fee Structure": "#platform",
  "USSD Access": "#platform",
  // Company section
  "About Nova Rise": "#about",
  "Our Values": "#about",
  // Contact-linked
  "Careers": "#contact",
  "Press & Media": "#contact",
  // No section yet — prevent scroll-to-top
  "Privacy Policy": "",
  "Terms of Service": "",
};

export default function Footer() {
  return (
    <footer style={{ background: "var(--navy-deep)", borderTop: "1px solid color-mix(in oklab, var(--gold) 18%, transparent)" }}>
      <div className="container py-16">
        <div className="grid grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          <div className="col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 flex items-center justify-center rounded-sm" style={{ background: "linear-gradient(135deg, var(--gold), var(--gold-soft))" }}>
                <span className="font-display" style={{ fontWeight: 800, fontSize: "1.05rem", color: "var(--navy)", lineHeight: 1 }}>NR</span>
              </div>
              <div>
                <span className="font-display block" style={{ fontWeight: 700, fontSize: "1.1rem", color: "var(--warm)", lineHeight: 1.1 }}>Nova Rise</span>
                <span className="block" style={{ fontFamily: "var(--font-sans)", fontWeight: 400, fontSize: "0.6rem", color: "var(--gold)", letterSpacing: "0.18em", textTransform: "uppercase" }}>Private Limited</span>
              </div>
            </div>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.82rem", color: "color-mix(in oklab, var(--warm) 50%, transparent)", lineHeight: 1.7, marginBottom: "1.25rem" }}>
              Zimbabwe's premier professional cleaning services, maid training academy, and domestic worker placement platform.
            </p>
            <div className="font-display italic mb-4" style={{ fontSize: "0.95rem", color: "var(--gold)" }}>"Raising Standards. Transforming Lives."</div>
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2"><Phone size={13} style={{ color: "var(--gold)" }} /><span style={{ fontFamily: "var(--font-sans)", fontSize: "0.78rem", color: "color-mix(in oklab, var(--warm) 50%, transparent)" }}>+263 (0) 000 000</span></div>
              <div className="flex items-center gap-2"><Mail size={13} style={{ color: "var(--gold)" }} /><span style={{ fontFamily: "var(--font-sans)", fontSize: "0.78rem", color: "color-mix(in oklab, var(--warm) 50%, transparent)" }}>info@novarisezw.co.zw</span></div>
              <div className="flex items-start gap-2"><MapPin size={13} style={{ color: "var(--gold)", marginTop: 2, flexShrink: 0 }} /><span style={{ fontFamily: "var(--font-sans)", fontSize: "0.78rem", color: "color-mix(in oklab, var(--warm) 50%, transparent)" }}>Harare CBD, Zimbabwe</span></div>
            </div>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 style={{ fontFamily: "var(--font-sans)", fontWeight: 600, fontSize: "0.7rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--gold)", marginBottom: "1rem" }}>{category}</h4>
              <ul className="flex flex-col gap-2">
                {links.map((link) => (
                  <li key={link}>
                    <a href={map[link] ? map[link] : undefined} onClick={(e) => { e.preventDefault(); if (map[link]) { document.querySelector(map[link])?.scrollIntoView({ behavior: "smooth" }); } }}
                      style={{ fontFamily: "var(--font-sans)", fontSize: "0.82rem", color: "color-mix(in oklab, var(--warm) 45%, transparent)", textDecoration: "none", display: "block", transition: "color 0.2s ease" }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = "var(--gold)")}
                      onMouseLeave={(e) => (e.currentTarget.style.color = "color-mix(in oklab, var(--warm) 45%, transparent)")}>
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div style={{ height: 1, background: "color-mix(in oklab, var(--gold) 10%, transparent)", marginBottom: "1.5rem" }} />
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.75rem", color: "color-mix(in oklab, var(--warm) 30%, transparent)" }}>
            © {new Date().getFullYear()} Nova Rise Private Limited. All rights reserved. Registered in Zimbabwe.
          </p>
          <div className="flex items-center gap-4">
            {socials.map(({ icon: Icon, label }) => (
              <a key={label} href="#" aria-label={label}
                onClick={(e) => e.preventDefault()}
                style={{ color: "color-mix(in oklab, var(--warm) 30%, transparent)", transition: "color 0.2s ease" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--gold)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "color-mix(in oklab, var(--warm) 30%, transparent)")}>
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
