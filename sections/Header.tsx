import type { ImageWidget, VideoWidget } from "apps/admin/widgets.ts";

export interface CTA {
  id?: string;
  href: string;
  text: string;
  outline?: boolean;
}

export interface Props {
  logo?: {
    src?: ImageWidget;
    alt?: string;
  };
  navigation?: {
    links: {
      label?: string;
      url?: string;
    }[];
  };
  backgroundVideo?: VideoWidget;
  title?: string;
  ctaButton?: CTA;
}

const generateLineStyles = (position: string) => `
  absolute ${position} z-50 block h-0.5 w-7 bg-white transition-all duration-200 ease-out 
`;

const lineStyles = [
  generateLineStyles("top-[-0.7rem]") +
  "peer-checked:translate-y-[0.7rem] peer-checked:rotate-[45deg]",
  generateLineStyles("top-[-0.35rem]") + "peer-checked:opacity-0",
  generateLineStyles("top-[0]") +
  "peer-checked:-translate-y-[0.2rem] peer-checked:-rotate-[45deg]",
];

export default function Header({
  logo = {
    src: "https://assets.decocache.com/derivative/63f2145a-4b99-403e-ba27-cf49104ea963/logo_deriva_horizontal_NO.svg",
    alt: "Deriva",
  },
  navigation = {
    links: [
      { label: "DERIVATIVE", url: "#derivative" },
      { label: "SISTEMA REGENERATIVO", url: "#sistema" },
      { label: "SOLUÇÕES", url: "#services" },
      { label: "MISSÃO", url: "#mission" },
    ],
  },
  backgroundVideo = "https://assets.decocache.com/derivative/d81f13fc-4f89-4c4c-a562-b434436f99bd/background2_header-(1).mp4",
  title = "REGENERANDO O OCEANO, TRANSFORMANDO MARCAS",
  ctaButton = {
    id: "cta-movement",
    href: "#movimento",
    text: "JUNTAR-SE AO MOVIMENTO",
    outline: false,
  },
}: Props) {
  return (
    <header class="relative min-h-screen overflow-hidden">
      {/* Video Background */}
      <div class="absolute inset-0 z-0">
        <video
          class="w-full h-full object-cover"
          autoplay
          muted
          loop
          playsinline
          poster=""
        >
          <source src={backgroundVideo} type="video/mp4" />
          <p>Seu navegador não suporta o elemento de vídeo.</p>
        </video>
        {/* Dark overlay for better text readability */}
        <div class="absolute inset-0 bg-black/25"></div>
        
        {/* Gradient overlay at bottom to blend with #1d1b1d background */}
        <div 
          class="absolute bottom-0 left-0 right-0 z-10" 
          style="height: 80px; background: linear-gradient(to top, #1d1b1d 0%, rgba(29, 27, 29, 0.9) 30%, rgba(29, 27, 29, 0.6) 60%, rgba(29, 27, 29, 0.2) 85%, transparent 100%);"
        ></div>
      </div>

      {/* Navigation */}
      <nav class="relative z-20 container mx-auto px-6 lg:px-8">
        <div class="flex items-center py-6">
          {/* Logo - Left */}
          <a href="/" class="flex-shrink-0">
            <img 
              src={logo.src} 
              alt={logo.alt} 
              class="h-8 md:h-10 lg:h-12 w-auto"
            />
          </a>

          {/* Desktop Navigation - Center */}
          <div class="hidden lg:flex items-center justify-center flex-1">
            <ul class="flex items-center space-x-8">
              {navigation.links.map((link) => (
                <li key={link.url}>
                  <a
                    href={link.url}
                    aria-label={link.label}
                    class="text-snow-white font-mono text-sm uppercase tracking-wider relative group"
                  >
                    {link.label}
                    <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-snow-white/70 to-snow-white/20 transition-all duration-300 group-hover:w-full"></span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Button - Right */}
          <div class="hidden lg:block">
            <button
              type="button"
              id="contactBtn"
              class="inline-block border-2 border-snow-white text-snow-white px-6 py-3 font-mono text-xs uppercase tracking-wider hover:bg-snow-white hover:text-mineral-black transition-all duration-200 rounded-lg"
            >
              CONTATO
            </button>
          </div>

          {/* Mobile Menu Button */}
          <label
            class="cursor-pointer lg:hidden relative z-50 ml-auto"
            for="menu-mobile"
            style="margin-right: 16px !important;"
          >
            <input class="hidden peer" type="checkbox" id="menu-mobile" />
            {lineStyles.map((style, index) => (
              <div key={index} class={style}></div>
            ))}
            
            {/* Mobile Menu Overlay */}
            <div class="backdrop-blur-sm bg-black/80 fixed h-full hidden inset-0 peer-checked:block w-full z-40">
              &nbsp;
            </div>
            
            {/* Mobile Menu */}
            <div class="duration-500 fixed h-full overflow-y-auto peer-checked:translate-x-0 right-0 top-0 transition translate-x-full w-full z-40">
              <div class="bg-mineral-black flex flex-col float-right gap-8 min-h-full pt-20 px-6 shadow-2xl w-4/5 max-w-sm">
                <ul class="flex flex-col gap-6">
                  {navigation?.links.map((link) => (
                    <li key={link.url}>
                      <a 
                        href={link.url} 
                        aria-label={link.label}
                        class="text-snow-white font-mono text-sm uppercase tracking-wider relative group"
                      >
                        {link.label}
                        <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-snow-white/70 to-snow-white/20 transition-all duration-300 group-hover:w-full"></span>
                      </a>
                    </li>
                  ))}
                </ul>
                <div class="mt-8">
                  <button
                    type="button"
                    id="contactBtnMobile"
                    class="inline-block border-2 border-snow-white text-snow-white px-6 py-3 font-mono text-xs uppercase tracking-wider hover:bg-snow-white hover:text-mineral-black transition-all duration-200 rounded-lg"
                  >
                    CONTATO
                  </button>
                </div>
              </div>
            </div>
          </label>
        </div>
      </nav>

      {/* Hero Content */}
      <div class="relative z-10 flex flex-col justify-between min-h-[calc(100vh-120px)] py-8">
        <div class="flex-1 flex items-center justify-center">
        <div class="container mx-auto px-4 lg:px-8 text-center">
          <h1 class="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-medium text-snow-white leading-tight mb-8 max-w-5xl mx-auto font-sans">
            {title}
          </h1>
          
          <div class="mt-12">
              <button
                type="button"
                id="ctaBtn"
              class="inline-block bg-snow-white text-mineral-black px-8 py-4 font-mono text-sm uppercase tracking-wider hover:bg-fog-gray transition-colors duration-200 shadow-lg rounded-lg"
            >
              {ctaButton?.text}
              </button>
            </div>
          </div>
        </div>
        
        {/* Sub-headline no rodapé */}
        <div class="container mx-auto px-4 lg:px-8 text-center pb-8">
          <p class="text-lg lg:text-xl text-snow-white/80 max-w-4xl mx-auto leading-relaxed">
            Uma das maiores ameaças ao oceano se torna solução desejada e inteligente
          </p>
        </div>
      </div>

      {/* Modal Popup */}
      <div id="contactModal" class="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 hidden items-center justify-center p-4">
        <div class="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
          <div class="flex flex-col lg:flex-row h-full">
            {/* Formulário - Esquerda */}
            <div class="flex-1 p-8 lg:p-12 overflow-y-auto">
              <div class="flex justify-between items-center mb-8">
                <h2 class="text-3xl lg:text-4xl font-bold text-gray-900">
                  Vamos conversar!
                </h2>
                <button 
                  type="button"
                  id="closeModal" 
                  class="text-gray-400 hover:text-gray-600 transition-colors"
                  aria-label="Fechar modal"
                >
                  <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                  </svg>
                </button>
              </div>
              
              <p class="text-lg text-gray-600 mb-8">
                Nos conte sobre o seu projeto e entenda como podemos colaborar.
              </p>

              <div id="message" class="mb-6 p-4 rounded-lg hidden"></div>

              {/* Formulário */}
              <div id="contactForm" class="space-y-6">
                <div>
                  <label for="nome" class="block text-sm font-medium text-gray-700 mb-2">
                    Nome Completo
                  </label>
                  <input
                    type="text"
                    id="nome"
                    name="nome"
                    required
                    class="w-full px-4 py-3 border-0 rounded-xl focus:bg-transparent focus:border focus:border-gray-400 focus:outline-none"
                    style="background-color: #F5F5F5; color: #1F2937;"
                    placeholder="Seu nome completo"
                  />
                </div>

                <div>
                  <label for="email" class="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    class="w-full px-4 py-3 border-0 rounded-xl focus:bg-transparent focus:border focus:border-gray-400 focus:outline-none"
                    style="background-color: #F5F5F5; color: #1F2937;"
                    placeholder="seu@email.com"
                  />
                </div>

                <div>
                  <label for="mensagem" class="block text-sm font-medium text-gray-700 mb-2">
                    Mensagem
                  </label>
                  <textarea
                    id="mensagem"
                    name="mensagem"
                    rows={5}
                    required
                    class="w-full px-4 py-3 border-0 rounded-xl focus:bg-transparent focus:border focus:border-gray-400 focus:outline-none resize-none"
                    style="background-color: #F5F5F5; color: #1F2937;"
                    placeholder="Conte-nos sobre seu projeto ou dúvida..."
                  ></textarea>
                </div>

                <button
                  type="button"
                  id="submitBtn"
                  class="w-full bg-black hover:bg-gray-800 text-white font-medium py-3 px-6 rounded-xl transition-all duration-200"
                >
                  Enviar Mensagem
                </button>
              </div>
            </div>

            {/* Imagem - Direita */}
            <div class="hidden lg:block lg:w-1/2">
              <img 
                src="https://assets.decocache.com/derivative/5f15ed8f-d966-4a9b-b620-990282e029f0/3-(6).jpg"
                alt="Deriva"
                class="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* JavaScript para Modal e Formulário */}
      <script dangerouslySetInnerHTML={{
        __html: `
          console.log('🚀 Header Modal Script carregado!');
          
          // Aguardar o DOM estar pronto
          if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', initModal);
          } else {
            initModal();
          }
          
          function initModal() {
            console.log('🚀 Inicializando modal...');
            
            const modal = document.getElementById('contactModal');
            const ctaBtn = document.getElementById('ctaBtn');
            const contactBtn = document.getElementById('contactBtn');
            const contactBtnMobile = document.getElementById('contactBtnMobile');
            const closeModal = document.getElementById('closeModal');
            const submitBtn = document.getElementById('submitBtn');
            
            if (!modal) {
              console.error('❌ Modal não encontrado!');
              return;
            }
            
            // Função para abrir modal
            function openModal() {
              console.log('📱 Abrindo modal...');
              modal.classList.remove('hidden');
              modal.classList.add('flex');
              document.body.style.overflow = 'hidden'; // Previne scroll do body
            }
            
            // Função para fechar modal
            function closeModalFunc() {
              console.log('❌ Fechando modal...');
              modal.classList.add('hidden');
              modal.classList.remove('flex');
              document.body.style.overflow = 'auto'; // Restaura scroll do body
              
              // Limpar formulário
              const nomeInput = document.getElementById('nome');
              const emailInput = document.getElementById('email');
              const mensagemInput = document.getElementById('mensagem');
              const messageDiv = document.getElementById('message');
              
              if (nomeInput) nomeInput.value = '';
              if (emailInput) emailInput.value = '';
              if (mensagemInput) mensagemInput.value = '';
              if (messageDiv) {
                messageDiv.classList.add('hidden');
                messageDiv.textContent = '';
              }
            }
            
            // Event listeners para abrir modal
            if (ctaBtn) {
              ctaBtn.addEventListener('click', (e) => {
                e.preventDefault();
                openModal();
              });
            }
            
            if (contactBtn) {
              contactBtn.addEventListener('click', (e) => {
                e.preventDefault();
                openModal();
              });
            }
            
            if (contactBtnMobile) {
              contactBtnMobile.addEventListener('click', (e) => {
                e.preventDefault();
                openModal();
                // Fechar menu mobile se estiver aberto
                const menuCheckbox = document.getElementById('menu-mobile');
                if (menuCheckbox) {
                  menuCheckbox.checked = false;
                }
              });
            }
            
            // Event listener para fechar modal
            if (closeModal) {
              closeModal.addEventListener('click', closeModalFunc);
            }
            
            // Fechar modal clicando no backdrop
            modal.addEventListener('click', (e) => {
              if (e.target === modal) {
                closeModalFunc();
              }
            });
            
            // Fechar modal com ESC
            document.addEventListener('keydown', (e) => {
              if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
                closeModalFunc();
              }
            });
            
            // Função para lidar com o submit do formulário
            const handleSubmit = async function(e) {
              console.log('🚀 HANDLE SUBMIT CHAMADO!', e);
              e.preventDefault();
              e.stopPropagation();
              
              const nomeInput = document.getElementById('nome');
              const emailInput = document.getElementById('email');
              const mensagemInput = document.getElementById('mensagem');
              const messageDiv = document.getElementById('message');
              
              const data = {
                nome: nomeInput.value,
                email: emailInput.value,
                mensagem: mensagemInput.value
              };
              
              console.log('📝 Dados coletados:', data);
              
              // Validar dados
              if (!data.nome || !data.email || !data.mensagem) {
                showMessage('Todos os campos são obrigatórios.', false);
                return;
              }
              
              submitBtn.disabled = true;
              submitBtn.textContent = 'Enviando...';
              
              try {
                console.log('🔄 Enviando via Deco Action...');
                
                // Usar a action do Deco para bypass do CORS
                const response = await fetch('/live/invoke/site/actions/submitToConvex.ts', {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json',
                  },
                  body: JSON.stringify({
                    nome: data.nome.trim(),
                    email: data.email.trim().toLowerCase(),
                    mensagem: data.mensagem.trim()
                  })
                });
                
                console.log('📡 Resposta da Action:', response.status, response.statusText);
                
                if (!response.ok) {
                  const errorText = await response.text();
                  console.error('❌ Erro na Action:', errorText);
                  throw new Error('Erro na Action: ' + response.status);
                }
                
                const result = await response.json();
                console.log('✅ Sucesso via Action:', result);
                
                if (result.success) {
                  showMessage(result.message, true);
                  
                  // Limpar formulário
                  nomeInput.value = '';
                  emailInput.value = '';
                  mensagemInput.value = '';
                  
                  // Fechar modal após 2 segundos
                  setTimeout(() => {
                    closeModalFunc();
                  }, 2000);
                } else {
                  showMessage(result.message, false);
                }
                
              } catch (error) {
                console.error('❌ Erro:', error);
                showMessage('Erro ao enviar mensagem. Tente novamente.', false);
              } finally {
                submitBtn.disabled = false;
                submitBtn.textContent = 'Enviar Mensagem';
              }
            };
            
            function showMessage(text, isSuccess) {
              const messageDiv = document.getElementById('message');
              messageDiv.textContent = text;
              messageDiv.className = 'mb-6 p-4 rounded-lg ' + 
                (isSuccess ? 'bg-green-100 text-green-800 border border-green-200' : 'bg-red-100 text-red-800 border border-red-200');
              messageDiv.classList.remove('hidden');
            }
            
            // Adicionar event listener ao botão de submit
            if (submitBtn) {
              submitBtn.addEventListener('click', handleSubmit);
            }
            
            console.log('✅ Modal configurado! Formulário inicializado.');
          }
        `
      }} />
    </header>
  );
}
