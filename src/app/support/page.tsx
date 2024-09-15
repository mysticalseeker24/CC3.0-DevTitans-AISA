'use client';

import { useState, useEffect, useRef } from 'react';
import { Button, CircularProgress } from '@mui/material';
import MicIcon from '@mui/icons-material/Mic';
import StopIcon from '@mui/icons-material/Stop';
import dynamic from 'next/dynamic';
import { Device } from '@twilio/voice-sdk';

const TinyMCEEditor = dynamic(() => import('@/components/TinyMCEEditor'), { ssr: false });

export default function SupportPage() {
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const [transcribedText, setTranscribedText] = useState('');
  const deviceRef = useRef<Device | null>(null);

  useEffect(() => {
    // Initialize Twilio Device
    const initTwilio = async () => {
      const response = await fetch('/api/twilio-token');
      const data = await response.json();
      deviceRef.current = new Device(data.token);
    };

    initTwilio();

    return () => {
      if (deviceRef.current) {
        deviceRef.current.destroy();
      }
    };
  }, []);

  const handleSubmit = async () => {
    setIsLoading(true);
    try {
      const response = await fetch('/api/submit-query', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query })
      });

      if (!response.ok) {
        throw new Error('Failed to submit query');
      }

      const data = await response.json();
      setResponse('Query submitted successfully. ID: ' + data.id);
    } catch (error) {
      console.error('Error submitting query:', error);
      setResponse('An error occurred while submitting your query. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const toggleRecording = async () => {
    if (!isRecording) {
      setIsRecording(true);
      try {
        const connection = await deviceRef.current?.connect({ params: { To: 'voice-input' } });
        connection?.on('transcription', (transcription) => {
          setTranscribedText((prev) => prev + ' ' + transcription.text);
        });
      } catch (error) {
        console.error('Error starting voice capture:', error);
        setIsRecording(false);
      }
    } else {
      setIsRecording(false);
      deviceRef.current?.disconnectAll();
      setQuery(transcribedText);
    }
  };

  return (
    <div className="max-w-4xl mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">Customer Support</h1>
      <p className="mb-4">Please describe your issue or question below:</p>
      <div className="mb-4">
        <Button
          variant="contained"
          color={isRecording ? "secondary" : "primary"}
          onClick={toggleRecording}
          startIcon={isRecording ? <StopIcon /> : <MicIcon />}
        >
          {isRecording ? "Stop Recording" : "Speak Your Query"}
        </Button>
      </div>
      <TinyMCEEditor
        initialValue={transcribedText}
        onChange={setQuery}
      />
      <Button
        variant="contained"
        color="primary"
        onClick={handleSubmit}
        className="mt-4"
        disabled={isLoading || !query.trim()}
      >
        {isLoading ? <CircularProgress size={24} /> : 'Submit Query'}
      </Button>
      {response && (
        <div className="mt-8 p-4 bg-gray-100 rounded-md">
          <h2 className="text-xl font-semibold mb-2">Response:</h2>
          <p>{response}</p>
        </div>
      )}
    </div>
  );
}
