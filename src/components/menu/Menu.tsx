"use client";

import { useEffect, useState } from "react";
import { Services, items } from "./items";
import cls from "./Menu.module.css";
import classnames from "classnames";
import burgerMenu from "../../assets/burgerMenu.svg";
import { usePathname } from "next/navigation";

import Image from "next/image";
import Link from "next/link";
import ServicesComponent from "../servicesComponent/servicesComponent";

interface MenuProps {
  isWhite?: boolean;
}

const Menu = (props: MenuProps) => {
  const { isWhite } = props;
  const [isVisible, setIsVisible] = useState(false);
  const [isMedia, setIsMedia] = useState<boolean>(false);
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const mods = {
    [cls.visible]: isVisible,
  };

  useEffect(() => {
    setIsMedia(document.body.clientWidth <= 600);
  }, []);

  const whiteStyle = {
    color: isWhite ? "#fff" : "",
  };

  const handleOpen = () => {
    setIsOpen((prev) => !prev);
  };

  const whiteBackgroundStyle = {
    backgroundColor: isWhite ? "#fff" : "",
  };

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
        <span
          style={{
            ...whiteBackgroundStyle,
            display: isMedia ? "none" : "block",
          }}
          className={cls.smallLine}
        ></span>
        <span
          style={{
            ...whiteBackgroundStyle,
            display: isMedia ? "none" : "block",
          }}
          className={cls.bigLine}
        ></span>

        <ul className={cls.menu}>
          {isMedia ? (
            <ServicesComponent isMobile />
          ) : isOpen ? (
            <>
              <li
                style={{ cursor: "pointer", ...whiteStyle, fontWeight: 900 }}
                onClick={handleOpen}
              >
                <span className={cls.menuItemText}>Услуги</span>
              </li>
              {Services.map(({ href, text }) => {
                return (
                  <li className={cls.menuItem} key={text}>
                    <Link href={href}>
                      <span
                        style={{
                          ...whiteStyle,
                          borderBottom:
                            pathname === href ? "1px solid #000" : "none",
                        }}
                        className={cls.menuItemText}
                      >
                        {text}
                      </span>
                    </Link>
                  </li>
                );
              })}
            </>
          ) : (
            <li
              style={{ cursor: "pointer", ...whiteStyle }}
              onClick={handleOpen}
            >
              <span className={cls.menuItemText}>Услуги</span>
            </li>
          )}
          {items.map(({ text, href }) => {
            return (
              <li className={cls.menuItem} key={text}>
                <Link href={href}>
                  <span
                    style={{
                      ...whiteStyle,
                      borderBottom:
                        pathname === href ? "1px solid #000" : "none",
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
        <span
          style={{
            ...whiteBackgroundStyle,
            display: isMedia ? "none" : "block",
          }}
          className={cls.bigLine}
        ></span>
        <span
          style={{
            ...whiteBackgroundStyle,
            display: isMedia ? "none" : "block",
          }}
          className={[cls.smallLine, cls.marginBottomSmallLine].join(" ")}
        ></span>
        <div className={cls.contacts}>
          <div>
            <a
              style={whiteStyle}
              className={isWhite ? cls.phoneLinkWhite : cls.phoneLink}
              href='tel:+78129423290'
            >
              +7 (812) 942-32-90
            </a>
            <h2 style={whiteStyle} className={cls.cityTitle}>
              Санкт-Петербург
            </h2>
          </div>
          <div>
            <a
              style={whiteStyle}
              className={classnames(
                isWhite ? cls.phoneLinkWhite : cls.phoneLink
              )}
              href='tel:+78129423290'
            >
              +7 (812) 942-32-90
            </a>
            <h2 style={whiteStyle} className={cls.cityTitle}>
              Москва
            </h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default Menu;
