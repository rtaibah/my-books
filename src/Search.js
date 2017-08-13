import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import SearchResult from './SearchResult'

class Search extends Component {
	render() {
		return (
			<div className="search-books">
				<div className="search-books-bar">
					<Link to="/" className="close-search">Close</Link>
					<div className="search-books-input-wrapper">
						<input onChange={(event) => this.props.searchBooks(event.target.value)} type="text" placeholder="Search by title or author"/>
						
					</div>
				</div>
				<div className="search-books-results">
					<ol className="books-grid__search">
						{ 
							this.props.searchResults.map(book=> (
								<SearchResult 
									key={book.id} 
									title={book.title} 
									cover={book.imageLinks && book.imageLinks.thumbnail}
									author={Array.isArray(book.authors) && book.authors}
									book={book}
									searchBooks={this.props.searchBooks}
									searchResults={this.props.searchResults}
									updateBooks={this.props.updateBooks}
									shelf={book.shelf}
								/>
							))
						}
					</ol>
				</div>
			</div>
		)
	}
}

export default Search;
