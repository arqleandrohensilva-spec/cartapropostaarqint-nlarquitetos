import Editable from "@/components/Editable";
import SectionNav from "@/components/SectionNav";
import coverHero from "@/assets/cover-hero.jpg";
import caseCasaCostas from "@/assets/case-casa-costas.jpg";
import interiorLiving from "@/assets/interior-living.jpg";
import portfolioStair from "@/assets/portfolio-stair.jpg";
import portfolioKitchen from "@/assets/portfolio-kitchen.jpg";
import portfolioBedroom from "@/assets/portfolio-bedroom.jpg";
import portfolioFacade from "@/assets/portfolio-facade.jpg";

const Index = () => {
  return (
    <main className="relative bg-background text-foreground overflow-x-hidden">
      <SectionNav />

      {/* ============================================================
          01 · CAPA / CONCEITO
          ============================================================ */}
      <section
        id="capa"
        className="relative min-h-screen flex flex-col justify-end px-6 md:px-16 lg:px-24 py-20"
      >
        <img
          src={coverHero}
          alt="NL Arquitetos · monograma esculpido em concreto com luz dourada"
          className="absolute inset-0 w-full h-full object-cover opacity-90"
          width={1920}
          height={1280}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/10 to-background" />
        <div className="absolute inset-0 vignette" />

        <div className="relative z-10 max-w-4xl fade-up">
          <Editable
            id="capa.eyebrow"
            className="eyebrow mb-8 inline-block"
          >
            Carta Proposta · Exclusiva
          </Editable>

          <Editable
            as="h1"
            id="capa.title"
            multiline
            className="font-display text-5xl md:text-7xl lg:text-[7.5rem] leading-[0.95] text-foreground mb-8 text-balance"
          >
            Uma proposta<br />
            <em className="text-primary not-italic font-light">desenhada</em> para você.
          </Editable>

          <div className="gold-line w-32 mb-8" />

          <Editable
            id="capa.subtitle"
            className="font-display italic text-xl md:text-2xl text-foreground/70 max-w-xl"
          >
            Esta carta não é um orçamento. É o início de uma decisão.
          </Editable>
        </div>

        <div className="relative z-10 mt-16 flex items-end justify-between text-muted-foreground">
          <div className="flex items-center gap-4">
            <span className="font-mono text-xs tracking-[0.3em]">01 / 07</span>
            <span className="h-px w-12 bg-border" />
            <Editable
              id="capa.client"
              className="font-mono text-xs tracking-[0.3em] uppercase text-primary/80"
            >
              Cliente · [Nome do Cliente]
            </Editable>
          </div>
          <Editable
            id="capa.date"
            className="font-mono text-xs tracking-[0.3em] uppercase"
          >
            São José dos Campos · 2025
          </Editable>
        </div>
      </section>

      {/* ============================================================
          02 · MANIFESTO
          ============================================================ */}
      <section
        id="manifesto"
        className="relative min-h-screen flex items-center px-6 md:px-16 lg:px-24 py-32"
      >
        <div className="grid grid-cols-12 gap-8 w-full max-w-7xl mx-auto">
          <div className="col-span-12 md:col-span-3">
            <span className="number-marker block mb-2">02</span>
            <Editable
              id="manifesto.eyebrow"
              className="eyebrow"
            >
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
              Antes de desenhar, <em className="text-primary not-italic">escutamos.</em><br />
              Antes de construir, <em className="text-primary not-italic">decidimos.</em>
            </Editable>

            <div className="grid md:grid-cols-2 gap-12 max-w-4xl">
              <Editable
                id="manifesto.p1"
                multiline
                as="p"
                className="font-display text-lg md:text-xl leading-relaxed text-foreground/80"
              >
                Esta proposta nasce de uma escuta. Não é um modelo replicado, não
                é um pacote pré-montado. É a tradução técnica de tudo que ouvimos
                de você — do escopo declarado às nuances que só aparecem entre as
                linhas de uma conversa.
              </Editable>
              <Editable
                id="manifesto.p2"
                multiline
                as="p"
                className="font-display text-lg md:text-xl leading-relaxed text-foreground/80"
              >
                A NL não projeta para impressionar. Projeta para funcionar — para
                proteger quem vive no espaço, hoje e ao longo de todas as fases
                que ainda virão. Cada decisão tomada aqui evita um custo na obra.
              </Editable>
            </div>

            <div className="mt-20 pl-8 border-l border-primary/40 max-w-2xl">
              <Editable
                id="manifesto.quote"
                multiline
                as="p"
                className="font-display italic text-2xl md:text-3xl text-primary/90 leading-snug"
              >
                "Beleza sem método é apenas decoração. Arquitetura é a decisão
                tomada antes do primeiro traço."
              </Editable>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          03 · APRESENTAÇÃO VISUAL (editorial)
          ============================================================ */}
      <section
        id="apresentacao"
        className="relative min-h-screen px-6 md:px-16 lg:px-24 py-32"
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex items-baseline justify-between mb-20 border-b border-border/60 pb-6">
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

          <div className="grid grid-cols-12 gap-x-8 gap-y-16">
            <div className="col-span-12 lg:col-span-7">
              <Editable
                as="h2"
                id="apresentacao.title"
                multiline
                className="font-display text-5xl md:text-6xl lg:text-7xl leading-[1.0] text-balance mb-12"
              >
                A NL não é definida por quem assina —<br />
                <em className="text-primary not-italic">é definida pelo processo.</em>
              </Editable>

              <Editable
                id="apresentacao.body"
                multiline
                as="p"
                className="font-display text-lg leading-relaxed text-foreground/75 max-w-xl"
              >
                Fundada por Leandro e Neandro, a NL une visão estratégica e
                disciplina executiva em um único método. Transformamos o desejo
                do cliente em projeto executivo sem perdas — de conceito, de
                qualidade ou de controle.
              </Editable>

              <div className="mt-16 grid grid-cols-3 gap-6 max-w-lg">
                <Stat number="+50" label="Projetos entregues" id="stat1" />
                <Stat number="+8" label="Anos de mercado" id="stat2" />
                <Stat number="100%" label="Compatibilizados" id="stat3" />
              </div>
            </div>

            <aside className="col-span-12 lg:col-span-5 lg:pl-12 lg:border-l border-border/60">
              <div className="space-y-10">
                <PartnerCard
                  id="leandro"
                  name="Leandro Henrique"
                  role="Co-Fundador · Arquiteto"
                  cau="CAU A252250-0"
                />
                <PartnerCard
                  id="neandro"
                  name="Neandro Jacque"
                  role="Co-Fundador · Arquiteto"
                  cau="CAU A264629-3"
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
          {/* Image left */}
          <div className="col-span-12 lg:col-span-7 relative min-h-[60vh] lg:min-h-screen">
            <img
              src={caseCasaCostas}
              alt="Casa Costas · residência contemporânea com piscina infinita ao entardecer"
              className="absolute inset-0 w-full h-full object-cover"
              loading="lazy"
              width={1920}
              height={1280}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-background/40 lg:to-background" />
            <div className="absolute bottom-8 left-8 z-10 flex items-center gap-3">
              <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-primary">
                Case · 01
              </span>
              <span className="h-px w-8 bg-primary/60" />
            </div>
          </div>

          {/* Content right */}
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
                Residência · 480m² · São José dos Campos
              </Editable>

              <div className="gold-line w-16 mb-8" />

              <Editable
                id="case.body"
                multiline
                as="p"
                className="font-display text-lg leading-relaxed text-foreground/80 mb-10"
              >
                Um terreno em declive. Uma família que cresce. Um pedido aparente:
                "queremos uma casa moderna." A escuta revelou outra coisa —
                queriam, sobretudo, ficar. Casa Costas foi projetada para evoluir
                com seus moradores: estrutura preparada para uma futura suíte,
                cozinha que abraça a sala, e uma fachada que respira sob a luz da
                serra ao entardecer.
              </Editable>

              <div className="grid grid-cols-3 gap-6 border-t border-border/60 pt-8">
                <CaseStat id="case.s1" value="14" label="Meses de projeto" />
                <CaseStat id="case.s2" value="06" label="Disciplinas" />
                <CaseStat id="case.s3" value="0" label="Retrabalho" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          05 · BLOCO DE INTERIORES
          ============================================================ */}
      <section
        id="interiores"
        className="relative px-6 md:px-16 lg:px-24 py-32"
      >
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
              Não decoramos espaços — projetamos atmosferas. Cada material é
              escolhido pelo modo como envelhece, pelo toque, pelo som que o
              ambiente faz quando alguém entra. O resultado: interiores que não
              datam, que não cansam, e que continuam pertencendo a você dez anos
              depois da entrega.
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
                src={interiorLiving}
                alt="Sala de estar minimalista quente com sofá de couro e mesa de travertino"
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
                Estar · Materialidade quente · Luz natural
              </Editable>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          06 · SEQUÊNCIA VISUAL — PORTFÓLIO EXPANDIDO
          ============================================================ */}
      <section
        id="portfolio"
        className="relative px-6 md:px-16 lg:px-24 py-32"
      >
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
            {/* Tall left */}
            <figure className="col-span-12 md:col-span-5 row-span-2 group">
              <div className="relative aspect-[3/4] overflow-hidden">
                <img
                  src={portfolioStair}
                  alt="Escada escultural em travertino e oak com corrimão de latão"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1500ms] group-hover:scale-105"
                  loading="lazy"
                  width={1080}
                  height={1440}
                />
              </div>
              <figcaption className="mt-4 flex items-baseline justify-between">
                <Editable id="port.cap1" className="font-display italic text-foreground/80">
                  Escada escultural · Residência Jacareí
                </Editable>
                <span className="font-mono text-[10px] tracking-[0.3em] text-muted-foreground">01</span>
              </figcaption>
            </figure>

            {/* Top right wide */}
            <figure className="col-span-12 md:col-span-7 group">
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={portfolioKitchen}
                  alt="Cozinha com ilha de mármore, marcenaria oak e luminárias de latão"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1500ms] group-hover:scale-105"
                  loading="lazy"
                  width={1920}
                  height={1200}
                />
              </div>
              <figcaption className="mt-4 flex items-baseline justify-between">
                <Editable id="port.cap2" className="font-display italic text-foreground/80">
                  Cozinha gourmet · Espaço SJ01
                </Editable>
                <span className="font-mono text-[10px] tracking-[0.3em] text-muted-foreground">02</span>
              </figcaption>
            </figure>

            {/* Bottom right narrow */}
            <figure className="col-span-6 md:col-span-3 group">
              <div className="relative aspect-[3/4] overflow-hidden">
                <img
                  src={portfolioFacade}
                  alt="Detalhe de fachada com brises verticais em madeira escura"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1500ms] group-hover:scale-105"
                  loading="lazy"
                  width={1080}
                  height={1440}
                />
              </div>
              <figcaption className="mt-4">
                <Editable id="port.cap3" className="font-display italic text-foreground/80 text-sm">
                  Fachada · Brises verticais
                </Editable>
                <div className="font-mono text-[10px] tracking-[0.3em] text-muted-foreground mt-1">03</div>
              </figcaption>
            </figure>

            {/* Bottom right wide */}
            <figure className="col-span-6 md:col-span-4 group">
              <div className="relative aspect-[3/4] overflow-hidden">
                <img
                  src={portfolioBedroom}
                  alt="Suíte master com cama plataforma, parede em oak escuro e cortinas de linho"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1500ms] group-hover:scale-105"
                  loading="lazy"
                  width={1920}
                  height={1200}
                />
              </div>
              <figcaption className="mt-4">
                <Editable id="port.cap4" className="font-display italic text-foreground/80 text-sm">
                  Suíte master · Serenidade noturna
                </Editable>
                <div className="font-mono text-[10px] tracking-[0.3em] text-muted-foreground mt-1">04</div>
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* ============================================================
          07 · ENCERRAMENTO IMPLÍCITO
          ============================================================ */}
      <section
        id="encerramento"
        className="relative min-h-screen flex items-center px-6 md:px-16 lg:px-24 py-32 bg-background"
      >
        <div className="absolute inset-0 vignette opacity-60" />

        <div className="relative max-w-5xl mx-auto w-full">
          <span className="number-marker block mb-6 text-center">07 · Encerramento</span>

          <div className="gold-line w-24 mx-auto mb-12" />

          <Editable
            as="h2"
            id="encerramento.title"
            multiline
            className="font-display text-5xl md:text-7xl lg:text-8xl text-center leading-[1.0] mb-16 text-balance"
          >
            Quando estiver pronto para <em className="text-primary not-italic">decidir</em>,<br />
            estaremos prontos para <em className="text-primary not-italic">conduzir.</em>
          </Editable>

          <Editable
            id="encerramento.body"
            multiline
            as="p"
            className="font-display italic text-xl md:text-2xl text-center text-foreground/70 max-w-2xl mx-auto mb-20"
          >
            Esta carta é o início — não o fim. O próximo passo é uma conversa,
            sem compromisso, sobre o seu projeto.
          </Editable>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-border pt-12 max-w-3xl mx-auto">
            <Contact id="ct1" label="WhatsApp" value="(12) 99623-5559" />
            <Contact id="ct2" label="E-mail" value="contato.nlarquitetos@gmail.com" />
            <Contact id="ct3" label="Instagram" value="@nlarquitetos" />
          </div>

          <div className="mt-24 flex items-center justify-between text-muted-foreground">
            <span className="font-display italic text-foreground/60">
              "A arquitetura como decisão."
            </span>
            <span className="font-mono text-[10px] uppercase tracking-[0.3em]">
              NL Arquitetos · 2025
            </span>
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
    <Editable
      id={`stat.${id}.num`}
      className="font-display text-3xl md:text-4xl text-primary block mb-1"
    >
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
}: {
  id: string;
  name: string;
  role: string;
  cau: string;
}) => (
  <div className="group">
    <div className="flex items-baseline gap-4 mb-2">
      <span className="font-mono text-xs text-primary/70">→</span>
      <Editable
        as="h3"
        id={`p.${id}.name`}
        className="font-display text-3xl md:text-4xl text-foreground"
      >
        {name}
      </Editable>
    </div>
    <div className="pl-7 space-y-1">
      <Editable
        id={`p.${id}.role`}
        className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground block"
      >
        {role}
      </Editable>
      <Editable
        id={`p.${id}.cau`}
        className="font-mono text-[10px] tracking-[0.2em] text-primary/60 block"
      >
        {cau}
      </Editable>
    </div>
  </div>
);

const CaseStat = ({ id, value, label }: { id: string; value: string; label: string }) => (
  <div>
    <Editable
      id={`${id}.v`}
      className="font-display text-3xl text-primary block mb-1"
    >
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
    <Editable
      id={`${id}.lbl`}
      className="font-mono text-[10px] uppercase tracking-[0.3em] text-primary/70 block mb-2"
    >
      {label}
    </Editable>
    <Editable
      id={`${id}.val`}
      className="font-display text-lg text-foreground/90 block"
    >
      {value}
    </Editable>
  </div>
);

export default Index;
