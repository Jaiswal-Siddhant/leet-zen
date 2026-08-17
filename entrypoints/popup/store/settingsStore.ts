import { create } from 'zustand';
import { SettingsState } from '../types/StoreState';

export const useSettingsStore = create<SettingsState>((set) => ({
	settings: {
		blockSolutions: false,
		blockEditorial: false,
		blockDiscussions: false,
		hideDifficulty: false,
	},

	customTags: [],

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

	addCustomTag: (tag) =>
		set((state) => {
			if (state.customTags.some((t) => t.value === tag.value)) return state;
			const updated = [...state.customTags, tag];
			browser.storage.local.set({ customTags: updated });
			return { customTags: updated };
		}),

	loadSettings: async () => {
		const data = await browser.storage.local.get(['settings', 'customTags']);
		if (data.settings) {
			set({ settings: data.settings });
		}
		if (data.customTags) {
			set({ customTags: data.customTags });
		}
	},
}));
