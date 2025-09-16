import Icon from "site/components/ui/Icon.tsx";
import { asset } from "@deco/deco/htmx";

export interface CTA {
  id?: string;
  href: string;
  text: string;
  outline?: boolean;
}

export interface Service {
  title: string;
  subtitle?: string;
  /** @format rich-text */
  description: string;
  tags?: string[];
  icon?: string;
}

export interface Props {
  title?: string;
  subtitle?: string;
  description?: string;
  cta?: CTA;
  services?: Service[];
}

export default function Services({
  title = "Para marcas que querem fazer diferente",
  subtitle = "Soluções B2B",
  description = "O Derivative® não é apenas um material. É uma oportunidade para sua marca inovar com propósito, criar produtos desejáveis e se conectar a consumidores que valorizam impacto real.",
  cta,
  services = [
    {
      title: "Derivative®",
      subtitle: "Fornecimento de material regenerativo",
      description: "Fornecemos Derivative® para marcas que querem inovar em seus produtos com um material que carrega exclusividade, propósito e regeneração.",
      icon: "https://assets.decocache.com/derivative/6563a34f-62c5-4a35-a71d-3a1e44bc0170/services_1.svg",
      tags: ["Material Exclusivo", "Impacto Regenerativo", "Narrativa de Propósito"]
    },
    {
      title: "Deriva Way",
      subtitle: "Co-criação de soluções inteligentes",
      description: "Nossa frente criativa combina design, engenharia, biologia e tecnologia para co-criar soluções de produto inteligentes e desejadas usando Derivative®. Vamos além do produto, estruturamos o seu ciclo de vida para que sua existência seja coerente e a experiência com o cliente seja memorável.",
      icon: "https://assets.decocache.com/derivative/ef364b7e-91ce-4e8b-a4d3-0e2c53d1e06b/services_2.jpg",
      tags: ["Design Multidisciplinar", "Ciclo de Vida Completo", "Objetos de Desejo"]
    },
    {
      title: "Own your Derivative®",
      subtitle: "Circularidade completa",
      description: "Desenvolvemos Derivative® exclusivo a partir dos resíduos têxteis pré-consumo da sua própria produção. Assim, o que antes seria descartado retorna para o ecossistema de produtos, fortalecendo sua marca e promovendo uma economia circular.",
      icon: "https://assets.decocache.com/derivative/f544e9c6-40e2-4bdc-85f8-9adf0c9e6daf/services_3.jpg",
      tags: ["Economia Circular", "Resíduos Próprios", "Conexão Oceânica"]
    }
  ],
}: Props) {
  return (
    <div id="services" style="background-color: #1d1b1d; padding: 96px 0 48px 0;">
      {/* Lottie Player CDN */}
      <script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>
      
      {/* CSS for animations */}
      <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        .spinner-loading {
          animation: spin 1s linear infinite !important;
        }
        lottie-player {
          width: 100%;
          height: 100%;
        }
        .chevron-visible {
          color: #ffffff !important;
          stroke: currentColor !important;
          stroke-width: 3 !important;
          opacity: 1 !important;
          fill: none !important;
        }
        .eyebrow-text {
          font-family: 'Geist Mono', 'JetBrains Mono', monospace !important;
          font-size: 16px !important;
          font-weight: 400 !important;
          letter-spacing: 0.1em !important;
          text-transform: uppercase !important;
          color: #A1ACAA !important;
        }
        .title-text {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important;
          font-weight: 400 !important;
          line-height: 1.1 !important;
          font-size: clamp(3rem, 6vw, 5rem) !important;
          max-width: 900px !important;
          margin: 0 auto !important;
          color: #ffffff !important;
        }
        .subtitle-text {
          max-width: 800px !important;
          margin: 0 auto !important;
          color: #A1ACAA !important;
        }
        .service-description-short {
          max-width: 600px !important; /* Increased from max-w-md */
        }
        
        /* Service icon containers - Desktop */
        #service-icon-container {
          width: 100px !important;
          height: 100px !important;
          min-width: 100px !important;
          min-height: 100px !important;
          max-width: 100px !important;
          max-height: 100px !important;
          background: linear-gradient(135deg, rgba(255,255,255,0.25) 0%, rgba(255,255,255,0.05) 100%) !important;
          border-radius: 50% !important;
          position: relative !important;
          padding: 2px !important;
        }
        
        #service-icon-container::before {
          content: '' !important;
          position: absolute !important;
          top: 0 !important;
          left: 0 !important;
          right: 0 !important;
          bottom: 0 !important;
          border-radius: 50% !important;
          background: linear-gradient(135deg, rgba(255,255,255,0.25) 0%, rgba(255,255,255,0.05) 100%) !important;
          z-index: 1 !important;
        }
        
        #service-icon-container img {
          position: relative !important;
          z-index: 2 !important;
          border-radius: 50% !important;
        }
        
        /* Service icon containers - Mobile */
        #service-icon-container-mobile {
          width: 80px !important;
          height: 80px !important;
          min-width: 80px !important;
          min-height: 80px !important;
          max-width: 80px !important;
          max-height: 80px !important;
          background: linear-gradient(135deg, rgba(255,255,255,0.25) 0%, rgba(255,255,255,0.05) 100%) !important;
          border-radius: 50% !important;
          position: relative !important;
          padding: 2px !important;
        }
        
        #service-icon-container-mobile::before {
          content: '' !important;
          position: absolute !important;
          top: 0 !important;
          left: 0 !important;
          right: 0 !important;
          bottom: 0 !important;
          border-radius: 50% !important;
          background: linear-gradient(135deg, rgba(255,255,255,0.25) 0%, rgba(255,255,255,0.05) 100%) !important;
          z-index: 1 !important;
        }
        
        #service-icon-container-mobile img {
          position: relative !important;
          z-index: 2 !important;
          border-radius: 50% !important;
        }
        /* Mobile overflow prevention - apenas para esta seção */
        @media (max-width: 1023px) {
          #services {
            overflow: visible !important;
          }
          #services .container {
            overflow: visible !important;
            max-width: 100vw !important;
          }
          .service-card {
            max-width: 100% !important;
            overflow: visible !important;
          }
        }
        /* Mobile tags spacing */
        @media (max-width: 1023px) {
          .service-tags-mobile {
            margin-bottom: 2rem !important;
            padding-bottom: 1rem !important;
          }
          .service-tag-mobile {
            padding: 0.625rem 1rem !important;
            margin: 0.125rem !important;
            display: inline-block !important;
          }
        }
        
        /* Remove default list markers from summary elements - Mobile only */
        @media (max-width: 1023px) {
          .service-card summary {
            list-style: none !important;
            display: block !important;
          }
          
          .service-card summary::-webkit-details-marker {
            display: none !important;
          }
          
          .service-card summary::marker {
            display: none !important;
          }
        }
        @media (min-width: 1024px) {
          .title-text {
            margin: 0 auto !important;
          }
          .subtitle-text {
            margin: 0 auto !important;
          }
        }
        .cta-button {
          display: inline-flex !important;
          align-items: center !important;
          justify-content: center !important;
          padding: 12px 24px !important;
          background: linear-gradient(135deg, #ffffff 0%, #f0f0f0 100%) !important;
          color: #000000 !important;
          border: none !important;
          border-radius: 6px !important;
          font-weight: 500 !important;
          font-size: 14px !important;
          text-decoration: none !important;
          transition: all 0.3s ease !important;
          text-align: center !important;
          min-height: 44px !important;
        }
        .cta-button:hover {
          background: linear-gradient(135deg, #f0f0f0 0%, #e0e0e0 100%) !important;
          transform: translateY(-1px) !important;
          box-shadow: 0 4px 12px rgba(255, 255, 255, 0.2) !important;
        }
      `}</style>
      
      {/* SVG Gradient Definition */}
      <svg width="0" height="0" style="position: absolute;">
        <defs>
          <linearGradient id="chevron-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style="stop-color:rgba(255,255,255,0.9);stop-opacity:1" />
            <stop offset="100%" style="stop-color:rgba(255,255,255,1);stop-opacity:1" />
          </linearGradient>
        </defs>
      </svg>
      <div class="container mx-auto px-4 lg:px-0 text-sm max-w-7xl">
        <div class="flex flex-col gap-10 lg:gap-16">
          {/* Header Content */}
          <div class="text-center space-y-8">
            <div class="space-y-12">
              <p class="eyebrow-text">
                {subtitle}
              </p>
              <h2 class="text-white title-text">
                {title}
              </h2>
            </div>
            <div style="margin-top: 32px;">
              <p class="text-lg leading-relaxed subtitle-text" style="color: rgba(255, 255, 255, 0.85);">
                {description}
              </p>
            </div>
            {cta && (
              <a
                key={cta?.id}
                id={cta?.id}
                href={cta?.href}
                target={cta?.href.includes("http") ? "_blank" : "_self"}
                class="cta-button"
              >
                {cta?.text}
              </a>
            )}
          </div>

          {/* Services Accordion */}
          <div class="w-full">
            <div class="space-y-4">
              {services?.map((service, index) => (
                <details 
                  key={index}
                  class="group bg-white/5 rounded-lg transition-all duration-300 relative overflow-hidden service-card"
                >
                  {/* Background image when expanded */}
                  {service.icon && (
                    <div class="absolute inset-0 opacity-0 group-open:opacity-100 transition-opacity duration-700 ease-out pointer-events-none">
                      <img 
                        src={service.icon}
                        alt=""
                        class="w-full h-full object-cover scale-150 group-open:scale-100 transition-transform duration-700 ease-out"
                      />
                    </div>
                  )}
                  
                  <summary class="cursor-pointer p-6 flex items-center justify-between relative z-10">
                    {/* Layout Desktop - Original */}
                    <div class="hidden lg:flex items-center gap-6 flex-1">
                      {/* Container circular com imagem */}
                      <div 
                        id="service-icon-container"
                        class="flex-shrink-0 rounded-full overflow-hidden group-open:opacity-30 transition-opacity duration-700" 
                      >
                        {service.icon && (
                          <img 
                            src={service.icon}
                            alt={`Ícone ${service.title}`}
                            class="w-full h-full object-cover group-open:scale-110 transition-transform duration-700 ease-out"
                          />
                        )}
                      </div>
                      {/* Título do serviço */}
                      <h3 class="text-xl font-mono font-normal text-white group-open:text-white/90 transition-colors uppercase tracking-wide whitespace-nowrap">
                        {service.title}
                      </h3>
                      
                      {/* Subtítulo do serviço */}
                      <p class="text-base font-sans italic ml-12" style="color: rgba(243, 245, 245, 0.7);">
                        {service.subtitle || ""}
                      </p>
                    </div>

                    {/* Layout Mobile - Novo */}
                    <div class="flex lg:hidden items-start gap-4 flex-1">
                      {/* Container esquerdo - círculo e texto */}
                      <div class="flex flex-col items-start gap-3 flex-1">
                        {/* Container circular com imagem */}
                        <div 
                          id="service-icon-container-mobile"
                          class="rounded-full overflow-hidden group-open:opacity-30 transition-opacity duration-700" 
                        >
                          {service.icon && (
                            <img 
                              src={service.icon}
                              alt={`Ícone ${service.title}`}
                              class="w-full h-full object-cover group-open:scale-110 transition-transform duration-700 ease-out"
                            />
                          )}
                        </div>
                        
                        {/* Container de texto mobile */}
                        <div class="flex flex-col items-start">
                          {/* Título do serviço */}
                          <h3 class="text-lg font-mono font-normal text-white group-open:text-white/90 transition-colors uppercase tracking-wide">
                            {service.title}
                          </h3>
                          
                          {/* Subtítulo do serviço - embaixo do título */}
                          <p class="text-sm font-sans italic mt-1" style="color: rgba(243, 245, 245, 0.7);">
                            {service.subtitle || ""}
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    {/* Chevron */}
                    <span class="flex-none transition-transform duration-300 group-open:rotate-180">
                      <Icon
                        id="ChevronDown"
                        width={24}
                        height={24}
                        strokeWidth={3}
                        class="chevron-visible"
                      />
                    </span>
                  </summary>
                  
                   {/* Layout Desktop - Original */}
                   <div class="hidden lg:block px-6 pb-8 group-open:animate-fadeIn relative z-10" style="margin-left: 104px !important; min-height: 200px;">
                    <div class="flex gap-8 items-start">
                      {/* Lottie Animation Area */}
                      <div class="flex-shrink-0 flex items-center justify-center" style="width: 300px; height: 250px; min-width: 300px; min-height: 250px; background: transparent;">
                        <div
                          id={`lottie-container-${index}`}
                          style="width: 280px; height: 230px; overflow: hidden;"
                          dangerouslySetInnerHTML={{
                            __html: `<lottie-player
                              src="${index === 0 ? asset("/Scene_derivative.json") : index === 2 ? asset("/Scene-way.json") : asset("/Scene-1.json")}"
                              background="transparent"
                              speed="1"
                              style="width: 140%; height: 140%; transform: translate(-14.3%, -14.3%);"
                              loop
                              autoplay>
                            </lottie-player>`
                          }}
                        ></div>
                      </div>
                      
                      {/* Content Area */}
                      <div class="flex-1 space-y-6">
                        <p class="leading-relaxed service-description-short text-base" style="color: #F3F5F5;">
                          {service.description}
                        </p>
                        
                        {/* Tags */}
                        {service.tags && service.tags.length > 0 && (
                          <div class="flex flex-wrap gap-3 mt-6 mb-8">
                            {service.tags.map((tag, tagIndex) => (
                              <span 
                                key={tagIndex}
                                class="px-4 py-2 text-xs font-normal rounded-full border uppercase"
                                style="color: #F3F5F5; border-color: rgba(255,255,255,0.2); background-color: rgba(255,255,255,0.15); font-family: 'Geist Mono', 'JetBrains Mono', monospace;"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Layout Mobile - Novo */}
                  <div class="block lg:hidden px-4 pb-6 group-open:animate-fadeIn relative z-10" style="margin-left: 0 !important; min-height: 200px;">
                    <div class="flex flex-col gap-6 items-start">
                      {/* Lottie Animation Area */}
                      <div class="flex-shrink-0 flex items-center justify-center w-full" style="height: 200px; min-height: 200px; background: transparent;">
                        <div
                          id={`lottie-container-mobile-${index}`}
                          class="w-full max-w-sm"
                          style="height: 200px; overflow: hidden;"
                          dangerouslySetInnerHTML={{
                            __html: `<lottie-player
                              src="${index === 0 ? asset("/Scene_derivative.json") : index === 2 ? asset("/Scene-way.json") : asset("/Scene-1.json")}"
                              background="transparent"
                              speed="1"
                              style="width: 100%; height: 100%;"
                              loop
                              autoplay>
                            </lottie-player>`
                          }}
                        ></div>
                      </div>
                      
                      {/* Content Area */}
                      <div class="flex-1 space-y-4 w-full">
                        <p class="leading-relaxed text-base" style="color: #F3F5F5;">
                          {service.description}
                        </p>
                        
                        {/* Tags */}
                        {service.tags && service.tags.length > 0 && (
                          <div class="flex flex-wrap gap-2 mt-6 mb-8 service-tags-mobile" style="margin-bottom: 2rem !important;">
                            {service.tags.map((tag, tagIndex) => (
                              <span 
                                key={tagIndex}
                                class="px-4 py-2.5 text-xs font-normal rounded-full border service-tag-mobile uppercase"
                                style="color: #F3F5F5 !important; border-color: rgba(255,255,255,0.2) !important; background-color: rgba(255,255,255,0.15) !important; padding: 0.625rem 1rem !important; margin: 0.125rem !important; font-family: 'Geist Mono', 'JetBrains Mono', monospace !important;"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </div>
      

      {/* Lottie Player Monitor - Otimizado para Mobile */}
      <script type="text/javascript">{`
        console.log('Services: Script loaded');
        
        document.addEventListener('DOMContentLoaded', function() {
          console.log('Services: DOM loaded');
          
          // Função para inicializar Lottie players
          function initLottiePlayers() {
            const lottieElements = document.querySelectorAll('lottie-player');
            console.log('Services: Found', lottieElements.length, 'lottie-player elements');
            
            lottieElements.forEach((player, index) => {
              console.log('Services: Monitoring lottie player', index);
              
              // Add error handler
              player.addEventListener('error', () => {
                console.log('Services: Lottie player', index, 'failed to load');
              });
              
              // Add ready handler
              player.addEventListener('ready', () => {
                console.log('Services: Lottie player', index, 'is ready and playing');
              });
              
              // Force play if needed
              if (player.play && typeof player.play === 'function') {
                player.play();
              }
            });
          }
          
          // Inicialização imediata para mobile, delay para desktop
          const isMobile = window.innerWidth < 1024;
          
          if (isMobile) {
            // Mobile: inicialização imediata
            initLottiePlayers();
          } else {
            // Desktop: delay de 1 segundo
            setTimeout(initLottiePlayers, 1000);
          }
        });
      `}</script>
    </div>
  );
}
