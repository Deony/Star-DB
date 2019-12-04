import React, { Component } from "react";

export default class ListView extends Component {
	
	renderItems(list, onItemSelected) {
		return list.map( ({name, id}) => {
			return (
				<li className="list-characters__item border-top" key={id} onClick={ () => { onItemSelected(id) }}>{name}</li>
			)
		})
	}
	
	render() {
		const { peopleList, onItemSelected } = this.props;

		const items = this.renderItems(peopleList, onItemSelected);
		
		return(
			<ul className="list-characters list">
				{items}
			</ul>
		)
	}
}
