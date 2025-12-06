import { SettingsState } from "./StoreState";

export interface SettingStrategy {
    apply(settings: SettingsState['settings']): void;
}
