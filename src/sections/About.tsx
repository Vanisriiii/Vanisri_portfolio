import { motion } from "framer-motion";

const particles = [...Array(18)].map(() => ({
  size: Math.random() * 4 + 2,
  left: Math.random() * 100,
  top: Math.random() * 100,
  duration: 5 + Math.random() * 5,
  delay: Math.random() * 3,
  x: Math.random() * 20 - 10,
}));

function About() {
  return (
    <section
      id="about"
      className="relative min-h-[100svh] overflow-hidden bg-[#050505] flex items-center justify-center py-16 sm:py-20 md:py-24"
    >
      {/* Background Glow */}
      <div className="absolute -left-52 top-0 h-[500px] w-[500px] rounded-full bg-violet-700/15 blur-[180px]" />
      <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-violet-600/10 blur-[190px]" />
      <div className="hidden sm:block absolute right-20 top-24 h-72 w-72 rounded-full border border-violet-500/10" />
      <div className="hidden sm:block absolute left-20 bottom-20 h-44 w-44 rounded-full border border-violet-500/10" />

      {/* Floating Violet Particles */}
      {particles.map((particle, i) => (
        <motion.div
          key={i}
          className="absolute z-10 rounded-full bg-violet-400"
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
        className="relative z-20 mx-auto w-full max-w-4xl px-5 sm:px-8 text-center"
      >
        {/* ABOUT */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-lg sm:text-xl md:text-2xl uppercase tracking-[0.25em] sm:tracking-[0.45em] font-semibold text-violet-400 drop-shadow-[0_0_18px_rgba(139,92,246,0.9)]"
        >
          ABOUT
        </motion.p>

        {/* Name */}
        <motion.h2
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-8 sm:mt-10 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white"
        >
          Hi, I'm{" "}
          <span className="text-sky-400">
            Dharmarapu Vanisri
          </span>
        </motion.h2>

        {/* About Paragraph */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-8 sm:mt-12"
        >
          <p className="text-base sm:text-lg leading-8 sm:leading-9 text-gray-300">
            A passionate Data Analyst with a strong foundation in Python, SQL,
            Power BI, and Excel. I enjoy transforming raw data into meaningful
            insights, solving analytical problems, and building interactive
            dashboards that support data-driven decision-making. Through
            hands-on projects and continuous learning, I have strengthened my
            analytical thinking, problem-solving ability, and business insight
            while continuously expanding my technical expertise.
          </p>
        </motion.div>

        {/* Key Accomplishments */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-12 sm:mt-16"
        >
          <h3 className="text-xl sm:text-2xl font-semibold text-violet-400 drop-shadow-[0_0_18px_rgba(139,92,246,0.9)]">
            Key Accomplishments
          </h3>
                    <div className="mt-8 mx-auto max-w-3xl px-2 sm:px-6 md:px-10 text-left space-y-5">
            <p className="text-base sm:text-lg text-gray-300 leading-7 sm:leading-8">
              <span className="font-semibold text-violet-400">1.</span>{" "}
              Solved{" "}
              <span className="font-semibold text-white">
                25+ Python problems
              </span>{" "}
              on LeetCode, strengthening problem-solving skills and programming
              fundamentals.
            </p>

            <p className="text-base sm:text-lg text-gray-300 leading-7 sm:leading-8">
              <span className="font-semibold text-violet-400">2.</span>{" "}
              Solved{" "}
              <span className="font-semibold text-white">
                30+ SQL problems
              </span>{" "}
              on StrataScratch, covering joins, aggregations, subqueries, and
              window functions.
            </p>
          </div>
        </motion.div>

        {/* Floating Decorations */}
        <motion.div
          animate={{ y: [0, -12, 0], rotate: [0, 8, 0] }}
          transition={{ duration: 5, repeat: Infinity }}
          className="absolute -left-16 top-20 hidden h-28 w-28 rounded-full border border-violet-500/10 lg:block"
        />

        <motion.div
          animate={{ y: [0, 15, 0] }}
          transition={{ duration: 6, repeat: Infinity }}
          className="absolute -right-10 bottom-20 hidden h-20 w-20 rounded-full bg-violet-500/10 blur-xl lg:block"
        />

        <motion.div
          animate={{ scale: [1, 1.15, 1] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="absolute left-1/2 top-0 h-3 w-3 -translate-x-1/2 rounded-full bg-violet-400"
        />
      </motion.div>

      {/* Bottom Glow */}
      <motion.div
        initial={{ opacity: 0, scaleX: 0 }}
        whileInView={{ opacity: 1, scaleX: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        viewport={{ once: true }}
        className="absolute bottom-10 left-1/2 h-[2px] w-[90%] sm:w-[80%] -translate-x-1/2 origin-center rounded-full bg-gradient-to-r from-transparent via-violet-500 to-transparent"
      />
    </section>
  );
}

export default About;