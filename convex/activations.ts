import { mutation, query } from "./_generated/server.js";
import { v } from "convex/values";
import { internal } from "./_generated/api.js";

export const submitActivationForm = mutation({
  args: {
    nome: v.optional(v.string()),
    email: v.optional(v.string()),
    produtos: v.optional(v.string()),
    marcas: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    const now = Date.now();
    const id = await ctx.db.insert("activation_forms", {
      nome: args.nome ?? "",
      email: args.email ?? "",
      produtos: args.produtos ?? "",
      marcas: args.marcas ?? "",
      created_at: now,
    });

    // Notificar por email
    await ctx.scheduler.runAfter(0, internal.emails.sendContactNotification, {
      nome: args.nome ?? "",
      email: args.email ?? "",
      mensagem: `[ATIVAÇÃO]\n\nProdutos: ${args.produtos ?? ""}\n\nMarcas: ${args.marcas ?? ""}`,
    });

    return { id };
  },
});

export const listar = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db
      .query("activation_forms")
      .withIndex("by_created_at")
      .order("desc")
      .collect();
  },
});
