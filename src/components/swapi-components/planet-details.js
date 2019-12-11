import React from 'react';

import { ItemDetails } from "../item-details";
import { withSwapiService } from "../hoc-helpers";


const PlanetDetails = ( {itemId, swapiService} ) => {
	return (
		<ItemDetails
			selectedItemId={itemId}
			getData={swapiService.getPlanet}
			getImageUrl={swapiService.getPlanetImg}
		/>
	)
};

export default withSwapiService(PlanetDetails);