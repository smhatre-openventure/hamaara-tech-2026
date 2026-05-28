import type { Metadata } from "next";
import { PageLayout, StandardMockup } from "@/components/page-layout";

export const metadata: Metadata = {
  title: "Managed Services — Hamaara Technologies",
  description: "End-to-end management of your enterprise platforms.",
};

export default function ManagedServicesPage() {
  return (
    <PageLayout
      crumbs="Home / Solutions / Managed Services"
      label="SOLUTIONS · 04"
      h1={<>Run it like <em className="not-italic" style={{ color: "var(--color-violet)" }}>we built it</em>.</>}
      lede="End-to-end management of your enterprise platforms — SLAs that match production, runbooks that match reality."
      ctaPrimary={{ href: "/contact", label: "Request SLA brief" }}
      mockup={
        <StandardMockup
          title="HT-OPS · CONSOLE"
          liveLabel="ON-CALL: A.MEHTA"
          tabs={["INCIDENTS", "RUNBOOKS", "SLA"]}
          rows={[
            { label: "INC-4128 · NetSuite search timeout", tag: "done", hi: true },
            { label: "INC-4127 · Pipeline backfill APAC", tag: "running", hi: false },
            { label: "INC-4119 · DQ rule drift", tag: "watching", hi: false },
          ]}
          kpis={[
            { label: "UPTIME 30D", value: "99.98", unit: "%", delta: "SLA: 99.9%" },
            { label: "MTTR", value: "8", unit: "min", delta: "−22% MoM" },
            { label: "OPEN P1/P2", value: "0 / 2", delta: "tracked" },
          ]}
          foot={["84 RUNBOOKS INDEXED", "ESCALATION: PAGERDUTY"]}
        />
      }
      sectionLabel="WHAT'S INCLUDED · 01"
      sectionH2={<>Operations as a <em className="not-italic" style={{ color: "var(--color-violet)" }}>discipline</em>.</>}
      sectionLede="A senior team that owns uptime, change management, and capacity — alongside yours."
      featCards={[
        { num: "/01", title: "24/7 Monitoring & On-Call", desc: "Follow-the-sun across IST, GMT, PST. Alerts triaged in minutes." },
        { num: "/02", title: "Incident & Change Management", desc: "ITIL-aligned, optimised for velocity. Patterns turned into prevention." },
        { num: "/03", title: "Patch & Release Operations", desc: "Quarterly upgrades, monthly patches — staged, tested, reversible." },
        { num: "/04", title: "Capacity & FinOps", desc: "Right-sized spend for data, AI, and platform — with dashboards to prove it." },
        { num: "/05", title: "Backup & DR", desc: "Tested restore drills, documented RTOs/RPOs, audit-ready evidence." },
        { num: "/06", title: "Continuous Improvement", desc: "Each quarter we retire one class of incident. Permanently." },
      ]}
      stats={[
        { target: 99, suffix: ".98%", label: "Median uptime" },
        { target: 8, suffix: " min", label: "Median MTTR" },
        { target: 24, suffix: "/7", label: "On-call coverage" },
        { target: 84, suffix: "", label: "Runbooks indexed" },
      ]}
      cta={{
        headline: <>Ready to <em className="not-italic" style={{ color: "var(--color-violet)" }}>start</em>?</>,
        sub: "Let's discuss how this fits your roadmap. We respond within one business day.",
      }}
    />
  );
}
