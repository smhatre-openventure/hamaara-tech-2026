"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const solutionsLinks = [
  {
    href: "/solutions/product-engineering",
    label: "Product Engineering",
    desc: "Build scalable, modern applications with cutting-edge stacks.",
  },
  {
    href: "/solutions/data-analytics",
    label: "Data & Analytics",
    desc: "Transform raw data into strategic intelligence.",
  },
  {
    href: "/solutions/process-optimization",
    label: "Process Optimization",
    desc: "Eliminate bottlenecks with intelligent automation.",
  },
  {
    href: "/solutions/managed-services",
    label: "Managed Services",
    desc: "End-to-end management of your enterprise platforms.",
  },
  {
    href: "/solutions/enterprise-systems",
    label: "Enterprise Systems",
    desc: "NetSuite, Oracle ERP, and Salesforce — integrated.",
  },
  {
    href: "/solutions/staffing",
    label: "Staffing",
    desc: "Senior engineers, architects, and specialists on demand.",
  },
];

const forYouLinks = [
  {
    href: "/for-you/technology-leaders",
    label: "Technology Leaders",
    desc: "For CTOs, VPs Eng, and platform leaders.",
  },
  {
    href: "/for-you/startup-founders",
    label: "Startup Founders",
    desc: "Zero to production in weeks, not quarters.",
  },
  {
    href: "/for-you/operations-finance",
    label: "Operations & Finance",
    desc: "Close faster, forecast with confidence.",
  },
];

const resourcesLinks = [
  { href: "/#arch", label: "The Hamaara Stack", desc: "Layer view" },
  { href: "/#solutions", label: "Solutions Overview", desc: "All services" },
  { href: "/why-hamaara", label: "Why Hamaara", desc: "Our method" },
];

const techStackLinks = [
  { href: "/solutions/netsuite", label: "NetSuite", desc: "Finance, inventory, OTC." },
  { href: "/solutions/oracle-erp", label: "Oracle ERP", desc: "Fusion ERP, EPM, and HCM." },
  { href: "/solutions/salesforce", label: "Salesforce", desc: "Revenue ops, end-to-end." },
];

const companyLinks = [
  { href: "/why-hamaara", label: "Why Hamaara", desc: "Co-build, not throw-over." },
  { href: "/contact", label: "Contact Us", desc: "Start a working session." },
];

interface DropdownItem {
  href: string;
  label: string;
  desc: string;
}

function NavDropdown({ items }: { items: DropdownItem[] }) {
  return (
    <ul
      className="absolute top-[calc(100%+4px)] left-0 min-w-[220px] p-1.5 rounded-[10px] list-none"
      style={{
        background: "rgba(17,19,24,0.97)",
        border: "1px solid rgba(255,255,255,0.12)",
        boxShadow: "0 16px 40px rgba(0,0,0,0.5)",
      }}
    >
      {items.map((item) => (
        <li key={item.href}>
          <Link
            href={item.href}
            className="dropdown-link block px-2.5 py-2 rounded-md text-[13px] no-underline transition-colors duration-150 hover:bg-white/5"
            style={{ color: "var(--color-ink-2)" }}
          >
            <span className="block font-medium" style={{ color: "var(--color-ink)" }}>{item.label}</span>
            <small
              className="block font-mono text-[9px] tracking-[0.1em] uppercase mt-0.5"
              style={{ color: "var(--color-ink-3)" }}
            >
              {item.desc}
            </small>
          </Link>
        </li>
      ))}
    </ul>
  );
}

export function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav
      className="sticky top-0 z-[100]"
      style={{
        background: "rgba(11,12,15,0.75)",
        backdropFilter: "blur(12px)",
        borderBottom: "1px solid var(--color-line)",
      }}
    >
      <div
        className="max-w-[1160px] mx-auto px-6 h-14 flex items-center justify-between gap-6"
        style={{ position: "relative" }}
      >
        {/* Brand */}
        <Link href="/" className="flex items-center no-underline">
          <Image
            src={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/assets/logo-white.svg`}
            alt="Hamaara Technologies"
            width={120}
            height={28}
            style={{ height: "28px", width: "auto" }}
          />
        </Link>

        {/* Desktop nav links */}
        <ul
          className={`hidden md:flex gap-0.5 list-none relative ${mobileOpen ? "!flex flex-col absolute top-14 left-0 right-0 px-4 pb-3.5 gap-0.5" : ""}`}
          style={
            mobileOpen
              ? {
                  background: "rgba(11,12,15,0.97)",
                  borderBottom: "1px solid var(--color-line)",
                }
              : {}
          }
          id="navLinks"
        >
          {[
            { label: "Solutions", links: solutionsLinks },
            { label: "For You", links: forYouLinks },
            { label: "Tech Stack", links: techStackLinks },
            { label: "Resources", links: resourcesLinks },
            { label: "Company", links: companyLinks },
          ].map((group) => (
            <li key={group.label} className="relative group">
              <button
                className="inline-flex items-center gap-1 px-3 py-2 rounded-md text-[13.5px] no-underline transition-colors duration-150 cursor-pointer border-none bg-transparent"
                style={{ color: "var(--color-ink-2)" }}
              >
                {group.label}{" "}
                <span
                  className="text-[8px] transition-transform duration-200 group-hover:rotate-180"
                  style={{ color: "var(--color-ink-3)" }}
                >
                  ▾
                </span>
              </button>
              <div className="absolute top-[calc(100%+4px)] left-0 opacity-0 invisible translate-y-[-6px] transition-all duration-[180ms] group-hover:opacity-100 group-hover:visible group-hover:translate-y-0">
                <NavDropdown items={group.links} />
              </div>
            </li>
          ))}
        </ul>

        {/* CTA pill */}
        <Link
          href="/contact"
          className="hidden md:inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-[13px] no-underline transition-all duration-200 nav-cta-pill"
          style={{
            border: "1px solid rgba(255,255,255,0.12)",
            background: "rgba(255,255,255,0.04)",
            color: "var(--color-ink)",
          }}
        >
          Let&apos;s Talk →
        </Link>

        {/* Mobile hamburger */}
        <button
          className="md:hidden bg-transparent cursor-pointer flex items-center justify-center w-[34px] h-[34px] rounded-md"
          style={{
            border: "1px solid rgba(255,255,255,0.12)",
            color: "var(--color-ink)",
          }}
          aria-label="Menu"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            {mobileOpen ? (
              <>
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </>
            ) : (
              <>
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          className="md:hidden px-4 pb-4"
          style={{
            background: "rgba(11,12,15,0.97)",
            borderBottom: "1px solid var(--color-line)",
          }}
        >
          {[
            { label: "Solutions", links: solutionsLinks },
            { label: "For You", links: forYouLinks },
            { label: "Tech Stack", links: techStackLinks },
            { label: "Resources", links: resourcesLinks },
            { label: "Company", links: companyLinks },
          ].map((group) => (
            <div key={group.label} className="mb-3">
              <div
                className="font-mono text-[9px] tracking-[0.12em] uppercase mb-2 pt-3"
                style={{ color: "var(--color-ink-3)" }}
              >
                {group.label}
              </div>
              {group.links.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block py-1.5 text-[13px] no-underline"
                  style={{ color: "var(--color-ink-2)" }}
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          ))}
          <Link
            href="/contact"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-[13px] no-underline mt-2"
            style={{
              border: "1px solid rgba(255,255,255,0.12)",
              background: "rgba(255,255,255,0.04)",
              color: "var(--color-ink)",
            }}
            onClick={() => setMobileOpen(false)}
          >
            Let&apos;s Talk →
          </Link>
        </div>
      )}
    </nav>
  );
}
