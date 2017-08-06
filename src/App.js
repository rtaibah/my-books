import React, { Component } from 'react';
import logo from './logo.svg';
import Search from './Search';
import Shelf from './Shelf';
import AppRoute from './AppRoute';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import './App.css';

class App extends Component {
  render() {
    return (
    	<BrowserRouter>
				<div className="app">
				<Route exact path="/"><Redirect to="/home"/></Route>

				<AppRoute exact path='/(home|reading)'>
					<div className="shelf-wrapper">
						<Shelf className="shelf currently-reading" shelfName="Currently Reading" />
					</div>
				</AppRoute>

				<AppRoute exact path='/want'>
					<div className="shelf-wrapper">
						<Shelf className="shelf want-to-read" shelfName="Want to Read" />
					</div>
				</AppRoute>

				<AppRoute exact path='/read'>
					<div className="shelf-wrapper">
						<Shelf className="shelf already-read" shelfName="Read" />
					</div>
				</AppRoute>
		
				<Route exact path='/search' component={Search} />
				</div>
			</BrowserRouter>
    );
  }
}

export default App;



