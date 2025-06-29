"use client";

import ProductItem from "@/components/molecules/ProductItem";
import SkeletonProduct from "@/components/organism/SkeletonProduct";
import { formatHarga } from "@/helpers/utils";
import useSearchProduct from "@/hooks/Product/useSearchProduct";
import React, { useState } from "react";

export default function Search() {
  const [keyword, setKeyword] = useState("");
  const [searchStarted, setSearchStarted] = useState(false);
  const { results, loading } = useSearchProduct(keyword);

  const handleChange = (e) => {
    const value = e.target.value;
    setKeyword(value);
    setSearchStarted(value.trim().length > 0);
  };

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
          onChange={handleChange}
        />
      </div>

      {loading && (
        <div className="mt-5">
          <SkeletonProduct count={6} />
        </div>
      )}

      {!loading &&
        searchStarted &&
        results.length === 0 &&
        keyword.trim() !== "" && (
          <div className="mt-4 text-center text-black">
            <p>Produk tidak ditemukan</p>
          </div>
        )}

      {!loading && results.length > 0 && (
        <div className="mx-4 mb-20 mt-5 grid grid-cols-2 justify-items-center gap-5">
          {results.map((product) => (
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
      )}
    </div>
  );
}
