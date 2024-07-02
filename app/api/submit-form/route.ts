'use server';

import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const formData = await request.json();
  const recaptchaToken = formData['g-recaptcha-response'];

  // Verify the reCAPTCHA token
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
    console.log('Form Data:', formData);

    return NextResponse.json({ message: 'Form submitted successfully' }, { status: 200 });
  } else {
    // Handle specific 'browser-error' case
    if (recaptchaData['error-codes'] && recaptchaData['error-codes'].includes('browser-error')) {
      console.error('reCAPTCHA verification failed due to browser error:', recaptchaData['error-codes']);
      return NextResponse.json({ message: 'reCAPTCHA verification failed due to browser error', errors: recaptchaData['error-codes'] }, { status: 400 });
    }

    // Handle other error cases
    console.error('reCAPTCHA verification failed:', recaptchaData['error-codes']);
    return NextResponse.json({ message: 'reCAPTCHA verification failed', errors: recaptchaData['error-codes'] }, { status: 400 });
  }
}
