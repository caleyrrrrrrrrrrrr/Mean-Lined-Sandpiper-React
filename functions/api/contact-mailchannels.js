export async function onRequestPost({ request, env }) {
  try {
    const formData = await request.formData()

    // Turnstile token
    const token = formData.get("cf-turnstile-response")
    const secretKey = env.TURNSTILE_SECRET_KEY

    // Verify Turnstile
    const verifyResponse = await fetch(
      "https://challenges.cloudflare.com/turnstile/v0/siteverify",
      {
        method: "POST",
        body: new URLSearchParams({
          secret: secretKey,
          response: token,
        }),
      }
    )
    const verifyData = await verifyResponse.json()
    if (!verifyData.success) {
      return new Response("CAPTCHA verification failed", { status: 400 })
    }

    // Extract form fields
    const firstName = formData.get("firstName")
    const lastName = formData.get("lastName")
    const email = formData.get("email")
    const phone = formData.get("phone")
    const message = formData.get("message")

    // MailChannels Email API payload
    const mailPayload = {
      personalizations: [
        {
          to: [{ email: "rcaley1@protonmail.com" }], // your recipient
        },
      ],
      from: { email: "contact@8bthebookcase.co.uk" }, // verified sender
      reply_to: { email }, // user's email
      subject: `New contact from ${firstName} ${lastName}`,
      content: [
        {
          type: "text/plain",
          value: `
Name: ${firstName} ${lastName}
Email: ${email}
Phone: ${phone}

Message:
${message}`,
        },
      ],
    }

    // Send via new MailChannels Email API
    const mailResponse = await fetch("https://api.mailchannels.net/tx/v1/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept":"application/json",
        "X-Api-Key" : `${env.MAILCHANNELS_API_KEY}`, // API key stored as Worker secret
      },
      body: JSON.stringify(mailPayload),
    })

    if (!mailResponse.ok) {
      const text = await mailResponse.text()
      return new Response(
        `Failed to send email: ${text || mailResponse.statusText}`,
        { status: 500 }
      )
    }

    return new Response("Message sent!", { status: 200 })
  } catch (err) {
    return new Response(`Error: ${err.message}`, { status: 500 })
  }
}
