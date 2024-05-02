"use client";

import classnames from "classnames";
import main1 from "../../../assets/bg-1.png";
import main2 from "../../../assets/bg-2.png";
import main3 from "../../../assets/bg-3.png";
import main4 from "../../../assets/bg-4.png";
import { SwiperComponent } from "../../../components/swiper/Swiper";

import cls from "../../../_pages/home/home.module.css";
import { items } from "../../../components/menu/items";

const swiperItems = [
  {
    alt: "hello",
    src: main1,
  },
  {
    alt: "hello",
    src: main2,
  },
  {
    alt: "hello",
    src: main3,
  },
  {
    alt: "hello",
    src: main4,
  },
];

const Home = () => {
  return (
    <>
      <SwiperComponent items={swiperItems} />
      <div>
        <div className={[cls.main5, cls.bg].join(" ")}>
          <div className={cls.arbitration}>
            <h2 className={cls.mainTitleIntel}>АРБИТРАЖНЫЕ СПОРЫ</h2>
            <button className={cls.linkButton}>
              <a className={cls.link} href=''>
                ПОДРОБНЕЕ
              </a>
            </button>
          </div>
        </div>
      </div>
      <div className={[cls.main6, cls.bg].join(" ")}>
        <div className={cls.intellectualRight}>
          <div
            className={classnames(cls.intellectualRightLeft, cls.whiteColor)}
          >
            <h2 className={cls.mainTitleIntel}>ИНТЕЛЛЕКТУАЛЬНОЕ ПРАВО</h2>
            <button
              className={[
                cls.linkButton,
                cls.linkButtonIntel,
                cls.whiteColor,
              ].join(" ")}
            >
              <a className={cls.link} href=''>
                Подробнее
              </a>
            </button>
          </div>
          <div className={cls.intellectualRightRight}>
            <ul className={classnames(cls.intellectualRightList, cls.list)}>
              <li
                className={classnames(
                  cls.intellectualRightListItem,
                  cls.listItem
                )}
              >
                товарные знаки
              </li>
              <li
                className={classnames(
                  cls.intellectualRightListItem,
                  cls.listItem
                )}
              >
                патенты
              </li>
              <li
                className={classnames(
                  cls.intellectualRightListItem,
                  cls.listItem
                )}
              >
                коммерческие обозначения
              </li>
              <li
                className={classnames(
                  cls.intellectualRightListItem,
                  cls.listItem
                )}
              >
                защита бренда в суде
              </li>
              <li
                className={classnames(
                  cls.intellectualRightListItem,
                  cls.listItem
                )}
              >
                авторское право
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className={[cls.main7, cls.bg].join(" ")}>
        <div className={cls.inheritance}>
          <div className={cls.inheritanceLeft}>
            <ul className={classnames(cls.inheritanceList, cls.list)}>
              <li className={classnames(cls.inheritanceListItem, cls.listItem)}>
                товарные знаки
              </li>
              <li className={classnames(cls.inheritanceListItem, cls.listItem)}>
                патенты
              </li>
              <li className={classnames(cls.inheritanceListItem, cls.listItem)}>
                коммерческие обозначения
              </li>
              <li className={classnames(cls.inheritanceListItem, cls.listItem)}>
                защита бренда в суде
              </li>
              <li className={classnames(cls.inheritanceListItem, cls.listItem)}>
                авторское право
              </li>
            </ul>
          </div>
          <div className={classnames(cls.inheritanceRight, cls.whiteColor)}>
            <h2 className={classnames(cls.mainTitleIntel, cls.whiteColor)}>
              НАСЛЕДСТВО
            </h2>
            <button
              className={[
                cls.linkButtonIntel,
                cls.whiteColor,
                cls.linkButton,
              ].join(" ")}
            >
              <a className={cls.link} href=''>
                Подробнее
              </a>
            </button>
          </div>
        </div>
      </div>
      <div className={[cls.main8, cls.bg].join(" ")}>
        <div className={cls.criminalLaw}>
          <div className={cls.criminalLawContainer}>
            <h2 className={classnames(cls.mainTitleIntel, cls.whiteColor)}>
              УГОЛОВНОЕ ПРАВО
            </h2>
            <button className={classnames(cls.linkButton, cls.whiteColor)}>
              <a className={cls.link} href=''>
                Подробнее
              </a>
            </button>
          </div>
        </div>
      </div>
      <div className={[cls.main9, cls.bg].join(" ")}>
        <div className={cls.bankruptcy}>
          <div className={classnames(cls.bankruptcyContainer, cls.whiteColor)}>
            <h2 className={classnames(cls.mainTitleIntel, cls.whiteColor)}>
              БАНКРОТСТВО
            </h2>
            <button className={[cls.linkButton, cls.linkButtonIntel].join(" ")}>
              <a className={cls.link} href=''>
                Подробнее
              </a>
            </button>
          </div>
        </div>
      </div>
      <div className={[cls.main10, cls.bg].join(" ")}>
        <div className={classnames(cls.many, cls.whiteColor)}>
          <h2
            className={classnames(
              cls.mainTitleIntel,
              cls.whiteColor,
              cls.manyText
            )}
          >
            Больше услуг
          </h2>
        </div>
      </div>
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

export default Home;
