import React, { Component } from "react";


export default class ListView extends Component {
	
	renderItems(list) {
		return list.map( (item) => {
			const { id } = item;
			const label = this.props.renderItem(item);

			return (
				<li className="list__item border-top" key={id} onClick={ () => {this.props.onItemSelected(id)} }>{label}</li>
			)
		})
	}
	
	render() {
		const { itemList } = this.props;

		const items = this.renderItems(itemList);
		
		return(
			<ul className="list">
				{items}
			</ul>
		)
	}
}
