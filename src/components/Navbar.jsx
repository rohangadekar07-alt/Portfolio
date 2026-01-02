import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = ["Home", "About", "Projects", "Contact"];

  return (
    <nav className="fixed w-full z-50 backdrop-blur-md bg-white/10 border-b border-white/20">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center text-white">
        
        {/* Logo */}
        <h1 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
          Rohan.dev
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 text-sm">
          {menuItems.map((item) => (
            <li key={item} className="w-24 h-9">
              <button
                className="
                  w-full h-full
                  flex items-center justify-center
                  font-semibold
                  text-white
                  bg-[#0a1f44]
                  border-2 
                  border-blue-300 
                  rounded-lg
                  transition-all duration-300
                  hover:scale-105
                  hover:bg-[#0f2a5f]
                "
              >
                {item}
              </button>
            </li> 
          ))}
        </ul>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden bg-black/60 backdrop-blur-lg border-t border-white/10 px-6 py-4 space-y-4 text-center">
          {menuItems.map((item) => (
            <li key={item}>
              <button
                onClick={() => setIsOpen(false)}
                className="
                  w-full py-2
                  font-semibold
                  text-white
                  bg-[#0a1f44]
                  border-2 border-gray-400
                  rounded-lg
                  transition-all duration-300
                  hover:scale-105
                "
              >
                {item}
              </button>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
