import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/logos/logo.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    "Home",
    "Solutions",
    "Products",
    "Technologies",
    "Portfolio",
    "About",
    "Careers",
    "Contacts",
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-black/20 border-b border-white/10">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10 py-4 flex justify-between items-center">

        {/* Logo */}

        <div 
          className="flex items-center shrink-0"
          style={{
            gap: "clamp(0.4rem, 0.8vw, 1rem)",
          }}     
        >
          <img
            src={logo}
            alt="AJFIDOVIS LOGO"
            className="w-10 h-10 md:w-12 md:h-12 xl:w-14 xl:h-14"
          />
          

          <h1 className="text-white font-bold tracking-wide text-lg md:text-xl xl:text-2xl">
            AJFIDOVIS
          </h1>
        </div>

        {/* Desktop Menu */}

        <div className="hidden xl:flex items-center">
          <ul className="flex items-center gap-6 xl:gap-8 text-white text-sm xl:text-base font-medium">
            {navLinks.map((link) => (
              <li
                key={link}
                className="cursor-pointer hover:text-cyan-400 transition duration-300"
              >
                {link}
              </li>
            ))}
          </ul>
        </div>


        {/* GetStarted */}

        <div className="hidden xl:flex items-center gap-3 xl:gap-5 shrink-0">

          <button className="text-white hover:text-cyan-400">
            🌐 EN
          </button>

          <button className="text-white hover:text-cyan-400">
            🌙
          </button>

          <button className="bg-gradient-to-r from-blue-600 to-cyan-500 px-4 md:px-5 xl:px-6 py-2 xl:py-3 rounded-full text-white font-semibold hover:scale-105 transition text-sm xl:text-base">
            Get Started
          </button>

        </div>


        {/* Mobile Menu Button */}
        <button
          className="xl:hidden text-white p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="xl:hidden bg-black/95 backdrop-blur-xl border-t border-white/10">
          <ul className="flex flex-col items-center py-5 gap-4 text-white">
            {navLinks.map((link) => (
              <li key={link}>{link}</li>
            ))}

            <button className="bg-blue-600 px-5 py-2 rounded-lg">
              Get Started
            </button>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;