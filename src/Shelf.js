import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Book from './Book';
import { Link } from 'react-router-dom';


const bookData = [
	{ 
		title: "To Kill a Mockingbird", 
		cover: "http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api",
		author: "Harper Lee",
		shelf: "Currently Reading"
	},
	{ 
		title: "Ender's Game", 
		cover: "http://books.google.com/books/content?id=yDtCuFHXbAYC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72RRiTR6U5OUg3IY_LpHTL2NztVWAuZYNFE8dUuC0VlYabeyegLzpAnDPeWxE6RHi0C2ehrR9Gv20LH2dtjpbcUcs8YnH5VCCAH0Y2ICaKOTvrZTCObQbsfp4UbDqQyGISCZfGN&source=gbs_api",
		author: "Orson Scott Card",
		shelf: "Currently Reading"
	},
	{ 
		title: "1776", 
		cover: "http://books.google.com/books/content?id=uu1mC6zWNTwC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73pGHfBNSsJG9Y8kRBpmLUft9O4BfItHioHolWNKOdLavw-SLcXADy3CPAfJ0_qMb18RmCa7Ds1cTdpM3dxAGJs8zfCfm8c6ggBIjzKT7XR5FIB53HHOhnsT7a0Cc-PpneWq9zX&source=gbs_api",
		author: "David McCullough",
		shelf: "Currently Reading"
	},
	{ 
		title: "Harry Potter and the Sorcerer", 
		cover: "http://books.google.com/books/content?id=wrOQLV6xB-wC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72G3gA5A-Ka8XjOZGDFLAoUeMQBqZ9y-LCspZ2dzJTugcOcJ4C7FP0tDA8s1h9f480ISXuvYhA_ZpdvRArUL-mZyD4WW7CHyEqHYq9D3kGnrZCNiqxSRhry8TiFDCMWP61ujflB&source=gbs_api",
		author: "J.K. Rowling",
		shelf: "Want to Read"
	},
	{ 
		title: "The Hobbit", 
		cover: "http://books.google.com/books/content?id=pD6arNyKyi8C&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE70Rw0CCwNZh0SsYpQTkMbvz23npqWeUoJvVbi_gXla2m2ie_ReMWPl0xoU8Quy9fk0Zhb3szmwe8cTe4k7DAbfQ45FEzr9T7Lk0XhVpEPBvwUAztOBJ6Y0QPZylo4VbB7K5iRSk&source=gbs_api",
		author: "J.R.R Tolkien",
		shelf: "Want to Read"
	},
	{ 
		title: "Oh, the Places You'll Go!",
		cover: "http://books.google.com/books/content?id=1q_xAwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE712CA0cBYP8VKbEcIVEuFJRdX1k30rjLM29Y-dw_qU1urEZ2cQ42La3Jkw6KmzMmXIoLTr50SWTpw6VOGq1leINsnTdLc_S5a5sn9Hao2t5YT7Ax1RqtQDiPNHIyXP46Rrw3aL8&source=gbs_api",
		author: "Seuss",
		shelf: "Read"
	},
	{ 
		title: "The Adventures of Tom Sawyer", 
		cover: "http://books.google.com/books/content?id=32haAAAAMAAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72yckZ5f5bDFVIf7BGPbjA0KYYtlQ__nWB-hI_YZmZ-fScYwFy4O_fWOcPwf-pgv3pPQNJP_sT5J_xOUciD8WaKmevh1rUR-1jk7g1aCD_KeJaOpjVu0cm_11BBIUXdxbFkVMdi&source=gbs_api",
		author: "Mark Twain",
		shelf: "Read"
	}
]

class Shelf extends Component {
		static propTypes = {
			shelfName: PropTypes.string.isRequired,
		}

	render(){
		return (
				<div className={this.props.className +" list-books-content"}>
					<div>
						<div className="bookshelf">
							<div className="bookshelf-books">
								<ol className="books-grid">
										{bookData.filter(book => (book.shelf === this.props.shelfName))
											.map(book => (
												<li key={book.title}>
													<Book 
														author={book.author} 
														cover={book.cover} 
														shelf={book.shelf} 
														title={book.title}
													/>
												</li>
											))
										}
								</ol>
							</div>
						</div>
					</div>
							<div className="open-search">
								<Link to="/search">Add a Book</Link>
							</div>
				</div>
		)
	}
}

export default Shelf;
