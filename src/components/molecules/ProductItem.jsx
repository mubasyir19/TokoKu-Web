import Link from 'next/link';
import React from 'react';

export default function ProductItem({ name, price }) {
  return (
    <div className='card-product'>
      <div className='w-44 h-36 bg-[#D9D9D9] rounded-lg'></div>
      <div className='mt-2'>
        <Link href='#detailproduct'>
          <p className='text-sm'>{name}</p>
        </Link>
        <p className='mt-1 text-sm font-semibold'>
          {price} <span>/ pack</span>
        </p>
      </div>
    </div>
  );
}
