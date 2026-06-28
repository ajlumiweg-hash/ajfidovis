function Hero() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-[#050816] via-[#0f172a] to-[#1e293b] text-white flex items-center">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">

        {/* Left Side */}
        <div>
          <p className="text-blue-400 font-semibold mb-3">
            AJFIDOVIS
          </p>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Building The
            <span className="text-blue-500"> Future</span>
          </h1>

          <p className="text-gray-300 mt-6 text-lg">
            We build intelligent software, AI products,
            cloud solutions and future technologies
            for businesses around the world.
          </p>

          <div className="flex gap-4 mt-8">
            <button className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-medium transition">
              Explore Services
            </button>

            <button className="border border-white px-6 py-3 rounded-lg hover:bg-white hover:text-black transition">
              Contact Us
            </button>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3"
            alt="Developer"
            className="rounded-3xl shadow-2xl w-full max-w-lg"
          />
        </div>

      </div>
    </section>
  );
}

export default Hero;