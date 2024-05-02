"use client";

import { useEffect, useState } from "react";
import { items } from "./items";
import cls from "./Menu.module.css";
import classnames from "classnames";
import burgerMenu from "../../assets/burgerMenu.svg";

import Image from "next/image";
import Link from "next/link";

const Menu = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMedia, setIsMedia] = useState<boolean>(false);

  const mods = {
    [cls.visible]: isVisible,
  };

  useEffect(() => {
    setIsMedia(document.body.clientWidth <= 500);
  }, []);

  return (
    <>
      {isMedia && (
        <Image
          className={cls.burgerMenu}
          onClick={() => setIsVisible((prev) => !prev)}
          src={burgerMenu}
          alt='burgerMenu'
        />
      )}
      <div className={classnames(cls.menuContainer, mods)}>
        <span className={cls.smallLine}></span>
        <span className={cls.bigLine}></span>
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
        <span className={cls.bigLine}></span>
        <span
          className={[cls.smallLine, cls.marginBottomSmallLine].join(" ")}
        ></span>
        <div className={cls.contacts}>
          <div>
            <a className={cls.phoneLink} href='tel:+78129423290'>
              +7 (812) 942-32-90
            </a>
            <h2 className={cls.cityTitle}>Санкт-Петербург</h2>
          </div>
          <div>
            <a className={cls.phoneLink} href='tel:+78129423290'>
              +7 (812) 942-32-90
            </a>
            <h2 className={cls.cityTitle}>Москва</h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default Menu;
