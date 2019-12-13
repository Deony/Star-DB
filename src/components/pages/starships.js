import React, { Component } from 'react';

import Row from  "../row";
import { StarshipList, StarshipDetails } from "../swapi-components";


export default class PeoplePage extends Component {
	
	state = {
		selectedItem: 3
	};
	
	onPersonSelected = (id) => {
		this.setState({
			selectedItem: id
		})
	};
	
	render() {
		const { selectedItem } = this.state;
		
		return (
			<Row
				left={<StarshipList onItemSelected={this.onPersonSelected }/>
				}
				right={<StarshipDetails itemId={selectedItem}/>}
			/>
		)
	}
}