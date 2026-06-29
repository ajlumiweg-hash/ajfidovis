import heroVideo from "../assets/videos/hero-video.mp4";

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-start">
        
     <video
      autoPlay
      muted
      loop
      playsInline
      className="absolute inset-0 w-full h-full object-cover"
     >
       <source src={heroVideo} type="video/mp4" />
     </video> 

      <div className="absolute inset-0 bg-black/45"></div>


     <div className="relative z-10 h-screen flex items-center w-full px-6 md:px-12 xl:px-24">
       
        <div className="w-full max-w-5xl">

          <h1 
            className="text-white font-light leading-[0.95]"
            style={{
              fontSize: "clamp(3rem, 7vw, 10rem)",
            }}
          >
            Building The
            <br />
            <span className="text-blue-500 font-bold"> Future</span>
          </h1>



          <p  
              className="text-gray-300 mt-6 max-w-xl leading-relaxed"
              style={{
                fontSize: "clamp(1rem, 1.6vw, 1.9rem)",
              }}
          >
            We build intelligent software, AI products,
            cloud solutions and future technologies
            for businesses around the world.
          </p>



          <div className="flex flex-col sm:flex-row gap-4 mt-10">
            <button
              className="bg-blue-600 hover:bg-blue-700 rounded-full text-white font-semibold shadow-lg"
              style={{
                padding: "clamp(0.8rem, 1vw, 1.2rem) clamp(1.5rem, 2vw, 3rem)",
                fontSize: "clamp(1rem, 2vw, 2.2rem)",
              }}
            >
              Explore Services
            </button>

            <button
              className="border border-white/40 rounded-full text-white hover:bg-white hover:text-black transition"
              style={{
                padding: "clamp(0.8rem, 1vw, 1.2rem) clamp(1.5rem, 2vw, 3rem)",
                fontSize: "clamp(1rem, 2vw, 2.2rem)",
              }}
            >
              Contact Us
            </button>
          </div>
        </div>


      </div>
    </section>
  );
}

export default Hero;