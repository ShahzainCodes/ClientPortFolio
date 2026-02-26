import React from "react";
import { motion } from "framer-motion";

const TextSlider = () => {
  return (
    <div className="text-slider  w-full overflow-hidden relative">
      <motion.div
        initial={{ x: "25%" }}
        animate={{ x: "-100%" }}
        transition={{
          duration: 40,
          repeat: Infinity,
          ease: "linear",
        }}
        className="text-slider-cont absolute top-[30%] text-9xl flex whitespace-nowrap w-max gap-10 uppercase"
      >
        <h1>want to work with us ?</h1>
        <h1>want to work with us ?</h1>
        <h1>want to work with us ?</h1>
        <h1>want to work with us ?</h1>
      </motion.div>
    </div>
  );
};

export default TextSlider;
