import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function Profile() {
  return (
    <div className='px-5'>
      {/* <p>This is Profile Page</p> */}
      <h4 className='text-2xl text-center'>Profile</h4>
      <div className='mt-12 text-center w-60 mx-auto'>
        <Image
          src='/images/profile.png'
          width={100}
          height={100}
          className='mx-auto rounded-full'
          alt='image profile'
        />
        <p className='font-semibold mt-4'>Mahdy Mubasyir</p>
        <p className='text-xs mt-2 text-[#ABABAB]'>Jl. Kemangsari 1, gg.H.Wahab 1 no.36A, Jatibening Baru, Bekasi</p>
      </div>
      <div className='list-menu mt-10'>
        <div className='menu flex justify-between my-4'>
          <div className='my-auto flex'>
            <div className='w-8'>
              <Image src='/icons/detail-profile.svg' width={24} height={24} className='mx-auto' alt='icon-menu' />
            </div>
            <p className='ml-2'>Your Profile</p>
          </div>
          <div className='my-auto'>
            <Link href='#'>
              <Image src='/icons/arrow.svg' width={7} height={14} alt='icon-menu' />
            </Link>
          </div>
        </div>
        <hr />
        <div className='menu flex justify-between my-4'>
          <div className='my-auto flex'>
            <div className='w-8'>
              <Image src='/icons/setting.svg' width={24} height={24} className='mx-auto' alt='icon-menu' />
            </div>
            <p className='ml-2'>Setting</p>
          </div>
          <div className='my-auto'>
            <Link href='#'>
              <Image src='/icons/arrow.svg' width={7} height={14} alt='icon-menu' />
            </Link>
          </div>
        </div>
        <hr />
        <div className='menu flex justify-between my-4'>
          <div className='my-auto flex'>
            <div className='w-8'>
              <Image src='/icons/help-center.svg' width={10} height={24} className='mx-auto' alt='icon-menu' />
            </div>
            <p className='ml-2'>Help Center</p>
          </div>
          <div className='my-auto'>
            <Link href='#'>
              <Image src='/icons/arrow.svg' width={7} height={14} alt='icon-menu' />
            </Link>
          </div>
        </div>
        <hr />
        <div className='menu flex justify-between my-4'>
          <div className='my-auto flex'>
            <div className='w-8'>
              <Image src='/icons/privacy.svg' width={22} height={24} className='mx-auto' alt='icon-menu' />
            </div>
            <p className='ml-2'>Privacy Policy</p>
          </div>
          <div className='my-auto'>
            <Link href='#'>
              <Image src='/icons/arrow.svg' width={7} height={14} alt='icon-menu' />
            </Link>
          </div>
        </div>
        <hr />
        <div className='menu flex justify-between my-4'>
          <div className='my-auto flex'>
            <div className='w-8'>
              <Image src='/icons/logout.svg' width={24} height={24} className='mx-auto' alt='icon-menu' />
            </div>
            <p className='ml-2'>Logout</p>
          </div>
          <div className='my-auto'>
            <Link href='#'>
              <Image src='/icons/arrow.svg' width={7} height={14} alt='icon-menu' />
            </Link>
          </div>
        </div>
        <hr />
      </div>
    </div>
  );
}
