import React, { Component } from 'react';

import './random-planet.css';
import SwapiService from "../../service/swapi-service";

export default class RandomPlanet extends Component {
	
	swapiService = new SwapiService();
	
	constructor() {
		super();
		
		this.state = {
			id: null,
			name: null,
			population: null,
			rotationPeriod: null,
			diameter: null,
		};
		
		this.updatePlanet();
	}
	
	updatePlanet() {
		const id = Math.floor( Math.random()*10  + 1);
		
		this.swapiService.getPlanet(id)
			.then( (planet) => {
				this.setState(planet)
			})
	}
	
	render() {
		const { id, name, population, rotationPeriod, diameter } = this.state;
		
		return (
			<div className="box random-planet d-flex align-items-center">
				<img className='planet__img' src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} alt={`${name}`} />
				
				<div className="planet__content">
					<h2>{name}</h2>
					<div className="planet__description">
						<div className='border-top'>Population: {population}</div>
						<div className='border-top'>Rotation Period: {rotationPeriod}</div>
						<div className='border-top'>Diameter: {diameter}</div>
					</div>
				</div>
			</div>
		)
	}
}