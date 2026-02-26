import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollAnimtaion from "../../assets/scrollerAnimation.json";
import Lottie from "react-lottie-player";
const texts = ["go custom", "Convert more", "launch", "migrate"];

const Main = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 2500); // Change text every 2.5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      id="main"
      className="flex flex-col items-center relative justify-center min-h-screen bg-gray-900"
    >
      <motion.div
        animate={{
          y: [-100, 0],
        }}
        transition={{
          duration: 0.5,
        }}
        className="main-cont flex   flex-col items-center w-full"
      >
        <h4 className="uppercase text-white tracking-[4px] w-full text-center">
          design & development for innovative brands
        </h4>
        <h1 className="text-8xl font-semibold tracking-[3px] text-center leading-20 text-white">
          We help ecom <br /> businesses
        </h1>

        {/* ✅ Animated Text Transition Section */}
        <div className="relative flex flex-col items-center  slider w-full overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={index} // Forces re-render when index changes
              className="motion-tags absolute text-center lowercase text-8xl text-white leading-11 font-semibold"
              initial={{ opacity: 0, y: -40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 40 }}
              transition={{ duration: 0.7, ease: "easeInOut" }}
            >
              {texts[index]}
            </motion.div>
          </AnimatePresence>
        </div>

        <p className="text-2xl w-[60%] text-center  text-white">
          We deliver robust and conversion-driven E-Commerce stores that save
          merchants time and stress.
        </p>

        <div className="main-btns flex gap-3 uppercase">
          <button className="uppercase text-white outline-none bg-[#d36e5c] hover:bg-[rgb(224,110,94)] transition-all ease-in-out duration-150 cursor-pointer">
            DISCUSS A PROJECT
          </button>
          <button className="uppercase text-sm bg-[#ffffff] outline-none hover:bg-[#ddb59b] transition-all ease-in-out hover:text-white cursor-pointer duration-300 text-[#c67564]">
            View our work
          </button>
        </div>
      </motion.div>
      <div className="scroll-animation-svg flex items-center justify-center">
        <Lottie loop animationData={ScrollAnimtaion} play />
      </div>
    </div>
  );
};

export default Main;
