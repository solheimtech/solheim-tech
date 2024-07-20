import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { RateLimiterMemory } from 'rate-limiter-flexible';

const resend = new Resend(process.env.RESEND_API_KEY);

// Create a rate limiter allowing 5 requests per day per IP address
const rateLimiter = new RateLimiterMemory({
  points: 5, // Number of points
  duration: 86400, // Per second(s)
});

export async function POST(request: Request) {
  try {
    const ip = request.headers.get('x-forwarded-for') || request.headers.get('remote-addr') || '';

    try {
      await rateLimiter.consume(ip); // Consume 1 point per request
    } catch (rateLimiterRes) {
      return NextResponse.json({ error: 'rate_limit_exceeded' }, { status: 429 });
    }

    const formData = await request.json();
    const recaptchaToken = formData['g-recaptcha-response'];

    // Verify the reCAPTCHA response
    const recaptchaResponse = await fetch(`https://www.google.com/recaptcha/api/siteverify`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${recaptchaToken}`
    });

    const recaptchaData = await recaptchaResponse.json();

    if (recaptchaData.success) {
      // Proceed with form processing
      console.log('Form Data from /api/submit-contact:', formData);

      const emailContent = `
        First Name: ${formData.firstName}
        Last Name: ${formData.lastName}
        Email: ${formData.email}
        Phone: ${formData.phone}
        Company: ${formData.company}
        Message: ${formData.message}
      `;

      const { data, error } = await resend.emails.send({
        from: process.env.EMAIL_USER || '',
        to: process.env.EMAIL_USER || '',
        subject: `Form Submission from Contact Page on ${new Date().toLocaleString()}`,
        text: emailContent,
      });

      if (error) {
        console.error('Error sending email:', error);
        return NextResponse.json({ message: 'Form submitted but failed to send email', error }, { status: 500 });
      }

      console.log('Email sent successfully');
      return NextResponse.json({ message: 'Form submitted successfully' }, { status: 200 });
    } else {
      // Handle reCAPTCHA verification failure
      console.error('reCAPTCHA verification failed:', recaptchaData['error-codes']);
      return NextResponse.json({ message: 'reCAPTCHA verification failed', errors: recaptchaData['error-codes'] }, { status: 400 });
    }
  } catch (error) {
    console.error('Unknown error:', error);
    return NextResponse.json({ message: 'Form submitted but failed to send email', error: error instanceof Error ? error.message : 'Unknown error' }, { status: 500 });
  }
}