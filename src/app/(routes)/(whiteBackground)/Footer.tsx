import classnames from "classnames";

import cls from "@/components/footer/footer.module.css";

import { items } from "@/components/menu/items";

const Footer = () => {
  return (
    <>
      <div
        style={{
          backgroundColor: "#222222",
          maxWidth: 1700,
          margin: "0 auto",
        }}
      >
        <div
          style={{ backgroundColor: "#fff" }}
          className={cls.linksBeforeFooterContainer}
        >
          <ul className={cls.linksBeforeFooterList}>
            {items.map(({ text, href }) => {
              return (
                <li key={text} className={cls.linksBeforeFooterItem}>
                  <a
                    style={{
                      color: "#000",
                      fontWeight: 900,
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
              href='mailto:deureks.law@gmail.com'
            >
              deureks.law@gmail.com
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
