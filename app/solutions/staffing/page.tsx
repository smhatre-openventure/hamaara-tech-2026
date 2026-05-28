import type { Metadata } from "next";
import Link from "next/link";
import { CountUp } from "@/components/count-up";
import { Reveal } from "@/components/reveal";

export const metadata: Metadata = {
  title: "Staffing — Hamaara Technologies",
  description: "Senior engineers and architects on demand.",
};

export default function StaffingPage() {
  return (
    <>
      {/* Page hero */}
      <section className="relative z-[1]" style={{ padding: "72px clamp(20px,4vw,48px) 56px", borderBottom: "1px solid var(--color-line)" }}>
        <div className="max-w-[1160px] mx-auto grid gap-[52px] items-center max-[860px]:grid-cols-1" style={{ gridTemplateColumns: "1fr 1fr" }}>
          <div>
            <div className="font-mono text-[10px] tracking-[0.1em] uppercase mb-3.5" style={{ color: "var(--color-ink-3)" }}>
              <Link href="/" className="no-underline" style={{ color: "var(--color-ink-3)" }}>Home</Link>
              {" / Solutions / Staffing"}
            </div>
            <div className="inline-flex items-center gap-2 font-mono text-[10.5px] tracking-[0.14em] uppercase mb-3.5" style={{ color: "var(--color-teal)" }}>
              <span className="w-5 h-px opacity-50" style={{ background: "var(--color-teal)" }} />
              SOLUTIONS · 06
            </div>
            <h1 className="font-semibold leading-[1.1] tracking-[-0.02em] mt-3 mb-4.5" style={{ fontSize: "clamp(32px,4vw,50px)" }}>
              Senior talent, <em className="not-italic" style={{ color: "var(--color-violet)" }}>on demand</em>.
            </h1>
            <p className="mb-6.5 text-[15.5px] leading-[1.65] max-w-[460px]" style={{ color: "var(--color-ink-2)" }}>
              Senior engineers, architects, and platform specialists — vetted, embedded, and accountable.
            </p>
            <div className="flex gap-3 flex-wrap">
              <Link href="/contact" className="inline-flex items-center gap-2 px-5 py-[11px] rounded-lg text-[14px] font-medium no-underline transition-all duration-[180ms] hover:-translate-y-px" style={{ background: "var(--color-cta)", color: "#ffffff" }}>
                Request a roster →
              </Link>
              <Link href="#detail" className="inline-flex items-center gap-2 px-5 py-[11px] rounded-lg text-[14px] font-medium no-underline transition-all duration-[180ms] hover:-translate-y-px hover:bg-white/5" style={{ border: "1px solid rgba(255,255,255,0.12)", color: "var(--color-ink)" }}>
                Read More →
              </Link>
            </div>
          </div>

          {/* Roster mockup */}
          <div aria-hidden="true" className="rounded-[10px] overflow-hidden font-mono text-[11px]" style={{ background: "var(--color-bg-2)", border: "1px solid rgba(255,255,255,0.12)", boxShadow: "0 24px 60px -12px rgba(0,0,0,0.55)" }}>
            <div className="px-3.5 py-2.5 flex items-center justify-between" style={{ background: "rgba(0,0,0,0.25)", borderBottom: "1px solid var(--color-line)" }}>
              <div className="flex items-center gap-3">
                <span className="text-[10px] tracking-[0.12em] uppercase" style={{ color: "var(--color-ink-2)" }}>HT-ROSTER · TEAM</span>
                <span className="inline-flex items-center gap-[5px] text-[10px] tracking-[0.1em] uppercase" style={{ color: "var(--color-teal)" }}>
                  <span className="w-[5px] h-[5px] rounded-full animate-blink" style={{ background: "var(--color-teal)" }} />
                  EMBEDDED · 14 DAYS
                </span>
              </div>
              <div className="flex gap-[3px]">
                {["TEAM", "SKILLS", "VELOCITY"].map((tab, i) => (
                  <span key={tab} className="px-[9px] py-[3px] text-[9px] tracking-[0.1em] uppercase rounded-[4px]" style={{ color: i === 0 ? "var(--color-teal)" : "var(--color-ink-3)", border: i === 0 ? "1px solid var(--color-line-t)" : "1px solid var(--color-line)", background: i === 0 ? "rgba(167,139,250,0.06)" : "transparent" }}>
                    {tab}
                  </span>
                ))}
              </div>
            </div>
            <div className="p-3.5 flex flex-col gap-2.5">
              {[
                { initials: "AM", name: "Aarav M.", role: "Staff Eng", skills: "DIST. SYSTEMS · 9 YRS", pct: "100%" },
                { initials: "PK", name: "Priya K.", role: "ML Eng", skills: "LLMOPS · RAG · 6 YRS", pct: "80%" },
                { initials: "RV", name: "Rohan V.", role: "Platform Arch", skills: "GCP · K8S · 11 YRS", pct: "60%" },
                { initials: "SI", name: "Saanvi I.", role: "Frontend Lead", skills: "REACT · DS · 7 YRS", pct: "50%" },
              ].map((member, idx) => (
                <div key={member.initials} className="mkp-row flex items-center gap-2.5 px-2.5 py-2 rounded-[6px]" style={{ border: idx === 0 ? "1px solid var(--color-line-t)" : "1px solid var(--color-line)", background: idx === 0 ? "rgba(167,139,250,0.05)" : "rgba(0,0,0,0.18)", display: "grid", gridTemplateColumns: "22px 1fr auto" }}>
                  <div className="w-5 h-5 rounded-full grid place-items-center font-mono text-[8px]" style={{ background: "rgba(249,115,22,0.2)", border: "1px solid rgba(249,115,22,0.3)", color: "var(--color-violet)" }}>
                    {member.initials}
                  </div>
                  <div>
                    <div className="text-[12px] font-medium">{member.name} <span className="font-normal" style={{ color: "var(--color-ink-3)" }}>· {member.role}</span></div>
                    <div className="font-mono text-[9px] tracking-[0.06em]" style={{ color: "var(--color-ink-3)" }}>{member.skills}</div>
                  </div>
                  <span className="font-mono text-[10px]" style={{ color: "var(--color-ink-3)" }}>{member.pct}</span>
                </div>
              ))}
            </div>
            <div className="px-3.5 py-[9px] flex justify-between text-[9.5px] tracking-[0.08em] uppercase" style={{ borderTop: "1px solid var(--color-line)", background: "rgba(0,0,0,0.2)", color: "var(--color-ink-3)" }}>
              <span>4 EMBEDDED · 2 ROTATING</span><span>SPRINT 3/12 · VEL: 42</span>
            </div>
          </div>
        </div>
      </section>

      {/* Detail */}
      <section className="relative z-[1]" id="detail" style={{ padding: "88px clamp(20px,4vw,48px)" }}>
        <div className="max-w-[1160px] mx-auto">
          <div className="grid gap-9 items-end mb-12 max-[700px]:grid-cols-1" style={{ gridTemplateColumns: "1fr 1fr" }}>
            <div>
              <div className="inline-flex items-center gap-2 font-mono text-[10.5px] tracking-[0.14em] uppercase mb-3.5" style={{ color: "var(--color-teal)" }}>
                <span className="w-5 h-px opacity-50" style={{ background: "var(--color-teal)" }} />
                ROLES WE EMBED · 01
              </div>
              <h2 className="font-semibold leading-[1.1] tracking-[-0.02em] mt-3.5" style={{ fontSize: "clamp(28px,3.5vw,44px)" }}>
                Senior, <em className="not-italic" style={{ color: "var(--color-violet)" }}>specific</em>, accountable.
              </h2>
            </div>
            <p className="text-[15.5px] leading-[1.65] max-w-[400px]" style={{ color: "var(--color-ink-2)" }}>
              Every embed has shipped what they&apos;re being hired to ship.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-4 max-[860px]:grid-cols-1">
            {[
              { num: "/01", title: "Staff & Principal Engineers", desc: "Distributed systems, platform, ML, security. 8+ years." },
              { num: "/02", title: "Platform & SRE", desc: "Kubernetes, observability, on-call discipline. Production scars." },
              { num: "/03", title: "Data Engineering", desc: "Lakehouse architects, dbt experts, streaming specialists." },
              { num: "/04", title: "AI / ML Engineering", desc: "Agents, RAG, evals, fine-tuning — in production, not academic." },
              { num: "/05", title: "Frontend & Design Systems", desc: "React, design tokens, accessibility, performance budgets." },
              { num: "/06", title: "Engineering Management", desc: "EMs and tech leads in your tools and your timezone." },
            ].map((card) => (
              <Reveal key={card.num}>
                <div className="rounded-[10px] p-6 transition-all duration-200 hover:-translate-y-[2px]" style={{ border: "1px solid var(--color-line)", background: "var(--color-bg-2)" }}>
                  <div className="font-mono text-[10px] tracking-[0.12em] mb-3" style={{ color: "var(--color-teal)" }}>{card.num}</div>
                  <h3 className="text-[16px] font-semibold mb-2">{card.title}</h3>
                  <p className="text-[13.5px] leading-[1.6]" style={{ color: "var(--color-ink-2)" }}>{card.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="relative z-[1]" style={{ borderTop: "1px solid var(--color-line)", borderBottom: "1px solid var(--color-line)", padding: "44px clamp(20px,4vw,48px)", background: "rgba(255,255,255,0.015)" }}>
        <div className="max-w-[1160px] mx-auto grid grid-cols-4 gap-6 max-[680px]:grid-cols-2">
          {[
            { target: 8, suffix: "+", label: "Avg. years exp." },
            { target: 14, suffix: " days", label: "Median embed time" },
            { target: 94, suffix: "%", label: "Renewal rate" },
            { target: 60, suffix: "+", label: "Specialists on network" },
          ].map((stat) => (
            <Reveal key={stat.label}>
              <div className="text-[40px] font-semibold leading-none tracking-[-0.03em]" style={{ background: "linear-gradient(135deg,#fed7aa,#ddd6fe)", WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}>
                <CountUp target={stat.target} suffix={stat.suffix} />
              </div>
              <div className="font-mono text-[10px] tracking-[0.12em] uppercase mt-2" style={{ color: "var(--color-ink-3)" }}>{stat.label}</div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="relative z-[1] text-center" id="cta" style={{ padding: "88px clamp(20px,4vw,48px)" }}>
        <Reveal className="max-w-[680px] mx-auto rounded-[14px] p-[56px_40px] relative overflow-hidden" style={{ border: "1px solid rgba(255,255,255,0.12)", background: "var(--color-bg-2)" }}>
          <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 500px 260px at 50% 0%, rgba(249,115,22,0.08), transparent 60%)" }} />
          <h2 className="relative font-semibold tracking-[-0.02em] mb-3.5" style={{ fontSize: "clamp(28px,3.5vw,42px)" }}>
            Need a <em className="not-italic" style={{ color: "var(--color-violet)" }}>specialist</em>?
          </h2>
          <p className="relative text-[15px] max-w-[420px] mx-auto mb-6.5 leading-[1.65]" style={{ color: "var(--color-ink-2)" }}>
            Send us the role. We&apos;ll send three CVs in 48 hours.
          </p>
          <Link href="/contact" className="relative inline-flex items-center gap-2 px-5 py-[11px] rounded-lg text-[14px] font-medium no-underline transition-all duration-[180ms] hover:-translate-y-px" style={{ background: "var(--color-cta)", color: "#ffffff" }}>
            Start Your Journey →
          </Link>
        </Reveal>
      </section>
    </>
  );
}
