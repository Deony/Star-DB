import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import './app.css';

import Header from "../header/header";
import RandomPlanet from  "../random-planet";
import { PeoplePage, PlanetsPage, StarshipsPage } from  "../pages";
import SwapiService from "../../service/swapi-service";
import DummySwapiService from "../../service/dummy-swapi-service";
import { SwapiServiceProvider } from "../swapi-service-context";
import ErrorBoundary from "../error-boundary";


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
				<ErrorBoundary>
					<SwapiServiceProvider value={this.state.swapiService}>
						<BrowserRouter>
							<div className="app">
								<Header onServiceChange={this.onServiceChange} />
								<RandomPlanet />
								
								<Route path='/'
									   exact
									   render={() => <h2>Welcome to Star DB</h2>} />
									   
								<Route path='/people/:id?'
									   component={PeoplePage} />
									   
								<Route path='/planets/:id?'
									   component={PlanetsPage} />
									   
								<Route path='/starships/:id?'
									   component={StarshipsPage} />
							</div>
						</BrowserRouter>
					</SwapiServiceProvider>
				</ErrorBoundary>
			)
	}
}