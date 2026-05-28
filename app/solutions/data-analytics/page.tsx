import type { Metadata } from "next";
import Link from "next/link";
import { CountUp } from "@/components/count-up";
import { Reveal } from "@/components/reveal";

export const metadata: Metadata = {
  title: "Data & Analytics — Hamaara Technologies",
  description: "Transform raw data into strategic intelligence.",
};

export default function DataAnalyticsPage() {
  return (
    <>
      {/* Page hero */}
      <section className="relative z-[1]" style={{ padding: "72px clamp(20px,4vw,48px) 56px", borderBottom: "1px solid var(--color-line)" }}>
        <div className="max-w-[1160px] mx-auto grid gap-[52px] items-center max-[860px]:grid-cols-1" style={{ gridTemplateColumns: "1fr 1fr" }}>
          <div>
            <div className="font-mono text-[10px] tracking-[0.1em] uppercase mb-3.5" style={{ color: "var(--color-ink-3)" }}>
              <Link href="/" className="no-underline" style={{ color: "var(--color-ink-3)" }}>Home</Link>
              {" / Solutions / Data & Analytics"}
            </div>
            <div className="inline-flex items-center gap-2 font-mono text-[10.5px] tracking-[0.14em] uppercase mb-3.5" style={{ color: "var(--color-teal)" }}>
              <span className="w-5 h-px opacity-50" style={{ background: "var(--color-teal)" }} />
              SOLUTIONS · 02
            </div>
            <h1 className="font-semibold leading-[1.1] tracking-[-0.02em] mt-3 mb-4.5" style={{ fontSize: "clamp(32px,4vw,50px)" }}>
              Raw data into <em className="not-italic" style={{ color: "var(--color-violet)" }}>intelligence</em>.
            </h1>
            <p className="mb-6.5 text-[15.5px] leading-[1.65] max-w-[460px]" style={{ color: "var(--color-ink-2)" }}>
              Modern lakehouses, governed pipelines, served at the latency your business needs — with the DQ score to back every number.
            </p>
            <div className="flex gap-3 flex-wrap">
              <Link href="/contact" className="inline-flex items-center gap-2 px-5 py-[11px] rounded-lg text-[14px] font-medium no-underline transition-all duration-[180ms] hover:-translate-y-px" style={{ background: "var(--color-cta)", color: "#ffffff" }}>
                Scope an engagement →
              </Link>
              <Link href="#detail" className="inline-flex items-center gap-2 px-5 py-[11px] rounded-lg text-[14px] font-medium no-underline transition-all duration-[180ms] hover:-translate-y-px hover:bg-white/5" style={{ border: "1px solid rgba(255,255,255,0.12)", color: "var(--color-ink)" }}>
                Read More →
              </Link>
            </div>
          </div>

          {/* Lakehouse mockup */}
          <div aria-hidden="true" className="rounded-[10px] overflow-hidden font-mono text-[11px]" style={{ background: "var(--color-bg-2)", border: "1px solid rgba(255,255,255,0.12)", boxShadow: "0 24px 60px -12px rgba(0,0,0,0.55)" }}>
            <div className="px-3.5 py-2.5 flex items-center justify-between" style={{ background: "rgba(0,0,0,0.25)", borderBottom: "1px solid var(--color-line)" }}>
              <div className="flex items-center gap-3">
                <span className="text-[10px] tracking-[0.12em] uppercase" style={{ color: "var(--color-ink-2)" }}>HT-LAKEHOUSE · ANALYTICS</span>
                <span className="inline-flex items-center gap-[5px] text-[10px] tracking-[0.1em] uppercase" style={{ color: "var(--color-teal)" }}>
                  <span className="w-[5px] h-[5px] rounded-full animate-blink" style={{ background: "var(--color-teal)" }} />
                  LIVE
                </span>
              </div>
              <div className="flex gap-[3px]">
                {["OVERVIEW", "PIPELINES", "QUALITY"].map((tab, i) => (
                  <span key={tab} className="px-[9px] py-[3px] text-[9px] tracking-[0.1em] uppercase rounded-[4px]" style={{ color: i === 0 ? "var(--color-teal)" : "var(--color-ink-3)", border: i === 0 ? "1px solid var(--color-line-t)" : "1px solid var(--color-line)", background: i === 0 ? "rgba(167,139,250,0.06)" : "transparent" }}>
                    {tab}
                  </span>
                ))}
              </div>
            </div>
            <div className="p-3.5 flex flex-col gap-2.5">
              <div className="grid grid-cols-3 gap-2">
                {[
                  { label: "REVENUE QTD", value: "$48.2", unit: "M", delta: "+22% YoY" },
                  { label: "PIPELINES", value: "142", delta: "all healthy" },
                  { label: "DQ SCORE", value: "98.7", unit: "%", delta: "+0.4" },
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
              <div className="rounded-[6px] p-[10px_12px]" style={{ border: "1px solid var(--color-line)", background: "rgba(0,0,0,0.2)" }}>
                <div className="font-mono text-[9px] tracking-[0.1em] uppercase mb-2" style={{ color: "var(--color-ink-3)" }}>REVENUE BY REGION · Q3</div>
                <svg viewBox="0 0 280 72" preserveAspectRatio="none" style={{ width: "100%", height: "72px" }}>
                  <defs>
                    <linearGradient id="dg" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#ddd6fe" stopOpacity=".85" />
                      <stop offset="100%" stopColor="#f97316" stopOpacity=".3" />
                    </linearGradient>
                  </defs>
                  <line stroke="rgba(255,255,255,.06)" strokeWidth=".5" x1="0" y1="36" x2="280" y2="36" />
                  <rect className="vc-bar" x="6" y="42" width="22" height="24" fill="url(#dg)" />
                  <rect className="vc-bar" x="46" y="24" width="22" height="42" fill="url(#dg)" />
                  <rect className="vc-bar" x="86" y="32" width="22" height="34" fill="url(#dg)" />
                  <rect className="vc-bar" x="126" y="14" width="22" height="52" fill="url(#dg)" />
                  <rect className="vc-bar" x="166" y="20" width="22" height="46" fill="url(#dg)" />
                  <rect className="vc-bar" x="206" y="10" width="22" height="56" fill="url(#dg)" />
                  <rect className="vc-bar" x="246" y="4" width="22" height="62" fill="url(#dg)" />
                  <polyline className="vc-line" points="17,54 57,45 97,49 137,34 177,43 217,30 257,22" />
                </svg>
              </div>
            </div>
            <div className="px-3.5 py-[9px] flex justify-between text-[9.5px] tracking-[0.08em] uppercase" style={{ borderTop: "1px solid var(--color-line)", background: "rgba(0,0,0,0.2)", color: "var(--color-ink-3)" }}>
              <span>WAREHOUSE: BIGQUERY</span><span>MODEL: DBT v1.7</span>
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
                CAPABILITIES · 01
              </div>
              <h2 className="font-semibold leading-[1.1] tracking-[-0.02em] mt-3.5" style={{ fontSize: "clamp(28px,3.5vw,44px)" }}>
                From <em className="not-italic" style={{ color: "var(--color-violet)" }}>ingest</em> to <em className="not-italic" style={{ color: "var(--color-violet)" }}>insight</em>.
              </h2>
            </div>
            <p className="text-[15.5px] leading-[1.65] max-w-[400px]" style={{ color: "var(--color-ink-2)" }}>
              End-to-end data engineering — instrumented, governed, and served at the latency your business needs.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-4 max-[860px]:grid-cols-1">
            {[
              { num: "/01", title: "Modern Lakehouse", desc: "Databricks, BigQuery, Snowflake — with semantic layers analysts trust." },
              { num: "/02", title: "Streaming Pipelines", desc: "Kafka, Pub/Sub, Kinesis — sub-second ingest with idempotent writes." },
              { num: "/03", title: "Transformation · dbt", desc: "Versioned, tested, documented models with lineage your auditors can read." },
              { num: "/04", title: "Governance · Unity Catalog", desc: "Policy-as-code, fine-grained access, masked PII, full lineage." },
              { num: "/05", title: "BI & Embedded Analytics", desc: "Tableau, Looker, Superset — plus embedded analytics in your products." },
              { num: "/06", title: "ML & Forecasting", desc: "Time-series, classification, segmentation — on top of your warehouse." },
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
            { target: 412, suffix: " GB/hr", label: "Peak ingest" },
            { target: 98, suffix: ".7%", label: "Median DQ score" },
            { target: 5, suffix: " min", label: "Freshness SLA" },
            { target: 140, suffix: "+", label: "Lakehouses delivered" },
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
            Ready to <em className="not-italic" style={{ color: "var(--color-violet)" }}>start</em>?
          </h2>
          <p className="relative text-[15px] max-w-[420px] mx-auto mb-6.5 leading-[1.65]" style={{ color: "var(--color-ink-2)" }}>
            Let&apos;s discuss how this fits your roadmap. We respond within one business day.
          </p>
          <Link href="/contact" className="relative inline-flex items-center gap-2 px-5 py-[11px] rounded-lg text-[14px] font-medium no-underline transition-all duration-[180ms] hover:-translate-y-px" style={{ background: "var(--color-cta)", color: "#ffffff" }}>
            Start Your Journey →
          </Link>
        </Reveal>
      </section>
    </>
  );
}
