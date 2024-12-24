import type { Metadata } from "next";
import "./globals.css";
import Providers from "./providers";

export const metadata: Metadata = {
  title: "Rest Countries",
  description: "Learn some fun facts about your country",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="fontFamily text-sm antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
