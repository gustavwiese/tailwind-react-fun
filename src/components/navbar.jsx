import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

export default function Navbar() {
  const [nav, setNav] = useState(true);

  function handleNav() {
    setNav(!nav);
  }

  return (
    <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white">
      <h1 className="w-full text-3xl font-bold text-[#00df9a]">THIS IS ME.</h1>
      <ul className="hidden md:flex">
        <li className="p-3">Home</li>
        <li className="p-3">Fun</li>
        <li className="p-3">CV</li>
        <li className="p-3">About</li>
        <li className="p-3">Contact</li>
      </ul>
      <div onClick={handleNav} className="block md:hidden">
        {!nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <div
        className={
          !nav
            ? "fixed left-0 top-[2.5%] w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500"
            : "fixed left-[-100%]"
        }
      >
        <h1 className="w-full text-3xl font-bold text-[#00df9a] m-4">THIS IS ME.</h1>
        <ul className="uppercase p-4">
          <li className="p-3 border-b border-b-gray-600">Home</li>
          <li className="p-3 border-b border-b-gray-600">Fun</li>
          <li className="p-3 border-b border-b-gray-600">CV</li>
          <li className="p-3 border-b border-b-gray-600">About</li>
          <li className="p-3">Contact</li>
        </ul>
      </div>
    </div>
  );
}
