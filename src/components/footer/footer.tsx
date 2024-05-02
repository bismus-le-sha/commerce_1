import classnames from "classnames";
import cls from "./footer.module.css";
import { items } from "../menu/items";

const Footer = () => {
  return (
    <>
      <div>
        <div className={cls.linksBeforeFooterContainer}>
          <ul className={cls.linksBeforeFooterList}>
            {items.map(({ text, href }) => {
              return (
                <li key={text} className={cls.linksBeforeFooterItem}>
                  <a className={cls.linksBeforeFooterLink} href={href}>
                    {text}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <footer className={cls.footer}>
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
