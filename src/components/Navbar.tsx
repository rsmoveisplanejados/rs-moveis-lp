import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Início', path: '/' },
        { name: 'Essência', path: '/#sobre' },
        { name: 'Ambientes', path: '/#ambientes' },
    ];

    return (
        <nav
            className={`fixed w-full z-50 transition-all duration-300 ${isScrolled
                ? 'bg-black/95 backdrop-blur-md py-4 shadow-xl'
                : 'bg-black/80 backdrop-blur-sm py-6'
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
                <Link to="/" className="relative z-10 flex items-center gap-3 group">
                    <img
                        src="/logofundobrancors.png"
                        alt="RS Móveis Planejados"
                        className="h-10 md:h-12 w-auto object-contain transition-transform duration-500 group-hover:scale-105"
                    />
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.path}
                            className={`text-sm font-medium tracking-widest uppercase transition-colors hover:text-brand-accent ${location.pathname === link.path && !link.path.includes('#') ? 'text-brand-accent' : 'text-white'
                                }`}
                        >
                            {link.name}
                        </a>
                    ))}
                    <a
                        href="https://wa.me/5511999999999"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="border border-brand-accent text-brand-accent px-6 py-2 rounded-full text-sm font-medium tracking-widest uppercase hover:bg-brand-accent hover:text-black transition-all"
                    >
                        Fale Conosco
                    </a>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden text-white relative z-10"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <div
                className={`fixed inset-0 bg-black/95 backdrop-blur-xl z-0 transition-opacity duration-300 md:hidden flex flex-col items-center justify-center gap-8 ${isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
                    }`}
            >
                {navLinks.map((link) => (
                    <a
                        key={link.name}
                        href={link.path}
                        className="text-2xl font-light tracking-widest uppercase text-white hover:text-brand-accent transition-colors"
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        {link.name}
                    </a>
                ))}
                <a
                    href="https://wa.me/5511999999999"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-brand-accent text-black px-8 py-3 rounded-full text-lg font-medium tracking-widest uppercase mt-4"
                    onClick={() => setIsMobileMenuOpen(false)}
                >
                    Fale Conosco
                </a>
            </div>
        </nav>
    );
}
