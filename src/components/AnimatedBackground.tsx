export default function AnimatedBackground() {
  return (
    <div
      className="fixed inset-0 -z-10 pointer-events-none overflow-hidden"
      aria-hidden="true"
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

      {/* Animated colored blobs */}
      <div
        className="absolute top-[-10%] left-[-5%] w-[520px] h-[520px] rounded-full blur-3xl opacity-40"
        style={{
          background:
            "radial-gradient(circle, #FF6B6B 0%, #FF8E53 50%, transparent 70%)",
          animation: "blob-1 22s ease-in-out infinite",
        }}
      />
      <div
        className="absolute top-[30%] right-[-8%] w-[600px] h-[600px] rounded-full blur-3xl opacity-35"
        style={{
          background:
            "radial-gradient(circle, #7F5BFF 0%, #A56BFF 45%, transparent 70%)",
          animation: "blob-2 26s ease-in-out infinite",
        }}
      />
      <div
        className="absolute bottom-[-10%] left-[20%] w-[560px] h-[560px] rounded-full blur-3xl opacity-35"
        style={{
          background:
            "radial-gradient(circle, #00D4FF 0%, #5BFFB0 50%, transparent 70%)",
          animation: "blob-3 30s ease-in-out infinite",
        }}
      />
      <div
        className="absolute top-[55%] left-[40%] w-[480px] h-[480px] rounded-full blur-3xl opacity-25"
        style={{
          background:
            "radial-gradient(circle, #FF6BD6 0%, #7F5BFF 55%, transparent 70%)",
          animation: "blob-1 28s ease-in-out infinite reverse",
        }}
      />
    </div>
  );
}
