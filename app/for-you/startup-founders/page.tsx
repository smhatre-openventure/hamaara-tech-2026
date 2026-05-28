import type { Metadata } from "next";
import Link from "next/link";
import { CountUp } from "@/components/count-up";
import { Reveal } from "@/components/reveal";

export const metadata: Metadata = {
  title: "For Startup Founders — Hamaara Technologies",
  description: "Zero to production in weeks for startup founders.",
};

export default function StartupFoundersPage() {
  return (
    <>
      <section className="relative z-[1]" style={{ padding: "72px clamp(20px,4vw,48px) 56px", borderBottom: "1px solid var(--color-line)" }}>
        <div className="max-w-[1160px] mx-auto grid gap-[52px] items-center max-[860px]:grid-cols-1" style={{ gridTemplateColumns: "1fr 1fr" }}>
          <div>
            <div className="font-mono text-[10px] tracking-[0.1em] uppercase mb-3.5" style={{ color: "var(--color-ink-3)" }}>
              <Link href="/" className="no-underline" style={{ color: "var(--color-ink-3)" }}>Home</Link>
              {" / For You / Startup Founders"}
            </div>
            <div className="inline-flex items-center gap-2 font-mono text-[10.5px] tracking-[0.14em] uppercase mb-3.5" style={{ color: "var(--color-teal)" }}>
              <span className="w-5 h-px opacity-50" style={{ background: "var(--color-teal)" }} />
              FOR YOU · 02
            </div>
            <h1 className="font-semibold leading-[1.1] tracking-[-0.02em] mt-3 mb-4.5" style={{ fontSize: "clamp(32px,4vw,50px)" }}>
              Built for <em className="not-italic" style={{ color: "var(--color-violet)" }}>startup founders</em>.
            </h1>
            <p className="mb-6.5 text-[15.5px] leading-[1.65] max-w-[460px]" style={{ color: "var(--color-ink-2)" }}>
              Zero to production in weeks. Senior engineering, AI-native architecture, decisions you can defend at board level.
            </p>
            <div className="flex gap-3 flex-wrap">
              <Link href="/contact" className="inline-flex items-center gap-2 px-5 py-[11px] rounded-lg text-[14px] font-medium no-underline transition-all duration-[180ms] hover:-translate-y-px" style={{ background: "var(--color-teal)", color: "#0b0c0f" }}>
                Scope an MVP →
              </Link>
              <Link href="#detail" className="inline-flex items-center gap-2 px-5 py-[11px] rounded-lg text-[14px] font-medium no-underline transition-all duration-[180ms] hover:-translate-y-px hover:bg-white/5" style={{ border: "1px solid rgba(255,255,255,0.12)", color: "var(--color-ink)" }}>
                Read More →
              </Link>
            </div>
          </div>

          {/* Startup track mockup */}
          <div aria-hidden="true" className="rounded-[10px] overflow-hidden font-mono text-[11px]" style={{ background: "var(--color-bg-2)", border: "1px solid rgba(255,255,255,0.12)", boxShadow: "0 24px 60px -12px rgba(0,0,0,0.55)" }}>
            <div className="px-3.5 py-2.5 flex items-center justify-between" style={{ background: "rgba(0,0,0,0.25)", borderBottom: "1px solid var(--color-line)" }}>
              <div className="flex items-center gap-3">
                <span className="text-[10px] tracking-[0.12em] uppercase" style={{ color: "var(--color-ink-2)" }}>HT · STARTUP TRACK</span>
                <span className="inline-flex items-center gap-[5px] text-[10px] tracking-[0.1em] uppercase" style={{ color: "var(--color-teal)" }}>
                  <span className="w-[5px] h-[5px] rounded-full animate-blink" style={{ background: "var(--color-teal)" }} />
                  WEEK 6 OF 12
                </span>
              </div>
              <div className="flex gap-[3px]">
                {["TIMELINE", "VELOCITY", "BURN"].map((tab, i) => (
                  <span key={tab} className="px-[9px] py-[3px] text-[9px] tracking-[0.1em] uppercase rounded-[4px]" style={{ color: i === 0 ? "var(--color-teal)" : "var(--color-ink-3)", border: i === 0 ? "1px solid var(--color-line-t)" : "1px solid var(--color-line)", background: i === 0 ? "rgba(45,212,191,0.06)" : "transparent" }}>
                    {tab}
                  </span>
                ))}
              </div>
            </div>
            <div className="p-3.5 flex flex-col gap-2.5">
              <div className="grid grid-cols-3 gap-2">
                {[
                  { label: "TIME TO MVP", value: "6.4", unit: "wk" },
                  { label: "BURN MULTIPLE", value: "0.8" },
                  { label: "COMMITS/WK", value: "14", delta: "+3 wk/wk" },
                ].map((kpi) => (
                  <div key={kpi.label} className="rounded-[6px] p-[9px_10px]" style={{ border: "1px solid var(--color-line)", background: "rgba(0,0,0,0.18)" }}>
                    <div className="text-[9px] tracking-[0.1em] uppercase" style={{ color: "var(--color-ink-3)" }}>{kpi.label}</div>
                    <div className="text-[17px] font-semibold mt-[3px]" style={{ color: "var(--color-ink)" }}>
                      {kpi.value}{kpi.unit && <small className="text-[10px] font-normal ml-px" style={{ color: "var(--color-ink-3)" }}>{kpi.unit}</small>}
                    </div>
                    {kpi.delta && <div className="text-[10px] mt-0.5" style={{ color: "var(--color-teal)" }}>{kpi.delta}</div>}
                  </div>
                ))}
              </div>
              <div className="rounded-[6px] p-[12px_14px]" style={{ border: "1px solid var(--color-line-t)", background: "rgba(45,212,191,0.04)" }}>
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-[6px] h-[6px] rounded-full animate-blink" style={{ background: "var(--color-teal)" }} />
                  <span className="text-[10px] tracking-[0.12em] uppercase font-semibold" style={{ color: "var(--color-teal)" }}>WEEK 6 · ALPHA SHIPPED</span>
                </div>
                <p className="text-[11px] leading-[1.55]" style={{ color: "var(--color-ink-2)" }}>
                  Auth + core CRUD live. Onboarding in review. Demo Friday.
                </p>
              </div>
            </div>
            <div className="px-3.5 py-[9px] flex justify-between text-[9.5px] tracking-[0.08em] uppercase" style={{ borderTop: "1px solid var(--color-line)", background: "rgba(0,0,0,0.2)", color: "var(--color-ink-3)" }}>
              <span>SPRINT 6 · 88/96 PTS</span><span>NEXT DEMO: FRIDAY</span>
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
                WE WORK LIKE A FOUNDING TEAM · 01
              </div>
              <h2 className="font-semibold leading-[1.1] tracking-[-0.02em] mt-3.5" style={{ fontSize: "clamp(28px,3.5vw,44px)" }}>
                Fast, senior, <em className="not-italic" style={{ color: "var(--color-violet)" }}>opinionated</em>.
              </h2>
            </div>
            <p className="text-[15.5px] leading-[1.65] max-w-[400px]" style={{ color: "var(--color-ink-2)" }}>
              We&apos;ve built zero-to-one before. We know what to skip and what to get right.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-4 max-[860px]:grid-cols-1">
            {[
              { num: "/01", title: "Zero-to-One Products", desc: "We scope, architect, and ship your first production version — typically 8–10 weeks." },
              { num: "/02", title: "AI-Native by Default", desc: "LLM integrations, RAG, agents — built in from day one, not bolted on after Series A." },
              { num: "/03", title: "Infra You Can Afford", desc: "Right-sized for your stage. Cloud credits, serverless-first, no overengineering." },
              { num: "/04", title: "Fundraise-Ready Architecture", desc: "Security posture, compliance groundwork, and technical diligence docs — before you need them." },
              { num: "/05", title: "Design That Converts", desc: "Product design and engineering in one team. No handoff lag, no translation loss." },
              { num: "/06", title: "In-House Handover", desc: "We document as we go. Your team takes ownership at any milestone — no lock-in." },
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

      <section className="relative z-[1]" style={{ borderTop: "1px solid var(--color-line)", borderBottom: "1px solid var(--color-line)", padding: "44px clamp(20px,4vw,48px)", background: "rgba(255,255,255,0.015)" }}>
        <div className="max-w-[1160px] mx-auto grid grid-cols-4 gap-6 max-[680px]:grid-cols-2">
          {[
            { target: 10, suffix: " wk", label: "Median zero-to-one" },
            { target: 4, suffix: "x", label: "Faster than agency avg." },
            { target: 22, suffix: "", label: "MVPs shipped" },
            { target: 6, suffix: " hrs", label: "Weekly founder sync" },
          ].map((stat) => (
            <Reveal key={stat.label}>
              <div className="text-[40px] font-semibold leading-none tracking-[-0.03em]" style={{ background: "linear-gradient(135deg,#c7d2fe,#67e8f9)", WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}>
                <CountUp target={stat.target} suffix={stat.suffix} />
              </div>
              <div className="font-mono text-[10px] tracking-[0.12em] uppercase mt-2" style={{ color: "var(--color-ink-3)" }}>{stat.label}</div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="relative z-[1] text-center" id="cta" style={{ padding: "88px clamp(20px,4vw,48px)" }}>
        <Reveal className="max-w-[680px] mx-auto rounded-[14px] p-[56px_40px] relative overflow-hidden" style={{ border: "1px solid rgba(255,255,255,0.12)", background: "var(--color-bg-2)" }}>
          <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 500px 260px at 50% 0%, rgba(129,140,248,0.08), transparent 60%)" }} />
          <h2 className="relative font-semibold tracking-[-0.02em] mb-3.5" style={{ fontSize: "clamp(28px,3.5vw,42px)" }}>
            Let&apos;s build your <em className="not-italic" style={{ color: "var(--color-violet)" }}>MVP</em>.
          </h2>
          <p className="relative text-[15px] max-w-[420px] mx-auto mb-6.5 leading-[1.65]" style={{ color: "var(--color-ink-2)" }}>
            Tell us what you&apos;re building. We&apos;ll tell you how fast we can ship it.
          </p>
          <Link href="/contact" className="relative inline-flex items-center gap-2 px-5 py-[11px] rounded-lg text-[14px] font-medium no-underline transition-all duration-[180ms] hover:-translate-y-px" style={{ background: "var(--color-teal)", color: "#0b0c0f" }}>
            Start Your Journey →
          </Link>
        </Reveal>
      </section>
    </>
  );
}
