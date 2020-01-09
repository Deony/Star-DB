import React from 'react';
import { Redirect } from 'react-router-dom';


const PrivatePage = ({ isLogged }) => {
	
	if(isLogged) {
		return (
			<div className="box text-center">
				<div>You've logged in.<br/>
					This is private page
				</div>
			</div>
		)
	}
	
	return <Redirect to='/login'/>
};

export default PrivatePage;