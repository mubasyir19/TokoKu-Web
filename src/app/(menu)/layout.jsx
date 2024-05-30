import { Component } from "@/components";
import { Poppins } from "next/font/google";
import React from "react";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata = {
  title: "TokoKu",
  description: "Savoring Halal Delights Daily.",
};

export default function RootLayout({ children }) {
  return (
    <html>
      <body className="relative mx-auto max-w-md">
        {/* <Component.Topbar /> */}
        <main className={`${poppins.className}`}>{children}</main>
        <Component.BottomNav />
      </body>
    </html>
  );
}
