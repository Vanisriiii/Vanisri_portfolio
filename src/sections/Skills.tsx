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
    title: "Tools",
    skills: ["Git", "GitHub", "VS Code", "Jupyter Notebook"],
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
        className="relative z-20 w-full max-w-7xl px-10"
      >
        {/* Heading */}
        <p className="text-center text-xl md:text-2xl uppercase tracking-[0.45em] font-semibold text-violet-400 drop-shadow-[0_0_18px_rgba(139,92,246,0.9)]">
          SKILLS
        </p>

        <div className="mt-12 space-y-5">
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
              className="rounded-xl border border-violet-500/20 bg-[#0B0B0B] px-10 py-6"
            >
              <div className="flex items-center">

                {/* Category */}
                <div className="flex w-[470px] flex-shrink-0 items-center gap-5">

                  <span className="text-[34px]">
                    {category.icon}
                  </span>

                  <h3 className="w-[270px] text-[31px] font-semibold text-violet-400">
                    {category.title}
                  </h3>

                  <span className="text-[32px] font-bold text-violet-400">
                    :
                  </span>

                </div>

                {/* Skills */}
                <div className="flex flex-1 items-center whitespace-nowrap overflow-x-auto">

                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skill}
                      className="flex items-center"
                    >
                      <span className="text-[24px] font-medium text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.45)] hover:text-violet-300 transition-all duration-300">
                        {skill}
                      </span>

                      {skillIndex !== category.skills.length - 1 && (
                        <span className="mx-5 text-[24px] font-bold text-violet-500">
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
        className="absolute bottom-10 left-1/2 h-[2px] w-[82%] -translate-x-1/2 origin-center rounded-full bg-gradient-to-r from-transparent via-violet-500 to-transparent"
      />
    </section>
  );
}

export default Skills;