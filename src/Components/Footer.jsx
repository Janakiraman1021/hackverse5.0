import React from "react";
import { FaDiscord } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import logo from "../Assests/securedapplogo.png";

const Footer = () => {
  return (
    <footer className="text-gray-700 overflow-x-hidden bg-white dark:bg-[#001938]">
      <div className="mx-10 px-4 sm:px-6 lg:px-8 py-12 border-t border-gray-200">
        <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start space-y-8 lg:space-y-0">
          <div className="flex flex-row items-center sm:items-start">
            <img
              src={logo}
              alt="SecureDApp Logo"
              className="h-12"
            />
            <h1 className="mt-3 ml-1 text-black dark:text-white text-lg font-bold">SecureDApp</h1>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 text-sm">
            <div>
              <h3 className="font-bold text-black dark:text-white text-lg">Product</h3>
              <ul className="mt-4 space-y-2 text-black dark:text-white text-md">
                <li>Solidity Shield Scan</li>
                <li>Secure Watch</li>
                <li>Audit Express</li>
                <li>Secure Trace</li>
                <li>Secure Pad</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-black dark:text-white text-lg">Services</h3>
              <ul className="mt-4 space-y-2 text-black dark:text-white text-md">
                <li>Audit</li>
                <li>Security</li>
                <li>Regulatory Solutions</li>
                <li>Training & Education</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-black dark:text-white text-lg">Company</h3>
              <ul className="mt-4 space-y-2 text-black dark:text-white text-md">
                <li>About Us</li>
                <li>Authors</li>
                <li>Media</li>
                <li>Career</li>
                <li>Contact Us</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-8 flex justify-center lg:justify-start space-x-6">
          <span className="text-black dark:text-white text-3xl hover:text-green-500 dark:hover:text-green-500">
            <FaDiscord />
          </span>
          <span className="text-black dark:text-white text-2xl mt-1 hover:text-green-500 dark:hover:text-green-500">
            <FaTwitter />
          </span>
          <span className="text-black dark:text-white text-2xl mt-1 hover:text-green-500 dark:hover:text-green-500">
            <FaLinkedin />
          </span>
          <span className="text-black dark:text-white text-2xl mt-1 hover:text-green-500 dark:hover:text-green-500">
            <FaTelegram />
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
