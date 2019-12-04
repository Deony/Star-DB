import React, { Component } from 'react';

import './person-details.css';
import SwapiService from "../../service/swapi-service";
import Spinner from "../spinner/spinner";
import Error from "../error/error-indicator";
import PersonDetailsView from "./person-details-view";

export default class PersonDetails extends Component{
	
	swapiService = new SwapiService();
	
	state = {
		person: null,
		loading: true,
		error: false
	};
	
	componentDidMount() {
		this.updatePersonDetails();
	};
	
	componentWillReceiveProps() {
		this.setState({
			loading: true,
		})
	}
	
	componentDidUpdate(prevProps) {
		if(this.props.selectedItemId !== prevProps.selectedItemId) {
			this.updatePersonDetails();
		}
		
	};
	
	updatePersonDetails = () => {
		const { selectedItemId } = this.props;
		if(!selectedItemId) {
			return
		}
		this.swapiService.getPerson(selectedItemId)
			.then(this.onDetailsLoaded)
	};
	
	onDetailsLoaded = (person) => {
		this.setState({
			person,
			loading: false
		})
	};
	
	render() {
		const { person, loading, error} = this.state;
		const { selectedItemId } = this.props;
		
		const spinner = loading ? <Spinner /> : null;
		const errorIndicator = error ? <Error /> : null;
		const content = !(loading || error) ? <PersonDetailsView personDetails={person}/> : null;
		
		return (
			<div className="box person-details d-flex align-items-center">
				{spinner}
				{errorIndicator}
				{content}
			</div>
		)
	}
}