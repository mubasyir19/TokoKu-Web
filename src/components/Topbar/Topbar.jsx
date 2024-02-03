'use client';

import { Expletus_Sans } from 'next/font/google';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

const expletus = Expletus_Sans({ subsets: ['latin'] });

export default function Topbar() {
  const [hasScrolled, setHasScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setHasScrolled(true);
    } else {
      setHasScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      className={`fixed top-0 max-w-md mx-auto z-10 inset-x-0 flex justify-between px-4 py-3 bg-yellow-300 rounded-b-xl ${
        hasScrolled ? 'shadow-lg transition-all' : 'transition-all'
      }`}
    >
      <h1 className={`my-auto font-semibold text-xl ${expletus.className}`}>TokoKu</h1>
      {/* <Image src='/assets/karmus-logo.png' className='w-28 h-20' width={500} height={500} alt='logo' /> */}
      <div className='my-auto cursor-pointer'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth={1.5}
          stroke='currentColor'
          className='w-6 h-6'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z'
          />
        </svg>

        {/* <Image src='/assets/ic-search.png' className='h-4 w-4' width={24} height={24} alt='search' /> */}
      </div>
    </div>
  );
}
