import React, { Component } from 'react';

import './app.css';

import Header from "../header/header";
import RandomPlanet from  "../random-planet";
import { PeoplePage } from  "../pages";
import SwapiService from "../../service/swapi-service";
import { SwapiServiceProvider } from "../swapi-service-context";
import ErrorBoundary from "../error-boundary/error-boundary";


export default class App extends Component {
	swapiService = new SwapiService();
	
	render() {
		return (
				<div className="app">
					<ErrorBoundary>
						<SwapiServiceProvider value={this.swapiService}>
							<Header />
							<RandomPlanet />
							<PeoplePage />
							{/*<PlanetsPage />*/}
							{/*<StarshipsPage />*/}
						</SwapiServiceProvider>
					</ErrorBoundary>
				</div>
			)
	}
}