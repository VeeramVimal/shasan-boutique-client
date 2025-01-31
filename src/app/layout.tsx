import type { Metadata } from "next";
import { Open_Sans, Poppins } from "next/font/google";
import "./globals.css";
import ClientRootLayout from "@/app/ClientRootLayout";
import { HoverProvider } from "@/utils/hoverContext";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--poppins",
  display: "swap",
});

const dm = Open_Sans({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--dm",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Trade Bitcoin & Buy Cryptocurrency with Dev Exchng",
  description:
    "Trade Bitcoin & explore a wide range of cryptocurrencies with Dev Exchng. Enjoy secure, fast, and user-friendly crypto trading with top-notch features .",
  keywords:
    " Bitcoin, Cryptocurrency, Crypto Trading, Buy Bitcoin, Secure Exchng, Dev, Digital Assets, Staking, Arbitrage, DeFi, All Coin, Blockchain, Trade Crypto, Altcoins",
  // metadataBase: new URL('https://www.Devex.com'),
  alternates: {
    canonical: "./",
    languages: {
      "en-US": "/en-US",
      // 'de-DE': '/de-DE',
    },
  },
  openGraph: {
    title: "Trade Bitcoin & Buy Cryptocurrency with Dev Exchng",
    description:
      "Trade Bitcoin & explore a wide range of cryptocurrencies with Dev Exchng. Enjoy secure, fast, and user-friendly crypto trading with top-notch features .",
    // url: new URL('https://www.ultraproex.com'),
    siteName: "Dev Crypto Exchng",
    images: [
      // {
      //   url: '/assets/images/logo/logo.png',
      //   alt: 'ultrapro-logo'
      // },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      <link
          href="https://cdn.jsdelivr.net/npm/remixicon/fonts/remixicon.css"
          rel="stylesheet"
        />
      </head>
      <body
        // className={`${poppins.variable} ${dm.variable} body header-fixed antialiased`}
        className={`${poppins.variable} ${dm.variable} body antialiased`}
      >
        <HoverProvider>
          <ClientRootLayout>{children}</ClientRootLayout>
        </HoverProvider>
      </body>
    </html>
  );
}
