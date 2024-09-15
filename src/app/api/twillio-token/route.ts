import { NextResponse } from 'next/server';
import twilio from 'twilio';

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const applicationSid = process.env.TWILIO_TWIML_APP_SID;

export async function GET() {
  const client = twilio(accountSid, authToken);
  
  const token = new twilio.jwt.AccessToken(accountSid!, authToken!, {
    ttl: 3600,
    identity: 'user'
  });

  const voice = new twilio.jwt.AccessToken.VoiceGrant({
    outgoingApplicationSid: applicationSid,
    incomingAllow: true,
  });

  token.addGrant(voice);

  return NextResponse.json({ token: token.toJwt() });
}
