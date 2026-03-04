import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Camera, Radio, BarChart3, Maximize2, Zap } from 'lucide-react';
import { GlassCard } from '../ui/GlassCard';

const CAMERAS = [
    { id: 'cam1', name: 'PRINCIPAL', icon: <Camera size={14} />, status: 'LIVE', color: 'bg-b5-red' },
    { id: 'cam2', name: 'BODYCAM FP1', icon: <Zap size={14} />, status: 'LIVE', color: 'bg-b5-blue' },
    { id: 'cam3', name: 'BODYCAM FP2', icon: <Zap size={14} />, status: 'STANDBY', color: 'bg-yellow-500' },
    { id: 'cam4', name: 'CÁMARA TÁCTICA', icon: <Camera size={14} />, status: 'REC', color: 'bg-green-500' },
];

export const MulticamSimulator = () => {
    const [activeCam, setActiveCam] = useState('cam2');

    return (
        <section className="relative w-full py-32 bg-b5-black overflow-hidden perspective-1000">
            {/* Background Gradients */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-b5-blue/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="mb-16">
                    <motion.h2
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-black font-inter text-white uppercase tracking-tight"
                    >
                        Dashboard de Realización <span className="text-b5-red">Pro</span>
                    </motion.h2>
                    <p className="text-white/50 text-lg mt-4 max-w-2xl font-medium">Control total sobre la transmisión. Permite a los espectadores elegir su ángulo preferido, incluyendo cámaras corporales en tiempo real.</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

                    {/* Main Viewer */}
                    <GlassCard className="lg:col-span-8 p-1 sm:p-2 rounded-[2rem] bg-black/40 border-white/5 shadow-[0_0_50px_rgba(0,51,255,0.1)]">
                        <div className="relative w-full aspect-video bg-[#0a0a0a] rounded-3xl overflow-hidden border border-white/10 group cursor-crosshair">
                            {/* Fake Video Feed */}
                            <AnimatePresence mode="popLayout">
                                <motion.div
                                    key={activeCam}
                                    initial={{ opacity: 0, scale: 1.05 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.4 }}
                                    className="absolute inset-0"
                                >
                                    {/* Simulating static noise before "video" loads */}
                                    <div
                                        className="absolute inset-0 opacity-[0.15] mix-blend-screen"
                                        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 z-10" />
                                    {/* Placeholder image changes based on activeCam */}
                                    <img
                                        src={`https://images.unsplash.com/photo-${activeCam === 'cam1' ? '1508344928928-7165b67de128' : activeCam === 'cam2' ? '1541534741688-6078c6bfb5c5' : '1554580665-98528994589d'}?q=80&w=2000&auto=format&fit=crop`}
                                        alt="Camera Feed"
                                        className="w-full h-full object-cover grayscale contrast-125 mix-blend-luminosity"
                                    />
                                </motion.div>
                            </AnimatePresence>

                            {/* HUD / Overlay */}
                            <div className="absolute inset-0 z-20 p-6 flex flex-col justify-between pointer-events-none">
                                <div className="flex justify-between items-start w-full">
                                    <div className="flex items-center gap-3">
                                        <span className="bg-b5-red text-white text-[10px] font-black uppercase px-2 py-1 rounded-sm animate-pulse tracking-widest">EN VIVO</span>
                                        <span className="bg-black/50 backdrop-blur-md border border-white/20 text-white font-mono text-[10px] px-2 py-1 rounded-sm">
                                            {CAMERAS.find(c => c.id === activeCam)?.name}
                                        </span>
                                    </div>
                                    <div className="flex flex-col items-end gap-1">
                                        <span className="font-orbitron text-b5-blue text-sm border-b border-b5-blue/30 pb-0.5 shadow-[0_0_10px_rgba(0,51,255,0.5)]">135 KM/H</span>
                                        <span className="text-[9px] text-white/50 uppercase tracking-widest font-bold">VELOCIDAD EST.</span>
                                    </div>
                                </div>

                                <div className="flex justify-between items-end w-full">
                                    <div className="flex items-center gap-2">
                                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-bounce" />
                                        <span className="text-white/70 font-mono text-[10px]">SYNC OK - 60FPS</span>
                                    </div>
                                    <Maximize2 size={16} className="text-white/50" />
                                </div>
                            </div>
                        </div>
                    </GlassCard>

                    {/* Controls & Grid */}
                    <div className="lg:col-span-4 flex flex-col gap-4">
                        <GlassCard className="p-5 flex-1 rounded-[2rem]">
                            <div className="flex items-center gap-2 mb-4 border-b border-white/10 pb-3">
                                <Radio size={16} className="text-b5-blue" />
                                <h3 className="text-white font-orbitron text-sm font-bold tracking-widest uppercase">Multi-View Selector</h3>
                            </div>

                            <div className="grid grid-cols-2 gap-3">
                                {CAMERAS.map((cam) => (
                                    <button
                                        key={cam.id}
                                        onClick={() => setActiveCam(cam.id)}
                                        className={`relative overflow-hidden aspect-video rounded-xl border flex items-end p-2 transition-all active:scale-95 group ${activeCam === cam.id ? 'border-b5-blue bg-b5-blue/10 shadow-[0_0_20px_rgba(0,51,255,0.2)]' : 'border-white/10 bg-black/50 hover:bg-white/5'}`}
                                    >
                                        <img
                                            src={`https://images.unsplash.com/photo-${cam.id === 'cam1' ? '1508344928928-7165b67de128' : cam.id === 'cam2' ? '1541534741688-6078c6bfb5c5' : '1554580665-98528994589d'}?q=80&w=400&auto=format&fit=crop`}
                                            className="absolute inset-0 w-full h-full object-cover opacity-40 grayscale group-hover:opacity-70 transition-opacity"
                                            alt={cam.name}
                                        />
                                        <div className="relative z-10 w-full flex justify-between items-center bg-black/60 backdrop-blur-md px-1.5 py-1 rounded border border-white/5">
                                            <span className="text-[8px] font-black text-white truncate max-w-[60px] tracking-wide">{cam.name}</span>
                                            <div className={`w-1.5 h-1.5 rounded-full ${cam.color} shadow-[0_0_5px_currentColor]`} />
                                        </div>
                                    </button>
                                ))}
                            </div>
                        </GlassCard>

                        <GlassCard className="p-5 h-auto rounded-[2rem] bg-gradient-to-br from-white/5 to-b5-red/5 hover:to-b5-red/10 border-white/5 hover:border-b5-red/30 transition-all duration-500">
                            <div className="flex justify-between items-center">
                                <div>
                                    <h4 className="text-white font-bold text-sm uppercase tracking-wide flex items-center gap-2">
                                        <BarChart3 size={14} className="text-b5-red" /> Data Overlay
                                    </h4>
                                    <p className="text-white/40 text-[10px] mt-1 font-mono">INTEGRACIÓN EN TIEMPO REAL</p>
                                </div>
                                <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center bg-black/50">
                                    <span className="text-white font-bold text-[10px]">ON</span>
                                </div>
                            </div>
                        </GlassCard>
                    </div>

                </div>
            </div>
        </section>
    );
};
