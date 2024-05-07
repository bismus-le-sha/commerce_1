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

const textItems = [
  {
    text: "ПРОСТЫЕ РЕШЕНИЯ СЛОЖНЫХ ВОПРОСОВ",
    quote: null,
  },
  {
    text: "“НЕ ГНАТЬСЯ ЗА МНОГИМ, СТРЕМИТЬСЯ К ГЛУБИНЕ”",
    quote: "Бальтасар Грасиан",
  },
  {
    text: "“ИСТИНА - УДЕЛ НЕМНОГИХ, ЗАБЛУЖДЕНИЕ ЖЕ ОБЫЧНО И ПОВСЕМЕСТНО”",
    quote: "Бальтасар Грасиан",
  },
  {
    text: "“СУТЬ ВЕЛИЧИЯ - НЕ КОЛИЧЕСТВО, А КАЧЕСТВО”",
    quote: "Бальтасар Грасиан",
  },
];

export const SwiperComponent = ({ items }: { items: Item[] }) => {
  return (
    <div>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={() => {}}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        centeredSlides={true}
        flipEffect={{ slideShadows: true }}
        autoplay={{ delay: 1500, disableOnInteraction: false }}
        className='mySwiper'
      >
        {items.map(({}, index) => {
          return (
            <SwiperSlide key={index}>
              <div className={`bg-${index + 1} bg`}>
                <div className='headerContainer'>
                  <div className='menuHeaderContainer'>
                    <Menu />
                  </div>
                  <Link style={{ maxHeight: "80px" }} href={"/"}>
                    <div className='logo'></div>
                  </Link>
                </div>

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
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};
