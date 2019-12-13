import React from "react";

import icon from '../error/unknown-icon.svg';
import { Record } from "../item-details";


export default ( props ) => {
	
	const { planet, getPlanetImg } = props;
	const { name, more: itemProps } = planet;
	
	const onErrorSrcImg = (e) => {
		e.target.src = `${icon}`;
	};
	
	return (
		<React.Fragment>
			<img className='planet__img' src={getPlanetImg} alt={`${name}`} onError={ onErrorSrcImg } />
			
			<div className="planet__content">
				<h2>{name}</h2>
				<div className="planet__description">
					{itemProps.map((item, key) => {
							const { label, field } = item;
							return <Record itemField={field} itemLabel={label} key={key}/>
						})
					}
				</div>
			</div>
		</React.Fragment>
	)
}