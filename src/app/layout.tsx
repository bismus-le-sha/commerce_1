"use client";

import React, { ReactNode, useEffect, useRef } from "react";
import "./global.css";

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
        inputRef.current.style.cssText = "background: #d3d3d3;";
      }
    }, 10);

    return () => {
      clearTimeout(timeOut.current);
    };
  }, []);

  return (
    <html>
      <head>
        <script src='https://app.allwidgets.ru/s/callback/89297077-04e6-4487-b666-2f7d2f4336c8/'></script>
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' crossorigin />
        <link
          href='https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap'
          rel='stylesheet'
        />
      </head>
      <body>{children}</body>
    </html>
  );
};

export default Layout;
