import { useEffect, useRef } from "preact/hooks";
import { Head } from "$fresh/runtime.ts";

export interface Props {
  /**
   * @title Título da Section
   * @description Título opcional para a section
   */
  title?: string;
  
  /**
   * @title Altura do Container
   * @description Altura do container em pixels
   * @default 400
   */
  height?: number;
  
  /**
   * @title Largura do Container
   * @description Largura do container (auto para responsivo)
   * @default "100%"
   */
  width?: string;
}

export default function UnicornStudioEffect({ 
  title = "Unicorn Studio Effect", 
  height = 400,
  width = "100%"
}: Props) {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <Head>
        <script 
          src="https://cdn.jsdelivr.net/npm/@unicornstudio/js@1.4.29/dist/index.min.js"
          defer
        />
      </Head>
      
      <div class="w-full py-8 bg-gray-900">
        {title && (
          <h2 class="text-2xl font-bold text-center mb-6 text-white">{title}</h2>
        )}
        
        <div 
          ref={containerRef}
          class="mx-auto"
          style={{ 
            width: width,
            height: `${height}px`,
            maxWidth: "100%"
          }}
          id="unicorn-container"
        />
      </div>

      <script
        type="module"
        dangerouslySetInnerHTML={{
          __html: `
            document.addEventListener('DOMContentLoaded', function() {
              // Aguarda o carregamento da biblioteca Unicorn Studio
              function initUnicornStudio() {
                if (typeof window.UnicornStudio === 'undefined') {
                  setTimeout(initUnicornStudio, 100);
                  return;
                }

                const container = document.getElementById('unicorn-container');
                if (!container) return;

                // Configuração do efeito baseada no JSON fornecido
                const effectConfig = {
                  "history": [
                    {
                      "breakpoints": [],
                      "visible": true,
                      "aspectRatio": 1,
                      "userDownsample": 1,
                      "layerType": "effect",
                      "type": "noise",
                      "usesPingPong": false,
                      "speed": 0.5,
                      "trackMouse": 0,
                      "mouseMomentum": 0,
                      "texture": false,
                      "parentLayer": "8b9108f6-6a40-4070-a95e-c70c98eb7b19",
                      "animating": true,
                      "isMask": 0,
                      "data": {
                        "depth": false,
                        "uniforms": {},
                        "isBackground": false
                      },
                      "id": "effect"
                    },
                    {
                      "breakpoints": [],
                      "visible": true,
                      "aspectRatio": 1,
                      "userDownsample": 1,
                      "layerType": "effect",
                      "type": "caustics",
                      "usesPingPong": false,
                      "speed": 0.5,
                      "trackMouse": 0,
                      "mouseMomentum": 0,
                      "texture": false,
                      "parentLayer": "ca2c172f-e2c3-46ea-9ced-bb77ce776c5e",
                      "animating": true,
                      "isMask": 0,
                      "data": {
                        "depth": false,
                        "uniforms": {},
                        "isBackground": false
                      },
                      "id": "effect1"
                    },
                    {
                      "breakpoints": [],
                      "visible": true,
                      "locked": false,
                      "aspectRatio": 3.1078886310904874,
                      "layerName": "",
                      "userDownsample": 1,
                      "isElement": true,
                      "opacity": 1,
                      "effects": ["ca2c172f-e2c3-46ea-9ced-bb77ce776c5e"],
                      "displace": 0,
                      "trackMouse": 0,
                      "anchorPoint": "center",
                      "mouseMomentum": 1,
                      "blendMode": "NORMAL",
                      "bgDisplace": 0,
                      "mask": 0,
                      "maskBackground": {"type": "Vec3", "_x": 0, "_y": 0, "_z": 0},
                      "maskAlpha": 0,
                      "maskDepth": 0,
                      "dispersion": 0,
                      "axisTilt": 0,
                      "states": {"appear": [], "scroll": [], "hover": []},
                      "layerType": "text",
                      "justCreated": false,
                      "isSafari": false,
                      "width": 0.992713145278023,
                      "widthMode": "relative",
                      "height": 144.6713286713287,
                      "heightMode": "fixed",
                      "left": 0.5,
                      "leftMode": "relative",
                      "top": 0.5,
                      "topMode": "relative",
                      "rotation": 0,
                      "fontSize": 0.12,
                      "lineHeight": 1.0046620046620047,
                      "letterSpacing": 0.002837205685082445,
                      "fontFamily": "Geist Mono",
                      "fontStyle": "regular",
                      "fontWeight": "400",
                      "textAlign": "center",
                      "textContent": "DERIVATIVE®",
                      "fill": ["#EEEEEE"],
                      "gradientAngle": 0,
                      "gradientType": "linear",
                      "fontSizeMode": "relative",
                      "fontCSS": {
                        "family": "Geist Mono",
                        "src": "https://assets.unicorn.studio/fonts/google_fonts/or3yQ6H-1_WfwkMZI_qYPLs1a-t7PU0AbeE9KJ5T7ihaO_CS.ttf"
                      },
                      "data": {"uniforms": {}},
                      "id": "text",
                      "windowWidth": 1200
                    },
                    {
                      "breakpoints": [],
                      "visible": true,
                      "aspectRatio": 1,
                      "userDownsample": 1,
                      "layerType": "effect",
                      "type": "diffuse",
                      "usesPingPong": false,
                      "speed": 0.58,
                      "trackMouse": 1,
                      "mouseMomentum": 1,
                      "texture": false,
                      "animating": true,
                      "isMask": 0,
                      "data": {
                        "depth": false,
                        "uniforms": {},
                        "isBackground": false
                      },
                      "id": "effect2"
                    }
                  ],
                  "options": {
                    "name": "Amplify",
                    "fps": 60,
                    "dpi": 1.5,
                    "scale": 1,
                    "includeLogo": false,
                    "isProduction": false
                  },
                  "version": "1.4.29",
                  "id": "8t4VhF7UB3HZWrq3qe1L"
                };

                try {
                  // Inicializa o Unicorn Studio com a configuração
                  window.UnicornStudio.init({
                    container: container,
                    config: effectConfig,
                    responsive: true
                  });
                } catch (error) {
                  console.error('Erro ao inicializar Unicorn Studio:', error);
                  // Fallback: mostra o texto sem efeito
                  container.innerHTML = '<div style="display: flex; align-items: center; justify-content: center; height: 100%; font-family: \\'Geist Mono\\', monospace; font-size: 2rem; color: #EEEEEE; background: #000;">DERIVATIVE®</div>';
                }
              }

              initUnicornStudio();
            });
          `
        }}
      />
    </>
  );
}