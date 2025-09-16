import { mutation, query } from "./_generated/server.js";
import { v } from "convex/values";

export const submitContactForm = mutation({
  args: {
    nome: v.string(),
    email: v.string(),
    mensagem: v.string(),
  },
  handler: async (ctx, args) => {
    const now = Date.now();
    const contactId = await ctx.db.insert("contact_forms", {
      nome: args.nome,
      email: args.email,
      mensagem: args.mensagem,
      created_at: now,
    });
    
    return { id: contactId };
  },
});

export const listar = query({
  args: {},
  handler: async (ctx) => {
    // Lê todos os documentos da tabela "contact_forms" ordenados por data de criação
    return await ctx.db
      .query("contact_forms")
      .withIndex("by_created_at")
      .order("desc")
      .collect();
  },
});

export const buscarPorEmail = query({
  args: {
    email: v.string(),
  },
  handler: async (ctx, args) => {
    return await ctx.db
      .query("contact_forms")
      .withIndex("by_email", (q) => q.eq("email", args.email))
      .collect();
  },
});

