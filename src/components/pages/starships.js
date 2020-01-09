import React from 'react';
import { withRouter } from 'react-router-dom';

import Row from "../row";
import { StarshipList, StarshipDetails } from "../swapi-components";


const StarshipPage = ({ history, match }) => {
	const onStarshipSelected = (id) => history.push(`${id}`);
	
	const { id } = match.params;
	
	return (
		<Row
			left={<StarshipList onItemSelected={onStarshipSelected} />}
			right={<StarshipDetails itemId={id} />}
		/>
	)
};

export default withRouter(StarshipPage);