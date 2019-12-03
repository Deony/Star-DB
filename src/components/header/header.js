import React from 'react';

import './header.css'


const Header = () => {
	return (
		<header className='d-flex justify-content-between'>
			<h1>Star DB</h1>
			<ul className='d-flex nav'>
				<li className='nav-item'>People</li>
				<li className='nav-item'>Planets</li>
				<li className='nav-item'>Starships</li>
			</ul>
		</header>
	)
};

export default Header;