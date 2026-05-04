import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 350, suffix: "K+", label: "Domestic Workers in Zimbabwe", sublabel: "Informal market to formalise" },
  { value: 3, suffix: "", label: "Business Verticals", sublabel: "Cleaning · Academy · Platform" },
  { value: 10, suffix: "", label: "Provinces Covered", sublabel: "Nationwide placement network" },
  { value: 24, suffix: "hr", label: "Quote Turnaround", sublabel: "After site inspection" },
];

function CountUp({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true;
        const start = performance.now();
        const dur = 1500;
        const tick = (now: number) => {
          const p = Math.min((now - start) / dur, 1);
          const eased = 1 - Math.pow(1 - p, 3);
          setCount(Math.round(eased * target));
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      }
    }, { threshold: 0.5 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [target]);
  return <span ref={ref}>{count}{suffix}</span>;
}

export default function StatsBar() {
  return (
    <section style={{ background: "var(--warm)", borderBottom: "1px solid var(--warm-line)" }}>
      <div className="container py-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((s) => (
            <div key={s.label} className="stat-card p-6" style={{ background: "white", boxShadow: "0 2px 12px color-mix(in oklab, var(--navy) 6%, transparent)" }}>
              <div className="font-display" style={{ fontWeight: 700, fontSize: "2.5rem", color: "var(--navy)", lineHeight: 1, marginBottom: "0.5rem" }}>
                <CountUp target={s.value} suffix={s.suffix} />
              </div>
              <div style={{ fontFamily: "var(--font-sans)", fontWeight: 600, fontSize: "0.85rem", color: "var(--navy)", marginBottom: "0.25rem" }}>{s.label}</div>
              <div style={{ fontFamily: "var(--font-sans)", fontSize: "0.75rem", color: "color-mix(in oklab, var(--navy) 55%, transparent)" }}>{s.sublabel}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
