import { useState } from "react";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Find Jobs", path: "/jobs" },
    { name: "Companies", path: "/companies" },
    { name: "About", path: "/about" },
  ];

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed w-full top-0 z-50 backdrop-blur-lg bg-white/70 border-b border-gray-200"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
         <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-2xl font-extrabold tracking-tight bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent cursor-pointer"
          >
            HireHub
          </motion.div>

          <div className="hidden md:flex items-center space-x-10 text-gray-700 font-medium">
            
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className="relative cursor-pointer hover:text-black hover:scale-105 transition duration-300"
              >
                {item.name}
              </NavLink>
            ))}

            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              className="bg-linear-to-r from-blue-600 to-purple-600 text-white px-4 py-1 rounded-full"
            >
              login
            </motion.button>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-2xl"
          >
            ☰
          </button>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="md:hidden mt-4 pb-4 space-y-4 font-medium"
            >
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `block ${
                      isActive ? "text-blue-600 font-semibold" : "text-gray-700"
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}

export default Navbar;
