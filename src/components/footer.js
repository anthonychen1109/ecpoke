import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div id="footer" className="footer container">
			<div className="footer-address">
				<h1>Find Us At:</h1>
        <hr />
				<h6>Address: 250 Reade Circle Suite #109, Greenville, NC 27858</h6>
				<h6>Tel: 856-366-6160</h6>
			</div>
			<div className="footer-hours">
				<h1>Open Hours:</h1>
        <hr />
				<h6>Monday - Thursday: 11:00 AM - 9:00 PM</h6>
				<h6>Friday - Saturday: 11:00 AM - 10:00 PM</h6>
				<h6>Sunday: 11:00 AM - 9:00 PM</h6>
			</div>
      <div>
        <Link to="https://m.facebook.com/ecpoke/" target="_blank">
          <img className="fb" src={require('../assets/images/fb-logo.png')} alt="fb logo"/>
        </Link>
      </div>
		</div>
  )
}

export default Footer;
