"use client";

import classnames from "classnames";
import main1 from "../../../assets/bg-1.png";
import main2 from "../../../assets/bg-2.png";
import main3 from "../../../assets/bg-3.png";
import main4 from "../../../assets/bg-4.png";
import { SwiperComponent } from "../../../components/swiper/Swiper";
import cls from "../../../_pages/home/home.module.css";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import Menu from "@/components/menu/Menu";
import Link from "next/link";
import BeforeFooterBlock from "@/components/beforeFooterBlock/BeforeFooterBlock";

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
  const [isMobile, setIsMobile] = useState(false);

  const { ref, inView } = useInView({
    threshold: 0,
  });

  useEffect(() => {
    setIsMobile(document.body.clientWidth >= 1000);
  }, []);

  return (
    <div className={cls.rootDiv}>
      <div
        ref={ref}
        style={{ width: "10px", height: "100vh", position: "absolute" }}
      ></div>
      <SwiperComponent items={swiperItems} />
      {!inView && isMobile && (
        <div
          style={{
            position: "fixed",
            top: "0",
            width: "100vw",
            maxWidth: "1730px",
            zIndex: 2,
          }}
        >
          <div className='headerContainer'>
            <div className='menuHeaderContainer'>
              <Menu />
            </div>
            <Link style={{ maxHeight: "80px" }} href={"/"}>
              <div className={classnames("logo")}></div>
            </Link>
          </div>
        </div>
      )}
      <div>
        <div className={[cls.main5, cls.bg].join(" ")}>
          <div className={cls.main5Background}></div>
          <div className={cls.arbitration}>
            <h2 className={cls.mainTitleIntel}>АРБИТРАЖНЫЕ СПОРЫ</h2>
            <button className={cls.linkButton}>
              <Link className={cls.link} href='/arbitration'>
                ПОДРОБНЕЕ
              </Link>
            </button>
          </div>
        </div>
      </div>
      <div className={[cls.main6, cls.bg].join(" ")}>
        <div className={cls.main6Background}></div>
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
              <Link className={cls.link} href='/intellectualRight'>
                Подробнее
              </Link>
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
                <Link href={"/intellectualRight/#trademarks"}>
                  товарные знаки
                </Link>
              </li>
              <li
                className={classnames(
                  cls.intellectualRightListItem,
                  cls.listItem
                )}
              >
                <Link href={"/intellectualRight/#patents"}>патенты</Link>
              </li>
              <li
                className={classnames(
                  cls.intellectualRightListItem,
                  cls.listItem
                )}
              >
                <Link href={"/intellectualRight/#commercial-designations"}>
                  коммерческие обозначения
                </Link>
              </li>
              <li
                className={classnames(
                  cls.intellectualRightListItem,
                  cls.listItem
                )}
              >
                <Link href={"/intellectualRight/#brand-protection"}>
                  защита бренда в суде
                </Link>
              </li>
              <li
                className={classnames(
                  cls.intellectualRightListItem,
                  cls.listItem
                )}
              >
                <Link href={"/intellectualRight/#copyright"}>
                  авторское право
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className={[cls.main7, cls.bg].join(" ")}>
        <div className={cls.main7Background}></div>
        <div className={cls.inheritanceTrigger}></div>
        <div className={cls.inheritance}>
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
              <Link className={cls.link} href='/inheritance'>
                Подробнее
              </Link>
            </button>
          </div>
          <div className={cls.inheritanceLeft}>
            <ul className={classnames(cls.inheritanceList, cls.list)}>
              <li className={classnames(cls.inheritanceListItem, cls.listItem)}>
                <Link href='/inheritance/#acceptance'>принятие наследства</Link>
              </li>
              <li className={classnames(cls.inheritanceListItem, cls.listItem)}>
                <Link href='/inheritance/#support'>
                  сопровождение наследственного дела
                </Link>
              </li>
              <li className={classnames(cls.inheritanceListItem, cls.listItem)}>
                <Link href='/inheritance/#disputes'>наследственные споры</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className={[cls.main8, cls.bg].join(" ")}>
        <div className={cls.main8Background}></div>
        <div className={cls.criminalLaw}>
          <div className={cls.criminalLawContainer}>
            <h2 className={classnames(cls.mainTitleIntel, cls.whiteColor)}>
              УГОЛОВНОЕ ПРАВО
            </h2>
            <button className={classnames(cls.linkButton, cls.whiteColor)}>
              <Link className={cls.link} href='/criminal-law'>
                Подробнее
              </Link>
            </button>
          </div>
        </div>
      </div>
      <div className={[cls.main9, cls.bg].join(" ")}>
        <div className={cls.main9Background}></div>
        <div className={cls.bankruptcy}>
          <div className={classnames(cls.bankruptcyContainer, cls.whiteColor)}>
            <h2 className={classnames(cls.mainTitleIntel, cls.whiteColor)}>
              БАНКРОТСТВО
            </h2>
            <button className={[cls.linkButton, cls.linkButtonIntel].join(" ")}>
              <Link className={cls.link} href='/bankruptcy'>
                Подробнее
              </Link>
            </button>
          </div>
        </div>
      </div>
      <div className={[cls.main10, cls.bg].join(" ")}>
        <div className={cls.main10Background}></div>
        <div className={classnames(cls.many, cls.whiteColor)}>
          <button
            style={{ border: "none", minWidth: "270px" }}
            className={cls.linkButton}
          >
            <Link className={cls.link} href='/otherServices'>
              Больше услуг
            </Link>
          </button>
        </div>
      </div>

      <div>
        <BeforeFooterBlock />
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
    </div>
  );
};

export default Home;
