import Title from "@/components/Title/Title";
import cls from "./publications.module.css";
import img from "@/assets/IMG_3772 1 (1).png";
import Image from "next/image";
import Img1 from "@/assets/Frame 11.png";
import Img2 from "@/assets/Frame 12.png";
import Img3 from "@/assets/Group 164.png";
import Img4 from "@/assets/Group 165.png";
import Link from "next/link";

const Page = () => {
  return (
    <div className={cls.contentContainer}>
      <div>
        <Image className={cls.image} src={img} alt='image' />
      </div>
      <div className={cls.publicationsContainer}>
        <Title>ПУБЛИКАЦИИ СМИ</Title>
      </div>
      <div className={cls.mainImageContainer}>
         <div className={cls.mainImageItem}>
          <Link
            target='_blank'
            href={
              "https://vc.ru/legal/1440147-top-30-luchshih-yuridicheskih-kompanii-sankt-peterburga-v-2024-godu-po-reitingu-otzyvam-cenam#-De-yureks-"
            }
          >
            <Image className={cls.image} src={Img1} alt='image' />
          </Link>
        </div>
           <div className={cls.mainImageItem}>
          <Link
            target='_blank'
            href={
              "https://vc.ru/legal/1454378-top-30-luchshih-advokatov-i-advokatskih-kontor-sankt-peterburga-po-reitingu-otzyvam-cenam#Grabovskiy-Anatoliy"
            }
          >
            <Image className={cls.image} src={Img2} alt='image' />
          </Link>
        </div>
        <div className={cls.mainImageItem}>
          <Link
            target='_blank'
            href={
              "/pdf/анатолий_грабовский_подводные_камни_при_обращении_в_суд_с_исками.pdf"
            }
          >
            <Image className={cls.image} src={Img4} alt='image' />
          </Link>
        </div>
        <div className={cls.mainImageItem}>
          <Link
            target='_blank'
            href={
              "https://vc.ru/legal/1454378-top-30-luchshih-advokatov-i-advokatskih-kontor-sankt-peterburga-po-reitingu-otzyvam-cenam#Grabovskiy-Anatoliy"
            }
          >
            <Image className={cls.image} src={Img3} alt='image' />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Page;
