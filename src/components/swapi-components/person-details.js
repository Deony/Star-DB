import React from 'react';

import { ItemDetails } from "../item-details";
import { withSwapiService } from "../hoc-helpers";


const PersonDetails = ( {itemId, swapiService} ) => {
	return (
		<ItemDetails
			selectedItemId={itemId}
			getData={swapiService.getPerson}
			getImageUrl={swapiService.getPersonImg}
		/>
	)
};

export default withSwapiService(PersonDetails);