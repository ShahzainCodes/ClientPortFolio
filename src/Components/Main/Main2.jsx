import React from "react";
import { Link } from "react-router-dom";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { motion } from "framer-motion";
const Main2 = () => {
  return (
    <div className="w-full  bg-[#ffffff]">
      <div className="main2-cont1 flex">
        <div className=" flex flex-col items-center justify-center w-[80%] ">
          <motion.div
            initial={{
              x: -100,
            }}
            whileInView={{
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.5,
              ease: "linear",
            }}
            className="main2-text-cont gap-2 flex flex-col w-[80%] items-start justify-center"
          >
            <p className=" text-[#d26e5b] text-sm  uppercase">who we are</p>
            <h1 className="text-4xl">
              We’re an impact-driven eCommerce agency.
            </h1>
            <span className="text-lg ">
              We bring together innovative designs, pixel perfect development
              and data driven strategy to create a boutique experience at
              enterprise scale.
            </span>
            <Link className="w-full flex items-center text-[#9c9c9c]" to={"/"}>
              About Us{" "}
              <MdOutlineKeyboardArrowRight className="about-right-arrow text-3xl" />
            </Link>
          </motion.div>
        </div>
        <div className="main2-img  w-full  flex overflow-x-hidden  relative">
          <div className="w-full">
            {" "}
            <div style={{ display: "flex", justifyContent: "flex-end" }}>
              <img
                src="https://cdn.prod.website-files.com/612ca2a103cd4b980c51550f/612e142d8250ff2e8ff6f800_about-1.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="w-full">
            {" "}
            <img
              className=""
              src="https://cdn.prod.website-files.com/612ca2a103cd4b980c51550f/612e144c512978e65fdef996_about-2.jpg"
              alt=""
            />
          </div>
          <motion.div
            initial={{
              right: 0,
            }}
            whileInView={{
              right: 1000,
            }}
            viewport={{
              once: true,
              margin: "-10% 0px -10% 0px",
            }}
            transition={{
              duration: 1,
              ease: "easeInOut",
              delay: 0.4,
            }}
            className="absolute  top-[0%] right-0 w-full bg-white h-full"
          ></motion.div>
        </div>
      </div>
    </div>
  );
};

export default Main2;
