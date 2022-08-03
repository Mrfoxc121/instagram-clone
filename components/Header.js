import React from "react";
import Image from "next/image";

export default function Header() {
  return (
    // Left

    <div className="flex justify-between items-center max-w-6xl">
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
      <h1>right side</h1>
    </div>

    // Middle

    // Right
  );
}
