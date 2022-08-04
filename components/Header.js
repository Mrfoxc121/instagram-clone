import React from "react";
import { input } from "@tailwindcss/forms";
import { SearchIcon } from "@heroicons/react/outline";
import Image from "next/image";

export default function Header() {
  return (
    <div className="flex justify-between items-center max-w-7xl mx-4 xl:mx-auto">
      {/* left */}
      <div className="cursor-pointer h-24 w-24 relative hidden lg:inline-grid">
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1200px-Instagram_logo.svg.png"
          layout="fill"
          className="object-contain"
        />
      </div>
      <div className="cursor-pointer h-24 w-10 relative  lg:hidden">
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/9/95/Instagram_logo_2022.svg"
          layout="fill"
          className="object-contain"
        />
      </div>
      {/* middle */}
      <div className="relative">
        <div className="absolute top-1.5 left-2 mt-1">
            <SearchIcon className="h-5 text-gray-500 " />
        </div>
        <input type="text" placeholder="Search" className="bg-gray-50 pl-10 border-gray-500 text-sm rounded-md focus:ring-black focus:border-black"/>
      </div>

      {/* right */}
      <h1>right side</h1>
    </div>
  );
}
