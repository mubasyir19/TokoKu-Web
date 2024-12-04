import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function CategoryItem({ name, icon, link }) {
  const defaultWidth = 24;
  const imageWidth = icon === "Cleaning Aid" ? 12 : defaultWidth;

  return (
    <Link href={`/category/${link}`} className="mx-auto">
      <div className="cat-sembako">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#F6F5D7]">
          <Image
            src={`/icons/${icon}.svg`}
            height={24}
            width={imageWidth}
            alt="icon"
          />
        </div>
        <p className="text-center text-xs">{name}</p>
      </div>
    </Link>
  );
}
