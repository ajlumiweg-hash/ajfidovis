import { useState } from "react";
import { Menu, X } from "lucide-react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    "Home",
    "About",
    "Services",
    "Products",
    "Portfolio",
    "Contact",
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#050816]/80 backdrop-blur-md border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold">
            A
          </div>

          <h1 className="text-white text-xl font-bold">
            AJFIDOVIS
          </h1>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-gray-300">
          {navLinks.map((link) => (
            <li
              key={link}
              className="cursor-pointer hover:text-blue-400 transition duration-300"
            >
              {link}
            </li>
          ))}
        </ul>

        {/* Login Button */}
        <button className="hidden md:block bg-blue-600 hover:bg-blue-700 px-5 py-2 rounded-lg text-white transition">
          Login
        </button>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#050816] border-t border-gray-800">
          <ul className="flex flex-col items-center py-5 gap-4 text-white">
            {navLinks.map((link) => (
              <li key={link}>{link}</li>
            ))}

            <button className="bg-blue-600 px-5 py-2 rounded-lg">
              Login
            </button>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;