"use client";

import { ReactNode, useEffect, useState } from "react";
import "../../../components/swiper/swiper.css";

import cls from "../../../styles/menuContactWithMe.module.css";
import classnames from "classnames";
import Link from "next/link";
import Image from "next/image";
import roomImg from "@/assets/room.png";

import { items } from "../../../components/menu/items";

const ContactsWithUsPage = () => {
  const [isMedia, setIsMedia] = useState<boolean>(false);

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
                <div></div>
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
          <Image src={roomImg} alt='room' />
        </main>
      </div>
    </>
  );
};

export default ContactsWithUsPage;
