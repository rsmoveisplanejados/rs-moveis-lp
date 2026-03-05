import React from 'react';
import { motion } from 'motion/react';

export default function Pricing() {
    const benefits = [
        {
            title: "PARCELAMENTO",
            description: "Em até 18x no cartão de crédito"
        },
        {
            title: "QUALIDADE",
            description: "100% em MDF * 100% sob medida"
        },
        {
            title: "CONSULTORIA GRÁTIS",
            description: "Consultoria focada em soluções em móveis sob medida"
        }
    ];

    const planImages = [
        { id: '50m', src: '/planosrsplanejadosPrancheta-1.png', alt: 'Plano 50m²' },
        { id: '70m', src: '/planosrsplanejadosPrancheta-2.png', alt: 'Plano 70m²' },
        { id: '90m', src: '/planosrsplanejadosPrancheta-3.png', alt: 'Plano 90m²' },
        { id: '120m', src: '/planosrsplanejadosPrancheta-4.png', alt: 'Plano 120m²' }
    ];

    return (
        <section id="pricing" className="py-24 bg-white">
            <div className="max-w-5xl mx-auto px-6">
                {/* Plan Cards as Pure Images */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    {planImages.map((plan, index) => (
                        <motion.div
                            key={plan.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="flex justify-center"
                        >
                            <img
                                src={plan.src}
                                alt={plan.alt}
                                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500 cursor-pointer drop-shadow-xl"
                            />
                        </motion.div>
                    ))}
                </div>

                {/* Benefits Cards */}
                <div className="grid md:grid-cols-3 gap-6">
                    {benefits.map((benefit, index) => (
                        <motion.div
                            key={benefit.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 + (index * 0.1) }}
                            viewport={{ once: true }}
                            className="bg-[#3f458f] rounded-2xl py-6 px-4 text-center border border-white/10 shadow-lg flex flex-col justify-center min-h-[120px]"
                        >
                            <h4 className="text-white text-base md:text-lg font-bold mb-2 tracking-wider">{benefit.title}</h4>
                            <p className="text-white/90 text-xs md:text-sm font-light leading-snug">{benefit.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
