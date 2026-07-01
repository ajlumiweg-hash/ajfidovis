import heroVideo from "../assets/videos/hero.mp4";
import productsVideo from "../assets/videos/products.mp4";
import animationVideo from "../assets/videos/animation.mp4";
import futureVideo from "../assets/videos/future.mp4";
import { useState, useEffect } from "react";


function ScrollStory() {

  const [currentVideo, setCurrentVideo] = useState(heroVideo);
  const [activeSection, setActiveSection] = useState("hero");

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

          if (id === "products") {
            setCurrentVideo(productsVideo);
            setActiveSection("products");
          }

          if (id === "animation") {
            setCurrentVideo(animationVideo);
            setActiveSection("animation");
          }

          if (id === "future") {
            setCurrentVideo(futureVideo);
            setActiveSection("future");
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
    <div className="relative text-white">
      <div className="fixed inset-0 -z-0">
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

          {/* HERO */}
          <div
            className={`h-4 w-[2px] rounded-full transition-all duration-500 origin-center ${
              activeSection === "hero"
                ? "scale-x-3 bg-cyan-400 shadow-[0_0_12px_#22d3ee]"
                : "scale-x-100 bg-white/30 shadow-none"
            }`}
          />

          {/* PRODUCTS */}
          <div
            className={`h-4 w-[2px] rounded-full transition-all duration-500 origin-center ${
              activeSection === "products"
                ? "scale-x-3 bg-cyan-400 shadow-[0_0_12px_#22d3ee]"
                : "scale-x-100 bg-white/30 shadow-none"
            }`}
          />

          {/* ANIMATION */}
          <div
            className={`h-4 w-[2px] rounded-full transition-all duration-500 origin-center ${
              activeSection === "animation"
                ? "scale-x-3 bg-cyan-400 shadow-[0_0_12px_#22d3ee]"
                : "scale-x-100 bg-white/30 shadow-none"
            }`}
          />

          {/* FUTURE */}
          <div
            className={`h-4 w-[2px] rounded-full transition-all duration-500 origin-center ${
              activeSection === "future"
                ? "scale-x-3 bg-cyan-400 shadow-[0_0_12px_#22d3ee]"
                : "scale-x-100 bg-white/30 shadow-none"
            }`}
          />        

        </div>

      </div>


      

      {/* Products */}
      <section id="products" data-video className="relative h-screen snap-start overflow-hidden">
              
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="relative z-10 text-center max-w-4xl px-6">
            <span className="text-cyan-400 uppercase tracking-[0.3em] text-sm">
              AI Solutions
            </span>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mt-4 leading-tight">
              Innovative Digital Products
            </h2>

            <p className="mt-6 text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
              AI-powered applications, SaaS platforms, and enterprise
              products built to transform businesses.
            </p>
            <div className="mt-10">
              <button className="px-8 py-4 rounded-full bg-cyan-500 hover:bg-cyan-400 transition font-semibold">
                Explore Products
              </button>
            </div>
          </div>
        </div>   
      </section>

      {/* Animation */}
      <section id="animation" data-video className="relative h-screen snap-start overflow-hidden">
     
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="relative z-10 text-center max-w-4xl px-6">
            <span className="text-cyan-400 uppercase tracking-[0.3em] text-sm">
              AJLUMIWEG
            </span>

            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mt-4">
              Animation & Digital Content
            </h2>

            <p className="mt-6 text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
              Creating short animations, visual stories,
              motion graphics and creative digital content
              through our AJLUMIWEG platform.
            </p>

            <div className="mt-10">
              <button className="px-8 py-4 rounded-full bg-cyan-500 hover:bg-cyan-400 transition">
                View Content
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Future */}
      <section id="future" data-video className="relative h-screen snap-start overflow-hidden">
         
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="relative z-10 text-center max-w-4xl px-6">
            <span className="text-cyan-400 uppercase tracking-[0.3em] text-sm">
              Our Vision
            </span>

            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mt-4">
              Exploring What's Next
            </h2>

            <p className="mt-6 text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
              We are continuously exploring emerging
              technologies, creative ideas and innovative
              digital solutions that can shape the future
              of AJFIDOVIS.
            </p>

            <div className="mt-10">
              <button className="px-8 py-4 rounded-full bg-white/10 border border-white/20 hover:bg-white/20 transition">
                Our Vision
              </button>
            </div>
          </div>
        </div>
        <div className="h-32"></div>
      </section>

    </div>
  );
}

export default ScrollStory;