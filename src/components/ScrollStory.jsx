import heroVideo from "../assets/videos/hero.mp4";
import productsVideo from "../assets/videos/products.mp4";
import animationVideo from "../assets/videos/animation.mp4";
import futureVideo from "../assets/videos/future.mp4";
import { useState, useEffect } from "react";
import Hero from "../components/Hero";

const videos = {
  products: productsVideo,
  animation: animationVideo,
  future: futureVideo,
};


function ScrollStory() {

  // state
  const [currentVideo, setCurrentVideo] = useState(heroVideo);
  const [activeSection, setActiveSection] = useState("hero");
  const buttonClass =
    "mt-10 px-8 py-4 rounded-full transition-all duration-300";
  const activeIndicator =
    "scale-x-3 bg-cyan-400 shadow-[0_0_12px_#22d3ee]";

  const inactiveIndicator =
    "scale-x-100 bg-white/30 shadow-none";

  const sections = [
    {
      id: "products",
      text: "We build intelligent software that transforms businesses.",
      button: "Learn More",
      buttonClass: "bg-cyan-500 hover:bg-cyan-400",
    },
    {
      id: "animation",
      text: "We create digital stories that inspire audiences.",
      button: "Learn More",
      buttonClass: "bg-cyan-500 hover:bg-cyan-400",
    },
    {
      id: "future",
      text: "Our innovations give people new ways to connect.",
      button: "Coming Soon",
      buttonClass:
        "border border-white/20 bg-white/10 hover:bg-white/20",
    },
  ];



  // effects
  useEffect(() => {

    const handleScroll = () => {
      const scrollY = window.scrollY;

      if (scrollY < window.innerHeight / 2) {
        setCurrentVideo(heroVideo);
        setActiveSection("hero");
      }
    };

    window.addEventListener("scroll", handleScroll);
    const sections = document.querySelectorAll("[data-video]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          const id = entry.target.id;

            if (videos[id]) {
              setCurrentVideo(videos[id]);
              setActiveSection(id);
            }

        });
      },

      {
        threshold: 0.6,
      }
       
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="relative text-white ">
      <div className="fixed inset-0 z-0">
        <video
          key={currentVideo}
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={currentVideo} type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-black/50"></div>

        <div className="hidden lg:flex fixed right-10 top-1/2 -translate-y-1/2 z-20 flex-col gap-2">
          {["hero", "products", "animation", "future"].map((section) => (
            <div
              key={section}
              className={`h-4 w-[2px] rounded-full transition-all duration-500 origin-center ${
                activeSection === section
                  ? activeIndicator
                  : inactiveIndicator
              }`}
            />
          ))}       
        </div>

      </div>

      {/* HERO */}
      <Hero />

      {sections.map((item) => (
        <section
          key={item.id}
          id={item.id}
          data-video
          className="relative h-screen"
        >
          <div className="z-10 h-full flex items-center justify-center">
            <div className="z-10 text-center max-w-4xl px-6">
              <p className="text-3xl md:text-5xl lg:text-6xl font-light leading-tight">
                {item.text}
              </p>

              <button
                className={`mt-10 px-8 py-4 rounded-full transition-all duration-300 ${item.buttonClass}`}
              >
                {item.button}
              </button>
            </div>
          </div>
        </section>
      ))}

    </div>
  );
}


export default ScrollStory;