import React from 'react';
import { Link } from 'react-router-dom';

import './header.css'


const Header = (props) => {
	const { onServiceChange } = props;
	
	return (
		<header className='d-flex justify-content-between'>
			<h1><Link to='/'>Star DB</Link></h1>
			
			<div>
				<ul className='d-inline-block nav'>
					<li className='nav-item d-inline-block'>
						<Link to="/people/" className='nav-link'>People</Link>
					</li>
					<li className='nav-item d-inline-block'>
						<Link to="/planets/" className='nav-link'>Planets</Link>
					</li>
					<li className='nav-item d-inline-block'>
						<Link to="/starships/" className='nav-link'>Starships</Link>
					</li>
					<li className='nav-item d-inline-block'>
						<Link to="/login" className='nav-link'>Login</Link>
					</li>
					<li className='nav-item d-inline-block'>
						<Link to="/private" className='nav-link'>Private</Link>
					</li>
				</ul>
				<button className='btn btn-primary' onClick={onServiceChange}>Change Service</button>
			</div>
		</header>
	)
};

export default Header;