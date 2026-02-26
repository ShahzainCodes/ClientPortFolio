import React from "react";
import TextSlider from "./TextSlider";
import Footer from "./Footer";
import Header from "../Header/Header";
import Footer_header from "./Footer_header";
const Footer_Layout = () => {
  return (
    <div className="bg-[#11141d]">
      <TextSlider />
      <Footer />
      <Footer_header />
    </div>
  );
};

export default Footer_Layout;
