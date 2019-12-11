import React, { Component } from 'react';

import Row from  "../row/row";
import { PersonList, PersonDetails } from "../swapi-components";


export default class PeoplePage extends Component {
	
	state = {
		selectedItem: 5
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
				left={<PersonList onItemSelected={this.onPersonSelected }/>
				}
				right={<PersonDetails itemId={selectedItem}/>}
			/>
		)
	}
}