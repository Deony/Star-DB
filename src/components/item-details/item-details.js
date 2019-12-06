import React, { Component } from 'react';

import './item-details.css';
import Spinner from "../spinner/spinner";
import ItemDetailsView from "./item-details-view";
import ErrorBoundary from "../error-boundary/error-boundary";


export default class ItemDetails extends Component{
	
	state = {
		item: null,
		imageUrl: null,
		loading: true
	};
	
	componentDidMount() {
		this.updatePersonDetails();
	};
	
	UNSAFE_componentWillReceiveProps(nextProps) {
		if(nextProps.selectedItemId !== this.props.selectedItemId) {
			this.setState({
				loading: true
			})
		}
	}
	
	componentDidUpdate(prevProps) {
		if(this.props.selectedItemId !== prevProps.selectedItemId) {
			this.updatePersonDetails();
		}
	};
	
	updatePersonDetails = () => {
		const { selectedItemId, getData } = this.props;
		
		if(!selectedItemId) return;
		
		getData(selectedItemId)
			.then(this.onDetailsLoaded)
	};
	
	onDetailsLoaded = (item) => {
		this.setState({
			item,
			imageUrl: this.props.getImageUrl(item.id),
			loading: false
		})
	};
	
	render() {
		const { item, loading, imageUrl } = this.state;
		const spinner = loading ? <Spinner /> : null;
		const content = !loading ? <ItemDetailsView item={item} imageUrl={imageUrl} /> : null;
		
		return (
			<div className="box item-details d-flex align-items-center">
				<ErrorBoundary>
					{spinner}
					{content}
				</ErrorBoundary>
			</div>
		)
	}
}