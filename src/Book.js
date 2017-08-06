import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as BooksAPI from './BooksAPI';

var all= BooksAPI.getAll();
console.log(all)

class Book extends Component {
	constructor(props){
		super(props);
		this.state = {
			shelf: this.props.shelf 
		}
		this.handleChange = this.handleChange.bind(this);
	}

	static propTypes = {
		author: PropTypes.string,
		cover: PropTypes.string,
		shelf: PropTypes.string.isRequired,
		title: PropTypes.string.isRequired
	}

	handleChange(event) {
		this.setState({shelf: event.target.value})
	}

	render () {
		return (
			<div className="book">
				<div className="book-top">
					<div className="book-shelf" style={{width: 128, height: '100%', backgroundImage: 'url('+this.props.cover+')'}}>
					</div>
					<div className="book-shelf-changer">
						<select value={this.state.value} onChange={this.handleChange}>
							<option value="none" disabled>Move to...</option>
							<option value="Currently Reading">Currently Reading</option>
							<option value="Want to Read">Want to Read</option>
							<option value="Read">Read</option>
							<option value="none">None</option>
						</select>
					</div>
				</div>
					<div className="book-title">{this.props.title}</div>
					<div className="book-authors">{this.props.author}</div>
			</div>
		)
	}
}

export default Book;

