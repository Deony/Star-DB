import React, { Component } from 'react';

import './item-list.css';
import Spinner from '../spinner/spinner';
import ListView from './list-view';
import ErrorBoundary from "../error-boundary/error-boundary";


export default class ItemList extends Component{
	
	state = {
		itemList: null,
		loading: true
	};
	
	componentDidMount() {
		const { getData } = this.props;
		
		getData()
			.then(this.onListLoaded)
			.catch(this.onError);
	}
	
	onListLoaded = (items) => {
		this.setState({
			itemList: items,
			loading: false
		})
	};
	
	render() {
		const { itemList, loading } = this.state;
		const { onItemSelected, renderItem } = this.props;
		
		const spinner = loading ? <Spinner /> : null;
		const content = !loading ? <ListView itemList={itemList} onItemSelected={onItemSelected} renderItem={renderItem}/> : null;
		
		return (
			<div className="box">
				<ErrorBoundary>
					{spinner}
					{content}
				</ErrorBoundary>
			</div>
		)
	}
}