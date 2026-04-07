import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  contact_forms: defineTable({
    nome: v.string(),
    email: v.string(),
    mensagem: v.string(),
    created_at: v.number(),
    assunto: v.optional(v.string()),
    empresa: v.optional(v.string()),
    telefone: v.optional(v.string()),
    origem: v.optional(v.string()),
    prioridade: v.optional(v.string()),
    status: v.optional(v.string()),
    updated_at: v.optional(v.number()),
  })
    .index("by_created_at", ["created_at"])
    .index("by_email", ["email"]),

  activation_forms: defineTable({
    nome: v.string(),
    email: v.string(),
    produtos: v.string(),
    marcas: v.string(),
    created_at: v.number(),
  })
    .index("by_created_at", ["created_at"])
    .index("by_email", ["email"]),
});
