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
							renderItem={({name, more}) => (
								<div>
									{name}
									<small>({more[1].field})</small>
								</div>
							)}
					/>
					{/*<Planets onItemSelected={this.onItemSelected}*/}
					{/*		itemId={this.state.selectedItem}*/}
					{/*		renderItem={({name, more}) => (*/}
					{/*			<div>*/}
					{/*				{name}*/}
					{/*				<small>({more[2].field} km)</small>*/}
					{/*			</div>*/}
					{/*		)}*/}
					{/*/>*/}
					{/*<Starships onItemSelected={this.onItemSelected}*/}
					{/*		itemId={this.state.selectedItem}*/}
					{/*		renderItem={({name, more}) => (*/}
					{/*			<div>*/}
					{/*				{name}*/}
					{/*				<small>({more[0].field} m)</small>*/}
					{/*			</div>*/}
					{/*		)}*/}
					{/*/>*/}
				</div>
			)
	}
}