"use client";

import classnames from "classnames";
import cls from "./footer.module.css";
import { items } from "../menu/items";
import { usePathname } from "next/navigation";

interface FooterProps {
  isWhite?: boolean;
  isDark?: boolean;
}

const Footer = (props: FooterProps) => {
  const { isWhite, isDark } = props;
  const pathname = usePathname();
  const isDarkFooter = pathname === "/arbitration" || pathname === "/taxes";
  const isWhiteFooter = pathname === "/cases";

  const whiteStyle = {
    color: (isDarkFooter || isWhite) && !isWhiteFooter ? "#fff" : "#000",
  };

  return (
    <>
      <div
        style={{
          backgroundColor: isDark || isDarkFooter ? "#222222" : "#fff",
          maxWidth: 1700,
          margin: "0 auto",
          padding: "0 20px",
        }}
      >
        <div className={cls.linksBeforeFooterContainer}>
          <ul className={cls.linksBeforeFooterList}>
            {items.map(({ text, href }) => {
              return (
                <li key={text} className={cls.linksBeforeFooterItem}>
                  <a
                    style={{
                      ...whiteStyle,
                    }}
                    className={cls.linksBeforeFooterLink}
                    href={href}
                  >
                    {text}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <footer
        style={{ maxWidth: 1700, margin: "0 auto" }}
        className={cls.footer}
      >
        <div className={cls.footerContainer}>
          <div className={cls.footerLeft}>
            <a
              className={classnames(cls.link, cls.telLink)}
              href='tel:+78129423290'
            >
              +7 (812) 942-32-90
            </a>
            <span className={cls.footerCity}>Москва</span>
          </div>
          <div className={cls.footerCenter}>
            <h2 className={cls.footerTitle}>
              © 2015 Юридическое бюро ДЕ-ЮРЕКС
            </h2>
            <p className={cls.footerText}>”Все обращения конфиденциальны"</p>
            <a
              className={classnames(cls.link, cls.emailLink)}
              href='mailto:deureks@deureks.ru'
            >
              deureks@deureks.ru
            </a>
          </div>
          <div className={cls.footerRight}>
            <a
              className={classnames(cls.link, cls.telLink)}
              href='tel:+78129423290'
            >
              +7 (812) 942-32-90
            </a>
            <span className={cls.footerCity}>Санкт-Петербург</span>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
