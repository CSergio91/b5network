
import { motion, useScroll, useTransform } from 'framer-motion';

export const TechStackGear = () => {
    const { scrollYProgress } = useScroll();
    const scale = useTransform(scrollYProgress, [0.4, 0.6], [0.8, 1]);
    const y = useTransform(scrollYProgress, [0.4, 0.6], [100, 0]);

    return (
        <section className="relative w-full min-h-screen py-32 bg-black overflow-hidden flex items-center justify-center">
            {/* Grid Pattern Background */}
            <div
                className="absolute inset-0 opacity-10 pointer-events-none"
                style={{
                    backgroundImage: 'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)',
                    backgroundSize: '40px 40px'
                }}
            />
            <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
                <div className="text-center mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-6xl font-black font-inter text-white uppercase tracking-tight"
                    >
                        The Tech <span className="text-b5-red">Stack</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="mt-6 text-xl text-white/50 max-w-3xl mx-auto font-medium"
                    >
                        Hardware de nivel broadcast. Desde la <span className="text-white font-bold">Panasonic HC-UX3</span> estabilizada hasta BodyCams 360° para la experiencia inmersiva FPV.
                    </motion.p>
                </div>

                <motion.div
                    style={{ scale, y }}
                    className="relative w-full aspect-[21/9] bg-gradient-to-tr from-b5-black via-[#0a0a0a] to-b5-red/10 rounded-[3rem] border border-white/10 shadow-[0_0_100px_rgba(225,0,0,0.1)] overflow-hidden flex items-center justify-center"
                >
                    {/* Holographic scanning effect */}
                    <motion.div
                        className="absolute left-0 w-full h-1 bg-b5-red/50 shadow-[0_0_20px_#E10000] z-20"
                        animate={{ top: ['0%', '100%', '0%'] }}
                        transition={{ duration: 4, ease: "linear", repeat: Infinity }}
                    />
                    {/* Placeholder for High-End Camera Imagery */}
                    <img
                        src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=2000&auto=format&fit=crop"
                        alt="Professional Camera Gear"
                        className="w-full h-full object-cover grayscale mix-blend-screen opacity-60"
                    />

                    {/* Faux Hotspots / Data nodes */}
                    <div className="absolute top-1/4 left-1/3 flex flex-col items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-b5-red animate-ping" />
                        <div className="w-2 h-2 rounded-full bg-b5-red absolute" />
                        <span className="bg-black/80 backdrop-blur-md text-b5-red text-[10px] font-mono px-2 py-1 rounded border border-b5-red/30 uppercase tracking-widest mt-4">Panasonic HC-UX3</span>
                    </div>

                    <div className="absolute bottom-1/3 right-1/4 flex flex-col items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-b5-blue animate-ping" />
                        <div className="w-2 h-2 rounded-full bg-b5-blue absolute" />
                        <span className="bg-black/80 backdrop-blur-md text-b5-blue text-[10px] font-mono px-2 py-1 rounded border border-b5-blue/30 uppercase tracking-widest mt-4">FPV BodyCam</span>
                    </div>

                    {/* Tech data lines overlay */}
                    <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20">
                        <path d="M0,100 Q400,300 1000,50 T1000,100" fill="none" stroke="white" strokeWidth="1" strokeDasharray="5,5" />
                    </svg>
                </motion.div>
            </div>
        </section>
    );
};
