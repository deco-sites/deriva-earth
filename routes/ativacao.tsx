import { defineRoute } from "$fresh/server.ts";
import ActivationForm from "../sections/ActivationForm.tsx";

export default defineRoute((_req, _ctx) => {
  return <ActivationForm />;
});
