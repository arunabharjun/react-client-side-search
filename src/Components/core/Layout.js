import React from 'react';
import Footer from './Footer';
import NavBar from './NavBar';

const Layout = ({ children }) => {
	return (
		<React.Fragment>
			<NavBar />
			<main>{children}</main>
			<Footer />
		</React.Fragment>
	);
};

export default Layout;
