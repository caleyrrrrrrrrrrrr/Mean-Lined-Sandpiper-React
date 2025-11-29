import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import Navbar4 from '../components/navbar4'
import BookingContactForm from '../components/booking-contact-form'
import './contact.css'

const Contact = (props) => {
  return (
    <div className="contact-container">
      <Helmet>
        <title>Contact - 8b The Bookcase</title>
        <meta property="og:title" content="Contact - 8b The Bookcase" />
      </Helmet>
      <Navbar4
        rootClassName="navbar4root-class-name2"
      ></Navbar4>
      <BookingContactForm
      ></BookingContactForm>
    </div>
  )
}

export default Contact
