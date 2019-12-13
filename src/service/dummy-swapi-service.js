export default class DummySwapiService {

	people = [
		{
			id: 1,
			name: 'Bill [TEST DATA]',
			gender: 'male',
			birth_year: '1999',
			skin_color: 'dark brown'
		},
		{
			id: 2,
			name: 'Cay [TEST DATA]',
			gender: 'female',
			birth_year: '1119',
			skin_color: 'yellow'
		},
		{
			id: 3,
			name: 'Pol [TEST DATA]',
			gender: 'male',
			birth_year: '1949',
			skin_color: 'light brown'
		},
		{
			id: 4,
			name: 'Jay [TEST DATA]',
			gender: 'female',
			birth_year: '1849',
			skin_color: 'red'
		}
	];
	
	planets = [
		{
			id: 1,
			name: 'Earth [TEST DATA]',
			population: '7.530.000.000',
			rotation_period: '23 hours 56 seconds',
			diameter: '12.742 km'
		},
		{
			id: 2,
			name: 'Dagobah [TEST DATA]',
			population: 'unknown',
			rotation_period: '203',
			diameter: '8900'
		},
		{
			id: 3,
			name: 'Alderaan [TEST DATA]',
			population: '2000000000',
			rotation_period: '24',
			diameter: '12500'
		},
		{
			id: 4,
			name: 'Hoth [TEST DATA]',
			population: 'unknown',
			rotation_period: '13',
			diameter: '500'
		}
	];
	
	starships = [
		{
			id: 1,
			name: 'USS Enterprise [TEST DATA]',
			hyperdrive_rating: 'approx 300 meters',
			crew: 1000,
		}
	];
	
	getAllPeople = async () => {
		return this.people.map( el => this.getPersonData(el));
	};
	
	getPerson = async (id) => {
		return this.getPersonData(this.getId(this.people, id));
	};
	
	getAllPlanets = async () => {
		return this.planets.map( el => this.getPlanetData(el));
	};
	
	getPlanet = async (id) => {
		return this.getPlanetData(this.planets[id]);
	};
	
	getAllStarships = async () => {
		return this.starships.map( el => this.getStarshipData(el));
	};
	
	getStarship = async (id) => {
		return this.getStarshipData(this.starships[id]);
	};
	
	getId = (list, currentId) => {
		return list.filter(el => currentId === el.id)[0];
	};
	
	getPersonImg = () => {
		return 'https://placeimg.com/200/200/people?t=1576098391766';
	};
	
	getPlanetImg = () => {
		return 'https://placeimg.com/200/200/arch?t=1576098405188';
	};
	
	getStarshipImg = () => {
		return 'https://placeimg.com/200/200/tech?t=1576098359606';
	};
	
	getPlanetData = (planet) => {
		return {
			id: planet.id,
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
			id: person.id,
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
			id: starship.id,
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