import React from 'react';

export default (props) => {
	const { gender, birthYear, skinColor } = props.itemProps;
	
	return (
		<div>
			<div className='border-top'>Gender: {gender}</div>
			<div className='border-top'>Birth year: {birthYear}</div>
			<div className='border-top'>Skin color: {skinColor}</div>
		</div>
	)
}