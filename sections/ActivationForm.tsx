/** @titleBy title */
export interface FormField {
  /** @title Label */
  label: string;
  /** @title Descrição (exibida acima do campo) */
  description?: string;
  /** @title Placeholder */
  placeholder?: string;
}

/** @title Step Intro */
export interface IntroStep {
  /** @title Título */
  title?: string;
  /** @title Subtítulo */
  subtitle?: string;
  /** @title Parágrafos de introdução */
  paragraphs?: string[];
  /** @title Chamada final (ex: "Vamos lá?") */
  callToAction?: string;
  /** @title Texto do botão */
  buttonText?: string;
}

/** @title Step Identificação */
export interface IdentityStep {
  /** @title Título do step */
  title?: string;
  /** @title Campo Nome */
  nameField?: FormField;
  /** @title Campo E-mail */
  emailField?: FormField;
  /** @title Texto do botão */
  buttonText?: string;
}

/** @title Step Produtos */
export interface ProductStep {
  /** @title Título do step */
  title?: string;
  /** @title Campo Produtos */
  productField?: FormField;
  /** @title Texto do botão */
  buttonText?: string;
}

/** @title Step Marcas */
export interface BrandStep {
  /** @title Título do step */
  title?: string;
  /** @title Campo Marcas */
  brandField?: FormField;
  /** @title Texto do botão de envio */
  submitText?: string;
}

/** @title Step Obrigado */
export interface ThankYouStep {
  /** @title Título */
  title?: string;
  /** @title Parágrafos */
  paragraphs?: string[];
  /** @title Mensagem de despedida */
  farewell?: string;
}

export interface Props {
  /** @title Step 1 - Introdução */
  intro?: IntroStep;
  /** @title Step 2 - Identificação (Nome e E-mail) */
  identity?: IdentityStep;
  /** @title Step 3 - Produtos */
  product?: ProductStep;
  /** @title Step 4 - Marcas */
  brand?: BrandStep;
  /** @title Step 5 - Agradecimento */
  thankYou?: ThankYouStep;
}

const DEFAULT_INTRO: IntroStep = {
  title: "Ativação Confirmada",
  subtitle: "",
  paragraphs: [
    "Nós somos o movimento de regeneração oceânica e agora você acabou de entrar no grupo que vai estar com o Deriva desde o início.",
    "Antes de qualquer anúncio público, antes de qualquer lançamento oficial.",
    "Mas pra isso funcionar de verdade, precisamos entender melhor quem você é e como a gente pode construir isso juntos.",
  ],
  callToAction: "Vamos lá?",
  buttonText: "COMEÇAR",
};

const DEFAULT_IDENTITY: IdentityStep = {
  title: "Para mantermos contato",
  nameField: { label: "Nome", placeholder: "Seu nome" },
  emailField: { label: "E-mail", placeholder: "seu@email.com" },
  buttonText: "PRÓXIMO",
};

const DEFAULT_PRODUCT: ProductStep = {
  title: "Produtos",
  productField: {
    label: "",
    description:
      "Nós desenvolvemos o Derivative®, matéria-prima feita de redes de pesca que estariam à deriva no oceano. Imagine, se você pudesse ter um produto feito com esse material, algo bem feito, com design, com história e impacto de verdade, qual seria?",
    placeholder:
      "Pode ser algo que você usa no dia a dia, algo para casa ou algo que você veria e pensaria 'incrível, isso tinha que existir'.",
  },
  buttonText: "PRÓXIMO",
};

const DEFAULT_BRAND: BrandStep = {
  title: "Marcas",
  brandField: {
    label: "",
    description:
      "Quais marcas você acha que combinam com o Deriva? Marcas que você admira e acredita que fariam sentido desenvolver um projeto juntos aplicando o Derivative®.",
    placeholder: "Pode mandar quantas vier na cabeça.",
  },
  submitText: "ENVIAR",
};

const DEFAULT_THANK_YOU: ThankYouStep = {
  title: "Obrigado por chegar junto!",
  paragraphs: [
    "Estamos aqui para regenerar o oceano e seu apoio irá nos ajudar nessa jornada.",
    "Em breve, contaremos mais sobre o que estamos construindo. Mas por enquanto, você já tá dentro. E isso já é mais do que a maioria.",
  ],
  farewell: "Até logo",
};

const TOTAL_STEPS = 5;

export default function ActivationForm({
  intro: _intro,
  identity: _identity,
  product: _product,
  brand: _brand,
  thankYou: _thankYou,
}: Props) {
  const intro = { ...DEFAULT_INTRO, ..._intro };
  const identity = { ...DEFAULT_IDENTITY, ..._identity };
  const product = { ...DEFAULT_PRODUCT, ..._product };
  const brand = { ...DEFAULT_BRAND, ..._brand };
  const thankYou = { ...DEFAULT_THANK_YOU, ..._thankYou };
  const nameField = { ...DEFAULT_IDENTITY.nameField!, ...identity.nameField };
  const emailField = { ...DEFAULT_IDENTITY.emailField!, ...identity.emailField };
  const productField = { ...DEFAULT_PRODUCT.productField!, ...product.productField };
  const brandField = { ...DEFAULT_BRAND.brandField!, ...brand.brandField };

  const stepDots = (idPrefix: string, dotSize: string, lineSize: string) => (
    <div class="flex items-center justify-center gap-3">
      {Array.from({ length: TOTAL_STEPS }, (_, i) => {
        const idx = i + 1;
        return (
          <>
            <div
              class={`${dotSize} rounded-full ${idx === 1 ? "" : "border"}`}
              style={idx === 1 ? "background-color: #CEC8C1;" : "border-color: #CEC8C1; opacity: 0.4;"}
              id={`${idPrefix}dot-${idx}`}
            />
            {idx < TOTAL_STEPS && (
              <div
                class={`${lineSize} h-px`}
                style={`background-color: #CEC8C1;${idx >= 2 ? " opacity: 0.4;" : ""}`}
                id={`${idPrefix}line-${idx}`}
              />
            )}
          </>
        );
      })}
    </div>
  );

  return (
    <div class="relative h-screen overflow-hidden flex flex-col" style="background-color: #1D1B1D;">
      <div class="absolute inset-0 z-0" style="background: linear-gradient(180deg, #1D1B1D 0%, #2a2528 50%, #1D1B1D 100%);">
        <div id="bg-video-container" class="absolute inset-0" style="opacity: 0; transition: opacity 1s ease-out;" dangerouslySetInnerHTML={{ __html: `
          <video id="bg-video" src="https://assets.decocache.com/deriva-earth/63f76078-d3d8-46e9-8f55-bafe3c32fa6b/background2_header-(1)-(1).mp4" autoplay muted loop playsinline webkit-playsinline preload="auto" style="width:100%;height:100%;object-fit:cover;opacity:0.3;"></video>
          <script>(function(){var v=document.getElementById('bg-video');if(v){v.muted=true;v.play().catch(function(){});}})();</script>
        `}} />
      </div>

      {/* Loading screen */}
      <div id="loading-screen" class="absolute inset-0 z-50 flex items-center justify-center" style="background-color: #1D1B1D;">
        <div class="h-40 lg:h-48" style="mix-blend-mode: screen;">
          <img id="loading-gif" src="https://assets.decocache.com/deriva-earth/82ec37fa-e57d-4e56-ac80-f12eea23b03d/animation-ezgif.com-video-to-gif-converter.gif" alt="Loading" style="height: 100%; width: auto;" />
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        html, body { overflow: hidden !important; height: 100vh !important; }
        @keyframes loadingFadeOut {
          0% { opacity: 1; }
          100% { opacity: 0; visibility: hidden; }
        }
      `}} />

      <div class="flex-1 relative z-10 flex flex-col min-h-0" id="main-content" style="opacity: 0;">
        <div class="container mx-auto px-4 flex-1 flex flex-col min-h-0">

          {/* ===== DESKTOP LAYOUT ===== */}
          <div class="hidden lg:flex lg:flex-col items-center justify-center flex-1 min-h-0">
            <div class="w-full max-w-2xl mb-6">
              {stepDots("step-", "w-3 h-3", "w-10")}
            </div>

            <div class="w-full max-w-2xl">
              <div class="rounded-2xl shadow-lg p-8 pb-6 flex flex-col" id="card-desktop" style="background-color: #FCFAFA; max-height: calc(100vh - 160px);">

                {/* Step 1: Intro */}
                <div id="step-1" class="flex flex-col flex-1 min-h-0">
                  <div class="flex-1 overflow-y-auto">
                    <h1 class="text-4xl font-normal mb-3 font-sans" style="color: #1D1B1D;">{intro.title}</h1>
                    {intro.subtitle && <p class="text-xl font-medium mb-6 font-sans" style="color: #1D1B1D;">{intro.subtitle}</p>}
                    <div class="space-y-4" style="color: #4A4A4A;">
                      {intro.paragraphs?.map((p, i) => (
                        <p key={i} class="text-base leading-relaxed font-sans">{p}</p>
                      ))}
                      {intro.callToAction && (
                        <p class="text-lg font-medium font-sans" style="color: #1D1B1D;">{intro.callToAction}</p>
                      )}
                    </div>
                  </div>
                  <button type="button" id="btn-next-1" class="w-full bg-black hover:bg-gray-800 text-white font-medium py-3 px-6 rounded-xl transition-all duration-200 font-mono uppercase tracking-wider mt-3 flex-shrink-0">
                    {intro.buttonText}
                  </button>
                </div>

                {/* Step 2: Nome + Email */}
                <div id="step-2" class="hidden flex-col flex-1 min-h-0">
                  <button type="button" id="btn-back-2" class="mb-4 text-sm text-gray-500 hover:text-gray-700 transition-colors font-sans flex items-center gap-1 flex-shrink-0">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/></svg>
                    Voltar
                  </button>
                  <div class="flex-1 overflow-y-auto">
                    <h2 class="text-2xl font-normal mb-6 font-sans" style="color: #1D1B1D;">{identity.title}</h2>
                    <div id="message" class="mb-6 p-4 rounded-lg hidden"></div>
                    <div class="space-y-6">
                      <div>
                        <label for="act-nome" class="block text-sm font-medium text-gray-700 mb-2 font-sans">{nameField.label}</label>
                        <input type="text" id="act-nome" name="nome" class="w-full px-4 py-3 border-0 rounded-xl focus:bg-transparent focus:border focus:border-gray-400 focus:outline-none font-sans" style="background-color: #F5F5F5; color: #1F2937;" placeholder={nameField.placeholder} />
                      </div>
                      <div>
                        <label for="act-email" class="block text-sm font-medium text-gray-700 mb-2 font-sans">{emailField.label}</label>
                        <input type="email" id="act-email" name="email" class="w-full px-4 py-3 border-0 rounded-xl focus:bg-transparent focus:border focus:border-gray-400 focus:outline-none font-sans" style="background-color: #F5F5F5; color: #1F2937;" placeholder={emailField.placeholder} />
                      </div>
                    </div>
                  </div>
                  <button type="button" id="btn-next-2" class="w-full bg-black hover:bg-gray-800 text-white font-medium py-3 px-6 rounded-xl transition-all duration-200 font-mono uppercase tracking-wider mt-3 flex-shrink-0">
                    {identity.buttonText}
                  </button>
                </div>

                {/* Step 3: Produtos */}
                <div id="step-3" class="hidden flex-col flex-1 min-h-0">
                  <button type="button" id="btn-back-3" class="mb-4 text-sm text-gray-500 hover:text-gray-700 transition-colors font-sans flex items-center gap-1 flex-shrink-0">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/></svg>
                    Voltar
                  </button>
                  <div class="flex-1 overflow-y-auto">
                    <h2 class="text-2xl font-normal mb-3 font-sans" style="color: #1D1B1D;">{product.title}</h2>
                    <div>
                      {productField.label && <label for="act-produtos" class="block text-sm font-medium text-gray-700 mb-2 font-sans">{productField.label}</label>}
                      {productField.description && (
                        <p class="text-sm text-gray-500 mb-3 font-sans leading-relaxed">{productField.description}</p>
                      )}
                      <textarea id="act-produtos" name="produtos" rows={5} class="w-full px-4 py-3 border-0 rounded-xl focus:bg-transparent focus:border focus:border-gray-400 focus:outline-none resize-none font-sans text-sm" style="background-color: #F5F5F5; color: #1F2937;" placeholder={productField.placeholder}></textarea>
                    </div>
                  </div>
                  <button type="button" id="btn-next-3" class="w-full bg-black hover:bg-gray-800 text-white font-medium py-3 px-6 rounded-xl transition-all duration-200 font-mono uppercase tracking-wider mt-3 flex-shrink-0">
                    {product.buttonText}
                  </button>
                </div>

                {/* Step 4: Marcas */}
                <div id="step-4" class="hidden flex-col flex-1 min-h-0">
                  <button type="button" id="btn-back-4" class="mb-4 text-sm text-gray-500 hover:text-gray-700 transition-colors font-sans flex items-center gap-1 flex-shrink-0">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/></svg>
                    Voltar
                  </button>
                  <div class="flex-1 overflow-y-auto">
                    <h2 class="text-2xl font-normal mb-3 font-sans" style="color: #1D1B1D;">{brand.title}</h2>
                    <div>
                      {brandField.label && <label for="act-marcas" class="block text-sm font-medium text-gray-700 mb-2 font-sans">{brandField.label}</label>}
                      {brandField.description && (
                        <p class="text-sm text-gray-500 mb-3 font-sans leading-relaxed">{brandField.description}</p>
                      )}
                      <textarea id="act-marcas" name="marcas" rows={5} class="w-full px-4 py-3 border-0 rounded-xl focus:bg-transparent focus:border focus:border-gray-400 focus:outline-none resize-none font-sans text-sm" style="background-color: #F5F5F5; color: #1F2937;" placeholder={brandField.placeholder}></textarea>
                    </div>
                  </div>
                  <button type="button" id="submitBtn" class="w-full bg-black hover:bg-gray-800 text-white font-medium py-3 px-6 rounded-xl transition-all duration-200 font-mono uppercase tracking-wider mt-3 flex-shrink-0">
                    {brand.submitText}
                  </button>
                </div>

                {/* Step 5: Thank you */}
                <div id="step-5" class="hidden flex-col flex-1 min-h-0">
                  <div class="flex-1 flex items-center justify-center">
                    <div class="text-center">
                      <h2 class="text-3xl font-normal mb-6 font-sans" style="color: #1D1B1D;">{thankYou.title}</h2>
                      <div class="space-y-4" style="color: #4A4A4A;">
                        {thankYou.paragraphs?.map((p, i) => (
                          <p key={i} class="text-base leading-relaxed font-sans">{p}</p>
                        ))}
                        {thankYou.farewell && (
                          <p class="text-xl font-medium font-sans mt-8" style="color: #1D1B1D;">{thankYou.farewell}</p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* ===== MOBILE LAYOUT ===== */}
          <div class="block lg:hidden flex-1 min-h-0 flex flex-col justify-center">
            <div class="mb-4">
              {stepDots("step-m-", "w-2.5 h-2.5", "w-6")}
            </div>

            <div class="flex justify-center">
              <div class="rounded-2xl shadow-lg p-6 w-full max-w-sm flex flex-col" id="card-mobile" style="background-color: #FCFAFA; max-height: calc(100vh - 160px);">

                {/* Step 1: Intro */}
                <div id="step-1-m" class="flex flex-col flex-1 min-h-0">
                  <div class="flex-1 overflow-y-auto">
                    <h1 class="text-3xl font-normal mb-3 font-sans" style="color: #1D1B1D;">{intro.title}</h1>
                    {intro.subtitle && <p class="text-lg font-medium mb-4 font-sans" style="color: #1D1B1D;">{intro.subtitle}</p>}
                    <div class="space-y-3" style="color: #4A4A4A;">
                      {intro.paragraphs?.map((p, i) => (
                        <p key={i} class="text-sm leading-relaxed font-sans">{p}</p>
                      ))}
                      {intro.callToAction && (
                        <p class="text-base font-medium font-sans" style="color: #1D1B1D;">{intro.callToAction}</p>
                      )}
                    </div>
                  </div>
                  <button type="button" id="btn-next-1-m" class="w-full bg-black hover:bg-gray-800 text-white font-medium py-3 px-6 rounded-xl transition-all duration-200 font-mono uppercase tracking-wider mt-4 flex-shrink-0">
                    {intro.buttonText}
                  </button>
                </div>

                {/* Step 2: Nome + Email */}
                <div id="step-2-m" class="hidden flex-col flex-1 min-h-0">
                  <button type="button" id="btn-back-2-m" class="mb-3 text-sm text-gray-500 hover:text-gray-700 transition-colors font-sans flex items-center gap-1 flex-shrink-0">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/></svg>
                    Voltar
                  </button>
                  <div class="flex-1 overflow-y-auto">
                    <h2 class="text-xl font-normal mb-4 font-sans" style="color: #1D1B1D;">{identity.title}</h2>
                    <div id="message-m" class="mb-4 p-3 rounded-lg hidden"></div>
                    <div class="space-y-4">
                      <div>
                        <label for="act-nome-m" class="block text-sm font-medium text-gray-700 mb-2 font-sans">{nameField.label}</label>
                        <input type="text" id="act-nome-m" name="nome" class="w-full px-4 py-3 border-0 rounded-xl focus:bg-transparent focus:border focus:border-gray-400 focus:outline-none font-sans" style="background-color: #F5F5F5; color: #1F2937;" placeholder={nameField.placeholder} />
                      </div>
                      <div>
                        <label for="act-email-m" class="block text-sm font-medium text-gray-700 mb-2 font-sans">{emailField.label}</label>
                        <input type="email" id="act-email-m" name="email" class="w-full px-4 py-3 border-0 rounded-xl focus:bg-transparent focus:border focus:border-gray-400 focus:outline-none font-sans" style="background-color: #F5F5F5; color: #1F2937;" placeholder={emailField.placeholder} />
                      </div>
                    </div>
                  </div>
                  <button type="button" id="btn-next-2-m" class="w-full bg-black hover:bg-gray-800 text-white font-medium py-3 px-6 rounded-xl transition-all duration-200 font-mono uppercase tracking-wider mt-4 flex-shrink-0">
                    {identity.buttonText}
                  </button>
                </div>

                {/* Step 3: Produtos */}
                <div id="step-3-m" class="hidden flex-col flex-1 min-h-0">
                  <button type="button" id="btn-back-3-m" class="mb-3 text-sm text-gray-500 hover:text-gray-700 transition-colors font-sans flex items-center gap-1 flex-shrink-0">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/></svg>
                    Voltar
                  </button>
                  <div class="flex-1 overflow-y-auto">
                    <h2 class="text-xl font-normal mb-4 font-sans" style="color: #1D1B1D;">{product.title}</h2>
                    <div>
                      <label for="act-produtos-m" class="block text-sm font-medium text-gray-700 mb-2 font-sans">{productField.label}</label>
                      {productField.description && (
                        <p class="text-xs text-gray-500 mb-2 font-sans leading-relaxed">{productField.description}</p>
                      )}
                      <textarea id="act-produtos-m" name="produtos" rows={4} class="w-full px-4 py-3 border-0 rounded-xl focus:bg-transparent focus:border focus:border-gray-400 focus:outline-none resize-none font-sans text-sm" style="background-color: #F5F5F5; color: #1F2937;" placeholder={productField.placeholder}></textarea>
                    </div>
                  </div>
                  <button type="button" id="btn-next-3-m" class="w-full bg-black hover:bg-gray-800 text-white font-medium py-3 px-6 rounded-xl transition-all duration-200 font-mono uppercase tracking-wider mt-4 flex-shrink-0">
                    {product.buttonText}
                  </button>
                </div>

                {/* Step 4: Marcas */}
                <div id="step-4-m" class="hidden flex-col flex-1 min-h-0">
                  <button type="button" id="btn-back-4-m" class="mb-3 text-sm text-gray-500 hover:text-gray-700 transition-colors font-sans flex items-center gap-1 flex-shrink-0">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/></svg>
                    Voltar
                  </button>
                  <div class="flex-1 overflow-y-auto">
                    <h2 class="text-xl font-normal mb-4 font-sans" style="color: #1D1B1D;">{brand.title}</h2>
                    <div>
                      <label for="act-marcas-m" class="block text-sm font-medium text-gray-700 mb-2 font-sans">{brandField.label}</label>
                      {brandField.description && (
                        <p class="text-xs text-gray-500 mb-2 font-sans leading-relaxed">{brandField.description}</p>
                      )}
                      <textarea id="act-marcas-m" name="marcas" rows={4} class="w-full px-4 py-3 border-0 rounded-xl focus:bg-transparent focus:border focus:border-gray-400 focus:outline-none resize-none font-sans text-sm" style="background-color: #F5F5F5; color: #1F2937;" placeholder={brandField.placeholder}></textarea>
                    </div>
                  </div>
                  <button type="button" id="submitBtn-m" class="w-full bg-black hover:bg-gray-800 text-white font-medium py-3 px-6 rounded-xl transition-all duration-200 font-mono uppercase tracking-wider mt-4 flex-shrink-0">
                    {brand.submitText}
                  </button>
                </div>

                {/* Step 5: Thank you */}
                <div id="step-5-m" class="hidden flex-col flex-1 min-h-0">
                  <div class="flex-1 flex items-center justify-center">
                    <div class="text-center">
                      <h2 class="text-2xl font-normal mb-4 font-sans" style="color: #1D1B1D;">{thankYou.title}</h2>
                      <div class="space-y-3" style="color: #4A4A4A;">
                        {thankYou.paragraphs?.map((p, i) => (
                          <p key={i} class="text-sm leading-relaxed font-sans">{p}</p>
                        ))}
                        {thankYou.farewell && (
                          <p class="text-lg font-medium font-sans mt-6" style="color: #1D1B1D;">{thankYou.farewell}</p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer — always at bottom */}
      <div class="relative z-10 flex-shrink-0" id="footer-content" style="opacity: 0;">
        <div class="h-px bg-gradient-to-r from-transparent via-white to-transparent opacity-50"></div>
        <div class="container mx-auto px-4 py-6">
          <div class="hidden md:flex md:flex-row items-center justify-between gap-4">
            <div class="flex-shrink-0">
              <img src="https://assets.decocache.com/derivative/63f2145a-4b99-403e-ba27-cf49104ea963/logo_deriva_horizontal_NO.svg" alt="Deriva Logo" class="h-8 w-auto" />
            </div>
            <div class="flex items-center gap-6">
              <a href="https://www.instagram.com/deriva_co?igsh=eWl4anFkc3JkYzBh" target="_blank" rel="noopener noreferrer" class="text-white hover:text-gray-300 transition-colors">
                <img src="https://assets.decocache.com/derivative/44409299-5cf2-4846-88aa-ed7a5e4c31da/insta.svg" alt="Instagram" class="w-6 h-6" />
              </a>
              <a href="https://www.linkedin.com/company/deriva-earth" target="_blank" rel="noopener noreferrer" class="text-white hover:text-gray-300 transition-colors">
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
            </div>
            <div class="text-white text-sm">© 2025 Deriva</div>
          </div>
          <div class="flex md:hidden items-center justify-between gap-2">
            <div class="flex-shrink-0">
              <img src="https://assets.decocache.com/derivative/63f2145a-4b99-403e-ba27-cf49104ea963/logo_deriva_horizontal_NO.svg" alt="Deriva Logo" class="h-6 w-auto" />
            </div>
            <div class="flex items-center gap-4">
              <a href="https://www.instagram.com/deriva_co?igsh=eWl4anFkc3JkYzBh" target="_blank" rel="noopener noreferrer" class="text-white hover:text-gray-300 transition-colors">
                <img src="https://assets.decocache.com/derivative/44409299-5cf2-4846-88aa-ed7a5e4c31da/insta.svg" alt="Instagram" class="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/company/deriva-earth" target="_blank" rel="noopener noreferrer" class="text-white hover:text-gray-300 transition-colors">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
            </div>
            <div class="text-white text-xs flex-shrink-0">© 2025 Deriva</div>
          </div>
        </div>
      </div>

      {/* Loading screen dismiss */}
      <script type="text/javascript" dangerouslySetInnerHTML={{
        __html: `
          (function() {
            function dismissLoading() {
              var loading = document.getElementById('loading-screen');
              var content = document.getElementById('main-content');
              var footer = document.getElementById('footer-content');
              var bgVideo = document.getElementById('bg-video-container');
              if (loading) {
                loading.style.animation = 'loadingFadeOut 0.5s ease-out forwards';
              }
              if (content) {
                content.style.transition = 'opacity 0.6s ease-out';
                content.style.opacity = '1';
              }
              if (footer) {
                footer.style.transition = 'opacity 0.6s ease-out';
                footer.style.opacity = '1';
              }
              if (bgVideo) {
                bgVideo.style.opacity = '1';
              }
            }
            function forcePlay(el) {
              if (!el) return;
              el.muted = true;
              el.setAttribute('muted', '');
              el.setAttribute('playsinline', '');
              el.setAttribute('webkit-playsinline', '');
              var p = el.play();
              if (p && p.catch) p.catch(function() {
                document.addEventListener('touchstart', function retry() {
                  el.muted = true;
                  el.play().catch(function(){});
                  document.removeEventListener('touchstart', retry);
                }, { once: true });
              });
            }

            // GIF loading animation — dismiss after 3s
            setTimeout(dismissLoading, 3000);

            var bgVid = document.getElementById('bg-video');
            forcePlay(bgVid);
            setTimeout(function() { forcePlay(bgVid); }, 1500);
          })();
        `
      }} />

      {/* Scroll Animation Script */}
      <script type="text/javascript" dangerouslySetInnerHTML={{
        __html: `
          (function() {
            function animateOnScroll() {
              var elements = document.querySelectorAll('.scroll-animate');
              elements.forEach(function(element) {
                var elementTop = element.getBoundingClientRect().top;
                if (elementTop < window.innerHeight - 150) {
                  element.style.opacity = '1';
                  element.style.transform = 'translateY(0)';
                }
              });
            }
            var ticking = false;
            window.addEventListener('scroll', function() {
              if (!ticking) { requestAnimationFrame(function() { animateOnScroll(); ticking = false; }); ticking = true; }
            }, { passive: true });
            window.addEventListener('resize', animateOnScroll);
            if (document.readyState === 'loading') { document.addEventListener('DOMContentLoaded', animateOnScroll); }
            else { setTimeout(animateOnScroll, 100); }
            window.addEventListener('load', animateOnScroll);
          })();
        `
      }} />

      {/* Form logic script */}
      <script dangerouslySetInnerHTML={{
        __html: `
          var TOTAL_STEPS = ${TOTAL_STEPS};

          if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', initActivationForm);
          } else {
            initActivationForm();
          }

          function initActivationForm() {
            var isMobile = window.innerWidth < 1024;
            var s = isMobile ? '-m' : '';
            var dotPrefix = isMobile ? 'step-m-' : 'step-';

            // Lock card height — use a comfortable size based on viewport
            var card = document.getElementById(isMobile ? 'card-mobile' : 'card-desktop');
            if (card) {
              var introHeight = card.scrollHeight;
              var vhHeight = Math.round(window.innerHeight * 0.50);
              var finalHeight = Math.max(introHeight, vhHeight);
              card.style.height = finalHeight + 'px';
              card.style.maxHeight = finalHeight + 'px';
            }

            // Next buttons for steps 1, 2, 3
            for (var n = 1; n <= 3; n++) {
              (function(step) {
                var btn = document.getElementById('btn-next-' + step + s);
                if (btn) {
                  btn.addEventListener('click', function() {
                    hideMsg();
                    goToStep(step + 1);
                  });
                }
              })(n);
            }

            // Back buttons for steps 2, 3, 4
            for (var b = 2; b <= 4; b++) {
              (function(step) {
                var btn = document.getElementById('btn-back-' + step + s);
                if (btn) {
                  btn.addEventListener('click', function() {
                    hideMsg();
                    goToStep(step - 1);
                  });
                }
              })(b);
            }

            // Submit button (step 4)
            var submitBtn = document.getElementById(isMobile ? 'submitBtn-m' : 'submitBtn');
            if (submitBtn) {
              submitBtn.addEventListener('click', handleActivationSubmit);
            }

            function goToStep(step) {
              for (var i = 1; i <= TOTAL_STEPS; i++) {
                var el = document.getElementById('step-' + i + s);
                if (el) {
                  el.classList.add('hidden');
                  el.style.display = 'none';
                }
              }
              var target = document.getElementById('step-' + step + s);
              if (target) {
                target.classList.remove('hidden');
                target.style.display = 'flex';
              }
              updateStepDots(step);

              var card = document.getElementById(isMobile ? 'card-mobile' : 'card-desktop');
              if (card) card.scrollTo({ top: 0, behavior: 'smooth' });
            }

            function updateStepDots(currentStep) {
              for (var i = 1; i <= TOTAL_STEPS; i++) {
                var dot = document.getElementById(dotPrefix + 'dot-' + i);
                var line = document.getElementById(dotPrefix + 'line-' + i);
                if (dot) {
                  if (i <= currentStep) {
                    dot.style.backgroundColor = '#CEC8C1';
                    dot.style.borderColor = '#CEC8C1';
                    dot.style.opacity = '1';
                  } else {
                    dot.style.backgroundColor = 'transparent';
                    dot.style.borderColor = '#CEC8C1';
                    dot.style.opacity = '0.4';
                  }
                }
                if (line) {
                  line.style.opacity = i < currentStep ? '1' : '0.4';
                }
              }
            }

            async function handleActivationSubmit(e) {
              e.preventDefault();
              e.stopPropagation();

              var currentBtn = document.getElementById(isMobile ? 'submitBtn-m' : 'submitBtn');
              currentBtn.disabled = true;
              currentBtn.textContent = 'ENVIANDO...';

              var data = {
                nome: document.getElementById('act-nome' + s).value.trim(),
                email: document.getElementById('act-email' + s).value.trim().toLowerCase(),
                produtos: document.getElementById('act-produtos' + s).value.trim(),
                marcas: document.getElementById('act-marcas' + s).value.trim()
              };

              try {
                var response = await fetch('/live/invoke/site/actions/submitActivation.ts', {
                  method: 'POST',
                  headers: { 'Content-Type': 'application/json' },
                  body: JSON.stringify(data)
                });

                if (!response.ok) throw new Error('Erro: ' + response.status);
                var result = await response.json();

                if (result.success) {
                  goToStep(5);
                } else {
                  showMsg(result.message, false);
                }
              } catch (error) {
                console.error('Erro:', error);
                showMsg('Erro ao enviar. Tente novamente.', false);
              } finally {
                currentBtn.disabled = false;
                currentBtn.textContent = 'ENVIAR';
              }
            }

            function showMsg(text, isSuccess) {
              var messageDiv = document.getElementById(isMobile ? 'message-m' : 'message');
              if (!messageDiv) return;
              messageDiv.textContent = text;
              messageDiv.className = 'mb-6 p-4 rounded-lg ' +
                (isSuccess ? 'bg-green-100 text-green-800 border border-green-200' : 'bg-red-100 text-red-800 border border-red-200');
              messageDiv.classList.remove('hidden');
            }

            function hideMsg() {
              var messageDiv = document.getElementById(isMobile ? 'message-m' : 'message');
              if (messageDiv) messageDiv.classList.add('hidden');
            }
          }
        `
      }} />
    </div>
  );
}
