"use client";
import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Link from "next/link";

const NavBar = () => {
  return (
    <nav className="w-full bg-white shadow-md">
      {/* Section 1: Top Bar */}
      <div className="bg-[#272343] text-white text-sm py-2">
        <div className="container mx-auto flex justify-between items-center px-4">
          <div>
            <span className="cursor-pointer font-thin">
              Free Shipping On All Orders Over 50$
            </span>
          </div>
          <div className="flex space-x-4">
            <select name="lanuages" id="" className="color-white bg-[#272343] cursor-pointer">
              <option value="english">Eng</option>
              <option value="spanish">Spanish</option>
              <option value="chinese">Chinese</option>
              <option value="french">French</option>
            </select>
            <span className="hover:text-teal-500 cursor-pointer font-thin">
              <Link href={"/Faqs"}>Faqs</Link>
            </span>
            <span className="hover:text-teal-500 cursor-pointer font-thin">
              <Link href={"/NeedHelp"}>Need Help</Link>
            </span>
          </div>
        </div>
      </div>

      {/* Section 2: Middle Bar */}
      <div className="border-b py-4 bg-[#F0F2F3]">
        <div className="container mx-auto flex justify-between items-center px-4">
          {/* Brand Name */}
          <div className="text-3xl font-medium text-black cursor-pointer">
           <img src="comfortylogo.svg" alt="Image Not FOund" className="inline mr-2"/>
            <span className="mt-1">Comforty</span>
          </div>

          {/* Cart */}
          <div className="flex items-center space-x-2 cursor-pointer bg-white p-2 rounded-lg ">
            <AiOutlineShoppingCart size={24} className="text-gray-700 pr-2" />
            <span className="text-sm font-medium bg-white text-gray-600">
              <Link href="/Cart">Cart</Link>
            </span>
            <div className="text-sm font-medium bg-[#007580] p-1 rounded-full text-white">
              <span className="relative">2</span>
            </div>
          </div>
        </div>
      </div>

      {/* Section 3: Bottom Bar */}
      <div className="bg-white py-4">
        <div className="container mx-auto flex justify-between items-center px-5">
          {/* Navigation Links */}
          <ul className="flex space-x-8 text-gray-700 font-medium text-sm">
            <li className="hover:text-teal-500 cursor-pointer text-[#007580]">Home</li>
            <li className="hover:text-teal-500 cursor-pointer">Shop</li>
            <li className="hover:text-teal-500 cursor-pointer">
              <Link href="/Products">Products</Link>
            </li>
            <li className="hover:text-teal-500 cursor-pointer">Pages</li>
            <li className="hover:text-teal-500 cursor-pointer">About</li>
          </ul>

          {/* Contact Information */}
          <div className="flex items-center space-x-2 text-gray-700">
            <span className="text-sm">Contact: </span>
            <span className="font-semibold">(800) 345-0911</span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
