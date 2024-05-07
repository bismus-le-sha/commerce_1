import Image from "next/image";
import React, { ReactNode, useState } from "react";
import minus from "@/assets/minusWhite.svg";
import plus from "@/assets/plusWhite.svg";
import cls from "./aboutUs.module.css";

interface aboutUsCardProps {
  title: string | ReactNode;
  text: string | ReactNode;
  linkText?: ReactNode;
}

const AboutUsCard = (props: aboutUsCardProps) => {
  const { text, title, linkText } = props;
  const [isOpen, setIsOpen] = useState(false);
  const icon = isOpen ? minus : plus;

  const handleOpen = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className={cls.clickableCard}>
      <div className={cls.headerTitle}>
        <h3>{title}</h3>
        <button onClick={handleOpen}>
          <Image alt='plusOrMinus' src={icon} />
        </button>
      </div>

      {isOpen && (
        <p>
          {text}
          <br />
          {linkText}
        </p>
      )}
    </div>
  );
};

export default AboutUsCard;
