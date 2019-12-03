import React, { Component } from 'react';

import './app.css';


import Header from "../header/header";
import RandomPlanet from  "../random-planet/random-planet";

export default class App extends Component {
	render() {
		return (
				<div className="app">
					<Header />
					<RandomPlanet />
				</div>
			)
	}
}