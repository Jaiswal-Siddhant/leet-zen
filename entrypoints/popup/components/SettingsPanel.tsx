import { useSettingsStore } from '../store/settingsStore';
import '../styles/settings.css';
import { Settings } from '../types/StoreState';

const SETTINGS_SCHEMA: {
	key: keyof Settings;
	label: string;
}[] = [
	{ key: 'blockSolutions', label: 'Block Solutions' },
	{ key: 'blockEditorial', label: 'Block Editorial' },
	{ key: 'blockDiscussions', label: 'Block Discussions' },
	{ key: 'hideDifficulty', label: 'Hide Difficulty' },
];

export default function SettingsPanel() {
	const settings = useSettingsStore((s) => s.settings);
	const setSetting = useSettingsStore((s) => s.setSetting);

	return (
		<div className='settings-container'>
			<div className='settings-list'>
				{SETTINGS_SCHEMA.map(({ key, label }) => (
					<label className='settings-item' key={key}>
						<input
							type='checkbox'
							checked={settings[key]}
							onChange={(e) => setSetting(key, e.target.checked)}
						/>
						<span>{label}</span>
					</label>
				))}
			</div>
		</div>
	);
}
