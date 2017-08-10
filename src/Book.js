import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Changer from './Changer';

class Book extends Component {
	constructor(props){
		super(props);

		this.state = {
		}

		this.handleChange = this.handleChange.bind(this);
	}

	static propTypes = {
		shelf: PropTypes.string.isRequired,
		title: PropTypes.string.isRequired,
		authors: PropTypes.array,
		averageRating: PropTypes.number,
		cover: PropTypes.string,
		pageCount: PropTypes.number,
		publishedDate: PropTypes.string
	}

	handleChange(event) {
		this.setState({shelf: event.target.value})
	}

	findYear(date){
		var parts = date.split('-')
		return parts[0]
	}


	render () {
		let { title, authors, averageRating, cover, pageCount, publishedDate } = this.props
		return (
			<div className="book">
				<div className="book-cover" style={{width: 'auto', backgroundSize: 'cover', backgroundImage: 'url('+cover+')'}}>
				</div>
				<div className="book-info">
					<div className="book-title">{title}</div>
					<div className="book-authors">{authors.join(' & ')}</div>
					<ul className="book-more-info">
						{ averageRating && <li className='book-average-rating'>{averageRating}/5</li>}
						<li className="book-page-count">{pageCount}p</li>
						<li className="book-published-date">{this.findYear(publishedDate)}</li>
					</ul>
					<Changer />
				</div>
			</div>
		)
	}
}

export default Book;

