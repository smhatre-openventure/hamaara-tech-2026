import type { Metadata } from "next";
import Link from "next/link";
import { CountUp } from "@/components/count-up";
import { Reveal } from "@/components/reveal";

export const metadata: Metadata = {
  title: "Hamaara Technologies — AI-Powered Enterprise Solutions",
  description: "AI, automation, and enterprise systems that accelerate growth.",
};

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative z-[1] overflow-hidden"
        style={{ padding: "80px clamp(20px,4vw,48px) 96px" }}
      >
        {/* Gradient blobs */}
        <div aria-hidden="true" className="pointer-events-none select-none">
          <div className="hero-blob hero-blob-1" />
          <div className="hero-blob hero-blob-2" />
          <div className="hero-blob hero-blob-3" />
        </div>
        <div
          className="max-w-[1160px] mx-auto grid gap-14 items-center"
          style={{ gridTemplateColumns: "1fr 1fr" }}
        >
          <div>
            <div
              className="inline-flex items-center gap-2 font-mono text-[10.5px] tracking-[0.12em] uppercase mb-[22px] px-3 py-1.5 rounded-full"
              style={{
                color: "var(--color-cyan)",
                border: "1px solid var(--color-line-t)",
                background: "rgba(45,212,191,0.04)",
              }}
            >
              <span
                className="w-[5px] h-[5px] rounded-full"
                style={{ background: "var(--color-teal)" }}
              />
              AI-Powered Technology Solutions
            </div>
            <h1
              className="font-semibold leading-[1.08] tracking-[-0.025em] mb-5"
              style={{
                fontSize: "clamp(38px,5vw,62px)",
                color: "var(--color-ink)",
              }}
            >
              Transform your business with{" "}
              <em
                className="not-italic"
                style={{
                  background: "linear-gradient(110deg,#c7d2fe,#67e8f9)",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  color: "transparent",
                }}
              >
                intelligent technology
              </em>
              .
            </h1>
            <p className="mb-[30px] text-[15.5px] leading-[1.65] max-w-[460px]" style={{ color: "var(--color-ink-2)" }}>
              We deliver AI, automation, and enterprise systems that accelerate growth — built with
              your engineering org, not around it.
            </p>
            <div className="flex gap-3 flex-wrap">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-5 py-[11px] rounded-lg text-[14px] font-medium no-underline transition-all duration-[180ms] hover:-translate-y-px"
                style={{ background: "var(--color-teal)", color: "#0b0c0f" }}
              >
                Get Started <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
              </Link>
              <Link
                href="#solutions"
                className="inline-flex items-center gap-2 px-5 py-[11px] rounded-lg text-[14px] font-medium no-underline transition-all duration-[180ms] hover:-translate-y-px hover:bg-white/5"
                style={{
                  border: "1px solid rgba(255,255,255,0.12)",
                  color: "var(--color-ink)",
                }}
              >
                Explore Solutions →
              </Link>
            </div>
          </div>

          {/* Hero mockup */}
          <div
            aria-hidden="true"
            className="rounded-[10px] overflow-hidden font-mono text-[11px]"
            style={{
              background: "var(--color-bg-2)",
              border: "1px solid rgba(255,255,255,0.12)",
              boxShadow: "0 24px 60px -12px rgba(0,0,0,0.55)",
            }}
          >
            <div
              className="px-3.5 py-2.5 flex items-center justify-between"
              style={{ background: "rgba(0,0,0,0.25)", borderBottom: "1px solid var(--color-line)" }}
            >
              <div className="flex items-center gap-3">
                <span className="text-[10px] tracking-[0.12em] uppercase" style={{ color: "var(--color-ink-2)" }}>
                  HT · MULTI-AGENT
                </span>
                <span
                  className="inline-flex items-center gap-[5px] text-[10px] tracking-[0.1em] uppercase"
                  style={{ color: "var(--color-teal)" }}
                >
                  <span
                    className="w-[5px] h-[5px] rounded-full animate-blink"
                    style={{ background: "var(--color-teal)" }}
                  />
                  3 AGENTS ONLINE
                </span>
              </div>
              <div className="flex gap-[3px]">
                {["TRACE", "TOOLS", "POLICY"].map((tab, i) => (
                  <span
                    key={tab}
                    className="px-[9px] py-[3px] text-[9px] tracking-[0.1em] uppercase rounded-[4px]"
                    style={{
                      color: i === 0 ? "var(--color-teal)" : "var(--color-ink-3)",
                      border: i === 0 ? "1px solid var(--color-line-t)" : "1px solid var(--color-line)",
                      background: i === 0 ? "rgba(45,212,191,0.06)" : "transparent",
                    }}
                  >
                    {tab}
                  </span>
                ))}
              </div>
            </div>
            <div className="p-3.5 flex flex-col gap-2.5">
              {[
                { label: "HT-Ingest", tag: "done", hi: true },
                { label: "HT-Reconcile", tag: "done", hi: true },
                { label: "HT-Forecast", tag: "running", hi: false },
              ].map((row) => (
                <div
                  key={row.label}
                  className="mkp-row flex justify-between items-center px-2.5 py-2 rounded-[6px]"
                  style={{
                    border: row.hi ? "1px solid var(--color-line-t)" : "1px solid var(--color-line)",
                    background: row.hi ? "rgba(45,212,191,0.05)" : "rgba(0,0,0,0.18)",
                  }}
                >
                  <span
                    className="flex items-center gap-[7px] text-[10.5px]"
                    style={{ color: "var(--color-ink-2)" }}
                  >
                    <span
                      className="w-1 h-1 rounded-full flex-shrink-0"
                      style={{ background: "var(--color-teal)" }}
                    />
                    {row.label}
                  </span>
                  <span
                    className="text-[9px] tracking-[0.09em] uppercase px-[7px] py-[2px] rounded-[3px]"
                    style={
                      row.tag === "done"
                        ? {
                            color: "var(--color-teal)",
                            background: "rgba(45,212,191,0.1)",
                            border: "1px solid rgba(45,212,191,0.2)",
                          }
                        : {
                            color: "var(--color-cyan)",
                            background: "rgba(103,232,249,0.08)",
                            border: "1px solid rgba(103,232,249,0.2)",
                          }
                    }
                  >
                    {row.tag}
                  </span>
                </div>
              ))}
              <div className="grid grid-cols-3 gap-2 mt-1">
                {[
                  { label: "AT RISK", value: "$4.2", unit: "M", delta: "−18% QoQ", neg: true },
                  { label: "REWORK", value: "23", unit: "days", delta: "saved", neg: false },
                  { label: "WIN-BACK", value: "+34", unit: "%", delta: "modeled", neg: false },
                ].map((kpi) => (
                  <div
                    key={kpi.label}
                    className="rounded-[6px] p-[9px_10px]"
                    style={{ border: "1px solid var(--color-line)", background: "rgba(0,0,0,0.18)" }}
                  >
                    <div className="text-[9px] tracking-[0.1em] uppercase" style={{ color: "var(--color-ink-3)" }}>
                      {kpi.label}
                    </div>
                    <div className="text-[17px] font-semibold mt-[3px]" style={{ color: "var(--color-ink)" }}>
                      {kpi.value}
                      <small className="text-[10px] font-normal ml-px" style={{ color: "var(--color-ink-3)" }}>
                        {kpi.unit}
                      </small>
                    </div>
                    <div
                      className="text-[10px] mt-0.5"
                      style={{ color: kpi.neg ? "#f87171" : "var(--color-teal)" }}
                    >
                      {kpi.delta}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div
              className="px-3.5 py-[9px] flex justify-between text-[9.5px] tracking-[0.08em] uppercase"
              style={{
                borderTop: "1px solid var(--color-line)",
                background: "rgba(0,0,0,0.2)",
                color: "var(--color-ink-3)",
              }}
            >
              <span>3 AGENTS · 11 TOOLS</span>
              <span>AUDIT: ON</span>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section
        className="relative z-[1]"
        style={{
          borderTop: "1px solid var(--color-line)",
          borderBottom: "1px solid var(--color-line)",
          padding: "44px clamp(20px,4vw,48px)",
          background: "rgba(255,255,255,0.015)",
        }}
      >
        <div className="max-w-[1160px] mx-auto grid grid-cols-4 gap-6 max-[680px]:grid-cols-2">
          {[
            { target: 500, suffix: "+", label: "Projects Delivered" },
            { target: 98, suffix: "%", label: "Client Satisfaction" },
            { target: 50, suffix: "+", label: "Enterprise Clients" },
            { target: 15, suffix: "+", label: "Years Experience" },
          ].map((stat) => (
            <div key={stat.label}>
              <div
                className="text-[40px] font-semibold leading-none tracking-[-0.03em] max-[680px]:text-[32px]"
                style={{
                  background: "linear-gradient(135deg,#c7d2fe,#67e8f9)",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  color: "transparent",
                }}
              >
                <CountUp target={stat.target} suffix={stat.suffix} />
              </div>
              <div
                className="font-mono text-[10px] tracking-[0.12em] uppercase mt-2"
                style={{ color: "var(--color-ink-3)" }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Solutions grid */}
      <section
        className="relative z-[1]"
        id="solutions"
        style={{ paddingTop: "40px", paddingBottom: "88px", padding: "40px clamp(20px,4vw,48px) 88px" }}
      >
        <div className="max-w-[1160px] mx-auto">
          <div className="grid gap-9 items-end mb-12" style={{ gridTemplateColumns: "1fr 1fr" }}>
            <div>
              <div
                className="inline-flex items-center gap-2 font-mono text-[10.5px] tracking-[0.14em] uppercase mb-3.5"
                style={{ color: "var(--color-teal)" }}
              >
                <span className="w-5 h-px opacity-50" style={{ background: "var(--color-teal)" }} />
                SOLUTIONS · 02
              </div>
              <h2
                className="font-semibold leading-[1.1] tracking-[-0.02em]"
                style={{ fontSize: "clamp(28px,3.5vw,44px)" }}
              >
                Solutions that{" "}
                <em className="not-italic" style={{ color: "var(--color-violet)" }}>
                  scale
                </em>
                .
              </h2>
            </div>
            <p className="text-[15.5px] leading-[1.65] max-w-[460px]" style={{ color: "var(--color-ink-2)" }}>
              From concept to deployment — production-grade, observable, and governed like any
              critical system.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-[18px] max-[860px]:grid-cols-1">
            {/* Product Engineering card */}
            <Reveal>
              <Link
                href="/solutions/product-engineering"
                className="flex flex-col rounded-[10px] overflow-hidden no-underline transition-all duration-200 hover:-translate-y-[3px]"
                style={{
                  border: "1px solid var(--color-line)",
                  background: "var(--color-bg-2)",
                  color: "inherit",
                }}
              >
                <div
                  className="h-[180px] relative overflow-hidden"
                  style={{
                    borderBottom: "1px solid var(--color-line)",
                    background: "var(--color-bg-3)",
                  }}
                >
                  <span
                    className="absolute top-3 left-3 z-[2] font-mono text-[9px] tracking-[0.12em] uppercase px-2 py-[3px] rounded-full"
                    style={{
                      color: "var(--color-cyan)",
                      border: "1px solid var(--color-line-t)",
                      background: "rgba(11,12,15,0.65)",
                      backdropFilter: "blur(4px)",
                    }}
                  >
                    /01 · PRODUCT ENG
                  </span>
                  <div style={{ position: "absolute", inset: 0, padding: "40px 16px 12px", fontFamily: "var(--font-mono)", fontSize: "10.5px" }}>
                    <div style={{ background: "rgba(0,0,0,0.4)", border: "1px solid var(--color-line)", borderRadius: "6px", padding: "10px 12px" }}>
                      <div style={{ display: "flex", gap: "5px", marginBottom: "8px" }}>
                        <span style={{ width: "7px", height: "7px", borderRadius: "50%", background: "#ef4444" }} />
                        <span style={{ width: "7px", height: "7px", borderRadius: "50%", background: "#f59e0b" }} />
                        <span style={{ width: "7px", height: "7px", borderRadius: "50%", background: "#2dd4bf" }} />
                      </div>
                      <div style={{ color: "var(--color-ink-3)", marginBottom: "3px" }}>// hamaara/api/route.ts</div>
                      <div><span style={{ color: "#c7d2fe" }}>export async</span> <span style={{ color: "#67e8f9" }}>function</span> POST(req) {"{"}</div>
                      <div style={{ paddingLeft: "12px", color: "var(--color-ink-2)" }}>const data = await parse(req)</div>
                      <div style={{ paddingLeft: "12px", color: "var(--color-ink-2)" }}>return json({"{ ok: true }"})</div>
                      <div>{"}"}</div>
                    </div>
                  </div>
                </div>
                <div className="p-5 pb-6">
                  <h3 className="text-[18px] font-semibold mb-2">Product Engineering</h3>
                  <p className="text-[13.5px] leading-[1.6] mb-4" style={{ color: "var(--color-ink-2)" }}>
                    Build scalable, modern applications with cutting-edge technology stacks.
                  </p>
                  <span className="font-mono text-[10px] tracking-[0.12em] uppercase" style={{ color: "var(--color-teal)" }}>
                    Learn More →
                  </span>
                </div>
              </Link>
            </Reveal>

            {/* Data & Analytics card */}
            <Reveal>
              <Link
                href="/solutions/data-analytics"
                className="flex flex-col rounded-[10px] overflow-hidden no-underline transition-all duration-200 hover:-translate-y-[3px]"
                style={{
                  border: "1px solid var(--color-line)",
                  background: "var(--color-bg-2)",
                  color: "inherit",
                }}
              >
                <div
                  className="h-[180px] relative overflow-hidden"
                  style={{
                    borderBottom: "1px solid var(--color-line)",
                    background: "var(--color-bg-3)",
                  }}
                >
                  <span
                    className="absolute top-3 left-3 z-[2] font-mono text-[9px] tracking-[0.12em] uppercase px-2 py-[3px] rounded-full"
                    style={{
                      color: "var(--color-cyan)",
                      border: "1px solid var(--color-line-t)",
                      background: "rgba(11,12,15,0.65)",
                      backdropFilter: "blur(4px)",
                    }}
                  >
                    /02 · DATA &amp; ANALYTICS
                  </span>
                  <div style={{ position: "absolute", inset: 0, padding: "36px 16px 16px" }}>
                    <svg viewBox="0 0 280 120" preserveAspectRatio="none" style={{ width: "100%", height: "100%" }}>
                      <defs>
                        <linearGradient id="vcg" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#67e8f9" stopOpacity=".85" />
                          <stop offset="100%" stopColor="#818cf8" stopOpacity=".3" />
                        </linearGradient>
                      </defs>
                      <line stroke="rgba(255,255,255,.06)" strokeWidth=".5" x1="0" y1="40" x2="280" y2="40" />
                      <line stroke="rgba(255,255,255,.06)" strokeWidth=".5" x1="0" y1="80" x2="280" y2="80" />
                      <rect className="vc-bar" x="10" y="70" width="22" height="40" />
                      <rect className="vc-bar" x="50" y="50" width="22" height="60" />
                      <rect className="vc-bar" x="90" y="58" width="22" height="52" />
                      <rect className="vc-bar" x="130" y="38" width="22" height="72" />
                      <rect className="vc-bar" x="170" y="28" width="22" height="82" />
                      <rect className="vc-bar" x="210" y="16" width="22" height="94" />
                      <rect className="vc-bar" x="250" y="8" width="22" height="102" />
                      <polyline className="vc-line" points="21,90 61,70 101,79 141,58 181,48 221,36 261,28" />
                    </svg>
                  </div>
                </div>
                <div className="p-5 pb-6">
                  <h3 className="text-[18px] font-semibold mb-2">Data &amp; Analytics</h3>
                  <p className="text-[13.5px] leading-[1.6] mb-4" style={{ color: "var(--color-ink-2)" }}>
                    Transform raw data into strategic intelligence and actionable insights.
                  </p>
                  <span className="font-mono text-[10px] tracking-[0.12em] uppercase" style={{ color: "var(--color-teal)" }}>
                    Learn More →
                  </span>
                </div>
              </Link>
            </Reveal>

            {/* Process Optimization card */}
            <Reveal>
              <Link
                href="/solutions/process-optimization"
                className="flex flex-col rounded-[10px] overflow-hidden no-underline transition-all duration-200 hover:-translate-y-[3px]"
                style={{
                  border: "1px solid var(--color-line)",
                  background: "var(--color-bg-2)",
                  color: "inherit",
                }}
              >
                <div
                  className="h-[180px] relative overflow-hidden"
                  style={{
                    borderBottom: "1px solid var(--color-line)",
                    background: "var(--color-bg-3)",
                  }}
                >
                  <span
                    className="absolute top-3 left-3 z-[2] font-mono text-[9px] tracking-[0.12em] uppercase px-2 py-[3px] rounded-full"
                    style={{
                      color: "var(--color-cyan)",
                      border: "1px solid var(--color-line-t)",
                      background: "rgba(11,12,15,0.65)",
                      backdropFilter: "blur(4px)",
                    }}
                  >
                    /03 · PROCESS OPT.
                  </span>
                  <div style={{ position: "absolute", inset: 0, padding: "40px 14px 12px", fontFamily: "var(--font-mono)", fontSize: "10px", display: "flex", flexDirection: "column", gap: "7px" }}>
                    {[
                      { label: "INGEST · 412 GB/HR", dots: "●●●●●●●●○○", color: "var(--color-teal)", border: "var(--color-line-t)", bg: "rgba(45,212,191,0.06)" },
                      { label: "TRANSFORM · DBT", dots: "●●●●●●●●●○", color: "var(--color-ink-2)", border: "var(--color-line)", bg: "rgba(0,0,0,0.2)" },
                      { label: "GOVERN · UNITY", dots: "●●●●●●○○○○", color: "var(--color-amber)", border: "rgba(245,158,11,0.25)", bg: "rgba(245,158,11,0.05)" },
                      { label: "SERVE · BIGQUERY", dots: "●●●●●●●●○○", color: "var(--color-ink-2)", border: "var(--color-line)", bg: "rgba(0,0,0,0.2)" },
                    ].map((row) => (
                      <div
                        key={row.label}
                        style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "6px 9px", border: `1px solid ${row.border}`, borderRadius: "5px", background: row.bg }}
                      >
                        <span style={{ color: row.color }}>{row.label}</span>
                        <span style={{ color: row.color }}>{row.dots}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="p-5 pb-6">
                  <h3 className="text-[18px] font-semibold mb-2">Process Optimization</h3>
                  <p className="text-[13.5px] leading-[1.6] mb-4" style={{ color: "var(--color-ink-2)" }}>
                    Streamline operations and eliminate bottlenecks with intelligent automation.
                  </p>
                  <span className="font-mono text-[10px] tracking-[0.12em] uppercase" style={{ color: "var(--color-teal)" }}>
                    Learn More →
                  </span>
                </div>
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Capabilities band */}
      <section
        className="relative z-[1]"
        style={{
          borderTop: "1px solid var(--color-line)",
          borderBottom: "1px solid var(--color-line)",
          padding: "36px clamp(20px,4vw,48px)",
          background: "rgba(255,255,255,0.012)",
        }}
      >
        <div
          className="max-w-[1160px] mx-auto grid gap-11 items-center max-[680px]:grid-cols-1"
          style={{ gridTemplateColumns: "auto 1fr" }}
        >
          <div
            className="font-mono text-[10px] tracking-[0.12em] uppercase max-w-[120px] leading-[1.5]"
            style={{ color: "var(--color-ink-3)" }}
          >
            BUILT ON ENTERPRISE PLATFORMS
          </div>
          <div className="flex gap-8 flex-wrap items-center">
            {["NetSuite", "Oracle ERP", "Salesforce", "Azure", "Google Cloud", "AWS"].map(
              (item, i) => (
                <span
                  key={item}
                  className="font-mono text-[12px] tracking-[0.04em] inline-flex items-center gap-[7px]"
                  style={{ color: "var(--color-ink-2)" }}
                >
                  <span
                    className="w-[7px] h-[7px] inline-block"
                    style={{
                      background:
                        i % 3 === 0
                          ? "var(--color-teal)"
                          : i % 3 === 1
                          ? "var(--color-violet)"
                          : "var(--color-cyan)",
                    }}
                  />
                  {item}
                </span>
              )
            )}
          </div>
        </div>
      </section>

      {/* Architecture / Stack */}
      <section
        className="relative z-[1]"
        id="arch"
        style={{ padding: "88px clamp(20px,4vw,48px)" }}
      >
        <div className="max-w-[1160px] mx-auto">
          <div className="grid gap-9 items-end mb-12" style={{ gridTemplateColumns: "1fr 1fr" }}>
            <div>
              <div
                className="inline-flex items-center gap-2 font-mono text-[10.5px] tracking-[0.14em] uppercase mb-3.5"
                style={{ color: "var(--color-teal)" }}
              >
                <span className="w-5 h-px opacity-50" style={{ background: "var(--color-teal)" }} />
                THE HAMAARA STACK · 03
              </div>
              <h2
                className="font-semibold leading-[1.1] tracking-[-0.02em]"
                style={{ fontSize: "clamp(28px,3.5vw,44px)" }}
              >
                Engineered in{" "}
                <em className="not-italic" style={{ color: "var(--color-violet)" }}>
                  layers
                </em>
                .
              </h2>
            </div>
            <p className="text-[15.5px] leading-[1.65] max-w-[460px]" style={{ color: "var(--color-ink-2)" }}>
              Every engagement follows the same structure — from foundational data to the experience
              users meet.
            </p>
          </div>

          <div
            className="rounded-[10px] p-6.5 mt-7 overflow-hidden relative"
            style={{
              border: "1px solid rgba(255,255,255,0.12)",
              background: "var(--color-bg-2)",
            }}
          >
            <div className="flex justify-between items-center mb-5 flex-wrap gap-2">
              <span
                className="font-mono text-[10px] tracking-[0.12em] uppercase px-2.5 py-1 rounded-full"
                style={{
                  color: "var(--color-teal)",
                  border: "1px solid var(--color-line-t)",
                }}
              >
                ● HAMAARA STACK · V3 · LAYER VIEW
              </span>
              <span
                className="font-mono text-[10px] tracking-[0.1em] uppercase"
                style={{ color: "var(--color-ink-3)" }}
              >
                SHARED IN WORKING SESSIONS
              </span>
            </div>

            <div
              className="grid gap-3 max-[680px]:grid-cols-1"
              style={{ gridTemplateColumns: "1fr 2fr 1fr" }}
            >
              {/* Operations column */}
              <div
                className="rounded-lg p-3.5"
                style={{ border: "1px solid var(--color-line)", background: "rgba(0,0,0,0.18)" }}
              >
                <div className="flex items-center gap-2.5 mb-3">
                  <div
                    className="w-[22px] h-[22px] rounded-full grid place-items-center font-mono text-[10px]"
                    style={{
                      background: "rgba(129,140,248,0.15)",
                      color: "var(--color-violet)",
                      border: "1px solid rgba(129,140,248,0.3)",
                    }}
                  >
                    5
                  </div>
                  <span className="text-[13px] font-semibold">Operations</span>
                </div>
                <ul className="list-none flex flex-col gap-1.5">
                  {["CI/CD Pipelines", "Agent Management", "Observability", "Feedback & Retraining"].map(
                    (item) => (
                      <li
                        key={item}
                        className="text-[12px] pl-3 relative"
                        style={{ color: "var(--color-ink-2)" }}
                      >
                        <span
                          className="absolute left-0 top-[7px] w-1 h-1 rounded-full"
                          style={{ background: "var(--color-teal)" }}
                        />
                        {item}
                      </li>
                    )
                  )}
                </ul>
              </div>

              {/* Middle layers */}
              <div className="flex flex-col gap-2">
                {[
                  { num: "4", label: "Experience", desc: "Where users meet AI.", active: false },
                  { num: "3", label: "Intelligence", desc: "Models, prompts, orchestration.", active: false },
                  { num: "2", label: "Integration & Knowledge", desc: "Data, APIs and retrieval.", active: true },
                  { num: "1", label: "Foundational", desc: "Data, infra and identity.", active: false },
                ].map((row) => (
                  <div
                    key={row.num}
                    className="rounded-[7px] p-[10px_13px] grid items-center gap-3"
                    style={{
                      gridTemplateColumns: "24px 1fr auto",
                      border: row.active ? "1px solid var(--color-line-t)" : "1px solid var(--color-line)",
                      background: row.active ? "rgba(45,212,191,0.04)" : "rgba(0,0,0,0.18)",
                    }}
                  >
                    <div
                      className="w-5 h-5 rounded-full grid place-items-center font-mono text-[10px]"
                      style={
                        row.active
                          ? { background: "var(--color-teal)", color: "#0b0c0f", border: "none" }
                          : {
                              border: "1px solid rgba(255,255,255,0.12)",
                              color: "var(--color-ink-3)",
                            }
                      }
                    >
                      {row.num}
                    </div>
                    <div>
                      <div className="text-[13px] font-medium">{row.label}</div>
                      <div className="text-[11.5px] mt-px" style={{ color: "var(--color-ink-3)" }}>
                        {row.desc}
                      </div>
                    </div>
                    <div className="flex gap-[3px]">
                      {[0, 1, 2].map((i) => (
                        <span
                          key={i}
                          className="w-4 h-[11px] rounded-[2px]"
                          style={{
                            border: "1px solid var(--color-line)",
                            background: "rgba(255,255,255,0.02)",
                          }}
                        />
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Governance column */}
              <div
                className="rounded-lg p-3.5"
                style={{ border: "1px solid var(--color-line)", background: "rgba(0,0,0,0.18)" }}
              >
                <div className="flex items-center gap-2.5 mb-3">
                  <div
                    className="w-[22px] h-[22px] rounded-full grid place-items-center font-mono text-[10px]"
                    style={{
                      background: "rgba(45,212,191,0.15)",
                      color: "var(--color-teal)",
                      border: "1px solid var(--color-line-t)",
                    }}
                  >
                    6
                  </div>
                  <span className="text-[13px] font-semibold">Governance</span>
                </div>
                <ul className="list-none flex flex-col gap-1.5">
                  {["Access & Identity", "Policy Enforcement", "Cost & TokenOps", "Model Catalog"].map(
                    (item) => (
                      <li
                        key={item}
                        className="text-[12px] pl-3 relative"
                        style={{ color: "var(--color-ink-2)" }}
                      >
                        <span
                          className="absolute left-0 top-[7px] w-1 h-1 rounded-full"
                          style={{ background: "var(--color-teal)" }}
                        />
                        {item}
                      </li>
                    )
                  )}
                </ul>
              </div>
            </div>

            <div className="mt-4.5 flex justify-between items-center flex-wrap gap-3.5">
              <p className="text-[12px] leading-[1.5] max-w-[520px]" style={{ color: "var(--color-ink-3)" }}>
                <strong style={{ color: "var(--color-ink-2)", fontWeight: 500 }}>
                  Strategic alignment, ROI modeling, and use-case intake
                </strong>{" "}
                are treated as external inputs. The full layer-by-layer breakdown is shared in
                working sessions.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-4 py-[9px] rounded-lg text-[13px] font-medium no-underline transition-all duration-[180ms] hover:-translate-y-px hover:bg-white/5"
                style={{
                  border: "1px solid rgba(255,255,255,0.12)",
                  color: "var(--color-ink)",
                }}
              >
                Request stack brief →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section
        className="relative z-[1] text-center"
        style={{ padding: "88px clamp(20px,4vw,48px)" }}
      >
        <Reveal
          className="max-w-[680px] mx-auto rounded-[14px] p-[56px_40px] relative overflow-hidden"
          style={{
            border: "1px solid rgba(255,255,255,0.12)",
            background: "var(--color-bg-2)",
          }}
        >
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse 500px 260px at 50% 0%, rgba(129,140,248,0.08), transparent 60%)",
            }}
          />
          <h2
            className="relative font-semibold tracking-[-0.02em] mb-3.5"
            style={{ fontSize: "clamp(28px,3.5vw,42px)" }}
          >
            Ready to transform your{" "}
            <em className="not-italic" style={{ color: "var(--color-violet)" }}>
              business?
            </em>
          </h2>
          <p
            className="relative text-[15px] max-w-[420px] mx-auto mb-6.5 leading-[1.65]"
            style={{ color: "var(--color-ink-2)" }}
          >
            Let&apos;s discuss how our AI-powered solutions can accelerate your growth and innovation.
          </p>
          <Link
            href="/contact"
            className="relative inline-flex items-center gap-2 px-5 py-[11px] rounded-lg text-[14px] font-medium no-underline transition-all duration-[180ms] hover:-translate-y-px"
            style={{ background: "var(--color-teal)", color: "#0b0c0f" }}
          >
            Start Your Journey →
          </Link>
        </Reveal>
      </section>
    </>
  );
}
