import { motion } from 'framer-motion';
import { GlassCard } from '../ui/GlassCard';

const NODES = [
    { top: '30%', left: '20%', label: 'LAX', color: 'bg-b5-red' },
    { top: '40%', left: '25%', label: 'MEX', color: 'bg-b5-blue' },
    { top: '45%', left: '35%', label: 'CCS', color: 'bg-white', active: true },
    { top: '35%', left: '50%', label: 'MAD', color: 'bg-b5-blue' },
    { top: '55%', left: '75%', label: 'TKY', color: 'bg-b5-red' },
    { top: '65%', left: '85%', label: 'SYD', color: 'bg-white' },
];

export const GlobalMap = () => {
    return (
        <section className="relative w-full py-40 bg-b5-black overflow-hidden">
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-b5-red/10 rounded-full blur-[150px] pointer-events-none mix-blend-screen" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="flex flex-col items-center text-center mb-20">
                    <motion.h2
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-black font-inter text-white uppercase tracking-tight flex items-center justify-center gap-4"
                    >
                        B5 Global <span className="text-b5-red">Network</span>
                    </motion.h2>
                    <p className="text-white/50 text-lg mt-4 max-w-2xl font-medium">Nodos de retransmisión y centros de datos en vivo. Latencia ultra-baja sin importar dónde ruede la pelota.</p>
                </div>

                <GlassCard className="w-full aspect-video rounded-[3rem] p-0 overflow-hidden relative border-white/5 bg-gradient-to-b from-white/5 to-transparent">
                    {/* Holographic Map Background */}
                    <div className="absolute inset-0 opacity-20" style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='800' height='400' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M100,50 Q150,20 200,60 T350,100 T500,40 T650,80' fill='none' stroke='%230033FF' stroke-width='2' stroke-dasharray='4,4'/%3E%3C/svg%3E")`,
                        backgroundSize: '100% 100%'
                    }} />

                    {/* Simplified Map Paths (Vectors) */}
                    <svg className="w-full h-full absolute inset-0 opacity-30" viewBox="0 0 1000 500">
                        {NODES.filter(n => n.active).map((start, i) =>
                            NODES.filter(n => !n.active).map((end, j) => (
                                <motion.path
                                    key={`path-${i}-${j}`}
                                    d={`M ${(parseFloat(start.left) * 10)} ${(parseFloat(start.top) * 5)} Q ${(parseFloat(start.left) * 10 + parseFloat(end.left) * 10) / 2} ${Math.min(parseFloat(start.top) * 5, parseFloat(end.top) * 5) - 100} ${(parseFloat(end.left) * 10)} ${(parseFloat(end.top) * 5)}`}
                                    fill="none"
                                    stroke="url(#gradientLine)"
                                    strokeWidth="1"
                                    initial={{ pathLength: 0, strokeDashoffset: 100 }}
                                    whileInView={{ pathLength: 1 }}
                                    transition={{ duration: 2, ease: "easeInOut", delay: Math.random() }}
                                    viewport={{ once: true }}
                                />
                            ))
                        )}
                        <defs>
                            <linearGradient id="gradientLine">
                                <stop offset="0%" stopColor="#E10000" stopOpacity="0.8" />
                                <stop offset="100%" stopColor="#0033FF" stopOpacity="0.1" />
                            </linearGradient>
                        </defs>
                    </svg>

                    {/* Nodes */}
                    {NODES.map((node, index) => (
                        <div
                            key={index}
                            className="absolute flex flex-col items-center justify-center transform -translate-x-1/2 -translate-y-1/2"
                            style={{ top: node.top, left: node.left }}
                        >
                            <motion.div
                                initial={{ scale: 0, opacity: 0 }}
                                whileInView={{ scale: 1, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2 }}
                                className={`w-4 h-4 rounded-full ${node.color} flex items-center justify-center z-10 ${node.active ? 'shadow-[0_0_30px_#E10000]' : 'shadow-[0_0_15px_currentColor]'}`}
                            >
                                {node.active && <div className="absolute w-20 h-20 bg-b5-red/20 rounded-full animate-ping" />}
                                <div className="w-1.5 h-1.5 bg-white rounded-full" />
                            </motion.div>
                            <span className="mt-2 text-[10px] font-orbitron font-bold text-white/80 bg-black/60 backdrop-blur-md px-2 py-0.5 rounded border border-white/10 uppercase">{node.label}</span>
                        </div>
                    ))}

                    {/* Live Data Feed Overlay */}
                    <div className="absolute bottom-6 left-6 flex flex-col gap-2">
                        <div className="flex items-center gap-2 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-lg border border-b5-red/30 w-fit">
                            <span className="w-2 h-2 bg-b5-red rounded-full animate-pulse" />
                            <span className="text-white font-mono text-xs">CCS_MAIN_UPLINK</span>
                        </div>
                        <div className="flex items-center gap-2 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10 w-fit opacity-50">
                            <span className="w-2 h-2 bg-b5-blue rounded-full" />
                            <span className="text-white font-mono text-xs">MAD_EDGE_RELAY</span>
                        </div>
                    </div>
                </GlassCard>
            </div>
        </section>
    );
};
