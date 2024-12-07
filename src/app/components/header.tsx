import React from 'react';
import Image from "next/image";

export default function Header() {
  return (
    <div>
      <nav className="w-full flex justify-between items-center py-4 px-4 md:bg-gray-100 lg:bg-gray-100 text-sm">
        {/* Logo Section */}
        <div className="logo">
          <Image
            src="/manlogo.png"
            alt="Logo"
            width={30} // Adjusted size for better visibility
            height={30}
          />
        </div>
        <ul className="hidden md:flex items-center space-x-4">
          <li>
            <a href="#" className="text-lg text-black">
              Find a Store
            </a>
          </li>
          <li>|</li>
          <li>
            <a href="#" className="text-lg text-black">
              Help
            </a>
          </li>
          <li>|</li>
          <li>
            <a href="#" className="text-lg text-black">
              Join Us
            </a>
          </li>
          <li>|</li>
          <li>
            <a href="#" className="text-lg text-black">
              Sign Up
            </a>
          </li>
        </ul>

        
      </nav>

      {/* Mobile Navigation */}
      
        <div className="md:hidden bg-gray-100 p-4">
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-lg text-black">
                Find a Store
              </a>
            </li>
            <li>
              <a href="#" className="text-lg text-black">
                Help
              </a>
            </li>
            <li>
              <a href="#" className="text-lg text-black">
                Join Us
              </a>
            </li>
            <li>
              <a href="#" className="text-lg text-black">
                Sign Up
              </a>
            </li>
          </ul>
        </div>
      
    </div>
  );
}
