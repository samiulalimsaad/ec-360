import react from "@vitejs/plugin-react";
import { defineConfig, loadEnv } from "vite";

const env = loadEnv(process.env.NODE_ENV, process.cwd());

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    define: {
        "process.env": env,
    },
});
