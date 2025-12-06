import { SettingStrategy } from "../types/SettingsState";
import BlockDiscussionsStrategy from "./BlockDiscussionsStrategy";
import { BlockSolutionsStrategy, BlockEditorialStrategy } from "./BlockTopTabsStrategy";
import { HideDifficultyStrategy } from "./HideDifficultyStrategy";

export const strategies: SettingStrategy[] = [
    new BlockSolutionsStrategy(),
    new BlockEditorialStrategy(),
    new HideDifficultyStrategy(),
    new BlockDiscussionsStrategy()
]