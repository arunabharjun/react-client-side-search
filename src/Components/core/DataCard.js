import React from 'react';

const DataCard = ({ children, idx, handleActive }) => {
	const { id, name, items, address, pincode } = children;
	const showItems = () => {
		return (
			<React.Fragment>
				{items.map((item, i) => {
					if (i + 1 !== items.length) {
						return <span key={i}>{item}, </span>;
					}
					else {
						return <span key={i}>{item} </span>;
					}
				})}
			</React.Fragment>
		);
	};
	return (
		<React.Fragment>
			<div onMouseOver={() => handleActive(idx, 0)} className='data-card'>
				<p className='card-id'>{id}</p>
				<p className='card-name'>{name}</p>

				<div className='card-items'>
					Item{items.length > 1 && 's'} : {showItems()}
				</div>

				<p className='card-address'>
					{address}
					<br /> {pincode}
				</p>
			</div>
		</React.Fragment>
	);
};

export default DataCard;
