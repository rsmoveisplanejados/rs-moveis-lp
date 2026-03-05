import React from 'react';
import Hero from '../components/Hero';
import Pricing from '../components/Pricing';
import About from '../components/About';
import Portfolio from '../components/Portfolio';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';

export default function LandingPage() {
  return (
    <div className="selection:bg-brand-accent selection:text-black">
      <main>
        <Hero />
        <Pricing />
        <About />
        <Portfolio />
        <Testimonials />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
