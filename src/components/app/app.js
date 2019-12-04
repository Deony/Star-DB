import React, { Component } from 'react';

import './app.css';


import Header from "../header/header";
import RandomPlanet from  "../random-planet/random-planet";
import People from  "../pages/people";

export default class App extends Component {
	
	state = {
		selectedItem: 5,
	};
	
	onItemSelected = (id) => {
		this.setState({
			selectedItem: id
		})
	};
	
	render() {
		return (
				<div className="app">
					<Header />
					<RandomPlanet />
					<People onItemSetected={this.onItemSelected} itemId={this.state.selectedItem}/>
				</div>
			)
	}
}