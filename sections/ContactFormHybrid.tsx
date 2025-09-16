export interface Props {
  title?: string;
  description?: string;
}

export default function ContactFormHybrid({
  title = "Vamos conversar!",
  description = "nos conte sobre o seu projeto e entenda como podemos colaborar."
}: Props) {
  return (
    <div class="relative min-h-screen">
      {/* Imagem de fundo simples */}
      <img 
        src="https://assets.decocache.com/derivative/9c51b37a-0a0b-41e8-bebc-98bea5946f87/Jubarte-I-(1).jpg"
        alt="Background"
        class="absolute inset-0 w-full h-full object-cover z-0"
      />
      
      {/* Conteúdo */}
      <div class="container mx-auto px-4 py-16 relative z-10">
        {/* Desktop Layout */}
        <div class="hidden lg:grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-screen py-8">
          {/* Textos à esquerda */}
          <div class="text-left scroll-animate" style="opacity: 0; transform: translateY(30px); transition: opacity 0.8s ease-out, transform 0.8s ease-out;">
            <h2 class="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              {title}
            </h2>
            <p class="text-lg sm:text-xl lg:text-2xl text-white leading-relaxed">
              {description}
            </p>
          </div>

          {/* Formulário à direita */}
          <div class="flex justify-end scroll-animate" style="opacity: 0; transform: translateY(30px); transition: opacity 0.8s ease-out, transform 0.8s ease-out;">
            <div class="rounded-2xl shadow-lg p-8 w-full max-w-md" style="background-color: #FCFAFA;">
            <div id="message" class="mb-6 p-4 rounded-lg hidden"></div>

            {/* Formulário sem form tag - usando divs */}
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
          </div>
        </div>

        {/* Mobile Layout */}
        <div class="block lg:hidden py-8">
          {/* Textos no topo */}
          <div class="text-center mb-8 scroll-animate" style="opacity: 0; transform: translateY(30px); transition: opacity 0.8s ease-out, transform 0.8s ease-out;">
            <h2 class="text-3xl sm:text-4xl font-bold text-white mb-4 leading-tight">
              {title}
            </h2>
            <p class="text-base sm:text-lg text-white leading-relaxed px-4">
              {description}
            </p>
          </div>

          {/* Formulário abaixo */}
          <div class="flex justify-center scroll-animate" style="opacity: 0; transform: translateY(30px); transition: opacity 0.8s ease-out, transform 0.8s ease-out;">
            <div class="rounded-2xl shadow-lg p-6 w-full max-w-sm" style="background-color: #FCFAFA;">
            <div id="message-mobile" class="mb-6 p-4 rounded-lg hidden"></div>

            {/* Formulário sem form tag - usando divs */}
            <div id="contactForm-mobile" class="space-y-4">
              <div>
                <label for="nome-mobile" class="block text-sm font-medium text-gray-700 mb-2">
                  Nome Completo
                </label>
                <input
                  type="text"
                  id="nome-mobile"
                  name="nome"
                  required
                  class="w-full px-4 py-3 border-0 rounded-xl focus:bg-transparent focus:border focus:border-gray-400 focus:outline-none"
                  style="background-color: #F5F5F5; color: #1F2937;"
                  placeholder="Seu nome completo"
                />
              </div>

              <div>
                <label for="email-mobile" class="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email-mobile"
                  name="email"
                  required
                  class="w-full px-4 py-3 border-0 rounded-xl focus:bg-transparent focus:border focus:border-gray-400 focus:outline-none"
                  style="background-color: #F5F5F5; color: #1F2937;"
                  placeholder="seu@email.com"
                />
              </div>

              <div>
                <label for="mensagem-mobile" class="block text-sm font-medium text-gray-700 mb-2">
                  Mensagem
                </label>
                <textarea
                  id="mensagem-mobile"
                  name="mensagem"
                  rows={4}
                  required
                  class="w-full px-4 py-3 border-0 rounded-xl focus:bg-transparent focus:border focus:border-gray-400 focus:outline-none resize-none"
                  style="background-color: #F5F5F5; color: #1F2937;"
                  placeholder="Conte-nos sobre seu projeto ou dúvida..."
                ></textarea>
              </div>

              <button
                type="button"
                id="submitBtn-mobile"
                class="w-full bg-black hover:bg-gray-800 text-white font-medium py-3 px-6 rounded-xl transition-all duration-200"
              >
                Enviar Mensagem
              </button>
            </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div class="relative z-10">
        {/* Linha de gradiente para separar */}
        <div class="h-px bg-gradient-to-r from-transparent via-white to-transparent opacity-50"></div>
        
        <div class="container mx-auto px-4 py-6">
          {/* Desktop Layout */}
          <div class="hidden md:flex md:flex-row items-center justify-between gap-4">
            {/* Logo à esquerda */}
            <div class="flex-shrink-0">
              <img 
                src="https://assets.decocache.com/derivative/63f2145a-4b99-403e-ba27-cf49104ea963/logo_deriva_horizontal_NO.svg"
                alt="Deriva Logo"
                class="h-8 w-auto"
              />
            </div>

            {/* Ícones centralizados */}
            <div class="flex items-center gap-6">
              <a 
                href="https://www.instagram.com/deriva_co?igsh=eWl4anFkc3JkYzBh"
                target="_blank"
                rel="noopener noreferrer"
                class="text-white hover:text-gray-300 transition-colors"
              >
                <img 
                  src="https://assets.decocache.com/derivative/44409299-5cf2-4846-88aa-ed7a5e4c31da/insta.svg"
                  alt="Instagram"
                  class="w-6 h-6"
                />
              </a>
              
              <a 
                href="https://www.linkedin.com/company/deriva-earth"
                target="_blank"
                rel="noopener noreferrer"
                class="text-white hover:text-gray-300 transition-colors"
              >
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>

            {/* Copyright à direita */}
            <div class="text-white text-sm">
              © 2025 Deriva
            </div>
          </div>

          {/* Mobile Layout - Tudo na mesma linha */}
          <div class="flex md:hidden items-center justify-between gap-2">
            {/* Logo */}
            <div class="flex-shrink-0">
              <img 
                src="https://assets.decocache.com/derivative/63f2145a-4b99-403e-ba27-cf49104ea963/logo_deriva_horizontal_NO.svg"
                alt="Deriva Logo"
                class="h-6 w-auto"
              />
            </div>

            {/* Ícones */}
            <div class="flex items-center gap-4">
              <a 
                href="https://www.instagram.com/deriva_co?igsh=eWl4anFkc3JkYzBh"
                target="_blank"
                rel="noopener noreferrer"
                class="text-white hover:text-gray-300 transition-colors"
              >
                <img 
                  src="https://assets.decocache.com/derivative/44409299-5cf2-4846-88aa-ed7a5e4c31da/insta.svg"
                  alt="Instagram"
                  class="w-5 h-5"
                />
              </a>
              
              <a 
                href="https://www.linkedin.com/company/deriva-earth"
                target="_blank"
                rel="noopener noreferrer"
                class="text-white hover:text-gray-300 transition-colors"
              >
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>

            {/* Copyright */}
            <div class="text-white text-xs flex-shrink-0">
              © 2025 Deriva
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

      <script dangerouslySetInnerHTML={{
        __html: `
          console.log('🚀 Script carregado! - HYBRID VERSION');
          console.log('🔍 Verificando se estamos no arquivo correto...');
          
          // Aguardar o DOM estar pronto
          if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', initForm);
          } else {
            initForm();
          }
          
          function initForm() {
            console.log('🚀 Inicializando formulário...');
            
            const submitBtn = document.getElementById('submitBtn');
            const submitBtnMobile = document.getElementById('submitBtn-mobile');
            
            if (!submitBtn && !submitBtnMobile) {
              console.error('❌ Botão não encontrado!');
              return;
            }
            
            console.log('✅ Botão encontrado!');
            
            // Função para lidar com o submit
            const handleSubmit = async function(e) {
            console.log('🚀 HANDLE SUBMIT CHAMADO!', e);
            e.preventDefault();
            e.stopPropagation();
            
            // Detectar se é mobile ou desktop
            const isMobile = window.innerWidth < 1024;
            const nomeInput = document.getElementById(isMobile ? 'nome-mobile' : 'nome');
            const emailInput = document.getElementById(isMobile ? 'email-mobile' : 'email');
            const mensagemInput = document.getElementById(isMobile ? 'mensagem-mobile' : 'mensagem');
            const currentSubmitBtn = document.getElementById(isMobile ? 'submitBtn-mobile' : 'submitBtn');
            const messageDiv = document.getElementById(isMobile ? 'message-mobile' : 'message');
            
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
            
            currentSubmitBtn.disabled = true;
            currentSubmitBtn.textContent = 'Enviando...';
            
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
              } else {
                showMessage(result.message, false);
              }
              
            } catch (error) {
              console.error('❌ Erro:', error);
              showMessage('Erro ao enviar mensagem. Tente novamente.', false);
            } finally {
              currentSubmitBtn.disabled = false;
              currentSubmitBtn.textContent = 'Enviar Mensagem';
            }
            });
            
            function showMessage(text, isSuccess) {
              const isMobile = window.innerWidth < 1024;
              const messageDiv = document.getElementById(isMobile ? 'message-mobile' : 'message');
              messageDiv.textContent = text;
              messageDiv.className = 'mb-6 p-4 rounded-lg ' + 
                (isSuccess ? 'bg-green-100 text-green-800 border border-green-200' : 'bg-red-100 text-red-800 border border-red-200');
              messageDiv.classList.remove('hidden');
            }
            
            // Adicionar event listeners
            if (submitBtn) {
              submitBtn.addEventListener('click', handleSubmit);
            }
            if (submitBtnMobile) {
              submitBtnMobile.addEventListener('click', handleSubmit);
            }
          }
          
          console.log('✅ Script configurado! Formulário inicializado.');
        `
      }} />
    </div>
  );
}