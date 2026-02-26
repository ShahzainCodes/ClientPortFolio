import React, { useState } from "react";
import { motion } from "framer-motion";
import bodySite from "../../assets/Portfolio/1body.png";
import andreamaack from "../../assets/Portfolio/andreemak.png";
import T1AAuto from "../../assets/Portfolio/T1AAuto.png";
import PerfectPlanner from "../../assets/Portfolio/YourPerfectPlanner.png";
import Gaurdians from "../../assets/Portfolio/Gauridan.png";
import Ellar from "../../assets/Portfolio/Ellar.png";
import Anadreamaak from "../../assets/Portfolio/Anadreamaak.png";
const portfolio_list = [
  {
    img: bodySite,
    title: "1body website",
    desc: "UX/UI Design, Shopify Development, Speed Optimization",
    link: "http://1body.com",
  },
  {
    img: andreamaack,
    title: "Andreamaak",
    desc: "UX/UI Design, Shopify Development, Speed Optimization",
    link: "https://andreamaack.com/pages/bundle-builder",
  },
  {
    img: T1AAuto,
    title: "T1A Auto",
    desc: "UX/UI Design, Shopify Development, Speed Optimization",
    link: "https://yourperfectplanner.com.au/",
  },
  {
    img: PerfectPlanner,
    title: "Your Perfect Planner",
    desc: "UX/UI Design, Shopify Development, Speed Optimization",
    link: "https://yourperfectplanner.com.au/",
  },
  {
    img: Ellar,
    title: "Ellar Easygrids",
    desc: "UX/UI Design, Shopify Development, Speed Optimization",
    link: "https://ellargrids.com/",
  },
  {
    img: Gaurdians,
    title: "Gaurdians",
    desc: "UX/UI Design, Shopify Development, Speed Optimization",
    link: "https://guardianschoice.com/",
  },
  {
    img: Anadreamaak,
    title: "Anadreamaak",
    desc: "UX/UI Design, Shopify Development, Speed Optimization",
    link: "https://andreamaack.com/pages/fragrance-day",
  },
];

const Portfolio_cont3 = () => {
  const [hoverIndex, setHoverIndex] = useState(null); // Track which card is hovered

  return (
    <div className="portfolio-list ">
      {portfolio_list.map((item, index) => (
        <motion.div
          key={index}
          className="list-item relative overflow-x-hidden"
          onHoverStart={() => setHoverIndex(index)} // Set the index of hovered card
          onHoverEnd={() => setHoverIndex(null)} // Reset on hover end
        >
          <a href={item.link} target="_blank">
            <div className="portfolio-img relative overflow-hidden">
              <img src={item.img} alt="" />
              <motion.span
                initial={{ top: "-40px" }}
                animate={{ top: hoverIndex === index ? "0px" : "-32px" }}
                transition={{ duration: 0.48, ease: "linear" }}
                className="span-top w-full h-5 absolute -top-10 right-0 bg-white"
              ></motion.span>
              <motion.span
                initial={{ top: "-40px", right: "-27px" }}
                animate={{
                  top: hoverIndex === index ? "0px" : "-32px",
                  right: hoverIndex === index ? "0px" : "-27px",
                }}
                transition={{ duration: 0.48, ease: "linear" }}
                className="span-top w-5 h-full absolute -top-10 -right-8 bg-white"
              ></motion.span>
              <motion.span
                initial={{ top: "-40px", left: "-27px" }}
                animate={{
                  top: hoverIndex === index ? "0px" : "-32px",
                  left: hoverIndex === index ? "0px" : "-24px",
                }}
                transition={{ duration: 0.48, ease: "linear" }}
                className="span-top w-3 h-full absolute -top-10 -left-6 bg-white"
              ></motion.span>
              <motion.span
                initial={{ bottom: "-40px" }}
                animate={{
                  bottom: hoverIndex === index ? "0px" : "-32px",
                }}
                transition={{ duration: 0.48, ease: "linear" }}
                className="span-top w-full h-5 absolute right-0 bottom-0  bg-white"
              ></motion.span>
            </div>
            <div>
              <h3 className="portolio-item-title">{item.title}</h3>
              <p className="portfolio-item-desc text-[#9c9c9c]">{item.desc}</p>
            </div>
            <div className="div-portfolio-abs-bg"></div>
          </a>
          <motion.div
            initial={{ right: 0 }}
            viewport={{ once: true }}
            whileInView={{ right: "100%" }}
            transition={{ delay: 0.3, duration: 0.7, ease: "easeOut" }}
            className="absolute top-0 right-0 h-full w-full bg-white"
          ></motion.div>
        </motion.div>
      ))}
    </div>
  );
};

export default Portfolio_cont3;
