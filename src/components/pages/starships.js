import React, { Component } from 'react';

import Row from  "../row";
import { StarshipList, StarshipDetails } from "../swapi-components";


export default class PeoplePage extends Component {
	
	state = {
		selectedItem: null
	};
	
	onStarshipSelected = (id) => {
		this.setState({
			selectedItem: id
		})
	};
	
	render() {
		const { selectedItem } = this.state;
		
		return (
			<Row
				left={<StarshipList onItemSelected={this.onStarshipSelected } />}
				right={<StarshipDetails itemId={selectedItem} />}
			/>
		)
	}
}