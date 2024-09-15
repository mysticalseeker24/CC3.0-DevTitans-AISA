'use client';

import Image from 'next/image';
import { Button } from '@mui/material';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import SpeedIcon from '@mui/icons-material/Speed';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="text-center py-20 bg-gradient-to-r from-blue-500 to-purple-600 text-white">
        <h1 className="text-5xl font-bold mb-4">AI-Powered Customer Support</h1>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Revolutionize your customer service with our AI-driven support platform. Fast, efficient, and always available.
        </p>
        <Button
          variant="contained"
          size="large"
          startIcon={<AutoAwesomeIcon />}
          className="bg-white text-blue-600 hover:bg-blue-50"
        >
          Get Started
        </Button>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Our AI Support?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<SpeedIcon className="text-5xl text-blue-500" />}
              title="Lightning Fast"
              description="Instant responses to customer queries, 24/7."
            />
            <FeatureCard
              icon={<AutoAwesomeIcon className="text-5xl text-purple-500" />}
              title="AI-Powered Insights"
              description="Intelligent analysis of customer needs and trends."
            />
            <FeatureCard
              icon={<SupportAgentIcon className="text-5xl text-green-500" />}
              title="Human-like Interaction"
              description="Natural language processing for seamless communication."
            />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Clients Say</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <TestimonialCard
              quote="This AI support has transformed our customer service. It's like having a support team that never sleeps!"
              author="Jane Doe, CEO of TechCorp"
            />
            <TestimonialCard
              quote="The insights we've gained from the AI analysis have been invaluable. Highly recommended!"
              author="John Smith, CTO of InnovateCo"
            />
          </div>
        </div>
      </section>

      {/* Client Logos Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Trusted by Industry Leaders</h2>
          <div className="flex justify-center items-center flex-wrap gap-8">
            {['logo1.png', 'logo2.png', 'logo3.png', 'logo4.png'].map((logo, index) => (
              <Image key={index} src={`/images/${logo}`} alt="Client Logo" width={120} height={60} className="opacity-50 hover:opacity-100 transition-opacity" />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md text-center">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

function TestimonialCard({ quote, author }: { quote: string; author: string }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <p className="text-gray-600 italic mb-4">&ldquo;{quote}&rdquo;</p>
      <p className="font-semibold">{author}</p>
    </div>
  );
}
