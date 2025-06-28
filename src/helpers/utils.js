export const formatHarga = (harga) => {
  if (typeof harga !== "number" || isNaN(harga)) return "Rp 0";
  const hargaInteger = parseInt(harga);
  const hargaRupiah = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(hargaInteger);

  return hargaRupiah;
};
