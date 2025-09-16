export interface MissionCard {
  title: string;
  description: string;
}

export interface Props {
  eyebrow?: string;
  mission?: string;
  cards?: MissionCard[];
}

export default function Mission({
  eyebrow = "Nossa missão",
  mission = "COMBATER A PESCA FANTASMA, REGENERANDO OS OCEANOS E FORTALECENDO COMUNIDADES PESQUEIRAS",
  cards = [
    {
      title: "PESCA FANTASMA",
      description: "Redes de pesca são abandonadas, perdidas ou descartadas nos mares, gerando a morte de milhares de animais."
    },
    {
      title: "+640 MIL TONELADAS",
      description: "de materiais de pesca são descartados anualmente nos mares"
    }
  ]
}: Props) {
  return (
    <div id="mission" style="background-color: #1d1b1d;">
      <section 
        class="relative mx-4 lg:mx-8 py-20 lg:py-32" 
        style="background-color: #fcfafc; border-radius: 24px; overflow: hidden; background-image: url('https://assets.decocache.com/derivative/6ea633f1-547f-4478-89c0-97356b6354a9/blue-texture.svg'); background-size: cover; background-position: center; background-repeat: no-repeat;"
      >
        {/* Background Pattern */}
        <div class="absolute inset-0 opacity-15">
          <img 
            src="https://assets.decocache.com/derivative/6ea633f1-547f-4478-89c0-97356b6354a9/blue-texture.svg" 
            alt="Blue texture background"
            class="w-full h-full object-cover object-center"
          />
        </div>

        <div class="container mx-auto px-4 lg:px-8 relative z-10 h-full flex flex-col">
          <div class="text-center max-w-4xl mx-auto flex-1 flex flex-col justify-center">
            {/* Eyebrow */}
            <p class="font-bold text-sm uppercase tracking-wider mb-6 text-white opacity-0 translate-y-8 transition-all duration-1000 ease-out scroll-animate">
              {eyebrow}
            </p>

            {/* Mission Text with Word-by-Word Focus Effect */}
            <div id="mission-container" class="font-mono font-normal text-4xl lg:text-5xl xl:text-6xl tracking-tight leading-none text-white opacity-0 translate-y-8 transition-all duration-1000 ease-out delay-200 scroll-animate">
              {mission.split(' ').map((word, index) => (
                <span 
                  key={index}
                  id={`word-${index}`}
                  class="inline-block mr-2 transition-all duration-500"
                  style="filter: blur(8px); opacity: 0.3;"
                >
                  {word}
                </span>
              ))}
            </div>
          </div>

          {/* Info Cards at Bottom */}
          <div class="mt-auto pt-20">
            {/* Divider line */}
            <div class="flex justify-center mb-8 opacity-0 translate-y-8 transition-all duration-1000 ease-out delay-250 scroll-animate">
              <div class="w-24 h-px" style="background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);"></div>
            </div>
            
            {/* Eyebrow for problem section */}
            <div class="text-center mb-12 opacity-0 translate-y-8 transition-all duration-1000 ease-out delay-300 scroll-animate">
              <p class="font-bold text-sm uppercase tracking-wider text-white">
                O PROBLEMA
              </p>
            </div>
            
            <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 relative opacity-0 translate-y-8 transition-all duration-1000 ease-out delay-400 scroll-animate">
              {/* Info 1 */}
              <div class="text-center">
                <h3 class="text-white font-mono font-medium text-lg lg:text-xl tracking-tight leading-tight mb-3">
                  PESCA FANTASMA
                </h3>
                <p class="text-white/70 text-sm lg:text-base leading-relaxed">
                  Redes de pesca são abandonadas, perdidas ou descartadas nos mares, gerando a morte de milhares de animais.
                </p>
              </div>

              {/* Vertical Separator 1 */}
              <div class="hidden lg:block absolute left-1/3 top-0 bottom-0 w-px">
                <div class="h-full w-full" style="background: linear-gradient(to bottom, transparent, rgba(255,255,255,0.3), transparent);"></div>
              </div>

              {/* Info 2 */}
              <div class="text-center">
                <h3 class="text-white font-mono font-medium text-lg lg:text-xl tracking-tight leading-tight mb-3">
                  +640 MIL TONELADAS
                </h3>
                <p class="text-white/70 text-sm lg:text-base leading-relaxed">
                  de materiais de pesca são descartados anualmente nos mares
                </p>
              </div>

              {/* Vertical Separator 2 */}
              <div class="hidden lg:block absolute left-2/3 top-0 bottom-0 w-px">
                <div class="h-full w-full" style="background: linear-gradient(to bottom, transparent, rgba(255,255,255,0.3), transparent);"></div>
              </div>

              {/* Info 3 */}
              <div class="text-center">
                <h3 class="text-white font-mono font-medium text-lg lg:text-xl tracking-tight leading-tight mb-3">
                  +69 MIL ANIMAIS
                </h3>
                <p class="text-white/70 text-sm lg:text-base leading-relaxed">
                  marinhos podem ser afetados diariamente no Brasil
                </p>
              </div>
            </div>
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

        {/* Word-by-Word Focus Effect Script */}
        <script 
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                function updateWordFocus() {
                  const container = document.getElementById('mission-container');
                  if (!container) return;
                  
                  const words = container.querySelectorAll('[id^="word-"]');
                  if (words.length === 0) return;
                  
                  const rect = container.getBoundingClientRect();
                  const viewportHeight = window.innerHeight;
                  
                  // Calculate how much of the text is visible in the viewport
                  const textTop = rect.top;
                  const textBottom = rect.bottom;
                  const textHeight = rect.height;
                  
                  // Text is fully visible when it's centered in the viewport
                  const centerY = viewportHeight / 2;
                  const textCenter = textTop + textHeight / 2;
                  const distanceFromCenter = Math.abs(textCenter - centerY);
                  
                  // Calculate focus progress with more gradual transitions
                  const focusStartDistance = 150; // Distance where focus starts
                  const fullFocusDistance = 50;   // Distance where text is fully focused
                  const blurStartDistance = 300;  // Distance where blur starts again
                  
                  let focusProgress;
                  
                  if (distanceFromCenter <= fullFocusDistance) {
                    // Text is fully focused (center area)
                    focusProgress = 1;
                  } else if (distanceFromCenter <= focusStartDistance) {
                    // Text is becoming focused (approaching center)
                    const progress = (distanceFromCenter - fullFocusDistance) / (focusStartDistance - fullFocusDistance);
                    focusProgress = 1 - progress;
                  } else if (distanceFromCenter <= blurStartDistance) {
                    // Text stays focused (legibility zone)
                    focusProgress = 1;
                  } else {
                    // Text starts blurring again (moving away)
                    const blurProgress = (distanceFromCenter - blurStartDistance) / 200; // 200px to fully blur
                    focusProgress = Math.max(0, 1 - blurProgress);
                  }
                  
                  // Apply word-by-word focus effect
                  words.forEach((word, index) => {
                    // Calculate when this word should start focusing
                    const wordStartDelay = index * 0.06; // Reduced delay for smoother effect
                    
                    // Calculate individual word progress
                    let wordProgress;
                    
                    if (focusProgress <= wordStartDelay) {
                      // Word hasn't started focusing yet
                      wordProgress = 0;
                    } else if (focusProgress >= 1) {
                      // All words should be fully focused
                      wordProgress = 1;
                    } else {
                      // Word is in the process of focusing
                      const availableProgress = 1 - wordStartDelay;
                      const actualProgress = focusProgress - wordStartDelay;
                      wordProgress = Math.min(1, actualProgress / availableProgress);
                    }
                    
                    // Apply effects
                    if (wordProgress > 0) {
                      // Word is becoming focused
                      const blurAmount = 8 * (1 - wordProgress);
                      const opacity = 0.3 + (0.7 * wordProgress);
                      
                      word.style.filter = \`blur(\${blurAmount}px)\`;
                      word.style.opacity = opacity;
                    } else {
                      // Word is still blurred
                      word.style.filter = 'blur(8px)';
                      word.style.opacity = '0.3';
                    }
                  });
                  
                  // Debug log
                  console.log('Distance from center:', distanceFromCenter, 'Focus progress:', focusProgress);
                }
                
                // Update on scroll with throttling
                let ticking = false;
                function requestTick() {
                  if (!ticking) {
                    requestAnimationFrame(function() {
                      updateWordFocus();
                      ticking = false;
                    });
                    ticking = true;
                  }
                }
                
                // Add event listeners
                window.addEventListener('scroll', requestTick, { passive: true });
                window.addEventListener('resize', updateWordFocus);
                
                // Initial update
                if (document.readyState === 'loading') {
                  document.addEventListener('DOMContentLoaded', updateWordFocus);
                } else {
                  // Small delay to ensure DOM is fully rendered
                  setTimeout(updateWordFocus, 100);
                }
                
                // Also update on load
                window.addEventListener('load', updateWordFocus);
              })();
            `
          }}
        />
      </section>
    </div>
  );
}
