import { internalAction } from "./_generated/server.js";
import { v } from "convex/values";

export const saveActivationToNotion = internalAction({
  args: {
    nome: v.string(),
    email: v.string(),
    produtos: v.string(),
    marcas: v.string(),
  },
  handler: async (ctx, args) => {
    const notionApiKey = process.env.NOTION_API_KEY;
    if (!notionApiKey) {
      console.error("NOTION_API_KEY não configurada");
      return { success: false };
    }

    const notionDatabaseId = "33b87738-37ce-800a-b980-fccc9912f6c8";

    const response = await fetch("https://api.notion.com/v1/pages", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${notionApiKey}`,
        "Content-Type": "application/json",
        "Notion-Version": "2022-06-28",
      },
      body: JSON.stringify({
        parent: { database_id: notionDatabaseId },
        properties: {
          "Nome": {
            title: [{ text: { content: args.nome || "N/A" } }],
          },
          "Email": {
            email: args.email || null,
          },
          "Produtos Sugeridos": {
            rich_text: [{ text: { content: args.produtos || "N/A" } }],
          },
          "Marcas Sugeridas": {
            rich_text: [{ text: { content: args.marcas || "N/A" } }],
          },
        },
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Erro Notion API:", errorText);
      return { success: false };
    }

    return { success: true };
  },
});
