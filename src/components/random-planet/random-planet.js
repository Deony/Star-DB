import React, { Component } from 'react';

import './random-planet.css';
import Spinner from "../spinner/spinner";
import PlanetView from "./planet-view";
import ErrorBoundary from "../error-boundary";
import ErrorIndicator from '../error';
import { withSwapiService } from "../hoc-helpers";
import PropTypes from 'prop-types';


class RandomPlanet extends Component {
	
	state = {
		planet: {},
		imageUrl: null,
		loading: true,
		error: false
	};
	
	static defaultProps = {
		updateInterval: 4000
	};
	
	static propTypes = {
		updateInterval: PropTypes.number
	};
	
	componentDidMount() {
		const { updateInterval } = this.props;
		this.updatePlanet();
		this.interval = setInterval(this.updatePlanet, updateInterval)
	};
	
	componentWillUnmount() {
		clearInterval(this.interval);
	}
	
	componentDidUpdate(prevProps) {
		if(this.props.getData !== prevProps.getData || this.props.getImageUrl !== prevProps.getImageUrl) {
			this.updatePlanet();
		}
	}
	
	updatePlanet = () => {
		const id = Math.floor( Math.random()*3  + 1);
		
		this.props.getData(id)
			.then(this.onPlanetLoaded)
			.catch(this.onError)
	};
	
	onPlanetLoaded = (planet) => {
		this.setState({
			planet,
			imageUrl: this.props.getImageUrl(planet.id),
			loading: false
		})
	};
	
	onError = () => {
		clearInterval(this.interval);
		
		this.setState({
			loading: false,
			error: true
		})
	};
	
	render() {
		const { planet, loading, error } = this.state;

		if(error) {
			return <ErrorIndicator/>
		}
		
		const spinner = loading ? <Spinner /> : null;
		const content = !loading ? <PlanetView  planet={planet} getPlanetImg={this.state.imageUrl}/> : null;
		
		return (
			<div className="box random-planet d-flex align-items-center">
				<ErrorBoundary>
					{spinner}
					{content}
				</ErrorBoundary>
			</div>
		)
	}
}

const mapMethodsToProps = (swapiService) => {
	return {
		getData: swapiService.getPlanet,
		getImageUrl: swapiService.getPlanetImg
	}
};

const wrapRandomPlanet = withSwapiService(RandomPlanet, mapMethodsToProps);

export default wrapRandomPlanet;