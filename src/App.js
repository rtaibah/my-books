import React, { Component } from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';

import AppRouter from './AppRouter';
import Search from './Search';
import Shelf from './Shelf';

import * as BooksAPI from './BooksAPI.js';

import './App.css';

class App extends Component {
	constructor(props){
		super(props);
		this.state ={
			currentlyRead: [],
			read: [],
			wantToRead: []
		}
	}


  render() {
    var shelves = [
			{
				shelfName: "Currently Reading",
				className: "currently-reading",
				path:"/reading"
			},{
				shelfName: "Want to Read",
				className: "want-to-read",
				path:"/want"
			},{
				shelfName: "Read",
				className: "already-read",
				path: "/read"
			}]
		
		var booksData = []

		function getAllBooks(){
			BooksAPI.getAll().then(book => {
				booksData.book = book
				console.log(book)
			})
		}
	
		function updateBooks(book, shelf){
			BooksAPI.update(book, shelf)
		}

		getAllBooks()

    return (
    	<BrowserRouter>
				<div className="app">
					{shelves.map((shelf) => {
						return (
							<AppRouter path={shelf.path} key={shelf.shelfName}>
								<div className="shelf-wrapper">
									<Shelf className={"shelf " + shelf.className } shelfName={shelf.shelfName} />
								</div>
							</AppRouter>
						)})
					}
					<Route exact path='/search' component={Search} />
				<Route exact path="/" render={() => <Redirect to="/reading" />} />
				</div>
			</BrowserRouter>
    );
  }
}

export default App;


			
