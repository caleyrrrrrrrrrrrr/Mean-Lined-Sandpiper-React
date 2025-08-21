import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import Navbar4 from '../components/navbar4'
import HeroBookcase from '../components/hero-bookcase'
import Reviews from '../components/reviews'
import BookingContactForm from '../components/booking-contact-form'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Mean Lined Sandpiper</title>
        <meta property="og:title" content="Mean Lined Sandpiper" />
      </Helmet>
      <Navbar4
        link1={
          <Fragment>
            <span className="home-text10">8b The Bookcase</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="home-text11">Cleaning Services</span>
          </Fragment>
        }
        action1={
          <Fragment>
            <span className="home-text12">
              <span>AirBnB</span>
              <br></br>
            </span>
          </Fragment>
        }
        action2={
          <Fragment>
            <span className="home-text15">Booking.com</span>
          </Fragment>
        }
        action11={
          <Fragment>
            <span className="home-text16">
              <span>AirBnB</span>
              <br></br>
            </span>
          </Fragment>
        }
        action21={
          <Fragment>
            <span className="home-text19">Booking.com</span>
          </Fragment>
        }
        link1Url="/"
        link2Url="/cleaning"
        rootClassName="navbar4root-class-name"
      ></Navbar4>
      <HeroBookcase
        action1={
          <Fragment>
            <span className="home-text20">AirBnB</span>
          </Fragment>
        }
        action11={
          <Fragment>
            <span className="home-text21">Booking.com</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text22">
              <span>A cosy flat in the seaside town of Dawlish</span>
              <br></br>
              <br></br>
              <span>
                Curl up with a book or write your novel, in this calm, cosy
                oasis. Find plenty of blankets, notebooks and inspiration here.
                Ideal for readers, wild swimmers and those looking to simply
                rest and recharge.
              </span>
              <br></br>
              <br></br>
              <span>Enquire directly for the best deals!</span>
              <br></br>
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text31">Welcome to 8b The Bookcase</span>
          </Fragment>
        }
        action111={
          <Fragment>
            <span className="home-text32">Contact direct</span>
          </Fragment>
        }
        image1Src="https://a0.muscache.com/im/pictures/miso/Hosting-1461690130194485845/original/a7f1747d-c875-4568-b581-c131f6091c1e.jpeg?im_w=1200"
        image2Src="https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTQ2MTY5MDEzMDE5NDQ4NTg0NQ==/original/bb9631a5-6ab1-4b08-9af7-9b428f1da777.jpeg?im_w=720"
        image3Src="https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTQ2MTY5MDEzMDE5NDQ4NTg0NQ==/original/6d0ebb53-4b5a-4aca-883e-551d9ffa7b84.jpeg?im_w=720"
        image4Src="https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTQ2MTY5MDEzMDE5NDQ4NTg0NQ==/original/13f36d89-5ece-47f1-82b4-c01c4016a527.jpeg?im_w=1440"
        image5Src="https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTQ2MTY5MDEzMDE5NDQ4NTg0NQ==/original/ce1c387b-f050-4075-8e0d-2514c36a9be1.jpeg?im_w=720"
        image6Src="https://a0.muscache.com/im/pictures/miso/Hosting-1461690130194485845/original/7daa5187-a71a-4d99-86b2-c14ac3079803.jpeg?im_w=720"
      ></HeroBookcase>
      <Reviews
        review1={
          <Fragment>
            <span className="home-text33">
              Such a charming property, so peaceful and relaxing. Loved it and
              will definitely be back again. P.S. Even my husband picked up a
              book - first time in 35 years!
            </span>
          </Fragment>
        }
        review2={
          <Fragment>
            <span className="home-text34">
              Thank you so much for having us here, it&apos;s such and amazing
              space, we absolutely loved it! :)
            </span>
          </Fragment>
        }
        review3={
          <Fragment>
            <span className="home-text35">
              Your flat is a beautiful little hideaway - cosy, colourful and
              full of charm. We felt like we truly hit the reset button while we
              were here. &lt;3 Everything from the colours to the peaceful
              location near the beach made the perfect getaway!
            </span>
          </Fragment>
        }
        review4={
          <Fragment>
            <span className="home-text36">
              Your flat is beautiful, it suited me perfectly for a weekend
              visiting a friend nearby. Thanks for the cream tea and other
              lovely delicacies that you left me. Best wishes.
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text37">Guest Reviews</span>
          </Fragment>
        }
        author1Name={
          <Fragment>
            <span className="home-text38">Sheila &amp; Danny</span>
          </Fragment>
        }
        author2Name={
          <Fragment>
            <span className="home-text39">Dan &amp; Maisy</span>
          </Fragment>
        }
        author3Name={
          <Fragment>
            <span className="home-text40">Bheks &amp; Tatiana</span>
          </Fragment>
        }
        author4Name={
          <Fragment>
            <span className="home-text41">Wendy</span>
          </Fragment>
        }
      ></Reviews>
      <BookingContactForm
        text={
          <Fragment>
            <span className="home-text42">We will be in touch soon!</span>
          </Fragment>
        }
        action={
          <Fragment>
            <span className="home-text43">Submit</span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text44">Contact us</span>
          </Fragment>
        }
        rootClassName="booking-contact-formroot-class-name"
      ></BookingContactForm>
    </div>
  )
}

export default Home
