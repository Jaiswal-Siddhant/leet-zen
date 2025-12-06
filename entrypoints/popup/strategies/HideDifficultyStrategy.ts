import { SettingStrategy } from "../types/SettingsState";
import { SettingsState } from "../types/StoreState";

export class HideDifficultyStrategy implements SettingStrategy {
    apply(settings: SettingsState["settings"]): void {
        const selector = `[class*="text-difficulty-"]`;

        const element = document.querySelector(selector);

        element && ((element as HTMLElement).style.display = settings.hideDifficulty ? "none" : 'flex');
    }
}