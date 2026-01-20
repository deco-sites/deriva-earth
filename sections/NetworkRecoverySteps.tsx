export interface RecoveryStep {
  id: number;
  title: string;
  subtitle: string;
  videoUrl: string;
}

export interface Props {
  eyebrow?: string;
  steps?: RecoveryStep[];
  stepDuration?: number; // duração em segundos para cada etapa
}

export default function NetworkRecoverySteps({
  eyebrow = "Operação",
  steps = [
    {
      id: 1,
      title: "INTERCEPTAR",
      subtitle: "Redes de pesca danificadas são recuperadas junto a comunidades pesqueiras do Rio de Janeiro, evitando que se tornem lixo ou sigam à deriva nos oceanos gerando a morte de animais.",
      videoUrl: "https://assets.decocache.com/deriva-earth/fa7f65f1-0f77-469e-910e-b2e0940bf74c/interceptar_lp-(1).mp4"
    },
    {
      id: 2,
      title: "PRÉ-PROCESSAR", 
      subtitle: "As redes passam por um processo de triagem, classificação e limpeza, garantindo que estejam em condições ideais para serem recicladas e transformadas em Derivative®.",
      videoUrl: "https://assets.decocache.com/deriva-earth/d634ccdf-823e-4546-a8b4-fc2f4c273074/limpandorede_lp-(1).mp4"
    },
    {
      id: 3,
      title: "TRANSFORMAR",
      subtitle: "O nylon das redes é reciclado e ganha nova vida como Derivative, uma matéria-prima de alto valor e propósito, pronta para dar origem a produtos que carregam inovação e impacto.",
      videoUrl: "https://assets.decocache.com/deriva-earth/59a2e9b5-f368-454c-88c7-45f787d91ce4/transformar_lp-(1).mp4"
    },
    {
      id: 4,
      title: "COLLAB",
      subtitle: "Marcas comprometidas com impacto positivo usam nosso material para criar produtos sustentáveis, de alto valor e propósito, ampliando o ciclo de regeneração dos oceanos.",
      videoUrl: "https://assets.decocache.com/deriva-earth/22337cd0-9767-4d20-983d-e688bc5f12e7/collab_lp-(1).mp4"
    }
  ],
  stepDuration = 12 // 12 segundos por etapa
}: Props) {
  const totalSteps = steps.length;

  return (
    <section 
      id="sistema"
      class="relative" 
      style="background-color: #1d1b1d; padding-top: 112px; padding-bottom: 48px;"
    >
      <style dangerouslySetInnerHTML={{
        __html: `
          @media (max-width: 1023px) {
            #sistema {
              overflow: visible !important;
            }
            #sistema .container {
              overflow: visible !important;
              max-width: 100vw !important;
            }
            #sistema video {
              max-width: 100% !important;
              width: 100% !important;
            }
            #sistema .max-w-4xl {
              max-width: 100% !important;
            }
            #sistema .aspect-ratio-container {
              aspect-ratio: unset !important;
              height: auto !important;
            }
            #sistema .video-container {
              aspect-ratio: 1/1 !important;
            }
          }
        `
      }} />
      <div class="container mx-auto px-4 lg:px-4 relative z-10 max-w-7xl">
        {/* Nova seção - Operação */}
        <div class="mb-12 lg:mb-16">
          <div class="max-w-4xl mx-auto text-center">
            {/* Eyebrow */}
            <p class="font-mono font-normal text-base uppercase tracking-wider mb-4" style="color: #A1ACAA;" data-i18n="networkEyebrow">
              OPERAÇÃO
            </p>

            {/* Título */}
            <h2 class="text-snow-white font-sans font-normal text-4xl lg:text-6xl xl:text-7xl tracking-tight leading-none mb-6" style="font-size: clamp(3rem, 6vw, 5rem);" data-i18n="networkTitle">
              Sistema Regenerativo
            </h2>

            {/* Descrição */}
            <p 
              class="text-base lg:text-lg leading-relaxed font-sans mx-auto"
              style="color: #A1ACAA; max-width: 800px;"
              data-i18n="networkDescription"
            >
              Nosso modelo interrompe ciclos de degradação e, com o tempo, cria condições para restaurar e fortalecer ecossistemas naturais e comunidades.
            </p>
          </div>
        </div>

        <div class="grid lg:grid-cols-[1fr_1.5fr] gap-8 lg:gap-12 items-start">
          
          {/* Coluna 1 - Conteúdo Dinâmico - Reduzida */}
          <div class="order-2 lg:order-1 flex flex-col justify-between h-full">
            {/* Container que simula a altura do vídeo */}
            <div class="relative aspect-ratio-container" style="aspect-ratio: 16/9;">
              {/* Layout flexível para distribuir elementos verticalmente */}
              <div class="h-full flex flex-col justify-between py-4">
                {/* Conteúdo Principal que muda - Posicionado no topo */}
                <div class="flex flex-col space-y-3 max-w-md">
                  {/* Eyebrow */}
                  <p class="font-bold text-sm uppercase tracking-wider" style="color: #A1ACAA;" data-i18n="networkEyebrow">
                    {eyebrow}
                  </p>

                  {/* Título Dinâmico */}
                  <div id="step-title" class="transition-all duration-500 ease-in-out">
                    <h2 class="text-snow-white font-mono font-normal text-xl lg:text-2xl xl:text-3xl tracking-tight leading-none" data-i18n="networkStep1Title">
                      {steps[0].title}
                    </h2>
                  </div>

                  {/* Subtitle Dinâmico */}
                  <div id="step-subtitle" class="transition-all duration-500 ease-in-out">
                    <p 
                      class="text-base lg:text-lg leading-relaxed font-sans max-w-md"
                      style="color: #A1ACAA;"
                      data-i18n="networkStep1Desc"
                    >
                      {steps[0].subtitle}
                    </p>
                  </div>
                </div>

                {/* Componente Steps no rodapé - Com margem superior */}
                <div class="flex justify-start mt-8">
                  <StepsProgress 
                    totalSteps={totalSteps} 
                    stepDuration={stepDuration}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Coluna 2 - Vídeo Dinâmico - Ampliada */}
          <div class="order-1 lg:order-2 flex items-start justify-center">
            <div class="w-full max-w-4xl lg:max-w-4xl">
              <div 
                class="relative w-full bg-mineral-black rounded-2xl overflow-hidden video-container"
                style="aspect-ratio: 16/9; border: 2px solid rgba(255, 255, 255, 0.2); max-width: 100%;"
              >
                <video 
                  id="step-video"
                  class="w-full h-full object-cover transition-opacity duration-500"
                  autoplay 
                  muted 
                  loop 
                  playsinline
                >
                  <source src={steps[0].videoUrl} type="video/mp4" />
                  Seu navegador não suporta vídeos.
                </video>
              </div>
            </div>
          </div>

        </div>
      </div>


      {/* Script de Animação - Versão Simplificada */}
      <script type="text/javascript" dangerouslySetInnerHTML={{
        __html: `
          (function() {
            console.log('🚀 NetworkRecoverySteps: NOVA VERSÃO iniciada - ${Date.now()}');
            
            const steps = ${JSON.stringify(steps)};
            const stepDuration = ${stepDuration * 1000};
            const totalSteps = steps.length;
            let currentStep = 0;
            let animationInterval;

            console.log('📊 Configuração:', { totalSteps, stepDuration });

            function forceUpdateContent(stepIndex) {
              const stepStartTime = Date.now();
              console.log('🔄 Forçando update para step:', stepIndex, 'às', stepStartTime);
              
              const step = steps[stepIndex];
              const titleEl = document.getElementById('step-title');
              const subtitleEl = document.getElementById('step-subtitle');
              const videoEl = document.getElementById('step-video');

              if (!titleEl || !subtitleEl || !videoEl) {
                console.error('❌ Elementos não encontrados!');
                return;
              }

              console.log('✅ Elementos encontrados, atualizando para:', step.title);

              // Update imediato sem fade com tradução
              const titleKey = 'networkStep' + (stepIndex + 1) + 'Title';
              const subtitleKey = 'networkStep' + (stepIndex + 1) + 'Desc';
              const titleText = window.DerivaI18n?.t(titleKey) || step.title;
              const subtitleText = window.DerivaI18n?.t(subtitleKey) || step.subtitle;
              
              titleEl.innerHTML = '<h2 class="text-snow-white font-mono font-normal text-xl lg:text-2xl xl:text-3xl tracking-tight leading-none" data-i18n="' + titleKey + '">' + titleText + '</h2>';
              subtitleEl.innerHTML = '<p class="text-base lg:text-lg leading-relaxed font-sans max-w-md" style="color: #A1ACAA;" data-i18n="' + subtitleKey + '">' + subtitleText + '</p>';
              
              // Force video update
              videoEl.src = step.videoUrl;
              videoEl.load();
              
              const updateEndTime = Date.now();
              console.log('📝 Conteúdo atualizado para:', step.title, 'em', updateEndTime - stepStartTime, 'ms');
            }

            function advanceStep() {
              const previousStep = currentStep;
              currentStep = (currentStep + 1) % totalSteps;
              
              const now = Date.now();
              console.log('⏭️ Avançando de step', previousStep, 'para', currentStep, 'às', now);
              console.log('⏱️ Próxima troca em', stepDuration, 'ms');
              
              forceUpdateContent(currentStep);
              updateProgressIndicators(currentStep);
            }

            function updateProgressIndicators(activeStep) {
              // Atualizar dots lineares
              for (let i = 0; i < totalSteps; i++) {
                const dot = document.querySelector('[data-step="' + i + '"]');
                if (dot) {
                  if (i === activeStep) {
                    dot.classList.add('active');
                  } else {
                    dot.classList.remove('active');
                  }
                }
              }
              
              // Atualizar setores ativos do radial controller
              for (let i = 0; i < totalSteps; i++) {
                const activeSector = document.querySelector('[data-active-sector="' + i + '"]');
                if (activeSector) {
                  if (i === activeStep) {
                    activeSector.classList.add('active');
                  } else {
                    activeSector.classList.remove('active');
                  }
                }
              }
            }

            function startCycle() {
              console.log('🎬 Iniciando ciclo de animação...');
              
              // Limpar qualquer intervalo existente
              if (animationInterval) {
                clearInterval(animationInterval);
                console.log('🧹 Intervalo anterior limpo');
              }
              
              // Inicializar com o primeiro step ativo
              updateProgressIndicators(0);
              
              // Começar ciclo após 2 segundos
              setTimeout(() => {
                console.log('🚀 Primeira troca de step em', stepDuration, 'ms');
                animationInterval = setInterval(() => {
                  console.log('⏰ Intervalo executado - tempo configurado:', stepDuration, 'ms');
                  advanceStep();
                }, stepDuration);
                console.log('✨ Intervalo iniciado com', stepDuration, 'ms');
              }, 2000);
            }

            // Inicialização única e controlada
            let isInitialized = false;
            
            function safeInit() {
              if (!isInitialized) {
                isInitialized = true;
                console.log('🔒 Inicialização única executada');
                startCycle();
              }
            }
            
            // Tentar inicializar quando DOM estiver pronto
            if (document.readyState === 'loading') {
              document.addEventListener('DOMContentLoaded', safeInit);
            } else {
              safeInit();
            }
            
            // Ativar o primeiro setor imediatamente
            setTimeout(() => {
              updateProgressIndicators(0);
            }, 100);

            // Cleanup
            window.addEventListener('beforeunload', () => {
              if (animationInterval) clearInterval(animationInterval);
            });

            // Debug helper - manual advance
            window.debugAdvanceStep = () => {
              console.log('🔧 Debug: Forçando próximo step');
              advanceStep();
            };

            // Debug helper - test click functionality
            window.debugTestClick = (stepIndex) => {
              console.log('🔧 Debug: Testando clique no step', stepIndex);
              goToStep(stepIndex);
            };

            // Debug helper - check elements
            window.debugCheckElements = () => {
              console.log('🔍 Verificando elementos...');
              for (let i = 0; i < totalSteps; i++) {
                const element = document.querySelector('[data-step-icon="' + i + '"]');
                console.log('Step', i, ':', element);
              }
            };

            // Função para navegar para um step específico
            function goToStep(stepIndex) {
              if (stepIndex >= 0 && stepIndex < totalSteps) {
                console.log('🎯 Navegando para step:', stepIndex);
                
                // Parar o ciclo automático
                if (animationInterval) {
                  clearInterval(animationInterval);
                  animationInterval = null;
                }
                
                // Atualizar step atual para o clicado
                currentStep = stepIndex;
                
                // Forçar atualização do conteúdo
                forceUpdateContent(currentStep);
                updateProgressIndicators(currentStep);
                
                // Reiniciar o ciclo a partir do step atual após 3 segundos
                setTimeout(() => {
                  console.log('🔄 Reiniciando ciclo automático a partir do step:', currentStep);
                  startCycleFromCurrent();
                }, 3000);
              }
            }

            // Função para iniciar ciclo a partir do step atual
            function startCycleFromCurrent() {
              console.log('🎬 Iniciando ciclo a partir do step:', currentStep);
              
              // Limpar qualquer intervalo existente
              if (animationInterval) {
                clearInterval(animationInterval);
                console.log('🧹 Intervalo anterior limpo');
              }
              
              // Inicializar com o step atual ativo
              updateProgressIndicators(currentStep);
              
              // Começar ciclo após 2 segundos
              setTimeout(() => {
                console.log('🚀 Primeira troca de step em', stepDuration, 'ms a partir do step:', currentStep);
                animationInterval = setInterval(() => {
                  console.log('⏰ Intervalo executado - tempo configurado:', stepDuration, 'ms');
                  advanceStep();
                }, stepDuration);
                console.log('✨ Intervalo iniciado com', stepDuration, 'ms');
              }, 2000);
            }

            // Adicionar event listeners para os ícones clicáveis
            function addClickListeners() {
              console.log('🔍 Tentando adicionar click listeners...');
              
              for (let i = 0; i < totalSteps; i++) {
                const iconElement = document.querySelector('[data-step-icon="' + i + '"]');
                console.log('🎯 Procurando elemento [data-step-icon="' + i + '"]:', iconElement);
                
                if (iconElement) {
                  console.log('✅ Elemento encontrado para step', i, ':', iconElement);
                  iconElement.style.cursor = 'pointer';
                  
                  iconElement.addEventListener('click', (e) => {
                    console.log('🖱️ Clique detectado no step', i);
                    e.preventDefault();
                    e.stopPropagation();
                    goToStep(i);
                  });
                  
                  // Adicionar hover effect
                  iconElement.addEventListener('mouseenter', () => {
                    iconElement.style.opacity = '0.7';
                    iconElement.style.transform = 'scale(1.1)';
                  });
                  
                  iconElement.addEventListener('mouseleave', () => {
                    iconElement.style.opacity = '1';
                    iconElement.style.transform = 'scale(1)';
                  });
                  
                  console.log('🎉 Event listeners adicionados para step', i);
                } else {
                  console.log('❌ Elemento NÃO encontrado para step', i);
                }
              }
            }

            // Adicionar listeners após um pequeno delay para garantir que os elementos existam
            setTimeout(() => {
              console.log('⏰ Executando addClickListeners após delay...');
              addClickListeners();
            }, 1000);
          })();
        `
      }} />
    </section>
  );
}

// Componente Steps Progress - NOVO DESIGN RADIAL CORRIGIDO
function StepsProgress({ totalSteps, stepDuration }: { totalSteps: number; stepDuration: number }) {
  // Ícones para cada etapa (usando URLs externas)
  const stepIcons = [
    // INTERCEPTAR - Rede de pesca (ícone de grade)
    `<img src="https://assets.decocache.com/derivative/0b024ea2-1cec-4df8-b13a-bbdc0c19cecb/grid_4x4_520dp_F7F7F7_FILL0_wght400_GRAD0_opsz48.svg" width="20" height="20" alt="Interceptar" />`,
    // PRÉ-PROCESSAR - Triagem/Classificação (ícone de gota d'água)
    `<img src="https://assets.decocache.com/derivative/f5216741-1b7d-44b7-a8e2-e4adc4546373/water_drop_520dp_F7F7F7_FILL0_wght400_GRAD0_opsz48.svg" width="20" height="20" alt="Pré-processar" />`,
    // TRANSFORMAR - Reciclagem (ícone de ciclo)
    `<img src="https://assets.decocache.com/derivative/90d1dccf-8be5-45ef-8e34-da10ed116cc9/cycle_520dp_F7F7F7_FILL0_wght400_GRAD0_opsz48.svg" width="20" height="20" alt="Transformar" />`,
    // COLLAB - Colaboração/Empresas (ícone de design services)
    `<img src="https://assets.decocache.com/derivative/a0a6b7f8-cc97-4b8a-b53a-4d6afa5f1d05/design_services_520dp_F7F7F7_FILL0_wght400_GRAD0_opsz48.svg" width="20" height="20" alt="Collab" />`
  ];

  return (
    <div class="flex flex-col items-center space-y-6">
      {/* Radial Controller */}
      <div class="relative w-48 h-48">
        {/* Círculo externo com preenchimento */}
        <div class="absolute inset-0 w-full h-full rounded-full bg-[#282524] border-2 border-snow-white/30"></div>
        
        {/* Linhas divisórias (vertical e horizontal) */}
        <div class="absolute top-0 left-1/2 w-0.5 h-full bg-snow-white/30 transform -translate-x-1/2 z-10"></div>
        <div class="absolute left-0 top-1/2 w-full h-0.5 bg-snow-white/30 transform -translate-y-1/2 z-10"></div>
        
        {/* Círculo central com cor sólida e z-index alto */}
        <div class="absolute inset-12 w-24 h-24 rounded-full bg-[#2F2D2C] flex items-center justify-center z-20">
          <span class="text-snow-white text-xs font-medium" data-i18n="networkSystem">SISTEMA</span>
        </div>
        
        {/* Setor ativo - apenas no arco externo */}
        <div class="absolute inset-0 w-full h-full">
          {/* Top-left (INTERCEPTAR) - Setor ativo fino */}
          <div 
            data-segment="0"
            class="absolute top-0 left-0 w-24 h-24"
          >
            <div class="absolute top-0 left-0 w-24 h-24 rounded-tl-full border-l-4 border-t-4 border-snow-white opacity-0 transition-all duration-500" data-active-sector="0"></div>
          </div>
          
          {/* Top-right (PRÉ-PROCESSAR) - Setor ativo fino */}
          <div 
            data-segment="1"
            class="absolute top-0 right-0 w-24 h-24"
          >
            <div class="absolute top-0 right-0 w-24 h-24 rounded-tr-full border-r-4 border-t-4 border-snow-white opacity-0 transition-all duration-500" data-active-sector="1"></div>
          </div>
          
          {/* Bottom-right (TRANSFORMAR) - Setor ativo fino */}
          <div 
            data-segment="2"
            class="absolute bottom-0 right-0 w-24 h-24"
          >
            <div class="absolute bottom-0 right-0 w-24 h-24 rounded-br-full border-r-4 border-b-4 border-snow-white opacity-0 transition-all duration-500" data-active-sector="2"></div>
          </div>
          
          {/* Bottom-left (COLLAB) - Setor ativo fino */}
          <div 
            data-segment="3"
            class="absolute bottom-0 left-0 w-24 h-24"
          >
            <div class="absolute bottom-0 left-0 w-24 h-24 rounded-bl-full border-l-4 border-b-4 border-snow-white opacity-0 transition-all duration-500" data-active-sector="3"></div>
          </div>
        </div>
        
        {/* Ícones centralizados entre os círculos - REPOSICIONADOS */}
        {/* Top-left (INTERCEPTAR) */}
        <div class="absolute top-2 left-2 w-20 h-20 flex items-center justify-center">
          <div class="w-5 h-5 text-snow-white transition-all duration-200" data-step-icon="0">
            <div dangerouslySetInnerHTML={{ __html: stepIcons[0] }}></div>
          </div>
        </div>
        
        {/* Top-right (PRÉ-PROCESSAR) */}
        <div class="absolute top-2 right-2 w-20 h-20 flex items-center justify-center">
          <div class="w-5 h-5 text-snow-white transition-all duration-200" data-step-icon="1">
            <div dangerouslySetInnerHTML={{ __html: stepIcons[1] }}></div>
          </div>
        </div>
        
        {/* Bottom-right (TRANSFORMAR) */}
        <div class="absolute bottom-2 right-2 w-20 h-20 flex items-center justify-center">
          <div class="w-5 h-5 text-snow-white transition-all duration-200" data-step-icon="2">
            <div dangerouslySetInnerHTML={{ __html: stepIcons[2] }}></div>
          </div>
        </div>
        
        {/* Bottom-left (COLLAB) */}
        <div class="absolute bottom-2 left-2 w-20 h-20 flex items-center justify-center">
          <div class="w-5 h-5 text-snow-white transition-all duration-200" data-step-icon="3">
            <div dangerouslySetInnerHTML={{ __html: stepIcons[3] }}></div>
          </div>
        </div>
      </div>

      <style>{`
        [data-segment] {
          transition: all 0.5s ease-in-out;
        }
        
        [data-active-sector].active {
          opacity: 1 !important;
          box-shadow: 0 0 20px rgba(255, 255, 255, 0.4);
        }
        
        /* Animação de rotação suave para o radial controller */
        .radial-controller {
          transition: transform 0.5s ease-in-out;
        }
      `}</style>
    </div>
  );
}