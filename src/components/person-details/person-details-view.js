import React from 'react';


export default (props) => {
	const { id, name, gender, birthYear, skinColor } = props.personDetails;
	
	return (
		<React.Fragment>
			<img className='person__img' src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`} alt="photo of character"/>
			
			<div className="person__content">
				<h4>{name} {id}</h4>
				<div className="person__description">
					<div className='border-top'>Gender: {gender}</div>
					<div className='border-top'>Birth year: {birthYear}</div>
					<div className='border-top'>Skin color: {skinColor}</div>
				</div>
			</div>
		</React.Fragment>
	)
}