"use client";

import { ReactNode, useEffect, useState } from "react";
import "../../../components/swiper/swiper.css";
import cls from "@/_pages/cases/menu.module.css";
import classnames from "classnames";
import Link from "next/link";

import { usePathname } from "next/navigation";
import ServicesComponent from "@/components/servicesComponent/servicesComponent";
import { items } from "@/components/menu/items";

export const PagesMenu = ({ children }: { children: ReactNode }) => {
  const [isMedia, setIsMedia] = useState<boolean>(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsMedia(document.body.clientWidth <= 700);
  }, []);

  const whiteStyle = {
    color: "#000",
  };

  const whiteBgStyle = {
    backgroundColor: "#000",
  };

  return (
    <>
      <div
        style={{
          backgroundColor: "#fff",
        }}
        className={cls.container}
      >
        <header className={cls.header}>
          <div
            style={{
              backgroundColor: "#fff",
              minHeight: 204,
            }}
            className={cls.contacts}
          >
            <div>
              <Link style={{ maxHeight: "80px" }} href={"/"}>
                <div className={classnames("logo", cls.logo)}></div>
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
                          fontWeight: 900,
                          color: "#000",
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
            backgroundColor: "white",
            color: "#000",
          }}
          className={cls.containerImage}
        >
          {!isMedia && (
            <div className={classnames(cls.menuContainer)}>
              <div>
                <span
                  style={{
                    backgroundColor: "#000",
                  }}
                  className={cls.smallLine}
                ></span>
                <span
                  style={{
                    backgroundColor: "#000",
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
                            color: "#000",
                            fontWeight: 900,
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
                    backgroundColor: "#000",
                  }}
                  className={cls.bigLine}
                ></span>
                <span
                  style={{
                    ...whiteBgStyle,
                    backgroundColor: "#000",
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
