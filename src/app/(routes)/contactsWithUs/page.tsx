"use client";

import { useEffect, useState } from "react";
import "../../../components/swiper/swiper.css";

import cls from "../../../styles/menuContactWithMe.module.css";
import classnames from "classnames";
import Link from "next/link";

import roomImg from "@/assets/room.png";
import Image from "next/image";
import map from "@/assets/map.png";
import { items } from "../../../components/menu/items";
import Footer from "@/components/footer/footer";
import MapCard from "@/components/mapCard/MapCard";
import { usePathname } from "next/navigation";
import ServicesComponent from "@/components/servicesComponent/servicesComponent";

const ContactsWithUsPage = () => {
  const [isMedia, setIsMedia] = useState<boolean>(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsMedia(document.body.clientWidth <= 700);
  }, []);

  return (
    <>
      <div className={cls.container}>
        <header className={cls.header}>
          <div className={cls.contacts}>
            {!isMedia && (
              <div className={classnames(cls.menuContainer)}>
                <ul className={cls.menu}>
                  <ServicesComponent isMobile modalBackground='black' isWhite />
                  {items.map(({ text, href }) => {
                    return (
                      <li className={cls.menuItem} key={text}>
                        <Link
                          style={{
                            borderBottom:
                              pathname === href ? "1px solid #fff" : "none",
                          }}
                          href={href}
                        >
                          <span className={cls.menuItemText}>{text}</span>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            )}
            <div>
              <Link style={{ maxHeight: "80px" }} href={"/"}>
                <div className={classnames(cls.logo)}></div>
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

          {isMedia && (
            <div
              className={classnames(cls.menuContainer, {
                [cls.mobile]: isMedia,
              })}
            >
              <ul className={cls.menu}>
                <ServicesComponent isMobile isWhite modalBackground='black' />
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
        </header>
        <main>
          <div className={cls.adsBlock}>
            <div className={classnames(cls.adsLogoContainer)}>
              <div className={cls.positionLogo}>
                <div className={classnames(cls.adsLogo)}></div>
              </div>
            </div>
            <div className={classnames(cls.adsLogoContainer)}>
              <div className={cls.positionLogo}>
                <p className={cls.adsBlockTitle}>Юридическое бюро </p>
                <span className={cls.adsBlockTitle}>ДЕ-ЮРЕКС</span>
              </div>
            </div>
            <div className={classnames(cls.adsLogoContainer)}>
              <div className={cls.positionLogo}>
                <p className={cls.adsBlockTitle}>ОГРН 1157847173670 |</p>
                <span className={cls.adsBlockTitle}>ИНН 7841023506</span>
              </div>
            </div>
          </div>
          <div className={classnames(cls.roomImageContainer)}>
            <Image
              className={classnames(cls.roomImg)}
              src={roomImg}
              alt='room'
            />
          </div>
        </main>
        <div className={cls.maps}>
          <div className={cls.mapImgContainer}>
            <div>
              <Image src={map} alt='map' />
            </div>
            <MapCard
              cityText='Офис 1: г. Санкт - Петербург'
              addressText='Саперный переулок дом 6, пом. 38-Н, 191014'
            />
          </div>
          <div className={cls.mapImgContainer}>
            <div>
              <Image src={map} alt='map' />
            </div>
            <MapCard
              cityText='Офис 2: г. Санкт - Петербург'
              addressText='Невский пр., 104, Санкт-Петербург, 191025'
            />
          </div>
          <div className={cls.mapImgContainer}>
            <div>
              <Image src={map} alt='map' />
            </div>
            <MapCard
              cityText='Офис 3: г. Санкт - Петербург'
              addressText='15 Линия В.О., д 38/59, литер В, помещение 5-Н, 199178'
            />
          </div>
          <div className={cls.mapImgContainer}>
            <div>
              <Image src={map} alt='map' />
            </div>
            <MapCard
              cityText='Офис 4: г. Москва Тверская'
              addressText='дом 27, строение 2, этаж 2, 199178'
            />
          </div>
        </div>
        <div style={{ minHeight: 400 }}></div>
        <Footer isWhite isDark />
      </div>
    </>
  );
};

export default ContactsWithUsPage;
