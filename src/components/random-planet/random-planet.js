import React, { Component } from 'react';

import './random-planet.css';
import Spinner from "../spinner/spinner";
import PlanetView from "./planet-view";
import ErrorBoundary from "../error-boundary/error-boundary";
import { withSwapiService } from "../hoc-helpers";


class RandomPlanet extends Component {
	
	state = {
		planet: {},
		imageUrl: null,
		loading: true
	};
	
	componentDidMount() {
		this.updatePlanet();
		this.interval = setInterval(this.updatePlanet, 3000)
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
	
	render() {
		const { planet, loading } = this.state;
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