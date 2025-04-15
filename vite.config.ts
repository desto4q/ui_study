import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tsConfigPaths from "vite-tsconfig-paths";
import Pages from "vite-plugin-pages";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
	plugins: [
		react(),
		Pages(),
		tsConfigPaths(),
		tailwindcss()
	],
});
