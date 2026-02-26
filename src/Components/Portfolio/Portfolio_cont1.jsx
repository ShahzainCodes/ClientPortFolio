import React from "react";
import { Link } from "react-router-dom";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { motion } from "framer-motion";

const PortfolioCont1 = () => {
  let portfolioData = [
    {
      img: "https://cdn.prod.website-files.com/612ca2a103cd4b980c51550f/612e3f4395d06c40ca594007_icons8-hand-240.png",
      title: "Heavy Design Focus",
      desc: "We focus on creating sales-driven designs that remove all friction on mobile purchases",
    },
    {
      img: "https://cdn.prod.website-files.com/615f2dd1087f140040c0abde/620f98483f4e7276a3ea0ba2_noun-development-1853151-D88372.svg",
      title: "Development",
      desc: "We develop pixel-perfect Shopify stores that are responsive across all devices.",
    },
    {
      img: "https://cdn.prod.website-files.com/612ca2a103cd4b980c51550f/612e3f4395d06c40ca594007_icons8-hand-240.png",
      title: "Optimization",
      desc: "All stores we make are optimized to be as fast as possible and SEO-friendly.",
    },
  ];

  const extraContent = {
    custom: true,
    component: (
      <motion.div
        initial={{ opacity: 0, scale: 0.7 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 1,
          ease: "linear",
        }}
        viewport={{
          once: true,
        }}
        className="flex flex-col gap-4 items-start w-[245px] justify-items-start"
      >
        <span className="text-[14px] font-[600] leading-3 tracking-[3px] uppercase text-[#d26e5b]">
          what we offer
        </span>
        <h3 className="text-[40px] leading-10 font-bold">
          Giving shape to your idea, product, and brand.
        </h3>
        <Link className="uppercase flex gap-2 text-[#9c9c9c] text-[13px] items-center">
          view portfolio
          <MdOutlineKeyboardArrowRight />
        </Link>
      </motion.div>
    ),
  };

  portfolioData.splice(1, 0, extraContent);

  return (
    <div className="w-full h-[80vh]" id="portfolio">
      <div className="portfolio-cont flex flex-wrap gap-15 items-center justify-center">
        {portfolioData.map((item, index) =>
          item.custom ? (
            <React.Fragment key={index}>{item.component}</React.Fragment>
          ) : (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                delay: 0.3,
                duration: 0.7,
                ease: "linear",
              }}
              viewport={{ once: true }}
              className="flex flex-col items-start gap-4 w-[245px] justify-items-start"
            >
              <div className="flex items-center gap-3">
                <img className="w-10" src={item.img} alt={item.title} />
                <h3 className="text-lg font-[600]">{item.title}</h3>
              </div>
              <p className="text-[18px] text-[#535353]">{item.desc}</p>
            </motion.div>
          )
        )}
      </div>
    </div>
  );
};

export default PortfolioCont1;
