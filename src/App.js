import React, { Component } from 'react';
import Search from './Search';
import Shelf from './Shelf';
import AppRouter from './AppRouter';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import './App.css';

class App extends Component {
  render() {
    var shelves = [
			{
				ShelfName: "Currently Reading",
				ClassName: "currently-reading",
				path:"reading"
			},{
				ShelfName: "Want to Read",
				ClassName: "want-to-read",
				path:"want"
			},{
				ShelfName: "Read",
				ClassName: "already-read",
				path:"read"
			}
		]
		/* TODO: 
		 * 1- Map over these. See comment below.
		 * 2- "/" route is not being directed properly.
		 */
    return (
    	<BrowserRouter>
				<div className="app">
					<Redirect exact from="/" to="/reading" />
				<AppRouter exact path='/reading'>
					<div className="shelf-wrapper">
						<Shelf className="shelf currently-reading" shelfName="Currently Reading" />
					</div>
				</AppRouter>

				<AppRouter exact path='/want'>
					<div className="shelf-wrapper">
						<Shelf className="shelf want-to-read" shelfName="Want to Read" />
					</div>
				</AppRouter>

				<AppRouter exact path='/read'>
					<div className="shelf-wrapper">
						<Shelf className="shelf already-read" shelfName="Read" />
					</div>
				</AppRouter>
		
				<Route exact path='/search' component={Search} />
				</div>
			</BrowserRouter>
    );
  }
}

export default App;


//{shelves.map((shelf) => {
//					return (
//					<AppRouter shelfName={shelf.ShelfName} key={shelf.path} exact path={shelf.path}>
//						<div className="shelf-wrapper">
//							<Shelf className={"shelf " + shelf.className } shelfName={shelf.ShelfName} />
//						</div>
//					</AppRouter>
//					)
//				})}
