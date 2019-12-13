import React, { Component } from 'react';

import './app.css';

import Header from "../header/header";
import RandomPlanet from  "../random-planet";
import { PeoplePage } from  "../pages";
import SwapiService from "../../service/swapi-service";
import DummySwapiService from "../../service/dummy-swapi-service";
import { SwapiServiceProvider } from "../swapi-service-context";
import ErrorBoundary from "../error-boundary/error-boundary";


export default class App extends Component {
	
	state = {
		swapiService: new SwapiService()
	};
	
	onServiceChange = () => {
		this.setState(({swapiService}) => {
			const Service = swapiService instanceof SwapiService ? DummySwapiService : SwapiService;

			return {
				swapiService: new Service()
			};
		})
	};
	
	render() {
		return (
				<div className="app">
					<ErrorBoundary>
						<SwapiServiceProvider value={this.state.swapiService}>
							<Header onServiceChange={this.onServiceChange}/>
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