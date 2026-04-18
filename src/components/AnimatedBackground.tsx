import { useEffect, useRef } from "react";

export default function AnimatedBackground() {
  const blob1Ref = useRef<HTMLDivElement>(null);
  const blob2Ref = useRef<HTMLDivElement>(null);
  const blob3Ref = useRef<HTMLDivElement>(null);
  const blob4Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Disable parallax on mobile (<= 768px) and for users who prefer reduced motion
    const mql = window.matchMedia("(max-width: 768px)");
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mql.matches || reduced.matches) return;

    const target = { x: 0, y: 0 };
    const current = { x: 0, y: 0 };
    let rafId = 0;

    const onMouseMove = (e: MouseEvent) => {
      // Normalize to -1..1
      target.x = (e.clientX / window.innerWidth) * 2 - 1;
      target.y = (e.clientY / window.innerHeight) * 2 - 1;
    };

    const tick = () => {
      // Smooth easing toward target (lerp)
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

      // Different depths create parallax layering
      apply(blob1Ref.current, 40, 4, 1);
      apply(blob2Ref.current, -55, -3, 1.02);
      apply(blob3Ref.current, 30, 2, 0.98);
      apply(blob4Ref.current, -25, 5, 1);

      rafId = requestAnimationFrame(tick);
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    rafId = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div
      className="fixed inset-0 pointer-events-none overflow-hidden"
      aria-hidden="true"
      style={{ perspective: "1200px", zIndex: 0 }}
    >
      {/* Base soft gradient wash */}
      <div
        className="absolute inset-0 opacity-60"
        style={{
          background:
            "linear-gradient(120deg, #fff5f5 0%, #f3efff 35%, #eef9ff 70%, #f0fff7 100%)",
          backgroundSize: "300% 300%",
          animation: "gradient-shift 18s ease infinite",
        }}
      />

      {/* Animated colored blobs with parallax (wrapper handles mouse, inner handles float) */}
      <div
        ref={blob1Ref}
        className="absolute top-[-10%] left-[-5%] w-[520px] h-[520px] will-change-transform"
        style={{ transition: "transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)" }}
      >
        <div
          className="w-full h-full rounded-full blur-3xl opacity-40"
          style={{
            background:
              "radial-gradient(circle, #FF6B6B 0%, #FF8E53 50%, transparent 70%)",
            animation: "blob-1 22s ease-in-out infinite",
          }}
        />
      </div>

      <div
        ref={blob2Ref}
        className="absolute top-[30%] right-[-8%] w-[600px] h-[600px] will-change-transform"
        style={{ transition: "transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)" }}
      >
        <div
          className="w-full h-full rounded-full blur-3xl opacity-35"
          style={{
            background:
              "radial-gradient(circle, #7F5BFF 0%, #A56BFF 45%, transparent 70%)",
            animation: "blob-2 26s ease-in-out infinite",
          }}
        />
      </div>

      <div
        ref={blob3Ref}
        className="absolute bottom-[-10%] left-[20%] w-[560px] h-[560px] will-change-transform"
        style={{ transition: "transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)" }}
      >
        <div
          className="w-full h-full rounded-full blur-3xl opacity-35"
          style={{
            background:
              "radial-gradient(circle, #00D4FF 0%, #5BFFB0 50%, transparent 70%)",
            animation: "blob-3 30s ease-in-out infinite",
          }}
        />
      </div>

      <div
        ref={blob4Ref}
        className="absolute top-[55%] left-[40%] w-[480px] h-[480px] will-change-transform"
        style={{ transition: "transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)" }}
      >
        <div
          className="w-full h-full rounded-full blur-3xl opacity-25"
          style={{
            background:
              "radial-gradient(circle, #FF6BD6 0%, #7F5BFF 55%, transparent 70%)",
            animation: "blob-1 28s ease-in-out infinite reverse",
          }}
        />
      </div>
    </div>
  );
}
