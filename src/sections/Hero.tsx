import { motion } from "framer-motion";
import { Play, Pause } from "lucide-react";
import { useEffect, useRef, useState } from "react";

function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  const [playing, setPlaying] = useState(false);
  const [ended, setEnded] = useState(false);

  const handlePlay = () => {
    if (!videoRef.current) return;

    if (ended) {
      videoRef.current.currentTime = 0;
      setEnded(false);
    }

    videoRef.current.muted = false;
    videoRef.current.play();
    setPlaying(true);
  };

  const handlePause = () => {
    if (!videoRef.current) return;

    videoRef.current.pause();
    setPlaying(false);
  };

  const handleEnded = () => {
    if (!videoRef.current) return;

    videoRef.current.pause();
    videoRef.current.currentTime = 0;
    videoRef.current.muted = true;

    setPlaying(false);
    setEnded(true);
  };

  useEffect(() => {
    const hero = document.getElementById("Home");

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting && videoRef.current) {
          videoRef.current.pause();
          setPlaying(false);
        }
      },
      {
        threshold: 0.35,
      }
    );

    if (hero) observer.observe(hero);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="Home"
      className="relative min-h-[100svh] w-full overflow-hidden bg-black"
    >
      {/* Background Video */}
      <video
        ref={videoRef}
        poster="/intro-poster.png"
        playsInline
        onEnded={handleEnded}
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src="/intro.mp4" type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/55" />

      {/* Purple Glow */}
      <div className="absolute -left-40 top-0 h-[520px] w-[520px] rounded-full bg-violet-600/20 blur-[180px]" />

      {/* Blue Glow */}
      <div className="absolute bottom-0 right-0 h-[520px] w-[520px] rounded-full bg-sky-500/15 blur-[180px]" />

      {/* Floating Particles */}
      <motion.div
        animate={{ y: [0, -40, 0], x: [0, 25, 0] }}
        transition={{ repeat: Infinity, duration: 12 }}
        className="absolute left-6 sm:left-20 top-20 h-3 w-3 rounded-full bg-violet-400 shadow-[0_0_20px_#8b5cf6]"
      />

      <motion.div
        animate={{ y: [0, 50, 0], x: [0, -25, 0] }}
        transition={{ repeat: Infinity, duration: 15 }}
        className="absolute right-6 sm:right-24 top-36 h-2 w-2 rounded-full bg-sky-400 shadow-[0_0_20px_#38bdf8]"
      />

      {/* Hero Content */}
      <div className="relative z-20 flex min-h-[100svh] items-center justify-center px-5 sm:px-6">
        <div className="w-full max-w-5xl text-center">
          <motion.h1
            initial={{ opacity: 0, y: 45, letterSpacing: "0.15em" }}
            animate={{ opacity: 1, y: 0, letterSpacing: "0.04em" }}
            transition={{ duration: 0.9 }}
            className="text-[2.2rem] sm:text-[3.6rem] md:text-[4.8rem] lg:text-[4.8rem] font-black text-white tracking-tight leading-tight"
          >
            DHARMARAPU VANISRI
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
            className="mt-5 text-base sm:text-lg md:text-2xl font-light text-gray-200"
          >
            Aspiring Data Analyst
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.55 }}
            className="mt-2 text-xs sm:text-sm md:text-base text-gray-400"
          >
            B.S. Chemical Sciences • Indian Institute of Technology Mandi
          </motion.p>
        </div>
                {/* Play / Pause Button */}
        <motion.button
          onClick={playing ? handlePause : handlePlay}
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.9 }}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          className="absolute bottom-5 right-5 sm:bottom-8 sm:right-8 z-30 flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full border border-white/20 bg-white/10 backdrop-blur-xl transition hover:bg-violet-500/20"
        >
          {playing ? (
            <Pause size={20} fill="white" className="text-white" />
          ) : (
            <Play size={20} fill="white" className="ml-0.5 text-white" />
          )}
        </motion.button>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1 }}
          className="absolute bottom-16 left-1/2 -translate-x-1/2 sm:bottom-8"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.6 }}
            className="flex h-14 w-8 justify-center rounded-full border border-white/30"
          >
            <motion.div
              animate={{ y: [4, 22, 4] }}
              transition={{ repeat: Infinity, duration: 1.6 }}
              className="mt-2 h-3 w-3 rounded-full bg-violet-400"
            />
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 h-40 w-full bg-gradient-to-t from-[#050505] via-[#050505]/70 to-transparent" />

      {/* Vignette */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_40%,rgba(0,0,0,0.45)_100%)]" />

      {/* Ambient Glow */}
      <motion.div
        animate={{ opacity: [0.15, 0.3, 0.15] }}
        transition={{ repeat: Infinity, duration: 5 }}
        className="absolute inset-0 bg-gradient-to-r from-violet-500/5 via-transparent to-blue-500/5"
      />

      {/* Ring */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.2, scale: 1 }}
        transition={{ duration: 1.2, delay: 0.6 }}
        className="hidden sm:block absolute right-16 top-20 h-72 w-72 rounded-full border border-violet-400/10"
      />

      {/* Glow */}
      <motion.div
        animate={{ opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute right-24 top-32 h-4 w-4 rounded-full bg-violet-400 blur-sm"
      />
    </section>
  );
}

export default Hero;