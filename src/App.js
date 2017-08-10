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
			books: []
		}
	}	

	componentDidMount() {
		BooksAPI.getAll().then(books => {
				this.setState({books})
				//books.map((book) => {
				//	if (book.shelf === "read"){this.setState({read: this.state.read.concat(book)})}
				//	if (book.shelf === "currentlyReading"){this.setState({currentlyReading: this.state.currentlyReading.concat(book)})}
				//	if (book.shelf === "wantToRead"){this.setState({wantToRead: this.state.wantToRead.concat(book)})}
				//})
		})
	}

	updateBooks(book, shelf){
		BooksAPI.update(book, shelf)
	}


  render() {

		let shelves = [
			{
				shelfName: "currentlyReading",
				className: "currently-reading",
				path:"/reading"
			},{
				shelfName: "wantToRead",
				className: "want-to-read",
				path:"/want"
			},{
				shelfName: "read",
				className: "already-read",
				path: "/read"
		}]


    return (
    	<BrowserRouter>
				<div className="app">
					{shelves.map((shelf) => {
						return (
							<AppRouter path={shelf.path} key={shelf.shelfName}>
								<div className="shelf-wrapper">
									<Shelf 
										className={"shelf " + shelf.className } 
										shelfName={shelf.shelfName} 
										books={this.state.books} 
									/>
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
