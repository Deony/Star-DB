import React, { Component } from 'react';

import './random-planet.css';
import SwapiService from "../../service/swapi-service";
import Spinner from "../spinner/spinner";
import PlanetView from "./planet-view";
import Error from "../error/error-indicator";

export default class RandomPlanet extends Component {
	swapiService = new SwapiService();
	
	state = {
		planet: {},
		loading: true,
		error: false
	};
	
	componentDidMount() {
		this.updatePlanet();
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
	
	onError = () => {
		this.setState({
			error: true,
			loading: false
		});
	};
	
	render() {
		const { planet, loading, error} = this.state;
		
		const spinner = loading ? <Spinner /> : null;
		const errorIndicator = error ? <Error /> : null;
		const content = !(loading || error) ? <PlanetView  planet={planet}/> : null;
		
		return (
			<div className="box random-planet d-flex align-items-center">
				{spinner}
				{errorIndicator}
				{content}
			</div>
		)
	}
}