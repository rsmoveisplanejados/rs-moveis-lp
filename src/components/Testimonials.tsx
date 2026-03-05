import React from 'react';
import { motion } from 'motion/react';

export default function Testimonials() {
    const testimonials = [
        {
            name: "Mariana Silva",
            role: "Arquiteta",
            content: "A RS Móveis é minha parceira número um. A precisão dos cortes e o acabamento final são impecáveis, superando sempre as expectativas dos meus clientes.",
            avatar: "https://i.pravatar.cc/150?u=mariana"
        },
        {
            name: "Ricardo Oliveira",
            role: "Empresário",
            content: "Fizemos todo o escritório com eles. Além da beleza, a funcionalidade dos móveis ajudou muito na organização do nosso dia a dia.",
            avatar: "https://i.pravatar.cc/150?u=ricardo"
        },
        {
            name: "Juliana Costa",
            role: "Proprietária",
            content: "Minha cozinha ficou um sonho! O atendimento foi excelente desde o primeiro contato até a montagem final, que foi muito limpa e rápida.",
            avatar: "https://i.pravatar.cc/150?u=juliana"
        }
    ];

    return (
        <section id="testimonials" className="py-24 bg-[#111111] overflow-hidden text-white">
            <div className="max-w-5xl mx-auto px-6">
                <h2 className="text-3xl md:text-4xl text-center mb-16 font-light">O que dizem nossos <span className="font-bold text-brand-accent">clientes</span></h2>

                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((t, index) => (
                        <motion.div
                            key={t.name}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.2 }}
                            viewport={{ once: true }}
                            className="p-8 rounded-2xl bg-[#1A1A1A] border border-white/5 relative"
                        >
                            <div className="text-brand-accent mb-6 text-xl">
                                {"★".repeat(5)}
                            </div>
                            <p className="text-gray-300 italic mb-8 font-light leading-relaxed">"{t.content}"</p>
                            <div className="flex items-center gap-4">
                                <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full border border-white/10" />
                                <div>
                                    <h4 className="font-medium text-sm">{t.name}</h4>
                                    <p className="text-xs text-brand-accent uppercase tracking-widest mt-1">{t.role}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
