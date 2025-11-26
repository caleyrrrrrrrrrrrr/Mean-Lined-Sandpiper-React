import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import Navbar4 from '../components/navbar4'
import HeroDawlish from '../components/hero-dawlish'
import ContentList4 from '../components/content-list4'
import './dawlish.css'

const Dawlish = (props) => {
  return (
    <div className="Dawlish-container">
      <Helmet>
        <title>Dawlish - 8b The Bookcase</title>
        <meta property="og:title" content="Dawlish - 8b The Bookcase" />
      </Helmet>
      <Navbar4
        rootClassName="navbar4root-class-name1"
      ></Navbar4>
      <HeroDawlish
        rootClassName="hero-Dawlishroot-class-name"
      ></HeroDawlish>
      <ContentList4>
        {/* imageSrc="/e45cc3c8-1a6c-4d1b-b0f3-5e5260aced81-200w.jpg" */}
      </ContentList4>
    </div>
  )
}

export default Dawlish
