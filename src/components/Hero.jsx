import { motion, useMotionValue, useSpring } from "framer-motion";

const easing = [0.22, 1, 0.36, 1];

const parallaxStrength = 40;

const buttonClass =
  "rounded-full px-10 py-4 font-semibold transition-all duration-300 hover:scale-105";

const headingSize = {
  fontSize: "clamp(3rem,6.5vw,7rem)",
};

const paragraphSize = {
  fontSize: "clamp(1rem,1.4vw,1.35rem)",
};

const defaultTransition = {
  duration: 1,
  ease: easing,
};

const glowClass =
  "absolute left-1/2 top-1/2 -z-0 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/10 blur-[140px]";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay,
      duration: 0.9,
      ease: easing,
    },
  }),
};

function Hero() {

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const x = useSpring(mouseX, {
    stiffness: 60,
    damping: 20,
  });

  const y = useSpring(mouseY, {
    stiffness: 60,
    damping: 20,
  });

  const handleMouseMove = (e) => {
    const { innerWidth, innerHeight } = window;

    mouseX.set((e.clientX - innerWidth / 2) / parallaxStrength);
    mouseY.set((e.clientY - innerHeight / 2) / parallaxStrength);
  };

  return (
    <section
      onMouseMove={handleMouseMove}
      id="hero"
      className="relative flex h-screen items-center justify-center overflow-hidden"
    >

      {/* Floating Glow */}
      <motion.div
        style={{ x, y }}
        animate={{
          scale: [1, 1.15, 1],
        }}
        transition={{
          scale: {
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          },
        }}
        className={glowClass}
      />

      <div className="relative z-10 mx-auto w-full max-w-5xl px-6 text-center">

        {/* Heading */}
        <motion.h1
          className="mt-8 leading-[0.82]  tracking-[-0.03em] text-white"
          style= {headingSize}
        >
          {/* Line 1 */}
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={defaultTransition}
            className="font-light"
          >
            Building
          </motion.div>

          {/* Line 2 */}
          <motion.div
            initial={{ opacity: 0, y: 120, scale: 0.9 }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
              backgroundPosition: [
                "0% 50%",
                "100% 50%",
                "0% 50%",
              ],
            }}
            transition={{
            opacity: {
              delay: 0.35,
              duration: 1,
            },
            y: {
              delay: 0.35,
              duration: 1,
              ease: easing,
            },
            scale: {
              delay: 0.35,
              duration: 1,
            },
            backgroundPosition: {
              duration: 8,
              repeat: Infinity,
              ease: "linear",
            },
            }}
            className="font-bold bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-500 bg-[length:200%_200%] bg-clip-text text-transparent"
          >
            Tomorrow.
          </motion.div>

          {/* Line 3 */}
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.8,
              duration: 1,
              ease: easing,
            }}
            className="font-light"
          >
            Creating Today.
          </motion.div>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{
            opacity: 0,
            y: 30,
            filter: "blur(10px)",
            scale: 0.98,
          }}
          animate={{
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            scale: 1,
          }}
          transition={{
            delay: 1.1,
            duration: 1,
            ease: easing,
          }}
          className="mx-auto mt-8 max-w-3xl text-white/75 leading-[1.9] tracking-[0.02em]"
          style = {paragraphSize}
        >
          We craft intelligent software, AI-powered solutions and digital
          experiences that help ambitious businesses innovate, grow and shape
          the future.
        </motion.p>

        {/* Buttons */}
        <div className="mt-10 flex flex-col justify-center gap-5 sm:flex-row">
          <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              delay: 1.2,
              duration: 0.5,
            }}
            className={`${buttonClass} bg-cyan-500 text-white hover:bg-cyan-400 hover:shadow-[0_0_40px_rgba(34,211,238,0.35)]`}
          >
            Get Started
          </motion.button>

          <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              delay: 1.4,
              duration: 0.5,
            }}
            className={`${buttonClass} border border-white/30 text-white hover:border-white hover:bg-white hover:text-black`}
          >
            Explore Our Work
          </motion.button>
        </div>

      </div>
    </section>
  );
}

export default Hero; 