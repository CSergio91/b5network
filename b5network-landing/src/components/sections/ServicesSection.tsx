import { motion } from 'framer-motion';
import { Camera, Code, Cpu } from 'lucide-react';

const SERVICES = [
    {
        icon: <Camera size={32} />,
        title: "Cobertura Deportiva Total",
        description: "Capturamos el pulso de la acción. Streaming multicámara, drones FPV y producción audiovisual de primer nivel para torneos y eventos.",
        color: "from-[#e10000]/20 to-transparent",
        borderColor: "border-[#e10000]/30",
        delay: 0.1
    },
    {
        icon: <Code size={32} />,
        title: "Landing Pages Premium",
        description: "Desarrollo web a la medida. Creamos sitios web de alto rendimiento, portfolios y plataformas digitales para Clubes, Ligas y Negocios.",
        color: "from-[#0033FF]/20 to-transparent",
        borderColor: "border-[#0033FF]/30",
        delay: 0.3
    },
    {
        icon: <Cpu size={32} />,
        title: "Integración Tecnológica",
        description: "Innovación en cada jugada. Sistemas de datos en tiempo real, superposiciones gráficas (overlay) y modernización de infraestructuras deportivas.",
        color: "from-[#00ffcc]/20 to-transparent",
        borderColor: "border-[#00ffcc]/30",
        delay: 0.5
    }
];

export const ServicesSection = () => {
    return (
        <section id="servicios" className="relative py-32 bg-b5-black overflow-hidden z-10 w-full border-t border-white/5">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-b5-red/10 blur-[120px] rounded-full mix-blend-screen pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-20">
                <div className="text-center mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="font-inter font-black text-4xl md:text-6xl text-white uppercase tracking-tighter mb-4"
                    >
                        Nuestros <span className="text-b5-red">Servicios</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-white/50 text-lg max-w-2xl mx-auto font-medium"
                    >
                        Elevamos tu presencia en la cancha y en el mundo digital a través de soluciones excepcionales.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {SERVICES.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: service.delay, duration: 0.6 }}
                            className={`relative group bg-black/40 backdrop-blur-md rounded-2xl p-8 border ${service.borderColor} overflow-hidden hover:border-white/50 transition-all duration-500 flex flex-col items-start`}
                        >
                            <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                            <div className="p-4 bg-white/5 rounded-xl text-white mb-6 group-hover:scale-110 group-hover:bg-white border border-white/10 group-hover:text-black transition-all duration-500 relative z-10 shadow-lg">
                                {service.icon}
                            </div>

                            <h3 className="text-2xl font-bold font-inter text-white mb-4 relative z-10 tracking-tight">
                                {service.title}
                            </h3>
                            <p className="text-white/50 text-sm leading-relaxed relative z-10">
                                {service.description}
                            </p>

                            <div className="mt-8 flex items-center gap-2 text-white/40 group-hover:text-white transition-colors relative z-10 text-xs font-mono uppercase font-bold tracking-widest cursor-pointer">
                                <span>Conoce más</span>
                                <span className="text-b5-red group-hover:translate-x-2 transition-transform">→</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
