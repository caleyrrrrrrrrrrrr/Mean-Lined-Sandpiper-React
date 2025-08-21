import React, { useEffect } from 'react'
import './booking-contact-form.css'

const Form = () => {
  useEffect(() => {
    // Load Turnstile script once
    if (!document.querySelector('#cf-turnstile-script')) {
      const script = document.createElement('script')
      script.id = 'cf-turnstile-script'
      script.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js'
      script.async = true
      document.body.appendChild(script)
    }
  }, [])

  return (
    <form
      className="contact-form"
      method="POST"
      action="/api/contact"
    >
      <div className="form-field">
        <label htmlFor="firstName">First Name</label>
        <input type="text" name="firstName" id="firstName" required />
      </div>

      <div className="form-field">
        <label htmlFor="lastName">Last Name</label>
        <input type="text" name="lastName" id="lastName" required />
      </div>

      <div className="form-field">
        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" required />
      </div>

      <div className="form-field">
        <label htmlFor="phone">Phone</label>
        <input type="tel" name="phone" id="phone" />
      </div>

      <div className="form-field">
        <label htmlFor="message">Message</label>
        <textarea name="message" id="message" rows="4" required></textarea>
      </div>

      {/* Cloudflare Turnstile widget */}
      <div
        className="cf-turnstile"
        data-sitekey="0x4AAAAAABuAAVEr_amKdyWQ"
      ></div>

      <button type="submit">Submit</button>
    </form>
  )
}

export default Form
