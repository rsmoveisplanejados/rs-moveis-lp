import React, { useState } from 'react';
import { motion } from 'motion/react';
import { User, Mail, Phone as PhoneIcon, Maximize2, DollarSign, MessageSquare, ChevronRight } from 'lucide-react';
import { useCRM } from '../context/CRMContext';
import bgImage from '/public/fotoprincipal02.png';

export default function Hero() {
    const [formStatus, setFormStatus] = useState<'idle' | 'success'>('idle');
    const [phone, setPhone] = useState('');
    const { addLead } = useCRM();

    const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        let value = e.target.value.replace(/\D/g, '');
        if (value.length > 11) value = value.slice(0, 11);

        if (value.length > 2) {
            value = `(${value.slice(0, 2)}) ${value.slice(2)}`;
        }
        if (value.length > 9) {
            value = `${value.slice(0, 9)}-${value.slice(9)}`;
        }

        setPhone(value);
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.currentTarget;
        const formData = new FormData(form);

        const rawPhone = phone.replace(/\D/g, '');
        if (rawPhone.length < 11) {
            alert('Por favor, insira um número de telefone válido com 11 dígitos (DDD + número).');
            return;
        }

        try {
            await addLead({
                name: formData.get('name') as string,
                email: formData.get('email') as string,
                phone: formData.get('phone') as string,
                store: formData.get('store') as string,
                investment: formData.get('investment') as string,
                environments: formData.get('environments') as string,
            });

            setFormStatus('success');
            form.reset();

            setTimeout(() => {
                setFormStatus('idle');
            }, 5000);
        } catch (error: any) {
            console.error('Falha ao enviar lead:', error);
            const errorMsg = error?.message || error?.details || 'Erro desconhecido';
            alert(`Houve um erro ao enviar seu orçamento: ${errorMsg}. Por favor, tente novamente ou entre em contato pelo WhatsApp.`);
        }
    };

    return (
        <section id="home" className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden bg-gray-50">
            <div className="absolute inset-0 z-0">
                <img
                    src={bgImage}
                    alt="Interior de luxo"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/60"></div>
            </div>

            <div className="max-w-5xl mx-auto px-6 relative z-10 w-full grid lg:grid-cols-2 gap-8 lg:gap-12 items-center py-8">
                <div className="relative lg:pr-8">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-white py-6 relative z-10"
                    >
                        <div className="mb-6">
                            <img src="/logofundobrancors.png" alt="RS Móveis Planejados" className="h-10 md:h-14 lg:h-16 w-auto object-contain" />
                        </div>

                        <h1 className="mb-4 text-white flex flex-col gap-1">
                            <span className="text-2xl md:text-3xl lg:text-4xl font-light tracking-wide uppercase">
                                Referência em
                            </span>
                            <span className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight text-brand-accent">
                                MÓVEIS PLANEJADOS
                            </span>
                        </h1>
                        <p className="text-[11px] md:text-xs text-white/90 max-w-sm leading-[1.8] font-light tracking-widest uppercase">
                            Há mais de 10 anos sendo<br />referência em móveis planejados<br />de alto padrão.
                        </p>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="bg-white/90 backdrop-blur-md p-6 md:p-8 rounded-2xl border border-white/20 shadow-2xl max-w-[400px] w-full mx-auto lg:ml-0 relative z-20 my-[-30px] lg:my-[-60px]"
                >
                    <div className="text-center mb-6">
                        <h3 className="text-2xl text-gray-900 font-medium mb-1">
                            Solicite seu <span className="text-[#3f458f] font-bold">Orçamento</span>
                        </h3>
                        <p className="text-gray-500 text-xs">Visualize seu projeto em <span className="font-bold text-gray-800">24H</span></p>
                    </div>

                    {formStatus === 'success' && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="mb-6 p-4 rounded-lg bg-green-50 border border-green-200 text-green-700 text-sm text-center"
                        >
                            Orçamento enviado com sucesso! Entraremos em contato em breve.
                        </motion.div>
                    )}

                    <form className="space-y-4" onSubmit={handleSubmit}>
                        <div className="space-y-1">
                            <label className="text-xs text-gray-600 font-medium ml-1">Nome</label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                                    <User size={16} />
                                </div>
                                <input
                                    type="text"
                                    name="name"
                                    className="w-full pl-9 pr-3 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 focus:outline-none focus:border-[#3f458f] focus:ring-1 focus:ring-[#3f458f] transition-colors placeholder-gray-400 text-sm"
                                    placeholder="Seu nome completo"
                                    required
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-1">
                                <label className="text-xs text-gray-600 font-medium ml-1">E-mail</label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                                        <Mail size={16} />
                                    </div>
                                    <input
                                        type="email"
                                        name="email"
                                        className="w-full pl-9 pr-3 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 focus:outline-none focus:border-[#3f458f] focus:ring-1 focus:ring-[#3f458f] transition-colors placeholder-gray-400 text-sm"
                                        placeholder="seu@email.com"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="space-y-1">
                                <label className="text-xs text-gray-600 font-medium ml-1">Telefone</label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                                        <PhoneIcon size={16} />
                                    </div>
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={phone}
                                        onChange={handlePhoneChange}
                                        className="w-full pl-9 pr-3 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 focus:outline-none focus:border-[#3f458f] focus:ring-1 focus:ring-[#3f458f] transition-colors placeholder-gray-400 text-sm"
                                        placeholder="(11) 99999-9999"
                                        required
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-1">
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                                        <Maximize2 size={16} />
                                    </div>
                                    <select name="store" className="w-full pl-9 pr-3 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-gray-700 focus:outline-none focus:border-[#3f458f] focus:ring-1 focus:ring-[#3f458f] transition-colors appearance-none text-sm" required>
                                        <option value="">Metragem</option>
                                        <option value="38-42m2">38m2 a 42m2</option>
                                        <option value="45-50m2">45m2 a 50m2</option>
                                        <option value="55-65m2">55m2 a 65m2</option>
                                        <option value="70-85m2">70m2 a 85m2</option>
                                    </select>
                                    <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none text-gray-400">
                                        <ChevronRight size={14} className="rotate-90" />
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-1">
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                                        <DollarSign size={16} />
                                    </div>
                                    <select name="investment" className="w-full pl-9 pr-3 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-gray-700 focus:outline-none focus:border-[#3f458f] focus:ring-1 focus:ring-[#3f458f] transition-colors appearance-none text-sm" required>
                                        <option value="">Investimento</option>
                                        <option value="12-18k">R$ 12.000 a R$ 18.000</option>
                                        <option value="18-28k">R$ 18.000 a R$ 28.000</option>
                                        <option value="28-45k">R$ 28.000 a R$ 45.000</option>
                                        <option value="45-75k">R$ 45.000 a R$ 75.000</option>
                                    </select>
                                    <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none text-gray-400">
                                        <ChevronRight size={14} className="rotate-90" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-1">
                            <label className="text-xs text-gray-600 font-medium ml-1">Quais ambientes deseja orçamento?</label>
                            <div className="relative">
                                <div className="absolute top-2.5 left-0 pl-3 flex items-start pointer-events-none text-gray-400">
                                    <MessageSquare size={16} />
                                </div>
                                <textarea
                                    name="environments"
                                    rows={2}
                                    className="w-full pl-9 pr-3 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 focus:outline-none focus:border-[#3f458f] focus:ring-1 focus:ring-[#3f458f] transition-colors placeholder-gray-400 resize-none text-sm"
                                    placeholder="Ex: Cozinha, Sala, Dormitório..."
                                    required
                                ></textarea>
                            </div>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-[#3f458f] text-white font-bold py-3.5 rounded-lg hover:bg-[#003031] transition-colors mt-2 tracking-wider text-sm shadow-md"
                        >
                            ENVIAR SOLICITAÇÃO
                        </button>
                    </form>
                </motion.div>
            </div>
        </section>
    );
}
