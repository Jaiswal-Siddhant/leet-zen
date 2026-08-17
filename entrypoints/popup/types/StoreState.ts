import { Options } from './OptionsStateMachine';

export interface Settings {
    blockSolutions: boolean;
    blockEditorial: boolean;
    blockDiscussions: boolean;
    hideDifficulty: boolean;
}


export interface SettingsState {
    settings: Settings;
    customTags: Options[];
    setSetting: (key: keyof Settings, value: boolean) => void;
    setMultipleSettings: (newSettings: Partial<Settings>) => void;
    addCustomTag: (tag: Options) => void;
    loadSettings: () => void;
}
