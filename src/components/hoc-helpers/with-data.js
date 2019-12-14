import React, { Component } from 'react';

import Spinner from "../spinner/spinner";
import ErrorBoundary from "../error-boundary";
import ErrorIndicator from '../error'


const withData = (View) => {
	
	return class extends Component {
		
		state = {
			data: null,
			loading: true,
			error: false
		};
		
		componentDidMount() {
			this.update();
		};
		
		componentDidUpdate(prevProps) {
			if(this.props.getData !== prevProps.getData) {
				this.update();
			}
		};
		
		update() {
			this.props.getData()
				.then(this.onListLoaded)
				.catch(this.onError);
		}
		
		onListLoaded = (items) => {
			this.setState({
				data: items,
				loading: false
			})
		};
		
		onError = () => {
			this.setState({
				loading: false,
				error: true
			})
		};
		
		render() {
			const { data, loading, error } = this.state;
			
			if(loading) {
				return <Spinner />;
			}
			
			if(error) {
				return <ErrorIndicator />;
			}
			
			return (
				<ErrorBoundary>
					<View data={data} {...this.props} />
				</ErrorBoundary>
			)
		}
	}
};

export default withData;