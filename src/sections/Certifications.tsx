import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

type Certificate = {
  title: string;
  image: string;
};

const particles = [...Array(18)].map(() => ({
  size: Math.random() * 4 + 2,
  left: Math.random() * 100,
  top: Math.random() * 100,
  duration: 5 + Math.random() * 5,
  delay: Math.random() * 3,
  x: Math.random() * 20 - 10,
}));

const certificates: Certificate[] = [
  {
    title: "Data Analytics Essentials (Cisco)",
    image: "/cisco.png",
  },
  {
    title: "Deloitte Data Analytics Job Simulation",
    image: "/deloitee.jpg",
  },
  {
    title: "Thermodynamics with MATLAB Internship",
    image: "/intern.jpg",
  },
  {
    title: "Japanese Language (Beginner)",
    image: "/japanese.jpeg",
  },
  {
    title: "TCS iON IT Primer",
    image: "/it premier.jpg",
  },
  {
    title: "TCS iON Interview Job Readiness",
    image: "/career edge.jpg",
  },
  {
    title: "TATA Crucible Campus Quiz 2025",
    image: "/tata quiz.jpg",
  },
];

function Certificates() {
  const [selected, setSelected] = useState<Certificate | null>(null);

  return (
    <section
      id="certifications"
      className="relative min-h-screen overflow-hidden bg-[#050505] flex items-center justify-center py-24"
    >
      {/* Background Glow */}
      <div className="absolute -left-52 top-0 h-[500px] w-[500px] rounded-full bg-violet-700/15 blur-[180px]" />
      <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-violet-600/10 blur-[190px]" />
      <div className="absolute right-20 top-24 h-72 w-72 rounded-full border border-violet-500/10" />
      <div className="absolute left-20 bottom-20 h-44 w-44 rounded-full border border-violet-500/10" />

      {/* Floating Particles */}
      {particles.map((particle, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-violet-400"
          style={{
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            left: `${particle.left}%`,
            top: `${particle.top}%`,
            opacity: 0.35,
            filter: "blur(0.5px)",
          }}
          animate={{
            y: [0, -40, 0],
            x: [0, particle.x, 0],
            opacity: [0.2, 0.7, 0.2],
            scale: [1, 1.4, 1],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: particle.delay,
          }}
        />
      ))}

      {/* Main Content */}
      <motion.div
        initial={{
          opacity: 0,
          y: 80,
          scale: 0.95,
          filter: "blur(10px)",
        }}
        whileInView={{
          opacity: 1,
          y: 0,
          scale: 1,
          filter: "blur(0px)",
        }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="relative z-20 w-full max-w-7xl px-8"
      >
        {/* Heading */}
        <p className="text-center text-xl md:text-2xl uppercase tracking-[0.45em] font-semibold text-violet-400 drop-shadow-[0_0_18px_rgba(139,92,246,0.9)]">
          CERTIFICATES
        </p>

        {/* Certificates Grid */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {certificates.map((certificate, index) => (
            <motion.div
              key={certificate.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * 0.1,
                duration: 0.6,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -8,
                scale: 1.03,
              }}
              className="group cursor-pointer"
              onClick={() => setSelected(certificate)}
            >
              <div className="overflow-hidden rounded-xl border border-violet-500/20 bg-[#0B0B0B] transition-all duration-500 hover:border-violet-400 hover:shadow-[0_0_25px_rgba(139,92,246,0.3)]">

                {/* Certificate Image */}
                <div className="relative h-40 overflow-hidden">
                  <motion.img
                    src={certificate.image}
                    alt={certificate.title}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.4 }}
                    className="h-full w-full object-cover"
                  />

                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/35 transition-all duration-300" />

                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="absolute bottom-3 right-3 rounded-full bg-violet-600/90 px-3 py-1.5 text-xs font-medium text-white opacity-0 transition-all duration-300 group-hover:opacity-100"
                  >
                    View
                  </motion.div>
                </div>

                {/* Certificate Title */}
                <div className="px-4 py-4">
                  <h3 className="text-[15px] font-semibold leading-6 text-center text-white transition-colors duration-300 group-hover:text-violet-300">
                    {certificate.title}
                  </h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
            {/* Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 z-[999] flex items-center justify-center bg-black/90 backdrop-blur-md p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            {/* Close Button */}
            <motion.button
              whileHover={{ scale: 1.15, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setSelected(null)}
              className="absolute top-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full border border-violet-500/40 bg-[#111] text-3xl text-white transition-all hover:border-violet-400 hover:text-violet-300"
            >
              ×
            </motion.button>

            {/* Certificate Image */}
            <motion.img
              src={selected.image}
              alt={selected.title}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.35 }}
              onClick={(e) => e.stopPropagation()}
              className="max-h-[90vh] max-w-[90vw] rounded-2xl border border-violet-500/30 shadow-[0_0_45px_rgba(139,92,246,0.35)] object-contain"
            />

            {/* Certificate Title */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 0.15 }}
              className="absolute bottom-8 left-1/2 -translate-x-1/2 rounded-full border border-violet-500/30 bg-[#0B0B0B]/90 px-8 py-3 backdrop-blur-md"
            >
              <p className="text-base font-semibold text-violet-300">
                {selected.title}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Bottom Glow */}
      <motion.div
        initial={{
          opacity: 0,
          scaleX: 0,
        }}
        whileInView={{
          opacity: 1,
          scaleX: 1,
        }}
        transition={{
          delay: 1.2,
          duration: 1,
        }}
        viewport={{ once: true }}
        className="absolute bottom-10 left-1/2 h-[2px] w-[82%] -translate-x-1/2 origin-center rounded-full bg-gradient-to-r from-transparent via-violet-500 to-transparent"
      />
    </section>
  );
}

export default Certificates;