import { useLocation, useNavigate } from "react-router-dom";
import { cn } from "@/lib/utils";

const variants = [
  { path: "/", label: "Original", hint: "Champagne" },
  { path: "/quente", label: "Quente", hint: "Âmbar" },
  { path: "/geometrica", label: "Geométrica", hint: "Escultórica" },
] as const;

/**
 * Floating selector to preview the three cover variants.
 * Visible only in development/preview — fixed top-center.
 */
const CapaSwitcher = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const current = location.pathname;

  return (
    <div className="fixed top-4 left-1/2 -translate-x-1/2 z-[100] pointer-events-none">
      <div
        className="pointer-events-auto flex items-center gap-1 px-2 py-2 rounded-full border border-primary/30 bg-background/85 backdrop-blur-xl shadow-[0_8px_30px_-10px_rgba(0,0,0,0.6)]"
        role="tablist"
        aria-label="Selecionar variação de capa"
      >
        <span
          className="hidden md:inline-block px-3 text-[9px] uppercase tracking-[0.3em] text-primary/70 select-none"
          style={{ fontFamily: "'Courier New', monospace" }}
        >
          Capa
        </span>
        <span className="hidden md:block h-4 w-px bg-border" />
        {variants.map((v) => {
          const isActive = current === v.path;
          return (
            <button
              key={v.path}
              role="tab"
              aria-selected={isActive}
              onClick={() => navigate(v.path)}
              className={cn(
                "group relative px-4 py-1.5 rounded-full transition-all duration-300 outline-none focus-visible:ring-2 focus-visible:ring-primary/60",
                isActive
                  ? "bg-primary text-primary-foreground shadow-[0_4px_12px_-2px_hsl(var(--primary)/0.5)]"
                  : "text-foreground/70 hover:text-foreground hover:bg-primary/10"
              )}
            >
              <span
                className="block text-[10px] uppercase tracking-[0.25em] leading-none"
                style={{ fontFamily: "'Courier New', monospace", fontWeight: 500 }}
              >
                {v.label}
              </span>
              <span
                className={cn(
                  "block text-[8px] tracking-[0.2em] leading-none mt-0.5 transition-opacity",
                  isActive ? "text-primary-foreground/70" : "text-muted-foreground/60"
                )}
                style={{ fontFamily: "'Courier New', monospace" }}
              >
                {v.hint}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default CapaSwitcher;
