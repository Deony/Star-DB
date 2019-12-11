import React from 'react';

import { Record } from './';


export default (props) => {
	const { name, more: itemProps } = props.item;
	const { imageUrl } = props;
	
	return (
		<React.Fragment>
			<img className='item__img' src={imageUrl} alt={name} />
			
			<div className="item__content">
				<h4>{name}</h4>
				<div className="item__description">
					{itemProps.map((item, key) => {
							const { label, field } = item;
							return <Record itemField={field} itemLabel={label} key={key} />
						})
					}
				</div>
			</div>
		</React.Fragment>
	)
}