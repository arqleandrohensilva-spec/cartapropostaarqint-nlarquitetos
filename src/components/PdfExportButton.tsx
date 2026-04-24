import { useState } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

/**
 * Botão flutuante que exporta a carta-proposta como PDF A4 paisagem.
 * Estratégia: captura cada <section id="..."> separadamente e dedica
 * uma página por seção — assim NÃO há quebra de layout no meio de um bloco.
 *
 * Identidade visual preservada: a captura usa exatamente a renderização
 * atual (fontes Cormorant + Inter, paleta NL, bandas, scrims, vinheta).
 */
const PdfExportButton = () => {
  const [busy, setBusy] = useState(false);
  const [progress, setProgress] = useState<string>("");

  const handleExport = async () => {
    if (busy) return;
    setBusy(true);
    setProgress("Preparando…");

    // A4 landscape em mm: 297 x 210
    const PAGE_W = 297;
    const PAGE_H = 210;

    const pdf = new jsPDF({
      orientation: "landscape",
      unit: "mm",
      format: "a4",
      compress: true,
    });

    // Coleta seções na ordem do DOM
    const sections = Array.from(
      document.querySelectorAll<HTMLElement>("main section[id]")
    );

    // Esconde overlays que não devem aparecer no PDF (nav lateral, próprio botão)
    const hideEls = document.querySelectorAll<HTMLElement>(
      "[data-pdf-hide], [data-section-nav]"
    );
    const prevDisplay: string[] = [];
    hideEls.forEach((el, i) => {
      prevDisplay[i] = el.style.display;
      el.style.display = "none";
    });

    // Marca o body para neutralizar afordâncias de edição durante a captura
    document.body.setAttribute("data-pdf-capturing", "true");

    try {
      for (let i = 0; i < sections.length; i++) {
        const section = sections[i];
        setProgress(`Capturando ${i + 1}/${sections.length}…`);

        // Garante que imagens dentro da seção estejam carregadas
        const imgs = Array.from(section.querySelectorAll("img"));
        await Promise.all(
          imgs.map((img) =>
            img.complete && img.naturalWidth > 0
              ? Promise.resolve()
              : new Promise<void>((resolve) => {
                  img.addEventListener("load", () => resolve(), { once: true });
                  img.addEventListener("error", () => resolve(), { once: true });
                })
          )
        );

        const canvas = await html2canvas(section, {
          backgroundColor: getComputedStyle(document.body).backgroundColor,
          scale: 2, // alta resolução para premium
          useCORS: true,
          allowTaint: false,
          logging: false,
          windowWidth: 1600, // força layout desktop, ignora viewport real
          imageTimeout: 15000,
          onclone: (clonedDoc) => {
            // Remove afordâncias de edição (hover/borda) no clone
            const style = clonedDoc.createElement("style");
            style.textContent = `
              [data-editable]:hover,
              [data-editable]:focus {
                background: transparent !important;
                box-shadow: none !important;
                outline: none !important;
              }
              [data-pdf-hide], [data-section-nav] { display: none !important; }
            `;
            clonedDoc.head.appendChild(style);
          },
        });

        const imgData = canvas.toDataURL("image/jpeg", 0.92);

        // Calcula dimensões mantendo aspect ratio dentro do A4 paisagem
        const cw = canvas.width;
        const ch = canvas.height;
        const pageRatio = PAGE_W / PAGE_H;
        const imgRatio = cw / ch;

        let drawW = PAGE_W;
        let drawH = PAGE_H;

        if (imgRatio > pageRatio) {
          // imagem mais larga que a página → ajusta pela largura
          drawW = PAGE_W;
          drawH = PAGE_W / imgRatio;
        } else {
          // imagem mais alta → ajusta pela altura
          drawH = PAGE_H;
          drawW = PAGE_H * imgRatio;
        }

        const offsetX = (PAGE_W - drawW) / 2;
        const offsetY = (PAGE_H - drawH) / 2;

        if (i > 0) pdf.addPage("a4", "landscape");

        // Fundo da página com a cor do tema (evita bordas brancas se houver letterbox)
        const bg = getComputedStyle(document.body).backgroundColor;
        const rgb = bg.match(/\d+/g);
        if (rgb && rgb.length >= 3) {
          pdf.setFillColor(
            parseInt(rgb[0]),
            parseInt(rgb[1]),
            parseInt(rgb[2])
          );
          pdf.rect(0, 0, PAGE_W, PAGE_H, "F");
        }

        pdf.addImage(
          imgData,
          "JPEG",
          offsetX,
          offsetY,
          drawW,
          drawH,
          undefined,
          "FAST"
        );
      }

      setProgress("Finalizando…");
      pdf.save("NL-Arquitetos-Carta-Proposta.pdf");
    } catch (err) {
      console.error("[PDF Export] erro:", err);
      alert("Não foi possível gerar o PDF. Tente novamente.");
    } finally {
      // Restaura visibilidade
      hideEls.forEach((el, i) => {
        el.style.display = prevDisplay[i] ?? "";
      });
      document.body.removeAttribute("data-pdf-capturing");
      setBusy(false);
      setProgress("");
    }
  };

  return (
    <button
      type="button"
      onClick={handleExport}
      disabled={busy}
      data-pdf-hide
      aria-label="Baixar carta-proposta em PDF"
      className="fixed bottom-6 right-6 z-50 group flex items-center gap-3 px-5 py-3 bg-surface-elevated border border-primary/40 text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-500 shadow-[0_10px_40px_-10px_hsl(0_0%_0%/0.5)] backdrop-blur-sm disabled:opacity-70 disabled:cursor-wait"
      style={{ borderRadius: "2px" }}
    >
      <svg
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        className="transition-transform group-hover:translate-y-0.5"
        aria-hidden="true"
      >
        <path d="M12 3v12m0 0l-4-4m4 4l4-4M5 21h14" />
      </svg>
      <span className="font-mono text-[10px] uppercase tracking-[0.25em]">
        {busy ? progress || "Gerando…" : "Baixar PDF"}
      </span>
    </button>
  );
};

export default PdfExportButton;
