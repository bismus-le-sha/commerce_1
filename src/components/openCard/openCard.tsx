"use client";
import { ReactNode, useState } from "react";
import cls from "./openCard.module.css";
import Image from "next/image";
import plus from "@/assets/plus.svg";
import minus from "@/assets/minus.svg";

interface OpenCardProps {
  trigger: ReactNode;
  children: ReactNode;
}

const OpenCard = (props: OpenCardProps) => {
  const { trigger, children } = props;
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen((prev) => !prev);
  };

  const icon = isOpen ? minus : plus;

  return (
    <>
      <div className={cls.triggerBtnContainer}>
        {trigger}
        <button className={cls.triggerBtn} onClick={handleClick}>
          <Image src={icon} alt='icon' />
        </button>
      </div>
      {isOpen && children}
    </>
  );
};

export default OpenCard;
