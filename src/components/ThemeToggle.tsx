import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/hooks/use-theme";

export default function ThemeToggle({ className = "" }: { className?: string }) {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      title={isDark ? "Light mode" : "Dark mode"}
      className={`relative inline-flex items-center justify-center w-10 h-10 rounded-full overflow-hidden border border-white/30 dark:border-white/10 bg-white/40 dark:bg-white/5 backdrop-blur-xl transition-all duration-500 hover:scale-110 hover:shadow-[0_0_20px_-2px_rgba(127,91,255,0.6)] hover:border-transparent group ${className}`}
    >
      {/* Gradient glow on hover */}
      <span
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background:
            "linear-gradient(135deg, rgba(255,107,107,0.25), rgba(127,91,255,0.25), rgba(0,212,255,0.25))",
        }}
        aria-hidden="true"
      />

      {/* Sun icon */}
      <Sun
        className={`absolute w-[18px] h-[18px] text-amber-500 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isDark
            ? "opacity-0 rotate-90 scale-50"
            : "opacity-100 rotate-0 scale-100"
        }`}
      />
      {/* Moon icon */}
      <Moon
        className={`absolute w-[18px] h-[18px] text-indigo-300 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isDark
            ? "opacity-100 rotate-0 scale-100"
            : "opacity-0 -rotate-90 scale-50"
        }`}
      />
    </button>
  );
}
