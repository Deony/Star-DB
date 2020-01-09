import React from 'react';
import { Redirect } from 'react-router-dom';


const Login = ({ isLogged, onLogin }) => {
	if(isLogged) {
		return <Redirect to='/private' />
	}
	
	return (
		<div className="box">
			<div className='login text-center'>
				<h2 className='login-header'>Login</h2>
				<button className='btn btn-primary' onClick={onLogin}>Login</button>
			</div>
		</div>
	)
};

export default Login;