import React from 'react';
import { motion } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import bgImage from '/public/fotoprincipal02.png';

export default function HomeHero() {
    return (
        <section className="relative h-[80vh] flex items-center justify-center overflow-hidden group">
            <div className="absolute inset-0 z-0">
                <motion.img
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    src={bgImage}
                    alt="Ambiente de Luxo RS Móveis"
                    className="w-full h-full object-cover transition-all duration-700"
                />
                <div className="absolute inset-0 bg-black/40 transition-all duration-700 group-hover:bg-black/60"></div>
            </div>

            <div className="relative z-10 text-center px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.2 }}
                >
                    <h1 className="text-2xl md:text-3xl lg:text-4xl text-white font-light leading-tight mb-4 uppercase">
                        MÓVEIS PLANEJADOS <br />
                        <span className="font-bold text-white">EXCLUSIVAMENTE PARA VOCÊ</span>
                    </h1>
                    <p className="text-gray-300 text-base md:text-lg font-light max-w-2xl mx-auto mb-8">
                        Há 15 anos, transformando espaços com sofisticação e praticidade.
                    </p>

                    <div className="flex justify-center">
                        <a
                            href="#ambientes"
                            className="bg-brand-accent text-white px-6 py-3 rounded-full text-sm font-bold tracking-widest uppercase hover:bg-white hover:text-[#3f458f] transition-all duration-300"
                        >
                            Nossos Projetos
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
