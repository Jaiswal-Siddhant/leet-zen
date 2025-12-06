import { strategies } from "./popup/strategies";

export default defineContentScript({
	matches: ['*://leetcode.com/*'],
	runAt: 'document_end',

	main() {
		// Apply Settings for every strategy
		function applySettings(settings: any) {
			if (!settings) return;

			strategies.forEach((strategy) => strategy.apply(settings));
		}

		// Load initial settings
		browser.storage.local.get('settings').then(({ settings }) => {
			applySettings(settings);
		});

		// Listen for popup changes
		browser.storage.onChanged.addListener((changes) => {
			if (changes.settings) applySettings(changes.settings.newValue);
		});

		// SPA fix
		const observer = new MutationObserver(() => {
			browser.storage.local.get('settings').then(({ settings }) => {
				applySettings(settings);
			});
		});

		observer.observe(document.body, { childList: true, subtree: true });
	},
});
