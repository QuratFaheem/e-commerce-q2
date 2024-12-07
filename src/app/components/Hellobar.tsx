import React from 'react';
import Image from "next/image";

export default function Hellobar() {
  return (
        <div className="flex flex-col items-center text-center bg-gray-100">
  <div className="text-lg text-black">
    Hello Nike App
  </div>
  <div className="text-sm mt-2">
    Download the app to access everything Nike. <u>Get Your Great</u>
  </div>
  <div className="relative w-full h-screen">
      {/* Fullscreen Background Image */}
      <Image className="z-0"
        src="/Image.png"
        alt="Landing Background"
        layout="fill"
        objectFit="cover"
        
      />
</div>
</div>
      
  );
}
