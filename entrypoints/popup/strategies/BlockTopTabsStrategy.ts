import { SettingStrategy } from "../types/SettingsState";
import { SettingsState } from "../types/StoreState";

export class GenericTabsBlocker implements SettingStrategy {
    private settingKey;
    private selector;

    constructor(settingKey: keyof SettingsState['settings'], selector: string) {
        this.settingKey = settingKey;
        this.selector = selector;
    }

    apply(settings: SettingsState['settings']): void {
        if (settings[this.settingKey] === undefined) return;

        const els = document.querySelectorAll(this.selector);

        els.forEach((el) => {
            const tab = el.closest(
                ".flexlayout__tab_button.flexlayout__tab_button_top.flexlayout__tab_button--unselected"
            ) as HTMLElement | null;

            if (!tab) return;

            tab.style.display = settings[this.settingKey] ? "none" : "flex";

            const next = tab.nextElementSibling;
            if (next?.classList.contains("flexlayout__tabset_tab_divider")) {
                (next as HTMLElement).style.display = settings[this.settingKey] ? "none" : "flex";
            }
        });
    }
}

class BlockSolutionsStrategy extends GenericTabsBlocker {
    constructor() {
        super("blockSolutions", "#solutions_tab");
    }
}

class BlockEditorialStrategy extends GenericTabsBlocker {
    constructor() {
        super("blockEditorial", "#editorial_tab");
    }
}


export {
    BlockSolutionsStrategy,
    BlockEditorialStrategy
}