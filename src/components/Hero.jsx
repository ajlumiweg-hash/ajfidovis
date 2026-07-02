import { motion } from "framer-motion";

function Hero() {
  return (
    <section id="hero" className="relative h-screen flex items-center  overflow-hidden">
     <div className=" z-10 h-screen flex items-center justify-center w-full px-6">     
        <div className="w-full max-w-5xl text-center">

          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="inline-block text-cyan-400 uppercase tracking-[0.3em] text-sm mb-6"
          >
            AI • Software • Innovation
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-white font-light leading-[0.95]"
            style={{
              fontSize: "clamp(3rem, 7vw, 10rem)",
            }}
          >
            Building The
            <br />

            <motion.span
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                delay: 0.5,
                duration: 1,
              }}
              className=" font-bold bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-500 bg-clip-text text-transparent"
            >
              Future
            </motion.span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.8,
              duration: 1,
            }}
            className="text-gray-300 mt-6 max-w-2xl mx-auto leading-relaxed"
            style={{
              fontSize: "clamp(1rem, 1.6vw, 1.9rem)",
            }}
          >
              We build intelligent software, AI products,
              cloud solutions and future technologies
              for businesses around the world.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 1.2,
              duration: 1,
            }}
            className="flex flex-col sm:flex-row gap-4 mt-10 justify-center"
          >
            <button
              className="bg-blue-600 hover:bg-blue-700 hover:scale-105 transition-all duration-300 rounded-full text-white font-semibold shadow-lg"
              style={{
                padding: "clamp(0.8rem, 1vw, 1.2rem) clamp(1.5rem, 2vw, 3rem)",
                fontSize: "clamp(1rem, 2vw, 2.2rem)",
              }}
            >
              Explore Services
            </button>

            <button
              className="border border-white/40 rounded-full text-white hover:bg-white hover:text-black hover:scale-105 transition-all duration-300"
              style={{
                padding: "clamp(0.8rem, 1vw, 1.2rem) clamp(1.5rem, 2vw, 3rem)",
                fontSize: "clamp(1rem, 2vw, 2.2rem)",
              }}
            >
              Contact Us
            </button>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

export default Hero;