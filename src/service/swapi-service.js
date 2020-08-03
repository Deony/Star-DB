export default class SwapiService {
	_baseUrl = 'https://swapi.dev/api/';
	_baseUrlImg = 'https://starwars-visualguide.com/assets/img';
	
	getResource = async (url) => {
		const res = await fetch(`${this._baseUrl}${url}`);
		
		if(!res.ok) {
			throw new Error(`Can not get ${url}`)
		}
		
		return await res.json();
	};
	
	getAllPeople = async () => {
		const res = await this.getResource('people/');
		return res.results.map( el => this.getPersonData(el));
	};
	
	getPerson = async (id) => {
		const res = await this.getResource(`people/${id}/`);
		return this.getPersonData(res);
	};
	
	getAllPlanets = async () => {
		const res = await this.getResource('planets/');
		return res.results.map( el => this.getPlanetData(el));
	};
	
	getPlanet = async (id) => {
		const res = await this.getResource(`planets/${id}/`);
		return this.getPlanetData(res);
	};
	
	getAllStarships = async () => {
		const res = await this.getResource('starships/');
		return res.results.map( el => this.getStarshipData(el));
	};
	
	getStarship = async (id) => {
		const res = await this.getResource(`starships/${id}/`);
		return this.getStarshipData(res);
	};
	
	getId = (id) => {
		const regExp = /\/([0-9]*)\/$/;
		return parseInt(id.match(regExp)[1]);
	};
	
	getPersonImg = (id) => {
		return `${this._baseUrlImg}/characters/${id}.jpg`;
	};
	
	getPlanetImg = (id) => {
		return `${this._baseUrlImg}/planets/${id}.jpg`;
	};
	
	getStarshipImg = (id) => {
		return `${this._baseUrlImg}/starships/${id}.jpg`;
	};
	
	getPlanetData = (planet) => {
		return {
			id: this.getId(planet.url),
			name: planet.name,
			more:
				[
					{label: 'Population', field: planet.population},
					{label: 'Rotation period', field: planet.rotation_period},
					{label: 'Diameter', field: planet.diameter}
				]
		}
	};
	
	getPersonData = (person) => {
		return {
			id: this.getId(person.url),
			name: person.name,
			more:
				[
					{label: 'Gender', field: person.gender},
					{label: 'Birth year', field: person.birth_year},
					{label: 'Skin color', field: person.skin_color}
				]
		}
	};
	
	getStarshipData = (starship) => {
		return {
			id: this.getId(starship.url),
			name: starship.name,
			more:
				[
					{label: 'Length', field: starship.length},
					{label: 'Hyperdrive rating', field: starship.hyperdrive_rating},
					{label: 'Crew', field: starship.crew}
				]
		}
	};
}