import CategoryItem from '@/components/molecules/CategoryItem';
import ProductItem from '@/components/molecules/ProductItem';
import { formatHarga } from '@/helpers/utils';

export default function DetailCategory() {
  return (
    <section>
      <div className='mt-5 mx-4 flex gap-x-2 overflow-x-auto'>
        <CategoryItem name='Sembako' link='sembako' icon='sembako' />
        <CategoryItem name='Coffee' link='coffee' icon='coffee' />
        <CategoryItem name='Snacks' link='snacks' icon='snacks' />
        <CategoryItem name='Bumbu' link='bumbu' icon='bumbu' />
        <CategoryItem name='Herbal' link='herbal' icon='herbal' />
        <CategoryItem name='Roti' link='roti' icon='roti' />
        <CategoryItem name='Mie' link='mie' icon='mie' />
        <CategoryItem name='Susu' link='susu' icon='susu' />
        <CategoryItem name='Minuman' link='minuman' icon='minuman' />
        <CategoryItem name='Buah & Sayur' link='buah-sayur' icon='buah-sayur' />
        <CategoryItem name='Frozen Food' link='frozen-food' icon='frozen-food' />
        <CategoryItem name='Daging & Ikan' link='daging-ikan' icon='daging-ikan' />
        <CategoryItem name='Cleaning Aid' link='cleaning-aid' icon='cleaning-aid' />
        <CategoryItem name='Health Care' link='health-care' icon='health-care' />
      </div>
      <div className='mt-5 mx-4 mb-20 grid grid-cols-2 justify-items-center gap-5'>
        <ProductItem name='Nama Produk' price={formatHarga(100000)} />
        <ProductItem name='Product Name' price={formatHarga(120000)} />
        <ProductItem name='This is Product Name' price={formatHarga(64500)} />
        <ProductItem name='Name of Product' price={formatHarga(75000)} />
        <ProductItem name='Nama Produk' price={formatHarga(16500)} />
        <ProductItem name='Product Name' price={formatHarga(9500)} />
        <ProductItem name='This is Product Name' price={formatHarga(12000)} />
        <ProductItem name='Name of Product' price={formatHarga(15500)} />
        <ProductItem name='Nama Produk' price={formatHarga(20000)} />
        <ProductItem name='Product Name' price={formatHarga(60000)} />
      </div>
    </section>
  );
}
