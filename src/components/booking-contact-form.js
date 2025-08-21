import React, { Fragment, useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import './booking-contact-form.css'

const BookingContactForm = (props) => {
  const [submitting, setSubmitting] = useState(false)
  const [success, setSuccess] = useState('')
  const [error, setError] = useState('')

  useEffect(() => {
    // Load Turnstile script once
    const script = document.createElement('script')
    script.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js'
    script.async = true
    script.defer = true
    document.body.appendChild(script)
    return () => {
      document.body.removeChild(script)
    }
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSubmitting(true)
    setError('')
    setSuccess('')

    const form = e.target
    const formData = new FormData(form)

    // Add Turnstile token
    if (window.turnstile) {
      formData.append('cf-turnstile-response', window.turnstile.getResponse())
    }

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        body: formData,
      })

      if (res.ok) {
        setSuccess('Your message has been sent!')
        form.reset()
        if (window.turnstile) window.turnstile.reset()
      } else {
        const text = await res.text()
        setError(text || 'Submission failed')
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
                name="firstName"
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
                name="lastName"
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
                name="email"
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
                name="phone"
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
              name="message"
              rows="3"
              placeholder="Enter your message"
              className="booking-contact-form-textarea thq-input"
              required
            ></textarea>
          </div>

          {/* Turnstile */}
          <div
            className="cf-turnstile"
            data-sitekey="0x4AAAAAABuAAVEr_amKdyWQ"
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
