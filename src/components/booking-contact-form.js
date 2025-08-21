import React, { Fragment, useState } from 'react'
import PropTypes from 'prop-types'
import './booking-contact-form.css'

const BookingContactForm = (props) => {
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSubmitting(true)
    setError('')
    setSuccess('')

    const token = window.turnstile?.getResponse()
    if (!token) {
      setError('Please complete the CAPTCHA')
      setSubmitting(false)
      return
    }

    const formData = {
      firstName: e.target['contact-form-5-first-name'].value,
      lastName: e.target['contact-form-5-last-name'].value,
      email: e.target['contact-form-5-email'].value,
      phone: e.target['contact-form-5-phone'].value,
      message: e.target['contact-form-5-message'].value,
      turnstileToken: token
    }

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })
      if (res.ok) {
        setSuccess('Your message has been sent!')
        e.target.reset()
        window.turnstile.reset()
      } else {
        const data = await res.json()
        setError(data.error || 'Submission failed')
      }
    } catch (err) {
      setError('Submission failed')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div
      className={`booking-contact-form-contact1 thq-section-padding ${props.rootClassName}`}
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

        <form
          className="booking-contact-form-form thq-flex-column"
          onSubmit={handleSubmit}
        >
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
                required
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
                required
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
                placeholder="Email"
                className="thq-input"
                required
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
              required
            ></textarea>
          </div>

          {/* Cloudflare Turnstile */}
          <div
            className="cf-turnstile"
            data-sitekey="YOUR_TURNSTILE_SITE_KEY"
            data-theme="light"
          ></div>

          {error && <p style={{ color: 'red' }}>{error}</p>}
          {success && <p style={{ color: 'green' }}>{success}</p>}

          <button
            type="submit"
            className="booking-contact-form-button thq-button-filled"
            disabled={submitting}
          >
            <span className="thq-body-small">
              {props.action ?? (
                <Fragment>
                  <span className="booking-contact-form-text18">
                    {submitting ? 'Sending...' : 'Submit'}
                  </span>
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
