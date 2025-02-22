import { defineConfig } from "vite"
import react from "@vitejs/plugin-react-swc"
import { TanStackRouterVite } from "@tanstack/router-plugin/vite"

const isTest = process.env.NODE_ENV === "test"

// https://vite.dev/config/
export default defineConfig({
	plugins: [
		!isTest && TanStackRouterVite({ autoCodeSplitting: true }),
		react(),
	],
})
