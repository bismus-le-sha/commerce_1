"use client";

import Cards from "./Cards";

import { useEffect, useState } from "react";
import "../../../components/swiper/swiper.css";
import cls from "./card.module.css";
import classnames from "classnames";
import Link from "next/link";
import { items } from "../../../components/menu/items";
import { usePathname } from "next/navigation";
import Image from "next/image";
import arbitration1 from "@/assets/arbitration-1.png";
import arbitration2 from "@/assets/arbitration-2.png";
import clsx from "./aboutUs.module.css";
import AboutUsCard from "./AboutUsCard";
import letter1 from "@/assets/Group 96.png";
import letter2 from "@/assets/Group 95.png";
import allLetter from "@/assets/Group 97.png";
import Footer from "@/components/footer/footer";
import ServicesComponent from "@/components/servicesComponent/servicesComponent";

const Page = () => {
  const [isMedia, setIsMedia] = useState<boolean>(false);
  const pathname = usePathname();
  const isDark = pathname === "/arbitration";

  useEffect(() => {
    setIsMedia(document.body.clientWidth <= 700);
  }, []);

  const whiteStyle = {
    color: isDark ? "#fff" : "",
  };

  const whiteBgStyle = {
    backgroundColor: isDark ? "#fff" : "",
  };

  return (
    <>
      <div
        style={{
          backgroundColor: isDark ? "#282828" : "",
        }}
        className={cls.container}
      >
        <header className={cls.header}>
          <div className={cls.contacts}>
            <div>
              <Link style={{ maxHeight: "80px" }} href={"/"}>
                <div
                  className={classnames(
                    "logo",
                    cls.logo,
                    isDark && cls.logoWhite
                  )}
                ></div>
              </Link>
            </div>
            <div>
              <a
                style={whiteStyle}
                className={cls.phoneLink}
                href='tel:+78129423290'
              >
                +7 (812) 942-32-90
              </a>
              <h2 style={whiteStyle} className={cls.cityTitle}>
                Москва
              </h2>
            </div>
            <div>
              <a
                style={whiteStyle}
                className={cls.phoneLink}
                href='tel:+78129423290'
              >
                +7 (812) 942-32-90
              </a>
              <h2 style={whiteStyle} className={cls.cityTitle}>
                Санкт-Петербург
              </h2>
            </div>
          </div>
        </header>
        {isMedia && (
          <div
            className={classnames(cls.menuContainer, {
              [cls.mobile]: isMedia,
            })}
          >
            <ul className={cls.menu}>
              <ServicesComponent isMobile />
              {items.map(({ text, href }) => {
                return (
                  <li className={cls.menuItem} key={text}>
                    <Link href={href}>
                      <span
                        style={{
                          borderBottom:
                            pathname === href ? "1px solid #000" : "none",
                          ...whiteStyle,
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
          </div>
        )}
        <div className={cls.containerImage}>
          {!isMedia && (
            <div className={classnames(cls.menuContainer)}>
              <div>
                <span style={whiteBgStyle} className={cls.smallLine}></span>
                <span style={whiteBgStyle} className={cls.bigLine}></span>
              </div>
              <ul className={cls.menu}>
                <ServicesComponent />
                {items.map(({ text, href }) => {
                  return (
                    <li className={cls.menuItem} key={text}>
                      <Link href={href}>
                        <span
                          style={{
                            borderBottom:
                              pathname === href ? "1px solid #000" : "none",
                            ...whiteStyle,
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
              <div>
                <span style={whiteBgStyle} className={cls.bigLine}></span>
                <span
                  style={whiteBgStyle}
                  className={[cls.smallLine, cls.marginBottomSmallLine].join(
                    " "
                  )}
                ></span>
              </div>
            </div>
          )}
          <div className={cls.mainContentContainer}>
            <div className={clsx.arbitrationContainer}>
              <div className={clsx.arbitrationItem}>
                <div className={clsx.arbitrationImgContainer}>
                  <Image src={arbitration1} alt='arbitration1' />
                </div>
                <div className={clsx.arbitrationTextContainer}>
                  <p>
                    Юридическое бюро Де-Юрекс объединяет адвокатов, юристов и
                    специалистов в различных областях права и различных
                    экспертиз. Опыт юристов Де-Юрекс включает в себя резонансные
                    дела в г. Санкт-Петербург и Москве, а эксперты,
                    сотрудничащие с бюро в области различных экспертиз:
                    почерковедческих, финансово-экономических, оценочных и
                    психиатрических, автотехнических экспертиз признанные в
                    России кандидаты и доктора наук.{" "}
                  </p>
                </div>
              </div>

              <div className={clsx.arbitrationItem}>
                <div className={clsx.arbitrationTextContainer}>
                  <p>
                    География услуг охватывает территорию Российской Федерации,
                    страны СНГ и многие страны дальнего зарубежья, включая ОАЭ,
                    Турцию, Евросоюз, Австралию, Канаду и США. Адвокаты, Юристы
                    и Эксперты бюро имеют многолетний опыт в различных областях
                    права, что позволяет им предоставлять всесторонние
                    консультации и эффективно представлять интересы клиентов.
                    Индивидуальный подход к каждому клиенту уделяется
                    персональное внимание, чтобы в полной мере понять его
                    потребности и разработать конкретные решения.{" "}
                  </p>
                </div>
                <div className={clsx.arbitrationImgContainer}>
                  <Image src={arbitration2} alt='arbitration-2' />
                </div>
              </div>
              <div>
                <h2 className={clsx.someProjectTitle}>
                  Некоторые проекты <p> Де-Юрекс:</p>
                </h2>
                <div style={{ marginBottom: 40 }}>
                  <AboutUsCard
                    title={
                      <>
                        Добились аннулирования патента принадлежащего ПАО
                        "КАМАЗ"
                        <p className={clsx.redText}> Дело № СИП-801/2020</p>
                      </>
                    }
                    text={
                      <>
                        Действуя в интересах своего клиента ООО «КМЗ» добились в
                        Роспатенте признания недействительным патента Российской
                        Федерации No 104246 на полезную модель поршень для
                        двигателя внутреннего сгорания. Однако владелец патента
                        - ПАО 'КАМАЗ' категорически не хотел с этим соглашаться
                        и оспорил такое решение Роспатента в суде. Адвокат
                        Грабовский А.А. отстоял решение Роспатента в суде и
                        доказал несоответствие полезной модели по патенту
                        Российской Федерации No 104246 условию
                        патентоспособности «новизна». Дело № СИП-801/2020 По
                        мнению Роспатента, материалы возражения Грабовского А.А.
                        подтверждают несоответствие полезной модели по патенту
                        Российской Федерации No 104246 условию
                        патентоспособности «новизна»"
                      </>
                    }
                  />
                  <AboutUsCard
                    title={
                      <>
                        Добились в Верховном суде РФ отмены Постановления
                        кассационной инстанции по делу Милютиных
                        <p className={clsx.redText}> дело № 33-КГ19-8</p>
                      </>
                    }
                    text='Оставления в силе решения первой и апелляционной
                      инстанций, признав займ от родственника совершенный в
                      период брака как недействительную сделку; Жалоба в
                      Верховный суд была принята к рассмотрению Верховным судом
                      РФ, дело № 33-КГ19-8. Верховный суд удовлетворил жалобу.
                      Юридическое бюро Де-Юрекс сумело защитить интересы своего
                      клиента, избавив от мнимого долга на сумму более 2
                      миллионов рублей.'
                  />
                  <AboutUsCard
                    title={
                      <>
                        Провели  комплексный инициативный аудит due diligence
                        юридической
                      </>
                    }
                    text='Экономической, бухгалтерской и налоговой составляющих ООО «Кузнечный Рынок» (Кузнечный пер., 3, Санкт-Петербург) и ООО «Московский рынок» (ул. Решетникова, 12, Санкт-Петербург), проверка на предмет инвестирования, просчёт рисков, составление объективной оценки   Преимущественного Права Аренды и Преимущественного Права
                      на Выкуп'
                  />
                  <AboutUsCard
                    title={
                      <>
                        Добились для Санкт-Петербургской сети кафе "Емеля" право
                        использовать свое название в споре с Московскими
                        "Сухариками "Емеля"
                        <p className={clsx.redText}>
                          <Link
                            style={{ color: "red" }}
                            href={
                              "https://kad.arbitr.ru/Document/Pdf/97c30d39-06d9-42eb-b188-aa2aaee20b8a/eae8b7d7-8089-42b8-8b43-2b3088d91921/A40-67246-2011_20111227_Reshenija_i_postanovlenija.pdf?isAddStamp=True"
                            }
                          >
                            свидетельство №291940
                          </Link>
                        </p>
                      </>
                    }
                    text='То есть выиграли дело по иску "Сухариков "Емеля" к  сети кафе "Емеля" о прекращении неправомерного использования товарного знака и выплате компенсации; И в дальнейшем обратились в Федеральную службу по интеллектуальной собственности о досрочном прекращении товарного знака «Емеля» Федеральной службой по патентам и товарным знакам вынесено решение, согласно которому удовлетворено заявление от 27.09.2010 о досрочном прекращении правовой охраны товарного знака по свидетельству No291940 в отношении всех услуг 43 класса МКТУ. Подробнее'
                    linkText={
                      <Link
                        href={
                          "https://kad.arbitr.ru/Document/Pdf/97c30d39-06d9-42eb-b188-aa2aaee20b8a/eae8b7d7-8089-42b8-8b43-2b3088d91921/A40-67246-2011_20111227_Reshenija_i_postanovlenija.pdf?isAddStamp=True"
                        }
                      >
                        https://kad.arbitr.ru/Document/Pdf/97c30d39-06d9-42eb-b188-aa2aaee20b8a/eae8b7d7-8089-42b8-8b43-2b3088d91921/A40-67246-2011_20111227_Reshenija_i_postanovlenija.pdf?isAddStamp=True
                      </Link>
                    }
                  />
                  <AboutUsCard
                    title={
                      <>
                        Выиграли дело для Санкт-Петербургской сети кафе «Суши
                        Wok»,принадлежащей ООО «Маэстро» против самого
                        распространенного бренда в России «Суши Wok»
                        <p className={clsx.redText}>
                          <Link
                            style={{ color: "red" }}
                            href={
                              "https://kad.arbitr.ru/PdfDocument/616bdc32-ae9f-4137-83af-cf9918e291c2/4d1f5c8e-3cbd-42c3-8c2a-7915f40520f3/A56-23647-2013_20131024_Reshenie.pdf"
                            }
                          >
                            дело № А56-23647/2013
                          </Link>
                        </p>
                      </>
                    }
                    text='Принадлежащего ООО "Завод "КРОЛ" об обязании ответчика прекратить незаконное использование обозначения «Суши Wok», сходного до степени смешения по фонетическому и семантическому значению с зарегистрированным товарным знаком «Суши & Wok», несмотря на наличие у Истца товарного знака. А также впоследствии прекратили действие товарного знака. Подробности изложены на сайте Арбитражного суда Санкт-Петербурга и Ленинградской области, дело № А56-23647/2013 Подробнее'
                    linkText={
                      <Link
                        href={
                          "https://kad.arbitr.ru/PdfDocument/616bdc32-ae9f-4137-83af-cf9918e291c2/4d1f5c8e-3cbd-42c3-8c2a-7915f40520f3/A56-23647-2013_20131024_Reshenie.pdf"
                        }
                      >
                        https://kad.arbitr.ru/PdfDocument/616bdc32-ae9f-4137-83af-cf9918e291c2/4d1f5c8e-3cbd-42c3-8c2a-7915f40520f3/A56-23647-2013_20131024_Reshenie.pdf
                      </Link>
                    }
                  />
                  <AboutUsCard
                    title='Сформировали новую судебную практику по интеллектуальной собственности'
                    text='Сформировали новую судебную практику по интеллектуальной собственности, в пользу доверителя добились решений в судах общей юрисдикции и  арбитражном суде о взыскании рекордной компенсации более 2 млн. рублей за одно нарушение прав на интеллектуальную собственность'
                  />
                  <AboutUsCard
                    title='Защита прав на земельный участок в суде наследника М.Булгакова'
                    text='Защита прав на земельный участок в суде наследника М. Булгакова, истцам отказано в полном объеме, встречный иск нашего доверителя удовлетворен'
                  />
                  <AboutUsCard
                    title='Взыскание 5 млн. рублей убытков с ликвидатора ООО
                  «ИнжПетроСтрой» - А. Федотова'
                    text='Взыскание 5 млн. рублей убытков с ликвидатора ООО «ИнжПетроСтрой» - А. Федотова;   представительство Корпораций в делах с Комитетом имущественных отношений СанктПетербурга, включая: снижение неустойки, штрафов, защита в спорах о взыскании убытков'
                  />
                </div>

                <div className={clsx.infoCards}>
                  <div className={clsx.infoCard}>
                    <p>
                      Более 100 выигрышных арбитражных споров в сфере
                      строительного подряда сложных категорий;
                    </p>
                  </div>
                  <div className={clsx.infoCard}>
                    <p>
                      Более 1000 успешных процедур банкротства граждан (полное
                      освобождение от долгов) и предприятий, включая особо
                      сложные дела (ООО «Санкт-Петербургская лизинговая
                      компания») с задолженностью 3 млрд.+;
                    </p>
                  </div>
                  <div className={clsx.infoCard}>
                    <p>
                      Добились взыскания алиментов в процентах и твердой
                      денежной сумме одновременно, тем самым сформировав новую
                      практику по семейным спорам о взыскании алиментов;
                    </p>
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 40,
                  }}
                >
                  <div className={clsx.sertificats}>
                    <div>
                      <Image src={letter1} alt='letter1' />
                    </div>
                    <div>
                      <Image src={letter2} alt='letter2' />
                    </div>
                  </div>
                  <div>
                    <Image
                      style={{
                        color: "transparent",
                        width: "100%",
                        height: "100%",
                      }}
                      src={allLetter}
                      alt='allLetter'
                    />
                  </div>
                </div>
              </div>
            </div>

            <Cards />
          </div>
        </div>
        <Footer isWhite isDark />
      </div>
    </>
  );
};

export default Page;
