import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
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
      console.log('Form Data from /api/submit-form:', formData);

      const emailContent = `
        First Name: ${formData.firstName}
        Last Name: ${formData.lastName}
        Email: ${formData.email}
        Phone: ${formData.phone}
        Company: ${formData.company}
        Company Domain: ${formData.companyDomain}
        Budget: ${formData.budget}
        How did you hear about us: ${formData.question}
        Requested Services: ${formData.services}
        Message: ${formData.message}
      `;

      const { data, error } = await resend.emails.send({
        from: process.env.EMAIL_USER || '',
        to: process.env.EMAIL_USER || '',
        subject: `Form Submission from Project Estimate Page on ${new Date().toLocaleString()}`,
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
