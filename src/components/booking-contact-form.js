import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './booking-contact-form.css'

const BookingContactForm = (props) => {
  return (
    <div
      className={`booking-contact-form-contact1 thq-section-padding ${props.rootClassName} `}
    >
      <div className="thq-section-max-width thq-flex-column">
        <div className="booking-contact-form-section-title thq-flex-column">
          <div id="contact" className="booking-contact-form-content">
            <h2 className="thq-heading-2">
              {props.heading1 ?? (
                <Fragment>
                  <span className="booking-contact-form-text17">
                    Contact us
                  </span>
                </Fragment>
              )}
            </h2>
            <span className="booking-contact-form-text11">
              {props.text ?? (
                <Fragment>
                  <span className="booking-contact-form-text19">
                    We will be in touch soon!
                  </span>
                </Fragment>
              )}
            </span>
          </div>
        </div>
        <form className="booking-contact-form-form thq-flex-column">
          <div className="booking-contact-form-container1">
            <div className="booking-contact-form-input1">
              <label
                htmlFor="contact-form-5-first-name"
                className="thq-body-small"
              >
                First name
              </label>
              <input
                type="text"
                id="contact-form-5-first-name"
                placeholder="First Name"
                className="thq-input"
              />
            </div>
            <div className="booking-contact-form-input2">
              <label
                htmlFor="contact-form-5-last-name"
                className="thq-body-small"
              >
                Last name
              </label>
              <input
                type="text"
                id="contact-form-5-last-name"
                placeholder="Last Name"
                className="thq-input"
              />
            </div>
          </div>
          <div className="booking-contact-form-container2">
            <div className="booking-contact-form-input3">
              <label htmlFor="contact-form-5-email" className="thq-body-small">
                Email
              </label>
              <input
                type="email"
                id="contact-form-5-email"
                required="true"
                placeholder="Email"
                className="thq-input"
              />
            </div>
            <div className="booking-contact-form-input4">
              <label htmlFor="contact-form-5-phone" className="thq-body-small">
                Phone Number
              </label>
              <input
                type="tel"
                id="contact-form-5-phone"
                placeholder="Phone Number"
                className="thq-input"
              />
            </div>
          </div>
          <div className="booking-contact-form-container3">
            <label htmlFor="contact-form-5-message" className="thq-body-small">
              Message
            </label>
            <textarea
              id="contact-form-5-message"
              rows="3"
              placeholder="Enter your message"
              className="booking-contact-form-textarea thq-input"
            ></textarea>
          </div>
          <button
            type="submit"
            className="booking-contact-form-button thq-button-filled"
          >
            <span className="thq-body-small">
              {props.action ?? (
                <Fragment>
                  <span className="booking-contact-form-text18">Submit</span>
                </Fragment>
              )}
            </span>
          </button>
        </form>
      </div>
    </div>
  )
}

BookingContactForm.defaultProps = {
  heading1: undefined,
  action: undefined,
  text: undefined,
  rootClassName: '',
}

BookingContactForm.propTypes = {
  heading1: PropTypes.element,
  action: PropTypes.element,
  text: PropTypes.element,
  rootClassName: PropTypes.string,
}

export default BookingContactForm
