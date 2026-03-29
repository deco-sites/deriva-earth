import { internalAction } from "./_generated/server.js";
import { v } from "convex/values";

export const sendContactNotification = internalAction({
  args: {
    nome: v.string(),
    email: v.string(),
    mensagem: v.string(),
  },
  handler: async (ctx, args) => {
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      throw new Error("RESEND_API_KEY não configurada");
    }

    const notificationEmail = process.env.NOTIFICATION_EMAIL ?? "daniel@deriva.earth";

    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        from: "Deriva <contato@deriva.earth>",
        to: [notificationEmail, "joaohashi@gmail.com"],
        subject: `Novo contato: ${args.nome}`,
        html: `
          <h2>Novo contato pelo site</h2>
          <p><strong>Nome:</strong> ${args.nome}</p>
          <p><strong>Email:</strong> ${args.email}</p>
          <p><strong>Mensagem:</strong></p>
          <p>${args.mensagem}</p>
          <hr />
          <p style="color: #888; font-size: 12px;">Enviado pelo formulário de contato - Deriva Earth</p>
        `,
      }),
    });

    if (!response.ok) {
      const error = await response.text();
      throw new Error(`Erro ao enviar email: ${error}`);
    }

    return { success: true };
  },
});
