import React from 'react';


export default (props) => {
	const { id, name, ...itemProps } = props.item;
	const { imageUrl, itemDetails: ItemDetails } = props;
	
	return (
		<React.Fragment>
			<img className='item__img' src={imageUrl} alt={name} />
			
			<div className="item__content">
				<h4>{name}</h4>
				<div className="item__description">
					<ItemDetails itemProps={itemProps}/>
				</div>
			</div>
		</React.Fragment>
	)
}