import React from 'react';

export const SearchIcon = ({ size = 20, classes = '' }) => {
	return (
		<React.Fragment>
			<svg
				xmlns='http://www.w3.org/2000/svg'
				width={size}
				height={size}
				viewBox='0 0 24 24'
				fill='none'
				stroke='currentColor'
				strokeWidth='2'
				strokeLinecap='round'
				strokeLinejoin='round'
				className={`${classes}`}
			>
				<circle cx={11} cy={11} r={8} />
				<line x1={21} y1={21} x2='16.65' y2='16.65' />
			</svg>
		</React.Fragment>
	);
};

export const CloseIcon = ({ size = 20, classes = '' }) => {
	return (
		<React.Fragment>
			<svg
				xmlns='http://www.w3.org/2000/svg'
				width={size}
				height={size}
				viewBox='0 0 24 24'
				fill='none'
				stroke='currentColor'
				strokeWidth='2'
				strokeLinecap='round'
				strokeLinejoin='round'
				className={`${classes}`}
			>
				<line x1={18} y1={6} x2={6} y2={18} />
				<line x1={6} y1={6} x2={18} y2={18} />
			</svg>
		</React.Fragment>
	);
};
