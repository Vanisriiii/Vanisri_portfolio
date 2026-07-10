import { motion } from "framer-motion";

const particles = [...Array(18)].map(() => ({
  size: Math.random() * 4 + 2,
  left: Math.random() * 100,
  top: Math.random() * 100,
  duration: 5 + Math.random() * 5,
  delay: Math.random() * 3,
  x: Math.random() * 20 - 10,
}));

function Contact() {
  return (
    <section
      id="contact"
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
        className="relative z-20 w-full max-w-6xl px-8"
      >
        <p className="text-center text-3xl md:text-2xl uppercase tracking-[0.45em] font-semibold text-violet-400">
          Contact
        </p>

        <h2 className="mt-6 text-center text-3xl font-bold text-white">
          Let's Build Something Amazing Together
        </h2>
                {/* Social Icons */}
        <div className="mt-50 flex items-center justify-center gap-20 md:gap-16">

          {/* Gmail */}
          <a
            href="mailto:vanisri0dharmarapu7@gmail.com"
            className="transition duration-300 hover:scale-125"
            aria-label="Gmail"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/7/7e/Gmail_icon_%282020%29.svg"
              alt="Gmail"
              className="w-12 h-12"
            />
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/vanisri-dharmarapu-b5a307314"
            target="_blank"
            rel="noopener noreferrer"
            className="transition duration-300 hover:scale-125"
            aria-label="LinkedIn"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/8/81/LinkedIn_icon.svg"
              alt="LinkedIn"
              className="w-11 h-11"
            />
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/Vanisriiii"
            target="_blank"
            rel="noopener noreferrer"
            className="transition duration-300 hover:scale-125"
            aria-label="GitHub"
          >
            <img
              src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
              alt="GitHub"
              className="w-11 h-11 rounded-full"
            />
          </a>

          {/* Phone */}
          <a
            href="tel:+919398229769"
            className="transition duration-300 hover:scale-125"
            aria-label="Phone"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/724/724664.png"
              alt="Phone"
              className="w-11 h-11"
            />
          </a>

        </div>

        {/* Note */}
<p className="mt-120 text-center text-xs text-gray-400">
  <span className="text-violet-400 font-medium">Note:</span> Copy the URL and open it in your browser.
</p>
      </motion.div>
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

export default Contact;