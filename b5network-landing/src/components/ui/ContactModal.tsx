import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Mail, MessageCircle, Send, Check } from 'lucide-react';

export const openContactModal = () => {
    window.dispatchEvent(new Event('open-contact-modal'));
};

export const ContactModal = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [copied, setCopied] = useState(false);

    useEffect(() => {
        const handleOpen = () => setIsOpen(true);
        window.addEventListener('open-contact-modal', handleOpen);
        return () => window.removeEventListener('open-contact-modal', handleOpen);
    }, []);

    const copyEmail = () => {
        navigator.clipboard.writeText('info@b5network.com');
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const handleFormSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Here you would normally handle the form submission via an API route or service like Formspree
        alert("Formulario enviado. Nos pondremos en contacto pronto.");
        setIsOpen(false);
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setIsOpen(false)}
                        className="fixed inset-0 bg-black/80 backdrop-blur-md z-[100]"
                    />

                    {/* Modal Content */}
                    <div className="fixed inset-0 z-[101] flex items-center justify-center p-4 pointer-events-none">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            className="bg-[#0a0a0a] border border-white/10 rounded-2xl w-full max-w-2xl overflow-hidden shadow-[0_0_50px_rgba(225,0,0,0.15)] pointer-events-auto flex flex-col md:flex-row relative"
                        >
                            {/* Close Button */}
                            <button
                                onClick={() => setIsOpen(false)}
                                className="absolute top-4 right-4 text-white/50 hover:text-white transition-colors z-10 p-2 bg-black/50 rounded-full"
                            >
                                <X size={20} />
                            </button>

                            {/* Form Section */}
                            <div className="flex-1 p-8 md:p-10 border-r border-white/5 relative overflow-hidden">
                                {/* Decorational neon glow */}
                                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-b5-red to-b5-blue" />

                                <h3 className="text-2xl font-black font-orbitron text-white uppercase tracking-tighter mb-2">
                                    Iniciar <span className="text-b5-red">Proyecto</span>
                                </h3>
                                <p className="text-white/50 text-sm mb-8">
                                    Déjanos tus datos y nos comunicaremos contigo de inmediato.
                                </p>

                                <form onSubmit={handleFormSubmit} className="flex flex-col gap-4">
                                    <div>
                                        <input
                                            type="text"
                                            placeholder="Tu Nombre o Empresa"
                                            required
                                            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-b5-red transition-colors"
                                        />
                                    </div>
                                    <div>
                                        <input
                                            type="email"
                                            placeholder="Tu Correo Electrónico"
                                            required
                                            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-b5-red transition-colors"
                                        />
                                    </div>
                                    <div>
                                        <textarea
                                            placeholder="¿En qué podemos ayudarte?"
                                            required
                                            rows={3}
                                            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-b5-red transition-colors resize-none"
                                        />
                                    </div>
                                    <button
                                        type="submit"
                                        className="mt-2 w-full bg-b5-red hover:bg-red-700 text-white font-orbitron text-sm font-bold uppercase tracking-widest py-4 rounded-lg shadow-[0_0_15px_rgba(225,0,0,0.4)] transition-all flex items-center justify-center gap-2 group"
                                    >
                                        Enviar Mensaje
                                        <Send size={16} className="group-hover:translate-x-1 transition-transform" />
                                    </button>
                                </form>
                            </div>

                            {/* Quick Options Section */}
                            <div className="w-full md:w-[280px] bg-black/50 p-8 md:p-10 flex flex-col justify-center">
                                <h4 className="text-white font-mono text-xs font-bold uppercase tracking-widest mb-6 border-b border-white/10 pb-2">
                                    Opciones Directas
                                </h4>

                                <div className="flex flex-col gap-3">
                                    <button
                                        onClick={copyEmail}
                                        className="w-full bg-white/5 hover:bg-white/10 border border-white/10 text-white/80 hover:text-white px-4 py-3 rounded-lg text-sm transition-all flex items-center gap-3 text-left"
                                    >
                                        {copied ? <Check size={18} className="text-green-500" /> : <Mail size={18} className="text-b5-blue" />}
                                        <span className="font-medium">{copied ? '¡Copiado!' : 'Copiar Correo'}</span>
                                    </button>

                                    <a
                                        href="https://wa.me/1234567890" // Reemplazar con el número real de Whatsapp
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-full bg-[#25D366]/10 hover:bg-[#25D366]/20 border border-[#25D366]/30 text-white px-4 py-3 rounded-lg text-sm transition-all flex items-center gap-3"
                                    >
                                        <MessageCircle size={18} className="text-[#25D366]" />
                                        <span className="font-medium">WhatsApp</span>
                                    </a>

                                    <a
                                        href="https://t.me/b5network" // Reemplazar con el usuario de Telegram real
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-full bg-[#0088cc]/10 hover:bg-[#0088cc]/20 border border-[#0088cc]/30 text-white px-4 py-3 rounded-lg text-sm transition-all flex items-center gap-3"
                                    >
                                        <Send size={18} className="text-[#0088cc]" />
                                        <span className="font-medium">Telegram</span>
                                    </a>
                                </div>

                                <p className="text-white/30 text-xs mt-8 text-center">
                                    Respondemos en menos de 24 horas laborables.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </>
            )}
        </AnimatePresence>
    );
};
