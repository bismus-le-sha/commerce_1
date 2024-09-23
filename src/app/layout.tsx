"use client";

import React, { ReactNode, Suspense, useEffect, useRef } from "react";
import { GoogleAnalytics } from "@next/third-parties/google";

import "./global.css";

import { YandexMetricaProvider } from "next-yandex-metrica";

const Layout = ({ children }: { children: ReactNode }) => {
  const ref = useRef<Element | null | undefined>(null);
  const widgetRef = useRef<Element | null | undefined>(null);
  const inputRef = useRef<HTMLInputElement | null | undefined>(null);

  const timeOut = useRef<NodeJS.Timeout>();

  useEffect(() => {
    timeOut.current = setTimeout(() => {
      ref.current = document.querySelector(".lkdm_callback_widget_shadow");
      widgetRef.current = document
        .querySelector(".lkdm_callback_widget_shadow")
        ?.shadowRoot?.querySelector(".widget-call");
      inputRef.current = widgetRef.current?.querySelector(
        ".lt-callback-toggle"
      );

      if (inputRef.current) {
        inputRef.current.style.cssText = "background: #02C9B7;";
      }
    }, 10);

    return () => {
      clearTimeout(timeOut.current);
    };
  }, []);

  return (
    <html>
      <head>
        <script src='https://app.allwidgets.ru/s/callback/728e9a63-cf3f-4fde-9d5b-e7e820aaf84c/'></script>
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' />
        <link
          href='https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap'
          rel='stylesheet'
        />

        <script
          src='https://api-maps.yandex.ru/2.1/?apikey=70cb9f64-4936-4b5c-aa59-c3151d1f9a30&lang=en_US'
          type='text/javascript'
        ></script>
      </head>

      <GoogleAnalytics gaId='G-SX512R187D' />
      <body>
        <YandexMetricaProvider
          tagID={97609503}
          initParameters={{
	defer: true,
            clickmap: true,
            trackLinks: true,
            accurateTrackBounce: true,
          }}
        >
          {children}
        </YandexMetricaProvider>
      </body>
    </html>
  );
};

export default Layout;
