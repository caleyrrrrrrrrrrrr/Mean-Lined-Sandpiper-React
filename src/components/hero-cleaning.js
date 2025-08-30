import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './hero-cleaning.css'

const HeroCleaning = (props) => {
  return (
    <div
      className={`hero-cleaning-container1 thq-section-padding ${props.rootClassName} `}
    >
      <img
        alt={props.image1Alt}
        src="https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTQ2MTY5MDEzMDE5NDQ4NTg0NQ==/original/9bc2fe58-1540-4503-b52b-e5beddd3d0f8.jpeg?im_w=1440"
        loading="lazy"
        className="hero-cleaning-image thq-img-ratio-16-9"
      />
      <div className="hero-cleaning-max-width thq-section-max-width">
        <div className="hero-cleaning-container2">
          <h1 className="hero-cleaning-text1 thq-heading-1">
            {props.heading11 ?? (
              <Fragment>
                <span className="hero-cleaning-text4">
                  The Bookcase Cleaning Services
                </span>
              </Fragment>
            )}
          </h1>
          <h3 className="hero-cleaning-text2 thq-heading-3">
            {props.content1 ?? (
              <Fragment>
                <span className="hero-cleaning-text6">
                  Cleaning and turnover services for holiday homes
                </span>
              </Fragment>
            )}
          </h3>
        </div>
          <a href="/contact" className="thq-button-filled">
            {props.action1 ?? (
              <Fragment>
                <span className="hero-cleaning-text5">Contact Us</span>
              </Fragment>
            )}
          </a>
      </div>
    </div>
  )
}

HeroCleaning.defaultProps = {
  image1Alt: 'The Bookcase in Dawlish',
  heading11: undefined,
  action1: undefined,
  content1: undefined,
  rootClassName: '',
}

HeroCleaning.propTypes = {
  image1Alt: PropTypes.string,
  heading11: PropTypes.element,
  action1: PropTypes.element,
  content1: PropTypes.element,
  rootClassName: PropTypes.string,
}

export default HeroCleaning
