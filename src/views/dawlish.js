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
        action1={
          <Fragment>
            <span className="Dawlish-text20">Contact Us</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="Dawlish-text21">
              Dawlish and turnover services for holiday homes around Dawlish
            </span>
          </Fragment>
        }
        heading11={
          <Fragment>
            <span className="Dawlish-text22">
              The Bookcase Dawlish
            </span>
          </Fragment>
        }
        rootClassName="hero-Dawlishroot-class-name"
      ></HeroDawlish>
      <ContentList4
        content9={
          <Fragment>
            <span className="Dawlish-text23">
              <span>
                dawlish js
              </span>
              <br></br>
              <br></br>
              <span>
                dawlish para 2
              </span>
              <br></br>
              <br></br>
              <span>Contact me today to book</span>
              <br></br>
            </span>
          </Fragment>
        }
        heading2={
          <Fragment>
            <span className="Dawlish-text37">
              <span>Goodie packs and welcome cards</span>
              <br></br>
            </span>
          </Fragment>
        }
        heading3={
          <Fragment>
            <span className="Dawlish-text40">Replace and restock basics</span>
          </Fragment>
        }
        heading4={
          <Fragment>
            <span className="Dawlish-text41">Fresh flowers</span>
          </Fragment>
        }
        heading5={
          <Fragment>
            <span className="Dawlish-text42">House plant care</span>
          </Fragment>
        }
        heading9={
          <Fragment>
            <span className="Dawlish-text43">
              <span>Starting my holiday let,</span>
              <br></br>
            </span>
          </Fragment>
        }
        imageSrc="/e45cc3c8-1a6c-4d1b-b0f3-5e5260aced81-200w.jpg"
        heading31={
          <Fragment>
            <span className="Dawlish-text46">Services available:</span>
          </Fragment>
        }
        heading51={
          <Fragment>
            <span className="Dawlish-text47">Change over Dawlish </span>
          </Fragment>
        }
        heading511={
          <Fragment>
            <span className="Dawlish-text48">
              Linen care, bedding and towel wash, dry and iron
            </span>
          </Fragment>
        }
        heading5111={
          <Fragment>
            <span className="Dawlish-text49">
              Sourcing new soft furnishing
            </span>
          </Fragment>
        }
        heading51111={
          <Fragment>
            <span className="Dawlish-text50">Garden and patio care</span>
          </Fragment>
        }
      ></ContentList4>
    </div>
  )
}

export default Dawlish
