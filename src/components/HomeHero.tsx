import React from 'react';
import { motion } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import bgImage from '/public/fotoprincipal02.png';

export default function HomeHero() {
    return (
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 z-0">
                <motion.img
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    src={bgImage}
                    alt="Ambiente de Luxo RS Móveis"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-[#0A0A0A]"></div>
            </div>

            <div className="relative z-10 text-center px-6 mt-16 max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.2 }}
                >
                    <p className="text-brand-accent text-sm md:text-base tracking-[0.3em] uppercase mb-4 font-medium">
                        Exclusividade e Sofisticação
                    </p>
                    <h1 className="text-4xl md:text-6xl lg:text-7xl text-white font-light leading-tight mb-6">
                        Projetando <span className="font-bold">Sonhos</span>,<br />
                        Construindo <span className="font-bold">Histórias</span>.
                    </h1>
                    <p className="text-gray-300 text-lg md:text-xl font-light max-w-2xl mx-auto mb-10">
                        Móveis planejados de alto padrão que transformam espaços em verdadeiras obras de arte, refletindo sua essência em cada detalhe.
                    </p>

                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <a
                            href="#ambientes"
                            className="bg-brand-accent text-black px-8 py-4 rounded-full font-bold tracking-widest uppercase hover:bg-white hover:text-black transition-all duration-300"
                        >
                            Nossos Projetos
                        </a>
                        <a
                            href="/lp"
                            className="border border-white/30 text-white px-8 py-4 rounded-full font-bold tracking-widest uppercase hover:bg-white/10 transition-all duration-300"
                        >
                            Ver Promoções
                        </a>
                    </div>
                </motion.div>
            </div>

            <motion.div
                className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 text-white/50 animate-bounce"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
            >
                <a href="#sobre">
                    <ChevronDown size={32} />
                </a>
            </motion.div>
        </section>
    );
}
