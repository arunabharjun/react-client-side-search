import React from 'react';
import { search } from '../helpers/search';

const SearchComponent = ({ children }) => {
	return (
		<React.Fragment>
			<h1>Search</h1>
			{JSON.stringify(search('kYb', children.data))}
		</React.Fragment>
	);
};

export default SearchComponent;
