import React from 'react';

export default (props) => {
	const { length, hyperdriveRating, crew } = props.itemProps;
	
	return (
		<div>
			<div className='border-top'>Length: {length}</div>
			<div className='border-top'>Hyperdrive rating: {hyperdriveRating}</div>
			<div className='border-top'>Crew: {crew}</div>
		</div>
	)
}