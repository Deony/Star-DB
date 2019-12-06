import React from 'react';


export default (props) => {
	const { itemField, itemLabel } = props;
	
	return (
		<div className='border-top'>{itemLabel}: {itemField}</div>
	)
}