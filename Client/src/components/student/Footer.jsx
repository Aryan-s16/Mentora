import React, { useState } from "react";
import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div>
      <footer className="bg-gray-900 md:px-36 text-left w-full mt-10">
        <div className="flex flex-col md:flex-row items-start px-8 md:px-0 justify-center gap-10 md:gap-32 py-10 border-b border-white/30">
          <div className="flex flex-col md:items-start items-center w-full">
            <img src={assets.logo_dark} alt="logo" />
            <p className="mt-6 text-center sm:flex sm:flex-row sm:justify-center  md:text-left text-sm text-white/80">
              Mentora LMS is built to make learning seamless, accessible, and
              limitless. Whether you're here to gain new skills or to share your
              expertise, we bring students and educators together on one
              powerful platform — turning every moment into an opportunity to
              learn and grow.
            </p>
          </div>
          <div className="flex flex-col md:items-start items-center w-full">
            <h2 className="font-semibold text-white mb-5">Company</h2>
            <ul className="flex md:flex-col w-full justify-between text-sm text-white/80 md:space-y-2">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About us</Link>
              </li>
              <li>
                <Link to="/contact">Contact us</Link>
              </li>
              <li>
                <Link to="">Privacy policy</Link>
              </li>
            </ul>
          </div>
          <div className="hidden md:flex flex-col items-start w-full">
            <h2 className="font-semibold text-white mb-5">
              Subscribe to our newsletter
            </h2>
            <p className="text-sm text-white/80">
              The latest news, articles, and resources, sent to your inbox
              weekly.
            </p>
            <div className="flex items-center gap-2 pt-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="border border-gray-500/30 bg-gray-800 text-gray-500 placeholder-gray-500 outline-none w-64 h-9 rounded px-2 text-sm"
              />
              <button className="bg-blue-600 w-24 h-9 text-white rounded">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        <p className="py-4 text-center text-xs md:text-sm text-white/60">
          Copyright 2025 © Mentora. All Right Reserved.
        </p>
      </footer>
    </div>
  );
};

export default Footer;
