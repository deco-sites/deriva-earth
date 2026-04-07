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

    // Enviar para o Notion
    const notionApiKey = Deno.env.get("NOTION_API_KEY");

    if (notionApiKey) {
      try {
        const notionDatabaseId = "33b87738-37ce-800a-b980-fccc9912f6c8";

        const pageData = {
          parent: { database_id: notionDatabaseId },
          properties: {
            "Nome": {
              title: [{ text: { content: nome.trim() || "N/A" } }],
            },
            "Email": {
              email: email.trim().toLowerCase() || null,
            },
            "Produtos Sugeridos": {
              rich_text: [{ text: { content: produtos.trim() || "N/A" } }],
            },
            "Marcas Sugeridas": {
              rich_text: [{ text: { content: marcas.trim() || "N/A" } }],
            },
          },
        };

        const notionResponse = await fetch("https://api.notion.com/v1/pages", {
          method: "POST",
          headers: {
            "Authorization": `Bearer ${notionApiKey}`,
            "Content-Type": "application/json",
            "Notion-Version": "2022-06-28",
          },
          body: JSON.stringify(pageData),
        });

        if (!notionResponse.ok) {
          const errorText = await notionResponse.text();
          console.error("Erro Notion API:", errorText);
        }
      } catch (e) {
        console.error("Erro ao conectar com Notion:", e);
      }
    }

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
