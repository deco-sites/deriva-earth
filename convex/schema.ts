import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  contact_forms: defineTable({
    nome: v.string(),
    email: v.string(),
    mensagem: v.string(),
    created_at: v.number(),
  })
    .index("by_created_at", ["created_at"])
    .index("by_email", ["email"]),
});
