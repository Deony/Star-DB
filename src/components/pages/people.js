import React  from 'react';
import { withRouter } from 'react-router-dom';

import Row from "../row";
import { PersonList, PersonDetails } from "../swapi-components";


const PeoplePage = ({ history, match }) => {
	const onPersonSelected = (id) => history.push(`${id}`);
	
	const { id } = match.params;
	
	return (
		<Row
			left={<PersonList onItemSelected={onPersonSelected} />}
			right={<PersonDetails itemId={id} />}
		/>
	)
};

export default withRouter(PeoplePage);