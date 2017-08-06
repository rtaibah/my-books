import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Tabs extends Component {
	render () {
		return (
			<div className="tabs">
			<Link to="/reading">
				<div className="currently-reading-tab"><span>Currently Reading</span></div>
			</Link>
			<Link to="/want">
				<div className="want-to-read-tab"><span>Want to Read</span></div>
			</Link>
			<Link to="/read">
				<div className="already-read-tab"><span>Read</span></div>
			</Link>
			</div>
		)
	}
}

export default Tabs;
