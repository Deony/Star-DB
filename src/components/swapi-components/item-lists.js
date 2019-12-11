import React from 'react';

import ItemList from "../item-list/item-list";
import SwapiService from "../../service/swapi-service";
import { withData } from "../hoc-helpers";


const withChildrenFunction = (Wrapped, fn) => {
	return (props) => {
		return <Wrapped {...props} >{fn}</Wrapped>
	};
};


const { getAllPeople, getAllPlanets, getAllStarships } = new SwapiService();

const renderNameAndBirthYear = ({name, more}) => <div>{name}<small>({more[1].field})</small></div>;
const renderNameAndDiameter = ({name, more}) => <div>{name}<small>({more[2].field} km)</small></div>;
const renderNameAndLength = ({name, more}) => <div>{name}<small>({more[0].field} m)</small></div>;

const PersonList = withData(
						withChildrenFunction(ItemList, renderNameAndBirthYear),
						getAllPeople
);

const PlanetList = withData(
						withChildrenFunction(ItemList, renderNameAndDiameter),
						getAllPlanets
);

const StarshipList = withData(
						withChildrenFunction(ItemList, renderNameAndLength),
						getAllStarships
);


export { PersonList, PlanetList, StarshipList };