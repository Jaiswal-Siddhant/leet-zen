import { useState } from 'react';
import './TagSelector.css';
import { ALL_TAGS } from '../constants/OPTIONS';

export default function TagSelector({
	selectedTags,
	onChange,
}: {
	selectedTags: string[];
	onChange: (tags: string[]) => void;
}) {
	const [isOpen, setIsOpen] = useState(false);

	function toggle(tag: string) {
		if (selectedTags.includes(tag)) {
			onChange(selectedTags.filter((t) => t !== tag));
		} else {
			onChange([...selectedTags, tag]);
			setIsOpen(false);
		}
	}

	return (
		<div className='tag-selector'>
			{/* Dropdown Menu */}
			<div
				className='dropdown-box'
				onClick={() => setIsOpen((prev) => !prev)}>
				<span>Select tags...</span>
				<span className='arrow'>{isOpen ? '▲' : '▼'}</span>
			</div>

			{/* Dropdown Menu */}
			{isOpen && (
				<div className='dropdown-menu'>
					{ALL_TAGS.map((tag) => (
						<div
							key={tag.value}
							className={`dropdown-item ${
								selectedTags.includes(tag.value)
									? 'selected'
									: ''
							}`}
							onClick={() => toggle(tag.value)}>
							{tag.key}
						</div>
					))}
				</div>
			)}

			{/* Selected Chips */}
			<div className='chips'>
				{selectedTags.map((tag) => (
					<div key={tag} className='chip'>
						{tag}
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
