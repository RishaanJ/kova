import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next"
import Script from "next/script";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kova Growth",
  description: "Outperform your competition, without breaking your budget.",

  openGraph: {
    title: "Kova Growth",
    description: "Outperform your competition, without breaking your budget.",
    url: "https://kova.now",
    siteName: "Kova Growth",
    images: [
      {
        url: "/kova-2.png",
        width: 1200,
        height: 630,
        alt: "Kova Growth Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Kova Growth",
    description: "Outperform your competition, without breaking your budget.",
    images: ["/kova-2.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full antialiased">
      <head>
        <Script
          id="apollo-tracker"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              function initApollo(){
                var n=Math.random().toString(36).substring(7),
                o=document.createElement("script");
                o.src="https://assets.apollo.io/micro/website-tracker/tracker.iife.js?nocache="+n;
                o.async=true;
                o.defer=true;
                o.onload=function(){
                  window.trackingFunctions.onLoad({appId:"69ec3729ecd3b0000d23951a"});
                };
                document.head.appendChild(o);
              }
              initApollo();
            `,
          }}
        />
      </head>
      <Analytics/>
      <body className={`${geistSans.className} min-h-full flex flex-col`}>
        {children}
        <Script
          src="https://embed.typeform.com/next/embed.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
