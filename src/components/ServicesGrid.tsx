import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function ServicesGrid() {
    const environments = [
        { title: "Cozinhas", desc: "O coração da casa com design funcional.", img: "/planosrsplanejadosPrancheta-1.png" },
        { title: "Dormitórios", desc: "Refúgios de conforto e intimidade.", img: "/planosrsplanejadosPrancheta-2.png" },
        { title: "Salas", desc: "Elegância para receber com estilo.", img: "/planosrsplanejadosPrancheta-3.png" },
        { title: "Home Office", desc: "Produtividade com sofisticação.", img: "/planosrsplanejadosPrancheta-4.png" },
    ];

    return (
        <section id="ambientes" className="py-16 bg-[#1a1a1a]">
            <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
                <div className="text-left mb-12">
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-gray-400 tracking-[0.3em] text-xs uppercase mb-3 font-medium"
                    >
                        Conheça
                    </motion.p>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-2xl md:text-3xl font-light text-white tracking-widest uppercase mb-4"
                    >
                        Nossos Ambientes
                    </motion.h2>
                    <div className="h-0.5 w-16 bg-brand-accent"></div>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
                    {environments.map((env, index) => (
                        <motion.div
                            key={env.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative overflow-hidden rounded-sm aspect-[3/4] md:aspect-[2/3] cursor-pointer"
                        >
                            <img
                                src={env.img}
                                alt={env.title}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent flex flex-col justify-end p-6 transition-all duration-300">
                                <h3 className="text-lg md:text-xl text-white font-medium tracking-[0.2em] uppercase text-center mb-2 transform transition-transform duration-500 group-hover:-translate-y-2">
                                    {env.title}
                                </h3>
                                <div className="h-0.5 w-12 bg-brand-accent mx-auto scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center"></div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <a href="/lp" className="inline-flex items-center gap-2 text-white border-b border-brand-accent pb-1 hover:text-brand-accent transition-colors font-light tracking-wide">
                        Deseja mobiliar o apartamento completo? Conheça nossos planos especiais <ArrowRight size={16} />
                    </a>
                </div>
            </div>
        </section>
    );
}
