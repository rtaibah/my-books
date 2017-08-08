import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
	render () {
		return (
			<div className="header">
				<div className="list-books-title">
					<Link to="/">
						<div className="logo"></div>
					</Link>
				</div>
			</div>
		)
	}
}

export default Header;
