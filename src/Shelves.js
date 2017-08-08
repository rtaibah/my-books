import React, { Component } from 'react';
import Shelf from './Shelf';
import AppRouter from './AppRouter';

class Shelves extends Component {
	render(){

		var shelves = [
			{
				shelfName: "Currently Reading",
				className: "currently-reading",
				path:"reading"
			},{
				shelfName: "Want to Read",
				className: "want-to-read",
				path:"want"
			},{
				shelfName: "Read",
				className: "already-read",
				path:"read"
			}
		]

		return (

			<div className="shelves">
				<AppRouter exact path='/reading'>
					<div className="shelf-wrapper">
						<Shelf className="shelf currently-reading" shelfName="Currently Reading" />
					</div>
				</AppRouter>
				<AppRouter exact path='/want'>
					<div className="shelf-wrapper">
						<Shelf className="shelf want-to-read" shelfName="Want to Read" />
					</div>
				</AppRouter>
				<AppRouter exact path='/read'>
					<div className="shelf-wrapper">
						<Shelf className="shelf already-read" shelfName="Read" />
					</div>
				</AppRouter>
			</div>
		)
	}
}

export default Shelves


//{shelves.map((shelf) => {
//					return (
//					<AppRouter shelfName={shelf.ShelfName} key={shelf.path} exact path={shelf.path}>
//						<div className="shelf-wrapper">
//							<Shelf className={"shelf " + shelf.className } shelfName={shelf.ShelfName} />
//						</div>
//					</AppRouter>
//					)
//				})}
