
export interface Settings {
    blockSolutions: boolean;
    blockEditorial: boolean;
    blockDiscussions: boolean;
    hideDifficulty: boolean;
}


export interface SettingsState {
    settings: Settings;
    setSetting: (key: keyof Settings, value: boolean) => void;
    setMultipleSettings: (newSettings: Partial<Settings>) => void;
    loadSettings: () => void;
}
