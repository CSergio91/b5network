import { Instagram, Youtube, PlaySquare, ArrowUpRight } from 'lucide-react';
import { openContactModal } from './ContactModal';

const SOCIAL_LINKS = [
    { name: 'Instagram', icon: <Instagram size={20} />, href: 'https://instagram.com/b5network' },
    { name: 'YouTube', icon: <Youtube size={20} />, href: '#' },
    { name: 'TikTok', icon: <PlaySquare size={20} />, href: '#' },
];

const LEGAL_LINKS = [
    { name: 'Términos de Servicio', href: '#' },
    { name: 'Política de Privacidad', href: '#' },
    { name: 'Uso de Cookies', href: '#' },
    { name: 'Información Legal', href: '#' },
];

export const Footer = () => {
    return (
        <footer className="relative w-full bg-black border-t border-white/10 pt-24 pb-12 overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1000px] h-[1px] bg-gradient-to-r from-transparent via-b5-red/50 to-transparent shadow-[0_0_15px_#E10000]" />
            <div className="absolute bottom-0 left-0 w-full h-[300px] bg-gradient-to-t from-b5-blue/5 to-transparent pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-20">

                    {/* Brand Col */}
                    <div className="lg:col-span-1">
                        <div className="flex items-center gap-3 mb-6">
                            <img
                                src="/logo.png"
                                alt="B5 Network Logo"
                                className="w-10 h-10 object-contain drop-shadow-[0_0_8px_rgba(225,0,0,0.5)]"
                                onError={(e) => {
                                    (e.target as HTMLImageElement).style.display = 'none';
                                }}
                            />
                            <span className="text-white font-orbitron font-black text-xl tracking-tighter uppercase">
                                B5 <span className="text-b5-red">Network</span>
                            </span>
                        </div>
                        <p className="text-white/40 text-sm font-medium leading-relaxed mb-4">
                            Agencia de Marketing Deportivo y Producción Audiovisual. Elevando la presencia digital de Clubes, Negocios y Eventos Deportivos.
                        </p>
                        <button onClick={openContactModal} className="inline-block text-b5-red font-mono text-sm hover:text-white transition-colors duration-300">
                            info@b5network.com
                        </button>
                    </div>

                    {/* Socials Col */}
                    <div className="lg:col-span-1">
                        <h4 className="text-white font-mono text-xs font-bold uppercase tracking-widest mb-6 border-b border-white/10 pb-2">Social Hub</h4>
                        <ul className="flex flex-col gap-4">
                            {SOCIAL_LINKS.map((social) => (
                                <li key={social.name}>
                                    <a href={social.href} className="text-white/60 hover:text-b5-red transition-colors flex items-center gap-3 group text-sm font-medium">
                                        <span className="p-2 bg-white/5 rounded-lg group-hover:bg-b5-red/10 transition-colors">
                                            {social.icon}
                                        </span>
                                        {social.name}
                                        <ArrowUpRight size={14} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-b5-red" />
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Legal Col */}
                    <div className="lg:col-span-1">
                        <h4 className="text-white font-mono text-xs font-bold uppercase tracking-widest mb-6 border-b border-white/10 pb-2">Legal & Docs</h4>
                        <ul className="flex flex-col gap-3">
                            {LEGAL_LINKS.map((link) => (
                                <li key={link.name}>
                                    <a href={link.href} className="text-white/50 hover:text-white transition-colors text-sm font-medium">
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Col */}
                    <div className="lg:col-span-1 border border-white/5 bg-white/5 backdrop-blur-md rounded-2xl p-6 relative overflow-hidden group">
                        {/* Neon glow effect on hover */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-b5-red/0 to-b5-blue/0 group-hover:from-b5-red/10 group-hover:to-b5-blue/10 transition-all duration-700 pointer-events-none" />

                        <h4 className="text-white font-orbitron text-sm font-bold uppercase tracking-widest mb-2 relative z-10">Contacto Directo</h4>
                        <p className="text-white/40 text-xs mb-6 relative z-10">Cotiza tu Landing Page o servicio de Cobertura Audiovisual. Estamos listos para elevar tu marca.</p>

                        <div className="relative z-10 flex flex-col gap-3">
                            <button
                                onClick={openContactModal}
                                className="w-full bg-b5-red hover:bg-red-700 text-white font-orbitron text-xs font-bold uppercase tracking-widest px-4 py-3 rounded-lg shadow-[0_0_15px_rgba(225,0,0,0.4)] transition-all text-center block"
                            >
                                Hablemos de tu Proyecto
                            </button>
                        </div>
                    </div>

                </div>

                {/* Bottom Bar */}
                <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-white/30 text-xs font-mono uppercase tracking-widest font-bold">
                        © {new Date().getFullYear()} B5 Network. High-Tech Sports Broadcasting.
                    </p>
                    <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse shadow-[0_0_10px_#22c55e]" />
                        <span className="text-white/40 text-[10px] font-mono">ALL SYSTEMS OPERATIONAL</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};
