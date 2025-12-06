import { SettingStrategy } from "../types/SettingsState";
import { SettingsState } from "../types/StoreState";

export default class BlockDiscussionsStrategy implements SettingStrategy {
    apply(settings: SettingsState["settings"]): void {
        const selector =
            ".group.flex.cursor-pointer.items-center.transition-colors.text-label-2.dark\\:text-dark-label-2.hover\\:text-label-1.dark\\:hover\\:text-dark-label-1";

        const elements = document.querySelectorAll(selector);

        if (elements.length > 0) {
            const lastEl = elements[elements.length - 1];
            const prevEl = lastEl?.parentElement?.parentElement?.previousElementSibling;

            lastEl && ((lastEl as HTMLElement).style.display = settings.blockDiscussions ? "none" : 'flex');
            prevEl && ((prevEl as HTMLElement).style.display = settings.blockDiscussions ? "none" : 'flex');
        }
    }
}