"use client";

import { useEffect, useRef, useState } from "react";

interface CountUpProps {
  target: number;
  suffix?: string;
  className?: string;
}

export function CountUp({ target, suffix = "+", className }: CountUpProps) {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const animated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !animated.current) {
            animated.current = true;
            const start = performance.now();
            const dur = 1200;
            const tick = (now: number) => {
              const t = Math.min(1, (now - start) / dur);
              const eased = 1 - Math.pow(1 - t, 3);
              setValue(Math.round(target * eased));
              if (t < 1) requestAnimationFrame(tick);
            };
            requestAnimationFrame(tick);
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.18 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [target]);

  return (
    <span ref={ref} className={className}>
      {value}
      {suffix}
    </span>
  );
}
