import Link from 'next/link';
import React from 'react';

export default function Register() {
  return (
    <section>
      <div className=''>
        <h2 className='text-2xl text-black font-semibold'>Sign Up</h2>
        <p className='text-[#635C5C]'>create account to continue</p>
      </div>
      <form className='flex flex-col mt-8 gap-y-4'>
        <div className='form-group'>
          <label htmlFor='' className='font-semibold text-lg text-black'>
            Fullname
          </label>
          <input
            type='text'
            name='nama_pelanggan'
            className='w-full p-4 border-2 rounded-lg border-[#887E7E]'
            placeholder='Enter your fullname'
          />
        </div>
        <div className='form-group'>
          <label htmlFor='' className='font-semibold text-lg text-black'>
            Email
          </label>
          <input
            type='email'
            name='email'
            className='w-full p-4 border-2 rounded-lg border-[#887E7E]'
            placeholder='Enter your email'
          />
        </div>
        <div className='form-group'>
          <label htmlFor='' className='font-semibold text-lg text-black'>
            Username
          </label>
          <input
            type='text'
            name='username'
            className='w-full p-4 border-2 rounded-lg border-[#887E7E]'
            placeholder='Enter your username'
          />
        </div>
        <div className='form-group'>
          <label htmlFor='' className='font-semibold text-lg text-black'>
            Phone Number
          </label>
          <input
            type='tel'
            name='no_telepon'
            className='w-full p-4 border-2 rounded-lg border-[#887E7E]'
            placeholder='Enter your phone number'
          />
        </div>
        <div className='form-group'>
          <label htmlFor='' className='font-semibold text-lg text-black'>
            Password
          </label>
          <input
            type='password'
            name='password'
            className='w-full p-4 border-2 border-[#887E7E] rounded-lg'
            placeholder='Enter your password'
          />
        </div>
        <div className='form-group'>
          <label htmlFor='' className='font-semibold text-lg text-black'>
            Confirm Password
          </label>
          <input
            type='password'
            name='confirm_password'
            className='w-full p-4 border-2 border-[#887E7E] rounded-lg'
            placeholder='Enter your password'
          />
        </div>
        <div className='form-group'>
          <button type='submit' className='w-full p-4 text-lg font-semibold rounded-lg bg-[#FDE047]'>
            Sign Up
          </button>
        </div>
      </form>
      <p className='text-center mt-2'>
        Already have account?{' '}
        <Link href='/login' className='text-[#FDE047] font-semibold'>
          Sign In
        </Link>
      </p>
    </section>
  );
}
