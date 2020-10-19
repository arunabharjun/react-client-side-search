import React from 'react';
import { GithubIcon } from '../../assets/Icons';

const NavBar = () => {
	return (
		<React.Fragment>
			<div className='nav-bar'>
				<div className='nav-body'>
					<p className='brand-name '>
						User <span className='accent-clr'>Search</span>
					</p>
					<a
						href='https://github.com/arunabharjun/react-client-side-search'
						target='_blank'
						rel='noopener noreferrer'
					>
						<GithubIcon />
					</a>
				</div>
			</div>
		</React.Fragment>
	);
};

export default NavBar;
