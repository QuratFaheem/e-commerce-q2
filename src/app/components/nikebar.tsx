import React from 'react';
import Image from "next/image";

export default function Nikebar() {
  return (
    <div className="w-full flex justify-between items-center py-4 md:bg-white text-sm px-4">
      {/* Logo Section */}
      <div className="logo">
        <Image
          src="/vector.png"
          alt="Logo"
          width={30} // Adjust size for better visibility on smaller screens
          height={30}
        />
      </div>

      {/* Navigation List */}
      <ul className="hidden md:flex items-center space-x-6 justify-center flex-grow">
        <li className="text-lg text-black">
          News & Featured
        </li>
        <li className="text-lg text-black">Men</li>
        <li className="text-lg text-black">
          Women
        </li>
        <li className="text-lg text-black">Kids</li>
        <li className="text-lg text-black">
          Sale
        </li>
        <li className="text-lg text-black">SNKRS</li>
      </ul>

      {/* Mobile Menu Icon */}
      <div className="md:hidden">
        <button className="text-black text-lg">
          ☰ {/* Replace this with a proper hamburger menu icon if needed */}
        </button>
      </div>
    </div>
  );
}
