import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mama Kost Batam | Bareng Mama, Serasa di Rumah",
  description: "Kost bebas di Baloi, Nagoya, Jodoh, Pelita, dan Tropicana, Batam. Mama Hotel Pelita juga tersedia per malam. Tanya kamar dan jadwalkan survei melalui WhatsApp 0896-7345-9682.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="id"><body>{children}</body></html>;
}
