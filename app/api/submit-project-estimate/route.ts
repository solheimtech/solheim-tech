import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { google } from 'googleapis';

export async function POST(request: Request) {
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

    // Create OAuth2 client
    const oauth2Client = new google.auth.OAuth2(
      process.env.CLIENT_ID,
      process.env.CLIENT_SECRET,
      process.env.REDIRECT_URI // This is the redirect URI you've set in Google Cloud Console
    );

    oauth2Client.setCredentials({
      refresh_token: process.env.REFRESH_TOKEN
    });

    // Create Nodemailer transporter using OAuth2
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        type: 'OAuth2',
        user: process.env.EMAIL_USER,
        clientId: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET,
        refreshToken: process.env.REFRESH_TOKEN,
        accessToken: (await oauth2Client.getAccessToken()).token
      },
    } as nodemailer.TransportOptions);

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: `Form Submission from Project Estimate Page on ${new Date().toLocaleString()}`,
      text: `You have received a new lead from the website. Here are the details:\n\n` +
            `First Name: ${formData.firstName}\n` +
            `Last Name: ${formData.lastName}\n` +
            `Email: ${formData.email}\n` +
            `Phone: ${formData.phone}\n` +
            `Company: ${formData.company}\n` +
            `Company Domain: ${formData.companyDomain}\n` +
            `Budget: ${formData.budget}\n` +
            `How did you hear about us: ${formData.question}\n` +
            `Requested Services: ${formData.services}\n` +
            `Message: ${formData.message}\n\n` +
            `Please follow up with this lead as soon as possible.`,
    };

    try {
      await transporter.sendMail(mailOptions);
      console.log('Email sent successfully');
    } catch (error) {
      if (error instanceof Error) {
        console.error('Error sending email:', error);
        return NextResponse.json({ message: 'Form submitted but failed to send email', error: error.message }, { status: 500 });
      } else {
        console.error('Unknown error sending email:', error);
        return NextResponse.json({ message: 'Form submitted but failed to send email', error: 'Unknown error' }, { status: 500 });
      }
    }

    return NextResponse.json({ message: 'Form submitted successfully' }, { status: 200 });
  } else {
    // Handle reCAPTCHA verification failure
    console.error('reCAPTCHA verification failed:', recaptchaData['error-codes']);
    return NextResponse.json({ message: 'reCAPTCHA verification failed', errors: recaptchaData['error-codes'] }, { status: 400 });
  }
}
