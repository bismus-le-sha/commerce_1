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
import ServicesComponent from "./servicesComponent/servicesComponent";
import BeforeFooterBlock from "@/components/beforeFooterBlock/BeforeFooterBlock";
import ContactsWithUs from "../(whiteBackground)/ContactsWithUs";

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
                  <ServicesComponent isMobile />
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
                <ServicesComponent isMobile modalBackground='black' />
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
              <a
                href='https://yandex.ru/maps/2/saint-petersburg/house/sapyorny_pereulok_6/Z0kYdQJmTkEGQFtjfXV1cH1lbA==/?from=api-maps&ll=30.356741%2C59.941168&origin=jsapi_2_1_79&z=17'
                target='_blank'
              >
                <Image src={map} alt='map' />
              </a>
            </div>
            <MapCard
              cityText='Офис 1: г. Санкт - Петербург'
              addressText='Саперный переулок дом 6, пом. 38-Н, 191014'
            />
          </div>
          <div className={cls.mapImgContainer}>
            <div>
              <a
                href='https://yandex.ru/maps/2/saint-petersburg/house/nevskiy_prospekt_22_24/Z0kYdQVkSUAFQFtjfXVydHVhZg==/?ll=30.324051%2C59.935922&z=17.53'
                target='_blank'
              >
                <Image src={map} alt='map' />
              </a>
            </div>
            <MapCard
              cityText='Офис 2: г. Санкт - Петербург'
              addressText='191186, Санкт-Петербург, Невский проспект 22-24, помещение 11-Н.'
            />
          </div>
          <div className={cls.mapImgContainer}>
            <div>
              <a
                href='https://yandex.ru/maps/2/saint-petersburg/house/15_ya_liniya_vasilyevskogo_ostrova_38_59v/Z0kYdAFnQU0OQFtjfXV1cX9lYg==/?from=api-maps&ll=30.267889%2C59.940366&origin=jsapi_2_1_79&z=17.21'
                target='_blank'
              >
                <Image src={map} alt='map' />
              </a>
            </div>
            <MapCard
              cityText='Офис 3: г. Санкт - Петербург'
              addressText='15 Линия В.О., д 38/59, литер В, помещение 5-Н, 199178'
            />
          </div>
          <div className={cls.mapImgContainer}>
            <div>
              <a
                href='https://yandex.ru/maps/213/moscow/house/tverskaya_ulitsa_27s2/Z04Ycw5nTEAPQFtvfXt3eXpmbQ==/?from=api-maps&ll=37.597558%2C55.768659&origin=jsapi_2_1_79&z=17.21'
                target='_blank'
              >
                <Image src={map} alt='map' />
              </a>
            </div>
            <MapCard
              cityText='Офис 4: г. Москва Тверская'
              addressText='дом 27, строение 2, этаж 2, 199178'
            />
          </div>
        </div>
        <ContactsWithUs />
        <BeforeFooterBlock />
        <Footer />
      </div>
    </>
  );
};

export default ContactsWithUsPage;
