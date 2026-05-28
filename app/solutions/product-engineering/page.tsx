import type { Metadata } from "next";
import { PageLayout, StandardMockup } from "@/components/page-layout";

export const metadata: Metadata = {
  title: "Product Engineering — Hamaara Technologies",
  description: "Build scalable, modern applications with cutting-edge stacks.",
};

export default function ProductEngineeringPage() {
  return (
    <PageLayout
      crumbs="Home / Solutions / Product Engineering"
      label="SOLUTIONS · 01"
      h1={<>Engineered to <em className="not-italic" style={{ color: "var(--color-violet)" }}>scale</em>.</>}
      lede="Build scalable, modern applications with cutting-edge stacks — designed end-to-end and observable from day one."
      ctaPrimary={{ href: "/contact", label: "Scope a build" }}
      mockup={
        <StandardMockup
          title="HT-CLI · BUILD"
          liveLabel="PIPELINE ACTIVE"
          tabs={["BUILD", "TEST", "DEPLOY"]}
          rows={[
            { label: "typecheck", tag: "486 files", hi: true },
            { label: "bundle", tag: "2.1 MB", hi: true },
            { label: "e2e · staging", tag: "running", hi: false },
          ]}
          kpis={[
            { label: "P95 LATENCY", value: "84", unit: "ms", delta: "−12%" },
            { label: "ERROR RATE", value: "0.02", unit: "%", delta: "stable" },
            { label: "DEPLOYS/WK", value: "28", delta: "+4" },
          ]}
          foot={["BUILD #4,287 · MAIN", "SLA: 99.95%"]}
        />
      }
      sectionLabel="WHAT WE BUILD · 01"
      sectionH2={<>From <em className="not-italic" style={{ color: "var(--color-violet)" }}>API</em> to <em className="not-italic" style={{ color: "var(--color-violet)" }}>UI</em>.</>}
      sectionLede="Full-stack product teams that own the system from request to render."
      featCards={[
        { num: "/01", title: "Web & Mobile", desc: "React, Next.js, React Native, Swift, Kotlin — matched to how your users behave." },
        { num: "/02", title: "Backend & APIs", desc: "Go, Python, Node — REST, gRPC, GraphQL — with contracts, tests, dashboards." },
        { num: "/03", title: "AI-Native Features", desc: "Agents, retrieval, evals — shipped as a product feature, not a side-car." },
        { num: "/04", title: "Platform & DevEx", desc: "CI/CD, observability, internal developer platforms — ship in days, not weeks." },
        { num: "/05", title: "Data Layer", desc: "Operational stores, event streams, schemas — designed before you need to scale." },
        { num: "/06", title: "Identity & Security", desc: "OIDC, SCIM, audit logs — built in from day one." },
      ]}
      stats={[
        { target: 36, suffix: "+", label: "Active product teams" },
        { target: 4, suffix: "x", label: "Velocity vs baseline" },
        { target: 99, suffix: ".9%", label: "Median uptime" },
        { target: 12, suffix: "", label: "Languages in prod" },
      ]}
      cta={{
        headline: <>Ready to ship in <em className="not-italic" style={{ color: "var(--color-violet)" }}>weeks?</em></>,
        sub: "Tell us what you're building. We'll bring a senior team and a real plan.",
      }}
    />
  );
}
