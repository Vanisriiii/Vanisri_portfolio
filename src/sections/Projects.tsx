import { motion, AnimatePresence } from "framer-motion";
import {
  ShoppingCart,
  Smartphone,
  Pizza,
  Rocket,
  Car,
  Gift,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { useState, useEffect } from "react";

type Particle = {
  size: number;
  left: number;
  top: number;
  duration: number;
  delay: number;
  x: number;
};

const particles: Particle[] = [...Array(18)].map(() => ({
  size: Math.random() * 4 + 2,
  left: Math.random() * 100,
  top: Math.random() * 100,
  duration: 5 + Math.random() * 5,
  delay: Math.random() * 3,
  x: Math.random() * 20 - 10,
}));

const projects = [
  {
    icon: ShoppingCart,
    title: "Retail Sales Analysis",
    description:
      "Performed exploratory data analysis to uncover customer purchasing behavior, sales trends, profit insights, and category performance through interactive visualizations. Cleaned and transformed raw sales data, identified key business KPIs, and created insightful dashboards to support data-driven decision making.",
    tech: "Python • Pandas • NumPy • Matplotlib • Plotly",
    github: "https://github.com/Vanisriiii/Retail-Sales-Analysis",
  },
  {
    icon: Smartphone,
    title: "PhonePe Transaction Analysis",
    description:
      "Analyzed digital payment transaction data to identify regional trends, user engagement, transaction growth, and business insights. Developed interactive visualizations to compare state-wise performance, transaction categories, and growth patterns, enabling better understanding of digital payment adoption.",
    tech: "Python • Pandas • Plotly • Streamlit",
    github: "https://github.com/Vanisriiii/Phone-pe-Analysis",
  },
  {
    icon: Pizza,
    title: "Pizza Sales Analysis",
    description:
      "Analyzed pizza sales data using SQL to identify revenue trends, customer preferences, KPIs, and business performance. Wrote optimized SQL queries to evaluate sales by category, size, and time period, providing actionable insights for improving restaurant operations.",
    tech: "SQL • MySQL",
    github: "https://github.com/Vanisriiii/Pizza-sales-Analysis-SQL",
  },
  {
    icon: Rocket,
    title: "Space Mission Dashboard",
    description:
      "Built an interactive Power BI dashboard to analyze launch success, mission status, providers, and historical trends. Designed dynamic DAX measures and visuals to monitor mission performance, launch frequency, and organization-wise contributions over time.",
    tech: "Power BI • DAX • Power Query",
    github: "https://github.com/Vanisriiii/Space-Mission-Analysis-",
  },
  {
    icon: Car,
    title: "Electric Vehicle Analysis",
    description:
      "Designed an interactive Tableau dashboard to visualize EV adoption, manufacturer performance, CAFV eligibility, and growth. Created filters and visual analytics to compare vehicle types, model years, and regional adoption trends for effective business reporting.",
    tech: "Tableau • Visualization",
    github:
      "https://github.com/Vanisriiii/Electric-Vehicles-Data-Analysis-Tableau",
  },
  {
    icon: Gift,
    title: "FNP Sales Dashboard",
    description:
      "Created an Excel dashboard to analyze sales, customer orders, product performance, and seasonal business trends. Utilized Pivot Tables, charts, and slicers to deliver an interactive reporting solution that supports business monitoring and performance evaluation.",
    tech: "Excel • Pivot Tables • Dashboard",
    github:
      "https://github.com/Vanisriiii/FNP-Sales-Analysis-Dashboard-Excel-",
  },
];

function Projects() {
  const [page, setPage] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreen = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkScreen();

    window.addEventListener("resize", checkScreen);

    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  const itemsPerPage = isMobile ? 1 : 2;

  const pages = [];

  for (let i = 0; i < projects.length; i += itemsPerPage) {
    pages.push(projects.slice(i, i + itemsPerPage));
  }

  const next = () => {
    if (page < pages.length - 1) setPage(page + 1);
  };

  const previous = () => {
    if (page > 0) setPage(page - 1);
  };

  return (
    <section
      id="projects"
      className="relative min-h-[100svh] overflow-hidden bg-[#050505] flex items-center justify-center py-16 sm:py-20 md:py-24"
    >
      {/* Background Glow */}
      <div className="absolute -left-52 top-0 h-[500px] w-[500px] rounded-full bg-violet-700/15 blur-[180px]" />
      <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-violet-700/10 blur-[180px]" />

      {/* Floating Particles */}
      {particles.map((particle, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-blue-400"
          style={{
            width: particle.size,
            height: particle.size,
            left: `${particle.left}%`,
            top: `${particle.top}%`,
            opacity: 0.3,
          }}
          animate={{
            y: [0, -40, 0],
            x: [0, particle.x, 0],
            opacity: [0.2, 0.8, 0.2],
            scale: [1, 1.4, 1],
          }}
          transition={{
            repeat: Infinity,
            duration: particle.duration,
            delay: particle.delay,
          }}
        />
      ))}

      {/* Main Animation */}
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
        transition={{
          duration: 1,
          ease: "easeOut",
        }}
        viewport={{ once: true }}
        className="relative z-20 w-full max-w-[1450px] px-5 sm:px-8 lg:px-10 flex flex-col items-center"
      >
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-[0.25em] sm:tracking-[0.45em] text-blue-400 drop-shadow-[0_0_25px_rgba(139,92,246,0.8)]">
          PROJECTS
        </h2>
                <div className="mt-12 sm:mt-20 flex items-center justify-center gap-3 sm:gap-8 lg:gap-12 w-full">

          {/* Previous Button */}
          <button
            onClick={previous}
            disabled={page === 0}
            className={`flex h-11 w-11 sm:h-14 sm:w-14 lg:h-16 lg:w-16 flex-shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
              page === 0
                ? "cursor-not-allowed border-violet-500/10 text-violet-500/20"
                : "border-violet-500/30 bg-violet-500/10 text-violet-300 hover:scale-110 hover:border-violet-400 hover:bg-violet-500/20 hover:shadow-[0_0_30px_rgba(139,92,246,0.5)]"
            }`}
          >
            <ChevronLeft size={isMobile ? 22 : 34} />
          </button>

          {/* Cards */}
          <div className="relative w-full max-w-[1100px] overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={page}
                initial={{
                  opacity: 0,
                  x: 120,
                  scale: 0.96,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                  scale: 1,
                }}
                exit={{
                  opacity: 0,
                  x: -120,
                  scale: 0.96,
                }}
                transition={{
                  duration: 0.65,
                  ease: "easeInOut",
                }}
                className="flex justify-center gap-6 lg:gap-12"
              >
                {pages[page].map((project, index) => (
                  <motion.div
                    key={project.title}
                    initial={{
                      opacity: 0,
                      y: 60,
                      scale: 0.92,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                      scale: 1,
                    }}
                    transition={{
                      duration: 0.7,
                      delay: index * 0.15,
                    }}
                    viewport={{ once: true }}
                    whileHover={{
                      y: -10,
                      scale: 1.03,
                      borderColor: "rgba(139,92,246,0.45)",
                      boxShadow: "0 0 35px rgba(139,92,246,0.22)",
                    }}
                    className="w-full md:w-[500px] min-h-[420px] md:min-h-[470px] rounded-3xl border border-violet-500/20 bg-[#0B0B0B] px-5 py-6 sm:px-8 sm:py-8 lg:px-10 lg:py-10"
                  >
                    {/* Icon */}
                    <div className="flex justify-center">
                      <project.icon
                        size={isMobile ? 42 : 58}
                        className="text-violet-400 drop-shadow-[0_0_20px_rgba(139,92,246,0.9)]"
                      />
                    </div>

                    {/* Project Title */}
                    <h3 className="mt-5 sm:mt-6 text-center text-xl sm:text-2xl lg:text-3xl font-bold text-violet-400 drop-shadow-[0_0_15px_rgba(96,165,250,0.8)]">
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p className="mt-5 sm:mt-6 text-center text-sm sm:text-base lg:text-[17px] leading-7 sm:leading-8 text-gray-300">
                      {project.description}
                    </p>

                    {/* Tech Stack */}
                    <p className="mt-6 sm:mt-7 text-center text-base sm:text-lg font-medium text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.35)]">
                      {project.tech}
                    </p>

                    {/* GitHub */}
                    <div className="mt-8 sm:mt-10 flex justify-center">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 sm:gap-3 text-base sm:text-lg font-semibold text-yellow-400 transition-all duration-300 hover:text-yellow-300 hover:scale-105"
                      >
                        <FaGithub size={isMobile ? 22 : 26} />
                        <span>GitHub</span>
                      </a>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Next Button */}
          <button
            onClick={next}
            disabled={page === pages.length - 1}
            className={`flex h-11 w-11 sm:h-14 sm:w-14 lg:h-16 lg:w-16 flex-shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
              page === pages.length - 1
                ? "cursor-not-allowed border-violet-500/10 text-violet-500/20"
                : "border-violet-500/30 bg-violet-500/10 text-violet-300 hover:scale-110 hover:border-violet-400 hover:bg-violet-500/20 hover:shadow-[0_0_30px_rgba(139,92,246,0.5)]"
            }`}
          >
            <ChevronRight size={isMobile ? 22 : 34} />
          </button>
        </div>
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
          delay: 1,
          duration: 1,
        }}
        viewport={{ once: true }}
        className="absolute bottom-8 sm:bottom-10 left-1/2 h-[2px] w-[90%] sm:w-[82%] -translate-x-1/2 origin-center rounded-full bg-gradient-to-r from-transparent via-violet-500 to-transparent"
      />
    </section>
  );
}

export default Projects;