import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function CategoryItem({ name, icon, link }) {
  const defaultWidth = 24;
  const imageWidth = icon === 'cleaning-aid' ? 12 : defaultWidth;

  return (
    <Link href={`/category/${link}`} className='mx-auto'>
      <div className='cat-sembako'>
        <div className='h-16 w-16 bg-[#F6F5D7] flex justify-center items-center rounded-full'>
          <Image src={`/icons/${icon}.svg`} height={24} width={imageWidth} alt='icon' />
        </div>
        <p className='text-xs text-center'>{name}</p>
      </div>
    </Link>
  );
}
