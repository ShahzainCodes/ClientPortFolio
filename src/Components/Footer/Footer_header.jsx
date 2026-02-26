import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CiMenuBurger } from "react-icons/ci";
// Assets
import Logo from "../Logo";
const Footer_header = () => {
  return (
    <div className="header w-full">
      <nav className="flex items-center w-full h-16     text-white  justify-between">
        <div className="logo pl-5">
          <Logo />
        </div>
        <div className="nav-tags footer-nav-tags flex gap-5  uppercase text-sm">
          <Link className="h-16 flex items-center" to={"/"}>
            Home
          </Link>

          <Link className="h-16 flex items-center" to={"/"}>
            About
          </Link>
          <Link className="h-16 flex items-center" to={"/"}>
            Contact
          </Link>
        </div>
        <div></div>
      </nav>
    </div>
  );
};

export default Footer_header;
