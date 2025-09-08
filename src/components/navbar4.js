import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './navbar4.css'

const Navbar4 = (props) => {
  return (
    <header className={`navbar4-container ${props.rootClassName} `}>
      <header data-thq="thq-navbar" className="navbar4-navbar-interactive">
        <img
          alt={props.imageAlt3}
          src={props.imageSrc3}
          className="navbar4-image1"
        />
        <div data-thq="thq-navbar-nav" className="navbar4-desktop-menu">
          <nav className="navbar4-links1">
            <Link to="/" className="navbar4-link11 thq-body-small thq-link">
              {props.link1 ?? (
                <Fragment>
                  <span className="navbar4-text15">8b The Bookcase</span>
                </Fragment>
              )}
            </Link>
            <Link
              to="/cleaning"
              className="navbar4-link21 thq-body-small thq-link"
            >
              {props.link2 ?? (
                <Fragment>
                  <span className="navbar4-text23">Cleaning Service</span>
                </Fragment>
              )}
            </Link>
            <Link
              to="/contact"
              className="navbar4-link21 thq-body-small thq-link"
            >
              {props.link2 ?? (
                <Fragment>
                  <span className="navbar4-text23">Contact</span>
                </Fragment>
              )}
            </Link>
          </nav>
          <div className="navbar4-buttons1">
            <a
              href="https://www.airbnb.co.uk/h/8bthebookcase"
              target="_blank"
              rel="noreferrer noopener"
              className="navbar4-action11 thq-button-filled thq-button-animated"
            >
              <span>
                {props.action1 ?? (
                  <Fragment>
                    <span className="navbar4-text19">
                      <span>AirBnB</span>
                      <br></br>
                    </span>
                  </Fragment>
                )}
              </span>
            </a>
            <a
              href="https://www.booking.com/hotel/gb/8b-the-bookcase.en-gb.html"
              target="_blank"
              rel="noreferrer noopener"
              className="navbar4-action21 thq-button-outline thq-button-animated"
            >
              <span>
                {props.action2 ?? (
                  <Fragment>
                    <span className="navbar4-text22">Booking.com</span>
                  </Fragment>
                )}
              </span>
            </a>
          </div>
        </div>
        <div data-thq="thq-burger-menu" className="navbar4-burger-menu">
          <svg viewBox="0 0 1024 1024" className="navbar4-icon1">
            <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
          </svg>
        </div>
        <div data-thq="thq-mobile-menu" className="navbar4-mobile-menu">
          <div className="navbar4-nav">
            <div className="navbar4-top">
              <img
                alt={props.imageAlt1}
                src={props.imageSrc1}
                className="navbar4-image2"
              />
              <div data-thq="thq-close-menu" className="navbar4-close-menu">
                <svg viewBox="0 0 1024 1024" className="navbar4-icon3">
                  <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                </svg>
              </div>
            </div>
            <nav className="navbar4-links2">
              <Link to="/" className="navbar4-link12 thq-body-small thq-link">
                {props.link1 ?? (
                  <Fragment>
                    <span className="navbar4-text15">8b The Bookcase</span>
                  </Fragment>
                )}
              </Link>
              <Link
                to="/cleaning"
                className="navbar4-link22 thq-body-small thq-link"
              >
                {props.link2 ?? (
                  <Fragment>
                    <span className="navbar4-text23">Cleaning Service</span>
                  </Fragment>
                )}
              </Link>
              <Link
                to="/contact"
                className="navbar4-link21 thq-body-small thq-link"
              >
                {props.link2 ?? (
                  <Fragment>
                    <span className="navbar4-text23">Contact</span>
                  </Fragment>
                )}
              </Link>
            </nav>
            <div className="navbar4-buttons2">
              <a
                href="https://www.airbnb.co.uk/h/8bthebookcase"
                target="_blank"
                rel="noreferrer noopener"
                className="navbar4-action12 thq-button-filled thq-button-animated"
              >
                <span>
                  {props.action11 ?? (
                    <Fragment>
                      <span className="navbar4-text16">
                        <span>AirBnB</span>
                        <br></br>
                      </span>
                    </Fragment>
                  )}
                </span>
              </a>
              <a
                href="https://www.booking.com/hotel/gb/8b-the-bookcase.en-gb.html"
                target="_blank"
                rel="noreferrer noopener"
                className="navbar4-action22 thq-button-outline thq-button-animated"
              >
                <span>
                  {props.action21 ?? (
                    <Fragment>
                      <span className="navbar4-text14">Booking.com</span>
                    </Fragment>
                  )}
                </span>
              </a>
            </div>
          </div>
        </div>
      </header>
    </header>
  )
}

Navbar4.defaultProps = {
  imageAlt1: 'image',
  action21: undefined,
  rootClassName: '',
  imageSrc3: '/a6e7ea1d-5fd1-445d-b899-19d12239dc45-200h.jpg',
  link1: undefined,
  imageSrc1: '/a6e7ea1d-5fd1-445d-b899-19d12239dc45-200h.jpg',
  action11: undefined,
  imageAlt3: 'image',
  action1: undefined,
  action2: undefined,
  link2: undefined,
}

Navbar4.propTypes = {
  imageAlt1: PropTypes.string,
  action21: PropTypes.element,
  rootClassName: PropTypes.string,
  imageSrc3: PropTypes.string,
  link1: PropTypes.element,
  imageSrc1: PropTypes.string,
  action11: PropTypes.element,
  imageAlt3: PropTypes.string,
  action1: PropTypes.element,
  action2: PropTypes.element,
  link2: PropTypes.element,
}

export default Navbar4
