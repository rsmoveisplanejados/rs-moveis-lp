import React from 'react';
import Navbar from '../components/Navbar';
import HomeHero from '../components/HomeHero';
import InstitutionalAbout from '../components/InstitutionalAbout';
import ServicesGrid from '../components/ServicesGrid';
import InstitutionalFooter from '../components/InstitutionalFooter';
import WhatsAppButton from '../components/WhatsAppButton';

export default function HomePage() {
    return (
        <div className="selection:bg-brand-accent selection:text-black min-h-screen bg-brand-bg">
            <Navbar />
            <main>
                <HomeHero />
                <ServicesGrid />
                <InstitutionalAbout />
            </main>
            <InstitutionalFooter />
            <WhatsAppButton />
        </div>
    );
}
