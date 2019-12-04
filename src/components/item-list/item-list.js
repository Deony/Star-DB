import React, { Component } from 'react';

import './item-list.css';
import Spinner from '../spinner/spinner';
import Error from "../error/error-indicator";
import ListView from './list-view';
import SwapiService from "../../service/swapi-service";

export default class ItemList extends Component{
	swapiService = new SwapiService();
	
	state = {
		peopleList: null,
		loading: true,
		error: false
	};
	
	componentDidMount() {
		this.updateListPeople();
	}
	
	updateListPeople = () => {
		this.swapiService.getAllPeople()
			.then(this.onListLoaded)
			.catch(this.onError)
	};
	
	onListLoaded = (people) => {
		this.setState({
			peopleList: people,
			loading: false
		})
	};
	
	onError = (people) => {
		this.setState({
			error: true,
			loading: false
		})
	};
	
	render() {
		const { peopleList, error, loading } = this.state;

		const errorMessage = error ? <Error /> : null;
		const spinner = loading ? <Spinner /> : null;
		const content = !(error || loading) ? <ListView peopleList={peopleList} onItemSelected={this.props.onItemSelected}/> : null;
		
		return (
			<div className="box">
				{spinner}
				{errorMessage}
				{content}
			</div>
		)
	}
}