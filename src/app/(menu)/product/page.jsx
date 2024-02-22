'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';

export default function Product() {
  const router = useRouter();

  return (
    <section className='relative h-screen mb-40'>
      <div className='absolute inset-x-0 top-0 left-5 right-5 flex justify-between'>
        <button
          onClick={() => router.back()}
          className='my-auto p-2 h-10 w-10 flex justify-center items-center rounded-full bg-black'
        >
          <Image src='/icons/arrow-left.svg' height={16} width={16} alt='button-back' />
        </button>
        <h3 className='py-2 my-auto text-center text-xl'>Product Detail</h3>
        <div className='w-10 h-10'></div>
      </div>
      <div className='h-[400px] w-full bg-slate-300'>{/* <p className=''>test</p> */}</div>
      <div className='p-5'>
        <div className='head'>
          <p className='text-[#999999] text-sm'>Buah & Sayur</p>
          <p className='text-lg font-semibold'>Bayam Merah Hidroponik</p>
        </div>
        <div className='desc mt-7'>
          <p className='font-medium'>Description</p>
          <p className='mt-1 text-sm text-[#999999] text-justify'>
            Lorem ipsum dolor sit amet consectetur. Egestas id nec lacus dictum sodales auctor nunc egestas dapibus.
            Fringilla congue pellentesque porta.`
          </p>
        </div>
        <div className='mt-7 mb-10 price'>
          <p>
            <span className='font-semibold text-xl'>Rp10.000</span>
            <span className='text-[#999999] '> / 250gram</span>
          </p>
        </div>
        <button className='w-full py-2 bg-black text-[#FFD600] rounded-full'>+ Add to cart</button>
      </div>
    </section>
  );
}
