import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

class NavBar extends Component {
	render() {
		return (
			<BrowserRouter>
				<div className="navbar">

					<div className="navbar-home"><Link to="/"><h4>Home</h4></Link></div>
					<div className="navbar-about"><Link to="/about"><h4>About</h4></Link></div>


					<div className="navbar-center">
						<img className="nav-logo" src={require('../images/logo.jpeg')}/>
					</div>


					<div><Link to="menu"><h4>Menu</h4></Link></div>
					<div><Link to="contact"><h4>Contact</h4></Link></div>

				</div>
			</BrowserRouter>
		)
	}
}

export default NavBar;
