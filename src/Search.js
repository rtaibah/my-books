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
							this.props.searchResults.map(result => (
								<SearchResult 
									key={result.id} 
									title={result.title} 
									cover={result.imageLinks.thumbnail}
									author={result.authors}
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
