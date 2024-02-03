import './globals.css';

export const metadata = {
  title: 'TokoKu',
  description: 'Savoring Halal Delights Daily.',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={`relative mx-auto max-w-md`}>{children}</body>
    </html>
  );
}
