import React, {Component} from 'react';

class SearchResult extends Component {
		render() {
			return (
				<li>
					<div className="book__search">
						<div className="book-top__search">
							<div className="book-cover__search" style={{
								width: '128px',
								height: '100%',
								backgroundSize: 'cover',
								backgroundImage: `url('${this.props.cover}')`
							}}>
							</div>
							<div className="book-shelf-changer__search">
								<select>
									<option value="none" disabled>Move to...</option>
									<option value="currentlyReading">Currently Reading</option>
									<option value="wantToRead">Want to Read</option>
									<option value="read">Read</option>
									<option value="none">None</option>
								</select>
							</div>
						</div>
						<div className="book-title__search">{this.props.title}</div>
						<div className="book-authors__search">{this.props.author}</div>
					</div>
				</li>
		)
	}
}

export default SearchResult;


