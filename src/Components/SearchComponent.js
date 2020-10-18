import React, { useState, useEffect, useRef } from 'react';
import DataCard from './core/DataCard';
import { search } from '../helpers/search';
import { CloseIcon, SearchIcon } from '../assets/Icons';

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
	 * State to keep track of the active card
	 */
	const [
		activeId,
		setActiveId
	] = useState(-1);

	/**
	 * State to kepp track if keyboard
	 * key is pressed or not to bring
	 * active div in view only at key press
	 * and not mouse over
	 */
	const [
		keyboardPress,
		setKeyboardPress
	] = useState(false);

	useEffect(
		() => {
			/**
			 * Scroll to view only after
			 * the 1st active card changes
			 */
			if (activeId > -1 && results.res && results.res.length > 0) {
				scrollToView();
			}
		},
		[
			keyboardPress
		]
	);

	/**
	 * State to store the
	 * Reference to active card
	 * and utility function to
	 * scroll to that card
	 */
	const divRef = useRef();
	const scrollToView = () => {
		divRef.current.scrollIntoView({
			alignToTop: 'true',
			behavior: 'smooth'
		});
	};

	/**
	 * Utility function to
	 * get search results on
	 * search input value change
	 */
	const handleChange = (value) => {
		if (value.replace(/\s/g, '').length < 1) {
			setActiveId(-1);
		}
		setValues({
			query: value,
			results: search(value, children.data)
		});
	};

	/**
	 * Utility function to
	 * Handle keypress of
	 * up or down keyboard key
	 */
	const handleKeyPress = (e) => {
		if (results.res) {
			if (e.keyCode === 38) {
				/**
				 * Up Arrow
				 */
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
				if (activeId + 1 === results.hits) {
					handleActive(0, 0);
				}
				else {
					handleActive(activeId, 1);
				}
			}
			setKeyboardPress(!keyboardPress);
		}
	};

	/**
	 * Utility function to
	 * change the active card
	 */
	const handleActive = (idx, change) => {
		setActiveId(idx + change);
	};

	/**
	 * View the search results
	 */
	const viewSearchResults = (results) => {
		return (
			<React.Fragment>
				{results &&
					results.map((result, i) => {
						if (i === activeId) {
							return (
								<div
									ref={divRef}
									key={i}
									className='data-card-active'
								>
									<DataCard
										idx={i}
										handleActive={handleActive}
									>
										{result}
									</DataCard>
								</div>
							);
						}
						else {
							return (
								<div key={i}>
									<DataCard
										idx={i}
										handleActive={handleActive}
									>
										{result}
									</DataCard>
								</div>
							);
						}
					})}
			</React.Fragment>
		);
	};

	/**
	 * The input form to take
	 * search query inputs
	 */
	const showSearchInput = () => {
		return (
			<React.Fragment>
				<form
					onSubmit={(e) => {
						e.preventDefault();
					}}
				>
					<div className='search-icon'>
						<SearchIcon size={16} />
					</div>
					<input
						autoFocus
						value={query}
						type='text'
						onChange={(e) => {
							handleChange(e.target.value);
						}}
						placeholder='Search users by ID, address, nam...'
					/>
					{query.length > 0 && (
						<button
							className='close-icon'
							onClick={() => {
								setValues({
									results: {},
									query: ''
								});
							}}
						>
							<CloseIcon />
						</button>
					)}
				</form>
			</React.Fragment>
		);
	};

	/**
	 * Showing the search results
	 */
	const showResults = () => {
		return (
			<React.Fragment>
				<div className='results-container'>
					{viewSearchResults(results.res)}
				</div>
			</React.Fragment>
		);
	};

	/**
	 * Show results count
	 */
	const showCount = () => {
		return (
			<React.Fragment>
				<div className='result-count'>
					{results.res.length} result{results.res.length > 1 && 's'}{' '}
					found
				</div>
			</React.Fragment>
		);
	};

	/**
	 * Showing no results found
	 */
	const noResults = () => {
		return (
			<React.Fragment>
				<div className='results-container'>
					<p className='no-results'>No User Found</p>
				</div>
			</React.Fragment>
		);
	};

	/**
	 * Rendering the complete
	 * search & results container
	 */
	const showSearchContainer = () => {
		return (
			<React.Fragment>
				<div className='search-wrapper'>
					<div
						className='search-container'
						onKeyDown={(e) => handleKeyPress(e)}
						tabIndex={0}
					>
						{showSearchInput()}
						{showResults()}
						{query.length > 0 &&
							results.res.length < 1 &&
							noResults()}
					</div>
					{results.res && results.res.length > 0 && showCount()}
				</div>
			</React.Fragment>
		);
	};

	/**
	 * Rendering the component
	 */
	return <React.Fragment>{showSearchContainer()}</React.Fragment>;
};

export default SearchComponent;
