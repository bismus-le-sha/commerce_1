"use client";

import classnames from "classnames";
import polygonForward from "../../assets/Polygon 4.svg";
import polygonBack from "../../assets/PolygonBack.svg";
import polygonBlackBack from "../../assets/PolygonBackBlack.svg";

import cls from "./main.module.css";
import { ReactNode, useState } from "react";
import Image from "next/image";

interface MainCaseProps {
  img?: string;
  className: string;
  text: string;
  mainText: ReactNode;
  isButtonActive?: boolean;
}

const MainCase = (props: MainCaseProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const { text, className, mainText, isButtonActive } = props;
  const handleClick = () => {
    setIsOpen((prev) => !prev);
  };

  const polygon = isButtonActive && (isOpen ? polygonBack : polygonForward);

  const mods = { [cls.open]: isOpen };

  return (
    <>
      {!isOpen && (
        <div className={classnames(cls.img, className)}>
          <div className={cls.imgContainer}>
            <p>{text}</p>

            {isButtonActive && (
              <button onClick={handleClick}>
                <Image src={polygon} alt='logo' />
              </button>
            )}
          </div>
        </div>
      )}
      {isOpen && (
        <>
          <div className={classnames(cls.img, className, mods)}>
            <div className={cls.imgContainer}>
              {isButtonActive && (
                <button onClick={handleClick}>
                  <Image src={polygon} alt='logo' />
                </button>
              )}
            </div>
          </div>
          <div>
            <p className={cls.mainText}>{mainText}</p>
            <div className={cls.caseButtonContainer}>
              {isButtonActive && (
                <button onClick={handleClick}>
                  <Image src={polygonBlackBack} alt='logo' />
                </button>
              )}
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default MainCase;
