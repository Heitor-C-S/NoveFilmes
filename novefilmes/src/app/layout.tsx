import type { Metadata } from "next";
import { Theme } from "@radix-ui/themes";
import "./globals.css";

export const metadata: Metadata = {
  title: "NoveFilmes",
  description: "Câmera, luz e maquinária",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body >
        <Theme radius="small">
          {children}
        </Theme>
      </body>
    </html>
  );
}
