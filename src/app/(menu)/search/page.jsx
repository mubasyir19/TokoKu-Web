import React from 'react';

export default function Search() {
  return (
    <div className='px-5'>
      <h1 className='text-2xl font-semibold text-center'>Find Your Needs Here</h1>
      <div className='form-group mt-6'>
        <input
          type='text'
          name=''
          className='w-full px-5 py-2.5 border-2 rounded-full border-[#D9D9D9]'
          placeholder='Cari disini'
        />
      </div>
    </div>
  );
}
