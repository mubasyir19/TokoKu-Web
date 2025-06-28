import { formatHarga } from "@/helpers/utils";
import Image from "next/image";

export default function OrderCard({
  productName,
  subTotalProduct,
  quantityProduct,
  photoProduct,
}) {
  return (
    <>
      <div className="flex items-center justify-between">
        <div className="flex w-3/4 items-center gap-3">
          <Image
            src={photoProduct}
            width={100}
            height={100}
            alt="photo product"
            className="size-16"
            unoptimized
          />
          <div className="">
            <p className="line-clamp-1 text-base font-semibold text-black">
              {productName}
            </p>
            <p className="mt-1 text-sm text-black">
              Quantity : {quantityProduct}
            </p>
          </div>
        </div>
        <p className="text-base font-semibold text-black">
          {formatHarga(subTotalProduct)}
        </p>
      </div>
    </>
  );
}
