import React, { Component } from 'react';

import Spinner from "../spinner/spinner";
import ErrorBoundary from "../error-boundary/error-boundary";


const withData = (View, getData) => {
	
	return class extends Component {
		
		state = {
			data: null,
			loading: true
		};
		
		componentDidMount() {
			getData()
				.then(this.onListLoaded)
				.catch(this.onError);
		};
		
		onListLoaded = (items) => {
			this.setState({
				data: items,
				loading: false
			})
		};
		
		render() {
			const { data, loading } = this.state;
			
			if(loading) {
				return <Spinner />;
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