import { AppContext } from "../apps/site.ts";
import { ConvexHttpClient } from "convex/browser";

export interface Props {
  nome?: string;
  email?: string;
  produtos?: string;
  marcas?: string;
}

export default async function SubmitActivationAction(
  props: Props,
  req: Request,
  ctx: AppContext,
) {
  try {
    const nome = props.nome || "";
    const email = props.email || "";
    const produtos = props.produtos || "";
    const marcas = props.marcas || "";

    if (email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        return {
          success: false,
          message: "Por favor, insira um email válido.",
        };
      }
    }

    const convexUrl = "https://watchful-capybara-907.convex.cloud";
    const client = new ConvexHttpClient(convexUrl);
    const result = await client.mutation("activations:submitActivationForm", {
      nome: nome.trim(),
      email: email.trim().toLowerCase(),
      produtos: produtos.trim(),
      marcas: marcas.trim(),
    });

    return {
      success: true,
      message: "Ativação registrada com sucesso!",
      id: result?.id,
    };
  } catch (error) {
    console.error("Erro ao salvar ativação no Convex:", error);
    return {
      success: false,
      message: "Erro ao enviar. Tente novamente em alguns instantes.",
    };
  }
}
