import { motion, useMotionValue, useSpring, useScroll, useTransform} from "framer-motion";

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

const headingAnimation = {
  initial: { opacity: 0, y: 80 },
  animate: { opacity: 1, y: 0 },
};

const buttonAnimation = {
  initial: { opacity: 0, scale: 0.9 },
  animate: { opacity: 1, scale: 1 },
};

const paragraphAnimation = {
   initial:{
      opacity:0,
      y:30,
      filter:"blur(10px)",
      scale:0.98,
   },

   animate:{
      opacity:1,
      y:0,
      filter:"blur(0px)",
      scale:1,
   },

   transition:{
      delay:1.1,
      duration:1,
      ease:easing,
   }
}

const buttons = [
{
   title:"Explore Our Work",
   className:"border border-white/30 text-white hover:border-white hover:bg-white hover:text-black",
   delay:1.4,
},
];

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
  const halfWidth = window.innerWidth / 2;
  const halfHeight = window.innerHeight / 2;

  mouseX.set((e.clientX - halfWidth) / parallaxStrength);
  mouseY.set((e.clientY - halfHeight) / parallaxStrength);
  };

  const { scrollYProgress } = useScroll();

  const buttonX = useTransform(
    scrollYProgress,
    [0, 0.12],
    [0, 900]
  );

  const buttonOpacity = useTransform(
    scrollYProgress,
    [0, 0.12],
    [1, 0]
  );

  return (
    <section
      onMouseMove={handleMouseMove}
      id="hero"
      className="relative flex h-screen items-center justify-center overflow-hidden"
    >


      <div className="relative z-10 mx-auto w-full max-w-5xl px-6 text-center">

        {/* Heading */}
        <motion.h1
          className="mt-8 leading-[0.82]  tracking-[-0.03em] text-white"
          style= {headingSize}
        >
          {/* Line 1 */}
          <motion.div
            {...headingAnimation}
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
            {...headingAnimation}
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
          {...paragraphAnimation}
          className="mx-auto mt-8 max-w-3xl text-white/75 leading-[1.9] tracking-[0.02em]"
          style = {paragraphSize}
        >
          We craft intelligent software, AI-powered solutions and digital
          experiences that help ambitious businesses innovate, grow and shape
          the future.
        </motion.p>

        {/* Button */}
        <div className="mt-10 flex justify-center">

          <motion.div
            style={{
              x: buttonX,
              opacity: buttonOpacity,
            }}
          >
            <motion.button
              initial={{
                x: "-120vw",
                opacity: 0,
                rotate: -6,
                scale: 0.9,
                filter: "blur(8px)",
              }}
              animate={{
                x: 0,
                opacity: 1,
                rotate: 0,
                scale: 1,
                filter: "blur(0px)",
              }}
              transition={{
                delay: 1,
                duration: 0.7,
                ease: [0.19, 1, 0.22, 1],
              }}
              className="
                relative
                overflow-hidden
                rounded-full
                border
                border-white/20
                bg-white/10
                backdrop-blur-xl

                px-10
                py-4

                font-semibold
                text-white

                shadow-[0_20px_60px_rgba(0,0,0,.35)]

                transition-all
                duration-300

                hover:scale-105
                hover:bg-cyan-400/20
                hover:border-cyan-300/40
                hover:shadow-[0_0_40px_rgba(34,211,238,.35)]
              "
            >
              Explore Our Work
            </motion.button>
          </motion.div>

        </div>

      </div>
    </section>
  );
}

export default Hero; 