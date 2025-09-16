import Icon from "site/components/ui/Icon.tsx";

export interface CTA {
  id?: string;
  href: string;
  text: string;
  outline?: boolean;
}

export interface Question {
  title: string;
  /** @format rich-text */
  answer: string;
}

export interface Props {
  title?: string;
  description?: string;
  cta?: CTA;
  questions?: Question[];
}

export default function BlogPosts({
  title = "Perguntas frequentes",
  description = "",
  cta,
  questions = [
    {
      title: "Qual é a história por trás do Derivative®?",
      answer:
        "O Derivative® é a matéria-prima exclusiva do Deriva, feita a partir da reciclagem da poliamida de redes de pesca pós-consumo e resíduos têxteis pré-consumo. É versátil, de alto valor e propósito, podendo ser aplicado em setores como moda, acessórios e produtos esportivos. Cada lote é 100% rastreável e conectado à sua origem.",
    },
    {
      title: "Quando o Deriva começou?",
      answer:
        "O Deriva nasceu em 2022 como pesquisa acadêmica e projeto de campo junto a comunidades pesqueiras do Rio de Janeiro. Desde então, fomos evoluindo o modelo e validando hipóteses. Em 2025 iniciamos oficialmente as operações como negócio de impacto, e estamos implementando os primeiros projetos e encontrando early-adopters que compartilham do nosso propósito.",
    },
    {
      title: "O Derivative vem de redes fantasmas?",
      answer:
        "Nosso foco é interceptar redes antes que virem fantasmas, evitando que cheguem ao mar e causem danos irreversíveis à vida oceânica. Para isso, criamos um sistema de incentivo financeiro ao descarte correto junto às colônias de pesca. Assim, transformamos um passivo em recurso, reduzindo riscos e fortalecendo comunidades pesqueiras.",
    },
    {
      title: "Como funciona a parceria com marcas?",
      answer:
        "Oferecemos três frentes de colaboração: fornecimento do Derivative®, co-criação de soluções através do Deriva Way e o Own your Derivative® que transforma resíduos têxteis da própria marca em um Derivative® exclusivo.",
    },
  ],
}: Props) {
  return (
    <div class="container lg:mx-auto px-4 lg:px-0 text-sm py-12 lg:py-28 max-w-7xl" style="overflow-x: hidden !important;">
      <style dangerouslySetInnerHTML={{
        __html: `
          .faq-border-gradient {
            border-image: linear-gradient(90deg, rgba(255, 255, 255, 0.7) 0%, rgba(255, 255, 255, 0.2) 100%) 1 !important;
          }
          .faq-border-gradient-top {
            border-top: 1px solid;
            border-image: linear-gradient(90deg, rgba(255, 255, 255, 0.7) 0%, rgba(255, 255, 255, 0.2) 100%) 1 !important;
          }
          .faq-border-gradient-bottom {
            border-bottom: 1px solid;
            border-image: linear-gradient(90deg, rgba(255, 255, 255, 0.7) 0%, rgba(255, 255, 255, 0.2) 100%) 1 !important;
          }
          @media (max-width: 1023px) {
            .faq-mobile-container {
              overflow-x: hidden !important;
              max-width: 100vw !important;
              width: 100% !important;
            }
            .faq-mobile-container * {
              max-width: 100% !important;
              box-sizing: border-box !important;
            }
          }
          
          /* Remove default list markers from summary elements - Mobile only */
          @media (max-width: 1023px) {
            .faq-mobile-container summary {
              list-style: none !important;
              display: flex !important;
              align-items: flex-start !important;
              justify-content: space-between !important;
              width: 100% !important;
              padding: 1rem 0 !important;
            }
            
            .faq-mobile-container summary::-webkit-details-marker {
              display: none !important;
            }
            
            .faq-mobile-container summary::marker {
              display: none !important;
            }
            
            /* Force mobile layout structure for FAQ */
            .faq-mobile-container summary > span:first-child {
              flex: 1 !important;
              padding-right: 0.75rem !important;
            }
            
            .faq-mobile-container summary > span:last-child {
              flex-shrink: 0 !important;
              margin-left: auto !important;
              align-self: flex-start !important;
            }
          }
        `
      }} />
      {/* Desktop Layout */}
      <div class="hidden lg:flex lg:flex-row gap-10 lg:gap-20 justify-between">
        <div class="flex-none space-y-6 lg:w-2/5">
          <p class="text-4xl leading-snug">
            {title}
          </p>
          {description && (
            <p class="text-lg">
              {description}
            </p>
          )}
          {cta && (
            <a
              key={cta?.id}
              id={cta?.id}
              href={cta?.href}
              target={cta?.href.includes("http") ? "_blank" : "_self"}
              class={`font-normal btn btn-primary ${
                cta.outline && "btn-outline"
              }`}
            >
              {cta?.text}
            </a>
          )}
        </div>
        <div class="flex-auto faq-border-gradient-top">
          {questions?.map((question) => (
            <details class="faq-border-gradient-bottom group">
              <summary class="text-lg cursor-pointer py-6 flex ">
                <span class="flex-auto">{question.title}</span>
                <span class="flex-none transition group-open:rotate-180">
                  <Icon
                    id="ChevronDown"
                    width={32}
                    height={33}
                    class="stroke-2"
                  />
                </span>
              </summary>
              <p
                class="leading-relaxed mb-6 group-open:animate-fadeIn"
                dangerouslySetInnerHTML={{ __html: question.answer }}
              >
              </p>
            </details>
          ))}
        </div>
      </div>

      {/* Mobile Layout */}
      <div class="block lg:hidden w-full overflow-x-hidden faq-mobile-container">
        <div class="space-y-6 mb-8 w-full">
          <p class="text-3xl leading-snug w-full">
            {title}
          </p>
          {description && (
            <p class="text-base leading-relaxed w-full">
              {description}
            </p>
          )}
          {cta && (
            <a
              key={cta?.id}
              id={cta?.id}
              href={cta?.href}
              target={cta?.href.includes("http") ? "_blank" : "_self"}
              class={`font-normal btn btn-primary w-full text-center ${
                cta.outline && "btn-outline"
              }`}
            >
              {cta?.text}
            </a>
          )}
        </div>
        <div class="faq-border-gradient-top w-full">
          {questions?.map((question) => (
            <details class="faq-border-gradient-bottom group w-full">
              <summary class="text-base cursor-pointer py-4 flex items-start w-full">
                <span class="flex-auto pr-3 leading-relaxed w-full">{question.title}</span>
                <span class="flex-none transition group-open:rotate-180 mt-1">
                  <Icon
                    id="ChevronDown"
                    width={24}
                    height={24}
                    class="stroke-2"
                  />
                </span>
              </summary>
              <div
                class="leading-relaxed mb-4 group-open:animate-fadeIn px-1 w-full"
                dangerouslySetInnerHTML={{ __html: question.answer }}
              >
              </div>
            </details>
          ))}
        </div>
      </div>
    </div>
  );
}
