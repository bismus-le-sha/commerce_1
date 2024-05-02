"use client";

import { ReactNode, useEffect, useState } from "react";
import "../../components/swiper/swiper.css";
import cls from "./menu.module.css";
import classnames from "classnames";
import Link from "next/link";
import { items } from "../../components/menu/items";

export const PagesMenu = ({ children }: { children: ReactNode }) => {
  const [isMedia, setIsMedia] = useState<boolean>(false);

  useEffect(() => {
    setIsMedia(document.body.clientWidth <= 700);
  }, []);

  return (
    <>
      <div className={cls.container}>
        <header className={cls.header}>
          <div className={cls.contacts}>
            <div>
              <Link style={{ maxHeight: "80px" }} href={"/"}>
                <div className={classnames("logo", cls.logo)}></div>
              </Link>
            </div>
            <div>
              <a className={cls.phoneLink} href='tel:+78129423290'>
                +7 (812) 942-32-90
              </a>
              <h2 className={cls.cityTitle}>Москва</h2>
            </div>
            <div>
              <a className={cls.phoneLink} href='tel:+78129423290'>
                +7 (812) 942-32-90
              </a>
              <h2 className={cls.cityTitle}>Санкт-Петербург</h2>
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
                return (
                  <li className={cls.menuItem} key={text}>
                    <Link href={href}>
                      <span className={cls.menuItemText}>{text}</span>
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
                <span className={cls.smallLine}></span>
                <span className={cls.bigLine}></span>
              </div>
              <ul className={cls.menu}>
                {items.map(({ text, href }) => {
                  return (
                    <li className={cls.menuItem} key={text}>
                      <Link href={href}>
                        <span className={cls.menuItemText}>{text}</span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
              <div>
                <span className={cls.bigLine}></span>
                <span
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
