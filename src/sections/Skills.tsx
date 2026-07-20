import { motion } from "framer-motion";

const particles = [...Array(18)].map(() => ({
  size: Math.random() * 4 + 2,
  left: Math.random() * 100,
  top: Math.random() * 100,
  duration: 5 + Math.random() * 5,
  delay: Math.random() * 3,
  x: Math.random() * 20 - 10,
}));

const categories = [
  {
    icon: "💻",
    title: "Programming",
    skills: ["Python", "SQL", "MySQL", "SQL Server"],
  },
  {
    icon: "📊",
    title: "Data Analytics",
    skills: ["Power BI", "Excel", "Tableau", "EDA"],
  },
  {
    icon: "📚",
    title: "Libraries",
    skills: ["Pandas", "NumPy", "Matplotlib"],
  },
  {
    icon: "🛠️",
    title: "Frameworks & Tools",
    skills: ["Streamlit", "Git", "GitHub", "VS Code", "Jupyter Notebook"],
  },
  {
    icon: "🧠",
    title: "Core Skills",
    skills: [
      "Analytical Thinking",
      "Problem Solving",
      "Communication",
    ],
  },
];

function Skills() {
  return (
    <section
      id="skills"
      className="relative min-h-[100svh] overflow-hidden bg-[#050505] flex items-center justify-center py-16 sm:py-20 md:py-24"
    >
      {/* Background Glow */}
      <div className="absolute -left-52 top-0 h-[500px] w-[500px] rounded-full bg-violet-700/15 blur-[180px]" />
      <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-violet-600/10 blur-[190px]" />
      <div className="hidden sm:block absolute right-20 top-24 h-72 w-72 rounded-full border border-violet-500/10" />
      <div className="hidden sm:block absolute left-20 bottom-20 h-44 w-44 rounded-full border border-violet-500/10" />

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
        className="relative z-20 mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10"
      >
        {/* Heading */}
        <p className="text-center text-lg sm:text-xl md:text-2xl uppercase tracking-[0.25em] sm:tracking-[0.45em] font-semibold text-violet-400 drop-shadow-[0_0_18px_rgba(139,92,246,0.9)]">
          SKILLS
        </p>

        <div className="mt-10 sm:mt-12 space-y-5">
                    {categories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * 0.15,
                duration: 0.7,
              }}
              viewport={{ once: true }}
              whileHover={{
                borderColor: "rgba(139,92,246,0.45)",
                boxShadow: "0 0 20px rgba(139,92,246,0.08)",
              }}
              className="rounded-2xl border border-violet-500/20 bg-[#0B0B0B] p-5 sm:px-8 sm:py-6 transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-center">

                {/* Category */}
                <div className="flex w-full md:w-[470px] flex-shrink-0 items-center gap-4 sm:gap-5">

                  <span className="text-3xl sm:text-[34px]">
                    {category.icon}
                  </span>

                  <h3 className="flex-1 md:w-[270px] text-xl sm:text-2xl md:text-[31px] font-semibold text-violet-400">
                    {category.title}
                  </h3>

                  <span className="hidden md:block text-[32px] font-bold text-violet-400">
                    :
                  </span>

                </div>

                {/* Skills */}
                <div className="mt-5 md:mt-0 flex flex-wrap gap-3 md:flex-1 md:items-center md:gap-0">

                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skill}
                      className="flex items-center"
                    >
                      <span className="rounded-full border border-violet-500/30 bg-violet-500/5 px-4 py-2 text-sm sm:text-base font-medium text-white transition-all duration-300 hover:border-violet-400 hover:text-violet-300 md:rounded-none md:border-0 md:bg-transparent md:px-0 md:py-0 md:text-[24px] md:drop-shadow-[0_0_10px_rgba(255,255,255,0.45)]">
                        {skill}
                      </span>

                      {skillIndex !== category.skills.length - 1 && (
                        <span className="hidden md:inline mx-5 text-[24px] font-bold text-violet-500">
                          |
                        </span>
                      )}
                    </span>
                  ))}

                </div>

              </div>
            </motion.div>
          ))}
        </div>
              </motion.div>

      {/* Bottom Glow */}
      <motion.div
        initial={{ opacity: 0, scaleX: 0 }}
        whileInView={{ opacity: 1, scaleX: 1 }}
        transition={{ delay: 1.3, duration: 1 }}
        viewport={{ once: true }}
        className="absolute bottom-10 left-1/2 h-[2px] w-[90%] sm:w-[82%] -translate-x-1/2 origin-center rounded-full bg-gradient-to-r from-transparent via-violet-500 to-transparent"
      />
    </section>
  );
}

export default Skills;
        