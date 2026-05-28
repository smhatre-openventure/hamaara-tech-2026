"use client";

import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/reveal";
import { useState } from "react";

export default function ContactPage() {
  const [sent, setSent] = useState(false);

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
            <div className="font-mono text-[10px] tracking-[0.1em] uppercase mb-3.5" style={{ color: "var(--color-ink-3)" }}>
              <Link href="/" className="no-underline hover:text-[var(--color-teal)]" style={{ color: "var(--color-ink-3)" }}>Home</Link>
              {" / Company / Contact Us"}
            </div>
            <div className="inline-flex items-center gap-2 font-mono text-[10.5px] tracking-[0.14em] uppercase mb-3.5" style={{ color: "var(--color-teal)" }}>
              <span className="w-5 h-px opacity-50" style={{ background: "var(--color-teal)" }} />
              COMPANY · 02
            </div>
            <h1 className="font-semibold leading-[1.1] tracking-[-0.02em] mt-3 mb-4.5" style={{ fontSize: "clamp(32px,4vw,50px)" }}>
              Let&apos;s <em className="not-italic" style={{ color: "var(--color-violet)" }}>talk</em>.
            </h1>
            <p className="mb-6.5 text-[15.5px] leading-[1.65] max-w-[460px]" style={{ color: "var(--color-ink-2)" }}>
              Tell us what you&apos;re trying to build. We respond within one business day with a scoped working session.
            </p>
            <div className="flex gap-3 flex-wrap">
              <Link href="#contact-form" className="inline-flex items-center gap-2 px-5 py-[11px] rounded-lg text-[14px] font-medium no-underline transition-all duration-[180ms] hover:-translate-y-px" style={{ background: "var(--color-cta)", color: "#ffffff" }}>
                Send a message →
              </Link>
              <Link href="#detail" className="inline-flex items-center gap-2 px-5 py-[11px] rounded-lg text-[14px] font-medium no-underline transition-all duration-[180ms] hover:-translate-y-px hover:bg-white/5" style={{ border: "1px solid rgba(255,255,255,0.12)", color: "var(--color-ink)" }}>
                Read More →
              </Link>
            </div>
          </div>

          {/* Calendar mockup */}
          <div aria-hidden="true" className="rounded-[10px] overflow-hidden font-mono text-[11px]" style={{ background: "var(--color-bg-2)", border: "1px solid rgba(255,255,255,0.12)", boxShadow: "0 24px 60px -12px rgba(0,0,0,0.55)" }}>
            <div className="px-3.5 py-2.5 flex items-center justify-between" style={{ background: "rgba(0,0,0,0.25)", borderBottom: "1px solid var(--color-line)" }}>
              <div className="flex items-center gap-3">
                <span className="text-[10px] tracking-[0.12em] uppercase" style={{ color: "var(--color-ink-2)" }}>HT · WORKING SESSION</span>
                <span className="inline-flex items-center gap-[5px] text-[10px] tracking-[0.1em] uppercase" style={{ color: "var(--color-teal)" }}>
                  <span className="w-[5px] h-[5px] rounded-full animate-blink" style={{ background: "var(--color-teal)" }} />
                  4 SLOTS OPEN
                </span>
              </div>
              <div className="flex gap-[3px]">
                {["SCHEDULE", "AGENDA"].map((tab, i) => (
                  <span key={tab} className="px-[9px] py-[3px] text-[9px] tracking-[0.1em] uppercase rounded-[4px]" style={{ color: i === 0 ? "var(--color-teal)" : "var(--color-ink-3)", border: i === 0 ? "1px solid var(--color-line-t)" : "1px solid var(--color-line)", background: i === 0 ? "rgba(167,139,250,0.06)" : "transparent" }}>
                    {tab}
                  </span>
                ))}
              </div>
            </div>
            <div className="p-3.5">
              <div className="grid grid-cols-7 gap-1 font-mono text-[9px] text-center tracking-[0.08em] uppercase mb-[5px]" style={{ color: "var(--color-ink-3)" }}>
                {["M","T","W","T","F","S","S"].map((d,i) => <span key={i}>{d}</span>)}
              </div>
              <div className="grid grid-cols-7 gap-[3px] mb-2.5">
                {[
                  {n:1, style:{border:"1px solid var(--color-line)",background:"rgba(0,0,0,0.15)",color:"var(--color-ink-3)"}},
                  {n:2, style:{border:"1px solid var(--color-line-t)",background:"rgba(167,139,250,0.06)",color:"var(--color-teal)"}},
                  {n:3, style:{border:"1px solid var(--color-line-t)",background:"rgba(167,139,250,0.06)",color:"var(--color-teal)"}},
                  {n:4, style:{border:"2px solid var(--color-teal)",background:"var(--color-teal)",color:"#0b0c0f",fontWeight:"600"}},
                  {n:5, style:{border:"1px solid var(--color-line)",background:"rgba(0,0,0,0.15)",color:"var(--color-ink-3)"}},
                  {n:6, style:{border:"1px solid var(--color-line)",background:"rgba(0,0,0,0.15)",color:"var(--color-ink-3)"}},
                  {n:7, style:{border:"1px solid var(--color-line)",background:"rgba(0,0,0,0.15)",color:"var(--color-ink-3)"}},
                  {n:8, style:{border:"1px solid var(--color-line-t)",background:"rgba(167,139,250,0.06)",color:"var(--color-teal)"}},
                  {n:9, style:{border:"1px solid var(--color-line)",background:"rgba(0,0,0,0.15)",color:"var(--color-ink-3)"}},
                  {n:10,style:{border:"1px solid var(--color-line)",background:"rgba(0,0,0,0.15)",color:"var(--color-ink-3)"}},
                  {n:11,style:{border:"1px solid var(--color-line)",background:"rgba(0,0,0,0.15)",color:"var(--color-ink-3)"}},
                  {n:12,style:{border:"1px solid var(--color-line-t)",background:"rgba(167,139,250,0.06)",color:"var(--color-teal)"}},
                  {n:13,style:{border:"1px solid var(--color-line)",background:"rgba(0,0,0,0.15)",color:"var(--color-ink-3)"}},
                  {n:14,style:{border:"1px solid var(--color-line)",background:"rgba(0,0,0,0.15)",color:"var(--color-ink-3)"}},
                ].map((day) => (
                  <div key={day.n} style={{ aspectRatio:"1", borderRadius:"4px", display:"grid", placeItems:"center", fontFamily:"var(--font-mono)", fontSize:"10px", ...day.style }}>
                    {day.n}
                  </div>
                ))}
              </div>
              <div className="rounded-[6px] p-[9px_11px]" style={{ border: "1px solid var(--color-line-t)", background: "rgba(167,139,250,0.04)" }}>
                <div className="font-mono text-[9px] tracking-[0.1em] uppercase mb-1" style={{ color: "var(--color-teal)" }}>● JUN 4 · 14:00 IST · SELECTED</div>
                <div className="text-[10.5px]" style={{ color: "var(--color-ink-2)" }}>60 min working session. No deck, no pitch.</div>
              </div>
            </div>
            <div className="px-3.5 py-[9px] flex justify-between text-[9.5px] tracking-[0.08em] uppercase" style={{ borderTop: "1px solid var(--color-line)", background: "rgba(0,0,0,0.2)", color: "var(--color-ink-3)" }}>
              <span>TIMEZONE: AUTO</span><span>VIDEO: GOOGLE MEET</span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact form */}
      <section className="relative z-[1]" id="contact-form" style={{ padding: "88px clamp(20px,4vw,48px) 88px" }}>
        <div className="max-w-[1160px] mx-auto">
          <div className="grid gap-9 items-end mb-12 max-[700px]:grid-cols-1" style={{ gridTemplateColumns: "1fr 1fr" }}>
            <div>
              <div className="inline-flex items-center gap-2 font-mono text-[10.5px] tracking-[0.14em] uppercase mb-3.5" style={{ color: "var(--color-teal)" }}>
                <span className="w-5 h-px opacity-50" style={{ background: "var(--color-teal)" }} />
                GET IN TOUCH · 01
              </div>
              <h2 className="font-semibold leading-[1.1] tracking-[-0.02em] mt-3.5" style={{ fontSize: "clamp(28px,3.5vw,44px)" }}>
                Start a <em className="not-italic" style={{ color: "var(--color-violet)" }}>conversation</em>.
              </h2>
            </div>
            <p className="text-[15.5px] leading-[1.65] max-w-[400px]" style={{ color: "var(--color-ink-2)" }}>
              No sales process. No deck. Just a 60-minute working session scoped to your actual problem.
            </p>
          </div>

          <Reveal>
            <div className="max-w-[580px] mx-auto rounded-[10px] p-9" style={{ border: "1px solid rgba(255,255,255,0.12)", background: "var(--color-bg-2)" }}>
              <div className="grid grid-cols-2 gap-3.5 max-[540px]:grid-cols-1">
                {[
                  { id: "fn", label: "First Name", type: "text", placeholder: "Aarav", full: false },
                  { id: "ln", label: "Last Name", type: "text", placeholder: "Mehta", full: false },
                  { id: "em", label: "Work Email", type: "email", placeholder: "aarav@company.com", full: false },
                  { id: "co", label: "Company", type: "text", placeholder: "Acme Corp", full: false },
                ].map((field) => (
                  <div key={field.id} className="flex flex-col gap-1.5">
                    <label htmlFor={field.id} className="font-mono text-[10px] tracking-[0.12em] uppercase" style={{ color: "var(--color-ink-3)" }}>{field.label}</label>
                    <input
                      id={field.id}
                      type={field.type}
                      placeholder={field.placeholder}
                      className="rounded-[6px] px-[13px] py-2.5 text-[14px] outline-none transition-[border-color] duration-[180ms]"
                      style={{ background: "rgba(0,0,0,0.3)", border: "1px solid var(--color-line)", color: "var(--color-ink)" }}
                      onFocus={(e) => { e.currentTarget.style.borderColor = "var(--color-teal)"; }}
                      onBlur={(e) => { e.currentTarget.style.borderColor = "var(--color-line)"; }}
                    />
                  </div>
                ))}

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="ro" className="font-mono text-[10px] tracking-[0.12em] uppercase" style={{ color: "var(--color-ink-3)" }}>Your Role</label>
                  <select id="ro" className="rounded-[6px] px-[13px] py-2.5 text-[14px] outline-none" style={{ background: "rgba(0,0,0,0.3)", border: "1px solid var(--color-line)", color: "var(--color-ink)" }}>
                    <option value="">Select…</option>
                    <option>CTO / VP Engineering</option>
                    <option>Founder / CEO</option>
                    <option>CFO / Finance Leader</option>
                    <option>Head of Operations</option>
                    <option>Data / Platform Leader</option>
                    <option>Other</option>
                  </select>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="in" className="font-mono text-[10px] tracking-[0.12em] uppercase" style={{ color: "var(--color-ink-3)" }}>Primary Interest</label>
                  <select id="in" className="rounded-[6px] px-[13px] py-2.5 text-[14px] outline-none" style={{ background: "rgba(0,0,0,0.3)", border: "1px solid var(--color-line)", color: "var(--color-ink)" }}>
                    <option value="">Select…</option>
                    <option>Product Engineering</option>
                    <option>Data &amp; Analytics</option>
                    <option>Process Optimization</option>
                    <option>Managed Services</option>
                    <option>Enterprise Systems</option>
                    <option>Staffing</option>
                  </select>
                </div>

                <div className="flex flex-col gap-1.5 col-span-2 max-[540px]:col-span-1">
                  <label htmlFor="ms" className="font-mono text-[10px] tracking-[0.12em] uppercase" style={{ color: "var(--color-ink-3)" }}>What are you trying to build?</label>
                  <textarea
                    id="ms"
                    rows={4}
                    placeholder="Describe the problem, the context, and what success looks like."
                    className="rounded-[6px] px-[13px] py-2.5 text-[14px] outline-none resize-y min-h-[90px] transition-[border-color] duration-[180ms]"
                    style={{ background: "rgba(0,0,0,0.3)", border: "1px solid var(--color-line)", color: "var(--color-ink)", fontFamily: "var(--font-sans)" }}
                    onFocus={(e) => { e.currentTarget.style.borderColor = "var(--color-teal)"; }}
                    onBlur={(e) => { e.currentTarget.style.borderColor = "var(--color-line)"; }}
                  />
                </div>

                <div className="col-span-2 max-[540px]:col-span-1">
                  <button
                    type="button"
                    className="w-full flex justify-center items-center gap-2 px-5 py-[11px] rounded-lg text-[14px] font-medium transition-all duration-[180ms] hover:-translate-y-px cursor-pointer border-none"
                    style={{ background: sent ? "#b91c1c" : "var(--color-cta)", color: "#ffffff" }}
                    onClick={() => setSent(true)}
                  >
                    {sent ? "Message sent ✓" : "Send Message →"}
                  </button>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
