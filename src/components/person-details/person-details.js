import React from 'react';

import './person-details.css';


export default () => {
	return (
		<div className="box person-details d-flex align-items-center">
			<img className='person__img' src="https://upload.wikimedia.org/wikipedia/commons/f/f0/GHS-pictogram-unknown.svg" alt="character"/>
			
			<div className="person__content">
				<h4>Person Name</h4>
				<div className="person__description">
					<div className='border-top'>Gender: Male</div>
					<div className='border-top'>Birth year: 19 BBY</div>
					<div className='border-top'>Skin color: Fair</div>
				</div>
			</div>
		</div>
	)
}