import { useState, useMemo } from "react";
import { Search, MapPin, Star, Filter, X, ChevronDown, Shield, Award } from "lucide-react";
import { useInView } from "@/hooks/useInView";

const PROVINCES = ["All Provinces", "Harare", "Bulawayo", "Mutare", "Gweru", "Marondera", "Masvingo", "Chinhoyi", "Kwekwe"];
const SKILLS = ["All Skills", "Deep Cleaning", "Childcare", "Cooking & Meals", "Laundry & Ironing", "Elderly Care", "Garden & Grounds", "Pet Care", "All-Round"];

const maids = [
  {
    id: 1, initials: "TM", name: "Tendai M.", province: "Harare", exp: "4 yrs",
    level: 2, rating: 4.9, reviews: 12, available: true,
    skills: ["Deep Cleaning", "Childcare", "Cooking & Meals"],
    languages: ["Shona", "English"], featured: true,
    bio: "Meticulous and reliable. Specialises in post-renovation deep cleans and caring for children under 8.",
    color: "#0D1B3E",
  },
  {
    id: 2, initials: "RN", name: "Rudo N.", province: "Harare", exp: "2 yrs",
    level: 2, rating: 4.8, reviews: 8, available: true,
    skills: ["Laundry & Ironing", "Deep Cleaning", "All-Round"],
    languages: ["Shona", "English"],
    bio: "Known for immaculate laundry and ironing, including delicate fabrics. Fast, thorough, and punctual.",
    color: "#2C5F3F",
  },
  {
    id: 3, initials: "CK", name: "Chipo K.", province: "Bulawayo", exp: "6 yrs",
    level: 2, rating: 5.0, reviews: 21, available: false,
    skills: ["Elderly Care", "Cooking & Meals", "All-Round"],
    languages: ["Ndebele", "Shona", "English"],
    bio: "Experienced caregiver for elderly and differently-abled individuals. First-aid trained.",
    color: "#7A4A1E",
  },
  {
    id: 4, initials: "SD", name: "Shamiso D.", province: "Harare", exp: "3 yrs",
    level: 2, rating: 4.7, reviews: 9, available: true,
    skills: ["Childcare", "Cooking & Meals", "Laundry & Ironing"],
    languages: ["Shona", "English"],
    bio: "Warm and nurturing with children aged 0–12. Holds Nova Rise childcare module certification.",
    color: "#4A1E7A",
  },
  {
    id: 5, initials: "MC", name: "Mavis C.", province: "Gweru", exp: "5 yrs",
    level: 2, rating: 4.9, reviews: 17, available: true,
    skills: ["Cooking & Meals", "Deep Cleaning", "Garden & Grounds"],
    languages: ["Shona", "Ndebele", "English"],
    bio: "Expert in Zimbabwean and international cuisine. Handles meal planning, food storage, and nutritional cooking.",
    color: "#1E5A7A",
  },
  {
    id: 6, initials: "NM", name: "Ngoni M.", province: "Bulawayo", exp: "2 yrs",
    level: 2, rating: 4.6, reviews: 6, available: true,
    skills: ["Deep Cleaning", "Garden & Grounds", "Pet Care"],
    languages: ["Ndebele", "English"],
    bio: "Reliable and hardworking. Comfortable with large homes and outdoor spaces including pool maintenance.",
    color: "#3A5A1E",
  },
  {
    id: 7, initials: "FM", name: "Farai M.", province: "Marondera", exp: "7 yrs",
    level: 2, rating: 5.0, reviews: 28, available: false,
    skills: ["Childcare", "Elderly Care", "All-Round"],
    languages: ["Shona", "English"],
    bio: "Veteran domestic professional with 7 years of verified experience. References available from three long-term employers.",
    color: "#5A1E3A",
  },
  {
    id: 8, initials: "BZ", name: "Blessing Z.", province: "Harare", exp: "1 yr",
    level: 2, rating: 4.5, reviews: 4, available: true,
    skills: ["Cooking & Meals", "Childcare", "Laundry & Ironing"],
    languages: ["Shona", "English"],
    bio: "Recent Academy graduate with top marks in cooking and childcare modules. Eager, disciplined, and punctual.",
    color: "#C9A84C",
  },
  {
    id: 9, initials: "RM", name: "Rutendo M.", province: "Mutare", exp: "4 yrs",
    level: 2, rating: 4.8, reviews: 11, available: true,
    skills: ["All-Round", "Deep Cleaning", "Cooking & Meals"],
    languages: ["Shona", "English"],
    bio: "Versatile all-rounder. Equally skilled in deep cleaning, cooking, and managing a household schedule independently.",
    color: "#1A3A5A",
  },
  {
    id: 10, initials: "PN", name: "Precious N.", province: "Harare", exp: "3 yrs",
    level: 2, rating: 4.7, reviews: 14, available: true,
    skills: ["Elderly Care", "Laundry & Ironing", "Deep Cleaning"],
    languages: ["Shona", "Zulu", "English"],
    bio: "Compassionate and patient. Experienced supporting elderly family members with mobility and daily care routines.",
    color: "#3A1E5A",
  },
  {
    id: 11, initials: "MK", name: "Memory K.", province: "Harare", exp: "2 yrs",
    level: 2, rating: 4.6, reviews: 7, available: true,
    skills: ["Deep Cleaning", "Pet Care", "Garden & Grounds"],
    languages: ["Shona", "English"],
    bio: "Loves animals. Experienced with dogs, cats, and birds. Also skilled in general housekeeping and outdoor areas.",
    color: "#1E4A3A",
  },
  {
    id: 12, initials: "GC", name: "Grace C.", province: "Chinhoyi", exp: "5 yrs",
    level: 2, rating: 4.9, reviews: 19, available: true,
    skills: ["Childcare", "Cooking & Meals", "Laundry & Ironing"],
    languages: ["Korekore", "Shona", "English"],
    bio: "Trusted by four families over 5 years. Expert in child development support and meal preparation for large households.",
    color: "#5A3A1E",
  },
];

const PAGE_SIZE = 8;

function SkillPill({ label, gold }: { label: string; gold?: boolean }) {
  return (
    <span style={{
      fontFamily: "var(--font-sans)", fontSize: "0.68rem", fontWeight: 500,
      padding: "3px 9px", borderRadius: 2,
      background: gold ? "color-mix(in oklab, var(--gold) 14%, transparent)" : "var(--warm)",
      border: `1px solid ${gold ? "color-mix(in oklab, var(--gold) 30%, transparent)" : "var(--warm-line)"}`,
      color: gold ? "var(--gold)" : "color-mix(in oklab, var(--navy) 60%, transparent)",
      whiteSpace: "nowrap" as const,
    }}>{label}</span>
  );
}

function MaidCard({ m, index, inView }: { m: typeof maids[0]; index: number; inView: boolean }) {
  const waUrl = `https://wa.me/263000000000?text=Hi%20Nova%20Rise%2C%20I%27d%20like%20to%20enquire%20about%20${encodeURIComponent(m.name)}%27s%20profile.`;

  return (
    <div
      style={{
        background: "white",
        border: m.featured ? "1.5px solid var(--gold)" : "1px solid var(--warm-line)",
        borderRadius: 6,
        overflow: "hidden",
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(24px)",
        transition: `opacity 0.55s ease ${(index % PAGE_SIZE) * 0.06}s, transform 0.55s ease ${(index % PAGE_SIZE) * 0.06}s`,
        position: "relative" as const,
        display: "flex",
        flexDirection: "column" as const,
      }}
    >
      {/* Featured badge */}
      {m.featured && (
        <div style={{ position: "absolute", top: 10, right: 10, zIndex: 2, display: "flex", alignItems: "center", gap: 4, background: "var(--gold)", padding: "3px 8px", borderRadius: 2 }}>
          <Award size={10} style={{ color: "var(--navy)" }} />
          <span style={{ fontFamily: "var(--font-sans)", fontSize: "0.6rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--navy)" }}>Featured</span>
        </div>
      )}

      {/* Card header */}
      <div style={{ padding: "1.25rem 1.25rem 1rem", background: m.featured ? `color-mix(in oklab, ${m.color} 5%, white)` : "var(--warm)", borderBottom: "1px solid var(--warm-line)", display: "flex", gap: "0.9rem", alignItems: "flex-start" }}>
        <div style={{
          width: 52, height: 52, borderRadius: "50%", flexShrink: 0,
          background: `color-mix(in oklab, ${m.color} 16%, transparent)`,
          border: `2px solid color-mix(in oklab, ${m.color} 22%, transparent)`,
          display: "flex", alignItems: "center", justifyContent: "center",
        }}>
          <span className="font-display" style={{ fontWeight: 800, fontSize: "1rem", color: m.color }}>{m.initials}</span>
        </div>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.45rem", flexWrap: "wrap" as const, marginBottom: 2 }}>
            <span style={{ fontFamily: "var(--font-sans)", fontWeight: 700, fontSize: "0.98rem", color: "var(--navy)" }}>{m.name}</span>
            <span style={{
              fontSize: "0.6rem", fontFamily: "var(--font-sans)", fontWeight: 700,
              letterSpacing: "0.1em", textTransform: "uppercase" as const, padding: "2px 7px", borderRadius: 2,
              background: m.available ? "color-mix(in oklab, #25D366 15%, transparent)" : "color-mix(in oklab, var(--navy) 8%, transparent)",
              color: m.available ? "#187A3A" : "color-mix(in oklab, var(--navy) 38%, transparent)",
            }}>
              {m.available ? "● Available" : "○ Placed"}
            </span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 4, marginBottom: 3 }}>
            <MapPin size={11} style={{ color: "var(--gold)", flexShrink: 0 }} />
            <span style={{ fontFamily: "var(--font-sans)", fontSize: "0.73rem", color: "color-mix(in oklab, var(--navy) 50%, transparent)" }}>{m.province}</span>
            <span style={{ color: "var(--warm-line)", margin: "0 2px" }}>·</span>
            <span style={{ fontFamily: "var(--font-sans)", fontSize: "0.73rem", color: "color-mix(in oklab, var(--navy) 50%, transparent)" }}>{m.exp} experience</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
            <div style={{ display: "flex", gap: 1 }}>
              {Array.from({ length: 5 }).map((_, i) => (
                <svg key={i} width={11} height={11} viewBox="0 0 24 24" fill={i < Math.floor(m.rating) ? "var(--gold)" : "none"} stroke="var(--gold)" strokeWidth={1.5}>
                  <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
                </svg>
              ))}
            </div>
            <span style={{ fontFamily: "var(--font-sans)", fontWeight: 700, fontSize: "0.78rem", color: "var(--navy)" }}>{m.rating}</span>
            <span style={{ fontFamily: "var(--font-sans)", fontSize: "0.72rem", color: "color-mix(in oklab, var(--navy) 40%, transparent)" }}>({m.reviews} reviews)</span>
          </div>
        </div>
      </div>

      {/* Body */}
      <div style={{ padding: "0.9rem 1.25rem", flex: 1, display: "flex", flexDirection: "column" as const, gap: "0.75rem" }}>
        {/* Bio */}
        <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.8rem", color: "color-mix(in oklab, var(--navy) 62%, transparent)", lineHeight: 1.6, margin: 0 }}>
          {m.bio}
        </p>

        {/* Skills */}
        <div style={{ display: "flex", flexWrap: "wrap" as const, gap: "0.35rem" }}>
          {m.skills.map((s, i) => <SkillPill key={s} label={s} gold={i === 0} />)}
        </div>

        {/* Languages + Cert */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap" as const, gap: "0.4rem" }}>
          <span style={{ fontFamily: "var(--font-sans)", fontSize: "0.7rem", color: "color-mix(in oklab, var(--navy) 40%, transparent)" }}>
            🗣 {m.languages.join(" · ")}
          </span>
          <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
            <Shield size={11} style={{ color: "var(--gold)" }} />
            <span style={{ fontFamily: "var(--font-sans)", fontSize: "0.68rem", fontWeight: 600, color: "var(--gold)", letterSpacing: "0.08em" }}>Level {m.level} Certified</span>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div style={{ padding: "0 1.25rem 1.25rem", display: "flex", gap: "0.5rem" }}>
        <a
          href={waUrl}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            flex: 1, display: "flex", alignItems: "center", justifyContent: "center", gap: 6,
            padding: "0.65rem",
            background: m.available ? "var(--navy)" : "color-mix(in oklab, var(--navy) 10%, transparent)",
            color: m.available ? "var(--warm)" : "color-mix(in oklab, var(--navy) 32%, transparent)",
            fontFamily: "var(--font-sans)", fontWeight: 600, fontSize: "0.74rem",
            letterSpacing: "0.06em", textTransform: "uppercase" as const,
            borderRadius: 3, textDecoration: "none",
            pointerEvents: m.available ? "auto" : "none",
            transition: "background 0.2s ease",
          }}
          onClick={!m.available ? (e) => e.preventDefault() : undefined}
        >
          {m.available ? (
            <>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width={13} height={13}><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              Enquire Now
            </>
          ) : "Currently Placed"}
        </a>
        <button
          onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
          style={{ padding: "0.65rem 0.9rem", background: "transparent", border: "1px solid var(--warm-line)", borderRadius: 3, cursor: "pointer", color: "color-mix(in oklab, var(--navy) 45%, transparent)", fontFamily: "var(--font-sans)", fontSize: "0.72rem", fontWeight: 500, transition: "all 0.2s ease" }}
          title="View full profile"
        >
          View Profile
        </button>
      </div>
    </div>
  );
}

export default function MaidListingSection() {
  const { ref, inView } = useInView(0.05);
  const [search, setSearch] = useState("");
  const [province, setProvince] = useState("All Provinces");
  const [skill, setSkill] = useState("All Skills");
  const [availableOnly, setAvailableOnly] = useState(false);
  const [showCount, setShowCount] = useState(PAGE_SIZE);
  const [filtersOpen, setFiltersOpen] = useState(false);

  const filtered = useMemo(() => {
    return maids.filter((m) => {
      if (availableOnly && !m.available) return false;
      if (province !== "All Provinces" && m.province !== province) return false;
      if (skill !== "All Skills" && !m.skills.includes(skill)) return false;
      if (search.trim()) {
        const q = search.toLowerCase();
        return (
          m.name.toLowerCase().includes(q) ||
          m.province.toLowerCase().includes(q) ||
          m.skills.some((s) => s.toLowerCase().includes(q)) ||
          m.bio.toLowerCase().includes(q)
        );
      }
      return true;
    });
  }, [search, province, skill, availableOnly]);

  const visible = filtered.slice(0, showCount);
  const hasMore = showCount < filtered.length;

  const clearFilters = () => {
    setSearch(""); setProvince("All Provinces"); setSkill("All Skills"); setAvailableOnly(false);
  };
  const hasActiveFilters = search || province !== "All Provinces" || skill !== "All Skills" || availableOnly;

  return (
    <section id="find-a-maid" style={{ background: "var(--warm)" }}>
      <div className="container py-20 lg:py-28" ref={ref}>
        {/* Header */}
        <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem", marginBottom: "2.5rem" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
            <span className="gold-rule" />
            <span style={{ fontFamily: "var(--font-sans)", fontWeight: 500, fontSize: "0.72rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--gold)" }}>
              Verified Worker Directory
            </span>
          </div>
          <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", flexWrap: "wrap", gap: "1rem" }}>
            <h2 className="font-display" style={{ fontWeight: 700, fontSize: "clamp(2rem, 4vw, 3rem)", color: "var(--navy)", lineHeight: 1.15, margin: 0 }}>
              Find Your Perfect<br />
              <em style={{ color: "var(--gold)" }}>Domestic Professional</em>
            </h2>
            <div style={{ fontFamily: "var(--font-sans)", fontSize: "0.82rem", color: "color-mix(in oklab, var(--navy) 50%, transparent)" }}>
              <strong style={{ color: "var(--navy)" }}>{filtered.length}</strong> worker{filtered.length !== 1 ? "s" : ""} found
            </div>
          </div>
        </div>

        {/* Search + Filter Bar */}
        <div style={{ background: "white", border: "1px solid var(--warm-line)", borderRadius: 6, padding: "1.25rem", marginBottom: "2rem", boxShadow: "0 2px 16px -8px color-mix(in oklab, var(--navy) 10%, transparent)" }}>
          {/* Search row */}
          <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap", marginBottom: filtersOpen ? "1rem" : 0 }}>
            <div style={{ position: "relative", flex: "1 1 280px" }}>
              <Search size={15} style={{ position: "absolute", left: 12, top: "50%", transform: "translateY(-50%)", color: "color-mix(in oklab, var(--navy) 35%, transparent)", pointerEvents: "none" }} />
              <input
                value={search}
                onChange={(e) => { setSearch(e.target.value); setShowCount(PAGE_SIZE); }}
                placeholder="Search by name, skill, or province…"
                style={{
                  width: "100%", paddingLeft: 36, paddingRight: 14, paddingTop: "0.65rem", paddingBottom: "0.65rem",
                  fontFamily: "var(--font-sans)", fontSize: "0.88rem", color: "var(--navy)",
                  background: "var(--warm)", border: "1px solid var(--warm-line)", borderRadius: 4, outline: "none",
                  boxSizing: "border-box",
                }}
              />
            </div>
            <button
              onClick={() => setFiltersOpen(!filtersOpen)}
              style={{
                display: "flex", alignItems: "center", gap: 6, padding: "0.65rem 1.1rem",
                background: filtersOpen ? "var(--navy)" : "var(--warm)",
                color: filtersOpen ? "var(--warm)" : "var(--navy)",
                border: "1px solid var(--warm-line)", borderRadius: 4, cursor: "pointer",
                fontFamily: "var(--font-sans)", fontWeight: 500, fontSize: "0.82rem",
                transition: "all 0.2s ease",
              }}
            >
              <Filter size={14} />
              Filters
              {hasActiveFilters && <span style={{ width: 7, height: 7, borderRadius: "50%", background: "var(--gold)", marginLeft: 2 }} />}
              <ChevronDown size={13} style={{ transform: filtersOpen ? "rotate(180deg)" : "rotate(0)", transition: "transform 0.2s ease" }} />
            </button>
            {hasActiveFilters && (
              <button onClick={clearFilters} style={{ display: "flex", alignItems: "center", gap: 5, padding: "0.65rem 1rem", background: "transparent", border: "1px solid color-mix(in oklab, var(--navy) 18%, transparent)", borderRadius: 4, cursor: "pointer", fontFamily: "var(--font-sans)", fontSize: "0.8rem", color: "color-mix(in oklab, var(--navy) 55%, transparent)", transition: "all 0.2s ease" }}>
                <X size={12} /> Clear
              </button>
            )}
          </div>

          {/* Expanded filters */}
          {filtersOpen && (
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "0.75rem", paddingTop: "1rem", borderTop: "1px solid var(--warm-line)" }}>
              {/* Province */}
              <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                <label style={{ fontFamily: "var(--font-sans)", fontSize: "0.68rem", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--gold)" }}>Province</label>
                <select
                  value={province}
                  onChange={(e) => { setProvince(e.target.value); setShowCount(PAGE_SIZE); }}
                  style={{ padding: "0.6rem 0.85rem", fontFamily: "var(--font-sans)", fontSize: "0.85rem", color: "var(--navy)", background: "var(--warm)", border: "1px solid var(--warm-line)", borderRadius: 4, cursor: "pointer", outline: "none" }}
                >
                  {PROVINCES.map((p) => <option key={p} value={p}>{p}</option>)}
                </select>
              </div>

              {/* Skill */}
              <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                <label style={{ fontFamily: "var(--font-sans)", fontSize: "0.68rem", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--gold)" }}>Specialisation</label>
                <select
                  value={skill}
                  onChange={(e) => { setSkill(e.target.value); setShowCount(PAGE_SIZE); }}
                  style={{ padding: "0.6rem 0.85rem", fontFamily: "var(--font-sans)", fontSize: "0.85rem", color: "var(--navy)", background: "var(--warm)", border: "1px solid var(--warm-line)", borderRadius: 4, cursor: "pointer", outline: "none" }}
                >
                  {SKILLS.map((s) => <option key={s} value={s}>{s}</option>)}
                </select>
              </div>

              {/* Availability toggle */}
              <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                <label style={{ fontFamily: "var(--font-sans)", fontSize: "0.68rem", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--gold)" }}>Availability</label>
                <button
                  onClick={() => { setAvailableOnly(!availableOnly); setShowCount(PAGE_SIZE); }}
                  style={{
                    display: "flex", alignItems: "center", gap: 8, padding: "0.6rem 0.85rem",
                    background: availableOnly ? "color-mix(in oklab, #25D366 12%, transparent)" : "var(--warm)",
                    border: `1px solid ${availableOnly ? "#25D366" : "var(--warm-line)"}`,
                    borderRadius: 4, cursor: "pointer",
                    fontFamily: "var(--font-sans)", fontSize: "0.85rem",
                    color: availableOnly ? "#187A3A" : "color-mix(in oklab, var(--navy) 55%, transparent)",
                    transition: "all 0.2s ease",
                  }}
                >
                  <div style={{ width: 14, height: 14, borderRadius: "50%", background: availableOnly ? "#25D366" : "var(--warm-line)", transition: "background 0.2s ease" }} />
                  Available Only
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Empty state */}
        {filtered.length === 0 && (
          <div style={{ textAlign: "center", padding: "4rem 1rem" }}>
            <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "1.5rem", color: "color-mix(in oklab, var(--navy) 25%, transparent)", marginBottom: "0.75rem" }}>No workers match your filters</div>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.9rem", color: "color-mix(in oklab, var(--navy) 45%, transparent)", marginBottom: "1.5rem" }}>Try broadening your search or clearing the filters.</p>
            <button className="btn-gold" onClick={clearFilters}>Clear all filters</button>
          </div>
        )}

        {/* Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(290px, 1fr))", gap: "1.25rem", marginBottom: "2.5rem" }}>
          {visible.map((m, i) => (
            <MaidCard key={m.id} m={m} index={i} inView={inView} />
          ))}
        </div>

        {/* Load more / Register CTA */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "1.5rem" }}>
          {hasMore && (
            <button
              onClick={() => setShowCount((n) => n + PAGE_SIZE)}
              style={{ display: "flex", alignItems: "center", gap: 8, padding: "0.85rem 2rem", background: "white", border: "1.5px solid var(--warm-line)", borderRadius: 4, cursor: "pointer", fontFamily: "var(--font-sans)", fontWeight: 600, fontSize: "0.85rem", color: "var(--navy)", transition: "all 0.25s ease" }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = "var(--gold)"; e.currentTarget.style.color = "var(--gold)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = "var(--warm-line)"; e.currentTarget.style.color = "var(--navy)"; }}
            >
              Show more workers ({filtered.length - showCount} remaining)
              <ChevronDown size={15} />
            </button>
          )}
          <div style={{ textAlign: "center", padding: "1.5rem 2rem", background: "var(--navy)", borderRadius: 6, maxWidth: 560, width: "100%" }}>
            <div className="font-display" style={{ fontWeight: 600, fontSize: "1.1rem", color: "var(--warm)", marginBottom: "0.5rem" }}>Are you a trained domestic worker?</div>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.85rem", color: "color-mix(in oklab, var(--warm) 65%, transparent)", lineHeight: 1.6, marginBottom: "1.25rem" }}>
              Create your free verified profile and get matched with employers across Zimbabwe.
            </p>
            <div style={{ display: "flex", justifyContent: "center", gap: "0.75rem", flexWrap: "wrap" }}>
              <button className="btn-gold" onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}>
                Create Your Profile
              </button>
              <a href="https://wa.me/263000000000?text=Hi%2C%20I%27d%20like%20to%20register%20my%20profile%20on%20the%20Nova%20Rise%20platform." target="_blank" rel="noopener noreferrer"
                style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "0.8rem 1.4rem", background: "#25D366", borderRadius: 2, textDecoration: "none" }}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" width={14} height={14}><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                <span style={{ fontFamily: "var(--font-sans)", fontWeight: 600, fontSize: "0.82rem", color: "white" }}>Register on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
