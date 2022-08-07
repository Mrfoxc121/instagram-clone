import React from "react";
import { SearchIcon, PlusCircleIcon } from "@heroicons/react/outline";
import { HomeIcon } from "@heroicons/react/solid";
import Image from "next/image";

export default function Header() {
  return (
    <div className="sticky shadow-sm border-b top-0">
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
          <input
            type="text"
            placeholder="Search"
            className="bg-gray-50 pl-10 border-gray-500 text-sm rounded-md focus:ring-black focus:border-black"
          />
        </div>

        {/* right */}
        <div className="flex space-x-4 items-center">
          <HomeIcon className="hidden md:inline-flex h-7 cursor-pointer hover:scale-125 transition-transform duration-200 ease-out" />
          <PlusCircleIcon className="h-7 cursor-pointer hover:scale-125 transition-transform duration-200 ease-out" />
          <img
            src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=1600"
            className="h-10 w-10 rounded-full cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
}
