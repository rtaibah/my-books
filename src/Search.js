import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as BooksAPI from './BooksAPI.js';
import PropTypes from 'prop-types';

class Search extends Component {

	static propTypes ={
		// Add Later
	}

	state = {
		query: ''
	}

	updateQuery = (query) => {
		this.setState({ query: query.trim()}
	)}
	
	render() {
		const { query } = this.state

	function searchBooks(query, maxResults){
		BooksAPI.search(query, maxResults).then(book => {
			return book.id
		})
	}

	searchBooks('Football', 9)

		return (
			<div className="search-books">
				<div className="search-books-bar">
					<Link to="/" className="close-search">Close</Link>
					<div className="search-books-input-wrapper">
						<input 
							type="text" 
							placeholder="Search by title or author"
							value={query}
							onChange={(event) => this.updateQuery(event.target.value)}
						/>
					</div>
				</div>
				<div className="search-books-results">
					<ol className="books-grid"></ol>
				</div>
			</div>
		)
	}
}

export default Search;
