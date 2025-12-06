import wxtLogo from '@/assets/logo.jpg';
import './App.css';
import { useSettingsStore } from './store/settingsStore';
import SettingsPanel from './components/SettingsPanel';

function App() {
	const { loadSettings } = useSettingsStore();

	useEffect(() => {
		loadSettings();
	}, []);

	return (
		<>
			<div>
				<img src={wxtLogo} className='logo' alt='WXT logo' />
			</div>
			<h1>LeetZen</h1>
			<h3>Focus on Leetcode without distractions✨</h3>
			<div className='card'>
				<SettingsPanel />
			</div>
		</>
	);
}

export default App;
