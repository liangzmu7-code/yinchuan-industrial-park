import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "银川产业园资产战略合作",
  description: "源自银川第一面粉厂的成熟食品工业园区资产，面向战略投资、整体转让与产业合作。"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
