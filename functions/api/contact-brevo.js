export async function onRequestPost({ request, env }) {
  try {
    const formData = await request.formData();

    // Turnstile token
    const token = formData.get("cf-turnstile-response");
    const secretKey = env.TURNSTILE_SECRET_KEY;

    // Verify Turnstile
    const verifyResponse = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
      method: "POST",
      body: new URLSearchParams({
        secret: secretKey,
        response: token,
      }),
    });

    const verifyData = await verifyResponse.json();
    if (!verifyData.success) {
      return new Response(JSON.stringify({ error: "Captcha failed" }), { status: 400 });
    }

    // Extract form fields
    const firstName = formData.get("firstName");
    const lastName = formData.get("lastName");
    const email = formData.get("email");
    const phone = formData.get("phone");
    const message = formData.get("message");

    // Brevo API payload
    const mailPayload = {
      sender: { email: "contact@calab.co.uk", name: "8b The Bookcase" },
      to: [{ email: "merriel@8bthebookcase.com", name: "8b The Bookcase" }],
      replyTo: { email: `${email}` , name: `${firstName} ${lastName}` },
      subject: `New contact from ${firstName} ${lastName}`,
      textContent: `
Name: ${firstName} ${lastName}
Email: ${email}
Phone: ${phone}

Message:
${message}
      `,
    };

    // Send via Brevo
    const mailResponse = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "api-key": env.BREVO_API_KEY,
      },
      body: JSON.stringify(mailPayload),
    });

    if (!mailResponse.ok) {
      const errorText = await mailResponse.text();
      return new Response(
        JSON.stringify({ error: `Failed to send email: ${errorText}` }),
        { status: 500 }
      );
    }

    return new Response(JSON.stringify({ success: "Message sent!" }), { status: 200 });
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), { status: 500 });
  }
}
