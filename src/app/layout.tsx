import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({ subsets: ["latin"], weight: ["300", "400", "700"] });

export const metadata: Metadata = {
  title: "Lista de Tarefas",
  description: "App Lista de Tarefas com Next, Prisma e PostgressSQL",
};
<div>Paulo</div>;
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" className={poppins.className}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
