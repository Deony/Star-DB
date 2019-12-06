import React, { Component } from 'react';

import ItemList from  "../item-list/item-list";
import ItemDetails from  "../item-details/item-details";
import Row from  "../row/row";
import SwapiService from "../../service/swapi-service";


export default class PeoplePage extends Component {
	
	swapiService = new SwapiService();
	
	render() {
		const { onItemSelected, itemId, renderItem } = this.props;
		
		return (
			<Row
				left={<ItemList onItemSelected={onItemSelected}
								renderItem={renderItem}
								getData={this.swapiService.getAllStarships}
				/>}
				right={<ItemDetails selectedItemId={itemId}
									getData={this.swapiService.getStarship}
									getImageUrl={this.swapiService.getStarshipImg}/>
				}
			/>
		)
	}
}