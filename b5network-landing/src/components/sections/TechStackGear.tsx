import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export const TechStackGear = () => {
    const sectionRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    });

    // Parallax effect for the background video (moves slower than scroll)
    const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

    // Entry effect for the central card
    const scale = useTransform(scrollYProgress, [0.3, 0.6], [0.8, 1]);
    const yContent = useTransform(scrollYProgress, [0.3, 0.6], [100, 0]);

    return (
        <section ref={sectionRef} id="gear" className="relative w-full min-h-screen py-32 bg-black overflow-hidden flex items-center justify-center border-t border-white/5">

            {/* Parallax Video Background Container */}
            <motion.div
                style={{ y: yBg }}
                className="absolute inset-0 w-full h-[130%] -top-[15%] z-0 pointer-events-none"
            >
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover opacity-40 mix-blend-screen"
                >
                    <source src="https://cbpirchavephlgzxkbbb.supabase.co/storage/v1/object/public/videos/Camera_components_floating_apart_delpmaspu_.mp4" type="video/mp4" />
                </video>

                {/* Gradients to blend video smoothly into the section edges */}
                <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-black/80" />
            </motion.div>

            {/* Grid Pattern Background Overlay */}
            <div
                className="absolute inset-0 opacity-[0.03] pointer-events-none z-10 mix-blend-screen"
                style={{
                    backgroundImage: 'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)',
                    backgroundSize: '40px 40px'
                }}
            />

            <div className="max-w-7xl mx-auto px-6 relative z-20 w-full">
                <div className="text-center mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-6xl font-black font-inter text-white uppercase tracking-tight drop-shadow-2xl"
                    >
                        Equipamiento <span className="text-b5-red">Tech</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="mt-6 text-xl text-white/70 max-w-3xl mx-auto font-medium drop-shadow-md"
                    >
                        Hardware de nivel broadcast. Desde cámaras estabilizadas para seguimiento dinámico hasta BodyCams 360° para la experiencia inmersiva FPV.
                    </motion.p>
                </div>

                <motion.div
                    style={{ scale, y: yContent }}
                    className="relative w-full aspect-[21/9] min-h-[400px] bg-gradient-to-tr from-b5-black/80 via-[#0a0a0a]/80 to-b5-red/10 rounded-[3rem] border border-white/10 shadow-[0_0_100px_rgba(225,0,0,0.15)] overflow-hidden flex items-center justify-center backdrop-blur-sm group"
                >
                    {/* Holographic scanning effect */}
                    <motion.div
                        className="absolute left-0 w-full h-1 bg-b5-red/50 shadow-[0_0_20px_#E10000] z-20"
                        animate={{ top: ['0%', '100%', '0%'] }}
                        transition={{ duration: 4, ease: "linear", repeat: Infinity }}
                    />

                    {/* Replaced placeholder with an abstract digital effect over the video background */}
                    <div className="absolute inset-0 mix-blend-overlay opacity-30 bg-[radial-gradient(circle_at_center,transparent_0%,#000000_100%)]" />

                    {/* Faux Hotspots / Data nodes */}
                    <div className="absolute top-1/4 left-1/3 flex flex-col items-center gap-2 z-30 opacity-60 group-hover:opacity-100 transition-opacity">
                        <div className="w-3 h-3 rounded-full bg-b5-red animate-ping" />
                        <div className="w-2 h-2 rounded-full bg-b5-red absolute" />
                        <span className="bg-black/80 backdrop-blur-md text-b5-red text-[10px] font-mono px-2 py-1 rounded border border-b5-red/30 uppercase tracking-widest mt-4">Broadcast Cam</span>
                    </div>

                    <div className="absolute bottom-1/3 right-1/4 flex flex-col items-center gap-2 z-30 opacity-60 group-hover:opacity-100 transition-opacity">
                        <div className="w-3 h-3 rounded-full bg-b5-blue animate-ping" />
                        <div className="w-2 h-2 rounded-full bg-b5-blue absolute" />
                        <span className="bg-black/80 backdrop-blur-md text-b5-blue text-[10px] font-mono px-2 py-1 rounded border border-b5-blue/30 uppercase tracking-widest mt-4">FPV System</span>
                    </div>

                    {/* Tech data lines overlay */}
                    <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20 z-10">
                        <path d="M0,100 Q400,300 1000,50 T1000,100" fill="none" stroke="white" strokeWidth="1" strokeDasharray="5,5" />
                    </svg>
                </motion.div>
            </div>
        </section>
    );
};
