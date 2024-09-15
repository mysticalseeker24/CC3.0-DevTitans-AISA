import { NextResponse } from 'next/server';
import twilio from 'twilio';

export async function POST(request: Request) {
  const body = await request.formData();
  const message = body.get('Body');
  
  // Process the incoming SMS message here
  console.log('Received SMS:', message);

  const twiml = new twilio.twiml.MessagingResponse();
  twiml.message('Thank you for your message. We will get back to you soon.');

  return new NextResponse(twiml.toString(), {
    headers: { 'Content-Type': 'text/xml' },
  });
}
