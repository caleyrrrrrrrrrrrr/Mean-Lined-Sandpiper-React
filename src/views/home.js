import React from 'react'
import { Helmet } from 'react-helmet'

import Navbar4 from '../components/navbar4'
import HeroBookcase from '../components/hero-bookcase'
import Reviews from '../components/reviews'

import './home.css'

const Home = () => {
  return (
    <div className="home-container">
      <Helmet>
        <title>8b The Bookcase</title>
        <meta property="og:title" content="8b The Bookcase" />
      </Helmet>

      {/* Navbar */}
      <Navbar4
        link1={<span className="home-text10">8b The Bookcase</span>}
        link2={<span className="home-text11">Cleaning Services</span>}
        action1={<span className="home-text12">AirBnB</span>}
        action2={<span className="home-text15">Booking.com</span>}
        action11={<span className="home-text16">AirBnB</span>}
        action21={<span className="home-text19">Booking.com</span>}
        link1Url="/"
        link2Url="/cleaning"
        rootClassName="navbar4root-class-name"
      />

      {/* Hero Section */}
      <HeroBookcase
        heading1={<span className="home-text31">Welcome to 8b The Bookcase</span>}
        content1={
          <span className="home-text22">
            Just twelve minutes walk from the sea and the train station, The Bookcase is tucked away in a quiet part of Dawlish, Devon.
            <br /><br />
            Curl up with a book or write your novel, in this calm, cosy oasis. Find plenty of blankets, notebooks and inspiration here. Ideal for readers, wild swimmers and those looking to simply rest and recharge.
            <br /><br />
            Enquire directly for the best deals!
          </span>
        }
        action1={<span className="home-text20">AirBnB</span>}
        action11={<span className="home-text21">Booking.com</span>}
        action111={<span className="home-text32">Contact direct</span>}
        image1Src="https://a0.muscache.com/im/pictures/miso/Hosting-1461690130194485845/original/a7f1747d-c875-4568-b581-c131f6091c1e.jpeg?im_w=1200"
        image2Src="https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTQ2MTY5MDEzMDE5NDQ4NTg0NQ==/original/bb9631a5-6ab1-4b08-9af7-9b428f1da777.jpeg?im_w=720"
        image3Src="https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTQ2MTY5MDEzMDE5NDQ4NTg0NQ==/original/6d0ebb53-4b5a-4aca-883e-551d9ffa7b84.jpeg?im_w=720"
        image4Src="https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTQ2MTY5MDEzMDE5NDQ4NTg0NQ==/original/13f36d89-5ece-47f1-82b4-c01c4016a527.jpeg?im_w=1440"
        image5Src="https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTQ2MTY5MDEzMDE5NDQ4NTg0NQ==/original/ce1c387b-f050-4075-8e0d-2514c36a9be1.jpeg?im_w=720"
        image6Src="https://a0.muscache.com/im/pictures/miso/Hosting-1461690130194485845/original/7daa5187-a71a-4d99-86b2-c14ac3079803.jpeg?im_w=720"
      />

      {/* Reviews */}
      <Reviews
        heading1={<span className="home-text37">Guest Reviews</span>}
        review1={<span className="home-text33">Such a charming property, so peaceful and relaxing. Loved it and will definitely be back again. P.S. Even my husband picked up a book - first time in 35 years!</span>}
        review2={<span className="home-text34">Thank you so much for having us here, it&apos;s such and amazing space, we absolutely loved it! :)</span>}
        review3={<span className="home-text35">Your flat is a beautiful little hideaway - cosy, colourful and full of charm. We felt like we truly hit the reset button while we were here. &lt;3 Everything from the colours to the peaceful location near the beach made the perfect getaway!</span>}
        review4={<span className="home-text36">Your flat is beautiful, it suited me perfectly for a weekend visiting a friend nearby. Thanks for the cream tea and other lovely delicacies that you left me. Best wishes.</span>}
        author1Name={<span className="home-text38">Sheila &amp; Danny</span>}
        author2Name={<span className="home-text39">Dan &amp; Maisy</span>}
        author3Name={<span className="home-text40">Bheks &amp; Tatiana</span>}
        author4Name={<span className="home-text41">Wendy</span>}
      />
    </div>
    <div style={{ width: "100%", height: "400px" }}>
      <iframe
        title="8b The Bookcase Location"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2453.69517397041!2d-3.4661!3d50.5817!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x486dcba12d1e0001%3A0x123456789abcdef!2sDawlish%2C%20UK!5e0!3m2!1sen!2suk!4v1691234567890!5m2!1sen!2suk"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  )
}

export default Home
