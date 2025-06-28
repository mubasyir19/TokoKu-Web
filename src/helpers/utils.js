export const formatHarga = (harga) => {
  // if (typeof harga !== "number" || isNaN(harga)) return "Rp 0";
  const hargaInteger = parseInt(harga);
  const hargaRupiah = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(hargaInteger);

  return hargaRupiah;
};

export const formatDateTime = (utcString) => {
  const date = new Date(utcString);

  const day = date.toLocaleString("id-ID", {
    timeZone: "Asia/Jakarta",
    day: "2-digit",
  });

  const month = date.toLocaleString("id-ID", {
    timeZone: "Asia/Jakarta",
    month: "long",
  });

  const year = date.toLocaleString("id-ID", {
    timeZone: "Asia/Jakarta",
    year: "numeric",
  });

  const hours = date.toLocaleString("id-ID", {
    timeZone: "Asia/Jakarta",
    hour: "2-digit",
    hour12: false,
  });

  const minutes = date.toLocaleString("id-ID", {
    timeZone: "Asia/Jakarta",
    minute: "2-digit",
  });

  return `${day} ${month} ${year} | ${hours}:${minutes}`;
};
