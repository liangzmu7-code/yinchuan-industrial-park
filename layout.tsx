import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "银川产业园资产战略合作",
  description: "一座扎根银川六十余年的产业园资产，寻找新的战略合作方。"
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
