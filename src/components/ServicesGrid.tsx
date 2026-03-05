import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function ServicesGrid() {
    const environments = [
        { title: "Closets", img: "/fotoprincipal02.png" },
        { title: "Cozinhas", img: "/planosrsplanejadosPrancheta-1.png" },
        { title: "Salas", img: "/planosrsplanejadosPrancheta-3.png" },
        { title: "Dormitórios", img: "/planosrsplanejadosPrancheta-2.png" },
        { title: "Corporativo", img: "/planosrsplanejadosPrancheta-4.png" },
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

                <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 md:gap-5 lg:gap-6">
                    {environments.map((env, index) => (
                        <motion.div
                            key={env.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative overflow-hidden aspect-[2/3] cursor-pointer"
                        >
                            <img
                                src={env.img}
                                alt={env.title}
                                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100 group-hover:blur-sm"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#101010]/95 via-black/20 to-transparent flex flex-col justify-end items-center p-6 text-center transition-all duration-500 group-hover:bg-black/40">
                                <h3 className="text-xl md:text-2xl text-white font-medium tracking-[0.15em] md:tracking-[0.2em] transform transition-transform duration-500 group-hover:-translate-y-16">
                                    {env.title}
                                </h3>

                                <div className="absolute bottom-8 opacity-0 translate-y-8 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                                    <span className="inline-block border border-white/40 text-white/90 px-8 py-3 text-xs md:text-sm font-light tracking-[0.15em] hover:bg-white hover:text-black hover:border-white transition-all duration-300">
                                        VER AMBIENTES
                                    </span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>


            </div>
        </section>
    );
}
