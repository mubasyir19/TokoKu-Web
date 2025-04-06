import useFetchProduct from "@/hooks/Product/useFetchProduct";
import React from "react";
import ProductItem from "../molecules/ProductItem";
import { formatHarga } from "@/helpers/utils";
import SkeletonProduct from "./SkeletonProduct";

export default function ListProduct() {
  const { dataProduct, loading, error } = useFetchProduct();

  if (loading) return <SkeletonProduct count={4} />;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <section className="mx-4 mb-20 mt-5 grid grid-cols-2 justify-items-center gap-5">
      {dataProduct.map((product) => (
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
