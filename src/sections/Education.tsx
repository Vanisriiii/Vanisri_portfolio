import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

const particles = [...Array(18)].map(() => ({
  size: Math.random() * 4 + 2,
  left: Math.random() * 100,
  top: Math.random() * 100,
  duration: 5 + Math.random() * 5,
  delay: Math.random() * 3,
  x: Math.random() * 20 - 10,
}));

const education = [
  {
    institute: "Indian Institute of Technology Mandi",
    degree: "B.S. in Chemical Sciences",
    duration: "2023 - Present",
    score: "CGPA: 6.25 / 10",
  },
  {
    institute: "TSRJC Nekkonda, Telangana",
    degree: "Board of Intermediate Education",
    duration: "2020 - 2022",
    score: "97.6%",
  },
  {
    institute: "ZPHS Cherlapalem, Telangana",
    degree: "Board of Secondary Education",
    duration: "2020",
    score: "GPA: 10 / 10",
  },
];

function Education() {
  return (
    <section
      id="education"
      className="relative min-h-screen bg-[#050505] overflow-hidden flex items-center justify-center py-24"
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
          className="absolute rounded-full bg-violet-400 z-10"
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
          y: 90,
          scale: 0.92,
          filter: "blur(10px)",
        }}
        whileInView={{
          opacity: 1,
          y: 0,
          scale: 1,
          filter: "blur(0px)",
        }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{
          duration: 1,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="relative z-20 max-w-4xl px-8 text-center"
      >
        {/* Heading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-xl md:text-2xl uppercase tracking-[0.45em] font-semibold text-blue-400 drop-shadow-[0_0_18px_rgba(139,92,246,0.9)]"
        >
          EDUCATION
        </motion.p>

        {/* Education Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 flex flex-col gap-8"
        >
          {education.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="rounded-3xl border border-violet-500/20 bg-[#0B0B0B] p-8 hover:-translate-y-1 hover:border-violet-500/40 hover:shadow-xl hover:shadow-violet-500/10 transition-all duration-300"
            >
              <div className="flex justify-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-violet-600 shadow-lg shadow-violet-500/30">
                  <GraduationCap className="text-white" size={28} />
                </div>
              </div>

              <h3 className="mt-6 text-2xl font-bold text-white">
                {item.institute}
              </h3>

              <p className="mt-2 text-lg text-violet-400">
                {item.degree}
              </p>

              <p className="mt-4 text-gray-400">
                {item.duration} • {item.score}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Bottom Glow */}
      <motion.div
        initial={{ opacity: 0, scaleX: 0 }}
        whileInView={{ opacity: 1, scaleX: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        viewport={{ once: true }}
        className="absolute bottom-10 left-1/2 h-[2px] w-[80%] -translate-x-1/2 origin-center rounded-full bg-gradient-to-r from-transparent via-violet-500 to-transparent"
      />
    </section>
  );
}

export default Education;