import React from "react";
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="footer block  text-white">
      <div className="footer-cont block">
        <div className="footer-grid ">
          <div className="footer-tag1">
            <h3 className="capitalize text-lg">address</h3>
            <div className="tags">
              44 Cherry Banks,
              <br /> Bristol <br /> BS16 7HZ <br /> United Kingdom <br />‍
              <div>
                P: +44 7455 167 999 <br /> E: hello@webcraftsmith.com
              </div>
            </div>
          </div>
          <div className="footer-tag2">
            <h3 className="capitalize text-lg">Quick Links</h3>
            <div className="tags flex flex-col gap-0">
              {" "}
              <a href="">Home</a>
              <a href="">About</a>
              <a href="">Works</a>
              <a href="">Image Licensing</a>
            </div>
          </div>
          <div className="footer-tag3">
            <h3 className="capitalize text-lg">Keep Connetcted</h3>
            <div className="tags social-tags flex gap-5">
              <a
                href=""
                className="w-8  flex items-center relative justify-center h-8"
              >
                <FaFacebookF />
              </a>
              <a
                href=""
                className="w-8  flex items-center relative justify-center h-8"
              >
                <FaInstagram />
              </a>
              <a
                href=""
                className="w-8  flex items-center relative justify-center h-8"
              >
                <FaTwitter />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
