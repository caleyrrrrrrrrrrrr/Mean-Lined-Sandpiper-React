
/**
 * POST /api/submit
 */
   
export async function onRequestPost(context) {
	let input = await context.request.formData();
	const turnstbody = input;
	// Turnstile injects a token in "cf-turnstile-response".
	const token = turnstbody.get('cf-turnstile-response');
	const ip = context.request.headers.get('CF-Connecting-IP');

	// Validate the token by calling the
	// "/siteverify" API endpoint.
	let formData = new FormData();
	formData.append('secret', context.env.TURNSTILE_KEY);
	formData.append('response', token);
	formData.append('remoteip', ip);
	const turnsturl = 'https://challenges.cloudflare.com/turnstile/v0/siteverify';
	const result = await fetch(turnsturl, {
		body: formData,
		method: 'POST',
	});
	const outcome = await result.json();
	if (outcome.success) {
    let pretty = JSON.stringify(input);  
				console.log(pretty); 
    let message = input.get('message')
    let name = input.get("name")
    let email = input.get("email")
    let subject = input.get("subject")
 
    const url = "https://api.brevo.com/v3/smtp/email";
    const body = {
      "sender": {
        "name": "Contact Form",
        "email": "contact@calab.co.uk"
      },
	"replyTo": {
        "name": name,
        "email": email
        },
      "to": [
        {
              "email": "contact@8bthebookcase.co.uk",
          "name": "Contact @ Reworked Canvas"
        }
      ],
      /*"htmlContent": "<!DOCTYPE html> <html> <body> <h1>Confirm you email</h1> <p>Please confirm your email address by clicking on the link below</p> </body> </html>",
      */"textContent": message,
      "subject": subject
    };
    const init = {
      body: JSON.stringify(body),
      method: "POST",
      headers: {
        "content-type": "application/json;charset=UTF-8",
        "accept": "application/json",
        "api-key": context.env.EMAIL_KEY,
      },
    };
				
    /**
     * gatherResponse awaits and returns a response body as a string.
     * Use await gatherResponse(..) in an async function to get the response body
     * @param {Response} response
     */
    async function gatherResponse(response) {
      const { headers } = response;
      const contentType = headers.get("content-type") || "";
      if (contentType.includes("application/json")) {
        return JSON.stringify(await response.json());
      } else if (contentType.includes("application/text")) {
        return response.text();
      } else if (contentType.includes("text/html")) {
        return response.text();
      } else {
        return response.text();
      }
    }

    const response = await fetch(url, init);
    const results = await gatherResponse(response);

	if ( results.includes("messageId") ){
        return Response.redirect("https://www.8bthebookcase.co.uk/response/success", 301);
    }
    else {
/** this block for debugging **/
/* for API debug - error or success code */
        return new Response(results, init); 
    }
/* for form input data 
	return new Response(pretty, {
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
    });
*/
}
else{ return  Response.redirect("https://reworkedcanvas.co.uk/contact", 301); }
}
