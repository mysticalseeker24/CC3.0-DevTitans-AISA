import { NextResponse } from 'next/server';
import twilio from 'twilio';

export async function POST() {
  const VoiceResponse = twilio.twiml.VoiceResponse;
  const twiml = new VoiceResponse();

  twiml.start().stream({
    name: 'voice-input',
    url: 'wss://your-websocket-url'
  });

  twiml.say('Please start speaking after the beep.');
  twiml.pause({ length: 1 });
  twiml.play({ loop: 1 }, 'https://api.twilio.com/cowbell.mp3');

  return new NextResponse(twiml.toString(), {
    headers: { 'Content-Type': 'text/xml' },
  });
}
