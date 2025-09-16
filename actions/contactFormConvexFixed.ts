import { AppContext } from "../apps/site.ts";

export interface Props {
  nome: string;
  email: string;
  mensagem: string;
}

export default async function ContactFormConvexFixedAction(
  props: Props,
  req: Request,
  ctx: AppContext,
) {
  try {
    console.log("🚀 ContactFormConvexFixedAction chamada com:", props);
    
    // Validar dados de entrada
    if (!props.nome || !props.email || !props.mensagem) {
      return {
        success: false,
        message: "Todos os campos são obrigatórios.",
      };
    }

    // Validar formato do email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(props.email)) {
      return {
        success: false,
        message: "Por favor, insira um email válido.",
      };
    }

    // URL correta do Convex HTTP Actions
    const CONVEX_HTTP_URL = "https://precise-cassowary-240.convex.site";
    
    console.log("🔄 Chamando Convex HTTP API...");
    console.log("📡 URL:", `${CONVEX_HTTP_URL}/api/mutations/contatos/submitContactForm`);
    
    // Chamar a função do Convex via HTTP Actions
    const response = await fetch(`${CONVEX_HTTP_URL}/api/mutations/contatos/submitContactForm`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        nome: props.nome.trim(),
        email: props.email.trim().toLowerCase(),
        mensagem: props.mensagem.trim(),
      }),
    });

    console.log("📡 Resposta do Convex:", response.status, response.statusText);

    if (!response.ok) {
      const errorText = await response.text();
      console.error("❌ Erro da API Convex:", errorText);
      throw new Error(`Convex API error: ${response.status} - ${errorText}`);
    }

    const result = await response.json();
    console.log("✅ Dados salvos no Convex:", result);

    return {
      success: true,
      message: "Mensagem enviada com sucesso! Entraremos em contato em breve.",
      id: result.id,
    };
  } catch (error) {
    console.error("❌ Erro ao salvar no Convex:", error);
    return {
      success: false,
      message: "Erro ao enviar mensagem. Tente novamente em alguns instantes.",
    };
  }
}
