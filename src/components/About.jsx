import aboutImage from "../assets/images/about-image.png";

function About() {
  return (
    <section
      className="
      relative z-20
      bg-[#050816]
      rounded-t-[50px]
      shadow-[0_-30px_100px_rgba(0,0,0,0.8)]
      min-h-screen
      pt-8 md:pt-12 xl:pt-20
      "
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 xl:px-16 py-12 md:py-16 xl:py-24">

        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-16 xl:gap-24 items-center">

          {/* Left Content */}
          <div className="max-w-3xl">

            <p className="text-cyan-400 uppercase tracking-[0.3em] text-sm">
              About AJFIDOVIS
            </p>

            <h2 className="text-4xl md:text-5xl xl:text-7xl font-bold mt-6 leading-tight">
              Creating the
              <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
                Future of Digital
              </span>
              Innovation
            </h2>

            <p className="mt-8 text-gray-400 text-lg leading-relaxed max-w-2xl">
              AJFIDOVIS is a technology company focused on
              building intelligent software, AI-powered products,
              modern cloud solutions and immersive digital
              experiences for businesses around the world.
            </p>

            <div className="grid sm:grid-cols-2 gap-8 mt-14">

              <div>
                <h3 className="text-xl font-semibold text-white">
                  Artificial Intelligence
                </h3>

                <p className="text-gray-400 mt-3">
                  Smart automation, machine learning
                  and intelligent business solutions.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white">
                  Software Engineering
                </h3>

                <p className="text-gray-400 mt-3">
                  Scalable web applications,
                  enterprise platforms and SaaS products.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white">
                  Cloud Infrastructure
                </h3>

                <p className="text-gray-400 mt-3">
                  Secure, reliable and future-ready
                  cloud architecture.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white">
                  Creative Studio
                </h3>

                <p className="text-gray-400 mt-3">
                  Branding, animation, visual storytelling
                  and digital experiences.
                </p>
              </div>

            </div>

          </div>

          {/* Right Image */}
          <div className="relative">

            <div className="absolute inset-0 bg-cyan-500/20 blur-[120px] rounded-full"></div>

            <img
              src={aboutImage}
              alt="About AJFIDOVIS"
              className="
                relative
                w-full
                rounded-[32px]
                border
                border-white/10
                shadow-2xl
                hover:scale-[1.02]
                transition-all
                duration-700
              "
            />

          </div>

        </div>

      </div>
    </section>
  );
}

export default About;