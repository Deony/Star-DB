import React from 'react';

import './item-list.css';


export default () => {
	return (
		<div className="box">
			<ul className="list-characters list">
				<li className="list-characters__item border-top">Luke</li>
				<li className="list-characters__item border-top">Darth</li>
				<li className="list-characters__item border-top">R2-D2</li>
			</ul>
		</div>
		
	)
}