"use client";
import "./swiper.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Menu from "../menu/Menu";
import Link from "next/link";
import { StaticImageData } from "next/image";

interface Item {
  src: StaticImageData;
  alt: string;
}

interface SwiperComponentProps {
  items: Item[];
}

const textItems = [
  {
    text: "Закон защищает тех у кого сильный адвокат",
    quote: null,
  },
  {
    text: "“ИСТИНА - УДЕЛ НЕМНОГИХ, ЗАБЛУЖДЕНИЕ ЖЕ ОБЫЧНО И ПОВСЕМЕСТНО”",
    quote: "Бальтасар Грасиан",
  },
  {
    text: "“СУТЬ ВЕЛИЧИЯ - НЕ КОЛИЧЕСТВО, А КАЧЕСТВО”",
    quote: "Бальтасар Грасиан",
  },
  {
    text: "“НЕ ГНАТЬСЯ ЗА МНОГИМ, СТРЕМИТЬСЯ К ГЛУБИНЕ”",
    quote: "Бальтасар Грасиан",
  },
];

export const SwiperComponent = (props: SwiperComponentProps) => {
  const { items } = props;
  return (
    <div className='MainSwiperContainer'>
      <Swiper
        slidesPerView={1}
        onSlideChange={() => {}}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        centeredSlides={true}
        flipEffect={{ slideShadows: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        className='mySwiper'
      >
        {items.map(({}, index) => {
          return (
            <SwiperSlide className={"swiperItem"} key={index}>
              <div className={`bg-${index + 1} bg`}>
                <div className={"swiperContainer"}>
                  <div className={"top"}>
                    <div className={"topContainer"}>
                      <div className='headerContainer'>
                        <div className='menuHeaderContainer'>
                          <Menu />
                        </div>

                        <div>
                          <Link style={{ maxHeight: "80px" }} href={"/"}>
                            <div className='logo'></div>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={"bottom"}>
                    <div className={"bottomContainer"}>
                      <div className='mainTextContainer'>
                        <blockquote>
                          <p className='mainText'>{textItems[index].text}</p>
                          <footer>
                            <p className='quoteText'>
                              {textItems[index].quote && textItems[index].quote}
                            </p>
                          </footer>
                        </blockquote>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};
