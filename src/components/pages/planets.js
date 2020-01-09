import React from 'react';
import { withRouter } from 'react-router-dom';

import Row from "../row";
import { PlanetList, PlanetDetails } from "../swapi-components";


const PlanetPage = ({ history, match }) => {
	const onPlanetSelected = (id) => history.push(`${id}`);
	
	const { id } = match.params;
	
	return (
		<Row
			left={<PlanetList onItemSelected={onPlanetSelected} />}
			right={<PlanetDetails itemId={id} />}
		/>
	)
};

export default withRouter(PlanetPage)