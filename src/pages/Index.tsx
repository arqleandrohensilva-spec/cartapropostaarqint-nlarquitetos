import { useState } from "react";
import Editable from "@/components/Editable";
import SectionNav from "@/components/SectionNav";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import caseCasaCostas from "@/assets/case-casa-costas.jpg";
import interiorLiving from "@/assets/interior-living.jpg";
import portfolioStair from "@/assets/portfolio-stair.jpg";
import portfolioKitchen from "@/assets/portfolio-kitchen.jpg";
import portfolioBedroom from "@/assets/portfolio-bedroom.jpg";
import portfolioFacade from "@/assets/portfolio-facade.jpg";

import scopeMaterials from "@/assets/scope-materials.jpg";
import beforeAfter from "@/assets/before-after.jpg";

const Index = () => {
  return (
    <main className="relative bg-background text-foreground overflow-x-hidden">
      <SectionNav />

      {/* ============================================================
          01 · CAPA — CORRIGIDA
          ============================================================ */}
      <section id="capa" className="relative min-h-screen flex flex-col justify-end px-6 md:px-16 lg:px-24 py-20">
        <img
          src="https://www.dropbox.com/scl/fi/h4zgd1j7vbpy7vnp8nc93/Capa-Apresenta-o.jpg?rlkey=42sutzf60yam0hhmjvyrvfwym&raw=1"
          alt="NL Arquitetos · monograma esculpido com luz dourada"
          className="absolute inset-0 w-full h-full object-cover opacity-50"
          width={1920}
          height={1280}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/10 to-background" />
        <div className="absolute inset-0 vignette" />

        <div className="relative z-10 max-w-4xl fade-up">
          <Editable id="capa.eyebrow" className="eyebrow mb-8 inline-block">
            Carta Proposta · Confidencial
          </Editable>

          <Editable
            as="h1"
            id="capa.title"
            multiline
            className="font-display text-5xl md:text-7xl lg:text-[7.5rem] leading-[0.95] text-foreground mb-8 text-balance"
          >
            A decisão tomada
            <br />
            <em className="text-primary not-italic font-light">antes</em> da obra.
          </Editable>

          <div className="gold-line w-32 mb-8" />

          <Editable
            id="capa.subtitle"
            multiline
            className="font-display italic text-xl md:text-2xl text-foreground/70 max-w-xl block"
          >
            Projeto executivo com compatibilização técnica e validação antecipada — para que cada centímetro seja
            decidido no papel, não no canteiro.
          </Editable>

          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 text-muted-foreground">
            <Editable id="capa.scarcity" className="font-mono text-[10px] uppercase tracking-[0.3em] text-primary/80">
              Metodologia R.E.S.O.L.V.E.
            </Editable>
            <span className="hidden md:block h-px w-8 bg-border" />
            <Editable id="capa.validity" className="font-mono text-[10px] uppercase tracking-[0.3em]">
              Validade · 30 dias corridos
            </Editable>
          </div>
        </div>

        <div className="relative z-10 mt-16 flex items-end justify-between text-muted-foreground">
          <div className="flex items-center gap-4">
            <span className="font-mono text-xs tracking-[0.3em]">01 / 13</span>
            <span className="h-px w-12 bg-border" />
            <Editable id="capa.client" className="font-mono text-xs tracking-[0.3em] uppercase text-primary/80">
              Cliente · [Nome do Cliente]
            </Editable>
          </div>
          <Editable id="capa.date" className="font-mono text-xs tracking-[0.3em] uppercase">
            São José dos Campos · 2025
          </Editable>
        </div>
      </section>

      {/* ============================================================
    02 · MANIFESTO
    ============================================================ */}
      <section id="manifesto" className="relative min-h-screen flex items-center px-6 md:px-16 lg:px-24 py-32">
        <div className="grid grid-cols-12 gap-8 w-full max-w-7xl mx-auto">
          <div className="col-span-12 md:col-span-3">
            <span className="number-marker block mb-2">02</span>
            <Editable id="manifesto.eyebrow" className="eyebrow">
              Manifesto
            </Editable>
          </div>
          <div className="col-span-12 md:col-span-9">
            <Editable
              as="h2"
              id="manifesto.title"
              multiline
              className="font-display text-4xl md:text-6xl lg:text-7xl leading-[1.05] mb-16 text-balance"
            >
              Antes de desenhar, <em className="text-primary not-italic">escutamos.</em>
              <br />
              Antes de construir, <em className="text-primary not-italic">decidimos.</em>
            </Editable>
            <div className="grid md:grid-cols-2 gap-12 max-w-4xl">
              <Editable
                id="manifesto.p1"
                multiline
                as="p"
                className="font-display text-lg md:text-xl leading-relaxed text-foreground/80"
              >
                A NL não começa pelo desenho. Começa pela escuta — entendendo o terreno, a família, o modo de viver. Só
                depois o primeiro traço aparece. E quando aparece, já foi validado.
              </Editable>
              <Editable
                id="manifesto.p2"
                multiline
                as="p"
                className="font-display text-lg md:text-xl leading-relaxed text-foreground/80"
              >
                Cada decisão tomada em projeto evita uma decisão custosa na obra. Não é opinião — é lógica construtiva.
                Quando você decide no canteiro, o material já foi comprado e o erro já virou custo.
              </Editable>
            </div>
            <div className="mt-20 pl-8 border-l border-primary/40 max-w-2xl">
              <Editable
                id="manifesto.quote"
                multiline
                as="p"
                className="font-display italic text-2xl md:text-3xl text-primary/90 leading-snug"
              >
                "Beleza sem método é apenas decoração. Arquitetura é a decisão tomada antes do primeiro traço."
              </Editable>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          03 · APRESENTAÇÃO VISUAL (editorial)
          ============================================================ */}
      <section id="apresentacao" className="relative min-h-screen px-6 md:px-16 lg:px-24 py-16 lg:py-20 flex flex-col justify-center">
        <div className="max-w-7xl mx-auto w-full">
          <div className="flex items-baseline justify-between mb-8 lg:mb-10 border-b border-border/60 pb-4">
            <div className="flex items-baseline gap-6">
              <span className="number-marker">03</span>
              <Editable id="apresentacao.eyebrow" className="eyebrow">
                Quem conduz
              </Editable>
            </div>
            <Editable
              id="apresentacao.tag"
              className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground hidden md:block"
            >
              Dois arquitetos · Um método
            </Editable>
          </div>

          <div className="grid grid-cols-12 gap-x-8 gap-y-10 items-start">
            <div className="col-span-12 lg:col-span-6">
              <Editable
                as="h2"
                id="apresentacao.title"
                multiline
                className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.0] text-balance mb-6"
              >
                A NL não é definida por quem assina —<br />
                <em className="text-primary not-italic">é definida pelo processo.</em>
              </Editable>

              <Editable
                id="apresentacao.body"
                multiline
                as="p"
                className="font-display text-base lg:text-lg leading-relaxed text-foreground/75 max-w-xl"
              >
                Fundada por Leandro e Neandro, a NL une visão estratégica e disciplina executiva em um único método.
                Transformamos o desejo do cliente em projeto executivo sem perdas — de conceito, de qualidade ou de
                controle.
              </Editable>

              <div className="mt-8 grid grid-cols-3 gap-6 max-w-lg">
                <Stat number="+50" label="Projetos entregues" id="stat1" />
                <Stat number="+8" label="Anos de mercado" id="stat2" />
                <Stat number="100%" label="Compatibilizados" id="stat3" />
              </div>
            </div>

            <aside className="col-span-12 lg:col-span-6 lg:pl-10 lg:border-l border-border/60">
              <div className="grid grid-cols-2 gap-5">
                <PartnerCard
                  id="leandro"
                  name="Leandro Henrique"
                  role="Co-Fundador · Arquiteto"
                  cau="CAU A252250-0"
                  image="https://www.dropbox.com/scl/fi/uydr0i2jkh4eq2semj7ey/Leandro.png?rlkey=1784s67wn6c6hjdma6wkgy91a&raw=1"
                />
                <PartnerCard
                  id="neandro"
                  name="Neandro Jacque"
                  role="Co-Fundador · Arquiteto"
                  cau="CAU A264629-3"
                  image="https://www.dropbox.com/scl/fi/6060a867ejklropxdqju3/Neandro.png?rlkey=3z4ynhzr1lq6treoni9h1fqyr&raw=1"
                />
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* ============================================================
    04 · CASE — CASA COSTAS
    ============================================================ */}
      <section id="case" className="relative">
        <div className="grid grid-cols-12 min-h-screen">
          <div className="col-span-12 lg:col-span-7 relative min-h-[60vh] lg:min-h-screen">
            <img
              src="https://www.dropbox.com/scl/fi/dibhyhod5xpz47v3l9rp3/Gemini_Generated_Image_896gxz896gxz896g-1.png?rlkey=q1ltxbytg9eo2ynmbz0njb0f3&raw=1"
              alt="Casa Costas · residência NL Arquitetos · São José dos Campos"
              className="absolute inset-0 w-full h-full object-cover"
              loading="lazy"
              width={1920}
              height={1280}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-background/40 lg:to-background" />
            <div className="absolute bottom-8 left-8 z-10 flex items-center gap-3">
              <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-primary">Case · 01</span>
              <span className="h-px w-8 bg-primary/60" />
            </div>
          </div>
          <div className="col-span-12 lg:col-span-5 relative px-8 md:px-16 py-20 lg:py-32 flex flex-col justify-center">
            <div className="max-w-md">
              <span className="number-marker block mb-4">04 · Projeto referência</span>
              <Editable
                as="h2"
                id="case.title"
                multiline
                className="font-display text-5xl md:text-6xl leading-[0.95] mb-2"
              >
                Casa <em className="text-primary not-italic">Costas.</em>
              </Editable>
              <Editable
                id="case.location"
                className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground block mb-10"
              >
                Residência · 300m² · São José dos Campos
              </Editable>
              <div className="gold-line w-16 mb-8" />
              <Editable
                id="case.body"
                multiline
                as="p"
                className="font-display text-lg leading-relaxed text-foreground/80 mb-10"
              >
                O pedido era claro: uma residência que equilibrasse presença e acolhimento. A fachada em concreto e
                madeira define o limite entre o público e o privado — sem abrir mão da luz. Cada detalhe, do
                revestimento ao recuo da garagem, foi validado em projeto antes de qualquer execução. O resultado é uma
                casa que funciona exatamente como foi decidido — antes da primeira escavação.
              </Editable>
              <div className="grid grid-cols-3 gap-6 border-t border-border/60 pt-8">
                <CaseStat id="case.s1" value="04" label="Meses de projeto" />
                <CaseStat id="case.s2" value="05" label="Disciplinas" />
                <CaseStat id="case.s3" value="0" label="Retrabalho" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
    05 · BLOCO DE INTERIORES
    ============================================================ */}
      <section id="interiores" className="relative px-6 md:px-16 lg:px-24 py-32">
        <div className="max-w-7xl mx-auto grid grid-cols-12 gap-8 items-center">
          <div className="col-span-12 lg:col-span-5 order-2 lg:order-1">
            <span className="number-marker block mb-3">05</span>
            <Editable id="interiores.eyebrow" className="eyebrow mb-8 inline-block">
              Interiores · Camada do habitar
            </Editable>
            <Editable
              as="h2"
              id="interiores.title"
              multiline
              className="font-display text-5xl md:text-6xl leading-[1.0] mb-10 text-balance"
            >
              O interior é onde a <em className="text-primary not-italic">arquitetura</em> encontra a vida.
            </Editable>
            <Editable
              id="interiores.body"
              multiline
              as="p"
              className="font-display text-lg leading-relaxed text-foreground/75 mb-10"
            >
              Não decoramos espaços — projetamos atmosferas. Cada material é escolhido pelo modo como envelhece, pelo
              toque, pelo som que o ambiente faz quando alguém entra. O resultado: interiores que não datam, que não
              cansam, e que continuam pertencendo a você dez anos após a entrega.
            </Editable>
            <ul className="space-y-3 font-display text-foreground/80">
              {[
                ["01", "Curadoria de materiais e acabamentos"],
                ["02", "Marcenaria sob medida com detalhamento executivo"],
                ["03", "Iluminação cênica e funcional integrada"],
                ["04", "Especificação de mobiliário e arte"],
              ].map(([num, txt], i) => (
                <li key={i} className="flex gap-4 items-baseline border-b border-border/40 pb-3">
                  <span className="font-mono text-xs text-primary/70">{num}</span>
                  <Editable id={`interiores.item${i}`} className="flex-1">
                    {txt}
                  </Editable>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-span-12 lg:col-span-7 order-1 lg:order-2 relative">
            <div className="relative aspect-[4/5] overflow-hidden">
              <img
                src="https://www.dropbox.com/scl/fi/hv5ka2it7y3mx78a9plos/tghdfjg.png?rlkey=7gx28a6t2ru8o4s8nz0mea4jp&raw=1"
                alt="Espaço Gourmet SJ · NL Arquitetos · interiores"
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
                width={1600}
                height={2000}
              />
            </div>
            <div className="absolute -bottom-4 -left-4 md:-left-8 bg-background border-l-2 border-primary px-5 py-3">
              <Editable
                id="interiores.caption"
                className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground"
              >
                Espaço Gourmet SJ · Materialidade e precisão
              </Editable>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
    06 · SEQUÊNCIA VISUAL — PORTFÓLIO EXPANDIDO
    ============================================================ */}
<section id="portfolio" className="relative px-6 md:px-16 lg:px-24 py-32">
  <div className="max-w-7xl mx-auto">
    <div className="flex items-baseline justify-between mb-16 border-b border-border/60 pb-6">
      <div className="flex items-baseline gap-6">
        <span className="number-marker">06</span>
        <Editable id="portfolio.eyebrow" className="eyebrow">
          Portfólio · Sequência
        </Editable>
      </div>
      <Editable
        id="portfolio.tag"
        className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground hidden md:block"
      >
        Quatro fragmentos · Um método
      </Editable>
    </div>

    <Editable
      as="h2"
      id="portfolio.title"
      multiline
      className="font-display text-5xl md:text-7xl leading-[1.0] mb-20 max-w-4xl text-balance"
    >
      Projetos que <em className="text-primary not-italic">provam</em> o método.
    </Editable>

    <div className="grid grid-cols-12 gap-4 md:gap-6">
      <figure className="col-span-12 md:col-span-5 row-span-2 group">
        <a
          href="https://www.dropbox.com/scl/fi/gc7yr8gcdep5iaxthxlz6/nomo-ai-6adc7dfa-c608-4cee-ad95-4693eb7f5a61.png?rlkey=mewhomhfyn14gs2p6a6y757rc&raw=1"
          target="_blank"
          rel="noreferrer"
          className="block overflow-hidden"
        >
          <div className="relative aspect-[3/4] overflow-hidden">
            <img
              src="https://www.dropbox.com/scl/fi/gc7yr8gcdep5iaxthxlz6/nomo-ai-6adc7dfa-c608-4cee-ad95-4693eb7f5a61.png?rlkey=mewhomhfyn14gs2p6a6y757rc&raw=1"
              alt="Residência · fachada · NL Arquitetos"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1500ms] group-hover:scale-105"
              loading="lazy"
              width={1080}
              height={1440}
            />
          </div>
        </a>
        <figcaption className="mt-4 flex items-baseline justify-between">
          <Editable id="port.cap1" className="font-display italic text-foreground/80">
            Fachada residencial · São José dos Campos
          </Editable>
          <span className="font-mono text-[10px] tracking-[0.3em] text-muted-foreground">01</span>
        </figcaption>
      </figure>

      <figure className="col-span-12 md:col-span-7 group">
        <a
          href="https://www.dropbox.com/scl/fi/mnuvtilaks5qtv8ghjjll/nomo-result-1776203970806.png?rlkey=nuz4nzorchhctk9ef6efxt5km&raw=1"
          target="_blank"
          rel="noreferrer"
          className="block overflow-hidden"
        >
          <div className="relative aspect-[16/10] overflow-hidden">
            <img
              src="https://www.dropbox.com/scl/fi/mnuvtilaks5qtv8ghjjll/nomo-result-1776203970806.png?rlkey=nuz4nzorchhctk9ef6efxt5km&raw=1"
              alt="Sala de estar · NL Arquitetos"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1500ms] group-hover:scale-105"
              loading="lazy"
              width={1920}
              height={1200}
            />
          </div>
        </a>
        <figcaption className="mt-4 flex items-baseline justify-between">
          <Editable id="port.cap2" className="font-display italic text-foreground/80">
            Sala de estar · Iluminação cênica
          </Editable>
          <span className="font-mono text-[10px] tracking-[0.3em] text-muted-foreground">02</span>
        </figcaption>
      </figure>

      <figure className="col-span-6 md:col-span-3 group">
        <a
          href="https://www.dropbox.com/scl/fi/qprr4s2fjkfti6tnyd89v/nomo-result-1775917620975.png?rlkey=0o6hu9dkmh2wr2phqu23z6avb&raw=1"
          target="_blank"
          rel="noreferrer"
          className="block overflow-hidden"
        >
          <div className="relative aspect-[3/4] overflow-hidden">
            <img
              src="https://www.dropbox.com/scl/fi/qprr4s2fjkfti6tnyd89v/nomo-result-1775917620975.png?rlkey=0o6hu9dkmh2wr2phqu23z6avb&raw=1"
              alt="Área de lazer · NL Arquitetos"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1500ms] group-hover:scale-105"
              loading="lazy"
              width={1080}
              height={1440}
            />
          </div>
        </a>
        <figcaption className="mt-4">
          <Editable id="port.cap3" className="font-display italic text-foreground/80 text-sm">
            Área de lazer · Convivência e materialidade
          </Editable>
          <div className="font-mono text-[10px] tracking-[0.3em] text-muted-foreground mt-1">03</div>
        </figcaption>
      </figure>

      <figure className="col-span-6 md:col-span-4 group">
        <a
          href="https://www.dropbox.com/scl/fi/vr5t57j716ouai5a8nujn/Gemini_Generated_Image_m7jpdpm7jpdpm7jp.png?rlkey=al8wrep2dwow5zulb8xnyzgyv&raw=1"
          target="_blank"
          rel="noreferrer"
          className="block overflow-hidden"
        >
          <div className="relative aspect-[3/4] overflow-hidden">
            <img
              src="https://www.dropbox.com/scl/fi/vr5t57j716ouai5a8nujn/Gemini_Generated_Image_m7jpdpm7jpdpm7jp.png?rlkey=al8wrep2dwow5zulb8xnyzgyv&raw=1"
              alt="Suíte · NL Arquitetos"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1500ms] group-hover:scale-105"
              loading="lazy"
              width={1920}
              height={1200}
            />
          </div>
        </a>
        <figcaption className="mt-4">
          <Editable id="port.cap4" className="font-display italic text-foreground/80 text-sm">
            Suíte · Conforto e precisão
          </Editable>
          <div className="font-mono text-[10px] tracking-[0.3em] text-muted-foreground mt-1">04</div>
        </figcaption>
      </figure>
    </div>
  </div>
</section>

      {/* ============================================================
          06.5 · ETAPAS DO PROJETO
          ============================================================ */}
      <section id="etapas" className="relative px-6 md:px-16 lg:px-24 py-28 bg-surface/40">
        <div className="max-w-[1400px] mx-auto">
          {/* Cabeçalho */}
          <div className="flex items-baseline justify-between mb-12 border-b border-border/60 pb-6">
            <div className="flex items-baseline gap-6">
              <span className="number-marker">06.5</span>
              <Editable id="etapas.eyebrow" className="eyebrow">
                Etapas · Do briefing à entrega
              </Editable>
            </div>
            <Editable
              id="etapas.tag"
              className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground hidden md:block"
            >
              Arquitetura → Interiores · Fluxo encadeado
            </Editable>
          </div>

          <div className="grid grid-cols-12 gap-8 mb-16">
            <Editable
              as="h2"
              id="etapas.title"
              multiline
              className="col-span-12 lg:col-span-7 font-display text-5xl md:text-6xl lg:text-7xl leading-[1.0] text-balance"
            >
              Do primeiro traço
              <br />
              <em className="text-primary not-italic">ao detalhe final.</em>
            </Editable>
            <Editable
              id="etapas.intro"
              multiline
              as="p"
              className="col-span-12 lg:col-span-5 lg:pt-4 font-display text-lg text-foreground/70 leading-relaxed"
            >
              Interiores inicia somente após aprovação integral da etapa de Arquitetura. Cada decisão é tomada na ordem
              certa — para que nada precise ser refeito depois.
            </Editable>
          </div>

          {/* Trilha 01 · Arquitetura Residencial */}
          <PhaseTimeline
            trackId="arq"
            number="01"
            title="Arquitetura Residencial"
            duration="5 a 6 meses"
            phases={[
              { n: "01", t: "Levantamento & Briefing", d: "Escuta profunda, programa de necessidades e leitura do terreno." },
              { n: "02", t: "Criação do Conceito", d: "Partido arquitetônico, narrativa e diretrizes que guiam todo o projeto." },
              { n: "03", t: "Estudo Preliminar com 3D", d: "Volumetria, implantação e atmosferas em 3D antes de qualquer técnica." },
              { n: "04", t: "EVF — Viabilidade Financeira", d: "Orçamento por quantitativos reais — decisão consciente de escopo.", optional: true },
              { n: "05", t: "Projeto Legal & Aprovações", d: "Prefeitura, concessionárias e órgãos — conduzidos pela NL." },
              { n: "06", t: "Projeto Executivo", d: "Pranchas, memoriais e detalhamentos prontos para canteiro." },
              { n: "07", t: "Compatibilização Técnica", d: "Coordenação entre arquitetura, estrutura e instalações — em parceria com engenheiros especializados." },
              { n: "08", t: "Acompanhamento de obra", d: "Visitas técnicas, ajustes e curadoria de fornecedores.", optional: true },
            ]}
          />

          <div className="my-20 flex items-center gap-6">
            <span className="h-px flex-1 bg-border" />
            <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-muted-foreground">
              Após aprovação da arquitetura
            </span>
            <span className="h-px flex-1 bg-border" />
          </div>

          {/* Trilha 02 · Arquitetura de Interiores */}
          <PhaseTimeline
            trackId="int"
            number="02"
            title="Arquitetura de Interiores"
            duration="3 a 4 meses · após arquitetura"
            phases={[
              { n: "01", t: "Briefing & Levantamentos", d: "Escuta profunda, leitura do espaço e do estilo de vida." },
              { n: "02", t: "Criação do Conceito", d: "Atmosfera, paleta e narrativa de interiores que orientam cada decisão." },
              { n: "03", t: "Concepção 3D", d: "Imagens realistas e vídeo 360° para experimentar o projeto antes da obra." },
              { n: "04", t: "EVF — Viabilidade Financeira", d: "Orçamento por quantitativos reais — decisão consciente de escopo.", optional: true },
              { n: "05", t: "Projeto Executivo de Interiores", d: "Marcenaria, iluminação, revestimentos e pranchas executivas." },
              { n: "06", t: "Visitas em Lojas", d: "Curadoria conjunta de mobiliário, acabamentos, arte e têxteis.", optional: true },
              { n: "07", t: "Acompanhamento de obra", d: "Visitas técnicas, ajustes finos e curadoria de fornecedores.", optional: true },
            ]}
          />
        </div>
      </section>

      {/* ============================================================
          07 · ESCOPO TÉCNICO
          ============================================================ */}
      <section id="escopo" className="relative px-6 md:px-16 lg:px-24 py-32">
        <div className="max-w-7xl mx-auto grid grid-cols-12 gap-8">
          <div className="col-span-12 lg:col-span-5 lg:sticky lg:top-24 self-start">
            <span className="number-marker block mb-3">07</span>
            <Editable id="escopo.eyebrow" className="eyebrow mb-8 inline-block">
              Escopo técnico · O que entregamos
            </Editable>

            <Editable
              as="h2"
              id="escopo.title"
              multiline
              className="font-display text-5xl md:text-6xl leading-[1.0] mb-10 text-balance"
            >
              Duas disciplinas. <em className="text-primary not-italic">Um só método.</em>
            </Editable>

            <Editable
              id="escopo.body"
              multiline
              as="p"
              className="font-display text-lg leading-relaxed text-foreground/75 mb-10"
            >
              Quatro cadernos coordenados pela NL — base documental para uma obra sem improviso, com cada componente
              identificado, localizado e quantificado. Mesma estrutura para Arquitetônico e Interiores.
            </Editable>

            <div className="relative aspect-[4/5] overflow-hidden hidden lg:block">
              <img
                src={scopeMaterials}
                alt="Mesa de trabalho com amostras de materiais e croquis"
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
                width={1400}
                height={1750}
              />
            </div>
          </div>

          <div className="col-span-12 lg:col-span-7">
            <ScopeTabs />
          </div>
        </div>
      </section>

      {/* ============================================================
          08 · NOSSOS PILARES
          ============================================================ */}
      <section id="pilares" className="relative px-6 md:px-16 lg:px-24 py-32 bg-foreground text-background overflow-hidden">
        {/* Texturas / marcas d'água editoriais */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.04]">
          <div className="absolute top-20 -right-10 font-display italic text-[28rem] leading-none text-background select-none">
            NL
          </div>
        </div>

        <div className="relative max-w-7xl mx-auto">
          {/* Cabeçalho — diferente: sem barra inferior, com indicador vertical */}
          <div className="grid grid-cols-12 gap-6 mb-24">
            <div className="col-span-12 md:col-span-3 flex md:flex-col gap-4 md:gap-3 md:border-l border-background/20 md:pl-6">
              <span className="number-marker text-background/60">08</span>
              <Editable id="pilares.eyebrow" className="eyebrow text-background/60">
                Manifesto
              </Editable>
            </div>
            <div className="col-span-12 md:col-span-9">
              <Editable
                id="pilares.tag"
                className="font-mono text-[10px] uppercase tracking-[0.3em] text-primary-glow mb-8 block"
              >
                — O que nos diferencia
              </Editable>
              <Editable
                as="h2"
                id="pilares.title"
                multiline
                className="font-display text-5xl md:text-7xl lg:text-[5.5rem] leading-[0.95] text-balance"
              >
                Quatro <em className="text-primary-glow not-italic">decisões</em>
                <br />
                que sustentam
                <br />
                cada projeto.
              </Editable>
            </div>
          </div>

          {/* Pilares — stack vertical, layout assimétrico, cada um como um capítulo */}
          <div className="space-y-px">
            {[
              {
                id: "decisao",
                num: "I",
                kicker: "Decisão · Antes da Obra",
                title: "Decidir no papel é barato.",
                body: "Cada detalhe é resolvido antes da primeira escavação. O que chega à obra já está validado — sem espaço para improviso, sem custo de retrabalho.",
                quote: "Decidir no canteiro é caro.",
              },
              {
                id: "compatibilizacao",
                num: "II",
                kicker: "Compatibilização · Total",
                title: "O erro aparece no computador.",
                body: "Estrutura, hidráulica, elétrica e arquitetura são revisadas em conjunto. Colisões técnicas são eliminadas no projeto — antes de virarem custo na obra.",
                quote: "Mostramos o erro no computador para não errar no cimento.",
              },
              {
                id: "processo",
                num: "III",
                kicker: "Processo · Conduzido",
                title: "O cliente nunca se sente perdido.",
                body: "Cada etapa tem objetivo claro, entregável definido e critério de avanço. A NL conduz — o cliente aprova com segurança, sem precisar entender de obra.",
                quote: "Você não precisa entender de obra. Precisa entender o que está aprovando.",
              },
              {
                id: "resultado",
                num: "IV",
                kicker: "Resultado · Previsível",
                title: "O resultado é consequência do método.",
                body: "Obra sem improviso, sem surpresa de custo, sem retrabalho. A estética é a última camada — o que garante o resultado é a decisão tomada antes de tudo começar.",
                quote: "A NL não projeta para impressionar. Projeta para funcionar.",
              },
            ].map((p, idx) => (
              <article
                key={p.id}
                className="group relative grid grid-cols-12 gap-6 py-12 md:py-16 border-t border-background/15 hover:border-primary-glow/40 transition-colors duration-500"
              >
                {/* Numeral romano gigante */}
                <div className="col-span-12 md:col-span-2 flex md:block">
                  <span className="font-display italic text-7xl md:text-8xl lg:text-9xl leading-none text-primary-glow/80 group-hover:text-primary-glow transition-colors duration-500">
                    {p.num}
                  </span>
                </div>

                {/* Conteúdo principal */}
                <div className="col-span-12 md:col-span-6 flex flex-col justify-center">
                  <Editable
                    id={`pilares.${p.id}.kicker`}
                    className="font-mono text-[10px] uppercase tracking-[0.3em] text-primary-glow mb-4"
                  >
                    {p.kicker}
                  </Editable>
                  <Editable
                    as="h3"
                    id={`pilares.${p.id}.title`}
                    multiline
                    className="font-display text-3xl md:text-4xl lg:text-5xl leading-[1.05] mb-5 text-background text-balance"
                  >
                    {p.title}
                  </Editable>
                  <Editable
                    as="p"
                    id={`pilares.${p.id}.body`}
                    multiline
                    className="text-background/70 leading-relaxed max-w-xl"
                  >
                    {p.body}
                  </Editable>
                </div>

                {/* Citação — bloco lateral destacado */}
                <div className="col-span-12 md:col-span-4 flex items-center md:border-l border-background/15 md:pl-8">
                  <div className="relative">
                    <span className="absolute -top-6 -left-2 font-display text-6xl text-primary-glow/30 leading-none select-none">
                      “
                    </span>
                    <Editable
                      as="p"
                      id={`pilares.${p.id}.quote`}
                      multiline
                      className="relative font-display italic text-xl md:text-2xl text-background leading-snug"
                    >
                      {p.quote}
                    </Editable>
                    <Editable
                      id={`pilares.${p.id}.attr`}
                      className="block mt-4 font-mono text-[10px] uppercase tracking-[0.3em] text-primary-glow/70"
                    >
                      — NL Arquitetos
                    </Editable>
                  </div>
                </div>

                {/* Indicador de progresso lateral */}
                <span className="hidden md:block absolute right-0 top-12 font-mono text-[10px] tracking-[0.3em] text-background/30">
                  0{idx + 1} / 04
                </span>
              </article>
            ))}
          </div>

          {/* Fechamento — assinatura editorial */}
          <div className="mt-24 pt-12 border-t border-background/15 grid grid-cols-12 gap-6">
            <div className="col-span-12 md:col-span-8 md:col-start-3 text-center">
              <Editable
                as="p"
                id="pilares.closing"
                className="font-display italic text-3xl md:text-5xl text-background leading-tight text-balance"
              >
                A arquitetura como <em className="text-primary-glow not-italic">decisão</em>.
              </Editable>
              <Editable
                id="pilares.signature"
                className="block mt-6 font-mono text-[10px] uppercase tracking-[0.4em] text-primary-glow"
              >
                Esta é a NL.
              </Editable>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          08.5 · CRONOGRAMA ESTIMADO
          ============================================================ */}
      <section id="cronograma" className="relative px-6 md:px-16 lg:px-24 py-32">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-baseline justify-between mb-16 border-b border-border/60 pb-6">
            <div className="flex items-baseline gap-6">
              <span className="number-marker">08.5</span>
              <Editable id="crono.eyebrow" className="eyebrow">
                Cronograma · Linha do tempo estimada
              </Editable>
            </div>
            <Editable
              id="crono.tag"
              className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground hidden md:block"
            >
              Arquitetura + Interiores · 8 a 10 meses
            </Editable>
          </div>

          <Editable
            as="h2"
            id="crono.title"
            multiline
            className="font-display text-5xl md:text-7xl leading-[1.0] mb-8 max-w-4xl text-balance"
          >
            Um ritmo <em className="text-primary not-italic">previsível</em>,<br />
            de ponta a ponta.
          </Editable>

          <Editable
            id="crono.intro"
            multiline
            as="p"
            className="font-display text-lg text-foreground/70 max-w-2xl mb-20"
          >
            Cada fase tem janela própria, ponto de aprovação e entregável. Você sabe, desde o início, quando cada
            decisão será tomada.
          </Editable>

          <div className="relative">
            <div className="absolute left-0 right-0 top-[34px] h-px bg-border hidden md:block" />
            <div className="absolute left-0 top-[34px] h-px bg-primary hidden md:block" style={{ width: "100%" }} />

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-x-4 gap-y-10">
              {(
                [
                  { m: "Mês 01", t: "Briefing & Levantamento", trail: "ARQ" },
                  { m: "Mês 02", t: "Estudo Preliminar + 3D", trail: "ARQ" },
                  { m: "Mês 03", t: "Anteprojeto", trail: "ARQ" },
                  { m: "Mês 04", t: "Compatibilização", trail: "ARQ" },
                  { m: "Mês 05–06", t: "Projeto Executivo", trail: "ARQ" },
                  { m: "Mês 07", t: "Conceito de Interiores", trail: "INT" },
                  { m: "Mês 08–09", t: "Layout, Marcenaria & Iluminação", trail: "INT" },
                  { m: "Mês 10", t: "Detalhamento & Entrega", trail: "INT" },
                ] as const
              ).map((p, i) => (
                <TimelineNode key={i} idx={i} {...p} />
              ))}
            </div>
          </div>

          <Editable
            id="crono.note"
            multiline
            as="p"
            className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground mt-16 max-w-3xl leading-relaxed"
          >
            Cronograma estimado · Pode variar conforme escopo, aprovações de terceiros (prefeitura, condomínio) e
            disponibilidade do cliente nas etapas de aprovação.
          </Editable>
        </div>
      </section>

      {/* ============================================================
          09 · BENEFÍCIOS
          ============================================================ */}
      <section id="beneficios" className="relative px-6 md:px-16 lg:px-24 py-32">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-12 gap-8 mb-20">
            <div className="col-span-12 md:col-span-3">
              <span className="number-marker block mb-2">09</span>
              <Editable id="beneficios.eyebrow" className="eyebrow">
                Benefícios
              </Editable>
            </div>
            <div className="col-span-12 md:col-span-9">
              <Editable
                as="h2"
                id="beneficios.title"
                multiline
                className="font-display text-5xl md:text-6xl lg:text-7xl leading-[1.0] text-balance"
              >
                O que você <em className="text-primary not-italic">recebe</em> além das pranchas.
              </Editable>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
            {[
              {
                t: "Segurança na obra",
                d: "Projeto compatibilizado evita decisões improvisadas no canteiro — e os custos imprevistos que vêm com elas.",
              },
              {
                t: "Redução de erros",
                d: "Cada disciplina é validada em conjunto. O que está na prancha é o que vai para a obra.",
              },
              {
                t: "Aproveitamento do terreno",
                d: "Estudo de implantação que extrai o melhor da topografia, insolação e ventos predominantes.",
              },
              {
                t: "Valorização do imóvel",
                d: "Arquitetura assinada e bem documentada agrega valor patrimonial mensurável na revenda.",
              },
              {
                t: "Conforto a longo prazo",
                d: "Decisões pensadas para 10, 20 anos: pé-direito, fluxos, iluminação natural e materiais que envelhecem bem.",
              },
              {
                t: "Previsibilidade financeira",
                d: "Quantitativos precisos permitem orçamentos firmes — e protegem você de aditivos surpresa.",
              },
            ].map((b, i) => (
              <BenefitCard key={i} {...b} idx={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          10 · INVESTIMENTO
          ============================================================ */}
      <section id="investimento" className="relative px-6 md:px-16 lg:px-24 py-32 bg-surface/40">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <span className="number-marker block mb-4">10 · Investimento</span>
            <div className="gold-line w-16 mx-auto mb-10" />
            <Editable
              as="h2"
              id="investimento.title"
              multiline
              className="font-display text-5xl md:text-7xl leading-[1.0] mb-8 text-balance"
            >
              Dois pacotes. <em className="text-primary not-italic">Um só método.</em>
            </Editable>
            <Editable
              id="investimento.body"
              multiline
              as="p"
              className="font-display italic text-lg md:text-xl text-foreground/70"
            >
              Cada R$ 1 investido em projeto economiza, em média, R$ 3 em obra e adiciona até 25% ao valor de revenda do
              imóvel. Escolha a profundidade do escopo — o rigor é o mesmo.
            </Editable>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 max-w-5xl mx-auto">
            <ValueAnchor id="va1" label="Sem projeto" value="100%" sub="Custo da obra · referência" muted />
            <ValueAnchor id="va2" label="Projeto comum" value="−12%" sub="Economia média de mercado" muted />
            <ValueAnchor id="va3" label="Método NL" value="−27%" sub="Economia comprovada em obra" highlight />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <PackageCard
              id="basic"
              tier="Pacote Essencial"
              tagline="Arquitetura essencial · pronto para construir"
              price="R$ 00.000"
              priceNote="A partir de · 8x sem juros"
              features={[
                { included: true, text: "Levantamento, briefing e estudo do terreno" },
                { included: true, text: "Estudo Preliminar com 1 render conceitual" },
                { included: true, text: "Anteprojeto arquitetônico (plantas, cortes, fachadas)" },
                { included: true, text: "Projeto Executivo arquitetônico" },
                { included: true, text: "Compatibilização básica · até 3 disciplinas" },
                { included: true, text: "2 rodadas de revisão por etapa" },
                { included: false, text: "Projeto de Interiores" },
                { included: false, text: "Projeto luminotécnico cênico" },
                { included: false, text: "Curadoria de mobiliário e arte" },
                { included: false, text: "Acompanhamento de obra mensal" },
              ]}
              cta="Quero o pacote Essencial"
              ctaHref="https://wa.me/5512996235559?text=Ol%C3%A1%2C%20quero%20saber%20mais%20sobre%20o%20Pacote%20Essencial."
            />

            <PackageCard
              id="premium"
              tier="Pacote Completo"
              tagline="Arquitetura + Interiores · experiência completa"
              price="R$ 00.000"
              priceNote="A partir de · 10x sem juros"
              features={[
                { included: true, text: "Tudo do Pacote Essencial" },
                { included: true, text: "Compatibilização total · 6 disciplinas" },
                { included: true, text: "Renders fotorrealistas ilimitados" },
                { included: true, text: "Projeto completo de Interiores" },
                { included: true, text: "Marcenaria sob medida detalhada" },
                { included: true, text: "Projeto luminotécnico cênico integrado" },
                { included: true, text: "Curadoria de mobiliário, arte e revestimentos" },
                { included: true, text: "Acompanhamento de obra (visitas mensais)" },
                { included: true, text: "Atendimento direto com os sócios" },
                { included: true, text: "Revisões ilimitadas por etapa" },
              ]}
              cta="Quero o pacote Completo"
              ctaHref="https://wa.me/5512996235559?text=Ol%C3%A1%2C%20quero%20saber%20mais%20sobre%20o%20Pacote%20Completo."
              recommended
            />
          </div>

          <ComparisonTable />

          <div className="mt-12 border border-border/60 bg-background max-w-5xl mx-auto">
            <div className="px-8 py-6 border-b border-border/60">
              <Editable
                id="invest.pay.label"
                className="font-mono text-[10px] uppercase tracking-[0.3em] text-primary/80 block"
              >
                Condições de pagamento · Aplicáveis aos dois pacotes
              </Editable>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-border/60">
              <PaymentTier id="pay1" label="Entrada" value="30%" sub="Na assinatura do contrato" />
              <PaymentTier id="pay2" label="Anteprojeto" value="40%" sub="Na aprovação do anteprojeto" />
              <PaymentTier id="pay3" label="Executivo" value="30%" sub="Na entrega do executivo" />
            </div>
          </div>

          <div className="mt-10 border border-primary/30 bg-primary/[0.03] px-8 py-8 flex flex-col md:flex-row gap-6 items-start max-w-5xl mx-auto">
            <span className="font-display text-4xl text-primary leading-none shrink-0">✦</span>
            <div>
              <Editable
                id="invest.guarantee.label"
                className="font-mono text-[10px] uppercase tracking-[0.3em] text-primary/80 block mb-2"
              >
                Garantia NL
              </Editable>
              <Editable
                id="invest.guarantee.body"
                multiline
                as="p"
                className="font-display text-lg text-foreground/85 leading-relaxed"
              >
                Se o estudo preliminar não capturar a essência do que você imaginou, refazemos sem custo adicional — até
                estar certo.
              </Editable>
            </div>
          </div>

          <Editable
            id="invest.note"
            multiline
            as="p"
            className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground text-center mt-8 max-w-2xl mx-auto leading-relaxed"
          >
            Valores estimados · Ajustáveis conforme metragem e complexidade do projeto · Validade 30 dias
          </Editable>
        </div>
      </section>

      {/* ============================================================
          11 · DIFERENCIAIS
          ============================================================ */}
      <section id="diferenciais" className="relative px-6 md:px-16 lg:px-24 py-32">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-12 gap-8 mb-20 items-end">
            <div className="col-span-12 md:col-span-7">
              <span className="number-marker block mb-3">11</span>
              <Editable id="diferenciais.eyebrow" className="eyebrow mb-8 inline-block">
                Diferenciais · O que nos separa
              </Editable>
              <Editable
                as="h2"
                id="diferenciais.title"
                multiline
                className="font-display text-5xl md:text-6xl lg:text-7xl leading-[1.0] text-balance"
              >
                Quatro razões para <em className="text-primary not-italic">escolher</em> a NL.
              </Editable>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-16">
            {[
              {
                n: "01",
                t: "Atendimento direto com os sócios",
                d: "Você fala com Leandro e Neandro — não com um assistente. Cada decisão passa pelos arquitetos titulares, do briefing à entrega.",
              },
              {
                n: "02",
                t: "Projeto personalizado, não catálogo",
                d: "Cada casa é desenhada a partir do seu terreno, da sua família e do seu modo de viver. Nenhum projeto da NL se repete.",
              },
              {
                n: "03",
                t: "Visualização antes da obra",
                d: "Renders em alta fidelidade mostram a casa antes de qualquer escavação. Você decide com clareza, não com suposições.",
              },
              {
                n: "04",
                t: "Decisão técnica que protege o patrimônio",
                d: "Arquitetura pensada como ativo de longo prazo. Cada decisão de projeto aumenta o valor do imóvel e reduz o custo da obra.",
              },
            ].map((d, i) => (
              <DifferentialItem key={i} {...d} />
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          12 · PROVA SOCIAL
          ============================================================ */}
      <section id="prova" className="relative">
        <div className="grid grid-cols-12 min-h-screen">
          <div className="col-span-12 lg:col-span-6 relative min-h-[60vh] lg:min-h-screen">
            <img
              src={beforeAfter}
              alt="Resultado de projeto arquitetônico NL"
              className="absolute inset-0 w-full h-full object-cover"
              loading="lazy"
              width={1920}
              height={1080}
            />
          </div>

          <div className="col-span-12 lg:col-span-6 px-8 md:px-16 py-20 lg:py-32 flex flex-col justify-center">
            <div className="max-w-md">
              <span className="number-marker block mb-4">12 · Prova social</span>
              <Editable
                as="h2"
                id="prova.title"
                multiline
                className="font-display text-5xl md:text-6xl leading-[0.95] mb-12 text-balance"
              >
                A confiança de quem <em className="text-primary not-italic">já viveu</em> o processo.
              </Editable>

              <div className="gold-line w-16 mb-10" />

              <Editable
                id="prova.quote"
                multiline
                as="blockquote"
                className="font-display italic text-2xl md:text-3xl leading-snug text-foreground/85 mb-8"
              >
                "Eles não desenharam uma casa para nós — desenharam a forma como queríamos viver. Cada detalhe fez
                sentido na obra, e ainda faz sentido todos os dias."
              </Editable>

              <div className="flex items-center gap-4">
                <div className="w-12 h-px bg-primary/60" />
                <div>
                  <Editable id="prova.author" className="font-display text-foreground block">
                    Família Costas
                  </Editable>
                  <Editable
                    id="prova.location"
                    className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground block"
                  >
                    Residência · São José dos Campos
                  </Editable>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          13 · PRÓXIMOS PASSOS
          ============================================================ */}
      <section id="proximos" className="relative px-6 md:px-16 lg:px-24 py-32 bg-surface/40">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-12 gap-8 mb-20">
            <div className="col-span-12 md:col-span-3">
              <span className="number-marker block mb-2">13</span>
              <Editable id="proximos.eyebrow" className="eyebrow">
                Próximos passos
              </Editable>
            </div>
            <div className="col-span-12 md:col-span-9">
              <Editable
                as="h2"
                id="proximos.title"
                multiline
                className="font-display text-5xl md:text-6xl leading-[1.0] mb-8 text-balance"
              >
                Quatro passos. <em className="text-primary not-italic">Sete dias</em>
                <br />
                até o primeiro traço.
              </Editable>

              <Editable
                id="proximos.intro"
                multiline
                as="p"
                className="font-display text-lg text-foreground/70 mb-16 max-w-2xl"
              >
                A partir do momento em que você aprova a proposta, o processo começa. Sem espera. Sem fila.
              </Editable>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
                {[
                  {
                    n: "01",
                    t: "Aprovação da proposta",
                    d: "Você responde com um sim — por mensagem, e-mail ou em pessoa.",
                  },
                  {
                    n: "02",
                    t: "Assinatura do contrato",
                    d: "Enviamos o contrato em até 24h. Assinatura digital, sem deslocamento.",
                  },
                  {
                    n: "03",
                    t: "Reunião de imersão",
                    d: "Encontro de até 3h, agendado em até 5 dias. Aqui ouvimos tudo.",
                  },
                  { n: "04", t: "Início imediato", d: "Em até 7 dias após a imersão, o estudo preliminar começa." },
                ].map((p, i) => (
                  <NextStep key={i} {...p} />
                ))}
              </div>

              <div className="border-t border-primary/40 pt-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
                <Editable
                  id="proximos.cta.text"
                  className="font-display italic text-xl md:text-2xl text-foreground/85 max-w-md"
                >
                  Pronto para dar início ao seu projeto?
                </Editable>
                <a
                  href="https://wa.me/5512996235559?text=Ol%C3%A1%2C%20li%20a%20Carta%20Proposta%20e%20gostaria%20de%20conversar%20sobre%20meu%20projeto."
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-4 px-8 py-4 bg-primary text-primary-foreground font-mono text-xs uppercase tracking-[0.3em] hover:bg-primary-glow transition-colors duration-500 self-start md:self-auto"
                >
                  Aprovar e iniciar conversa
                  <span className="transition-transform duration-500 group-hover:translate-x-1">→</span>
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-border pt-16">
            <div className="grid grid-cols-12 gap-8">
              <div className="col-span-12 md:col-span-3">
                <Editable id="cond.eyebrow" className="eyebrow">
                  Condições gerais
                </Editable>
              </div>
              <div className="col-span-12 md:col-span-9 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
                <Condition
                  id="c1"
                  label="Prazo total"
                  value="Até 14 semanas para escopo integral, divididas em entregas parciais aprovadas."
                />
                <Condition
                  id="c2"
                  label="Revisões"
                  value="Duas rodadas de revisão inclusas em cada etapa. Adicionais cobrados por hora técnica."
                />
                <Condition
                  id="c3"
                  label="Forma de pagamento"
                  value="PIX, transferência ou cartão. Boleto sob demanda."
                />
                <Condition
                  id="c4"
                  label="Validade da proposta"
                  value="30 dias corridos a partir da data desta carta. Após esse prazo, valores podem ser revisados."
                />
                <Condition
                  id="c5"
                  label="Acompanhamento de obra"
                  value="Não incluso no escopo padrão. Pode ser contratado à parte por visita ou pacote mensal."
                />
                <Condition
                  id="c6"
                  label="Direitos autorais"
                  value="O projeto é de autoria intelectual da NL Arquitetos, conforme Lei nº 9.610/98."
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          14 · ENCERRAMENTO
          ============================================================ */}
      <section
        id="encerramento"
        className="relative min-h-screen flex items-center px-6 md:px-16 lg:px-24 py-32 bg-background"
      >
        <div className="absolute inset-0 vignette opacity-60" />

        <div className="relative max-w-5xl mx-auto w-full">
          <span className="number-marker block mb-6 text-center">14 · Encerramento</span>

          <div className="gold-line w-24 mx-auto mb-12" />

          <Editable
            as="h2"
            id="encerramento.title"
            multiline
            className="font-display text-5xl md:text-7xl lg:text-8xl text-center leading-[1.0] mb-12 text-balance"
          >
            A casa que você imagina
            <br />
            <em className="text-primary not-italic">já existe.</em> Falta começar.
          </Editable>

          <Editable
            id="encerramento.body"
            multiline
            as="p"
            className="font-display italic text-xl md:text-2xl text-center text-foreground/70 max-w-2xl mx-auto mb-12"
          >
            Cada mês de adiamento é um mês a menos vivendo nela. O próximo passo é uma conversa de 30 minutos — sem
            compromisso.
          </Editable>

          <div className="flex flex-col items-center gap-6 mb-20">
            <a
              href="https://wa.me/5512996235559?text=Ol%C3%A1%2C%20li%20a%20Carta%20Proposta%20e%20gostaria%20de%20agendar%20a%20conversa%20inicial."
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-4 px-10 py-5 bg-primary text-primary-foreground font-mono text-xs uppercase tracking-[0.3em] hover:bg-primary-glow transition-colors duration-500"
            >
              Agendar conversa inicial
              <span className="transition-transform duration-500 group-hover:translate-x-1">→</span>
            </a>
            <Editable
              id="encerramento.cta.sub"
              className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground"
            >
              Resposta em até 4 horas úteis · Sem compromisso
            </Editable>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-border pt-12 max-w-3xl mx-auto">
            <Contact id="ct1" label="WhatsApp" value="(12) 99623-5559" />
            <Contact id="ct2" label="E-mail" value="contato.nlarquitetos@gmail.com" />
            <Contact id="ct3" label="Instagram" value="@nlarquitetos" />
          </div>

          <div className="mt-24 flex items-center justify-between text-muted-foreground">
            <span className="font-display italic text-foreground/60">"A arquitetura como decisão."</span>
            <span className="font-mono text-[10px] uppercase tracking-[0.3em]">NL Arquitetos · 2025</span>
          </div>
        </div>
      </section>
    </main>
  );
};

/* ============================================================
   Subcomponents
   ============================================================ */

const Stat = ({ number, label, id }: { number: string; label: string; id: string }) => (
  <div>
    <Editable id={`stat.${id}.num`} className="font-display text-3xl md:text-4xl text-primary block mb-1">
      {number}
    </Editable>
    <Editable
      id={`stat.${id}.lbl`}
      className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground leading-tight block"
    >
      {label}
    </Editable>
  </div>
);

const PartnerCard = ({
  id,
  name,
  role,
  cau,
  image,
}: {
  id: string;
  name: string;
  role: string;
  cau: string;
  image?: string;
}) => (
  <div className="group">
    {image && (
      <div className="relative aspect-[3/4] overflow-hidden bg-surface mb-4">
        <img
          src={image}
          alt={`${name} · NL Arquitetos`}
          className="absolute inset-0 w-full h-full object-cover grayscale-[15%] transition-all duration-700 group-hover:grayscale-0 group-hover:scale-[1.03]"
          loading="lazy"
        />
      </div>
    )}
    <div className="flex items-baseline gap-2 mb-1">
      <span className="font-mono text-xs text-primary/70">→</span>
      <Editable as="h3" id={`p.${id}.name`} className="font-display text-xl md:text-2xl text-foreground leading-tight">
        {name}
      </Editable>
    </div>
    <div className="pl-5 space-y-0.5">
      <Editable
        id={`p.${id}.role`}
        className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground block"
      >
        {role}
      </Editable>
      <Editable id={`p.${id}.cau`} className="font-mono text-[9px] tracking-[0.2em] text-primary/60 block">
        {cau}
      </Editable>
    </div>
  </div>
);

const CaseStat = ({ id, value, label }: { id: string; value: string; label: string }) => (
  <div>
    <Editable id={`${id}.v`} className="font-display text-3xl text-primary block mb-1">
      {value}
    </Editable>
    <Editable
      id={`${id}.l`}
      className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground leading-tight block"
    >
      {label}
    </Editable>
  </div>
);

const Contact = ({ id, label, value }: { id: string; label: string; value: string }) => (
  <div>
    <Editable id={`${id}.lbl`} className="font-mono text-[10px] uppercase tracking-[0.3em] text-primary/70 block mb-2">
      {label}
    </Editable>
    <Editable id={`${id}.val`} className="font-display text-lg text-foreground/90 block">
      {value}
    </Editable>
  </div>
);

const ScopeRow = ({ idx, n, t, d }: { idx: number | string; n: string; t: string; d: string }) => (
  <div className="group border-t border-border/60 last:border-b py-8 grid grid-cols-12 gap-6 items-baseline transition-colors hover:bg-surface/40 px-4 -mx-4">
    <span className="col-span-2 md:col-span-1 font-mono text-xs text-primary/70 tracking-[0.2em]">{n}</span>
    <Editable
      as="h3"
      id={`scope.${idx}.t`}
      className="col-span-10 md:col-span-4 font-display text-2xl md:text-3xl text-foreground"
    >
      {t}
    </Editable>
    <Editable
      id={`scope.${idx}.d`}
      multiline
      as="p"
      className="col-span-12 md:col-span-7 font-display text-foreground/70 leading-relaxed"
    >
      {d}
    </Editable>
  </div>
);

const BenefitCard = ({ t, d, idx }: { t: string; d: string; idx: number }) => (
  <div className="bg-background p-8 md:p-10 group hover:bg-surface/60 transition-colors">
    <div className="gold-line w-8 mb-6 group-hover:w-16 transition-all duration-700" />
    <Editable
      as="h3"
      id={`benefit.${idx}.t`}
      className="font-display text-2xl md:text-3xl text-foreground mb-4 leading-tight"
    >
      {t}
    </Editable>
    <Editable id={`benefit.${idx}.d`} multiline as="p" className="font-display text-foreground/70 leading-relaxed">
      {d}
    </Editable>
  </div>
);

const PaymentTier = ({ id, label, value, sub }: { id: string; label: string; value: string; sub: string }) => (
  <div className="px-8 py-8 text-center">
    <Editable id={`${id}.lbl`} className="font-mono text-[10px] uppercase tracking-[0.3em] text-primary/70 block mb-3">
      {label}
    </Editable>
    <Editable id={`${id}.val`} className="font-display text-4xl md:text-5xl text-foreground block mb-2">
      {value}
    </Editable>
    <Editable id={`${id}.sub`} className="font-display italic text-sm text-foreground/60 block">
      {sub}
    </Editable>
  </div>
);

const DifferentialItem = ({ n, t, d }: { n: string; t: string; d: string }) => (
  <div className="group">
    <div className="flex items-baseline gap-6 mb-4">
      <span className="font-mono text-xs text-primary/70 tracking-[0.2em]">{n}</span>
      <span className="h-px flex-1 bg-border group-hover:bg-primary/60 transition-colors duration-700" />
    </div>
    <Editable as="h3" id={`diff.${n}.t`} className="font-display text-3xl md:text-4xl text-foreground mb-4">
      {t}
    </Editable>
    <Editable id={`diff.${n}.d`} multiline as="p" className="font-display text-foreground/70 leading-relaxed max-w-md">
      {d}
    </Editable>
  </div>
);

const NextStep = ({ n, t, d }: { n: string; t: string; d: string }) => (
  <div className="flex gap-6 items-baseline">
    <span className="font-display text-4xl text-primary/80 leading-none shrink-0">{n}</span>
    <div>
      <Editable as="h3" id={`next.${n}.t`} className="font-display text-2xl text-foreground mb-2">
        {t}
      </Editable>
      <Editable id={`next.${n}.d`} multiline as="p" className="font-display text-foreground/70 leading-relaxed">
        {d}
      </Editable>
    </div>
  </div>
);

const Condition = ({ id, label, value }: { id: string; label: string; value: string }) => (
  <div>
    <Editable id={`${id}.lbl`} className="font-mono text-[10px] uppercase tracking-[0.3em] text-primary/70 block mb-2">
      {label}
    </Editable>
    <Editable id={`${id}.val`} multiline as="p" className="font-display text-foreground/80 leading-relaxed">
      {value}
    </Editable>
  </div>
);

const ValueAnchor = ({
  id,
  label,
  value,
  sub,
  highlight,
  muted,
}: {
  id: string;
  label: string;
  value: string;
  sub: string;
  highlight?: boolean;
  muted?: boolean;
}) => (
  <div
    className={`px-6 py-8 border ${highlight ? "border-primary bg-primary/[0.04]" : "border-border/60 bg-background/40"}`}
  >
    <Editable
      id={`${id}.lbl`}
      className={`font-mono text-[10px] uppercase tracking-[0.3em] block mb-3 ${highlight ? "text-primary" : "text-muted-foreground"}`}
    >
      {label}
    </Editable>
    <Editable
      id={`${id}.val`}
      className={`font-display text-4xl md:text-5xl block leading-none mb-2 ${highlight ? "text-primary" : muted ? "text-foreground/40" : "text-foreground"}`}
    >
      {value}
    </Editable>
    <Editable id={`${id}.sub`} className="font-display italic text-sm text-foreground/55 block">
      {sub}
    </Editable>
  </div>
);

const PhaseTimeline = ({
  trackId,
  number,
  title,
  duration,
  phases,
}: {
  trackId: string;
  number: string;
  title: string;
  duration: string;
  phases: { n: string; t: string; d: string; optional?: boolean }[];
}) => (
  <div className="group/timeline">
    {/* Cabeçalho da trilha */}
    <div className="flex items-end justify-between mb-10 border-b border-primary/30 pb-5">
      <div className="flex items-baseline gap-5">
        <Editable
          id={`etapas.${trackId}.num`}
          className="font-mono text-[10px] uppercase tracking-[0.3em] text-primary"
        >
          {`Trilha ${number}`}
        </Editable>
        <Editable
          as="h3"
          id={`etapas.${trackId}.title`}
          className="font-display text-3xl md:text-4xl text-foreground leading-none"
        >
          {title}
        </Editable>
      </div>
      <Editable
        id={`etapas.${trackId}.dur`}
        className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground hidden md:block"
      >
        {duration}
      </Editable>
    </div>

    {/* Timeline horizontal */}
    <div className="relative">
      {/* Linha base contínua atrás dos marcadores */}
      <div className="absolute left-0 right-0 top-[26px] h-px bg-border" aria-hidden />
      {/* Linha bronze sobreposta — progresso visual */}
      <div
        className="absolute left-0 top-[26px] h-px bg-primary/40 transition-all duration-700 group-hover/timeline:bg-primary"
        style={{ right: `${100 / phases.length / 2}%` }}
        aria-hidden
      />

      <ol className={`relative grid gap-6`} style={{ gridTemplateColumns: `repeat(${phases.length}, minmax(0, 1fr))` }}>
        {phases.map((p, i) => (
          <li key={i} className="relative flex flex-col items-start group/step">
            {/* Marcador circular */}
            <div
              className={`relative z-10 flex items-center justify-center w-[52px] h-[52px] rounded-full bg-background mb-5 transition-all duration-500 group-hover/step:scale-110 ${
                p.optional
                  ? "border border-dashed border-primary/40 group-hover/step:border-primary group-hover/step:bg-background"
                  : "border border-primary/40 group-hover/step:bg-primary group-hover/step:border-primary"
              }`}
            >
              <Editable
                id={`etapas.${trackId}.${i}.n`}
                className={`font-mono text-[11px] tracking-[0.15em] text-primary transition-colors ${
                  p.optional ? "" : "group-hover/step:text-primary-foreground"
                }`}
              >
                {p.n}
              </Editable>
            </div>

            {/* Tick decorativo */}
            <div className="absolute left-[26px] top-[52px] w-px h-3 bg-primary/30 -translate-x-1/2" aria-hidden />

            {p.optional && (
              <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-primary/70 mb-1">
                Opcional
              </span>
            )}

            <Editable
              as="h4"
              id={`etapas.${trackId}.${i}.t`}
              className="font-display text-base md:text-lg text-foreground leading-snug mb-2 mt-2 pr-2"
            >
              {p.t}
            </Editable>
            <Editable
              id={`etapas.${trackId}.${i}.d`}
              multiline
              as="p"
              className="font-display italic text-[13px] text-foreground/60 leading-relaxed pr-3"
            >
              {p.d}
            </Editable>
          </li>
        ))}
      </ol>
    </div>
  </div>
);

const PhaseCard = ({
  idx,
  n,
  t,
  d,
  optional,
}: {
  idx: string;
  n: string;
  t: string;
  d: string;
  optional?: boolean;
}) => (
  <div className="bg-background p-8 group hover:bg-surface/60 transition-colors">
    <div className="flex items-baseline justify-between mb-6">
      <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-primary/70">{n}</span>
      {optional && (
        <Editable
          id={`phase.${idx}.opt`}
          className="font-mono text-[9px] uppercase tracking-[0.25em] text-muted-foreground/70 border border-border/60 px-2 py-0.5"
        >
          Opcional
        </Editable>
      )}
    </div>
    <Editable
      as="h3"
      id={`phase.${idx}.t`}
      className="font-display text-xl md:text-2xl text-foreground mb-3 leading-tight"
    >
      {t}
    </Editable>
    <Editable
      id={`phase.${idx}.d`}
      multiline
      as="p"
      className="font-display italic text-sm text-foreground/65 leading-relaxed"
    >
      {d}
    </Editable>
  </div>
);

type ScopeBloco = {
  id: string;
  num: string;
  title: string;
  note?: string;
  description?: string;
  items?: string[];
  wide?: boolean;
};

const SCOPE_ARQ: ScopeBloco[] = [
  {
    id: "caderno-geral",
    num: "I",
    title: "Caderno Geral",
    items: [
      "Prancha de índice",
      "Planta de situação, locação e cobertura",
      "Planta de layout",
      "Plantas construtivas",
      "Planta de paginação de piso",
      "Planta de forro",
      "Projeto luminotécnico",
    ],
  },
  {
    id: "mapas-instalacoes",
    num: "II",
    title: "Mapas de Instalações",
    note: "em parceria com engenheiros especializados",
    items: [
      "Instalações elétricas",
      "Instalações hidráulicas",
      "Ar-condicionado",
      "Pontos de gás",
      "Revestimentos",
    ],
  },
  {
    id: "detalhes-construtivos",
    num: "III",
    title: "Caderno de Detalhes Construtivos",
    items: [
      "Detalhamentos gerais",
      "Representação gráfica por ambiente",
      "Portas e esquadrias",
      "Marmoraria",
      "Marcenaria",
      "Porcelanataria",
    ],
  },
  {
    id: "memorial",
    num: "IV",
    title: "Memorial Descritivo",
    items: [
      "Componentes construtivos identificados",
      "Localizados em planta",
      "Quantificados por ambiente",
      "Base para orçamento de obra sem improviso",
    ],
  },
];

const SCOPE_INT: ScopeBloco[] = [
  {
    id: "caderno-geral-int",
    num: "I",
    title: "Caderno Geral",
    wide: true,
    items: [
      "Capa",
      "Imagens aprovadas",
      "Quadros quantitativos e especificações",
      "Planta baixa de layout",
      "Planta baixa demolir / construir",
      "Planta baixa construtiva",
      "Paginação de piso",
      "Mapa de revestimentos",
      "Planta de forro",
      "Luminotécnico",
      "Instalações elétricas, hidráulicas e ar-condicionado  *",
    ],
  },
  {
    id: "detalhes-int",
    num: "II",
    title: "Caderno de Detalhes Construtivos",
    description:
      "Graficação de todos os detalhes necessários para execução conforme complexidade do projeto.",
  },
  {
    id: "ambientes-int",
    num: "III",
    title: "Caderno de Ambientes",
    description:
      "Especificações completas por ambiente com localizações de vistas e siglas de materiais.",
  },
  {
    id: "esquadrias-int",
    num: "IV",
    title: "Caderno de Esquadrias",
    description:
      "Especificação e localização de todas as esquadrias novas com detalhamento para fabricação.",
  },
  {
    id: "marmoraria-int",
    num: "V",
    title: "Caderno de Marmoraria",
    description:
      "Bancadas, soleiras, bordas, nichos e elementos em mármore ou pedra natural.",
  },
  {
    id: "porcelanataria-int",
    num: "VI",
    title: "Caderno de Porcelanataria",
    description:
      "Paginação, perfis, fixação e intervenções em revestimentos cerâmicos por ambiente.",
  },
  {
    id: "marcenaria-int",
    num: "VII",
    title: "Caderno de Marcenaria",
    wide: false,
    description:
      "Detalhamento completo de todo mobiliário fabricado sob medida.",
  },
];

const ScopeBlocos = ({ data, trackId }: { data: ScopeBloco[]; trackId: string }) => {
  const hasFootnote = data.some((b) => b.items?.some((i) => i.includes("*")) || (b.description?.includes("*")));
  return (
    <div>
      <div className="grid grid-cols-12 gap-px bg-border border border-border">
        {data.map((bloco) => (
          <article
            key={bloco.id}
            className={cn(
              "bg-background p-7 md:p-8 flex flex-col col-span-12",
              bloco.wide ? "md:col-span-12" : "md:col-span-6"
            )}
          >
            <div className="flex items-baseline gap-3 mb-5">
              <span className="font-display italic text-2xl text-primary/60">{bloco.num}</span>
              <Editable
                as="h4"
                id={`scope.${trackId}.${bloco.id}.title`}
                className="font-display text-xl md:text-[1.4rem] leading-tight text-foreground"
              >
                {bloco.title}
              </Editable>
            </div>

            {bloco.note && (
              <Editable
                id={`scope.${trackId}.${bloco.id}.note`}
                className="font-mono text-[10px] uppercase tracking-[0.25em] text-primary/80 mb-4 -mt-1"
              >
                {bloco.note}
              </Editable>
            )}

            {bloco.description && (
              <Editable
                as="p"
                id={`scope.${trackId}.${bloco.id}.description`}
                className="font-display italic text-[0.95rem] text-foreground/75 leading-relaxed mt-1"
              >
                {bloco.description}
              </Editable>
            )}

            {bloco.items && (
              <ul className={cn("space-y-2 mt-1", bloco.wide && "md:columns-2 md:gap-x-10 md:space-y-0")}>
                {bloco.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 group/item md:break-inside-avoid md:mb-2">
                    <span className="mt-[0.55rem] h-px w-3 bg-primary/40 flex-shrink-0 group-hover/item:bg-primary group-hover/item:w-5 transition-all duration-300" />
                    <Editable
                      as="span"
                      id={`scope.${trackId}.${bloco.id}.item.${i}`}
                      className="font-display text-[0.95rem] text-foreground/80 leading-snug"
                    >
                      {item}
                    </Editable>
                  </li>
                ))}
              </ul>
            )}
          </article>
        ))}
      </div>

      {hasFootnote && (
        <div className="mt-6 pl-4 border-l-2 border-primary/40">
          <Editable
            as="p"
            id={`scope.${trackId}.footnote`}
            className="font-display italic text-[0.9rem] text-foreground/70 leading-relaxed"
          >
            <span className="font-mono not-italic text-primary mr-1">*</span>
            Desenvolvido em parceria com engenheiros especializados. A NL coordena e valida todos os projetos complementares.
          </Editable>
        </div>
      )}
    </div>
  );
};

const ScopeTabs = () => {
  const [tab, setTab] = useState("arq");
  return (
    <Tabs value={tab} onValueChange={setTab} className="w-full">
      <TabsList className="bg-transparent border-b border-border/60 rounded-none p-0 h-auto w-full justify-start gap-8 mb-8">
        <TabsTrigger
          value="arq"
          className="data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:text-primary text-muted-foreground rounded-none px-0 pb-4 font-mono text-[11px] uppercase tracking-[0.3em] border-b-2 border-transparent data-[state=active]:border-primary"
        >
          Arquitetônico
        </TabsTrigger>
        <TabsTrigger
          value="int"
          className="data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:text-primary text-muted-foreground rounded-none px-0 pb-4 font-mono text-[11px] uppercase tracking-[0.3em] border-b-2 border-transparent data-[state=active]:border-primary"
        >
          Interiores
        </TabsTrigger>
      </TabsList>
      <TabsContent value="arq" className="mt-0">
        <ScopeBlocos data={SCOPE_ARQ} trackId="arq" />
        <Editable
          id="scope.arq.parceria"
          multiline
          as="p"
          className="mt-6 font-display italic text-sm text-foreground/65 leading-relaxed border-l-2 border-primary/40 pl-4"
        >
          <span className="font-mono not-italic text-primary mr-1">*</span>
          Desenvolvido em parceria com engenheiros especializados. A NL coordena e valida todos os projetos complementares.
        </Editable>
      </TabsContent>
      <TabsContent value="int" className="mt-0">
        <ScopeBlocos data={SCOPE_INT} trackId="int" />
      </TabsContent>
    </Tabs>
  );
};

const TimelineNode = ({ idx, m, t, trail }: { idx: number; m: string; t: string; trail: "ARQ" | "INT" }) => (
  <div className="relative">
    <div className="hidden md:flex justify-center">
      <span
        className={`relative z-10 w-3 h-3 rounded-full border-2 ${trail === "ARQ" ? "bg-primary border-primary" : "bg-background border-primary"}`}
      />
    </div>
    <div className="md:mt-6 text-left md:text-center">
      <Editable
        id={`crono.${idx}.m`}
        className="font-mono text-[10px] uppercase tracking-[0.3em] text-primary/80 block mb-2"
      >
        {m}
      </Editable>
      <Editable
        as="h4"
        id={`crono.${idx}.t`}
        multiline
        className="font-display text-base text-foreground/90 leading-tight mb-2"
      >
        {t}
      </Editable>
      <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-muted-foreground/70">
        Trilha · {trail === "ARQ" ? "Arquitetura" : "Interiores"}
      </span>
    </div>
  </div>
);

const PackageCard = ({
  id,
  tier,
  tagline,
  price,
  priceNote,
  features,
  cta,
  ctaHref,
  recommended,
}: {
  id: string;
  tier: string;
  tagline: string;
  price: string;
  priceNote: string;
  features: { included: boolean; text: string }[];
  cta: string;
  ctaHref: string;
  recommended?: boolean;
}) => (
  <div
    className={`relative flex flex-col p-10 md:p-12 ${recommended ? "border-2 border-primary bg-background" : "border border-border/60 bg-background/60"}`}
  >
    {recommended && (
      <div className="absolute -top-3 left-10 bg-primary text-primary-foreground px-4 py-1">
        <Editable id={`pkg.${id}.badge`} className="font-mono text-[9px] uppercase tracking-[0.3em]">
          ◆ Mais escolhido
        </Editable>
      </div>
    )}
    <div className="mb-8">
      <Editable
        id={`pkg.${id}.tier`}
        className="font-mono text-[10px] uppercase tracking-[0.3em] text-primary/80 block mb-4"
      >
        {tier}
      </Editable>
      <Editable
        as="h3"
        id={`pkg.${id}.tagline`}
        multiline
        className="font-display text-3xl md:text-4xl text-foreground leading-tight mb-6"
      >
        {tagline}
      </Editable>
      <div className="gold-line w-12 mb-6" />
      <Editable
        id={`pkg.${id}.price.note`}
        className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground block mb-1"
      >
        {priceNote}
      </Editable>
      <Editable
        id={`pkg.${id}.price`}
        className={`font-display text-5xl md:text-6xl leading-none block ${recommended ? "text-primary" : "text-foreground"}`}
      >
        {price}
      </Editable>
    </div>
    <ul className="space-y-3 mb-10 flex-1">
      {features.map((f, i) => (
        <li key={i} className="flex gap-3 items-baseline border-b border-border/40 pb-3">
          <span className={`font-mono text-xs shrink-0 ${f.included ? "text-primary" : "text-muted-foreground/40"}`}>
            {f.included ? "✓" : "—"}
          </span>
          <Editable
            id={`pkg.${id}.f${i}`}
            className={`font-display text-sm leading-relaxed flex-1 ${f.included ? "text-foreground/85" : "text-muted-foreground/50 line-through"}`}
          >
            {f.text}
          </Editable>
        </li>
      ))}
    </ul>
    <a
      href={ctaHref}
      target="_blank"
      rel="noreferrer"
      className={`group inline-flex items-center justify-center gap-4 px-8 py-4 font-mono text-xs uppercase tracking-[0.3em] transition-colors duration-500 self-stretch ${recommended ? "bg-primary text-primary-foreground hover:bg-primary-glow" : "border border-foreground/30 text-foreground hover:border-primary hover:text-primary"}`}
    >
      <Editable id={`pkg.${id}.cta`} className="inline-block">
        {cta}
      </Editable>
      <span className="transition-transform duration-500 group-hover:translate-x-1">→</span>
    </a>
  </div>
);

const COMPARISON_GROUPS: {
  group: string;
  rows: { id: string; label: string; basic: string | boolean; premium: string | boolean }[];
}[] = [
  {
    group: "Arquitetura",
    rows: [
      { id: "cmp.arq.1", label: "Levantamento, briefing e estudo do terreno", basic: true, premium: true },
      { id: "cmp.arq.2", label: "Estudo Preliminar", basic: "1 render conceitual", premium: "Renders ilimitados" },
      { id: "cmp.arq.3", label: "Anteprojeto arquitetônico", basic: true, premium: true },
      { id: "cmp.arq.4", label: "Projeto Executivo arquitetônico", basic: true, premium: true },
      {
        id: "cmp.arq.5",
        label: "Compatibilização de disciplinas",
        basic: "Até 3 disciplinas",
        premium: "Até 6 disciplinas",
      },
      { id: "cmp.arq.6", label: "Detalhamentos construtivos", basic: "Essenciais", premium: "Completos" },
    ],
  },
  {
    group: "Interiores",
    rows: [
      { id: "cmp.int.1", label: "Layout e ambientação completa", basic: false, premium: true },
      { id: "cmp.int.2", label: "Marcenaria sob medida detalhada", basic: false, premium: true },
      { id: "cmp.int.3", label: "Projeto luminotécnico cênico", basic: false, premium: true },
      { id: "cmp.int.4", label: "Curadoria de mobiliário e arte", basic: false, premium: true },
      { id: "cmp.int.5", label: "Paleta de revestimentos e acabamentos", basic: false, premium: true },
    ],
  },
  {
    group: "Visualização e experiência",
    rows: [
      { id: "cmp.vis.1", label: "Renders fotorrealistas", basic: "1 imagem", premium: "Ilimitados" },
      { id: "cmp.vis.2", label: "Tour virtual 360°", basic: false, premium: true },
      { id: "cmp.vis.3", label: "Apresentação editorial impressa", basic: false, premium: true },
    ],
  },
  {
    group: "Acompanhamento",
    rows: [
      { id: "cmp.acc.1", label: "Rodadas de revisão por etapa", basic: "2 rodadas", premium: "Ilimitadas" },
      { id: "cmp.acc.2", label: "Acompanhamento de obra", basic: "Sob demanda", premium: "Visitas mensais" },
      { id: "cmp.acc.3", label: "Atendimento direto com os sócios", basic: false, premium: true },
      { id: "cmp.acc.4", label: "Garantia NL", basic: "Estudo preliminar", premium: "Todas as etapas" },
    ],
  },
];

const ComparisonCell = ({ value }: { value: string | boolean }) => {
  if (value === true) return <span className="font-mono text-primary text-base">✓</span>;
  if (value === false) return <span className="font-mono text-muted-foreground/30 text-base">—</span>;
  return <span className="font-display text-sm text-foreground/85 leading-snug">{value}</span>;
};

const ComparisonTable = () => (
  <div className="mt-20 max-w-6xl mx-auto">
    <div className="text-center mb-10">
      <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-primary/80 block mb-3">
        Comparativo detalhado
      </span>
      <Editable
        as="h3"
        id="cmp.title"
        multiline
        className="font-display text-3xl md:text-4xl leading-tight text-balance max-w-2xl mx-auto"
      >
        O que você recebe em <em className="text-primary not-italic">cada pacote</em>
      </Editable>
    </div>
    <div className="border border-border/60 bg-background overflow-hidden">
      <div className="grid grid-cols-[1.6fr_1fr_1fr] border-b border-border/60 bg-surface/40">
        <div className="px-6 py-5">
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">Entregáveis</span>
        </div>
        <div className="px-6 py-5 border-l border-border/60 text-center">
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground block mb-1">
            Pacote
          </span>
          <span className="font-display text-xl text-foreground">Essencial</span>
        </div>
        <div className="px-6 py-5 border-l border-border/60 text-center bg-primary/[0.04] relative">
          <div className="absolute top-0 inset-x-0 h-px bg-primary" />
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-primary/80 block mb-1">
            Recomendado
          </span>
          <span className="font-display text-xl text-primary">Completo</span>
        </div>
      </div>
      {COMPARISON_GROUPS.map((g, gi) => (
        <div key={gi}>
          <div className="grid grid-cols-[1.6fr_1fr_1fr] border-b border-border/40 bg-surface/20">
            <div className="px-6 py-3 col-span-3">
              <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-primary/70">
                {String(gi + 1).padStart(2, "0")} · {g.group}
              </span>
            </div>
          </div>
          {g.rows.map((r, ri) => (
            <div
              key={r.id}
              className={`grid grid-cols-[1.6fr_1fr_1fr] ${ri === g.rows.length - 1 && gi === COMPARISON_GROUPS.length - 1 ? "" : "border-b border-border/40"}`}
            >
              <div className="px-6 py-4 flex items-center">
                <Editable id={`${r.id}.label`} className="font-display text-sm text-foreground/85 leading-snug">
                  {r.label}
                </Editable>
              </div>
              <div className="px-6 py-4 border-l border-border/40 flex items-center justify-center text-center">
                {typeof r.basic === "string" ? (
                  <Editable id={`${r.id}.basic`} className="font-display text-sm text-foreground/75 leading-snug">
                    {r.basic}
                  </Editable>
                ) : (
                  <ComparisonCell value={r.basic} />
                )}
              </div>
              <div className="px-6 py-4 border-l border-border/40 flex items-center justify-center text-center bg-primary/[0.025]">
                {typeof r.premium === "string" ? (
                  <Editable
                    id={`${r.id}.premium`}
                    className="font-display text-sm text-primary leading-snug font-medium"
                  >
                    {r.premium}
                  </Editable>
                ) : (
                  <ComparisonCell value={r.premium} />
                )}
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
    <Editable
      id="cmp.footnote"
      multiline
      as="p"
      className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground text-center mt-6 leading-relaxed"
    >
      Pacotes podem ser personalizados conforme a complexidade do projeto.
    </Editable>
  </div>
);

export default Index;
