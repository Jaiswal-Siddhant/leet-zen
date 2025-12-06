import { defineConfig } from 'wxt';

// See https://wxt.dev/api/config.html
export default defineConfig({
	modules: ['@wxt-dev/module-react'],
	manifest: {
		permissions: ['storage'],
		content_scripts: [
			{
				matches: ['*://leetcode.com/*'],
				js: ['entrypoints/content.ts'],
				run_at: 'document_end',
			},
		],
	},
});
