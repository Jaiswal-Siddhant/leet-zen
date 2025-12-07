import { DIFFICULTY_OPTIONS } from '../constants/OPTIONS';
import { getRandomLeetCodeQuestion } from '../services/leetcode/randomQuestion';
import '../styles/RandomProblemPanel.css';
import TagSelector from './TagSelector';

export default function RandomProblemPanel() {
	const [tags, setTags] = useState<string[]>([]);
	const [difficulty, setDifficulty] = useState('');
	const [isLoading, setIsLoading] = useState(false);

	const handleSubmit = async () => {
		try {
			setIsLoading(true);

			const slug = await getRandomLeetCodeQuestion(tags, difficulty);

			if (slug == '') {
				alert('No question found!! Please change the filters.');
				return;
			}

			window.open(`https://leetcode.com/problems/${slug}`, '_blank');
		} catch (error) {
			console.log(error);
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<div className='random-panel'>
			{isLoading && (
				<div className='abs-loader'>
					<div className='spinner'></div>
				</div>
			)}
			<h2>Get Random Problem 🎲</h2>

			<p>
				Select filters (optional) and click the button to open a random
				LeetCode problem.
			</p>

			<div className='random-section'>
				<label className='label'>Difficulty</label>
				<select
					className='input'
					onChange={(item) => setDifficulty(item.target.value)}>
					{DIFFICULTY_OPTIONS.map((difficulty) => {
						return (
							<option value={difficulty.value}>
								{difficulty.key}
							</option>
						);
					})}
				</select>
			</div>

			<div className='random-section'>
				<label className='label'>Tags</label>
				<TagSelector selectedTags={tags} onChange={setTags} />
			</div>

			<button className='generate-btn' onClick={handleSubmit}>
				Open Random Problem
			</button>
		</div>
	);
}
