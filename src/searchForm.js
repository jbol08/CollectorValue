import React, {useState} from 'react';
import Button from './button';

function SearchForm({searchFunc}) {
    const [ term, setTerm ] = useState('');

	const handleSubmit = (event) => {
		event.preventDefault();
		searchFunc(term.trim() || undefined);
		setTerm(term.trim());
	};

	const handleChange = (event) => {
		setTerm(event.target.value);
	};

	return (
		<div className="SearchForm mb-3">
			<form className="form-inline" onSubmit={handleSubmit}>
				<input
					className="form-control form-control-lg flex-grow-1"
					name="term"
					placeholder="Player Name"
					value={term}
					onChange={handleChange}
				/>
				<Button />
			</form>
		</div>
	);
};

export default SearchForm;
