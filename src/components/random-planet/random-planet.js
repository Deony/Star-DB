import React, { Component } from 'react';

import './random-planet.css';
import SwapiService from "../../service/swapi-service";
import Spinner from "../spinner/spinner";
import PlanetView from "./planet-view";
import ErrorBoundary from "../error-boundary/error-boundary";


export default class RandomPlanet extends Component {
	
	swapiService = new SwapiService();
	
	state = {
		planet: {},
		loading: true
	};
	
	componentDidMount() {
		this.updatePlanet();
		this.interval = setInterval(this.updatePlanet, 3000)
	};
	
	componentWillUnmount() {
		clearInterval(this.interval);
	}
	
	updatePlanet = () => {
		const id = Math.floor( Math.random()*20  + 1);
		
		this.swapiService.getPlanet(id)
			.then(this.onPlanetLoaded)
			.catch(this.onError)
	};
	
	onPlanetLoaded = (planet) => {
		this.setState({
			planet,
			loading: false
		})
	};
	
	render() {
		const { planet, loading } = this.state;
		
		const spinner = loading ? <Spinner /> : null;
		const content = !loading ? <PlanetView  planet={planet}/> : null;
		
		return (
			<div className="box random-planet d-flex align-items-center">
				<ErrorBoundary>
					{spinner}
					{content}
				</ErrorBoundary>
			</div>
		)
	}
}