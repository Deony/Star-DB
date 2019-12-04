export default class SwapiService {
	_baseUrl = 'https://swapi.co/api/';
	
	async getResource(url) {
		const res = await fetch(`${this._baseUrl}${url}`);
		
		if(!res.ok) {
			throw new Error(`Can not get ${url}`)
		}
		const body = await res.json();
		return body;
	}
	
	async getAllPeople() {
		const res = await this.getResource('people/');
		return res.results.map( el => this.getPersonData(el));
	}
	
	async getPerson(id) {
		const res = await this.getResource(`people/${id}/`);
		return this.getPersonData(res);
	}
	
	async getAllPlanets() {
		const res = await this.getResource('planets/');
		return res.results.map( el => this.getPlanetData(el));
	}
	
	async getPlanet(id) {
		const res = await this.getResource(`planets/${id}/`);
		return this.getPlanetData(res);
	}
	
	async getAllStarships() {
		const res = await this.getResource('starships/');
		return res.results.map( el => this.getStarshipData(el));
	}
	
	async getStarship(id) {
		const res = await this.getResource(`starships/${id}/`);
		return this.getStarshipData(res);
	}
	
	getId = (id) => {
		const regExp = /\/([0-9]*)\/$/;
		return parseInt(id.match(regExp)[1]);
	};
	
	getPlanetData = (planet) => {
		return {
			id: this.getId(planet.url),
			name: planet.name,
			population: planet.population,
			rotationPeriod: planet.rotation_period,
			diameter: planet.diameter,
		}
	};
	
	getPersonData = (person) => {
		return {
			id: this.getId(person.url),
			name: person.name,
			gender: person.gender,
			birthYear: person.birth_year,
			skinColor: person.skin_color,
		}
	};
	
	getStarshipData = (starship) => {
		return {
			id: this.getId(starship.url),
			name: starship.name,
			length: starship.length,
			hyperdriveRating: starship.hyperdrive_rating,
			crew: starship.crew,
		}
	};
}