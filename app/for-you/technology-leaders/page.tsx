import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/reveal";

export const metadata: Metadata = {
  title: "For Technology Leaders — Hamaara Technologies",
  description: "Engagements designed for CTOs and VPs of Engineering.",
};

export default function TechnologyLeadersPage() {
  return (
    <>
      <section className="relative z-[1]" style={{ padding: "72px clamp(20px,4vw,48px) 56px", borderBottom: "1px solid var(--color-line)" }}>
        <div className="max-w-[1160px] mx-auto grid gap-[52px] items-center max-[860px]:grid-cols-1" style={{ gridTemplateColumns: "1fr 1fr" }}>
          <div>
            <div className="font-mono text-[10px] tracking-[0.1em] uppercase mb-3.5" style={{ color: "var(--color-ink-3)" }}>
              <Link href="/" className="no-underline" style={{ color: "var(--color-ink-3)" }}>Home</Link>
              {" / For You / Technology Leaders"}
            </div>
            <div className="inline-flex items-center gap-2 font-mono text-[10.5px] tracking-[0.14em] uppercase mb-3.5" style={{ color: "var(--color-teal)" }}>
              <span className="w-5 h-px opacity-50" style={{ background: "var(--color-teal)" }} />
              FOR YOU · 01
            </div>
            <h1 className="font-semibold leading-[1.1] tracking-[-0.02em] mt-3 mb-4.5" style={{ fontSize: "clamp(32px,4vw,50px)" }}>
              Built for <em className="not-italic" style={{ color: "var(--color-violet)" }}>technology leaders</em>.
            </h1>
            <p className="mb-6.5 text-[15.5px] leading-[1.65] max-w-[460px]" style={{ color: "var(--color-ink-2)" }}>
              Reduce delivery risk and ship faster — for CTOs, VPs Eng, and platform leaders.
            </p>
            <div className="flex gap-3 flex-wrap">
              <Link href="/contact" className="inline-flex items-center gap-2 px-5 py-[11px] rounded-lg text-[14px] font-medium no-underline transition-all duration-[180ms] hover:-translate-y-px" style={{ background: "var(--color-cta)", color: "#ffffff" }}>
                Book a session →
              </Link>
              <Link href="#detail" className="inline-flex items-center gap-2 px-5 py-[11px] rounded-lg text-[14px] font-medium no-underline transition-all duration-[180ms] hover:-translate-y-px hover:bg-white/5" style={{ border: "1px solid rgba(255,255,255,0.12)", color: "var(--color-ink)" }}>
                Read More →
              </Link>
            </div>
          </div>

          {/* Leadership mockup */}
          <div aria-hidden="true" className="rounded-[10px] overflow-hidden font-mono text-[11px]" style={{ background: "var(--color-bg-2)", border: "1px solid rgba(255,255,255,0.12)", boxShadow: "0 24px 60px -12px rgba(0,0,0,0.55)" }}>
            <div className="px-3.5 py-2.5 flex items-center justify-between" style={{ background: "rgba(0,0,0,0.25)", borderBottom: "1px solid var(--color-line)" }}>
              <div className="flex items-center gap-3">
                <span className="text-[10px] tracking-[0.12em] uppercase" style={{ color: "var(--color-ink-2)" }}>HT · LEADERSHIP VIEW</span>
                <span className="inline-flex items-center gap-[5px] text-[10px] tracking-[0.1em] uppercase" style={{ color: "var(--color-teal)" }}>
                  <span className="w-[5px] h-[5px] rounded-full animate-blink" style={{ background: "var(--color-teal)" }} />
                  QBR · LIVE
                </span>
              </div>
              <div className="flex gap-[3px]">
                {["PORTFOLIO", "RISKS", "ROI"].map((tab, i) => (
                  <span key={tab} className="px-[9px] py-[3px] text-[9px] tracking-[0.1em] uppercase rounded-[4px]" style={{ color: i === 0 ? "var(--color-teal)" : "var(--color-ink-3)", border: i === 0 ? "1px solid var(--color-line-t)" : "1px solid var(--color-line)", background: i === 0 ? "rgba(167,139,250,0.06)" : "transparent" }}>
                    {tab}
                  </span>
                ))}
              </div>
            </div>
            <div className="p-3.5 flex flex-col gap-2.5">
              <div className="grid grid-cols-3 gap-2">
                {[
                  { label: "PORTFOLIO ROI", value: "3.4", unit: "x", delta: "vs plan +0.6" },
                  { label: "CYCLE TIME", value: "4.2", unit: "d", delta: "−31%" },
                  { label: "FTE EQUIV.", value: "+18", delta: "augmented" },
                ].map((kpi) => (
                  <div key={kpi.label} className="rounded-[6px] p-[9px_10px]" style={{ border: "1px solid var(--color-line)", background: "rgba(0,0,0,0.18)" }}>
                    <div className="text-[9px] tracking-[0.1em] uppercase" style={{ color: "var(--color-ink-3)" }}>{kpi.label}</div>
                    <div className="text-[17px] font-semibold mt-[3px]" style={{ color: "var(--color-ink)" }}>
                      {kpi.value}<small className="text-[10px] font-normal ml-px" style={{ color: "var(--color-ink-3)" }}>{kpi.unit}</small>
                    </div>
                    <div className="text-[10px] mt-0.5" style={{ color: "var(--color-teal)" }}>{kpi.delta}</div>
                  </div>
                ))}
              </div>
              <div className="rounded-[6px] p-[10px_12px] flex flex-col gap-[7px]" style={{ border: "1px solid var(--color-line)", background: "rgba(0,0,0,0.2)" }}>
                {[
                  { name: "AI Customer Service — Ph. 2", pct: 88, color: "#a78bfa" },
                  { name: "Data Lakehouse Migration", pct: 62, color: "#a78bfa" },
                  { name: "NetSuite Quarter-Close Auto", pct: 44, color: "#f59e0b" },
                  { name: "Salesforce CPQ Rebuild", pct: 74, color: "#a78bfa" },
                ].map((proj) => (
                  <div key={proj.name} className="flex justify-between items-center gap-2.5 font-mono text-[10.5px]">
                    <span className="flex-1 min-w-0 overflow-hidden text-ellipsis whitespace-nowrap" style={{ color: "var(--color-ink-2)" }}>{proj.name}</span>
                    <div className="flex items-center gap-1.5 flex-shrink-0">
                      <div className="w-[72px] h-[5px] rounded-[2px] overflow-hidden" style={{ background: "rgba(255,255,255,0.06)" }}>
                        <div className="h-full rounded-[2px]" style={{ width: `${proj.pct}%`, background: proj.color }} />
                      </div>
                      <span className="text-[10px]" style={{ color: proj.color }}>{proj.pct}%</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="px-3.5 py-[9px] flex justify-between text-[9.5px] tracking-[0.08em] uppercase" style={{ borderTop: "1px solid var(--color-line)", background: "rgba(0,0,0,0.2)", color: "var(--color-ink-3)" }}>
              <span>9 ACTIVE · 4 IN DELIVERY</span><span>NEXT QBR: DEC 12</span>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-[1]" id="detail" style={{ padding: "88px clamp(20px,4vw,48px)" }}>
        <div className="max-w-[1160px] mx-auto">
          <div className="grid gap-9 items-end mb-12 max-[700px]:grid-cols-1" style={{ gridTemplateColumns: "1fr 1fr" }}>
            <div>
              <div className="inline-flex items-center gap-2 font-mono text-[10.5px] tracking-[0.14em] uppercase mb-3.5" style={{ color: "var(--color-teal)" }}>
                <span className="w-5 h-px opacity-50" style={{ background: "var(--color-teal)" }} />
                WHAT YOU GET · 01
              </div>
              <h2 className="font-semibold leading-[1.1] tracking-[-0.02em] mt-3.5" style={{ fontSize: "clamp(28px,3.5vw,44px)" }}>
                Outcomes, <em className="not-italic" style={{ color: "var(--color-violet)" }}>measured</em>.
              </h2>
            </div>
            <p className="text-[15.5px] leading-[1.65] max-w-[400px]" style={{ color: "var(--color-ink-2)" }}>
              Every engagement is instrumented from day one. You see the same dashboard we do.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-4 max-[860px]:grid-cols-1">
            {[
              { num: "/01", title: "Faster Time to Production", desc: "10-week median vs the 9-month industry average. We ship, not phase." },
              { num: "/02", title: "Senior Teams · Embedded", desc: "The senior who scopes the work is the senior who ships it." },
              { num: "/03", title: "Co-Build, Not Throw-Over", desc: "Inside your repo, your CI, your on-call rotation." },
              { num: "/04", title: "Instrumented Outcomes", desc: "ROI, cycle time, error budgets — agreed upfront, tracked weekly." },
              { num: "/05", title: "Quarterly Optionality", desc: "Ramp up, ramp down, or take in-house at any quarterly boundary." },
              { num: "/06", title: "Defensible Architecture", desc: "We document the why. Your team owns the rationale." },
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

      <section className="relative z-[1] text-center" id="cta" style={{ padding: "88px clamp(20px,4vw,48px)" }}>
        <Reveal className="max-w-[680px] mx-auto rounded-[14px] p-[56px_40px] relative overflow-hidden" style={{ border: "1px solid rgba(255,255,255,0.12)", background: "var(--color-bg-2)" }}>
          <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 500px 260px at 50% 0%, rgba(249,115,22,0.08), transparent 60%)" }} />
          <h2 className="relative font-semibold tracking-[-0.02em] mb-3.5" style={{ fontSize: "clamp(28px,3.5vw,42px)" }}>
            Pressure-test your <em className="not-italic" style={{ color: "var(--color-violet)" }}>roadmap</em>.
          </h2>
          <p className="relative text-[15px] max-w-[420px] mx-auto mb-6.5 leading-[1.65]" style={{ color: "var(--color-ink-2)" }}>
            60-minute working session. No deck. Just the conversation your team needs.
          </p>
          <Link href="/contact" className="relative inline-flex items-center gap-2 px-5 py-[11px] rounded-lg text-[14px] font-medium no-underline transition-all duration-[180ms] hover:-translate-y-px" style={{ background: "var(--color-cta)", color: "#ffffff" }}>
            Start Your Journey →
          </Link>
        </Reveal>
      </section>
    </>
  );
}
