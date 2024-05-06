import Title from "@/components/Title/Title";
import cls from "./publications.module.css";
import img from "@/assets/IMG_3772 1 (1).png";
import Image from "next/image";
import Img1 from "@/assets/Group 164.png";
import Img2 from "@/assets/Group 165.png";

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
          <Image className={cls.image} src={Img1} alt='image' />
        </div>
        <div className={cls.mainImageItem}>
          <Image className={cls.image} src={Img2} alt='image' />
        </div>
      </div>
    </div>
  );
};

export default Page;
