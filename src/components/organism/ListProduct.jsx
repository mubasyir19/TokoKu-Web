import useFetchProduct from "@/hooks/Product/useFetchProduct";
import React from "react";
import ProductItem from "../molecules/ProductItem";
import { formatHarga } from "@/helpers/utils";
import SkeletonProduct from "./SkeletonProduct";

export default function ListProduct() {
  const { dataProduct, loading, error } = useFetchProduct();

  if (loading) return <SkeletonProduct count={6} />;
  if (error)
    return (
      <div className="mx-4 mt-5 text-center text-red-500">
        <p>Gagal memuat produk. Silakan coba lagi nanti.</p>
      </div>
    );

  if (!dataProduct || dataProduct.length === 0)
    return (
      <div className="mx-4 mt-5 text-center">
        <p>Produk belum tersedia.</p>
      </div>
    );

  return (
    <section className="mx-4 mb-20 mt-5 grid grid-cols-2 justify-items-center gap-5">
      {[...dataProduct]
        .sort(() => Math.random() - 0.5)
        .map((product) => (
          <ProductItem
            key={product.id}
            id={product.id}
            name={product.name}
            image={product.photo}
            unit={product.unit}
            price={formatHarga(product.price)}
          />
        ))}
    </section>
  );
}
