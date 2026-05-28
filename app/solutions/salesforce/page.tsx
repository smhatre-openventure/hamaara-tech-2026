import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/reveal";

export const metadata: Metadata = {
  title: "Salesforce — Hamaara Technologies",
  description: "Sales Cloud, Service Cloud, CPQ aligned to revenue.",
};

function PlatformMockup({ title, meta, stats, rows, foot }: {
  title: string;
  meta: string;
  stats: { label: string; value: string; sub?: string }[];
  rows: { workstream: string; owner: string; env: string; status: string; statusType: string }[];
  foot: [string, string];
}) {
  const tagStyle = (type: string) => {
    if (type === "ok") return { color: "var(--color-teal)", background: "rgba(45,212,191,0.1)", border: "1px solid rgba(45,212,191,0.2)" };
    return { color: "var(--color-amber)", background: "rgba(245,158,11,0.08)", border: "1px solid rgba(245,158,11,0.2)" };
  };
  return (
    <div aria-hidden="true" className="rounded-[10px] overflow-hidden font-mono text-[10.5px]" style={{ background: "var(--color-bg-2)", border: "1px solid rgba(255,255,255,0.12)", boxShadow: "0 24px 60px -12px rgba(0,0,0,0.55)" }}>
      <div className="px-3.5 py-2.5 flex items-center justify-between" style={{ background: "rgba(0,0,0,0.25)", borderBottom: "1px solid var(--color-line)" }}>
        <div className="flex items-center gap-2" style={{ color: "var(--color-ink-2)" }}>
          <span className="w-[5px] h-[5px] rounded-full" style={{ background: "var(--color-teal)" }} />
          {title}
        </div>
        <div className="text-[9px] tracking-[0.1em] uppercase" style={{ color: "var(--color-ink-3)" }}>{meta}</div>
      </div>
      <div className="p-3.5 flex flex-col gap-2.5">
        <div className="grid grid-cols-4 gap-2">
          {stats.map((stat) => (
            <div key={stat.label} className="rounded-[6px] p-[9px_10px]" style={{ border: "1px solid var(--color-line)", background: "rgba(0,0,0,0.18)" }}>
              <div className="text-[9px] tracking-[0.1em] uppercase" style={{ color: "var(--color-ink-3)" }}>{stat.label}</div>
              <div className="text-[17px] font-semibold mt-[3px]" style={{ color: "var(--color-ink)" }}>
                {stat.value}{stat.sub && <small className="text-[10px] font-normal ml-[3px]" style={{ color: "var(--color-teal)" }}>{stat.sub}</small>}
              </div>
            </div>
          ))}
        </div>
        <div className="rounded-[6px] overflow-hidden" style={{ border: "1px solid var(--color-line)" }}>
          <div className="grid px-[11px] py-2" style={{ gridTemplateColumns: "1.8fr 1fr 0.7fr 0.7fr", fontSize: "9px", letterSpacing: ".1em", textTransform: "uppercase", color: "var(--color-ink-3)", background: "rgba(0,0,0,0.3)", gap: "10px" }}>
            <span>WORKSTREAM</span><span>OWNER</span><span>ENV</span><span>STATUS</span>
          </div>
          {rows.map((row, i) => (
            <div key={i} className="pm-tr grid px-[11px] py-2 items-center gap-[10px]" style={{ gridTemplateColumns: "1.8fr 1fr 0.7fr 0.7fr", borderTop: "1px solid var(--color-line)", fontSize: "10.5px" }}>
              <span>{row.workstream}</span>
              <span style={{ color: "var(--color-ink-2)" }}>{row.owner}</span>
              <span style={{ color: "var(--color-ink-3)" }}>{row.env}</span>
              <span className="text-[9px] tracking-[0.09em] uppercase px-[7px] py-[2px] rounded-[3px]" style={tagStyle(row.statusType)}>{row.status}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="px-3.5 py-[9px] flex justify-between text-[9.5px] tracking-[0.08em] uppercase" style={{ borderTop: "1px solid var(--color-line)", background: "rgba(0,0,0,0.2)", color: "var(--color-ink-3)" }}>
        <span>{foot[0]}</span><span>{foot[1]}</span>
      </div>
    </div>
  );
}

export default function SalesforcePage() {
  return (
    <>
      <section className="relative z-[1]" style={{ padding: "72px clamp(20px,4vw,48px) 56px", borderBottom: "1px solid var(--color-line)" }}>
        <div className="max-w-[1160px] mx-auto grid gap-[52px] items-center max-[860px]:grid-cols-1" style={{ gridTemplateColumns: "1fr 1fr" }}>
          <div>
            <div className="font-mono text-[10px] tracking-[0.1em] uppercase mb-3.5" style={{ color: "var(--color-ink-3)" }}>
              <Link href="/" className="no-underline" style={{ color: "var(--color-ink-3)" }}>Home</Link>
              {" / Platforms / Salesforce"}
            </div>
            <div className="inline-flex items-center gap-2 font-mono text-[10.5px] tracking-[0.14em] uppercase mb-3.5" style={{ color: "var(--color-teal)" }}>
              <span className="w-5 h-px opacity-50" style={{ background: "var(--color-teal)" }} />
              PLATFORMS · 03
            </div>
            <h1 className="font-semibold leading-[1.1] tracking-[-0.02em] mt-3 mb-4.5" style={{ fontSize: "clamp(32px,4vw,50px)" }}>
              Salesforce, <em className="not-italic" style={{ color: "var(--color-violet)" }}>aligned to revenue</em>.
            </h1>
            <p className="mb-6.5 text-[15.5px] leading-[1.65] max-w-[460px]" style={{ color: "var(--color-ink-2)" }}>
              Sales Cloud, Service Cloud, CPQ — matched to how your revenue org actually operates.
            </p>
            <div className="flex gap-3 flex-wrap">
              <Link href="/contact" className="inline-flex items-center gap-2 px-5 py-[11px] rounded-lg text-[14px] font-medium no-underline transition-all duration-[180ms] hover:-translate-y-px" style={{ background: "var(--color-teal)", color: "#0b0c0f" }}>
                Scope a project →
              </Link>
              <Link href="#detail" className="inline-flex items-center gap-2 px-5 py-[11px] rounded-lg text-[14px] font-medium no-underline transition-all duration-[180ms] hover:-translate-y-px hover:bg-white/5" style={{ border: "1px solid rgba(255,255,255,0.12)", color: "var(--color-ink)" }}>
                Read More →
              </Link>
            </div>
          </div>
          <PlatformMockup
            title="HT · SALESFORCE REVENUE OPS"
            meta="ORG: PROD-LIGHTNING"
            stats={[
              { label: "OPEN PIPELINE", value: "$84.2", sub: "M" },
              { label: "FORECAST CAT.", value: "88", sub: "%" },
              { label: "CPQ QUOTES MTD", value: "1,284" },
              { label: "CASE SLA", value: "96.4", sub: "%" },
            ]}
            rows={[
              { workstream: "Forecast cadence — territory", owner: "RevOps", env: "SALES", status: "LIVE", statusType: "ok" },
              { workstream: "CPQ — guided selling", owner: "Deal Desk", env: "CPQ", status: "LIVE", statusType: "ok" },
              { workstream: "Case routing — Einstein", owner: "Support Ops", env: "SERVICE", status: "UAT", statusType: "warn" },
              { workstream: "Data Cloud · 360 profile", owner: "Data Eng", env: "DC", status: "PILOT", statusType: "warn" },
            ]}
            foot={["4 CLOUDS · 1,284 CPQ QUOTES MTD", "ORG: PROD-LIGHTNING"]}
          />
        </div>
      </section>

      <section className="relative z-[1]" id="detail" style={{ padding: "88px clamp(20px,4vw,48px)" }}>
        <div className="max-w-[1160px] mx-auto">
          <div className="grid gap-9 items-end mb-12 max-[700px]:grid-cols-1" style={{ gridTemplateColumns: "1fr 1fr" }}>
            <div>
              <div className="inline-flex items-center gap-2 font-mono text-[10.5px] tracking-[0.14em] uppercase mb-3.5" style={{ color: "var(--color-teal)" }}>
                <span className="w-5 h-px opacity-50" style={{ background: "var(--color-teal)" }} />
                OUR SALESFORCE PRACTICE · 01
              </div>
              <h2 className="font-semibold leading-[1.1] tracking-[-0.02em] mt-3.5" style={{ fontSize: "clamp(28px,3.5vw,44px)" }}>
                Revenue ops, <em className="not-italic" style={{ color: "var(--color-violet)" }}>end-to-end</em>.
              </h2>
            </div>
            <p className="text-[15.5px] leading-[1.65] max-w-[400px]" style={{ color: "var(--color-ink-2)" }}>
              We align the CRM to the revenue motion — territory, forecast, quota, and comp in one truth.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-4 max-[860px]:grid-cols-1">
            {[
              { num: "/01", title: "Sales Cloud & Forecasting", desc: "Territory hierarchy, forecast categories, pipeline hygiene." },
              { num: "/02", title: "CPQ · Configure, Price, Quote", desc: "Guided selling, approval waterfalls — quotes that close." },
              { num: "/03", title: "Service Cloud & Case Management", desc: "Einstein triage, SLA enforcement, omni-channel routing." },
              { num: "/04", title: "Marketing Cloud & Journeys", desc: "Email, SMS, push — connected to CRM opportunity stage." },
              { num: "/05", title: "Data Cloud · Customer 360", desc: "Unified profiles, real-time segmentation, activation to every channel." },
              { num: "/06", title: "Revenue Analytics & Tableau CRM", desc: "Pipeline inspection, rep performance, forecast accuracy." },
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
            Let&apos;s fix your <em className="not-italic" style={{ color: "var(--color-violet)" }}>revenue ops</em>.
          </h2>
          <p className="relative text-[15px] max-w-[420px] mx-auto mb-6.5 leading-[1.65]" style={{ color: "var(--color-ink-2)" }}>
            Tell us what the CRM isn&apos;t doing that it should.
          </p>
          <Link href="/contact" className="relative inline-flex items-center gap-2 px-5 py-[11px] rounded-lg text-[14px] font-medium no-underline transition-all duration-[180ms] hover:-translate-y-px" style={{ background: "var(--color-teal)", color: "#0b0c0f" }}>
            Start Your Journey →
          </Link>
        </Reveal>
      </section>
    </>
  );
}
