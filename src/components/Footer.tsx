import React from 'react';
import { Instagram, Facebook } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="py-12 bg-[#0A0A0A] border-t border-white/5 text-white">
            <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
                <div>
                    <img src="/logofundobrancors.png" alt="RS Móveis Planejados" className="h-8 md:h-10 w-auto opacity-90 object-contain" />
                </div>
                <div className="text-xs text-gray-500 font-light">
                    © {new Date().getFullYear()} RS Móveis Planejados. Todos os direitos reservados.
                </div>
                <div className="flex gap-6">
                    <a href="#" className="text-gray-400 hover:text-brand-accent transition-colors"><Instagram size={20} /></a>
                    <a href="#" className="text-gray-400 hover:text-brand-accent transition-colors"><Facebook size={20} /></a>
                </div>
            </div>
        </footer>
    );
}
