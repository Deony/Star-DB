import React from 'react';

import ItemList from  "../item-list/item-list";
import PersonDetails from  "../person-details/person-details";
import Row from  "../row/row";


export default (props) => {
	return (
		<Row
			left={<ItemList onItemSelected={props.onItemSetected} />}
			right={<PersonDetails selectedItemId={props.itemId}/>}
		/>
	)
}