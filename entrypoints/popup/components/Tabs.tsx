import { useState } from 'react';
import SettingsPanel from './SettingsPanel';
import RandomProblemPanel from './RandomProblemPanel';
import '../styles/Tabs.css';

export default function Tabs() {
	const [activeTab, setActiveTab] = useState<'general' | 'random'>('general');

	return (
		<div className='tabs-container'>
			<div className='tabs-header'>
				<button
					className={`tab-btn ${
						activeTab === 'general' ? 'active' : ''
					}`}
					onClick={() => setActiveTab('general')}>
					General
				</button>

				<button
					className={`tab-btn ${
						activeTab === 'random' ? 'active' : ''
					}`}
					onClick={() => setActiveTab('random')}>
					Random Problem
				</button>
			</div>

			<div className='tabs-content'>
				{activeTab === 'general' && <SettingsPanel />}
				{activeTab === 'random' && <RandomProblemPanel />}
			</div>
		</div>
	);
}
