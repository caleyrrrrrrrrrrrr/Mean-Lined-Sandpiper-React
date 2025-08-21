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
        link1={
          <Fragment>
            <span className="contact-text10">8b The Bookcase</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="contact-text11">Cleaning Service</span>
          </Fragment>
        }
        action1={
          <Fragment>
            <span className="contact-text12">
              <span>AirBnB</span>
              <br></br>
            </span>
          </Fragment>
        }
        action2={
          <Fragment>
            <span className="contact-text15">Booking.com</span>
          </Fragment>
        }
        action11={
          <Fragment>
            <span className="contact-text16">
              <span>AirBnB</span>
              <br></br>
            </span>
          </Fragment>
        }
        action21={
          <Fragment>
            <span className="contact-text19">Booking.com</span>
          </Fragment>
        }
        rootClassName="navbar4root-class-name2"
      ></Navbar4>
      <BookingContactForm
        text={
          <Fragment>
            <span className="contact-text20">
              <span>
                .
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <br></br>
              <span>We will be in touch soon!</span>
            </span>
          </Fragment>
        }
        action={
          <Fragment>
            <span className="contact-text24">Submit</span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="contact-text25">Contact us</span>
          </Fragment>
        }
      ></BookingContactForm>
    </div>
  )
}

export default Contact
