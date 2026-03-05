import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const IMAGES = [
    {
        src: "/fondo1.jpg",
        title: "Baseball5 Pro",
        colSpan: "md:col-span-2",
        rowSpan: "md:row-span-2",
        delay: 0.1
    },
    {
        src: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?q=80&w=2070&auto=format&fit=crop",
        title: "Elite Football",
        colSpan: "md:col-span-1",
        rowSpan: "md:row-span-1",
        delay: 0.2
    },
    {
        src: "https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=2000&auto=format&fit=crop",
        title: "Basketball Hoops",
        colSpan: "md:col-span-1",
        rowSpan: "md:row-span-1",
        delay: 0.3
    },
    {
        src: "https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?q=80&w=2000&auto=format&fit=crop",
        title: "Volleyball Spikes",
        colSpan: "md:col-span-1",
        rowSpan: "md:row-span-1",
        delay: 0.4
    },
    {
        src: "https://images.unsplash.com/photo-1508344928928-7165b67de128?q=80&w=2070&auto=format&fit=crop",
        title: "Classic Baseball",
        colSpan: "md:col-span-1",
        rowSpan: "md:row-span-1",
        delay: 0.5
    }
];

export const SportsGallery = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const yParallax = useTransform(scrollYProgress, [0, 1], [100, -100]);

    return (
        <section id="galeria" ref={containerRef} className="relative py-32 bg-black overflow-hidden border-t border-white/5">
            {/* Background elements */}
            <div className="absolute inset-0 bg-[#0033FF]/5 blur-[150px] mix-blend-screen pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                    <div>
                        <motion.h2
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="font-inter font-black text-4xl md:text-6xl text-white uppercase tracking-tighter"
                        >
                            Impacto <span className="text-transparent bg-clip-text bg-gradient-to-r from-b5-blue to-white">Visual</span>
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="mt-4 text-white/50 font-medium max-w-xl"
                        >
                            Capturamos la esencia del deporte. Nuestro portafolio visual abarca desde la dinámica del Baseball5 hasta el poder del Football.
                        </motion.p>
                    </div>
                </div>

                <motion.div
                    style={{ y: yParallax }}
                    className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[250px] md:auto-rows-[300px]"
                >
                    {IMAGES.map((img, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: img.delay, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                            className={`relative group rounded-2xl overflow-hidden cursor-pointer ${img.colSpan} ${img.rowSpan} bg-white/5`}
                        >
                            {/* Overlay de gradiente */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500 z-10" />

                            {/* Imagen de fondo */}
                            <img
                                src={img.src}
                                alt={img.title}
                                className="w-full h-full object-cover grayscale opacity-70 group-hover:grayscale-0 group-hover:scale-110 group-hover:opacity-100 transition-all duration-700 ease-out"
                            />

                            {/* Contenido en hover */}
                            <div className="absolute bottom-0 left-0 p-8 z-20 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                                <span className="inline-block px-3 py-1 bg-b5-red/20 border border-b5-red/50 text-b5-red font-mono text-xs uppercase tracking-widest rounded-full mb-3 backdrop-blur-md">
                                    Feature
                                </span>
                                <h3 className="text-white font-inter font-bold text-2xl md:text-3xl tracking-tight">
                                    {img.title}
                                </h3>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};
