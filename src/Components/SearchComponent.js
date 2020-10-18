import React, { useState, useEffect } from 'react';
import { search } from '../helpers/search';
import DataCard from './core/DataCard';

const SearchComponent = ({ children }) => {
	/**
	 * States to store query
	 * and search results
	 */

	const [
		values,
		setValues
	] = useState({
		query: '',
		results: {}
	});
	const { query, results } = values;

	/**
	 * State to keep track of active card
	 */
	const [
		activeId,
		setActiveId
	] = useState(-1);

	useEffect(() => {
		document.addEventListener('keydown', handleKeyPress);
	}, []);

	/**
	 * Utility function to
	 * get search results on
	 * search input value change
	 */
	const handleChange = (value) => {
		setValues({
			query: value,
			results: search(value, children.data)
		});
	};

	/**
	 * Handle keypress
	 */
	const handleKeyPress = (e) => {
		if (results.res) {
			if (e.keyCode === 38) {
				/**
				 * Up Arrow
				 */
				console.log('up');
				if (activeId === 0) {
					handleActive(results.hits - 1, 0);
				}
				else {
					handleActive(activeId, -1);
				}
			}
			else if (e.keyCode === 40) {
				/**
				 * Down arrow
				 */
				console.log('down');
				if (activeId + 1 === results.hits) {
					handleActive(0, 0);
				}
				else {
					handleActive(activeId, 1);
				}
			}
			// scrollToView();
		}
	};

	const handleActive = (idx, change) => {
		setActiveId(idx + change);
	};

	const viewSearchResults = (results) => {
		return (
			<React.Fragment>
				{results &&
					results.map((result, i) => {
						return (
							<div
								key={i}
								className={
									activeId === i ? 'data-card-active' : ''
								}
							>
								<DataCard idx={i} handleActive={handleActive}>
									{result}
								</DataCard>
							</div>
						);
					})}
			</React.Fragment>
		);
	};

	return (
		<React.Fragment>
			<div
				className='search-container'
				onKeyDown={(e) => handleKeyPress(e)}
				tabIndex={0}
			>
				<form
					onSubmit={(e) => {
						e.preventDefault(0);
					}}
				>
					<input
						autoFocus
						value={query}
						type='text'
						onChange={(e) => {
							handleChange(e.target.value);
						}}
					/>
				</form>
				<div className='results-container'>
					{viewSearchResults(results.res)}
				</div>
			</div>
		</React.Fragment>
	);
};

export default SearchComponent;
