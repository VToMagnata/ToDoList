import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // aceita conexões externas, mostrando o IP da máquina na rede local
  },
});
