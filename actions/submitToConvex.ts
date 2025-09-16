import { AppContext } from "../apps/site.ts";
import { ConvexHttpClient } from "convex/browser";

export interface Props {
  nome: string;
  email: string;
  mensagem: string;
}

export default async function SubmitToConvexAction(
  props: Props,
  req: Request,
  ctx: AppContext,
) {
  try {
    console.log("🚀 SubmitToConvexAction chamada com:", props);
    
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

    // URL do Convex (production)
    const convexUrl = "https://watchful-capybara-907.convex.cloud";
    
    console.log("🔄 Chamando Convex via HTTP Client...");
    
    // Usar ConvexHttpClient para chamar a mutation
    const client = new ConvexHttpClient(convexUrl);
    
    const result = await client.mutation("contatos:submitContactForm", {
      nome: props.nome.trim(),
      email: props.email.trim().toLowerCase(),
      mensagem: props.mensagem.trim()
    });

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