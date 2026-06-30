import heroVideo from "../assets/videos/hero.mp4";
import productsVideo from "../assets/videos/products.mp4";
import animationVideo from "../assets/videos/animation.mp4";
import futureVideo from "../assets/videos/future.mp4";
import { useState, useEffect } from "react";


function ScrollStory() {

  const [currentVideo, setCurrentVideo] = useState(heroVideo);

  useEffect(() => {

    const handleScroll = () => {
      const scrollY = window.scrollY;

      if (scrollY < window.innerHeight / 2) {
        setCurrentVideo(heroVideo);
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
          }

          if (id === "animation") {
            setCurrentVideo(animationVideo);
          }

          if (id === "future") {
            setCurrentVideo(futureVideo);
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
      </div>

      {/* Products */}
      <section id="products" data-video className="relative h-screen snap-start">
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="text-center max-w-4xl px-6">
            <h2 className="text-6xl font-bold">
              Innovative Digital Products
            </h2>

            <p className="mt-6 text-xl text-gray-300">
              AI-powered applications, SaaS platforms, and enterprise
              products built to transform businesses.
            </p>
          </div>
        </div>   
      </section>

      {/* Animation */}
      <section id="animation" data-video className="relative h-screen snap-start">
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="text-center max-w-4xl px-6">
            <h2 className="text-6xl font-bold">
              Creative Animation Studio
            </h2>

            <p className="mt-6 text-xl text-gray-300">
              Stunning 2D & 3D animations, motion graphics, visual
              storytelling, and cinematic experiences.
            </p>
          </div>
        </div>
      </section>

      {/* Future */}
      <section id="future" data-video className="relative h-screen snap-start">
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="text-center max-w-4xl px-6">
            <h2 className="text-6xl font-bold">
              Building The Future
            </h2>

            <p className="mt-6 text-xl text-gray-300">
              Exploring artificial intelligence, robotics, cloud
              technologies, and next-generation innovations.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
}

export default ScrollStory;