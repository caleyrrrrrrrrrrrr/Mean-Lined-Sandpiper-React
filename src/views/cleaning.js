import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import Navbar4 from '../components/navbar4'
import HeroCleaning from '../components/hero-cleaning'
import ContentList4 from '../components/content-list4'
import BookingContactForm from '../components/booking-contact-form'
import './cleaning.css'

const Cleaning = (props) => {
  return (
    <div className="cleaning-container">
      <Helmet>
        <title>Cleaning - Mean Lined Sandpiper</title>
        <meta property="og:title" content="Cleaning - Mean Lined Sandpiper" />
      </Helmet>
      <Navbar4
        link1={
          <Fragment>
            <span className="cleaning-text10">8b The Bookcase</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="cleaning-text11">Cleaning Service</span>
          </Fragment>
        }
        action1={
          <Fragment>
            <span className="cleaning-text12">
              <span>AirBnB</span>
              <br></br>
            </span>
          </Fragment>
        }
        action2={
          <Fragment>
            <span className="cleaning-text15">Booking.com</span>
          </Fragment>
        }
        action11={
          <Fragment>
            <span className="cleaning-text16">
              <span>AirBnB</span>
              <br></br>
            </span>
          </Fragment>
        }
        action21={
          <Fragment>
            <span className="cleaning-text19">Booking.com</span>
          </Fragment>
        }
        rootClassName="navbar4root-class-name1"
      ></Navbar4>
      <HeroCleaning
        action1={
          <Fragment>
            <span className="cleaning-text20">Contact Us</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="cleaning-text21">
              Cleaning and turnover services for holiday homes around Dawlish
            </span>
          </Fragment>
        }
        heading11={
          <Fragment>
            <span className="cleaning-text22">
              The Bookcase Cleaning Services
            </span>
          </Fragment>
        }
        rootClassName="hero-cleaningroot-class-name"
      ></HeroCleaning>
      <ContentList4
        content9={
          <Fragment>
            <span className="cleaning-text23">
              <span>
                Starting my holiday let, I had no idea how difficult it would be
                to find a service to do changeovers to a five star standard.
                When you enter my property, it needs to feel as if no one has
                ever stayed here before. I want each guest to feel not only
                pampered and relaxed, but cared for - that is why the
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="cleaning-text25">only</span>
              <span>
                {' '}
                thing that matters is
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="cleaning-text27">everything</span>
              <span>
                .
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span>
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <br></br>
              <br></br>
              <span>
                Initially, being based remotely the journeys to complete change
                overs were difficult, but I just couldn’t trust it to anyone
                else. I wanted change over goodie packs, handwritten welcome
                cards and freshly laundered linen that smelled like spring. I
                wanted healthy houseplants and bunches of flowers to greet my
                guests; for my place to look and feel as perfect as possible.
              </span>
              <br></br>
              <br></br>
              <span>Contact me today to discuss your requirements.</span>
              <br></br>
            </span>
          </Fragment>
        }
        heading2={
          <Fragment>
            <span className="cleaning-text37">
              <span>Goodie packs and welcome cards</span>
              <br></br>
            </span>
          </Fragment>
        }
        heading3={
          <Fragment>
            <span className="cleaning-text40">Replace and restock basics</span>
          </Fragment>
        }
        heading4={
          <Fragment>
            <span className="cleaning-text41">Fresh flowers</span>
          </Fragment>
        }
        heading5={
          <Fragment>
            <span className="cleaning-text42">House plant care</span>
          </Fragment>
        }
        heading9={
          <Fragment>
            <span className="cleaning-text43">
              <span>Starting my holiday let,</span>
              <br></br>
            </span>
          </Fragment>
        }
        imageSrc="/e45cc3c8-1a6c-4d1b-b0f3-5e5260aced81-200w.jpg"
        heading31={
          <Fragment>
            <span className="cleaning-text46">Services available:</span>
          </Fragment>
        }
        heading51={
          <Fragment>
            <span className="cleaning-text47">Change over cleaning </span>
          </Fragment>
        }
        heading511={
          <Fragment>
            <span className="cleaning-text48">
              Linen care, bedding and towel wash, dry and iron
            </span>
          </Fragment>
        }
        heading5111={
          <Fragment>
            <span className="cleaning-text49">
              Sourcing new soft furnishing
            </span>
          </Fragment>
        }
        heading51111={
          <Fragment>
            <span className="cleaning-text50">Garden and patio care</span>
          </Fragment>
        }
      ></ContentList4>
      <BookingContactForm
        text={
          <Fragment>
            <span className="cleaning-text51">
              Please let us know as much detail as possible about your place.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
          </Fragment>
        }
        action={
          <Fragment>
            <span className="cleaning-text52">Submit</span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="cleaning-text53">Contact us</span>
          </Fragment>
        }
        rootClassName="booking-contact-formroot-class-name2"
      ></BookingContactForm>
    </div>
  )
}

export default Cleaning
