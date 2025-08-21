export async function onRequestPost({ request, env }) {
  const formData = await request.formData()

  // Turnstile token
  const token = formData.get("cf-turnstile-response")
  const secretKey = env.TURNSTILE_SECRET_KEY

  // Verify Turnstile
  const verifyResponse = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
    method: "POST",
    body: new URLSearchParams({
      secret: secretKey,
      response: token,
    }),
  })
  const verifyData = await verifyResponse.json()

  if (!verifyData.success) {
    return new Response("Captcha failed", { status: 400 })
  }

  // Extract form fields
  const firstName = formData.get("firstName")
  const lastName = formData.get("lastName")
  const email = formData.get("email")
  const phone = formData.get("phone")
  const message = formData.get("message")

  // MailChannels payload
  const mailPayload = {
    personalizations: [{ to: [{ email: "YOUR_RECEIVING_EMAIL@example.com" }] }],
    from: { email: "no-reply@YOURDOMAIN.com" },
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

  const mailResponse = await fetch("https://api.mailchannels.net/tx/v1/send", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(mailPayload),
  })

  if (!mailResponse.ok) {
    return new Response("Failed to send email", { status: 500 })
  }

  return new Response("Message sent!", { status: 200 })
}
