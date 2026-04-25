"use client";

import { useEffect } from "react";
import Script from "next/script";

export default function TypeformEmbed() {
  useEffect(() => {
    // re-initialize typeform after script loads
    if (window && (window as any).tf?.load) {
      (window as any).tf.load();
    }
  }, []);

  return (
    <section className="w-full py-20 flex justify-center">
      <div className="w-full max-w-4xl">
        <div data-tf-live="01KQ0Z0ZP44P27J6F3XSESMN1V" />

        <Script
          src="https://embed.typeform.com/next/embed.js"
          strategy="afterInteractive"
        />
      </div>
    </section>
  );
}