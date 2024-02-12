import { Poppins } from 'next/font/google';

const poppins = Poppins({ weight: ['300', '400', '500', '600', '700'], subsets: ['latin'] });

export const metadata = {
  title: 'TokoKu',
  description: 'Savoring Halal Delights Daily.',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className='relative mx-auto max-w-md'>
        <main className={`p-5 ${poppins.className}`}>{children}</main>
      </body>
    </html>
  );
}
