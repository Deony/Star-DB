import React from 'react';

import './item-list.css';
import PropTypes from 'prop-types';


const ItemList = (props) => {
	const { data, onItemSelected, children: renderLabel } = props;
	
	const items = data.map( (item) => {
		const { id } = item;
		const label = renderLabel(item);
		
		return (
			<li className="list__item border-top" key={id} onClick={ () => {onItemSelected(id)} }>{label}</li>
		)
	});
	
	return (
		<div className="box">
			<ul className="list">
				{items}
			</ul>
		</div>
	)
};

ItemList.defaultProps = {
	onItemSelected: () => {}
};

ItemList.propTypes = {
	onItemSelected: PropTypes.func,
	data: PropTypes.arrayOf(PropTypes.object).isRequired,
	renderLabel: PropTypes.func,
};

export default ItemList;