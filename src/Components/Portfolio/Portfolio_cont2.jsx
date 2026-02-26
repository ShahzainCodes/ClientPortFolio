import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
const Portfolio_cont2 = () => {
  return (
    <div id="portfolio2" className="w-full">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 1,
          ease: "easeOut",
        }}
        viewport={{ once: true }}
        className="portfolio-cont2  portfolio-cont2-main-div"
      >
        <div className="flex flex-col gap-3">
          <span className="text-[13px] tracking-[2px] font-medium  text-[#d26e5b] uppercase">
            Latest work
          </span>
          <h1 className="text-4xl  min-w-max tracking-[2px] font-extrabold">
            Our Portfolio
          </h1>
        </div>
        <div>
          <p className="text-2xl w-96 text-[#7d7d7d]">
            We work with our clients to deliver creative solutions that drive
            engagement.
          </p>
        </div>
        <div className="w-full cursor-pointer-div">
          <Link to={"/"} className="float-right">
            <button className="cursor-pointer transition-all ease-in-out duration-150 hover:bg-[#bb533f] portolio-cont2-btn text-white  uppercase bg-[#d36e5c] text-[13px]">
              View all work
            </button>
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default Portfolio_cont2;
