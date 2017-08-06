import React from 'react';
import { Route, Link } from 'react-router-dom';
import Tabs from './Tabs';

const AppRoute = ({ children , ...rest }) => (
	<Route {...rest} render={props => (
		<div className="active header">
			<div className="list-books-title">
				<Link to="/home">
					<div className="logo"></div>
				</Link>
			</div>
			<div className="books-tabs">
				<Tabs />
			</div>
		{children}
		</div>
	)}/>
)

export default AppRoute;
