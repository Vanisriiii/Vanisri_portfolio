
import { motion } from "framer-motion";
import { FileText } from "lucide-react";

const particles = [...Array(18)].map(() => ({
  size: Math.random() * 4 + 2,
  left: Math.random() * 100,
  top: Math.random() * 100,
  duration: 5 + Math.random() * 5,
  delay: Math.random() * 3,
  x: Math.random() * 20 - 10,
}));

function Experience() {
  return (
    <section
      id="experience"
      className="relative min-h-screen bg-[#050505] overflow-hidden flex items-center justify-center py-24"
    >

      {/* Background Glow */}
      <div className="absolute -left-52 top-0 h-[500px] w-[500px] rounded-full bg-violet-700/15 blur-[180px]" />
      <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-violet-600/10 blur-[190px]" />

      <div className="absolute right-20 top-24 h-72 w-72 rounded-full border border-violet-500/10" />
      <div className="absolute left-20 bottom-20 h-44 w-44 rounded-full border border-violet-500/10" />


      {/* Floating Violet Particles */}
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
          className="
          text-xl md:text-2xl
          uppercase
          tracking-[0.45em]
          font-semibold
          text-violet-400
          drop-shadow-[0_0_18px_rgba(139,92,246,0.9)]
          "
        >
          EXPERIENCE
        </motion.p>



        {/* Internship Title */}
        <motion.h2
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          viewport={{ once: true }}
          className="
          mt-10
          text-4xl
          md:text-5xl
          font-bold
          text-white
          "
        >
          Thermodynamics with{" "}
          <span className="text-sky-400">
            MATLAB
          </span>
        </motion.h2>



        {/* Company */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          viewport={{ once: true }}
          className="
          mt-5
          text-xl
          text-violet-300
          "
        >
          Internship Trainee – 1Stop.ai | Education
        </motion.p>




        {/* Description */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          viewport={{ once: true }}
          className="mt-10"
        >

          <p className="
          text-lg
          leading-9
          text-gray-300
          "
          >
            Completed a 2-month internship focused on applying
            thermodynamics concepts using MATLAB. Worked on energy
            system analysis, simulations, and modelling using MATLAB
            programming and XSteam library. Developed skills in
            thermodynamic analysis, visualization, technical report
            preparation, and independent project execution.
          </p>

        </motion.div>





        {/* Projects */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1 }}
          viewport={{ once: true }}
          className="
          mt-14
          space-y-8
          text-left
          "
        >


          {/* Project 1 */}

          <motion.div
            whileHover={{ x: 10 }}
            className="
            flex
            items-center
            justify-between
            border-b
            border-violet-500/20
            pb-5
            "
          >

            <h3 className="
            text-xl
            font-semibold
            text-white
            "
            >
              1. Ideal Gas Law Simulation using MATLAB
            </h3>


            <a
              href="https://drive.google.com/file/d/1tWsvxN3XMHF3x2y3BcgDt02suYqWqVc2/view?usp=drivesdk"
              target="_blank"
              rel="noopener noreferrer"
              className="
              text-violet-400
              hover:text-sky-400
              transition
              "
            >
              <FileText size={30}/>
            </a>


          </motion.div>





          {/* Project 2 */}

          <motion.div
            whileHover={{ x: 10 }}
            className="
            flex
            items-center
            justify-between
            border-b
            border-violet-500/20
            pb-5
            "
          >

            <h3 className="
            text-xl
            font-semibold
            text-white
            "
            >
              2. Rankine Cycle Efficiency Analysis using MATLAB
            </h3>


            <a
              href="https://drive.google.com/file/d/18l_ORKNYHJnURIY9TDeRMX3xhy7wQWjS/view?usp=drivesdk"
              target="_blank"
              rel="noopener noreferrer"
              className="
              text-violet-400
              hover:text-sky-400
              transition
              "
            >
              <FileText size={30}/>
            </a>


          </motion.div>


        </motion.div>


      </motion.div>



      {/* Bottom Glow */}
      <motion.div
        initial={{ opacity: 0, scaleX: 0 }}
        whileInView={{ opacity: 1, scaleX: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        viewport={{ once: true }}
        className="
        absolute
        bottom-10
        left-1/2
        h-[2px]
        w-[80%]
        -translate-x-1/2
        origin-center
        rounded-full
        bg-gradient-to-r
        from-transparent
        via-violet-500
        to-transparent
        "
      />

    </section>
  );
}

export default Experience;