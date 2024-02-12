import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function Login() {
  return (
    <section className='relative flex justify-center items-center h-screen'>
      <div className=''>
        <Image src='/images/illustration.png' width={310} height={187} className='mx-auto' alt='illustration' />
        <form className='flex flex-col mt-10 gap-y-4'>
          <div className='text-center mb-4'>
            <h3 className='text-2xl font-semibold'>Sign In</h3>
            <p className='text-[#887E7E]'>Sign in to continue!</p>
          </div>
          <div className='form-group'>
            <input
              type='text'
              name=''
              className='w-full p-4 border-2 rounded-lg border-[#887E7E]'
              placeholder='Username, email & phone number'
            />
          </div>
          <div className='form-group'>
            <input
              type='password'
              name='password'
              className='w-full p-4 border-2 border-[#887E7E] rounded-lg'
              placeholder='Password'
            />
          </div>
          <div className='form-group'>
            <button type='submit' className='w-full p-4 text-lg font-semibold rounded-lg bg-[#FDE047]'>
              Sign In
            </button>
          </div>
        </form>
        <p className='text-center mt-2'>
          Don&apos;t have account?{' '}
          <Link href='#' className='text-[#FDE047] font-semibold'>
            Sign Up
          </Link>
        </p>
        <div className='absolute bottom-0 inset-x-0 w-full flex gap-x-4 text-xs'>
          <div className='grow w-full h-1 my-auto bg-gradient-to-l from-yellow-primary'></div>
          <div className=''>
            <p>&copy;TokoKu</p>
          </div>
          <div className='grow w-full h-1 my-auto bg-gradient-to-r from-yellow-primary'></div>
        </div>
      </div>
    </section>
  );
}
