import React from "react";
import LogoImg from "../assets/Main/LOGO.png";
const Logo = () => {
  return (
    <div className="logo pl-4">
      <img className="w-14 object-contain object-center" src={LogoImg} alt="" />
    </div>
  );
};

export default Logo;
