import React, { Component } from 'react';
import logo from './logo.svg';
import Search from './Search';
import Shelf from './Shelf';
import Book from './Book';
import Tabs from './Tabs';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import './App.css';

class App extends Component {
  render() {
    return (
    	<BrowserRouter>
				<div className="app">
					<div className="list-books-title">
						<h1>Sift</h1>
					</div>
					<div className="books-tabs">
						<Tabs />
					</div>
					<Route exact path='/'>
						<div>
							<Shelf className="currently-reading" shelfName="Currently Reading" />
							<Shelf className="want-to-read" shelfName="Want to Read" />
							<Shelf className="already-read" shelfName="Read" />
							<div className="open-search">
								<Link to="/search">Add a Book</Link>
							</div>
						</div>
					</ Route>
					<Route exact path='/search' component={Search} />
				</div>
			</BrowserRouter>
    );
  }
}

export default App;
