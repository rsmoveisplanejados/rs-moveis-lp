import React from 'react';
import { motion } from 'motion/react';

export default function About() {
    return (
        <section id="about" className="py-20 bg-[#3f458f] text-white overflow-hidden">
            <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="space-y-6"
                >
                    <h2 className="text-4xl md:text-5xl font-light leading-tight">
                        Sobre <span className="font-bold">Nós</span>
                    </h2>

                    <div className="space-y-4 text-white/90 font-light leading-relaxed text-base">
                        <p>
                            Há 15 anos, transformamos ambientes em experiências únicas através de móveis planejados que unem sofisticação, funcionalidade e alto padrão de acabamento.
                        </p>
                        <p>
                            Somos uma empresa especializada em desenvolver projetos personalizados, pensados para refletir o estilo, as necessidades e o momento de cada cliente. Acreditamos que um ambiente bem planejado vai além da estética — ele melhora a rotina, valoriza o imóvel e traduz personalidade.
                        </p>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="relative aspect-square md:aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl"
                >
                    <img
                        src="/fotoprincipal02.png"
                        alt="Ambiente Planejado RS Móveis"
                        className="w-full h-full object-cover"
                    />
                </motion.div>
            </div>
        </section>
    );
}
