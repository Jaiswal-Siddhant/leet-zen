import './TagSelector.css';
import { ALL_TAGS } from '../constants/OPTIONS';
import { Options } from '../types/OptionsStateMachine';

function slugToDisplayName(slug: string): string {
	return slug
		.split('-')
		.map((w) => w.charAt(0).toUpperCase() + w.slice(1))
		.join(' ');
}

export default function TagSelector({
	selectedTags,
	onChange,
	customTags,
	onAddCustomTag,
}: {
	selectedTags: string[];
	onChange: (tags: string[]) => void;
	customTags: Options[];
	onAddCustomTag: (tag: Options) => void;
}) {
	const [isOpen, setIsOpen] = useState(false);
	const [search, setSearch] = useState('');
	const [customInput, setCustomInput] = useState('');

	const allTags = [...ALL_TAGS, ...customTags];

	const filteredTags = allTags.filter(
		(tag) =>
			tag.key.toLowerCase().includes(search.toLowerCase()) ||
			tag.value.toLowerCase().includes(search.toLowerCase())
	);

	function toggle(tagValue: string) {
		if (selectedTags.includes(tagValue)) {
			onChange(selectedTags.filter((t) => t !== tagValue));
		} else {
			onChange([...selectedTags, tagValue]);
			if (search) setSearch('');
		}
	}

	function addCustomTag() {
		const slug = customInput.trim().toLowerCase().replace(/\s+/g, '-');
		if (!slug) return;
		const tag: Options = { key: slugToDisplayName(slug), value: slug };
		onAddCustomTag(tag);
		if (!selectedTags.includes(slug)) {
			onChange([...selectedTags, slug]);
		}
		setCustomInput('');
	}

	function getDisplayName(value: string): string {
		return allTags.find((t) => t.value === value)?.key ?? slugToDisplayName(value);
	}

	return (
		<div className='tag-selector'>
			<div
				className='dropdown-box'
				onClick={() => setIsOpen((prev) => !prev)}>
				<span>Select tags...</span>
				<span className='arrow'>{isOpen ? '▲' : '▼'}</span>
			</div>

			{isOpen && (
				<div className='dropdown-menu'>
					<div className='search-wrapper'>
						<input
							className='tag-search'
							type='text'
							placeholder='Search tags...'
							value={search}
							onChange={(e) => setSearch(e.target.value)}
							onClick={(e) => e.stopPropagation()}
							autoFocus
						/>
					</div>

					{filteredTags.map((tag) => (
						<div
							key={tag.value}
							className={`dropdown-item ${
								selectedTags.includes(tag.value) ? 'selected' : ''
							}`}
							onClick={() => toggle(tag.value)}>
							{tag.key}
						</div>
					))}

					{filteredTags.length === 0 && (
						<div className='no-results'>No matching tags</div>
					)}

					<div className='custom-tag-row'>
						<input
							className='custom-tag-input'
							type='text'
							placeholder='Add custom tag slug...'
							value={customInput}
							onChange={(e) => setCustomInput(e.target.value)}
							onClick={(e) => e.stopPropagation()}
							onKeyDown={(e) => e.key === 'Enter' && addCustomTag()}
						/>
						<button className='custom-tag-add' onClick={addCustomTag}>
							+
						</button>
					</div>
				</div>
			)}

			<div className='chips'>
				{selectedTags.map((tag) => (
					<div key={tag} className='chip'>
						{getDisplayName(tag)}
						<button
							className='chip-remove'
							onClick={() =>
								onChange(selectedTags.filter((t) => t !== tag))
							}>
							×
						</button>
					</div>
				))}
			</div>
		</div>
	);
}
