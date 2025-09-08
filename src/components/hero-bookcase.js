import React, { Fragment } from 'react'

import Script from 'dangerous-html/react'
import PropTypes from 'prop-types'

import './hero-bookcase.css'

const HeroBookcase = (props) => {
  return (
    <div className={`hero-bookcase-header78 ${props.rootClassName} `}>
      <div className="hero-bookcase-column thq-section-max-width thq-section-padding">
        <div className="hero-bookcase-content1">
          <h1 className="hero-bookcase-text10 thq-heading-1">
            {props.heading1 ?? (
              <Fragment>
                <span className="hero-bookcase-text16">
                  Welcome to The Bookcase
                </span>
              </Fragment>
            )}
          </h1>
          <p className="hero-bookcase-text11 thq-body-large">
            {props.content1 ?? (
              <Fragment>
                <span className="hero-bookcase-text18">
                  <span>
                    Just twelve minutes walk from the sea and the train station, The Bookcase is tucked away in a quiet part of Dawlish, Devon.
                  </span>
                  <br></br>
                  <br></br>
                  <span>
                    Curl up with a book or write your novel, in this calm, cosy
                    oasis. Find plenty of blankets, notebooks and inspiration
                    here. Ideal for readers, wild swimmers and those looking to
                    simply rest and recharge.

                    A reading retreat in which to read, write, think or simply be - surrounded by books.
                    Immerse yourself in a story, or write your own, at The Bookcase. 
                  </span>
                  <br></br>
                  <br></br>
                  <span>Enquire directly for the best deals!</span>
                  <br></br>
                </span>
              </Fragment>
            )}
          </p>
        </div>
        <div className="hero-bookcase-actions">
          <a
            href="https://www.airbnb.co.uk/h/8bthebookcase"
            target="_blank"
            rel="noreferrer noopener"
            className="hero-bookcase-button1 thq-button-filled"
          >
            <span className="thq-body-small">
              {props.action1 ?? (
                <Fragment>
                  <span className="hero-bookcase-text17">AirBnB</span>
                </Fragment>
              )}
            </span>
          </a>
          <a
            href="https://www.booking.com/hotel/gb/8b-the-bookcase.en-gb.html"
            target="_blank"
            rel="noreferrer noopener"
            className="hero-bookcase-button2 thq-button-filled"
          >
            <span className="thq-body-small">
              {props.action11 ?? (
                <Fragment>
                  <span className="hero-bookcase-text27">Booking.com</span>
                </Fragment>
              )}
            </span>
          </a>
        </div>
        <a
          href="/contact"
          className="thq-button-filled hero-bookcase-button2"
        >
          <span className="thq-body-small">
            {props.action111 ?? (
              <Fragment>
                <span className="hero-bookcase-text15">Contact direct</span>
              </Fragment>
            )}
          </span>
        </a>
      </div>
      <div className="hero-bookcase-content2">
        <div className="hero-bookcase-row-container thq-mask-image-horizontal thq-animated-group-container-horizontal">
          <div className="thq-animated-group-horizontal">
            <img
              alt={props.image1Alt}
              src={props.image1Src}
              className="hero-bookcase-placeholder-image10 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image2Alt}
              src={props.image2Src}
              className="hero-bookcase-placeholder-image11 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image3Alt}
              src={props.image3Src}
              className="hero-bookcase-placeholder-image12 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image4Alt}
              src={props.image4Src}
              className="hero-bookcase-placeholder-image13 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image5Alt}
              src={props.image5Src}
              className="hero-bookcase-placeholder-image14 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image6Alt}
              src={props.image6Src}
              className="hero-bookcase-placeholder-image15 thq-img-scale thq-img-ratio-1-1"
            />
          </div>
          <div className="thq-animated-group-horizontal">
            <img
              alt={props.image1Alt}
              src={props.image1Src}
              className="hero-bookcase-placeholder-image16 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image2Alt}
              src={props.image2Src}
              className="hero-bookcase-placeholder-image17 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image3Alt}
              src={props.image3Src}
              className="hero-bookcase-placeholder-image18 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image4Alt}
              src={props.image4Src}
              className="hero-bookcase-placeholder-image19 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image5Alt}
              src={props.image5Src}
              className="hero-bookcase-placeholder-image20 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt="Hero Image"
              src="https://images.unsplash.com/photo-1534312527009-56c7016453e6?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDIxfHxhYnN0cmFjdHxlbnwwfHx8fDE3MTA4NzA5MzB8MA&amp;ixlib=rb-4.0.3&amp;w=1500"
              className="hero-bookcase-placeholder-image21 thq-img-scale thq-img-ratio-1-1"
            />
          </div>
        </div>
      </div>
      <div>
        <div className="hero-bookcase-container2">
          <Script
            html={`<style>
  @keyframes scroll-x {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(calc(-100% - 16px));
    }
  }

  @keyframes scroll-y {
    from {
      transform: translateY(0);
    }
    to {
      transform: translateY(calc(-100% - 16px));
    }
  }
</style>
`}
          ></Script>
        </div>
      </div>
    </div>
  )
}

HeroBookcase.defaultProps = {
  image2Alt: 'Hero Image',
  image1Src:
    'https://images.unsplash.com/photo-1567095761054-7a02e69e5c43?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDJ8fGFic3RyYWN0fGVufDB8fHx8MTcxMDg3MDkzMHww&ixlib=rb-4.0.3&w=1500',
  action111: undefined,
  image1Alt: 'Hero Image',
  heading1: undefined,
  image5Src:
    'https://images.unsplash.com/photo-1604076913837-52ab5629fba9?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDh8fGFic3RyYWN0fGVufDB8fHx8MTcxMDg3MDkzMHww&ixlib=rb-4.0.3&w=1500',
  image3Alt: 'Hero Image',
  action1: undefined,
  content1: undefined,
  image4Src:
    'https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDV8fGFic3RyYWN0fGVufDB8fHx8MTcxMDg3MDkzMHww&ixlib=rb-4.0.3&w=1500',
  rootClassName: '',
  action11: undefined,
  image3Src:
    'https://images.unsplash.com/photo-1574169208507-84376144848b?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDN8fGFic3RyYWN0fGVufDB8fHx8MTcxMDg3MDkzMHww&ixlib=rb-4.0.3&w=1500',
  image6Src:
    'https://images.unsplash.com/photo-1534312527009-56c7016453e6?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDIxfHxhYnN0cmFjdHxlbnwwfHx8fDE3MTA4NzA5MzB8MA&ixlib=rb-4.0.3&w=1500',
  image6Alt: 'Hero Image',
  image2Src:
    'https://images.unsplash.com/photo-1552083974-186346191183?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDE1fHxhYnN0cmFjdHxlbnwwfHx8fDE3MTA4NzA5MzB8MA&ixlib=rb-4.0.3&w=1500',
  image4Alt: 'Hero Image',
  image5Alt: 'Hero Image',
}

HeroBookcase.propTypes = {
  image2Alt: PropTypes.string,
  image1Src: PropTypes.string,
  action111: PropTypes.element,
  image1Alt: PropTypes.string,
  heading1: PropTypes.element,
  image5Src: PropTypes.string,
  image3Alt: PropTypes.string,
  action1: PropTypes.element,
  content1: PropTypes.element,
  image4Src: PropTypes.string,
  rootClassName: PropTypes.string,
  action11: PropTypes.element,
  image3Src: PropTypes.string,
  image6Src: PropTypes.string,
  image6Alt: PropTypes.string,
  image2Src: PropTypes.string,
  image4Alt: PropTypes.string,
  image5Alt: PropTypes.string,
}

export default HeroBookcase
