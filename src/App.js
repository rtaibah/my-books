import React, { Component } from 'react';
import Search from './Search';
import Shelves from './Shelves';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import './App.css';
import * as BooksAPI from './BooksAPI.js'

class App extends Component {
  constructor(props){
		super(props);
		this.state ={

		}
	}

	static propTypes = {
	}

  render() {
		var booksData = {}

		function getAllBooks(){
			BooksAPI.getAll().then(book => {
				booksData.book = book
				console.log(booksData.book)
			})
		}

		function updateBooks(book, shelf){
			BooksAPI.update(book, shelf)
		}

		getAllBooks()

    return (
    	<BrowserRouter>
				<div className="app">
					<Shelves />
					<Route exact path='/search' component={Search} />
					<Redirect exact from="/" to="/reading" />
				</div>
			</BrowserRouter>
		);
  }
}

export default App;


