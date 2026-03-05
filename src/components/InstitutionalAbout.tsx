import React from 'react';
import { motion } from 'motion/react';

export default function InstitutionalAbout() {
    return (
        <section id="sobre" className="py-24 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative aspect-square md:aspect-[4/5] rounded-tl-[100px] rounded-br-[100px] overflow-hidden shadow-2xl"
                >
                    <img
                        src="/fotoprincipal02.png"
                        alt="Essência RS Móveis"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-[#C5A059]/10 mix-blend-overlay"></div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="lg:pl-8"
                >
                    <p className="text-brand-accent tracking-[0.2em] text-sm uppercase mb-4 font-medium">Nossa Essência</p>
                    <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-8 leading-tight">
                        Design que inspira <span className="font-bold">viver bem</span>
                    </h2>

                    <div className="space-y-6 text-gray-600 font-light text-lg leading-relaxed">
                        <p>
                            A RS Móveis Planejados nasceu com um propósito claro: trazer exclusividade e alto padrão para cada ambiente que projetamos. Mais do que fabricar móveis, nós criamos o cenário onde a sua vida acontece.
                        </p>
                        <p>
                            Com anos de tradição e um olhar incansável para as tendências de design de interiores, nossa equipe une tecnologia de ponta e acabamento artesanal. Cada projeto é único, pensado milimetricamente para refletir o seu estilo de vida.
                        </p>
                    </div>

                    <div className="mt-12 grid grid-cols-2 gap-8">
                        <div>
                            <h4 className="text-3xl font-light text-[#3f458f] mb-2">100%</h4>
                            <p className="text-sm text-gray-500 uppercase tracking-widest">MDF de Qualidade</p>
                        </div>
                        <div>
                            <h4 className="text-3xl font-light text-[#3f458f] mb-2">+10</h4>
                            <p className="text-sm text-gray-500 uppercase tracking-widest">Anos de Mercado</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
