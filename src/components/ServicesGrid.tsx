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
        <section id="ambientes" className="py-24 bg-[#0A0A0A]">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-brand-accent tracking-[0.2em] text-sm uppercase mb-2 font-medium"
                    >
                        Soluções Completas
                    </motion.p>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl md:text-5xl font-light text-white"
                    >
                        Especialistas em <span className="font-bold">Todos os Ambientes</span>
                    </motion.h2>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {environments.map((env, index) => (
                        <motion.div
                            key={env.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative overflow-hidden rounded-xl aspect-video md:aspect-[16/9] cursor-pointer"
                        >
                            <img
                                src={env.img}
                                alt={env.title}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-8 transition-opacity duration-300">
                                <h3 className="text-2xl md:text-3xl text-white font-light tracking-wide mb-2">
                                    {env.title}
                                </h3>
                                <p className="text-gray-300 font-light mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-y-4 group-hover:translate-y-0">
                                    {env.desc}
                                </p>
                                <div className="flex items-center text-brand-accent text-sm tracking-widest uppercase font-medium mt-auto opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                                    Ver Projetos <ArrowRight size={16} className="ml-2" />
                                </div>
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
