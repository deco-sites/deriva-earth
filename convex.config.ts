import { defineConfig } from "convex/server";

export default defineConfig({
  // Configurações do projeto
  project: "deriva",
  team: "daniel-furtado",
  
  // Configurações de deployment
  deployments: {
    development: {
      deployment: "dev:resolute-bloodhound-475",
      url: "https://resolute-bloodhound-475.convex.cloud"
    },
    production: {
      deployment: "prod:lovely-chihuahua-422", 
      url: "https://lovely-chihuahua-422.convex.cloud"
    }
  }
});
