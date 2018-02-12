import React from 'react';
import Iframe from 'react-iframe'

const Contact = () => {
  return (
    <div id="contact" className="contact">
      <h2 className="contact-header">Contact Us</h2>
      <div className="contact-info container">
        <div className="contact-left">
          <h2>Location</h2>
          <p>The Boundary 250 Reade Circle</p>
          <p>Suite #109 Greenville, NC</p>
          <br />
          <h2>Phone</h2>
          <p>252-571-0500</p>
          <br />
          <h2>Hours</h2>
          <p>Sun - Thurs: 11:00am - 9:00pm</p>
          <p>Fri - Sat: 11:00am - 10:00pm</p>
        </div>
        <div className="contact-right">
          <Iframe
            url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3243.740584072009!2d-77.37429418524556!3d35.60946518021116!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89aee7e484844c15%3A0x14ef12839078ac16!2s250+Reade+Cir+%23109%2C+Greenville%2C+NC+27858!5e0!3m2!1sen!2sus!4v1518188797934"
              width="100%"
              height="400px"
              id="myId"
              className="myClassname"
              display="initial"
              position="relative"
              allowFullScreen
            />
        </div>

      </div>
    </div>
  )
}

export default Contact;
