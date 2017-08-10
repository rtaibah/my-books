import React, { Component } from 'react';

class Changer extends Component {
	render (){
		return (
			<div className="book-shelf-changer">
				<select>
					<option value="none" disabled>Move to...</option>
					<option value="Currently Reading">Currently Reading</option>
					<option value="Want to Read">Want to Read</option>
					<option value="Read">Read</option>
					<option value="none">None</option>
				</select>
			</div>
		)
	}
}


export default Changer;
