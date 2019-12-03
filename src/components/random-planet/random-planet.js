import React, { Component } from 'react';

import './random-planet.css';
import SwapiService from "../../service/swapi-service";
import Spinner from "../spinner/spinner";
import PlanetView from "./planet-view";

export default class RandomPlanet extends Component {
	
	swapiService = new SwapiService();
	
	constructor() {
		super();
		
		this.state = {
			planet: {},
			loading: true,
		};
		
		this.updatePlanet();
	}
	
	updatePlanet() {
		const id = Math.floor( Math.random()*20  + 1);
		
		this.swapiService.getPlanet(id)
			.then( (planet) => {
				this.setState({
					planet,
					loading: false
				})
			})
	}
	
	render() {
		const { planet, loading} = this.state;
		
		const spinner = loading ? <Spinner /> : null;
		const content = !loading ? <PlanetView  planet={planet}/> : null;
		
		return (
			<div className="box random-planet d-flex align-items-center">
				{spinner}
				{content}
			</div>
		)
	}
}