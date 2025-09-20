import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { Provider } from "@/components/ui/provider";
import "./globals.css";
import { GlobalLayout } from "@/components/ui/global-layout";

const jakartaSans = Plus_Jakarta_Sans({
  variable: "--font-jakarta-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Medische Kliniek Velsen",
  description: "Medische Kliniek Velsen",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning>
      <body className={`${jakartaSans.variable}`}>
        <Provider>
          <GlobalLayout>{children}</GlobalLayout>
        </Provider>
      </body>
    </html>
  );
}
