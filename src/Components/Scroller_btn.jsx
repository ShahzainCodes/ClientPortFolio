import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { IoIosArrowUp } from "react-icons/io";

const ScrollerBtn = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop;
      const scrollHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scrollPercentage = (scrollTop / scrollHeight) * 100;

      setIsVisible(scrollPercentage > 10); // Show when scrolled past 30%
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <motion.button
      onClick={scrollToTop}
      initial={{ x: 100 }} // Start off-screen (right side)
      animate={{ x: isVisible ? 0 : 100 }} // Slide in/out from right
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className="scroller-btn cursor-pointer fixed bottom-10 right-5 bg-black text-white shadow-lg "
      style={{ pointerEvents: isVisible ? "auto" : "none" }} // Disable clicks when hidden
    >
      <IoIosArrowUp size={24} />
    </motion.button>
  );
};

export default ScrollerBtn;
