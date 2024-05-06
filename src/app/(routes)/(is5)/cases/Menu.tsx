"use client";

import { ReactNode, useEffect, useState } from "react";
import "../../../../components/swiper/swiper.css";
import cls from "../../../../_pages/cases/menu.module.css";
import classnames from "classnames";
import Link from "next/link";
import { items } from "../../../../components/menu/items";
import { usePathname } from "next/navigation";
import ServicesComponent from "@/components/servicesComponent/servicesComponent";

export const PagesMenu = ({ children }: { children: ReactNode }) => {
  const [isMedia, setIsMedia] = useState<boolean>(false);
  const pathname = usePathname();

  const isDark =
    pathname === "/arbitration" ||
    pathname === "/taxes" ||
    pathname === "/realEstate" ||
    pathname === "/intellectualRight";

  const isWhite =
    pathname === "/otherServices" ||
    pathname === "/cases" ||
    pathname === "/publications";

  useEffect(() => {
    setIsMedia(document.body.clientWidth <= 700);
  }, []);

  const whiteStyle = {
    color: isDark ? "#fff" : "",
  };

  const whiteBgStyle = {
    backgroundColor: isDark ? "#fff" : "#000",
  };

  return (
    <>
      <div
        style={{
          backgroundColor: isDark || !isWhite ? "#282828" : "#fff",
        }}
        className={cls.container}
      >
        <header className={cls.header}>
          <div
            style={{
              backgroundColor: isWhite || !isDark ? "#fff" : "#282828",
              minHeight: 204,
              padding: "0 30px",
            }}
            className={cls.contacts}
          >
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
              <ServicesComponent isMobile />
              {items.map(({ text, href }) => {
                return (
                  <li className={cls.menuItem} key={text}>
                    <Link href={href}>
                      <span
                        style={{
                          borderBottom:
                            pathname === href ? "1px solid #000" : "none",
                          ...whiteStyle,
                          color: isWhite ? "#000" : "#fff",
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
        <div
          style={{
            backgroundColor: isWhite ? "white" : "#282828",
            color: isWhite ? "#000" : "#fff",
          }}
          className={cls.containerImage}
        >
          {!isMedia && (
            <div className={classnames(cls.menuContainer)}>
              <div>
                <span
                  style={{
                    ...whiteBgStyle,
                    backgroundColor: isWhite ? "#000" : "#fff",
                  }}
                  className={cls.smallLine}
                ></span>
                <span
                  style={{
                    ...whiteBgStyle,
                    backgroundColor: isWhite ? "#000" : "#fff",
                  }}
                  className={cls.bigLine}
                ></span>
              </div>
              <ul className={cls.menu}>
                <ServicesComponent />
                {items.map(({ text, href }) => {
                  return (
                    <li className={cls.menuItem} key={text}>
                      <Link href={href}>
                        <span
                          style={{
                            borderBottom:
                              pathname === href ? "1px solid #000" : "none",
                            ...whiteStyle,
                            color: isWhite ? "#000" : "#fff",
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
                <span
                  style={{
                    ...whiteBgStyle,
                    backgroundColor: isWhite ? "#000" : "#fff",
                  }}
                  className={cls.bigLine}
                ></span>
                <span
                  style={{
                    ...whiteBgStyle,
                    backgroundColor: isWhite ? "#000" : "#fff",
                  }}
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
