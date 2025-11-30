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
        rootClassName="navbar4root-class-name"
      />

      {/* Hero Section */}
      <HeroBookcase
        action1={<span className="home-text20">AirBnB</span>}
        action11={<span className="home-text21">Booking.com</span>}
        action111={<span className="home-text32">Contact direct</span>}
        image1Src="https://a0.muscache.com/im/pictures/miso/Hosting-1461690130194485845/original/a7f1747d-c875-4568-b581-c131f6091c1e.jpeg?im_w=1200"
        image2Src="https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTQ2MTY5MDEzMDE5NDQ4NTg0NQ==/original/bb9631a5-6ab1-4b08-9af7-9b428f1da777.jpeg?im_w=720"
        image3Src="https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTQ2MTY5MDEzMDE5NDQ4NTg0NQ==/original/6d0ebb53-4b5a-4aca-883e-551d9ffa7b84.jpeg?im_w=720"
        image4Src="https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTQ2MTY5MDEzMDE5NDQ4NTg0NQ==/original/13f36d89-5ece-47f1-82b4-c01c4016a527.jpeg?im_w=1440"
        image5Src="https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTQ2MTY5MDEzMDE5NDQ4NTg0NQ==/original/ce1c387b-f050-4075-8e0d-2514c36a9be1.jpeg?im_w=720"
        image6Src="https://a0.muscache.com/im/pictures/miso/Hosting-1461690130194485845/original/7daa5187-a71a-4d99-86b2-c14ac3079803.jpeg?im_w=720"
        image7Src="https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTQ2MTY5MDEzMDE5NDQ4NTg0NQ==/original/430922ff-fa00-4984-ac6c-df2a220d7c45.jpeg?im_w=1440"
      />

      {/* Reviews */}
      <Reviews
      />
    </div>
  )
}

export default Home
