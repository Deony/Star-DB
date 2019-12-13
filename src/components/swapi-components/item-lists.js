import React from 'react';

import ItemList from "../item-list/item-list";
import { withData, withSwapiService } from "../hoc-helpers";


const withChildrenFunction = (Wrapped, fn) => {
	return (props) => {
		return <Wrapped {...props} >{fn}</Wrapped>
	};
};

const renderNameAndBirthYear = ({name, more}) => <div>{name}<small>({more[1].field})</small></div>;
const renderNameAndDiameter = ({name, more}) => <div>{name}<small>({more[2].field} km)</small></div>;
const renderNameAndLength = ({name, more}) => <div>{name}<small>({more[0].field} m)</small></div>;

const mapPersonMethodsToProps = (swapiService) => {
	return {
		getData: swapiService.getAllPeople
	}
};
const mapPlanetMethodsToProps = (swapiService) => {
	return {
		getData: swapiService.getAllPlanets
	}
};
const mapStarshipMethodsToProps = (swapiService) => {
	return {
		getData: swapiService.getAllStarships
	}
};

const PersonList = withSwapiService(
						withData(withChildrenFunction(ItemList, renderNameAndBirthYear)),
						mapPersonMethodsToProps
);

const PlanetList = withSwapiService(
						withData(withChildrenFunction(ItemList, renderNameAndDiameter)),
						mapPlanetMethodsToProps
);

const StarshipList = withSwapiService(
						withData(withChildrenFunction(ItemList, renderNameAndLength)),
						mapStarshipMethodsToProps
);


export { PersonList, PlanetList, StarshipList };