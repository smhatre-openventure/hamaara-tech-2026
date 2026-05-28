"use client";

import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer
      className="relative z-[1]"
      style={{
        borderTop: "1px solid var(--color-line)",
        padding: "56px clamp(20px,4vw,48px) 28px",
        background: "rgba(0,0,0,0.25)",
      }}
    >
      <div
        className="max-w-[1160px] mx-auto grid gap-11"
        style={{ gridTemplateColumns: "1.4fr 1fr 1fr 1fr" }}
      >
        {/* Brand column */}
        <div>
          <Link href="/" className="flex items-center no-underline">
            <Image
              src={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/assets/logo-white.svg`}
              alt="Hamaara Technologies"
              width={120}
              height={28}
              style={{ height: "28px", width: "auto" }}
            />
          </Link>
          <p className="text-[13px] mt-3.5 leading-[1.65] max-w-[250px]" style={{ color: "var(--color-ink-2)" }}>
            AI-powered technology solutions that transform businesses through intelligent automation
            and enterprise systems.
          </p>
          <Link
            href="/contact"
            className="mt-4.5 inline-flex items-center gap-1.5 px-[15px] py-[9px] rounded-full text-[13px] font-semibold no-underline transition-opacity duration-[180ms] hover:opacity-85"
            style={{ background: "var(--color-cta)", color: "#ffffff" }}
          >
            Start a project →
          </Link>
        </div>

        {/* For You */}
        <div>
          <h4
            className="font-mono text-[10px] tracking-[0.12em] uppercase mb-4 font-normal"
            style={{ color: "var(--color-ink-3)" }}
          >
            For You
          </h4>
          <ul className="list-none flex flex-col gap-2.5">
            {[
              { href: "/for-you/technology-leaders", label: "Technology Leaders" },
              { href: "/for-you/startup-founders", label: "Startup Founders" },
              { href: "/for-you/operations-finance", label: "Operations & Finance" },
            ].map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-[13px] no-underline transition-colors duration-150 hover:text-[#f1f5f9]"
                  style={{ color: "var(--color-ink-2)" }}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Solutions */}
        <div>
          <h4
            className="font-mono text-[10px] tracking-[0.12em] uppercase mb-4 font-normal"
            style={{ color: "var(--color-ink-3)" }}
          >
            Solutions
          </h4>
          <ul className="list-none flex flex-col gap-2.5">
            {[
              { href: "/solutions/product-engineering", label: "Product Engineering" },
              { href: "/solutions/data-analytics", label: "Data & Analytics" },
              { href: "/solutions/process-optimization", label: "Process Optimization" },
              { href: "/solutions/managed-services", label: "Managed Services" },
              { href: "/solutions/enterprise-systems", label: "Enterprise Systems" },
              { href: "/solutions/staffing", label: "Staffing" },
            ].map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-[13px] no-underline transition-colors duration-150 hover:text-[#f1f5f9]"
                  style={{ color: "var(--color-ink-2)" }}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Company */}
        <div>
          <h4
            className="font-mono text-[10px] tracking-[0.12em] uppercase mb-4 font-normal"
            style={{ color: "var(--color-ink-3)" }}
          >
            Company
          </h4>
          <ul className="list-none flex flex-col gap-2.5">
            {[
              { href: "/why-hamaara", label: "Why Hamaara" },
              { href: "/contact", label: "Contact Us" },
              { href: "/solutions/netsuite", label: "NetSuite" },
              { href: "/solutions/oracle-erp", label: "Oracle ERP" },
              { href: "/solutions/salesforce", label: "Salesforce" },
            ].map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-[13px] no-underline transition-colors duration-150 hover:text-[#f1f5f9]"
                  style={{ color: "var(--color-ink-2)" }}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        className="max-w-[1160px] mx-auto mt-11 pt-5 flex justify-between items-center font-mono text-[11px] tracking-[0.07em]"
        style={{
          borderTop: "1px solid var(--color-line)",
          color: "var(--color-ink-3)",
        }}
      >
        <span>© 2026 HAMAARA TECHNOLOGIES · ALL RIGHTS RESERVED</span>
        <div className="flex gap-2.5">
          {[
            { href: "#", label: "LinkedIn", text: "in" },
            { href: "#", label: "Twitter", text: "𝕏" },
            { href: "#", label: "Email", text: "✉" },
          ].map((item) => (
            <a
              key={item.label}
              href={item.href}
              aria-label={item.label}
              className="w-7 h-7 grid place-items-center rounded-md text-[12px] no-underline transition-all duration-150"
              style={{
                border: "1px solid var(--color-line)",
                color: "var(--color-ink-3)",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget;
                el.style.color = "var(--color-teal)";
                el.style.borderColor = "var(--color-line-t)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget;
                el.style.color = "var(--color-ink-3)";
                el.style.borderColor = "var(--color-line)";
              }}
            >
              {item.text}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
