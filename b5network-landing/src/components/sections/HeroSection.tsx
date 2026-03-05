
import { motion, useScroll, useTransform } from 'framer-motion';

export const HeroSection = () => {
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 1000], [0, 400]);
    const opacity = useTransform(scrollY, [0, 500], [1, 0]);

    return (
        <section id="inicio" className="relative h-screen w-full overflow-hidden bg-black flex items-center justify-center">
            {/* Background Deep Blur & Vignette */}
            <div className="absolute inset-0 z-10 bg-[radial-gradient(circle_at_center,transparent_0%,#000000_100%)] opacity-80 mix-blend-multiply" />

            {/* Placeholder for FPV Video */}
            <motion.div
                style={{ y: y1, opacity }}
                className="absolute inset-0 z-0 bg-[#0a0a0a] flex items-center justify-center opacity-50"
            >
                <div className="w-full h-full relative overflow-hidden">
                    {/* Adding subtle motion blur effect concept to bg */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-b5-red/20 to-b5-blue/20 mix-blend-screen scale-110 blur-xl animate-pulse" />
                    <img
                        src="/fondo1.jpg"
                        alt="Baseball5 Action"
                        className="w-full h-full object-cover opacity-40 grayscale contrast-125 md:blur-[1px]"
                    />
                </div>
            </motion.div>

            {/* Content */}
            <div className="relative z-20 w-full max-w-7xl mx-auto px-6 flex flex-col items-center justify-center text-center">
                {/* LIVE Indicator */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="flex items-center gap-3 mb-8 bg-white/5 backdrop-blur-md px-4 py-2 rounded-full border border-b5-red/30 shadow-[0_0_15px_rgba(225,0,0,0.3)]"
                >
                    <motion.div
                        animate={{ opacity: [1, 0, 1] }}
                        transition={{ repeat: Infinity, duration: 1.5 }}
                        className="w-3 h-3 rounded-full bg-b5-red shadow-[0_0_10px_#E10000]"
                    />
                    <span className="text-b5-red font-orbitron font-bold tracking-widest text-xs uppercase">B5 Network Direct</span>
                </motion.div>

                {/* Kinetic Typography */}
                <div className="overflow-hidden">
                    <motion.h1
                        initial={{ y: 100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="font-inter font-black text-6xl md:text-8xl lg:text-9xl text-white tracking-tighter uppercase leading-[0.85]"
                    >
                        El Juego,<br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/50 relative">
                            Sin Límites
                            <motion.span
                                className="absolute inset-0 text-b5-blue blur-xl mix-blend-screen -z-10"
                                animate={{ opacity: [0.5, 0.8, 0.5] }}
                                transition={{ duration: 3, repeat: Infinity }}
                            >
                                Sin Límites
                            </motion.span>
                        </span>
                    </motion.h1>
                </div>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6, duration: 1 }}
                    className="mt-8 text-white/50 font-inter text-lg md:text-xl max-w-2xl font-medium"
                >
                    Agencia de Marketing y Producción Tech Deportiva. Cobertura inmersiva multi-cámara FPV y creación de Landing Pages premium para Clubes y Negocios. Desde Football hasta Baseball5.
                </motion.p>
            </div>

            {/* Scroll indicator */}
            <motion.div
                className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-2"
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            >
                <span className="text-[10px] text-white/30 uppercase tracking-[0.3em] font-orbitron">Explore</span>
                <div className="w-px h-12 bg-gradient-to-b from-white/30 to-transparent" />
            </motion.div>
        </section>
    );
};
