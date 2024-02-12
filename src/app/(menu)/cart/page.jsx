'use client';

import React, { useState } from 'react';

export default function Cart() {
  const [count, setCount] = useState(1);

  const addCount = () => {
    setCount(count + 1);
  };

  const minCount = () => {
    setCount(count - 1);
  };

  return (
    <div className='px-5'>
      {/* <p>This is Cart page</p> */}
      <h4 className='text-2xl text-center'>My Cart</h4>
      <div className='mt-10'>
        <div className='card flex justify-between my-4'>
          <div className='flex gap-x-4'>
            <div className='my-auto h-[84px] w-[84px] bg-[#D9D9D9] rounded-lg'></div>
            <div className='text-sm my-auto'>
              <p className='font-semibold'>Product Name</p>
              <p className='mt-1 text-[#797979]'>Rp12.000/pack</p>
              <p className='mt-3 font-bold'>Rp120.000</p>
            </div>
          </div>
          <div className='flex gap-x-2 my-auto'>
            <button className='h-6 w-6 rounded-lg bg-[#EDEDED]' onClick={minCount}>
              -
            </button>
            <p className=''>{count}</p>
            <button className='h-6 w-6 rounded-lg bg-[#FFD600]' onClick={addCount}>
              +
            </button>
          </div>
        </div>
        <hr />
        <div className='card flex justify-between my-4'>
          <div className='flex gap-x-4'>
            <div className='my-auto h-[84px] w-[84px] bg-[#D9D9D9] rounded-lg'></div>
            <div className='text-sm my-auto'>
              <p className='font-semibold'>Product Name</p>
              <p className='mt-1 text-[#797979]'>Rp12.000/pack</p>
              <p className='mt-3 font-bold'>Rp120.000</p>
            </div>
          </div>
          <div className='flex gap-x-2 my-auto'>
            <button className='h-6 w-6 rounded-lg bg-[#EDEDED]'>-</button>
            <p className=''>10</p>
            <button className='h-6 w-6 rounded-lg bg-[#FFD600]'>+</button>
          </div>
        </div>
        <hr />
        <div className='card flex justify-between my-4'>
          <div className='flex gap-x-4'>
            <div className='my-auto h-[84px] w-[84px] bg-[#D9D9D9] rounded-lg'></div>
            <div className='text-sm my-auto'>
              <p className='font-semibold'>Product Name</p>
              <p className='mt-1 text-[#797979]'>Rp12.000/pack</p>
              <p className='mt-3 font-bold'>Rp120.000</p>
            </div>
          </div>
          <div className='flex gap-x-2 my-auto'>
            <button className='h-6 w-6 rounded-lg bg-[#EDEDED]'>-</button>
            <p className=''>10</p>
            <button className='h-6 w-6 rounded-lg bg-[#FFD600]'>+</button>
          </div>
        </div>
        <hr />
        <div className='card flex justify-between my-4'>
          <div className='flex gap-x-4'>
            <div className='my-auto h-[84px] w-[84px] bg-[#D9D9D9] rounded-lg'></div>
            <div className='text-sm my-auto'>
              <p className='font-semibold'>Product Name</p>
              <p className='mt-1 text-[#797979]'>Rp12.000/pack</p>
              <p className='mt-3 font-bold'>Rp120.000</p>
            </div>
          </div>
          <div className='flex gap-x-2 my-auto'>
            <button className='h-6 w-6 rounded-lg bg-[#EDEDED]'>-</button>
            <p className=''>10</p>
            <button className='h-6 w-6 rounded-lg bg-[#FFD600]'>+</button>
          </div>
        </div>
        <hr />
      </div>
      <div className='mt-10 flex justify-between'>
        <div className='my-auto'>
          <p className='text-sm'>Total</p>
          <p className='font-bold text-xl'>Rp480.000</p>
        </div>
        <div className='my-auto'>
          <button className='py-2 px-4 font-semibold bg-yellow-300 hover:bg-yellow-primary rounded-lg'>Checkout</button>
        </div>
      </div>
    </div>
  );
}
