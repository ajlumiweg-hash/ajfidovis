import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/logos/logo.png";

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
    <nav className="fixed top-0 left-0 w-full z-50 ">
      <div className="w-full px-6 lg:px-12 py-4 flex justify-between items-center">

        {/* Logo */}

        <div 
          className="flex items-center"
          style={{
            gap: "clamp(0.4rem, 0.8vw, 1rem)",
          }}     
        >
          <img
            src = {logo}
            alt = "AJFIDOVIS LOGO"
            style={{
              width: "clamp(40px, 4vw, 80px)",
              height: "clamp(40px, 4vw, 80px)",
            }}
          />
          

          <h1
            className="text-white font-extrabold tracking-wide"
            style={{
              fontSize: "clamp(1rem, 2vw, 3rem)",
            }}
          >
            FIDOVIS
          </h1>
        </div>

        {/* Desktop Menu */}
        <ul
          className="hidden lg:flex text-white font-medium"
          style={{
            gap: "clamp(1.5rem, 2vw, 3rem)",
          }}
        >
          {navLinks.map((link) => (
            <li
              key={link}
              className="cursor-pointer hover:text-blue-400 transition duration-300"
              style={{
                fontSize: "clamp(1rem, 1.5vw, 1.8rem)",
              }}
            >
              {link}
            </li>
          ))}
        </ul>

        {/* Login Button */}
        <button
            className="hidden lg:block bg-blue-600 hover:bg-blue-700 rounded-lg text-white transition"
            style={{
              padding: "clamp(0.6rem, 1vw, 1rem) clamp(1.2rem, 2vw, 2rem)",
              fontSize: "clamp(0.9rem, 1vw, 1.1rem)",
            }}
        >
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