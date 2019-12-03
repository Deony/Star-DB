import React from "react";

import icon from '../error/unknown-icon.svg';


export default ( {planet} ) => {
	const { id, name, population, rotationPeriod, diameter
	} = planet;
	
	const onErrorSrcImg = (e) => {
		e.target.src = `${icon}`;
	};
	
	return (
		<React.Fragment>
			<img className='planet__img' src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} alt={`${name}`} onError={ onErrorSrcImg } />
			
			<div className="planet__content">
				<h2>{name}</h2>
				<div className="planet__description">
					<div className='border-top'>Population: {population}</div>
					<div className='border-top'>Rotation Period: {rotationPeriod}</div>
					<div className='border-top'>Diameter: {diameter}</div>
				</div>
			</div>
		</React.Fragment>
	)
}