'use client';

import { Expletus_Sans, Poppins } from 'next/font/google';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const expletus = Expletus_Sans({ subsets: ['latin'] });
const poppins = Poppins({ weight: ['300', '400', '500', '600', '700'], subsets: ['latin'] });

export default function Splash() {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push('/home');
    }, 3000);
  }, [router]);

  return (
    <div className='bg-splash2 bg-white bg-cover bg-no-repeat bg-center h-screen flex items-center justify-center'>
      <div className={`text-center ${poppins.className}`}>
        <h1 className={`text-5xl font-semibold mb-2 ${expletus.className}`}>TokoKu</h1>
        <p>Savoring Halal Delights Daily.</p>
      </div>
    </div>
  );
}
