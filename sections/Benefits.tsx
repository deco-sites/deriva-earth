import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

export interface Benefit {
  title: string;
  description: string;
  image: string;
}

export interface Props {
  /**
   * @format rich-text
   * @default Click here to tweak this text however you want.
   */
  title?: string;
  description?: string;
  benefits?: Benefit[];
}

export default function Benefits({
  title = "Benefícios exclusivos para sua marca",
  description = "Descubra como o Derivative® pode transformar sua marca e criar conexões mais profundas com seus consumidores através de soluções regenerativas e sustentáveis.",
  benefits = [
    {
      title: "Potencialize o valor de marca",
      description: "Faça parte de um movimento de regeneração e cultura oceânica, adotando uma narrativa poderosa que conecta o impacto positivo ao desejo de consumo e transforma sua marca em um agente de mudança.",
      image: "https://decoims.com/derivative/11027fe7-b570-4733-9b11-458bb4e71dcf/movimento.svg"
    },
    {
      title: "Crie infinitas soluções",
      description: "Tenha acesso a um material único no Brasil e amplie o potencial criativo da sua marca de forma sustentável, inovadora e com impacto real. Das armações de óculos aos móveis, dê vida a produtos exclusivos e regenerativos.",
      image: "https://decoims.com/derivative/0fbf15ab-1956-4014-87eb-fd0fd8911ce9/possibilidades.svg"
    },
    {
      title: "Diferencie sua marca",
      description: "Crie soluções únicas e objetos de desejo que destacam sua marca, reforçando a autenticidade de marca e o engajamento com consumidores cada vez mais atentos à origem, significado e impacto de cada produto.",
      image: "https://decoims.com/derivative/86e6121f-a0d8-47b5-8414-0c11671d2362/diferenciacao.svg"
    },
    {
      title: "Transforme ESG em vantagem estratégica",
      description: "Adote uma produção mais coerente e mostre aos consumidores e investidores que seu compromisso com o impacto positivo é real, rastreável e parte central da estratégia da empresa.",
      image: "https://decoims.com/derivative/6beb867b-0bfe-407e-84a3-833ae023a69d/esg.svg"
    },
    {
      title: "Rastreie toda a cadeia",
      description: "Tenha total visibilidade da origem e cada etapa do processo, fortalecendo a confiança do consumidor, consolidando a reputação da marca e mostrando compromisso real com transparência e sustentabilidade.",
      image: "https://decoims.com/derivative/17889849-da75-49c1-a48e-e58cc66dfcff/rastreabilidade.svg"
    }
  ],
}: Props) {
  return (
    <div style="background-color: #1D1B1D; padding: 96px 0 48px 0;">
      <div class="xl:container xl:mx-auto mx-5 md:mx-10">
        {/* Header Section */}
        <div class="text-center mb-16">
          {/* Eyebrow */}
          <p class="font-mono font-normal text-base uppercase tracking-wider mb-4 opacity-0 translate-y-8 transition-all duration-1000 ease-out scroll-animate" style="color: #A1ACAA;">
            Benefícios
          </p>
          
          <div
            class="font-normal inline-block leading-[100%] tracking-tight text-white opacity-0 translate-y-8 transition-all duration-1000 ease-out delay-200 scroll-animate"
            style="font-size: clamp(3rem, 6vw, 5rem); max-width: 900px; margin: 0 auto 32px auto;"
            data-i18n="benefitsTitle"
            dangerouslySetInnerHTML={{
              __html: title,
            }}
          />
          <p class="leading-[150%] md:text-lg text-lg max-w-3xl mx-auto opacity-0 translate-y-8 transition-all duration-1000 ease-out delay-400 scroll-animate" style="color: #A1ACAA;" data-i18n="benefitsDescription">
            {description}
          </p>
        </div>

        {/* Benefits Bento Grid */}
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 opacity-0 translate-y-8 transition-all duration-1000 ease-out delay-600 scroll-animate">
          {/* First 3 cards (top row) - each takes 2 columns */}
          {benefits.slice(0, 3).map((benefit, index) => (
            <div
              key={index}
              class="lg:col-span-2 bg-[#282524] rounded-2xl overflow-hidden flex flex-col h-full"
            >
              <div class="p-8">
                <h3 class="text-2xl font-semibold text-white mb-4 leading-tight" data-i18n={`benefit${index + 1}Title`}>
                  {benefit.title}
                </h3>
                <p class="text-white/80 text-base leading-relaxed mb-6" data-i18n={`benefit${index + 1}Desc`}>
                  {benefit.description}
                </p>
              </div>
              <div class="mt-auto">
                <img
                  src={benefit.image}
                  alt={benefit.title}
                  class="w-full h-auto object-contain"
                />
              </div>
            </div>
          ))}
          
          {/* Last 2 cards (bottom row) - each takes 3 columns for wider layout */}
          {benefits.slice(3, 5).map((benefit, index) => (
            <div
              key={index + 3}
              class="lg:col-span-3 bg-[#282524] rounded-2xl overflow-hidden flex flex-col h-full"
            >
              <div class="p-8">
                <h3 class="text-2xl font-semibold text-white mb-4 leading-tight" data-i18n={`benefit${index + 4}Title`}>
                  {benefit.title}
                </h3>
                <p class="text-white/80 text-base leading-relaxed mb-6" data-i18n={`benefit${index + 4}Desc`}>
                  {benefit.description}
                </p>
              </div>
              <div class="mt-auto">
                <img
                  src={benefit.image}
                  alt={benefit.title}
                  class="w-full h-auto object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Scroll Animation Script */}
      <script 
        type="text/javascript"
        dangerouslySetInnerHTML={{
          __html: `
            // Scroll Animation for elements
            (function() {
              function animateOnScroll() {
                const elements = document.querySelectorAll('.scroll-animate');
                
                elements.forEach((element) => {
                  const elementTop = element.getBoundingClientRect().top;
                  const elementVisible = 150;
                  
                  if (elementTop < window.innerHeight - elementVisible) {
                    element.style.opacity = '1';
                    element.style.transform = 'translateY(0)';
                  }
                });
              }
              
              // Throttle scroll events for performance
              let ticking = false;
              function requestTick() {
                if (!ticking) {
                  requestAnimationFrame(function() {
                    animateOnScroll();
                    ticking = false;
                  });
                  ticking = true;
                }
              }
              
              // Add event listeners
              window.addEventListener('scroll', requestTick, { passive: true });
              window.addEventListener('resize', animateOnScroll);
              
              // Initial check
              if (document.readyState === 'loading') {
                document.addEventListener('DOMContentLoaded', animateOnScroll);
              } else {
                setTimeout(animateOnScroll, 100);
              }
              
              // Also check on load
              window.addEventListener('load', animateOnScroll);
            })();
          `
        }}
      />
    </div>
  );
}
