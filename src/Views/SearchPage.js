import React, { useState, useEffect } from 'react';
import SearchComponent from '../Components/SearchComponent';
import { getData } from '../helpers/api';

const SearchPage = () => {
	const [
		data,
		setData
	] = useState([]);

	const [
		status,
		setStatus
	] = useState({
		loading: true,
		error: false
	});

	const { loading, error } = status;

	useEffect(() => {
		initData();
	}, []);

	const initData = () => {
		getData()
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
	return (
		<React.Fragment>
			<main>
				<div className='container'>
					{loading && !error && <h1>loading</h1>}
					{!loading && error && <h1>error</h1>}
					{!loading &&
					!error && <SearchComponent>{data}</SearchComponent>}
				</div>
			</main>
		</React.Fragment>
	);
};

export default SearchPage;
