import React from 'react';

import { ItemDetails } from "../item-details";
import { withSwapiService } from "../hoc-helpers";


const StarshipDetails = ( {itemId, swapiService} ) => {
	return (
		<ItemDetails
			selectedItemId={itemId}
			getData={swapiService.getStarship}
			getImageUrl={swapiService.getStarshipImg}
		/>
	)
};

export default withSwapiService(StarshipDetails);