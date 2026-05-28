import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/reveal";

export const metadata: Metadata = {
  title: "For Operations & Finance — Hamaara Technologies",
  description: "Close faster, forecast with confidence.",
};

export default function OperationsFinancePage() {
  return (
    <>
      <section className="relative z-[1]" style={{ padding: "72px clamp(20px,4vw,48px) 56px", borderBottom: "1px solid var(--color-line)" }}>
        <div className="max-w-[1160px] mx-auto grid gap-[52px] items-center max-[860px]:grid-cols-1" style={{ gridTemplateColumns: "1fr 1fr" }}>
          <div>
            <div className="font-mono text-[10px] tracking-[0.1em] uppercase mb-3.5" style={{ color: "var(--color-ink-3)" }}>
              <Link href="/" className="no-underline" style={{ color: "var(--color-ink-3)" }}>Home</Link>
              {" / For You / Operations & Finance"}
            </div>
            <div className="inline-flex items-center gap-2 font-mono text-[10.5px] tracking-[0.14em] uppercase mb-3.5" style={{ color: "var(--color-teal)" }}>
              <span className="w-5 h-px opacity-50" style={{ background: "var(--color-teal)" }} />
              FOR YOU · 03
            </div>
            <h1 className="font-semibold leading-[1.1] tracking-[-0.02em] mt-3 mb-4.5" style={{ fontSize: "clamp(32px,4vw,50px)" }}>
              Built for <em className="not-italic" style={{ color: "var(--color-violet)" }}>ops &amp; finance</em>.
            </h1>
            <p className="mb-6.5 text-[15.5px] leading-[1.65] max-w-[460px]" style={{ color: "var(--color-ink-2)" }}>
              Close faster, forecast with confidence, automate the work that shouldn&apos;t exist.
            </p>
            <div className="flex gap-3 flex-wrap">
              <Link href="/contact" className="inline-flex items-center gap-2 px-5 py-[11px] rounded-lg text-[14px] font-medium no-underline transition-all duration-[180ms] hover:-translate-y-px" style={{ background: "var(--color-teal)", color: "#0b0c0f" }}>
                Book a session →
              </Link>
              <Link href="#detail" className="inline-flex items-center gap-2 px-5 py-[11px] rounded-lg text-[14px] font-medium no-underline transition-all duration-[180ms] hover:-translate-y-px hover:bg-white/5" style={{ border: "1px solid rgba(255,255,255,0.12)", color: "var(--color-ink)" }}>
                Read More →
              </Link>
            </div>
          </div>

          {/* Month-end close mockup */}
          <div aria-hidden="true" className="rounded-[10px] overflow-hidden font-mono text-[11px]" style={{ background: "var(--color-bg-2)", border: "1px solid rgba(255,255,255,0.12)", boxShadow: "0 24px 60px -12px rgba(0,0,0,0.55)" }}>
            <div className="px-3.5 py-2.5 flex items-center justify-between" style={{ background: "rgba(0,0,0,0.25)", borderBottom: "1px solid var(--color-line)" }}>
              <div className="flex items-center gap-3">
                <span className="text-[10px] tracking-[0.12em] uppercase" style={{ color: "var(--color-ink-2)" }}>HT-CLOSE · MONTH-END</span>
                <span className="inline-flex items-center gap-[5px] text-[10px] tracking-[0.1em] uppercase" style={{ color: "var(--color-teal)" }}>
                  <span className="w-[5px] h-[5px] rounded-full animate-blink" style={{ background: "var(--color-teal)" }} />
                  DAY 3 OF 5
                </span>
              </div>
              <div className="flex gap-[3px]">
                {["CHECKLIST", "VARIANCES", "SIGN-OFF"].map((tab, i) => (
                  <span key={tab} className="px-[9px] py-[3px] text-[9px] tracking-[0.1em] uppercase rounded-[4px]" style={{ color: i === 0 ? "var(--color-teal)" : "var(--color-ink-3)", border: i === 0 ? "1px solid var(--color-line-t)" : "1px solid var(--color-line)", background: i === 0 ? "rgba(45,212,191,0.06)" : "transparent" }}>
                    {tab}
                  </span>
                ))}
              </div>
            </div>
            <div className="p-3.5 flex flex-col gap-2.5">
              <div className="grid grid-cols-3 gap-2">
                {[
                  { label: "CLOSE DAYS", value: "3.2", delta: "vs 6.8 prior" },
                  { label: "AUTO-RECONCILED", value: "94", unit: "%", delta: "+11%" },
                  { label: "EXCEPTIONS", value: "12", delta: "vs 84 prior" },
                ].map((kpi) => (
                  <div key={kpi.label} className="rounded-[6px] p-[9px_10px]" style={{ border: "1px solid var(--color-line)", background: "rgba(0,0,0,0.18)" }}>
                    <div className="text-[9px] tracking-[0.1em] uppercase" style={{ color: "var(--color-ink-3)" }}>{kpi.label}</div>
                    <div className="text-[17px] font-semibold mt-[3px]" style={{ color: "var(--color-ink)" }}>
                      {kpi.value}{kpi.unit && <small className="text-[10px] font-normal ml-px" style={{ color: "var(--color-ink-3)" }}>{kpi.unit}</small>}
                    </div>
                    <div className="text-[10px] mt-0.5" style={{ color: "var(--color-teal)" }}>{kpi.delta}</div>
                  </div>
                ))}
              </div>
              <div className="flex flex-col gap-[6px]">
                {[
                  { label: "Bank rec — APAC consolidated", tag: "done", tagType: "ok", hi: true },
                  { label: "Intercompany eliminations", tag: "done", tagType: "ok", hi: true },
                  { label: "Revenue accruals — ASC 606", tag: "running", tagType: "run", hi: false },
                  { label: "FX revaluation — non-USD", tag: "queued", tagType: "mute", hi: false },
                ].map((row, i) => {
                  const tagColor =
                    row.tagType === "ok"
                      ? { color: "var(--color-teal)", background: "rgba(45,212,191,0.1)", border: "1px solid rgba(45,212,191,0.2)" }
                      : row.tagType === "run"
                        ? { color: "var(--color-violet)", background: "rgba(129,140,248,0.1)", border: "1px solid rgba(129,140,248,0.2)" }
                        : { color: "var(--color-ink-3)", background: "rgba(255,255,255,0.04)", border: "1px solid var(--color-line)" };
                  return (
                    <div
                      key={i}
                      className="mkp-row flex items-center justify-between gap-2.5 px-2.5 py-2 rounded-[6px] text-[10.5px]"
                      style={{
                        border: row.hi ? "1px solid var(--color-line-t)" : "1px solid var(--color-line)",
                        background: row.hi ? "rgba(45,212,191,0.04)" : "rgba(0,0,0,0.18)",
                      }}
                    >
                      <span className="flex items-center gap-1.5" style={{ color: "var(--color-ink-2)" }}>
                        <span className="w-[5px] h-[5px] rounded-full flex-shrink-0" style={{ background: row.hi ? "var(--color-teal)" : "rgba(255,255,255,0.15)" }} />
                        {row.label}
                      </span>
                      <span className="text-[9px] tracking-[0.09em] uppercase px-[7px] py-[2px] rounded-[3px] flex-shrink-0" style={tagColor}>{row.tag}</span>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="px-3.5 py-[9px] flex justify-between text-[9.5px] tracking-[0.08em] uppercase" style={{ borderTop: "1px solid var(--color-line)", background: "rgba(0,0,0,0.2)", color: "var(--color-ink-3)" }}>
              <span>5 ENTITIES · 4 CURRENCIES</span><span>LOCK: DAY 5 @ 17:00</span>
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
                WHAT WE TACKLE · 01
              </div>
              <h2 className="font-semibold leading-[1.1] tracking-[-0.02em] mt-3.5" style={{ fontSize: "clamp(28px,3.5vw,44px)" }}>
                Finance ops that <em className="not-italic" style={{ color: "var(--color-violet)" }}>run themselves</em>.
              </h2>
            </div>
            <p className="text-[15.5px] leading-[1.65] max-w-[400px]" style={{ color: "var(--color-ink-2)" }}>
              We target the manual work in your close, reconciliation, and reporting.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-4 max-[860px]:grid-cols-1">
            {[
              { num: "/01", title: "Month-End Close Acceleration", desc: "Automated bank rec, JE creation, eliminations. Days, not weeks." },
              { num: "/02", title: "Financial Reporting & Consolidation", desc: "Multi-entity, multi-GAAP, multi-currency — with drill-through." },
              { num: "/03", title: "Procure-to-Pay Automation", desc: "Three-way match, approval routing, vendor portal." },
              { num: "/04", title: "Revenue Recognition · ASC 606", desc: "SSP allocations, variable consideration — automated and auditable." },
              { num: "/05", title: "FP&A & Scenario Planning", desc: "Driver-based models, rolling forecasts — connected to ERP actuals." },
              { num: "/06", title: "Audit & Compliance", desc: "SOX controls, evidence collection — on a schedule, not a scramble." },
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
          <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 500px 260px at 50% 0%, rgba(129,140,248,0.08), transparent 60%)" }} />
          <h2 className="relative font-semibold tracking-[-0.02em] mb-3.5" style={{ fontSize: "clamp(28px,3.5vw,42px)" }}>
            Let&apos;s cut your close <em className="not-italic" style={{ color: "var(--color-violet)" }}>in half</em>.
          </h2>
          <p className="relative text-[15px] max-w-[420px] mx-auto mb-6.5 leading-[1.65]" style={{ color: "var(--color-ink-2)" }}>
            Two-week diagnostic. One clear plan. We show you what to automate first.
          </p>
          <Link href="/contact" className="relative inline-flex items-center gap-2 px-5 py-[11px] rounded-lg text-[14px] font-medium no-underline transition-all duration-[180ms] hover:-translate-y-px" style={{ background: "var(--color-teal)", color: "#0b0c0f" }}>
            Start Your Journey →
          </Link>
        </Reveal>
      </section>
    </>
  );
}
