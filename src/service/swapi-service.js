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
		return res.results;
	}
	
	async getPerson(id) {
		const res = await this.getResource(`people/${id}/`);
		return res;
	}
	
	async getAllPlanet() {
		const res = await this.getResource('planets/');
		return res.results;
	}
	
	async getPlanet(id) {
		const res = await this.getResource(`planets/${id}/`);
		return res;
	}
	
	async getAllStarships() {
		const res = await this.getResource('starships/');
		return res.results;
	}
	
	async getStarship(id) {
		const res = await this.getResource(`starships/${id}/`);
		return res;
	}
}