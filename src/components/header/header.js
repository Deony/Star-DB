import React from 'react';

import './header.css'


const Header = (props) => {
	const { onServiceChange } = props;
	
	return (
		<header className='d-flex justify-content-between'>
			<h1>Star DB</h1>
			
			<div>
				<ul className='d-inline-block nav'>
					<li className='nav-item d-inline-block'><a href="#" className='nav-link'>People</a></li>
					<li className='nav-item d-inline-block'><a href="#" className='nav-link'>Planets</a></li>
					<li className='nav-item d-inline-block'><a href="#" className='nav-link'>Starships</a></li>
				</ul>
				<button className='btn btn-primary' onClick={onServiceChange}>Change Service</button>
			</div>
		</header>
	)
};

export default Header;