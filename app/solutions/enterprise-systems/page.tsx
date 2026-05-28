import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/reveal";
import { StandardMockup } from "@/components/page-layout";

export const metadata: Metadata = {
  title: "Enterprise Systems — Hamaara Technologies",
  description: "NetSuite, Oracle ERP, and Salesforce — integrated.",
};

export default function EnterpriseSystemsPage() {
  return (
    <>
      {/* Page hero */}
      <section className="relative z-[1]" style={{ padding: "72px clamp(20px,4vw,48px) 56px", borderBottom: "1px solid var(--color-line)" }}>
        <div className="max-w-[1160px] mx-auto grid gap-[52px] items-center max-[860px]:grid-cols-1" style={{ gridTemplateColumns: "1fr 1fr" }}>
          <div>
            <div className="font-mono text-[10px] tracking-[0.1em] uppercase mb-3.5" style={{ color: "var(--color-ink-3)" }}>
              <Link href="/" className="no-underline" style={{ color: "var(--color-ink-3)" }}>Home</Link>
              {" / Solutions / Enterprise Systems"}
            </div>
            <div className="inline-flex items-center gap-2 font-mono text-[10.5px] tracking-[0.14em] uppercase mb-3.5" style={{ color: "var(--color-teal)" }}>
              <span className="w-5 h-px opacity-50" style={{ background: "var(--color-teal)" }} />
              SOLUTIONS · 05
            </div>
            <h1 className="font-semibold leading-[1.1] tracking-[-0.02em] mt-3 mb-4.5" style={{ fontSize: "clamp(32px,4vw,50px)" }}>
              Enterprise-grade, <em className="not-italic" style={{ color: "var(--color-violet)" }}>end-to-end</em>.
            </h1>
            <p className="mb-6.5 text-[15.5px] leading-[1.65] max-w-[460px]" style={{ color: "var(--color-ink-2)" }}>
              NetSuite, Oracle ERP, and Salesforce — integrated by design, not by accident.
            </p>
            <div className="flex gap-3 flex-wrap">
              <Link href="/contact" className="inline-flex items-center gap-2 px-5 py-[11px] rounded-lg text-[14px] font-medium no-underline transition-all duration-[180ms] hover:-translate-y-px" style={{ background: "var(--color-cta)", color: "#ffffff" }}>
                Scope a programme →
              </Link>
              <Link href="#detail" className="inline-flex items-center gap-2 px-5 py-[11px] rounded-lg text-[14px] font-medium no-underline transition-all duration-[180ms] hover:-translate-y-px hover:bg-white/5" style={{ border: "1px solid rgba(255,255,255,0.12)", color: "var(--color-ink)" }}>
                Read More →
              </Link>
            </div>
          </div>
          <StandardMockup
            title="HT-BRIDGE · SYNC"
            liveLabel="4 SYSTEMS BONDED"
            tabs={["TOPOLOGY", "EVENTS", "MAPS"]}
            rows={[
              { label: "NetSuite · 24 entities", tag: "synced", hi: true },
              { label: "Oracle ERP · 18 entities", tag: "synced", hi: true },
              { label: "Salesforce · 31 entities", tag: "synced", hi: true },
              { label: "SAP · 12 entities", tag: "partial", hi: false },
            ]}
            foot={["85 ENTITIES SYNCED", "LAG: 1.2s · IDEMPOTENT"]}
          />
        </div>
      </section>

      {/* Platform cards */}
      <section className="relative z-[1]" id="detail" style={{ padding: "88px clamp(20px,4vw,48px)" }}>
        <div className="max-w-[1160px] mx-auto">
          <div className="grid gap-9 items-end mb-12 max-[700px]:grid-cols-1" style={{ gridTemplateColumns: "1fr 1fr" }}>
            <div>
              <div className="inline-flex items-center gap-2 font-mono text-[10.5px] tracking-[0.14em] uppercase mb-3.5" style={{ color: "var(--color-teal)" }}>
                <span className="w-5 h-px opacity-50" style={{ background: "var(--color-teal)" }} />
                PLATFORMS · 01
              </div>
              <h2 className="font-semibold leading-[1.1] tracking-[-0.02em] mt-3.5" style={{ fontSize: "clamp(28px,3.5vw,44px)" }}>
                Three platforms, <em className="not-italic" style={{ color: "var(--color-violet)" }}>one fabric</em>.
              </h2>
            </div>
            <p className="text-[15.5px] leading-[1.65] max-w-[400px]" style={{ color: "var(--color-ink-2)" }}>
              One revenue motion, one cost structure, one source of truth — connected by a real event bus.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-4 max-[860px]:grid-cols-1">
            {[
              { href: "/solutions/netsuite", num: "/01 · FINANCE & OPERATIONS", title: "NetSuite", desc: "Implementation, SuiteScript development, and optimisation across finance, inventory, and OTC.", cta: "EXPLORE NETSUITE →" },
              { href: "/solutions/oracle-erp", num: "/02 · ERP & EPM", title: "Oracle ERP", desc: "Oracle Fusion ERP, EPM, and HCM — cloud and on-prem with OIC integrations and managed runtime.", cta: "EXPLORE ORACLE ERP →" },
              { href: "/solutions/salesforce", num: "/03 · REVENUE & SERVICE", title: "Salesforce", desc: "Sales Cloud, Service Cloud, CPQ — aligned to how your revenue org actually sells and forecasts.", cta: "EXPLORE SALESFORCE →" },
            ].map((card) => (
              <Link key={card.href} href={card.href} className="block rounded-[10px] p-6 no-underline transition-all duration-200 hover:-translate-y-[2px]" style={{ border: "1px solid var(--color-line)", background: "var(--color-bg-2)", color: "inherit", textDecoration: "none" }}>
                <div className="font-mono text-[10px] tracking-[0.12em] mb-3" style={{ color: "var(--color-teal)" }}>{card.num}</div>
                <h3 className="text-[16px] font-semibold mb-2">{card.title}</h3>
                <p className="text-[13.5px] leading-[1.6] mb-3.5" style={{ color: "var(--color-ink-2)" }}>{card.desc}</p>
                <div className="font-mono text-[10px] tracking-[0.1em]" style={{ color: "var(--color-teal)" }}>{card.cta}</div>
              </Link>
            ))}
          </div>
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
