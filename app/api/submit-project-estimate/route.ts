import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// Initialize Resend with API key from environment variable
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    if (!process.env.RESEND_API_KEY) {
      console.error('RESEND_API_KEY is not defined');
      return NextResponse.json(
        { error: 'Email service not configured' },
        { status: 500 }
      );
    }

    // Send email using Resend
    const data = await resend.emails.send({
      from: 'Solheim Technologies <onboarding@resend.dev>',
      to: ['david@solheimtech.com'],
      subject: 'New Project Estimate Request',
      text: JSON.stringify(body, null, 2),
    });

    return NextResponse.json(
      { message: 'Project estimate request submitted successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error submitting project estimate:', error);
    return NextResponse.json(
      { error: 'Error submitting project estimate' },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json(
    { message: 'This endpoint only accepts POST requests' },
    { status: 405 }
  );
}
