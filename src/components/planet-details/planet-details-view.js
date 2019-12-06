import React from 'react';

export default (props) => {
	const { population, rotationPeriod, diameter } = props.itemProps;
	
	return (
		<div>
			<div className='border-top'>Population: {population}</div>
			<div className='border-top'>Rotation period: {rotationPeriod}</div>
			<div className='border-top'>Diameter: {diameter}</div>
		</div>
	)
}