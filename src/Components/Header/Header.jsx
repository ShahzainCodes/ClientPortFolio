import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { CiMenuBurger } from "react-icons/ci";
// Assets
import Logo from "../Logo";

const Header = () => {
  const [navblack, setnavblack] = useState(false);
  const [navOpen, setnavOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop;
      const scrollHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scrollPercentage = (scrollTop / scrollHeight) * 100;

      setnavblack(scrollPercentage > 10); // Change navbar color after 10% scroll
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`header fixed w-full z-[9999] transition-colors duration-300 ${
        navblack ? "bg-black" : ""
      }`}
    >
      <nav className="flex items-center w-full h-16 py-5 border border-[#dbdce298] text-white justify-between">
        <div className="logo pl-5">
          <Logo />
        </div>
        <div className="nav-tags hidden md:flex gap-5 uppercase text-sm">
          {["Home", "About", "Contact"].map((item, index) => (
            <Link key={index} className="h-16 flex items-center" to={"/"}>
              {item}
            </Link>
          ))}
        </div>
        <div></div>
        <button
          onClick={() => setnavOpen(!navOpen)}
          className="menu-nav-btn md:hidden absolute right-10 text-2xl"
        >
          <CiMenuBurger />
        </button>
      </nav>

      {/* Mobile Menu Animation */}
      <AnimatePresence>
        {navOpen && (
          <motion.div
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            exit={{ y: -100 }}
            transition={{
              duration: 0.4,
              ease: "easeInOut",
              type: "spring",
              stiffness: 100,
            }}
            className="mt-2 shadow-lg bg-black overflow-hidden"
          >
            <nav className="flex flex-col">
              {["Home", "About", "Contact"].map((item, index) => (
                <Link
                  key={index}
                  to={"/"}
                  className="h-16 flex items-center px-6 w-full text-white border-b border-gray-600 hover:bg-gray-700 transition-colors duration-200"
                >
                  {item}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Header;
