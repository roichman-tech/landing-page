// @ts-check
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import { defineConfig } from 'astro/config';

export default defineConfig({
	integrations: [
		react(),
		tailwind({
			applyBaseStyles: false,
		}),
	],
	alias: {
		"@": "./src",
	},
	build: {
		// Inline built CSS to avoid a separate render-blocking stylesheet request.
		inlineStylesheets: "always",
	},
});
