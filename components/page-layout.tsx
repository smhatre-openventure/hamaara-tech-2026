import Link from "next/link";
import { CountUp } from "@/components/count-up";
import { Reveal } from "@/components/reveal";

interface FeatCard {
  num: string;
  title: string;
  desc: string;
}

interface StatItem {
  target: number;
  suffix: string;
  label: string;
}

interface CtaProps {
  headline: React.ReactNode;
  sub: string;
}

interface PageLayoutProps {
  crumbs: string;
  label: string;
  h1: React.ReactNode;
  lede: string;
  ctaPrimary: { href: string; label: string };
  mockup: React.ReactNode;
  sectionLabel: string;
  sectionH2: React.ReactNode;
  sectionLede: string;
  featCards: FeatCard[];
  stats?: StatItem[];
  cta: CtaProps;
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="inline-flex items-center gap-2 font-mono text-[10.5px] tracking-[0.14em] uppercase mb-3.5"
      style={{ color: "var(--color-teal)" }}
    >
      <span className="w-5 h-px opacity-50" style={{ background: "var(--color-teal)" }} />
      {children}
    </div>
  );
}

export function PageLayout({
  crumbs,
  label,
  h1,
  lede,
  ctaPrimary,
  mockup,
  sectionLabel,
  sectionH2,
  sectionLede,
  featCards,
  stats,
  cta,
}: PageLayoutProps) {
  return (
    <>
      {/* Page hero */}
      <section
        className="relative z-[1]"
        style={{
          padding: "72px clamp(20px,4vw,48px) 56px",
          borderBottom: "1px solid var(--color-line)",
        }}
      >
        <div
          className="max-w-[1160px] mx-auto grid gap-[52px] items-center max-[860px]:grid-cols-1"
          style={{ gridTemplateColumns: "1fr 1fr" }}
        >
          <div>
            <div
              className="font-mono text-[10px] tracking-[0.1em] uppercase mb-3.5"
              style={{ color: "var(--color-ink-3)" }}
            >
              {crumbs}
            </div>
            <SectionLabel>{label}</SectionLabel>
            <h1
              className="font-semibold leading-[1.1] tracking-[-0.02em] mt-3 mb-4.5"
              style={{ fontSize: "clamp(32px,4vw,50px)" }}
            >
              {h1}
            </h1>
            <p
              className="mb-6.5 text-[15.5px] leading-[1.65] max-w-[460px]"
              style={{ color: "var(--color-ink-2)" }}
            >
              {lede}
            </p>
            <div className="flex gap-3 flex-wrap">
              <Link
                href={ctaPrimary.href}
                className="inline-flex items-center gap-2 px-5 py-[11px] rounded-lg text-[14px] font-medium no-underline transition-all duration-[180ms] hover:-translate-y-px"
                style={{ background: "var(--color-cta)", color: "#ffffff" }}
              >
                {ctaPrimary.label} →
              </Link>
              <Link
                href="#detail"
                className="inline-flex items-center gap-2 px-5 py-[11px] rounded-lg text-[14px] font-medium no-underline transition-all duration-[180ms] hover:-translate-y-px hover:bg-white/5"
                style={{
                  border: "1px solid rgba(255,255,255,0.12)",
                  color: "var(--color-ink)",
                }}
              >
                Read More →
              </Link>
            </div>
          </div>
          {mockup}
        </div>
      </section>

      {/* Detail section */}
      <section
        className="relative z-[1]"
        id="detail"
        style={{ padding: "88px clamp(20px,4vw,48px)" }}
      >
        <div className="max-w-[1160px] mx-auto">
          <div
            className="grid gap-9 items-end mb-12 max-[700px]:grid-cols-1"
            style={{ gridTemplateColumns: "1fr 1fr" }}
          >
            <div>
              <SectionLabel>{sectionLabel}</SectionLabel>
              <h2
                className="font-semibold leading-[1.1] tracking-[-0.02em] mt-3.5"
                style={{ fontSize: "clamp(28px,3.5vw,44px)" }}
              >
                {sectionH2}
              </h2>
            </div>
            <p
              className="text-[15.5px] leading-[1.65] max-w-[400px]"
              style={{ color: "var(--color-ink-2)" }}
            >
              {sectionLede}
            </p>
          </div>

          <div className="grid grid-cols-3 gap-4 max-[860px]:grid-cols-1">
            {featCards.map((card) => (
              <Reveal key={card.num}>
                <div
                  className="rounded-[10px] p-6 transition-all duration-200 hover:-translate-y-[2px]"
                  style={{
                    border: "1px solid var(--color-line)",
                    background: "var(--color-bg-2)",
                  }}
                >
                  <div
                    className="font-mono text-[10px] tracking-[0.12em] mb-3"
                    style={{ color: "var(--color-teal)" }}
                  >
                    {card.num}
                  </div>
                  <h3 className="text-[16px] font-semibold mb-2">{card.title}</h3>
                  <p className="text-[13.5px] leading-[1.6]" style={{ color: "var(--color-ink-2)" }}>
                    {card.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Stats (optional) */}
      {stats && (
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
            {stats.map((stat) => (
              <Reveal key={stat.label}>
                <div
                  className="text-[40px] font-semibold leading-none tracking-[-0.03em] max-[680px]:text-[32px]"
                  style={{
                    background: "linear-gradient(135deg,#fed7aa,#ddd6fe)",
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
              </Reveal>
            ))}
          </div>
        </section>
      )}

      {/* CTA section */}
      <section
        className="relative z-[1] text-center"
        id="cta"
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
                "radial-gradient(ellipse 500px 260px at 50% 0%, rgba(249,115,22,0.08), transparent 60%)",
            }}
          />
          <h2
            className="relative font-semibold tracking-[-0.02em] mb-3.5"
            style={{ fontSize: "clamp(28px,3.5vw,42px)" }}
          >
            {cta.headline}
          </h2>
          <p
            className="relative text-[15px] max-w-[420px] mx-auto mb-6.5 leading-[1.65]"
            style={{ color: "var(--color-ink-2)" }}
          >
            {cta.sub}
          </p>
          <Link
            href="/contact"
            className="relative inline-flex items-center gap-2 px-5 py-[11px] rounded-lg text-[14px] font-medium no-underline transition-all duration-[180ms] hover:-translate-y-px"
            style={{ background: "var(--color-cta)", color: "#ffffff" }}
          >
            Start Your Journey →
          </Link>
        </Reveal>
      </section>
    </>
  );
}

export function StandardMockup({
  title,
  liveLabel,
  tabs,
  rows,
  kpis,
  foot,
}: {
  title: string;
  liveLabel: string;
  tabs: string[];
  rows: { label: string; tag: string; hi?: boolean }[];
  kpis?: { label: string; value: string; unit?: string; delta?: string; neg?: boolean }[];
  foot: [string, string];
}) {
  const tagStyle = (tag: string) => {
    if (tag === "done" || tag === "synced" || tag === "live")
      return {
        color: "var(--color-teal)",
        background: "rgba(167,139,250,0.1)",
        border: "1px solid rgba(167,139,250,0.2)",
      };
    if (tag === "running")
      return {
        color: "var(--color-cyan)",
        background: "rgba(221,214,254,0.08)",
        border: "1px solid rgba(221,214,254,0.2)",
      };
    if (tag === "watching" || tag === "partial" || tag === "warn")
      return {
        color: "var(--color-amber)",
        background: "rgba(245,158,11,0.08)",
        border: "1px solid rgba(245,158,11,0.2)",
      };
    return {
      color: "var(--color-ink-3)",
      background: "rgba(255,255,255,0.03)",
      border: "1px solid var(--color-line)",
    };
  };

  return (
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
            {title}
          </span>
          <span
            className="inline-flex items-center gap-[5px] text-[10px] tracking-[0.1em] uppercase"
            style={{ color: "var(--color-teal)" }}
          >
            <span
              className="w-[5px] h-[5px] rounded-full animate-blink"
              style={{ background: "var(--color-teal)" }}
            />
            {liveLabel}
          </span>
        </div>
        <div className="flex gap-[3px]">
          {tabs.map((tab, i) => (
            <span
              key={tab}
              className="px-[9px] py-[3px] text-[9px] tracking-[0.1em] uppercase rounded-[4px]"
              style={{
                color: i === 0 ? "var(--color-teal)" : "var(--color-ink-3)",
                border: i === 0 ? "1px solid var(--color-line-t)" : "1px solid var(--color-line)",
                background: i === 0 ? "rgba(167,139,250,0.06)" : "transparent",
              }}
            >
              {tab}
            </span>
          ))}
        </div>
      </div>
      <div className="p-3.5 flex flex-col gap-2.5">
        {rows.map((row) => (
          <div
            key={row.label}
            className="mkp-row flex justify-between items-center px-2.5 py-2 rounded-[6px]"
            style={{
              border: row.hi ? "1px solid var(--color-line-t)" : "1px solid var(--color-line)",
              background: row.hi ? "rgba(167,139,250,0.05)" : "rgba(0,0,0,0.18)",
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
              style={tagStyle(row.tag)}
            >
              {row.tag}
            </span>
          </div>
        ))}
        {kpis && (
          <div className="grid grid-cols-3 gap-2 mt-1">
            {kpis.map((kpi) => (
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
                  {kpi.unit && (
                    <small className="text-[10px] font-normal ml-px" style={{ color: "var(--color-ink-3)" }}>
                      {kpi.unit}
                    </small>
                  )}
                </div>
                {kpi.delta && (
                  <div
                    className="text-[10px] mt-0.5"
                    style={{ color: kpi.neg ? "#f87171" : "var(--color-teal)" }}
                  >
                    {kpi.delta}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
      <div
        className="px-3.5 py-[9px] flex justify-between text-[9.5px] tracking-[0.08em] uppercase"
        style={{
          borderTop: "1px solid var(--color-line)",
          background: "rgba(0,0,0,0.2)",
          color: "var(--color-ink-3)",
        }}
      >
        <span>{foot[0]}</span>
        <span>{foot[1]}</span>
      </div>
    </div>
  );
}
