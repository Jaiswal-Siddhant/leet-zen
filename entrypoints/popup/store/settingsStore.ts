import { create } from 'zustand';
import { SettingsState } from '../types/StoreState';

export const useSettingsStore = create<SettingsState>((set) => ({
	settings: {
		blockSolutions: false,
		blockEditorial: false,
		blockDiscussions: false,
		hideDifficulty: false,
	},

	setSetting: (key, value) =>
		set((state) => {
			const updated = { ...state.settings, [key]: value };
			browser.storage.local.set({ settings: updated });
			return {
				settings: { ...state.settings, [key]: value },
			};
		}),

	setMultipleSettings: (newSettings) =>
		set((state: SettingsState) => ({
			settings: { ...state.settings, ...newSettings },
		})),

	loadSettings: async () => {
		const data = await browser.storage.local.get('settings');
		if (data.settings) {
			set({ settings: data.settings });
		}
	},
}));
