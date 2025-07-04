"use client";

import ListCategory from "@/components/organism/ListCategory";
import ListProduct from "@/components/organism/ListProduct";
import useAuthPayload from "@/hooks/Auth/useAuthPayload";
import Image from "next/image";

export default function Home() {
  const { payload } = useAuthPayload();
  return (
    <main className="bg-white pb-40">
      <div className="flex justify-between px-4 pt-5">
        <div>
          <p>Selamat Datang</p>
          <h4 className="text-xl font-semibold">{payload?.name}</h4>
        </div>
        {/* <h4 className='text-2xl font-semibold'>Selamat Datang</h4> */}
        <div className="my-auto">
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.94 19.2C12.36 19.2 12.7152 19.0548 13.0056 18.7644C13.296 18.474 13.4408 18.1192 13.44 17.7C13.44 17.28 13.2952 16.9248 13.0056 16.6344C12.716 16.344 12.3608 16.1992 11.94 16.2C11.52 16.2 11.1652 16.3452 10.8756 16.6356C10.586 16.926 10.4408 17.2808 10.44 17.7C10.44 18.12 10.5852 18.4752 10.8756 18.7656C11.166 19.056 11.5208 19.2008 11.94 19.2ZM10.86 14.58H13.08C13.08 13.92 13.1552 13.4 13.3056 13.02C13.456 12.64 13.8808 12.12 14.58 11.46C15.1 10.94 15.51 10.4448 15.81 9.9744C16.11 9.504 16.26 8.9392 16.26 8.28C16.26 7.16 15.85 6.3 15.03 5.7C14.21 5.1 13.24 4.8 12.12 4.8C10.98 4.8 10.0552 5.1 9.3456 5.7C8.636 6.3 8.1408 7.02 7.86 7.86L9.84 8.64C9.94 8.28 10.1652 7.89 10.5156 7.47C10.866 7.05 11.4008 6.84 12.12 6.84C12.76 6.84 13.24 7.0152 13.56 7.3656C13.88 7.716 14.04 8.1008 14.04 8.52C14.04 8.92 13.92 9.2952 13.68 9.6456C13.44 9.996 13.14 10.3208 12.78 10.62C11.9 11.4 11.36 11.99 11.16 12.39C10.96 12.79 10.86 13.52 10.86 14.58ZM12 24C10.34 24 8.78 23.6852 7.32 23.0556C5.86 22.426 4.59 21.5708 3.51 20.49C2.43 19.41 1.5752 18.14 0.9456 16.68C0.316 15.22 0.0008 13.66 0 12C0 10.34 0.3152 8.78 0.9456 7.32C1.576 5.86 2.4308 4.59 3.51 3.51C4.59 2.43 5.86 1.5752 7.32 0.9456C8.78 0.316 10.34 0.0008 12 0C13.66 0 15.22 0.3152 16.68 0.9456C18.14 1.576 19.41 2.4308 20.49 3.51C21.57 4.59 22.4252 5.86 23.0556 7.32C23.686 8.78 24.0008 10.34 24 12C24 13.66 23.6848 15.22 23.0544 16.68C22.424 18.14 21.5692 19.41 20.49 20.49C19.41 21.57 18.14 22.4252 16.68 23.0556C15.22 23.686 13.66 24.0008 12 24Z"
              fill="black"
            />
          </svg>
        </div>
      </div>
      <div className="mt-5 px-4">
        {/* <div className="h-36 w-full rounded-xl bg-[#D9D9D9]"></div> */}
        <Image
          src="/images/banner.png"
          width={390}
          height={149}
          alt="banner"
          className="h-36 w-full rounded-xl"
        />
      </div>
      <ListCategory />
      <ListProduct />
      {/* <div className="mx-4 mb-20 mt-5 grid grid-cols-2 justify-items-center gap-5">
        {products.map((product, index) => (
          <>
            <ProductItem
              key={index}
              name={product.name}
              image={product.image}
              unit={product.unit}
              price={formatHarga(product.price)}
            />
          </>
        ))}
      </div> */}
    </main>
  );
}
