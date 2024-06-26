import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	css: {
		preprocessorOptions: {
			scss: {
				additionalData: `
				@use './src/lib/scss/variables' as *;
				@use './src/lib/scss/mixins' as *;
				`
			}
		}
	}
});
