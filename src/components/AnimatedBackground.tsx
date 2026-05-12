import { useEffect, useRef } from "react";

export default function AnimatedBackground() {
  const blob1Ref = useRef<HTMLDivElement>(null);
  const blob2Ref = useRef<HTMLDivElement>(null);
  const blob3Ref = useRef<HTMLDivElement>(null);
  const blob4Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mql = window.matchMedia("(max-width: 768px)");
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mql.matches || reduced.matches) return;

    const target = { x: 0, y: 0 };
    const current = { x: 0, y: 0 };
    let rafId = 0;

    const onMouseMove = (e: MouseEvent) => {
      target.x = (e.clientX / window.innerWidth) * 2 - 1;
      target.y = (e.clientY / window.innerHeight) * 2 - 1;
    };

    const tick = () => {
      current.x += (target.x - current.x) * 0.04;
      current.y += (target.y - current.y) * 0.04;

      const apply = (
        el: HTMLDivElement | null,
        depth: number,
        rotate: number,
        scale: number,
      ) => {
        if (!el) return;
        const tx = current.x * depth;
        const ty = current.y * depth;
        const rz = current.x * rotate;
        el.style.transform = `translate3d(${tx}px, ${ty}px, 0) rotate(${rz}deg) scale(${scale})`;
      };

      apply(blob1Ref.current, 50, 4, 1);
      apply(blob2Ref.current, -65, -3, 1.05);
      apply(blob3Ref.current, 35, 2, 0.98);
      apply(blob4Ref.current, -30, 5, 1);

      rafId = requestAnimationFrame(tick);
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    rafId = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(rafId);
    };
  }, []);

  // Subtle SVG noise as data URI for the grain overlay
  const noiseSvg =
    "data:image/svg+xml;utf8," +
    encodeURIComponent(
      `<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'>
        <filter id='n'>
          <feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/>
          <feColorMatrix values='0 0 0 0 1  0 0 0 0 1  0 0 0 0 1  0 0 0 0.6 0'/>
        </filter>
        <rect width='100%' height='100%' filter='url(#n)' opacity='0.5'/>
      </svg>`,
    );

  return (
    <div
      className="fixed inset-0 pointer-events-none overflow-hidden"
      aria-hidden="true"
      style={{ perspective: "1200px", zIndex: 0 }}
    >
      {/* Deep navy/black base */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 20% 10%, #0d1633 0%, transparent 55%), radial-gradient(ellipse at 80% 90%, #160a33 0%, transparent 55%), linear-gradient(180deg, #060814 0%, #04060f 100%)",
        }}
      />

      {/* Animated gradient wash (subtle hue shift) */}
      <div
        className="absolute inset-0 opacity-40 mix-blend-screen"
        style={{
          background:
            "linear-gradient(120deg, #1e3a8a 0%, #4c1d95 35%, #1e1b4b 70%, #0f172a 100%)",
          backgroundSize: "300% 300%",
          animation: "gradient-shift 22s ease infinite",
        }}
      />

      {/* Glow orbs with parallax */}
      <div
        ref={blob1Ref}
        className="absolute top-[-12%] left-[-8%] w-[640px] h-[640px] will-change-transform"
        style={{ transition: "transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)" }}
      >
        <div
          className="w-full h-full rounded-full opacity-60"
          style={{
            background:
              "radial-gradient(circle, #3b82f6 0%, #1e40af 40%, transparent 70%)",
            filter: "blur(90px)",
            animation: "blob-1 24s ease-in-out infinite",
          }}
        />
      </div>

      <div
        ref={blob2Ref}
        className="absolute top-[20%] right-[-10%] w-[720px] h-[720px] will-change-transform"
        style={{ transition: "transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)" }}
      >
        <div
          className="w-full h-full rounded-full opacity-55"
          style={{
            background:
              "radial-gradient(circle, #8b5cf6 0%, #5b21b6 40%, transparent 70%)",
            filter: "blur(100px)",
            animation: "blob-2 28s ease-in-out infinite",
          }}
        />
      </div>

      <div
        ref={blob3Ref}
        className="absolute bottom-[-15%] left-[15%] w-[680px] h-[680px] will-change-transform"
        style={{ transition: "transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)" }}
      >
        <div
          className="w-full h-full rounded-full opacity-50"
          style={{
            background:
              "radial-gradient(circle, #6366f1 0%, #312e81 45%, transparent 70%)",
            filter: "blur(110px)",
            animation: "blob-3 32s ease-in-out infinite",
          }}
        />
      </div>

      <div
        ref={blob4Ref}
        className="absolute top-[55%] left-[38%] w-[520px] h-[520px] will-change-transform"
        style={{ transition: "transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)" }}
      >
        <div
          className="w-full h-full rounded-full opacity-40"
          style={{
            background:
              "radial-gradient(circle, #06b6d4 0%, #1e3a8a 55%, transparent 75%)",
            filter: "blur(100px)",
            animation: "blob-1 30s ease-in-out infinite reverse",
          }}
        />
      </div>

      {/* Vignette for depth */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.55) 100%)",
        }}
      />

      {/* Grain / noise overlay */}
      <div
        className="absolute inset-0 opacity-[0.06] mix-blend-overlay"
        style={{
          backgroundImage: `url("${noiseSvg}")`,
          backgroundRepeat: "repeat",
        }}
      />
    </div>
  );
}
