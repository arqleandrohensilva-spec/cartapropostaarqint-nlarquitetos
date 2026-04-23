import { useEffect, useState } from "react";
import { clearAllEdits } from "./Editable";
import { isEditMode } from "@/lib/edit-mode";

const SECTIONS = [
  { id: "capa", label: "Capa" },
  { id: "manifesto", label: "Carta" },
  { id: "apresentacao", label: "Apresentação" },
  { id: "case", label: "Casa Costas" },
  { id: "interiores", label: "Interiores" },
  { id: "portfolio", label: "Portfólio" },
  { id: "etapas", label: "Etapas do projeto" },
  { id: "escopo", label: "Escopo técnico" },
  { id: "pilares", label: "Nossos Pilares" },
  { id: "cronograma", label: "Cronograma" },
  { id: "beneficios", label: "Benefícios" },
  { id: "investimento", label: "Pacotes" },
  { id: "diferenciais", label: "Diferenciais" },
  { id: "nota", label: "Nota" },
  { id: "proximos", label: "Próximos passos" },
  { id: "encerramento", label: "Encerramento" },
];

const SectionNav = () => {
  const [active, setActive] = useState("capa");
  const [showHelper, setShowHelper] = useState(true);
  const editing = isEditMode();

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    SECTIONS.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) obs.observe(el);
    });
    const t = setTimeout(() => setShowHelper(false), 6000);
    return () => {
      obs.disconnect();
      clearTimeout(t);
    };
  }, []);

  return (
    <>
      {/* Right side: dot navigation */}
      <nav
        aria-label="Navegação da carta"
        className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col gap-4"
      >
        {SECTIONS.map((s, i) => (
          <a
            key={s.id}
            href={`#${s.id}`}
            className="group flex items-center gap-3 justify-end"
            aria-label={`Ir para ${s.label}`}
          >
            <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-mono text-[10px] tracking-[0.25em] uppercase text-muted-foreground">
              {s.label}
            </span>
            <span
              className={`block h-px transition-all duration-500 ${
                active === s.id ? "w-8 bg-primary" : "w-4 bg-border"
              }`}
            />
            <span className="font-mono text-[9px] text-muted-foreground/60 w-4 text-right">
              {String(i + 1).padStart(2, "0")}
            </span>
          </a>
        ))}
      </nav>

      {/* Top: brand + reset (reset only in edit mode) */}
      <header className="fixed top-0 inset-x-0 z-40 px-6 md:px-10 py-5 flex items-center justify-between pointer-events-none">
        <a
          href="#capa"
          className="pointer-events-auto font-display text-lg tracking-[0.4em] text-foreground/80 hover:text-primary transition-colors"
          aria-label="NL Arquitetos"
        >
          NL
        </a>
        {editing && (
          <button
            onClick={() => {
              if (confirm("Restaurar todos os textos originais?")) clearAllEdits();
            }}
            className="pointer-events-auto font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground hover:text-primary transition-colors"
          >
            Restaurar texto
          </button>
        )}
      </header>

      {/* Edit helper toast — only in edit mode */}
      {editing && showHelper && (
        <div className="fixed bottom-6 left-6 z-40 max-w-xs animate-fade-in">
          <div className="bg-card border border-border/60 px-4 py-3 backdrop-blur shadow-lg">
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary mb-1">
              Edição inline
            </p>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Clique em qualquer texto para editar. Suas alterações são salvas automaticamente.
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default SectionNav;
