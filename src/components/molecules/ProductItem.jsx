import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function ProductItem({ id, name, price, unit, image }) {
  return (
    <div className="card-product">
      <Image
        height={144}
        width={176}
        alt="product-image"
        loading="lazy"
        src={image}
        className="h-36 w-44 rounded-lg object-cover"
        unoptimized
      />
      <div className="mt-2">
        {/* <Link href={`/product/${name.replace(/ /g, "-")}`}> */}
        <Link href={`/product/${id}`}>
          <p className="line-clamp-1 text-sm">{name}</p>
        </Link>
        <p className="mt-1 text-xs font-semibold">
          {price} / <span>{unit}</span>
        </p>
      </div>
    </div>
  );
}
