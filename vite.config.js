import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/My-React-Vite-Project/", // use your repo name here
  plugins: [react()],
});
