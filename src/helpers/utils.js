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

export const getStatusOrderStyle = (status) => {
  switch (status) {
    case "PENDING":
      return {
        colorStatus: "bg-yellow-500",
        textStatus: "Menunggu pesanan diproses",
      };
    case "PROCESSING":
      return {
        colorStatus: "bg-orange-500",
        textStatus: "Pesananmu sedang diproses",
      };
    case "SHIPPED":
      return {
        colorStatus: "bg-sky-500",
        textStatus: "Pesananmu sedang diantar",
      };
    case "DELIVERED":
      return {
        colorStatus: "bg-emerald-500",
        textStatus: "Pesananmu sudah diterima",
      };
    case "CANCELLED":
      return { colorStatus: "bg-red-500", textStatus: "Pesanan dibatalkan" };
    default:
      return {
        colorStatus: "bg-gray-400",
        textStatus: "Status tidak diketahui",
      };
  }
};
