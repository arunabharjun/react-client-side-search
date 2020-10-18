import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import SearchPage from './Views/SearchPage';

const Routes = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route path='/' exact component={SearchPage} />
			</Switch>
		</BrowserRouter>
	);
};

export default Routes;
