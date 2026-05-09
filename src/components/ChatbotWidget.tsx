import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Send, X, Minus } from "lucide-react";
import pixarbrosLogo from "@/assets/pixarbros-logo.png";

const WEBHOOK_URL =
  "https://kiwiga1809.app.n8n.cloud/webhook/Pixarbros_chatbot";
const STORAGE_KEY = "pixarbros-chat-history";
const SESSION_KEY = "pixarbros-chat-session";

type Role = "user" | "bot";
interface Msg {
  id: string;
  role: Role;
  text: string;
  ts: number;
}

const QUICK_PROMPTS = [
  "Build My Website",
  "AI Automation Help",
  "Animation Services",
  "App Development",
  "Graphic Design",
  "Get a Quote",
];

const WELCOME: Msg = {
  id: "welcome",
  role: "bot",
  text: "Hi 👋\nWelcome to Pixarbros.\nWe help brands with animation, websites, apps, graphic design, and AI automation solutions.\nHow can we help you today?",
  ts: Date.now(),
};

function getSessionId() {
  if (typeof window === "undefined") return "";
  let id = localStorage.getItem(SESSION_KEY);
  if (!id) {
    id = `sess_${Date.now()}_${Math.random().toString(36).slice(2, 10)}`;
    localStorage.setItem(SESSION_KEY, id);
  }
  return id;
}

function loadHistory(): Msg[] {
  if (typeof window === "undefined") return [WELCOME];
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [WELCOME];
    const parsed = JSON.parse(raw) as Msg[];
    return parsed.length ? parsed : [WELCOME];
  } catch {
    return [WELCOME];
  }
}

function formatTime(ts: number) {
  return new Date(ts).toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
}

export default function ChatbotWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Msg[]>(() => loadHistory());
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(messages));
    } catch {}
  }, [messages]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        top: scrollRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [messages, loading, open]);

  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 250);
  }, [open]);

  async function sendMessage(text: string) {
    const trimmed = text.trim();
    if (!trimmed || loading) return;

    const userMsg: Msg = {
      id: `u_${Date.now()}`,
      role: "user",
      text: trimmed,
      ts: Date.now(),
    };
    setMessages((m) => [...m, userMsg]);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: trimmed,
          timestamp: new Date().toISOString(),
          sessionId: getSessionId(),
          pageUrl: typeof window !== "undefined" ? window.location.href : "",
        }),
      });

      let reply = "Thanks! We'll be in touch shortly.";
      const ct = res.headers.get("content-type") || "";
      if (ct.includes("application/json")) {
        const data = await res.json();
        reply =
          (typeof data === "string" && data) ||
          data?.reply ||
          data?.message ||
          data?.output ||
          data?.text ||
          (Array.isArray(data) && (data[0]?.reply || data[0]?.message || data[0]?.output)) ||
          reply;
      } else {
        const txt = await res.text();
        if (txt) reply = txt;
      }

      setMessages((m) => [
        ...m,
        { id: `b_${Date.now()}`, role: "bot", text: String(reply), ts: Date.now() },
      ]);
    } catch {
      setMessages((m) => [
        ...m,
        {
          id: `b_${Date.now()}`,
          role: "bot",
          text: "Something went wrong. Please try again.",
          ts: Date.now(),
        },
      ]);
    } finally {
      setLoading(false);
    }
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    sendMessage(input);
  }

  return (
    <>
      {/* Floating Button */}
      <AnimatePresence>
        {!open && (
          <motion.button
            key="fab"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setOpen(true)}
            aria-label="Open Pixarbros AI chat"
            className="fixed bottom-5 right-5 md:bottom-7 md:right-7 z-[100] group"
          >
            <span className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#7C3AED] to-[#06B6D4] blur-xl opacity-70 animate-pulse" />
            <span className="relative flex items-center justify-center w-16 h-16 md:w-[72px] md:h-[72px] rounded-2xl bg-gradient-to-br from-[#0B0F19] via-[#1a1530] to-[#0B0F19] shadow-[0_10px_40px_-5px_rgba(124,58,237,0.6)] ring-1 ring-white/20 p-2.5 overflow-hidden">
              <span className="absolute inset-0 bg-gradient-to-br from-[#7C3AED]/20 to-[#06B6D4]/20" />
              <img src={pixarbrosLogo} alt="Pixarbros" className="relative w-full h-full object-contain drop-shadow-[0_2px_8px_rgba(124,58,237,0.6)]" />
            </span>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat Window */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="window"
            initial={{ opacity: 0, y: 30, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.92 }}
            transition={{ type: "spring", stiffness: 280, damping: 26 }}
            className="fixed z-[100] bottom-0 right-0 w-full h-[100dvh] md:bottom-6 md:right-6 md:h-[640px] md:max-h-[85vh] md:w-[400px] md:rounded-3xl overflow-hidden"
            style={{
              background:
                "linear-gradient(160deg, rgba(11,15,25,0.92), rgba(20,15,40,0.92))",
              backdropFilter: "blur(24px)",
              WebkitBackdropFilter: "blur(24px)",
              boxShadow:
                "0 30px 80px -20px rgba(124,58,237,0.45), 0 0 0 1px rgba(255,255,255,0.08)",
            }}
          >
            {/* Glow accents */}
            <div className="pointer-events-none absolute -top-20 -left-20 w-60 h-60 rounded-full bg-[#7C3AED]/30 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-24 -right-24 w-72 h-72 rounded-full bg-[#06B6D4]/25 blur-3xl" />

            <div className="relative flex flex-col h-full">
              {/* Header */}
              <div className="flex items-center justify-between px-4 py-3 border-b border-white/10 bg-white/[0.02]">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#7C3AED] to-[#06B6D4] flex items-center justify-center ring-1 ring-white/20">
                      <Bot className="w-5 h-5 text-white" />
                    </div>
                    <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-emerald-400 ring-2 ring-[#0B0F19] animate-pulse" />
                  </div>
                  <div>
                    <div className="text-white font-semibold text-sm tracking-tight">
                      Pixarbros AI
                    </div>
                    <div className="text-[11px] text-emerald-300/90 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      Online · Replies instantly
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-1">
                  <button
                    onClick={() => setOpen(false)}
                    className="p-2 rounded-full text-white/70 hover:text-white hover:bg-white/10 transition"
                    aria-label="Minimize"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setOpen(false)}
                    className="p-2 rounded-full text-white/70 hover:text-white hover:bg-white/10 transition"
                    aria-label="Close chat"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Messages */}
              <div
                ref={scrollRef}
                className="flex-1 overflow-y-auto px-4 py-5 space-y-4 scroll-smooth"
                style={{ scrollbarWidth: "thin" }}
              >
                {messages.map((m) => (
                  <MessageBubble key={m.id} msg={m} />
                ))}

                {loading && <TypingBubble />}

                {/* Quick prompts only on first interaction */}
                {messages.length <= 1 && !loading && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="flex flex-wrap gap-2 pt-2"
                  >
                    {QUICK_PROMPTS.map((p) => (
                      <button
                        key={p}
                        onClick={() => sendMessage(p)}
                        className="text-xs px-3 py-1.5 rounded-full border border-white/15 bg-white/5 text-white/90 hover:bg-white/10 hover:border-white/30 hover:scale-[1.03] transition-all"
                      >
                        {p}
                      </button>
                    ))}
                  </motion.div>
                )}
              </div>

              {/* Input */}
              <form
                onSubmit={handleSubmit}
                className="border-t border-white/10 bg-white/[0.02] p-3"
              >
                <div className="flex items-center gap-2 rounded-2xl border border-white/15 bg-white/5 focus-within:border-[#7C3AED]/60 focus-within:shadow-[0_0_0_3px_rgba(124,58,237,0.15)] transition-all px-3 py-2">
                  <input
                    ref={inputRef}
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Ask anything…"
                    className="flex-1 bg-transparent text-sm text-white placeholder:text-white/40 outline-none"
                    disabled={loading}
                  />
                  <motion.button
                    whileHover={{ scale: 1.06 }}
                    whileTap={{ scale: 0.94 }}
                    type="submit"
                    disabled={!input.trim() || loading}
                    className="flex items-center justify-center w-9 h-9 rounded-xl bg-gradient-to-br from-[#7C3AED] to-[#06B6D4] text-white disabled:opacity-40 disabled:cursor-not-allowed shadow-lg shadow-[#7C3AED]/30"
                    aria-label="Send"
                  >
                    <Send className="w-4 h-4" />
                  </motion.button>
                </div>
                <div className="text-[10px] text-white/40 text-center mt-2 tracking-wide">
                  Powered by Pixarbros AI
                </div>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function MessageBubble({ msg }: { msg: Msg }) {
  const isUser = msg.role === "user";
  return (
    <motion.div
      initial={{ opacity: 0, y: 10, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
      className={`flex ${isUser ? "justify-end" : "justify-start"}`}
    >
      <div className={`max-w-[82%] ${isUser ? "items-end" : "items-start"} flex flex-col gap-1`}>
        <div
          className={
            isUser
              ? "px-4 py-2.5 rounded-2xl rounded-br-md text-sm text-white bg-gradient-to-br from-[#7C3AED] to-[#06B6D4] shadow-lg shadow-[#7C3AED]/20"
              : "px-4 py-2.5 rounded-2xl rounded-bl-md text-sm text-white/90 bg-white/[0.06] border border-white/10 backdrop-blur-md"
          }
          style={{ whiteSpace: "pre-wrap" }}
        >
          {msg.text}
        </div>
        <span className="text-[10px] text-white/40 px-1">
          {formatTime(msg.ts)}
        </span>
      </div>
    </motion.div>
  );
}

function TypingBubble() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex justify-start"
    >
      <div className="px-4 py-3 rounded-2xl rounded-bl-md bg-white/[0.06] border border-white/10 flex items-center gap-1.5">
        {[0, 1, 2].map((i) => (
          <motion.span
            key={i}
            className="w-1.5 h-1.5 rounded-full bg-gradient-to-br from-[#7C3AED] to-[#06B6D4]"
            animate={{ y: [0, -4, 0], opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 0.9, repeat: Infinity, delay: i * 0.15 }}
          />
        ))}
      </div>
    </motion.div>
  );
}
