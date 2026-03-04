import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

const NAV_LINKS = [
    { label: 'Inicio', href: '#' },
    { label: 'Cobertura', href: '#' },
    { label: 'El Gear', href: '#' },
    { label: 'B5 Sessions', href: '#' },
];

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 w-full z-50 transition-all duration-300 bg-black/50 backdrop-blur-xl border-b border-white/5">
            <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

                {/* Logo Integration */}
                <div className="flex items-center gap-3">
                    {/* 
              Usamos mix-blend-screen para "eliminar" el fondo negro del logo proporcionado. 
              Asegúrate de colocar tu imagen como 'logo.jpg' o 'logo.png' en la carpeta /public/
            */}
                    <div className="w-12 h-12 rounded-lg overflow-hidden flex items-center justify-center">
                        <img
                            src="/logo.png"
                            alt="B5 Network Logo"
                            className="w-full h-full object-contain drop-shadow-[0_0_15px_rgba(225,0,0,0.3)]"
                            onError={(e) => {
                                // Fallback in case logo path is incorrect
                                (e.target as HTMLImageElement).src = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0OCIgaGVpZ2h0PSI0OCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNlMTAwMDAiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb29rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCI+PHBvbHlnb24gcG9pbnRzPSIxMyAyIDMgMTQgMTIgMTQgMTEgMjIgMjEgMTAgMTIgMTAgMTMgMiI+PC9wb2x5Z29uPjwvc3ZnPg==';
                            }}
                        />
                    </div>
                    <span className="text-white font-orbitron font-black text-xl tracking-tighter uppercase hidden sm:block">
                        B5 <span className="text-b5-red">Network</span>
                    </span>
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8">
                    <ul className="flex items-center gap-8">
                        {NAV_LINKS.map((link) => (
                            <li key={link.label}>
                                <a
                                    href={link.href}
                                    className="text-white/60 hover:text-white font-mono text-xs uppercase tracking-widest transition-colors relative group"
                                >
                                    {link.label}
                                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-b5-red group-hover:w-full transition-all duration-300" />
                                </a>
                            </li>
                        ))}
                    </ul>

                    <button className="bg-b5-red hover:bg-red-700 text-white font-orbitron text-xs font-bold uppercase tracking-widest px-6 py-2.5 rounded shadow-[0_0_15px_rgba(225,0,0,0.4)] transition-all active:scale-95">
                        Acceso Red
                    </button>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden text-white/80 hover:text-white"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>

            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="md:hidden absolute top-20 left-0 w-full bg-black/95 backdrop-blur-3xl border-b border-white/10 p-6 flex flex-col gap-6"
                >
                    <ul className="flex flex-col gap-4">
                        {NAV_LINKS.map((link) => (
                            <li key={link.label}>
                                <a
                                    href={link.href}
                                    className="text-white/80 hover:text-b5-red font-mono text-sm uppercase tracking-widest transition-colors block py-2 border-b border-white/5"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                    <button className="bg-b5-red text-white w-full font-orbitron text-sm font-bold uppercase tracking-widest px-6 py-3 rounded shadow-[0_0_15px_rgba(225,0,0,0.4)]">
                        Acceso Red
                    </button>
                </motion.div>
            )}
        </nav>
    );
};
