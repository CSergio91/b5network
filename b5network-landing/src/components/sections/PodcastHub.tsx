import { motion } from 'framer-motion';
import { Radio, Mic2 } from 'lucide-react';
import { GlassCard } from '../ui/GlassCard';

export const PodcastHub = () => {

    return (
        <section className="relative w-full py-32 bg-black overflow-hidden perspective-1000">
            {/* Retro grid floor */}
            <div className="absolute bottom-0 left-0 w-full h-[300px] bg-[linear-gradient(transparent_0%,rgba(225,0,0,0.1)_100%)] opacity-30 pointer-events-none" style={{
                backgroundImage: `linear-gradient(to right, rgba(225,0,0,0.2) 1px, transparent 1px), linear-gradient(to top, rgba(225,0,0,0.2) 1px, transparent 1px)`,
                backgroundSize: '50px 50px',
                transform: 'rotateX(60deg) scale(2)',
                transformOrigin: 'bottom center'
            }} />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
                    <div>
                        <motion.h2
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl md:text-5xl font-black font-inter text-white uppercase tracking-tight flex items-center gap-4"
                        >
                            <Mic2 size={40} className="text-b5-red" /> B5 Sessions
                        </motion.h2>
                        <p className="text-white/50 text-lg mt-4 max-w-2xl font-medium">Escucha las voces del Baseball5 en nuestro Hub de Podcasts. Entrevistas exclusivas, análisis técnicos y debate apasionado.</p>
                    </div>
                    <button className="bg-transparent border-2 border-b5-red text-b5-red font-orbitron uppercase text-sm font-bold tracking-widest px-8 py-3 rounded-full hover:bg-b5-red hover:text-white transition-all">Ver Todos</button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Featured Podcast Card */}
                    <GlassCard className="col-span-1 md:col-span-2 lg:col-span-2 p-0 overflow-hidden group">
                        <div className="relative w-full h-80 bg-b5-black/80">
                            {/* Abstract Audio Visualizer (CSS only concept) */}
                            <div className="absolute inset-x-0 bottom-0 h-32 flex items-end justify-between px-4 opacity-20 group-hover:opacity-100 transition-opacity duration-500">
                                {Array.from({ length: 40 }).map((_, i) => (
                                    <motion.div
                                        key={i}
                                        className="w-1.5 bg-b5-red rounded-t-full"
                                        animate={{ height: [`${20 + Math.random() * 80}%`, `${10 + Math.random() * 40}%`, `${20 + Math.random() * 80}%`] }}
                                        transition={{ repeat: Infinity, duration: 0.5 + Math.random(), ease: "easeInOut" }}
                                    />
                                ))}
                            </div>

                            <img src="https://images.unsplash.com/photo-1590602847861-f357a9332bbc?q=80&w=1000&auto=format&fit=crop" className="absolute inset-0 w-full h-full object-cover mix-blend-screen grayscale opacity-40 group-hover:scale-105 transition-transform duration-700" alt="Podcast Host" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

                            <div className="absolute bottom-0 left-0 p-8 w-full">
                                <div className="flex items-center gap-3 mb-4">
                                    <span className="bg-white text-black font-orbitron text-[10px] uppercase font-black px-2 py-1 rounded">ESTRENO</span>
                                    <span className="text-white/60 font-mono text-[10px]">EP. 42 / 45 MINS</span>
                                </div>
                                <h3 className="text-3xl font-black text-white uppercase tracking-tight w-3/4">Tácticas Defensivas sin Guante</h3>
                                <button className="mt-6 w-12 h-12 bg-b5-red rounded-full flex items-center justify-center hover:scale-110 shadow-[0_0_20px_rgba(225,0,0,0.5)] transition-all">
                                    <div className="w-0 h-0 border-t-[6px] border-t-transparent border-l-[10px] border-l-white border-b-[6px] border-b-transparent ml-1" />
                                </button>
                            </div>
                        </div>
                    </GlassCard>

                    {/* Small Podcast Card 1 */}
                    <GlassCard className="p-6 border-b5-blue/20 hover:border-b5-blue transition-colors group">
                        <div className="flex justify-between items-start mb-12">
                            <div className="w-10 h-10 bg-b5-blue/20 rounded-xl flex items-center justify-center">
                                <Radio size={20} className="text-b5-blue" />
                            </div>
                            <span className="text-white/40 font-mono text-xs">EP. 41</span>
                        </div>
                        <h4 className="text-xl font-bold text-white mb-2 leading-tight">El futuro del streaming en B5</h4>
                        <p className="text-white/40 text-sm font-medium">Analizando la nueva tech stack de la network y la unidad móvil multipantalla.</p>
                        <div className="w-full h-1 bg-white/10 mt-6 rounded-full overflow-hidden">
                            <div className="w-1/3 h-full bg-b5-blue group-hover:w-1/2 transition-all duration-700" />
                        </div>
                    </GlassCard>
                </div>
            </div>
        </section>
    );
};
