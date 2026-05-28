import type { Metadata } from "next";
import { PageLayout, StandardMockup } from "@/components/page-layout";

export const metadata: Metadata = {
  title: "Process Optimization — Hamaara Technologies",
  description: "Eliminate bottlenecks with intelligent automation.",
};

export default function ProcessOptimizationPage() {
  return (
    <PageLayout
      crumbs="Home / Solutions / Process Optimization"
      label="SOLUTIONS · 03"
      h1={<>Operations, <em className="not-italic" style={{ color: "var(--color-violet)" }}>streamlined</em>.</>}
      lede="Map, measure, automate. We start with the work, then bring the right tools."
      ctaPrimary={{ href: "/contact", label: "Scope an audit" }}
      mockup={
        <StandardMockup
          title="HT-FLOW · AUTOMATION"
          liveLabel="3 OF 7 RUNNING"
          tabs={["CANVAS", "RUNS", "RULES"]}
          rows={[
            { label: "Trigger → Validate", tag: "done", hi: true },
            { label: "Enrich → Score", tag: "running", hi: false },
            { label: "Route → SLA assign", tag: "queued", hi: false },
          ]}
          kpis={[
            { label: "EXECUTIONS 24H", value: "12,408" },
            { label: "AVG DURATION", value: "1.4", unit: "s" },
            { label: "SUCCESS", value: "99.4", unit: "%" },
          ]}
          foot={["7 NODES · 9 EDGES", "RUNTIME: HT-FLOW v2"]}
        />
      }
      sectionLabel="WHERE WE APPLY THIS · 01"
      sectionH2={<>Operations where <em className="not-italic" style={{ color: "var(--color-violet)" }}>seconds matter</em>.</>}
      sectionLede="Across finance, supply chain, customer ops, and platform engineering."
      featCards={[
        { num: "/01", title: "Finance Close & Reconciliation", desc: "Cut month-end from days to hours. Auto-match, auto-clear, auto-eliminate." },
        { num: "/02", title: "Order-to-Cash", desc: "Quote, contract, fulfill, invoice — across NetSuite, Salesforce, and billing." },
        { num: "/03", title: "Customer Operations", desc: "AI-first triage, intelligent routing, SLA-aware queues." },
        { num: "/04", title: "Supply Chain & Inventory", desc: "Demand sensing, exception flagging, automated replenishment." },
        { num: "/05", title: "Developer Workflows", desc: "Tickets, releases, postmortems — automated where they should be." },
        { num: "/06", title: "Compliance & Audit", desc: "Evidence collection, control attestation — every quarter, on schedule." },
      ]}
      cta={{
        headline: <>Where&apos;s your <em className="not-italic" style={{ color: "var(--color-violet)" }}>bottleneck?</em></>,
        sub: "Two-week diagnostic, one clear plan, owners named.",
      }}
    />
  );
}
