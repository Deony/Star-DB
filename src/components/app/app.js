import React, { Component } from 'react';

import './app.css';

import Header from "../header/header";
import RandomPlanet from  "../random-planet/random-planet";
import People from  "../pages/people";


export default class App extends Component {
	
	state = {
		selectedItem: 5
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
					<People onItemSelected={this.onItemSelected}
							itemId={this.state.selectedItem}
							renderItem={({name, birthYear}) => (
								<div>
									{name}
									<small>({birthYear})</small>
								</div>
							)}
					/>
					{/*<Planets onItemSelected={this.onItemSelected}*/}
					{/*		itemId={this.state.selectedItem}*/}
					{/*		renderItem={({name, diameter}) => (*/}
					{/*			<div>*/}
					{/*				{name}*/}
					{/*				<small>({diameter} km)</small>*/}
					{/*			</div>*/}
					{/*		)}*/}
					{/*/>*/}
					{/*<Starships onItemSelected={this.onItemSelected}*/}
					{/*		itemId={this.state.selectedItem}*/}
					{/*		renderItem={({name, length}) => (*/}
					{/*			<div>*/}
					{/*				{name}*/}
					{/*				<small>({length} m)</small>*/}
					{/*			</div>*/}
					{/*		)}*/}
					{/*/>*/}
				</div>
			)
	}
}