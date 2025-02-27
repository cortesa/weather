import { defineConfig } from "vite"
import react from "@vitejs/plugin-react-swc"
import { TanStackRouterVite } from "@tanstack/router-plugin/vite"
import tailwindcss from "@tailwindcss/vite"
import path from "node:path"

const isTest = process.env.NODE_ENV === "test"

// https://vite.dev/config/
export default defineConfig({
	server: {
		port: 3000
	},
	plugins: [
		!isTest && TanStackRouterVite({ autoCodeSplitting: true }),
		react(),
		tailwindcss()
	],
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "src"),
		},
	},
})
