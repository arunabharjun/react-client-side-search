import React, { useState, useEffect } from 'react';
import Layout from '../Components/core/Layout';
import SearchComponent from '../Components/SearchComponent';
import { getData } from '../helpers/api';

const SearchPage = () => {
	/**
	 * State to store the 
	 * user data from API
	 */
	const [
		data,
		setData
	] = useState([]);

	/**
	 * States to check status
	 * of loading and error
	 */
	const [
		status,
		setStatus
	] = useState({
		loading: true,
		error: false
	});
	const { loading, error } = status;

	useEffect(() => {
		/**
		 * Fetching user data as soon
		 * as the component mounts
		 */
		initData();
	}, []);

	/**
	 * Utility function to initialise data
	 */
	const initData = () => {
		return getData()
			.then((data) => {
				if (!data.error) {
					setData(data);
					setStatus({
						loading: false,
						error: false
					});
				}
				else {
					setStatus({
						loading: false,
						error: true
					});
				}
			})
			.catch((error) => {
				console.log(error);
				setStatus({
					loading: false,
					error: true
				});
			});
	};

	/**
	 * Show loading while data loads
	 */
	const showLoading = () => {
		return (
			<React.Fragment>
				<div className='notify-div'>
					<p className=''>loading</p>
				</div>
			</React.Fragment>
		);
	};

	/**
	 * Show error if any
	 */
	const showError = () => {
		return (
			<React.Fragment>
				<div className='notify-div'>
					<p className=''>Something went wrong!</p>
				</div>
			</React.Fragment>
		);
	};

	/**
	 * The main view component
	 */
	const showSearchPage = () => {
		return (
			<React.Fragment>
				<div className='container'>
					{loading && !error && showLoading()}
					{!loading && error && showError()}
					{!loading &&
					!error && <SearchComponent>{data}</SearchComponent>}
				</div>
			</React.Fragment>
		);
	};

	/**
	 * Rendering the main component
	 */
	return (
		<React.Fragment>
			<Layout>{showSearchPage()}</Layout>
		</React.Fragment>
	);
};

export default SearchPage;
