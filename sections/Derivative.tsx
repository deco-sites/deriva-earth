export interface KeyBenefit {
  icon: string;
  text: string;
}

export interface Props {
  subtitle?: string;
  keyBenefits?: KeyBenefit[];
}

export default function Derivative({
  subtitle = "Material que nasce da união de redes de pesca interceptadas e de resíduos têxteis pré-consumo",
  keyBenefits = [
    {
      icon: "https://assets.decocache.com/derivative/59a05c46-dd77-42a0-b6d5-d8cdf3244268/Frame-(1).svg",
      text: "Novo destino para ameaças ambientais"
    },
    {
      icon: "https://assets.decocache.com/derivative/59a05c46-dd77-42a0-b6d5-d8cdf3244268/Frame-(1).svg",
      text: "Material único no Brasil"
    },
    {
      icon: "https://assets.decocache.com/derivative/59a05c46-dd77-42a0-b6d5-d8cdf3244268/Frame-(1).svg",
      text: "Transparência e rastreabilidade"
    }
  ]
}: Props) {
  return (
    <div id="derivative" style="background-color: #1d1b1d; min-height: 100vh;">
      <section class="relative py-20 lg:py-32 mx-4 lg:mx-8" style="background-color: #fcfafc; border-radius: 24px; overflow: hidden; background-image: url('https://assets.decocache.com/derivative/59fbafa1-c394-4fac-a866-06ea2cad64a8/background_nets.svg'); background-size: cover; background-position: center; background-repeat: no-repeat;">
      {/* Background Pattern */}
      <div class="absolute inset-0 opacity-15">
        <img 
          src="https://assets.decocache.com/derivative/59fbafa1-c394-4fac-a866-06ea2cad64a8/background_nets.svg" 
          alt="Net pattern background"
          class="w-full h-full object-cover object-center"
        />
      </div>

      <div class="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Desktop Layout */}
        <div class="hidden lg:grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Column - Content */}
          <div class="opacity-0 translate-y-8 transition-all duration-1000 ease-out scroll-animate">
            {/* UnicornStudio Interactive Component with DERIVATIVE title */}
            <div class="mb-0">
              <div 
                class="relative w-full overflow-hidden"
                style="aspect-ratio: 1440/900; max-height: 150px; transform: translateX(-40px) !important;"
              >
                <div 
                  data-us-project="CfUBNRWqqovof8qgj5r4" 
                  class="absolute inset-0 w-full h-full"
                  style="width: 100%; height: 100%;"
                ></div>
              </div>
            </div>

            {/* Subtitle */}
            <p class="text-xl lg:text-2xl leading-relaxed mb-6 font-sans max-w-2xl" style="margin-top: -10px; color: #4A4A4A !important;">
              Material que nasce da união de <strong style="font-weight: 600 !important; font-style: italic !important; color: #4A4A4A !important;">redes de pesca</strong> interceptadas e de <strong style="font-weight: 600 !important; font-style: italic !important; color: #4A4A4A !important;">resíduos têxteis</strong> pré-consumo
            </p>

            {/* Key Benefits */}
            <div class="mb-16 px-6 py-6 rounded-xl border-2" style="border: 2px solid #E5E5E5 !important; border-radius: 12px !important; width: fit-content;">
              <div class="space-y-4">
                {keyBenefits.map((benefit, index) => (
                  <div key={index} class="flex items-center gap-4">
                    <div class="flex-shrink-0">
                      <img 
                        src={benefit.icon} 
                        alt=""
                        style="width: 32px !important; height: 32px !important;"
                      />
                    </div>
                    <span style="color: #4A4A4A !important; font-family: sans-serif !important; font-size: 18px !important; font-weight: 500 !important; line-height: 1.5 !important;">
                      {benefit.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - UnicornStudio Element */}
          <div class="opacity-0 translate-y-8 transition-all duration-1000 ease-out delay-200 scroll-animate">
            <div 
              data-us-project="AI2KbKFrSjPoQHEs6hQK" 
              style="width: 100%; height: 450px; max-width: 600px; aspect-ratio: 1440/900;"
            ></div>
          </div>
        </div>

        {/* Mobile Layout */}
        <div class="block lg:hidden">
          {/* Mobile - UnicornStudio DERIVATIVE title at top */}
          <div class="opacity-0 translate-y-8 transition-all duration-1000 ease-out scroll-animate mb-8">
            <div 
              class="relative w-full overflow-hidden mx-auto"
              style="aspect-ratio: 1440/900; max-height: 120px; width: 100%; max-width: 100%;"
            >
              <div 
                data-us-project="CfUBNRWqqovof8qgj5r4" 
                class="absolute inset-0 w-full h-full"
                style="width: 100%; height: 100%;"
              ></div>
            </div>
          </div>

          {/* Mobile - Description */}
          <div class="opacity-0 translate-y-8 transition-all duration-1000 ease-out scroll-animate mb-8">
            <p class="text-lg leading-relaxed font-sans w-full px-2" style="color: #4A4A4A !important;">
              Material que nasce da união de <strong style="font-weight: 600 !important; font-style: italic !important; color: #4A4A4A !important;">redes de pesca</strong> interceptadas e de <strong style="font-weight: 600 !important; font-style: italic !important; color: #4A4A4A !important;">resíduos têxteis</strong> pré-consumo
            </p>
          </div>

          {/* Mobile - Key Benefits */}
          <div class="opacity-0 translate-y-8 transition-all duration-1000 ease-out scroll-animate mb-8 px-4 py-4 rounded-xl border-2 w-full" style="border: 2px solid #E5E5E5 !important; border-radius: 12px !important;">
            <div class="space-y-4">
              {keyBenefits.map((benefit, index) => (
                <div key={index} class="flex items-center gap-3">
                  <div class="flex-shrink-0">
                    <img 
                      src={benefit.icon} 
                      alt=""
                      style="width: 28px !important; height: 28px !important;"
                    />
                  </div>
                  <span style="color: #4A4A4A !important; font-family: sans-serif !important; font-size: 16px !important; font-weight: 500 !important; line-height: 1.4 !important;">
                    {benefit.text}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile - UnicornStudio Element below */}
          <div class="opacity-0 translate-y-8 transition-all duration-1000 ease-out delay-200 scroll-animate">
            <div 
              data-us-project="AI2KbKFrSjPoQHEs6hQK" 
              style="width: 100%; height: 400px; max-width: 100%; aspect-ratio: 1440/900; min-height: 400px;"
            ></div>
          </div>
        </div>

      </div>

      {/* Material Flow Cards - 3 Column Layout - Full Width - SEPARATE SECTION */}
      <div class="container mx-auto px-4 lg:px-8 relative z-10" style="margin-top: 100px;">
        {/* Desktop Layout */}
        <div class="hidden lg:flex lg:flex-row items-center justify-center gap-6 lg:gap-8 opacity-0 translate-y-8 transition-all duration-1000 ease-out delay-400 scroll-animate">
            
            {/* Card 1 - Redes Danificadas */}
          <div class="bg-mineral-black rounded-2xl h-[400px] flex flex-col items-center" style="width: 380px;">
            <div class="flex flex-col justify-center flex-1 gap-2 px-6 py-3 w-full">
                <p class="text-fog-gray font-bold text-sm">Resíduo</p>
                <h3 class="text-snow-white font-mono font-medium text-base tracking-tight leading-tight">
                  REDES DANIFICADAS E RESÍDUOS TÊXTEIS
                </h3>
              </div>
            {/* Interference Pattern Animation Container */}
            <div style="width: 95%; height: 340px; border-radius: 0.5rem; margin-bottom: 0.5rem; overflow: hidden; position: relative;">
              <div id="redes-animation" style="width: 100%; height: 100%;"></div>
            </div>
            </div>

          {/* Seta 1 - Resíduos → Matéria-prima */}
          <div class="flex items-center justify-center">
            <img 
              src="https://assets.decocache.com/derivative/3d40778e-d8d1-47f1-925d-9ba8717d50d8/Arrow-1.svg" 
              alt="Fluxo para Matéria-prima"
              style="width: 40px; height: 40px; transform: rotate(0deg);"
            />
            </div>

          {/* Card 2 - Pellets */}
          <div class="bg-mineral-black rounded-2xl h-[400px] flex flex-col items-center" style="width: 380px;">
              <div class="flex flex-col gap-2 px-6 py-3 w-full">
                <p class="text-fog-gray font-bold text-sm">Matéria-prima</p>
                <h3 class="text-snow-white font-mono font-medium text-base tracking-tight leading-tight">
                  DERIVATIVE®
                </h3>
              </div>
            {/* 3D Animation Container */}
            <div style="width: 83.333333%; height: 320px; border-radius: 0.5rem; margin-bottom: 0.5rem; overflow: hidden; position: relative; background-color: transparent;">
              <div id="pellets-animation" style="width: 100%; height: 100%;"></div>
            </div>
            </div>

          {/* Seta 2 - Matéria-prima → Produtos */}
          <div class="flex items-center justify-center">
            <img 
              src="https://assets.decocache.com/derivative/3d40778e-d8d1-47f1-925d-9ba8717d50d8/Arrow-1.svg" 
              alt="Fluxo para Produtos"
              style="width: 40px; height: 40px; transform: rotate(0deg);"
            />
            </div>

          {/* Card 3 - Produtos */}
          <div class="bg-mineral-black rounded-2xl h-[400px] flex flex-col items-center" style="width: 380px;">
              <div class="flex flex-col gap-2 px-6 py-3 w-full">
                <p class="text-fog-gray font-bold text-sm">PRODUTOS</p>
                <h3 id="product-title-desktop" class="text-snow-white font-mono font-medium text-base tracking-tight leading-tight">
                  ARMAÇÃO DE ÓCULOS
                </h3>
              </div>
            {/* Video Carousel Container */}
            <div class="video-lighten" style="width: 83.333333%; height: 320px; border-radius: 0.5rem; margin-bottom: 0.5rem; overflow: hidden; position: relative; background-color: transparent;">
              {/* Mobile Control Blocker Overlay */}
              <div class="mobile-video-overlay" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; z-index: 20; pointer-events: auto; background: transparent; display: none;"></div>
              {/* Video 1 - Óculos */}
              <video 
                id="video-desktop-1"
                class="video-carousel-item active"
                style="width: 100%; height: 100%; object-fit: cover; border-radius: 0.5rem; position: absolute; top: 0; left: 0; opacity: 1; transition: opacity 0.5s ease-in-out;"
                autoplay 
                muted 
                loop 
                playsinline
                preload="metadata"
              >
                <source src="https://assets.decocache.com/derivative/4a529e95-9bc4-42d6-b339-6b683cbd9104/video_oculos.mp4?v=4" type="video/mp4" />
                Seu navegador não suporta vídeos.
              </video>
              
              {/* Video 2 - Relógio */}
              <video 
                id="video-desktop-2"
                class="video-carousel-item"
                style="width: 100%; height: 100%; object-fit: cover; border-radius: 0.5rem; position: absolute; top: 0; left: 0; opacity: 0; transition: opacity 0.5s ease-in-out;"
                muted 
                loop 
                playsinline
                preload="metadata"
              >
                <source src="https://assets.decocache.com/derivative/90d80454-042c-4569-9805-c621485972ed/social_u4548274989_3d_modern_sportive_wristwatch_product_wireframe_f_4f8b60f9-d119-488d-841e-0ef23cb596d4_3.mp4" type="video/mp4" />
                Seu navegador não suporta vídeos.
              </video>
              
              {/* Dots Indicator */}
              <div class="video-dots" style="position: absolute; bottom: 12px; left: 50%; transform: translateX(-50%); display: flex; gap: 8px; z-index: 10;">
                <button 
                  class="video-dot active" 
                  data-video="0"
                  style="width: 8px; height: 8px; border-radius: 50%; border: none; background-color: rgba(255,255,255,0.8); cursor: pointer; transition: background-color 0.3s ease;"
                ></button>
                <button 
                  class="video-dot" 
                  data-video="1"
                  style="width: 8px; height: 8px; border-radius: 50%; border: none; background-color: rgba(255,255,255,0.3); cursor: pointer; transition: background-color 0.3s ease;"
                ></button>
                <button 
                  class="video-dot" 
                  data-video="2"
                  style="width: 8px; height: 8px; border-radius: 50%; border: none; background-color: rgba(255,255,255,0.3); cursor: pointer; transition: background-color 0.3s ease;"
                ></button>
              </div>
            </div>
          </div>

        </div>

        {/* Mobile Layout */}
        <div class="block lg:hidden opacity-0 translate-y-8 transition-all duration-1000 ease-out delay-400 scroll-animate">
          <div class="flex flex-col items-center justify-center gap-6">
            
            {/* Card 1 - Redes Danificadas */}
            <div class="bg-mineral-black rounded-2xl h-[300px] flex flex-col items-center w-full max-w-sm">
              <div class="flex flex-col justify-center flex-1 gap-2 px-4 py-3 w-full">
                  <p class="text-fog-gray font-bold text-sm">Resíduo</p>
                  <h3 class="text-snow-white font-mono font-medium text-base tracking-tight leading-tight">
                    REDES DANIFICADAS E RESÍDUOS TÊXTEIS
                  </h3>
                </div>
              {/* Interference Pattern Animation Container */}
              <div style="width: 90%; height: 240px; border-radius: 0.5rem; margin-bottom: 0.5rem; overflow: hidden; position: relative;">
                <div id="redes-animation-mobile" style="width: 100%; height: 100%;"></div>
              </div>
            </div>

            {/* Seta 1 - Resíduos → Matéria-prima */}
            <div class="flex items-center justify-center">
              <img 
                src="https://assets.decocache.com/derivative/3d40778e-d8d1-47f1-925d-9ba8717d50d8/Arrow-1.svg" 
                alt="Fluxo para Matéria-prima"
                style="width: 30px; height: 30px; transform: rotate(90deg);"
              />
            </div>

            {/* Card 2 - Pellets */}
            <div class="bg-mineral-black rounded-2xl h-[300px] flex flex-col items-center w-full max-w-sm">
                <div class="flex flex-col gap-2 px-4 py-3 w-full">
                  <p class="text-fog-gray font-bold text-sm">Matéria-prima</p>
                  <h3 class="text-snow-white font-mono font-medium text-base tracking-tight leading-tight">
                    DERIVATIVE®
                  </h3>
                </div>
              {/* 3D Animation Container */}
              <div style="width: 80%; height: 240px; border-radius: 0.5rem; margin-bottom: 0.5rem; overflow: hidden; position: relative; background-color: transparent;">
                <div id="pellets-animation-mobile" style="width: 100%; height: 100%;"></div>
              </div>
            </div>

            {/* Seta 2 - Matéria-prima → Produtos */}
            <div class="flex items-center justify-center">
              <img 
                src="https://assets.decocache.com/derivative/3d40778e-d8d1-47f1-925d-9ba8717d50d8/Arrow-1.svg" 
                alt="Fluxo para Produtos"
                style="width: 30px; height: 30px; transform: rotate(90deg);"
              />
            </div>

            {/* Card 3 - Produtos */}
            <div class="bg-mineral-black rounded-2xl h-[300px] flex flex-col items-center w-full max-w-sm">
                <div class="flex flex-col gap-2 px-4 py-3 w-full">
                  <p class="text-fog-gray font-bold text-sm">PRODUTOS</p>
                  <h3 id="product-title-mobile" class="text-snow-white font-mono font-medium text-base tracking-tight leading-tight">
                    ARMAÇÃO DE ÓCULOS
                  </h3>
                </div>
              {/* Video Carousel Container */}
              <div class="video-lighten" style="width: 80%; height: 240px; border-radius: 0.5rem; margin-bottom: 0.5rem; overflow: hidden; position: relative; background-color: transparent;">
                {/* Mobile Control Blocker Overlay */}
                <div class="mobile-video-overlay" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; z-index: 20; pointer-events: auto; background: transparent; display: none;"></div>
                {/* Video 1 - Óculos */}
                <video 
                  id="video-mobile-1"
                  class="video-carousel-item active"
                  style="width: 100%; height: 100%; object-fit: cover; border-radius: 0.5rem; position: absolute; top: 0; left: 0; opacity: 1; transition: opacity 0.5s ease-in-out; pointer-events: none; -webkit-user-select: none; user-select: none;"
                  muted 
                  loop 
                  playsinline
                  preload="auto"
                  webkit-playsinline="true"
                  x5-playsinline="true"
                  autoplay
                  disablepictureinpicture
                  controlslist="nodownload nofullscreen noremoteplayback"
                  disableRemotePlayback
                >
                  <source src="https://assets.decocache.com/derivative/4a529e95-9bc4-42d6-b339-6b683cbd9104/video_oculos.mp4?v=4" type="video/mp4" />
                  Seu navegador não suporta vídeos.
                </video>
                
                {/* Video 2 - Relógio */}
                <video 
                  id="video-mobile-2"
                  class="video-carousel-item"
                  style="width: 100%; height: 100%; object-fit: cover; border-radius: 0.5rem; position: absolute; top: 0; left: 0; opacity: 0; transition: opacity 0.5s ease-in-out; pointer-events: none; -webkit-user-select: none; user-select: none;"
                  muted 
                  loop 
                  playsinline
                  preload="auto"
                  webkit-playsinline="true"
                  x5-playsinline="true"
                  disablepictureinpicture
                  controlslist="nodownload nofullscreen noremoteplayback"
                  disableRemotePlayback
                >
                  <source src="https://assets.decocache.com/derivative/90d80454-042c-4569-9805-c621485972ed/social_u4548274989_3d_modern_sportive_wristwatch_product_wireframe_f_4f8b60f9-d119-488d-841e-0ef23cb596d4_3.mp4" type="video/mp4" />
                  Seu navegador não suporta vídeos.
                </video>
                
                {/* Dots Indicator */}
                <div class="video-dots" style="position: absolute; bottom: 8px; left: 50%; transform: translateX(-50%); display: flex; gap: 6px; z-index: 10;">
                  <button 
                    class="video-dot active" 
                    data-video="0"
                    style="width: 6px; height: 6px; border-radius: 50%; border: none; background-color: rgba(255,255,255,0.8); cursor: pointer; transition: background-color 0.3s ease;"
                  ></button>
                  <button 
                    class="video-dot" 
                    data-video="1"
                    style="width: 6px; height: 6px; border-radius: 50%; border: none; background-color: rgba(255,255,255,0.3); cursor: pointer; transition: background-color 0.3s ease;"
                  ></button>
                  <button 
                    class="video-dot" 
                    data-video="2"
                    style="width: 6px; height: 6px; border-radius: 50%; border: none; background-color: rgba(255,255,255,0.3); cursor: pointer; transition: background-color 0.3s ease;"
                  ></button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

            {/* 3D Animation Script for Pellets Card */}
      <script 
        type="text/javascript"
        dangerouslySetInnerHTML={{
          __html: `
            // Pellets 3D Animation
            (function() {
              let animationFrameId = null;
              let scene = null;
              let camera = null;
              let renderer = null;
              let sphereGroups = [];
              let cameraZoom = 6;
              
              const createWaveSources = (time, scale) => {
                const result = [];
                const count = 5;
                for (let i = 0; i < count; i++) {
                  const angle = (i / count) * Math.PI * 2;
                  const radius = scale * (1 + Math.sin(angle * 3) * 0.2);
                  result.push({
                    position: [
                      Math.cos(angle) * radius,
                      0,
                      Math.sin(angle) * radius
                    ],
                    frequency: 1.5 + Math.sin(angle * 2) * 0.3,
                    amplitude: 0.2 + Math.cos(angle) * 0.05,
                    phase: time * 2 + angle
                  });
                }
                result.push({
                  position: [0, 0, 0],
                  frequency: 1.8,
                  amplitude: 0.25,
                  phase: time * 2.5
                });
                return result;
              };
              
              const createWireframeSphere = (radius, position, opacity) => {
                const cylinderGeometry = new THREE.CylinderGeometry(radius * 1.2, radius * 1.2, radius * 1.8, 20, 8);
                
                const positionAttribute = cylinderGeometry.attributes.position;
                for (let i = 0; i < positionAttribute.count; i++) {
                  const x = positionAttribute.getX(i);
                  const y = positionAttribute.getY(i);
                  const z = positionAttribute.getZ(i);
                  
                  const height = radius * 1.8;
                  const normalizedY = y / (height / 2);
                  
                  if (Math.abs(normalizedY) > 0.7) {
                    const edgeFactor = (Math.abs(normalizedY) - 0.7) / 0.3;
                    const roundingFactor = 1 - edgeFactor * 0.3;
                    positionAttribute.setX(i, x * roundingFactor);
                    positionAttribute.setZ(i, z * roundingFactor);
                  }
                }
                positionAttribute.needsUpdate = true;
                
                const sphereMaterial = new THREE.MeshBasicMaterial({
                  color: 0xffffff,
                  wireframe: true,
                  transparent: true,
                  opacity: opacity
                });
                const cylinder = new THREE.Mesh(cylinderGeometry, sphereMaterial);
                cylinder.position.set(position[0], position[1], position[2]);
                return cylinder;
              };
              
              const createFloatingSpheres = (sources, size, resolution, time) => {
                const step = size / resolution;
                const spheresGroup = new THREE.Group();
                sphereGroups.push(spheresGroup);
                
                for (let i = 0; i <= resolution; i += 5) {
                  for (let j = 0; j <= resolution; j += 5) {
                    for (let k = 0; k <= resolution; k += 6) {
                      const baseX = (i * step) - (size / 2);
                      const baseY = (j * step) - (size / 2);
                      const baseZ = (k * step) - (size / 2);
                      
                      const organicOffset = Math.sin(baseX * 0.5 + baseY * 0.3 + baseZ * 0.7) * 0.2;
                      const x = baseX + organicOffset;
                      const y = baseY + Math.cos(baseX * 0.4 + baseZ * 0.6) * 0.15;
                      const z = baseZ + Math.sin(baseY * 0.8 + baseX * 0.2) * 0.18;
                      
                      let waveHeight = 0;
                      sources.forEach(({ position: [sx, sy, sz], frequency, amplitude, phase }) => {
                        const dx = x - sx;
                        const dy = y - sy;
                        const dz = z - sz;
                        const distance = Math.sqrt(dx * dx + dy * dy + dz * dz);
                        waveHeight += Math.sin(distance * frequency - time * 3 + phase) * amplitude * Math.exp(-distance * 0.15);
                      });
                      
                      const sphereRadius = 0.35;
                      const sphereOpacity = Math.max(0.2, Math.min(0.8, Math.abs(waveHeight) * 1.5 + 0.4));
                      
                      const floatX = Math.sin(time * 1.2 + x * 0.8 + y * 0.3) * 0.15;
                      const floatY = Math.cos(time * 0.9 + z * 0.5 + x * 0.2) * 0.12;
                      const floatZ = Math.sin(time * 1.1 + y * 0.4 + z * 0.6) * 0.18;
                      
                      const sphere = createWireframeSphere(sphereRadius, [
                        x + floatX + waveHeight * 0.3,
                        y + waveHeight * 0.6 + floatY,
                        z + floatZ + waveHeight * 0.2
                      ], sphereOpacity);
                      
                      sphere.rotation.x = time * 0.3 + x * 0.05;
                      sphere.rotation.y = time * 0.2 + y * 0.05;
                      sphere.rotation.z = time * 0.25 + z * 0.05;
                      
                      spheresGroup.add(sphere);
                    }
                  }
                }
                
                return spheresGroup;
              };
              
              const init = () => {
                const container = document.getElementById('pellets-animation');
                const mobileContainer = document.getElementById('pellets-animation-mobile');
                const targetContainer = container || mobileContainer;
                if (!targetContainer) return;
                
                const width = targetContainer.offsetWidth;
                const height = targetContainer.offsetHeight;
                
                scene = new THREE.Scene();
                camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
                renderer = new THREE.WebGLRenderer({ 
                  antialias: true, 
                  alpha: true,
                  powerPreference: "high-performance"
                });
                renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
                renderer.setSize(width, height);
                renderer.setClearColor(0x000000, 0);
                targetContainer.appendChild(renderer.domElement);
                
                const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
                const directionalLight = new THREE.DirectionalLight(0xffffff, 0.6);
                directionalLight.position.set(5, 5, 5);
                const pointLight = new THREE.PointLight(0xffffff, 0.4);
                pointLight.position.set(-5, 3, -5);
                
                scene.add(ambientLight);
                scene.add(directionalLight);
                scene.add(pointLight);
                
                camera.position.set(0, 0, cameraZoom + 2);
                camera.lookAt(0, 0, 0);
                
                const mainGroup = new THREE.Group();
                scene.add(mainGroup);
                
                let time = 0;
                const animate = () => {
                  animationFrameId = requestAnimationFrame(animate);
                  time += 0.005;
                  
                  mainGroup.children.forEach((child) => {
                    if (child instanceof THREE.Group) {
                      child.children.forEach((sphere) => {
                        if (sphere.geometry) sphere.geometry.dispose();
                        if (sphere.material) sphere.material.dispose();
                      });
                      mainGroup.remove(child);
                    }
                  });
                  sphereGroups = [];
                  
                  const sources1 = createWaveSources(time, 1.2);
                  const field1 = createFloatingSpheres(sources1, 1.2 * 3, 8, time);
                  mainGroup.add(field1);
                  
                  const sources2 = createWaveSources(time + 0.5, 0.8);
                  const field2 = createFloatingSpheres(sources2, 0.8 * 3, 6, time + 0.5);
                  field2.position.set(0, 1.0, 0);
                  field2.rotation.set(Math.PI/8, 0, Math.PI/6);
                  mainGroup.add(field2);
                  
                  mainGroup.rotation.y = Math.sin(time * 0.08) * 0.2;
                  mainGroup.rotation.x = Math.cos(time * 0.06) * 0.15;
                  
                  renderer.render(scene, camera);
                };
                
                animate();
              };
              
              const handleResize = () => {
                if (!camera || !renderer || !targetContainer) return;
                
                const width = targetContainer.offsetWidth;
                const height = targetContainer.offsetHeight;
                
                camera.aspect = width / height;
                camera.updateProjectionMatrix();
                renderer.setSize(width, height);
              };
              
              // Load THREE.js and initialize
              if (typeof THREE !== 'undefined') {
                init();
              } else {
                const script = document.createElement('script');
                script.src = 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js';
                script.onload = init;
                document.head.appendChild(script);
              }
              
              // Cleanup
              window.addEventListener('beforeunload', () => {
                if (animationFrameId) {
                  cancelAnimationFrame(animationFrameId);
                }
                if (renderer) {
                  renderer.dispose();
                }
              });
            })();
          `
        }}
      />

      {/* Interference Pattern Animation Script for Redes Danificadas Card */}
      <script 
        type="text/javascript"
        dangerouslySetInnerHTML={{
          __html: `
            // Redes Danificadas Interference Pattern Animation
            (function() {
              let animationFrameId = null;
              let scene = null;
              let camera = null;
              let renderer = null;
              let lineGroups = [];
              let time = 0;

              function createWaveSources(time, scale) {
                const result = [];
                const count = 5;
                
                for (let i = 0; i < count; i++) {
                  const angle = (i / count) * Math.PI * 2;
                  const radius = scale * (1 + Math.sin(angle * 3) * 0.2);
                  result.push({
                    position: [
                      Math.cos(angle) * radius,
                      0,
                      Math.sin(angle) * radius
                    ],
                    frequency: 2 + Math.sin(angle * 2),
                    amplitude: 0.3 + Math.cos(angle) * 0.1,
                    phase: time * 3 + angle
                  });
                }
                
                result.push({
                  position: [0, 0, 0],
                  frequency: 3,
                  amplitude: 0.4,
                  phase: time * 4
                });
                
                return result;
              }

              const createInterferenceLines = (sources, size, resolution, time) => {
                const step = size / resolution;
                const linesGroup = new THREE.Group();
                lineGroups.push(linesGroup);

                const linesMaterial = new THREE.LineBasicMaterial({
                  color: 0xffffff,
                  transparent: true,
                  opacity: 1.0,
                  linewidth: 2
                });

                // Cria linhas horizontais ondulantes
                for (let i = 0; i <= resolution; i += 1) {
                  const geometry = new THREE.BufferGeometry();
                  const points = [];
                  const x = (i * step) - (size / 2);
                  
                  for (let j = 0; j <= resolution; j += 1) {
                    const z = (j * step) - (size / 2);
                    let height = 0;
                    
                    sources.forEach(({ position: [sx, sy, sz], frequency, amplitude, phase }) => {
                      const dx = x - sx;
                      const dz = z - sz;
                      const distance = Math.sqrt(dx * dx + dz * dz);
                      height += Math.sin(distance * frequency - time * 5 + phase) * 
                               amplitude * Math.exp(-distance * 0.3);
                    });
                    
                    points.push(x, height * 0.5, z);
                  }
                  
                  if (points.length > 2) {
                    geometry.setAttribute('position', new THREE.Float32BufferAttribute(points, 3));
                    const line = new THREE.Line(geometry, linesMaterial);
                    linesGroup.add(line);
                  }
                }

                // Cria linhas verticais ondulantes
                for (let j = 0; j <= resolution; j += 1) {
                  const geometry = new THREE.BufferGeometry();
                  const points = [];
                  const z = (j * step) - (size / 2);
                  
                  for (let i = 0; i <= resolution; i += 1) {
                    const x = (i * step) - (size / 2);
                    let height = 0;
                    
                    sources.forEach(({ position: [sx, sy, sz], frequency, amplitude, phase }) => {
                      const dx = x - sx;
                      const dz = z - sz;
                      const distance = Math.sqrt(dx * dx + dz * dz);
                      height += Math.sin(distance * frequency - time * 5 + phase) * 
                               amplitude * Math.exp(-distance * 0.3);
                    });
                    
                    points.push(x, height * 0.5, z);
                  }
                  
                  if (points.length > 2) {
                    geometry.setAttribute('position', new THREE.Float32BufferAttribute(points, 3));
                    const line = new THREE.Line(geometry, linesMaterial);
                    linesGroup.add(line);
                  }
                }

                return linesGroup;
              };

              function init() {
                const container = document.getElementById('redes-animation');
                const mobileContainer = document.getElementById('redes-animation-mobile');
                const targetContainer = container || mobileContainer;
                if (!targetContainer) return;
                
                const width = targetContainer.offsetWidth;
                const height = targetContainer.offsetHeight;

                scene = new THREE.Scene();
                camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
                renderer = new THREE.WebGLRenderer({ 
                  antialias: true, 
                  alpha: true,
                  powerPreference: "high-performance"
                });
                
                renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
                renderer.setSize(width, height);
                renderer.setClearColor(0x000000, 0);
                targetContainer.appendChild(renderer.domElement);

                const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
                const directionalLight = new THREE.DirectionalLight(0xffffff, 0.6);
                directionalLight.position.set(5, 5, 5);
                const pointLight = new THREE.PointLight(0xffffff, 0.4);
                pointLight.position.set(-5, 3, -5);

                scene.add(ambientLight);
                scene.add(directionalLight);
                scene.add(pointLight);

                camera.position.set(0, 0, 8);
                camera.lookAt(0, 0, 0);

                const mainGroup = new THREE.Group();
                scene.add(mainGroup);

                function animate() {
                  animationFrameId = requestAnimationFrame(animate);
                  time += 0.005;

                  mainGroup.children.forEach((child) => {
                    if (child instanceof THREE.Group) {
                      child.children.forEach((line) => {
                        if (line.geometry) line.geometry.dispose();
                        if (line.material) line.material.dispose();
                      });
                      mainGroup.remove(child);
                    }
                  });
                  lineGroups = [];

                                    const sources1 = createWaveSources(time, 1.6);
                  const field1 = createInterferenceLines(sources1, 1.6 * 3.5, 18, time);
                  mainGroup.add(field1);
                  
                  const sources2 = createWaveSources(time + 0.5, 1.2);
                  const field2 = createInterferenceLines(sources2, 1.2 * 3.5, 14, time + 0.5);
                  field2.position.set(0, 1.2, 0);
                  field2.rotation.set(Math.PI/6, 0, Math.PI/4);
                  mainGroup.add(field2);

                  mainGroup.rotation.y = Math.sin(time * 0.08) * 0.2;
                  mainGroup.rotation.x = Math.cos(time * 0.06) * 0.15;

                  renderer.render(scene, camera);
                }

                animate();
              }

              // Load THREE.js and initialize
              if (typeof THREE !== 'undefined') {
                init();
              } else {
                const script = document.createElement('script');
                script.src = 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js';
                script.onload = init;
                document.head.appendChild(script);
              }
              
              // Cleanup
              window.addEventListener('beforeunload', () => {
                if (animationFrameId) {
                  cancelAnimationFrame(animationFrameId);
                }
                if (renderer) {
                  renderer.dispose();
                }
              });
            })();
          `
        }}
      />

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

      {/* Video Blend Mode CSS */}
      <style dangerouslySetInnerHTML={{
        __html: `
          .video-lighten {
            mix-blend-mode: lighten !important;
            isolation: isolate;
          }
          .video-lighten video {
            mix-blend-mode: lighten !important;
            filter: brightness(1.3) contrast(1.2) !important;
          }
          /* Remove all video controls completely for all carousel videos */
          .video-carousel-item {
            pointer-events: none !important;
            -webkit-user-select: none !important;
            -moz-user-select: none !important;
            -ms-user-select: none !important;
            user-select: none !important;
          }
          
          .video-carousel-item::-webkit-media-controls {
            display: none !important;
          }
          .video-carousel-item::-webkit-media-controls-panel {
            display: none !important;
          }
          .video-carousel-item::-webkit-media-controls-play-button {
            display: none !important;
          }
          .video-carousel-item::-webkit-media-controls-timeline {
            display: none !important;
          }
          .video-carousel-item::-webkit-media-controls-current-time-display {
            display: none !important;
          }
          .video-carousel-item::-webkit-media-controls-time-remaining-display {
            display: none !important;
          }
          .video-carousel-item::-webkit-media-controls-mute-button {
            display: none !important;
          }
          .video-carousel-item::-webkit-media-controls-volume-slider {
            display: none !important;
          }
          .video-carousel-item::-webkit-media-controls-fullscreen-button {
            display: none !important;
          }
          
          /* Specific IDs for extra safety */
          #video-desktop-1, #video-desktop-2, #video-mobile-1, #video-mobile-2 {
            pointer-events: none !important;
            -webkit-user-select: none !important;
            -moz-user-select: none !important;
            -ms-user-select: none !important;
            user-select: none !important;
          }
          
          #video-desktop-1::-webkit-media-controls,
          #video-desktop-2::-webkit-media-controls,
          #video-mobile-1::-webkit-media-controls,
          #video-mobile-2::-webkit-media-controls {
            display: none !important;
          }
          
          /* Mobile video overlay to block controls */
          @media (max-width: 1023px) {
            .mobile-video-overlay {
              display: block !important;
            }
          }
          
          /* Extra aggressive mobile control hiding */
          @media (max-width: 1023px) {
            video[id^="video-mobile-"] {
              -webkit-media-controls: none !important;
              -webkit-media-controls-panel: none !important;
              -webkit-media-controls-play-button: none !important;
              -webkit-media-controls-timeline: none !important;
              -webkit-media-controls-current-time-display: none !important;
              -webkit-media-controls-time-remaining-display: none !important;
              -webkit-media-controls-mute-button: none !important;
              -webkit-media-controls-volume-slider: none !important;
              -webkit-media-controls-fullscreen-button: none !important;
              -webkit-media-controls-overlay-play-button: none !important;
              -webkit-media-controls-start-playback-button: none !important;
            }
            
            video[id^="video-mobile-"]::-webkit-media-controls {
              display: none !important;
            }
            
            video[id^="video-mobile-"]::-webkit-media-controls-panel {
              display: none !important;
            }
            
            video[id^="video-mobile-"]::-webkit-media-controls-play-button {
              display: none !important;
            }
            
            video[id^="video-mobile-"]::-webkit-media-controls-timeline {
              display: none !important;
            }
            
            video[id^="video-mobile-"]::-webkit-media-controls-current-time-display {
              display: none !important;
            }
            
            video[id^="video-mobile-"]::-webkit-media-controls-time-remaining-display {
              display: none !important;
            }
            
            video[id^="video-mobile-"]::-webkit-media-controls-mute-button {
              display: none !important;
            }
            
            video[id^="video-mobile-"]::-webkit-media-controls-volume-slider {
              display: none !important;
            }
            
            video[id^="video-mobile-"]::-webkit-media-controls-fullscreen-button {
              display: none !important;
            }
            
            video[id^="video-mobile-"]::-webkit-media-controls-overlay-play-button {
              display: none !important;
            }
            
            video[id^="video-mobile-"]::-webkit-media-controls-start-playback-button {
              display: none !important;
            }
          }
        `
      }} />

      {/* Mobile Animations Initialization Script */}
      <script 
        type="text/javascript"
        dangerouslySetInnerHTML={{
          __html: `
            // Mobile Animations Initialization
            (function() {
              function initMobileAnimations() {
                // Initialize mobile pellets animation
                const pelletsMobile = document.getElementById('pellets-animation-mobile');
                if (pelletsMobile && typeof THREE !== 'undefined') {
                  const width = pelletsMobile.offsetWidth;
                  const height = pelletsMobile.offsetHeight;
                  
                  const scene = new THREE.Scene();
                  const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
                  const renderer = new THREE.WebGLRenderer({ 
                    antialias: true, 
                    alpha: true,
                    powerPreference: "high-performance"
                  });
                  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
                  renderer.setSize(width, height);
                  renderer.setClearColor(0x000000, 0);
                  pelletsMobile.appendChild(renderer.domElement);
                  
                  const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
                  const directionalLight = new THREE.DirectionalLight(0xffffff, 0.6);
                  directionalLight.position.set(5, 5, 5);
                  const pointLight = new THREE.PointLight(0xffffff, 0.4);
                  pointLight.position.set(-5, 3, -5);
                  
                  scene.add(ambientLight);
                  scene.add(directionalLight);
                  scene.add(pointLight);
                  
                  camera.position.set(0, 0, 8);
                  camera.lookAt(0, 0, 0);
                  
                  const mainGroup = new THREE.Group();
                  scene.add(mainGroup);
                  
                  let time = 0;
                  const animate = () => {
                    requestAnimationFrame(animate);
                    time += 0.005;
                    
                    mainGroup.children.forEach((child) => {
                      if (child instanceof THREE.Group) {
                        child.children.forEach((sphere) => {
                          if (sphere.geometry) sphere.geometry.dispose();
                          if (sphere.material) sphere.material.dispose();
                        });
                        mainGroup.remove(child);
                      }
                    });
                    
                    // Create wave sources
                    const createWaveSources = (time, scale) => {
                      const result = [];
                      const count = 5;
                      for (let i = 0; i < count; i++) {
                        const angle = (i / count) * Math.PI * 2;
                        const radius = scale * (1 + Math.sin(angle * 3) * 0.2);
                        result.push({
                          position: [
                            Math.cos(angle) * radius,
                            0,
                            Math.sin(angle) * radius
                          ],
                          frequency: 1.5 + Math.sin(angle * 2) * 0.3,
                          amplitude: 0.2 + Math.cos(angle) * 0.05,
                          phase: time * 2 + angle
                        });
                      }
                      result.push({
                        position: [0, 0, 0],
                        frequency: 1.8,
                        amplitude: 0.25,
                        phase: time * 2.5
                      });
                      return result;
                    };
                    
                    // Create floating spheres
                    const createFloatingSpheres = (sources, size, resolution, time) => {
                      const step = size / resolution;
                      const spheresGroup = new THREE.Group();
                      
                      for (let i = 0; i <= resolution; i += 5) {
                        for (let j = 0; j <= resolution; j += 5) {
                          for (let k = 0; k <= resolution; k += 6) {
                            const baseX = (i * step) - (size / 2);
                            const baseY = (j * step) - (size / 2);
                            const baseZ = (k * step) - (size / 2);
                            
                            const organicOffset = Math.sin(baseX * 0.5 + baseY * 0.3 + baseZ * 0.7) * 0.2;
                            const x = baseX + organicOffset;
                            const y = baseY + Math.cos(baseX * 0.4 + baseZ * 0.6) * 0.15;
                            const z = baseZ + Math.sin(baseY * 0.8 + baseX * 0.2) * 0.18;
                            
                            let waveHeight = 0;
                            sources.forEach(({ position: [sx, sy, sz], frequency, amplitude, phase }) => {
                              const dx = x - sx;
                              const dy = y - sy;
                              const dz = z - sz;
                              const distance = Math.sqrt(dx * dx + dy * dy + dz * dz);
                              waveHeight += Math.sin(distance * frequency - time * 3 + phase) * amplitude * Math.exp(-distance * 0.15);
                            });
                            
                            const sphereRadius = 0.35;
                            const sphereOpacity = Math.max(0.2, Math.min(0.8, Math.abs(waveHeight) * 1.5 + 0.4));
                            
                            const floatX = Math.sin(time * 1.2 + x * 0.8 + y * 0.3) * 0.15;
                            const floatY = Math.cos(time * 0.9 + z * 0.5 + x * 0.2) * 0.12;
                            const floatZ = Math.sin(time * 1.1 + y * 0.4 + z * 0.6) * 0.18;
                            
                            const cylinderGeometry = new THREE.CylinderGeometry(sphereRadius * 1.2, sphereRadius * 1.2, sphereRadius * 1.8, 20, 8);
                            const sphereMaterial = new THREE.MeshBasicMaterial({
                              color: 0xffffff,
                              wireframe: true,
                              transparent: true,
                              opacity: sphereOpacity
                            });
                            const sphere = new THREE.Mesh(cylinderGeometry, sphereMaterial);
                            sphere.position.set(
                              x + floatX + waveHeight * 0.3,
                              y + waveHeight * 0.6 + floatY,
                              z + floatZ + waveHeight * 0.2
                            );
                            sphere.rotation.x = time * 0.3 + x * 0.05;
                            sphere.rotation.y = time * 0.2 + y * 0.05;
                            sphere.rotation.z = time * 0.25 + z * 0.05;
                            
                            spheresGroup.add(sphere);
                          }
                        }
                      }
                      
                      return spheresGroup;
                    };
                    
                    const sources1 = createWaveSources(time, 1.2);
                    const field1 = createFloatingSpheres(sources1, 1.2 * 3, 8, time);
                    mainGroup.add(field1);
                    
                    const sources2 = createWaveSources(time + 0.5, 0.8);
                    const field2 = createFloatingSpheres(sources2, 0.8 * 3, 6, time + 0.5);
                    field2.position.set(0, 1.0, 0);
                    field2.rotation.set(Math.PI/8, 0, Math.PI/6);
                    mainGroup.add(field2);
                    
                    mainGroup.rotation.y = Math.sin(time * 0.08) * 0.2;
                    mainGroup.rotation.x = Math.cos(time * 0.06) * 0.15;
                    
                    renderer.render(scene, camera);
                  };
                  
                  animate();
                }
                
                // Initialize mobile redes animation
                const redesMobile = document.getElementById('redes-animation-mobile');
                if (redesMobile && typeof THREE !== 'undefined') {
                  const width = redesMobile.offsetWidth;
                  const height = redesMobile.offsetHeight;
                  
                  const scene = new THREE.Scene();
                  const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
                  const renderer = new THREE.WebGLRenderer({ 
                    antialias: true, 
                    alpha: true,
                    powerPreference: "high-performance"
                  });
                  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
                  renderer.setSize(width, height);
                  renderer.setClearColor(0x000000, 0);
                  redesMobile.appendChild(renderer.domElement);
                  
                  const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
                  const directionalLight = new THREE.DirectionalLight(0xffffff, 0.6);
                  directionalLight.position.set(5, 5, 5);
                  const pointLight = new THREE.PointLight(0xffffff, 0.4);
                  pointLight.position.set(-5, 3, -5);
                  
                  scene.add(ambientLight);
                  scene.add(directionalLight);
                  scene.add(pointLight);
                  
                  camera.position.set(0, 0, 8);
                  camera.lookAt(0, 0, 0);
                  
                  const mainGroup = new THREE.Group();
                  scene.add(mainGroup);
                  
                  let time = 0;
                  const animate = () => {
                    requestAnimationFrame(animate);
                    time += 0.005;
                    
                    mainGroup.children.forEach((child) => {
                      if (child instanceof THREE.Group) {
                        child.children.forEach((line) => {
                          if (line.geometry) line.geometry.dispose();
                          if (line.material) line.material.dispose();
                        });
                        mainGroup.remove(child);
                      }
                    });
                    
                    // Create wave sources
                    const createWaveSources = (time, scale) => {
                      const result = [];
                      const count = 5;
                      for (let i = 0; i < count; i++) {
                        const angle = (i / count) * Math.PI * 2;
                        const radius = scale * (1 + Math.sin(angle * 3) * 0.2);
                        result.push({
                          position: [
                            Math.cos(angle) * radius,
                            0,
                            Math.sin(angle) * radius
                          ],
                          frequency: 2 + Math.sin(angle * 2),
                          amplitude: 0.3 + Math.cos(angle) * 0.1,
                          phase: time * 3 + angle
                        });
                      }
                      result.push({
                        position: [0, 0, 0],
                        frequency: 3,
                        amplitude: 0.4,
                        phase: time * 4
                      });
                      return result;
                    };
                    
                    // Create interference lines
                    const createInterferenceLines = (sources, size, resolution, time) => {
                      const step = size / resolution;
                      const linesGroup = new THREE.Group();
                      
                      const linesMaterial = new THREE.LineBasicMaterial({
                        color: 0xffffff,
                        transparent: true,
                        opacity: 1.0,
                        linewidth: 2
                      });
                      
                      // Horizontal lines
                      for (let i = 0; i <= resolution; i += 1) {
                        const geometry = new THREE.BufferGeometry();
                        const points = [];
                        const x = (i * step) - (size / 2);
                        
                        for (let j = 0; j <= resolution; j += 1) {
                          const z = (j * step) - (size / 2);
                          let height = 0;
                          
                          sources.forEach(({ position: [sx, sy, sz], frequency, amplitude, phase }) => {
                            const dx = x - sx;
                            const dz = z - sz;
                            const distance = Math.sqrt(dx * dx + dz * dz);
                            height += Math.sin(distance * frequency - time * 5 + phase) * 
                                     amplitude * Math.exp(-distance * 0.3);
                          });
                          
                          points.push(x, height * 0.5, z);
                        }
                        
                        if (points.length > 2) {
                          geometry.setAttribute('position', new THREE.Float32BufferAttribute(points, 3));
                          const line = new THREE.Line(geometry, linesMaterial);
                          linesGroup.add(line);
                        }
                      }
                      
                      // Vertical lines
                      for (let j = 0; j <= resolution; j += 1) {
                        const geometry = new THREE.BufferGeometry();
                        const points = [];
                        const z = (j * step) - (size / 2);
                        
                        for (let i = 0; i <= resolution; i += 1) {
                          const x = (i * step) - (size / 2);
                          let height = 0;
                          
                          sources.forEach(({ position: [sx, sy, sz], frequency, amplitude, phase }) => {
                            const dx = x - sx;
                            const dz = z - sz;
                            const distance = Math.sqrt(dx * dx + dz * dz);
                            height += Math.sin(distance * frequency - time * 5 + phase) * 
                                     amplitude * Math.exp(-distance * 0.3);
                          });
                          
                          points.push(x, height * 0.5, z);
                        }
                        
                        if (points.length > 2) {
                          geometry.setAttribute('position', new THREE.Float32BufferAttribute(points, 3));
                          const line = new THREE.Line(geometry, linesMaterial);
                          linesGroup.add(line);
                        }
                      }
                      
                      return linesGroup;
                    };
                    
                    const sources1 = createWaveSources(time, 1.6);
                    const field1 = createInterferenceLines(sources1, 1.6 * 3.5, 18, time);
                    mainGroup.add(field1);
                    
                    const sources2 = createWaveSources(time + 0.5, 1.2);
                    const field2 = createInterferenceLines(sources2, 1.2 * 3.5, 14, time + 0.5);
                    field2.position.set(0, 1.2, 0);
                    field2.rotation.set(Math.PI/6, 0, Math.PI/4);
                    mainGroup.add(field2);
                    
                    mainGroup.rotation.y = Math.sin(time * 0.08) * 0.2;
                    mainGroup.rotation.x = Math.cos(time * 0.06) * 0.15;
                    
                    renderer.render(scene, camera);
                  };
                  
                  animate();
                }
              }
              
              // Initialize after THREE.js is loaded
              if (typeof THREE !== 'undefined') {
                setTimeout(initMobileAnimations, 1000);
              } else {
                const checkThree = setInterval(() => {
                  if (typeof THREE !== 'undefined') {
                    clearInterval(checkThree);
                    setTimeout(initMobileAnimations, 1000);
                  }
                }, 100);
              }
            })();
          `
        }}
      />

      {/* Video Carousel Script */}
      <script 
        type="text/javascript"
        dangerouslySetInnerHTML={{
          __html: `
            // Video Carousel Controller
            (function() {
              const videoCount = 3;
              const autoPlayDelay = 5000; // 5 seconds
              
              // Separate state for each container
              const carouselStates = {
                desktop: { currentIndex: 0, interval: null },
                mobile: { currentIndex: 0, interval: null }
              };
              
              function initCarousel() {
                // Initialize desktop carousel
                initCarouselForContainer('desktop');
                // Initialize mobile carousel
                initCarouselForContainer('mobile');
              }
              
              function initCarouselForContainer(type) {
                const videos = document.querySelectorAll(\`[id^="video-\${type}-"]\`);
                const dots = document.querySelectorAll(\`.video-dots [data-video]\`);
                const titleElement = document.getElementById(\`product-title-\${type}\`);
                
                if (videos.length === 0) return;
                
                // Product titles for each video
                const productTitles = ['ARMAÇÃO DE ÓCULOS', 'RELÓGIO', 'SEU PRODUTO'];
                
                // Auto-play functionality
                function startAutoPlay() {
                  if (carouselStates[type].interval) clearInterval(carouselStates[type].interval);
                  
                  carouselStates[type].interval = setInterval(() => {
                    carouselStates[type].currentIndex = (carouselStates[type].currentIndex + 1) % videoCount;
                    showVideo(carouselStates[type].currentIndex, type);
                  }, autoPlayDelay);
                }
                
                function showVideo(index, type) {
                  // Hide all videos and remove controls
                  videos.forEach((video, i) => {
                    // Only show video if it's one of the first two (index 0 or 1)
                    if (index < 2) {
                      video.style.opacity = i === index ? '1' : '0';
                    } else {
                      // For third item (index 2), hide all videos
                      video.style.opacity = '0';
                    }
                    
                    // Use platform-specific control removal
                    if (isMobileDevice()) {
                      removeVideoControlsMobile(video);
                    } else {
                      // Desktop control removal
                      video.controls = false;
                      video.removeAttribute('controls');
                      video.setAttribute('controls', 'false');
                      video.setAttribute('controlslist', 'nodownload nofullscreen noremoteplayback');
                      video.setAttribute('disableRemotePlayback', 'true');
                      video.setAttribute('disablepictureinpicture', 'true');
                      video.style.pointerEvents = 'none';
                      video.style.webkitUserSelect = 'none';
                      video.style.userSelect = 'none';
                      video.style.outline = 'none';
                      video.style.border = 'none';
                    }
                    
                    if (i === index && index < 2) {
                      video.play().catch(e => console.log('Video play failed:', e));
                    } else {
                      video.pause();
                    }
                  });
                  
                  // Update product title
                  if (titleElement) {
                    titleElement.textContent = productTitles[index];
                    console.log(\`Updated \${type} title to: \${productTitles[index]}\`);
                  }
                  
                  // Update dots
                  dots.forEach((dot, i) => {
                    if (i === index) {
                      dot.style.backgroundColor = 'rgba(255,255,255,0.8)';
                    } else {
                      dot.style.backgroundColor = 'rgba(255,255,255,0.3)';
                    }
                  });
                }
                
                // Dot click handlers
                dots.forEach((dot, index) => {
                  dot.addEventListener('click', () => {
                    carouselStates[type].currentIndex = index;
                    showVideo(carouselStates[type].currentIndex, type);
                    startAutoPlay(); // Restart auto-play
                  });
                });
                
                // Initialize first video
                showVideo(0, type);
                startAutoPlay();
                
                // Pause auto-play on hover/touch
                const container = videos[0].closest('.video-lighten');
                if (container) {
                  container.addEventListener('mouseenter', () => {
                    if (carouselStates[type].interval) clearInterval(carouselStates[type].interval);
                  });
                  
                  container.addEventListener('mouseleave', () => {
                    startAutoPlay();
                  });
                  
                  // Touch events for mobile
                  container.addEventListener('touchstart', () => {
                    if (carouselStates[type].interval) clearInterval(carouselStates[type].interval);
                  });
                  
                  container.addEventListener('touchend', () => {
                    setTimeout(() => startAutoPlay(), 2000); // Resume after 2 seconds
                  });
                }
              }
              
              // Force video autoplay for all videos
              function forceVideoPlay() {
                const allVideos = document.querySelectorAll('video[id^="video-"]');
                
                allVideos.forEach(video => {
                  // Remove all controls
                  video.controls = false;
                  video.removeAttribute('controls');
                  video.setAttribute('controls', 'false');
                  video.setAttribute('controlslist', 'nodownload nofullscreen noremoteplayback');
                  video.setAttribute('disableRemotePlayback', 'true');
                  video.style.pointerEvents = 'none';
                  video.style.webkitUserSelect = 'none';
                  video.style.userSelect = 'none';
                  
                  // Ensure video is muted for autoplay compliance
                  video.muted = true;
                  video.volume = 0;
                  
                  // Set additional iOS Chrome specific properties
                  video.setAttribute('webkit-playsinline', 'true');
                  video.setAttribute('playsinline', 'true');
                  video.setAttribute('x5-playsinline', 'true');
                });
              }
              
              // Mobile device detection
              function isMobileDevice() {
                return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || 
                       window.innerWidth <= 1024;
              }
              
              // Platform-specific video control removal
              function removeVideoControlsMobile(video) {
                // Base control removal
                video.controls = false;
                video.removeAttribute('controls');
                video.setAttribute('controls', 'false');
                
                // iOS Safari specific
                video.setAttribute('webkit-playsinline', 'true');
                video.setAttribute('playsinline', 'true');
                video.setAttribute('x-webkit-airplay', 'deny');
                
                // Android Chrome specific
                video.setAttribute('x5-playsinline', 'true');
                video.setAttribute('x5-video-player-type', 'h5');
                video.setAttribute('x5-video-player-fullscreen', 'false');
                video.setAttribute('x5-video-orientation', 'portraint');
                
                // Chrome Mobile specific
                video.setAttribute('controlslist', 'nodownload nofullscreen noremoteplayback');
                video.setAttribute('disableRemotePlayback', 'true');
                video.setAttribute('disablepictureinpicture', 'true');
                
                // Firefox Mobile specific
                video.setAttribute('moz-playsinline', 'true');
                
                // Universal mobile styles
                video.style.pointerEvents = 'none';
                video.style.webkitUserSelect = 'none';
                video.style.userSelect = 'none';
                video.style.outline = 'none';
                video.style.border = 'none';
                video.style.touchAction = 'none';
                video.style.webkitTouchCallout = 'none';
                
                // Force muted for autoplay compliance
                video.muted = true;
                video.volume = 0;
                
                // Remove any event listeners that might show controls
                video.addEventListener('loadedmetadata', () => {
                  video.controls = false;
                  video.removeAttribute('controls');
                });
                
                video.addEventListener('play', () => {
                  video.controls = false;
                  video.removeAttribute('controls');
                });
                
                video.addEventListener('pause', () => {
                  video.controls = false;
                  video.removeAttribute('controls');
                });
              }
              
              // Continuous control removal for mobile
              function continuousControlRemoval() {
                if (!isMobileDevice()) return;
                
                const allVideos = document.querySelectorAll('video[id^="video-"]');
                allVideos.forEach(video => {
                  removeVideoControlsMobile(video);
                });
              }
              
              // Initialize mobile overlay
              function initMobileOverlay() {
                if (!isMobileDevice()) return;
                
                const overlays = document.querySelectorAll('.mobile-video-overlay');
                overlays.forEach(overlay => {
                  // Block all touch events that might trigger controls
                  overlay.addEventListener('touchstart', (e) => {
                    e.preventDefault();
                    e.stopPropagation();
                  });
                  
                  overlay.addEventListener('touchend', (e) => {
                    e.preventDefault();
                    e.stopPropagation();
                  });
                  
                  overlay.addEventListener('touchmove', (e) => {
                    e.preventDefault();
                    e.stopPropagation();
                  });
                  
                  overlay.addEventListener('click', (e) => {
                    e.preventDefault();
                    e.stopPropagation();
                  });
                  
                  overlay.addEventListener('contextmenu', (e) => {
                    e.preventDefault();
                    e.stopPropagation();
                  });
                });
              }
              
              // Initialize when DOM is ready
              if (document.readyState === 'loading') {
                document.addEventListener('DOMContentLoaded', () => {
                  forceVideoPlay();
                  setTimeout(initCarousel, 500);
                  setTimeout(initMobileOverlay, 1000);
                  // Start continuous control removal for mobile
                  setInterval(continuousControlRemoval, 100);
                });
              } else {
                forceVideoPlay();
                setTimeout(initCarousel, 500);
                setTimeout(initMobileOverlay, 1000);
                // Start continuous control removal for mobile
                setInterval(continuousControlRemoval, 100);
              }
              
              // Cleanup on page unload
              window.addEventListener('beforeunload', () => {
                Object.values(carouselStates).forEach(state => {
                  if (state.interval) clearInterval(state.interval);
                });
              });
            })();
          `
        }}
      />

      {/* UnicornStudio Script */}
      <script 
        type="text/javascript"
        dangerouslySetInnerHTML={{
          __html: `
            !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();
          `
        }}
      />
      </section>
    </div>
  );
}
