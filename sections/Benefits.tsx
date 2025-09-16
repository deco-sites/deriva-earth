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
      image: "https://assets.decocache.com/derivative/7eb13cd6-0d93-405f-8792-df953f9d3474/movimento.svg"
    },
    {
      title: "Crie infinitas soluções",
      description: "Tenha acesso a um material único no Brasil e amplie o potencial criativo da sua marca de forma sustentável, inovadora e com impacto real. Das armações de óculos aos móveis, dê vida a produtos exclusivos e regenerativos.",
      image: "https://assets.decocache.com/derivative/fa4044d0-718a-4c3b-8fa4-ed396ca2deb7/possibilidades.svg"
    },
    {
      title: "Diferencie sua marca",
      description: "Crie soluções únicas e objetos de desejo que destacam sua marca, reforçando a autenticidade de marca e o engajamento com consumidores cada vez mais atentos à origem, significado e impacto de cada produto.",
      image: "https://assets.decocache.com/derivative/7f311acf-49c1-4b4e-92fc-8befa267c68b/diferenciacao.svg"
    },
    {
      title: "Transforme ESG em vantagem estratégica",
      description: "Adote uma produção mais coerente e mostre aos consumidores e investidores que seu compromisso com o impacto positivo é real, rastreável e parte central da estratégia da empresa.",
      image: "https://assets.decocache.com/derivative/ca704298-b22a-4570-9fb3-6637a0c4ffac/esg.svg"
    },
    {
      title: "Rastreie toda a cadeia",
      description: "Tenha total visibilidade da origem e cada etapa do processo, fortalecendo a confiança do consumidor, consolidando a reputação da marca e mostrando compromisso real com transparência e sustentabilidade.",
      image: "https://assets.decocache.com/derivative/e4099f66-5377-4140-a714-873fcc659a3c/rastreabilidade.svg"
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
            dangerouslySetInnerHTML={{
              __html: title,
            }}
          />
          <p class="leading-[150%] md:text-lg text-lg max-w-3xl mx-auto opacity-0 translate-y-8 transition-all duration-1000 ease-out delay-400 scroll-animate" style="color: #A1ACAA;">
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
                <h3 class="text-2xl font-semibold text-white mb-4 leading-tight">
                  {benefit.title}
                </h3>
                <p class="text-white/80 text-base leading-relaxed mb-6">
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
                <h3 class="text-2xl font-semibold text-white mb-4 leading-tight">
                  {benefit.title}
                </h3>
                <p class="text-white/80 text-base leading-relaxed mb-6">
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
