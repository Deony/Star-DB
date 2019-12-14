import React, { Component } from 'react';

import Row from  "../row";
import { PlanetList, PlanetDetails } from "../swapi-components";


export default class PeoplePage extends Component {
	
	state = {
		selectedItem: null
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
				left={<PlanetList onItemSelected={this.onPersonSelected }/>
				}
				right={<PlanetDetails itemId={selectedItem}/>}
			/>
		)
	}
}