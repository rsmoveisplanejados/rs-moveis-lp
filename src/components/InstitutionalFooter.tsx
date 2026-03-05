import React from 'react';
import { Instagram, Facebook, MapPin, Phone, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function InstitutionalFooter() {
    return (
        <footer className="bg-[#050505] pt-20 pb-10 border-t border-white/10 text-gray-400 font-light">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

                {/* Brand */}
                <div>
                    <img src="/logofundobrancors.png" alt="RS Móveis Planejados" className="h-12 w-auto mb-6 opacity-90" />
                    <p className="text-sm leading-relaxed mb-6">
                        Especialistas em móveis planejados de alto padrão. Transformando espaços em ambientes únicos e funcionais.
                    </p>
                    <div className="flex gap-4">
                        <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-accent hover:text-black transition-colors">
                            <Instagram size={18} />
                        </a>
                        <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-accent hover:text-black transition-colors">
                            <Facebook size={18} />
                        </a>
                    </div>
                </div>

                {/* Links */}
                <div>
                    <h4 className="text-white text-sm font-medium tracking-widest uppercase mb-6">Navegação</h4>
                    <ul className="space-y-4 text-sm">
                        <li><a href="#" className="hover:text-brand-accent transition-colors">Início</a></li>
                        <li><a href="#sobre" className="hover:text-brand-accent transition-colors">Nossa Essência</a></li>
                        <li><a href="#ambientes" className="hover:text-brand-accent transition-colors">Ambientes</a></li>
                        <li><Link to="/lp" className="hover:text-brand-accent transition-colors text-white font-medium">Ver Promoções (LP)</Link></li>
                    </ul>
                </div>

                {/* Contact */}
                <div>
                    <h4 className="text-white text-sm font-medium tracking-widest uppercase mb-6">Contato</h4>
                    <ul className="space-y-4 text-sm">
                        <li className="flex items-start gap-3">
                            <Phone size={18} className="text-brand-accent shrink-0 mt-0.5" />
                            <span>(11) 99999-9999</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <Mail size={18} className="text-brand-accent shrink-0 mt-0.5" />
                            <span>contato@rsplanejados.com.br</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <MapPin size={18} className="text-brand-accent shrink-0 mt-0.5" />
                            <span>Av. Exemplo de Endereço, 123<br />São Paulo - SP</span>
                        </li>
                    </ul>
                </div>

                {/* Newsletter / CTA */}
                <div>
                    <h4 className="text-white text-sm font-medium tracking-widest uppercase mb-6">Comece seu Projeto</h4>
                    <p className="text-sm mb-6">Pronto para transformar seu ambiente? Fale com nossos especialistas.</p>
                    <a
                        href="https://wa.me/5511999999999"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block w-full text-center bg-transparent border border-brand-accent text-brand-accent px-6 py-3 text-sm font-medium tracking-widest uppercase hover:bg-brand-accent hover:text-black transition-all"
                    >
                        Falar no WhatsApp
                    </a>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-600">
                <p>© {new Date().getFullYear()} RS Móveis Planejados. Todos os direitos reservados.</p>
                <div className="flex gap-4">
                    <a href="#" className="hover:text-gray-400">Política de Privacidade</a>
                    <a href="#" className="hover:text-gray-400">Termos de Uso</a>
                </div>
            </div>
        </footer>
    );
}
