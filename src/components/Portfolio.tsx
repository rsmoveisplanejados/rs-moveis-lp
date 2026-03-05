import React from 'react';
import { motion } from 'motion/react';

export default function Portfolio() {
    const environments = [
        { title: "Closets", img: "/fotoprincipal02.png" },
        { title: "Cozinhas", img: "/fotoprincipal02.png" },
        { title: "Dormitórios", img: "/fotoprincipal02.png" },
        { title: "Salas", img: "/fotoprincipal02.png" },
        { title: "Home Office", img: "/fotoprincipal02.png" },
        { title: "Corporativo", img: "/fotoprincipal02.png" }
    ];

    return (
        <section id="portfolio" className="py-24 bg-gray-50">
            <div className="max-w-5xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-light text-gray-900">
                        Nossos <span className="font-bold">Ambientes</span>
                    </h2>
                    <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
                        Projetos exclusivos desenvolvidos para cada espaço do seu dia a dia, unindo design e funcionalidade.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {environments.map((env, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="group relative overflow-hidden rounded-2xl aspect-[4/3] bg-white shadow-lg cursor-pointer"
                        >
                            <img
                                src={env.img}
                                alt={env.title}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6">
                                <h4 className="text-white text-xl font-bold uppercase tracking-wider">{env.title}</h4>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
