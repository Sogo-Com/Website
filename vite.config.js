import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig, searchForWorkspaceRoot } from 'vite';

console.log(searchForWorkspaceRoot(process.cwd()));
export default defineConfig({
	plugins: [sveltekit()],

	server: {
		fs: {
			allow: [searchForWorkspaceRoot(process.cwd()) + '/uploads']
		}
	}
});
