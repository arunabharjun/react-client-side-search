import React from 'react';

const DataCard = ({ children, idx, handleActive }) => {
	return (
		<React.Fragment>
			<div onMouseEnter={() => handleActive(idx, 0)}>
				{JSON.stringify(children)} <br />
				<br />
			</div>
		</React.Fragment>
	);
};

export default DataCard;
