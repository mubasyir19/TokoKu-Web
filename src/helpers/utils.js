export const formatHarga = (harga) => {
  const hargaInteger = parseInt(harga);
  const hargaRupiah = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(hargaInteger);

  return hargaRupiah;
};
