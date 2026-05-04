import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Academy", href: "#academy" },
  { label: "Platform", href: "#platform" },
  { label: "Pricing", href: "#pricing" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (href: string) => {
    setMobileOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          background: scrolled ? "color-mix(in oklab, var(--navy) 98%, transparent)" : "color-mix(in oklab, var(--navy) 75%, transparent)",
          backdropFilter: "blur(12px)",
          borderBottom: scrolled ? "1px solid color-mix(in oklab, var(--gold) 25%, transparent)" : "none",
          boxShadow: scrolled ? "0 4px 30px rgba(0,0,0,0.3)" : "none",
        }}
      >
        <div className="container">
          <div className="flex items-center justify-between h-16 lg:h-20">
            <a href="#home" onClick={(e) => { e.preventDefault(); go("#home"); }} className="flex items-center gap-3">
              <div className="w-9 h-9 flex items-center justify-center rounded-sm" style={{ background: "linear-gradient(135deg, var(--gold), var(--gold-soft))" }}>
                <span className="font-display" style={{ fontWeight: 800, fontSize: "1.05rem", color: "var(--navy)", lineHeight: 1 }}>NR</span>
              </div>
              <div>
                <span className="font-display block" style={{ fontWeight: 700, fontSize: "1.1rem", color: "var(--warm)", letterSpacing: "0.02em", lineHeight: 1.1 }}>Nova Rise</span>
                <span className="block" style={{ fontFamily: "var(--font-sans)", fontWeight: 400, fontSize: "0.6rem", color: "var(--gold)", letterSpacing: "0.18em", textTransform: "uppercase", lineHeight: 1 }}>Private Limited</span>
              </div>
            </a>

            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); go(link.href); }}
                  className="nav-link-underline"
                  style={{ fontFamily: "var(--font-sans)", fontWeight: 500, fontSize: "0.78rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--warm)", textDecoration: "none" }}
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="hidden lg:flex items-center gap-4">
              <a href="tel:+263000000000" className="flex items-center gap-2" style={{ fontFamily: "var(--font-sans)", fontSize: "0.78rem", color: "var(--gold)", textDecoration: "none", fontWeight: 500 }}>
                <Phone size={14} />
                <span>+263 (0) 000 000</span>
              </a>
              <button className="btn-gold" onClick={() => go("#contact")}>Get a Quote</button>
            </div>

            <button className="lg:hidden p-2" style={{ color: "var(--warm)" }} onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle menu">
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      <div
        className="fixed inset-0 z-40 lg:hidden transition-all duration-300"
        style={{
          opacity: mobileOpen ? 1 : 0,
          pointerEvents: mobileOpen ? "all" : "none",
          background: "color-mix(in oklab, var(--navy) 98%, transparent)",
          backdropFilter: "blur(12px)",
        }}
      >
        <div className="flex flex-col items-center justify-center h-full gap-6 pt-16">
          {navLinks.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => { e.preventDefault(); go(link.href); }}
              className="font-display"
              style={{
                fontWeight: 600, fontSize: "1.5rem", color: "var(--warm)", textDecoration: "none",
                opacity: mobileOpen ? 1 : 0,
                transform: mobileOpen ? "translateY(0)" : "translateY(20px)",
                transition: `opacity 0.4s ease ${i * 0.05}s, transform 0.4s ease ${i * 0.05}s`,
              }}
            >
              {link.label}
            </a>
          ))}
          <button className="btn-gold mt-4" onClick={() => go("#contact")}>Get a Quote</button>
        </div>
      </div>
    </>
  );
}
