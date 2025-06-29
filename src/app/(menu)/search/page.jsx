"use client";

import ProductItem from "@/components/molecules/ProductItem";
import SkeletonProduct from "@/components/organism/SkeletonProduct";
import { formatHarga } from "@/helpers/utils";
import useSearchProduct from "@/hooks/Product/useSearchProduct";
import React, { useState } from "react";

export default function Search() {
  const [keyword, setKeyword] = useState("");
  const { results, loading } = useSearchProduct(keyword);

  return (
    <div className="px-5 pt-5">
      <h1 className="text-center text-lg font-semibold">
        Find Your Needs Here
      </h1>
      <div className="form-group mt-6">
        <input
          type="text"
          name="search"
          className="w-full rounded-full border-2 border-[#D9D9D9] px-5 py-2.5 text-sm"
          placeholder="Cari produk yang kamu butuhkan"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
        />
      </div>
      {loading && (
        <div className="mt-5">
          <SkeletonProduct count={6} />
        </div>
      )}
      <div className="mx-4 mb-20 mt-5 grid grid-cols-2 justify-items-center gap-5">
        {results?.map((product) => (
          <ProductItem
            key={product.id}
            id={product.id}
            name={product.name}
            image={product.photo}
            unit={product.unit}
            price={formatHarga(product.price)}
          />
        ))}
      </div>
    </div>
  );
}
