import React from "react";
import Link from "next/link"; // Update the import for Next.js
import Image from "next/image"; 

export function GridBackgroundDemo() {
  return (
    <div className="h-screen w-full dark:bg-black bg-white dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex flex-col items-center justify-center">
      
      {/* Centered Video Background Effect */}
      <Image
        className="absolute inset-0 w-full h-full object-cover object-center opacity-70 z-0"
        src="/flare.gif" // Replace with the path to your Image file
        alt="Video Background"
        width={1200}
        height={1200}
      ></Image>

      {/* Main Heading */}
      <h1 className="text-6xl sm:text-[15rem] font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-700 to-neutral-400  mt-8 text-center">
        Flare
      </h1>
      <div className="z-10 flex min-h-32 items-center justify-center">
        {/* Other components or content can go here */}
      </div>
    </div>
  );
}
