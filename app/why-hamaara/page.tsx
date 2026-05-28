import type { Metadata } from "next";
import Link from "next/link";
import { CountUp } from "@/components/count-up";
import { Reveal } from "@/components/reveal";

export const metadata: Metadata = {
  title: "Why Hamaara — Hamaara Technologies",
  description: "Co-build, senior teams, production-first methods.",
};

function MethodMockup() {
  return (
    <div aria-hidden="true" className="rounded-[10px] overflow-hidden font-mono text-[11px]" style={{ background: "var(--color-bg-2)", border: "1px solid rgba(255,255,255,0.12)", boxShadow: "0 24px 60px -12px rgba(0,0,0,0.55)" }}>
      <div className="px-3.5 py-2.5 flex items-center justify-between" style={{ background: "rgba(0,0,0,0.25)", borderBottom: "1px solid var(--color-line)" }}>
        <div className="flex items-center gap-3">
          <span className="text-[10px] tracking-[0.12em] uppercase" style={{ color: "var(--color-ink-2)" }}>HT · METHOD</span>
          <span className="inline-flex items-center gap-[5px] text-[10px] tracking-[0.1em] uppercase" style={{ color: "var(--color-teal)" }}>
            <span className="w-[5px] h-[5px] rounded-full animate-blink" style={{ background: "var(--color-teal)" }} />
            WORKING SESSION
          </span>
        </div>
        <div className="flex gap-[3px]">
          {["COMPARE", "CASES", "METRICS"].map((tab, i) => (
            <span key={tab} className="px-[9px] py-[3px] text-[9px] tracking-[0.1em] uppercase rounded-[4px]" style={{ color: i === 0 ? "var(--color-teal)" : "var(--color-ink-3)", border: i === 0 ? "1px solid var(--color-line-t)" : "1px solid var(--color-line)", background: i === 0 ? "rgba(167,139,250,0.06)" : "transparent" }}>
              {tab}
            </span>
          ))}
        </div>
      </div>
      <div className="p-3.5 flex flex-col gap-2.5">
        <div className="grid grid-cols-2 gap-2">
          <div className="rounded-[6px] p-[11px]" style={{ border: "1px solid var(--color-line)", background: "rgba(0,0,0,0.2)" }}>
            <div className="text-[9px] tracking-[0.12em] uppercase mb-[7px]" style={{ color: "var(--color-ink-3)" }}>SLIDE-DECK MODEL</div>
            <div className="flex flex-col gap-[5px]" style={{ color: "var(--color-ink-3)" }}>
              <span>○ Diagnostic · 6 weeks</span>
              <span>○ Strategy deck</span>
              <span>○ Impl by 3rd party</span>
              <span>○ Outcome · unknown</span>
            </div>
          </div>
          <div className="rounded-[6px] p-[11px]" style={{ border: "1px solid var(--color-line-t)", background: "rgba(167,139,250,0.04)" }}>
            <div className="text-[9px] tracking-[0.12em] uppercase mb-[7px]" style={{ color: "var(--color-teal)" }}>HAMAARA</div>
            <div className="flex flex-col gap-[5px]" style={{ color: "var(--color-teal)" }}>
              <span>● Co-build · day 1</span>
              <span>● Sessions, not decks</span>
              <span>● Senior · embedded</span>
              <span>● Outcome · measured</span>
            </div>
          </div>
        </div>
        <div className="rounded-[6px] p-[10px_12px]" style={{ border: "1px solid var(--color-line)", background: "rgba(0,0,0,0.2)" }}>
          <div className="font-mono text-[9px] tracking-[0.1em] uppercase mb-2" style={{ color: "var(--color-ink-3)" }}>MEDIAN TIME TO PRODUCTION</div>
          <svg viewBox="0 0 280 46" style={{ width: "100%", height: "46px" }}>
            <text x="0" y="13" fill="#475569" fontSize="9" fontFamily="JetBrains Mono">SLIDE-DECK</text>
            <rect x="76" y="5" width="196" height="9" rx="2" fill="rgba(255,255,255,.05)" />
            <rect x="76" y="5" width="160" height="9" rx="2" fill="#1e293b">
              <animate attributeName="width" from="0" to="160" dur="1.4s" fill="freeze" />
            </rect>
            <text x="242" y="13" fill="#475569" fontSize="9" fontFamily="JetBrains Mono">~9mo</text>
            <text x="0" y="38" fill="#a78bfa" fontSize="9" fontFamily="JetBrains Mono">HAMAARA</text>
            <rect x="76" y="30" width="196" height="9" rx="2" fill="rgba(167,139,250,.1)" />
            <rect x="76" y="30" width="58" height="9" rx="2" fill="#a78bfa">
              <animate attributeName="width" from="0" to="58" dur="1.2s" fill="freeze" />
            </rect>
            <text x="140" y="38" fill="#a78bfa" fontSize="9" fontFamily="JetBrains Mono">~10wk</text>
          </svg>
        </div>
      </div>
      <div className="px-3.5 py-[9px] flex justify-between text-[9.5px] tracking-[0.08em] uppercase" style={{ borderTop: "1px solid var(--color-line)", background: "rgba(0,0,0,0.2)", color: "var(--color-ink-3)" }}>
        <span>50+ ENGAGEMENTS</span><span>2021 – 2025</span>
      </div>
    </div>
  );
}

export default function WhyHamaaraPage() {
  return (
    <>
      {/* Page hero */}
      <section className="relative z-[1]" style={{ padding: "72px clamp(20px,4vw,48px) 56px", borderBottom: "1px solid var(--color-line)" }}>
        <div className="max-w-[1160px] mx-auto grid gap-[52px] items-center max-[860px]:grid-cols-1" style={{ gridTemplateColumns: "1fr 1fr" }}>
          <div>
            <div className="font-mono text-[10px] tracking-[0.1em] uppercase mb-3.5" style={{ color: "var(--color-ink-3)" }}>
              <Link href="/" className="no-underline" style={{ color: "var(--color-ink-3)" }}>Home</Link>
              {" / Company / Why Hamaara"}
            </div>
            <div className="inline-flex items-center gap-2 font-mono text-[10.5px] tracking-[0.14em] uppercase mb-3.5" style={{ color: "var(--color-teal)" }}>
              <span className="w-5 h-px opacity-50" style={{ background: "var(--color-teal)" }} />
              COMPANY · 01
            </div>
            <h1 className="font-semibold leading-[1.1] tracking-[-0.02em] mt-3 mb-4.5" style={{ fontSize: "clamp(32px,4vw,50px)" }}>
              Why <em className="not-italic" style={{ color: "var(--color-violet)" }}>Hamaara</em>.
            </h1>
            <p className="mb-6.5 text-[15.5px] leading-[1.65] max-w-[460px]" style={{ color: "var(--color-ink-2)" }}>
              Co-build with your engineering org — senior teams, production-first methods, no slide-decks.
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
          <MethodMockup />
        </div>
      </section>

      {/* Detail split */}
      <section className="relative z-[1]" id="detail" style={{ padding: "88px clamp(20px,4vw,48px)" }}>
        <div className="max-w-[1160px] mx-auto grid grid-cols-2 gap-14 items-center max-[860px]:grid-cols-1">
          <MethodMockup />
          <div>
            <div className="inline-flex items-center gap-2 font-mono text-[10.5px] tracking-[0.14em] uppercase mb-3.5" style={{ color: "var(--color-teal)" }}>
              <span className="w-5 h-px opacity-50" style={{ background: "var(--color-teal)" }} />
              OUR PRINCIPLES · 01
            </div>
            <h2 className="font-semibold leading-[1.1] tracking-[-0.02em] mt-3.5 mb-4" style={{ fontSize: "clamp(28px,3.5vw,44px)" }}>
              Production <em className="not-italic" style={{ color: "var(--color-violet)" }}>first</em>, always.
            </h2>
            <p className="text-[15.5px] leading-[1.65] max-w-[460px]" style={{ color: "var(--color-ink-2)" }}>
              Every principle comes from shipping real systems for real businesses.
            </p>
            <ul className="list-none mt-[22px] flex flex-col gap-4">
              {[
                { num: "01", title: "Co-build, not throw-over", desc: "We work inside your repo, your CI, your Slack." },
                { num: "02", title: "Senior people on senior problems", desc: "The engineer who scopes the work ships it." },
                { num: "03", title: "Instruments before guesses", desc: "ROI, cycle time, error budget — tracked weekly, shared openly." },
                { num: "04", title: "Runbooks ship with the code", desc: "Every system comes with documentation to operate it." },
                { num: "05", title: "Quarterly optionality", desc: "Ramp up, down, or take in-house at any quarterly boundary." },
              ].map((item) => (
                <li key={item.num} className="grid gap-3 items-start" style={{ gridTemplateColumns: "26px 1fr" }}>
                  <div className="w-[22px] h-[22px] rounded-[6px] grid place-items-center font-mono text-[10px] flex-shrink-0" style={{ background: "rgba(167,139,250,0.12)", border: "1px solid var(--color-line-t)", color: "var(--color-teal)" }}>
                    {item.num}
                  </div>
                  <div>
                    <strong className="block text-[14px] font-semibold mb-[3px]">{item.title}</strong>
                    <p className="text-[13.5px] leading-[1.6]" style={{ color: "var(--color-ink-2)" }}>{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="relative z-[1]" style={{ borderTop: "1px solid var(--color-line)", borderBottom: "1px solid var(--color-line)", padding: "44px clamp(20px,4vw,48px)", background: "rgba(255,255,255,0.015)" }}>
        <div className="max-w-[1160px] mx-auto grid grid-cols-4 gap-6 max-[680px]:grid-cols-2">
          {[
            { target: 50, suffix: "+", label: "Engagements delivered" },
            { target: 10, suffix: " wk", label: "Median to production" },
            { target: 94, suffix: "%", label: "Client renewal rate" },
            { target: 15, suffix: "+", label: "Yrs combined exp." },
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
            See the <em className="not-italic" style={{ color: "var(--color-violet)" }}>difference</em>.
          </h2>
          <p className="relative text-[15px] max-w-[420px] mx-auto mb-6.5 leading-[1.65]" style={{ color: "var(--color-ink-2)" }}>
            One working session. No pitch. A real conversation about what you&apos;re trying to build.
          </p>
          <Link href="/contact" className="relative inline-flex items-center gap-2 px-5 py-[11px] rounded-lg text-[14px] font-medium no-underline transition-all duration-[180ms] hover:-translate-y-px" style={{ background: "var(--color-cta)", color: "#ffffff" }}>
            Start Your Journey →
          </Link>
        </Reveal>
      </section>
    </>
  );
}
