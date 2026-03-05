import { motion, useScroll, useTransform, useMotionValueEvent, useSpring } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

export const TechStackGear = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const videoRef = useRef<HTMLVideoElement>(null);
    const [duration, setDuration] = useState(0);

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    });

    // Añade física tipo spring para que el scroll manual (rueda del ratón) se traduzca en movimiento fluido
    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 50,
        damping: 20,
        restDelta: 0.001
    });

    // Handle metadata loading to get actual duration
    const handleLoadedMetadata = () => {
        if (videoRef.current) {
            setDuration(videoRef.current.duration);
        }
    };

    // Scrub video synchronously but smoothly with spring physics
    useMotionValueEvent(smoothProgress, "change", (latest) => {
        if (videoRef.current && duration > 0) {
            videoRef.current.currentTime = latest * duration;
        }
    });

    // Fallback: If metadata didn't fire in time, aggressively check it
    useEffect(() => {
        const checkDuration = setInterval(() => {
            if (videoRef.current && videoRef.current.duration > 0 && duration === 0) {
                setDuration(videoRef.current.duration);
                clearInterval(checkDuration);
            }
        }, 500);
        return () => clearInterval(checkDuration);
    }, [duration]);

    // We removed the central card entry effects since the card is being removed.

    return (
        <section ref={sectionRef} id="gear" className="relative w-full min-h-screen py-32 bg-black overflow-hidden flex items-center justify-center border-t border-white/5">

            {/* Scroll-Scrubbing Video Background Container (No vertical cut-off) */}
            <div
                className="absolute inset-0 w-full h-full z-0 pointer-events-none"
            >
                {/* 
                  Using object-contain ensures the entire video is visible and not cropped.
                  Changing to the MP4 file to support programmatic currentTime scrubbing. 
                */}
                <video
                    ref={videoRef}
                    muted
                    playsInline
                    preload="auto"
                    onLoadedMetadata={handleLoadedMetadata}
                    className="w-full h-full object-contain opacity-50 mix-blend-screen"
                >
                    <source src="https://cbpirchavephlgzxkbbb.supabase.co/storage/v1/object/public/videos/Camera_components_floating_apart_delpmaspu_.mp4" type="video/mp4" />
                </video>

                {/* Gradients to blend video smoothly into the section edges */}
                <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-black/80" />
            </div>

            {/* Grid Pattern Background Overlay */}
            <div
                className="absolute inset-0 opacity-[0.03] pointer-events-none z-10 mix-blend-screen"
                style={{
                    backgroundImage: 'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)',
                    backgroundSize: '40px 40px'
                }}
            />

            <div className="max-w-7xl mx-auto px-6 relative z-20 w-full">
                <div className="text-center">
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
            </div>
        </section>
    );
};
