"use client";

import { ReactNode, useEffect, useState } from "react";
import "../../components/swiper/swiper.css";
import cls from "./menu.module.css";
import classnames from "classnames";
import Link from "next/link";
import { items } from "../../components/menu/items";
import { usePathname } from "next/navigation";
import BeforeFooterBlock from "@/components/beforeFooterBlock/BeforeFooterBlock";

export const PagesMenu = ({ children }: { children: ReactNode }) => {
  const [isMedia, setIsMedia] = useState<boolean>(false);
  const pathname = usePathname();
  const isDark = pathname === "/arbitration";

  useEffect(() => {
    setIsMedia(document.body.clientWidth <= 700);
  }, []);

  const whiteStyle = {
    color: isDark ? "#fff" : "",
  };

  const whiteBgStyle = {
    backgroundColor: isDark ? "#fff" : "",
  };

  return (
    <>
      <div
        style={{
          backgroundColor: isDark ? "#282828" : "",
        }}
        className={cls.container}
      >
        <header className={cls.header}>
          <div className={cls.contacts}>
            <div>
              <Link style={{ maxHeight: "80px" }} href={"/"}>
                <div
                  className={classnames(
                    "logo",
                    cls.logo,
                    isDark && cls.logoWhite
                  )}
                ></div>
              </Link>
            </div>
            <div>
              <a
                style={whiteStyle}
                className={cls.phoneLink}
                href='tel:+78129423290'
              >
                +7 (812) 942-32-90
              </a>
              <h2 style={whiteStyle} className={cls.cityTitle}>
                Москва
              </h2>
            </div>
            <div>
              <a
                style={whiteStyle}
                className={cls.phoneLink}
                href='tel:+78129423290'
              >
                +7 (812) 942-32-90
              </a>
              <h2 style={whiteStyle} className={cls.cityTitle}>
                Санкт-Петербург
              </h2>
            </div>
          </div>
        </header>
        {isMedia && (
          <div
            className={classnames(cls.menuContainer, {
              [cls.mobile]: isMedia,
            })}
          >
            <ul className={cls.menu}>
              {items.map(({ text, href }) => {
                console.log(pathname === href);
                return (
                  <li className={cls.menuItem} key={text}>
                    <Link href={href}>
                      <span
                        style={{
                          borderBottom:
                            pathname === href ? "1px solid #000" : "none",
                          ...whiteStyle,
                        }}
                        className={cls.menuItemText}
                      >
                        {text}
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        )}
        <div className={cls.containerImage}>
          {!isMedia && (
            <div className={classnames(cls.menuContainer)}>
              <div>
                <span style={whiteBgStyle} className={cls.smallLine}></span>
                <span style={whiteBgStyle} className={cls.bigLine}></span>
              </div>
              <ul className={cls.menu}>
                {items.map(({ text, href }) => {
                  return (
                    <li className={cls.menuItem} key={text}>
                      <Link href={href}>
                        <span
                          style={{
                            borderBottom:
                              pathname === href ? "1px solid #000" : "none",
                            ...whiteStyle,
                          }}
                          className={cls.menuItemText}
                        >
                          {text}
                        </span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
              <div>
                <span style={whiteBgStyle} className={cls.bigLine}></span>
                <span
                  style={whiteBgStyle}
                  className={[cls.smallLine, cls.marginBothrefmSmallLine].join(
                    " "
                  )}
                ></span>
              </div>
            </div>
          )}
          {children}
        </div>

      </div>
    </>
  );
};
