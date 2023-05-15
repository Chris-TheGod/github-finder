import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dotenv from "dotenv";

dotenv.config(); // Load environment variables from .env file

export default defineConfig(() => {
  return {
    plugins: [react()],
    // Your Vite configuration options
    // ...
  };
});
