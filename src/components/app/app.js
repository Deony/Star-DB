import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';

import './app.css';

import Header from "../header/header";
import RandomPlanet from  "../random-planet";
import { PeoplePage, PlanetsPage, StarshipsPage, LoginPage, PrivatePage } from  "../pages";
import SwapiService from "../../service/swapi-service";
import DummySwapiService from "../../service/dummy-swapi-service";
import { SwapiServiceProvider } from "../swapi-service-context";
import ErrorBoundary from "../error-boundary";


export default class App extends Component {
	
	state = {
		swapiService: new SwapiService(),
		isLogged: false
	};
	
	onLogin = () => {
		this.setState({
			isLogged: true
		})
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
		const { isLogged } = this.state;
		
		return (
				<ErrorBoundary>
					<SwapiServiceProvider value={this.state.swapiService}>
						<BrowserRouter>
							<div className="app">
								<Header onServiceChange={this.onServiceChange} />
								<RandomPlanet />
								
								<Switch>
									<Route path='/'
										   exact
										   render={() => <h2>Welcome to Star DB</h2>} />
										   
									<Route path='/people/:id?'
										   component={PeoplePage} />
										   
									<Route path='/planets/:id?'
										   component={PlanetsPage} />
										   
									<Route path='/starships/:id?'
										   exact
										   component={StarshipsPage} />
									
									<Route path='/login'
										   render={() => <LoginPage isLogged={isLogged} onLogin={this.onLogin} />}
									/>
									
									<Route path='/private'
										   render={() => <PrivatePage isLogged={isLogged} />}
									/>
									
									<Route render={() => {
										return (
											<React.Fragment>
												<h2>Page not found</h2>
												<p>return to the <Link to='/'>main page</Link></p>
											</React.Fragment>
										)
									}} />
								</Switch>
							</div>
						</BrowserRouter>
					</SwapiServiceProvider>
				</ErrorBoundary>
			)
	}
}