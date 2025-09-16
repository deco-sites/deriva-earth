import { asset, Head } from "$fresh/runtime.ts";
import { defineApp } from "$fresh/server.ts";
import Theme from "../sections/Theme/Theme.tsx";
import { Context } from "@deco/deco";
export default defineApp(async (_req, ctx) => {
    const revision = await Context.active().release?.revision();
    return (<>
      {/* Include default fonts and css vars */}
      <Theme colorScheme="any"/>

      {/* Include Icons and manifest */}
      <Head>
        {/* Enable View Transitions API */}
        <style dangerouslySetInnerHTML={{
            __html: `@view-transition { navigation: auto; }`,
        }}/>

        {/* Tailwind v3 CSS file - try both paths */}
        <link href={asset(`/styles.css?revision=${revision}`)} rel="stylesheet"/>
        <link href={asset(`/tailwind.css?revision=${revision}`)} rel="stylesheet"/>

        {/* Web Manifest */}
        <link rel="manifest" href={asset("/site.webmanifest")}/>
      </Head>

      {/* Global Scroll Animation Script */}
      <script 
        type="text/javascript"
        dangerouslySetInnerHTML={{
          __html: `
            // Global Scroll Animation for elements
            (function() {
              let isInitialized = false;
              
              function initScrollAnimation() {
                if (isInitialized) return;
                isInitialized = true;
                
                console.log('Initializing scroll animation...');
                
                function animateOnScroll() {
                  const elements = document.querySelectorAll('.scroll-animate');
                  console.log('Found scroll-animate elements:', elements.length);
                  
                  elements.forEach((element, index) => {
                    const elementTop = element.getBoundingClientRect().top;
                    const elementVisible = 150;
                    
                    if (elementTop < window.innerHeight - elementVisible) {
                      console.log('Animating element', index);
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
                setTimeout(animateOnScroll, 100);
              }
              
              // Initialize when DOM is ready
              if (document.readyState === 'loading') {
                document.addEventListener('DOMContentLoaded', initScrollAnimation);
              } else {
                initScrollAnimation();
              }
              
              // Also check on load
              window.addEventListener('load', initScrollAnimation);
            })();
          `
        }}
      />

      {/* Rest of Preact tree */}
      <ctx.Component />
    </>);
});