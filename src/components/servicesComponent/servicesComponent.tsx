import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { Services } from "../menu/items";
import Link from "next/link";
import cls from "@/app/(routes)/(is)/otherServices/pagesMenu.module.css";
import Modal from "react-modal";
import Image from "next/image";
import minus from "@/assets/minus.svg";

interface ServicesComponent {
  isWhite?: boolean;
  isMobile?: boolean;
  modalBackground?: "white" | "black";
}

const ServicesComponent = (props: ServicesComponent) => {
  const { isWhite, isMobile, modalBackground = "white" } = props;
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const pathname = usePathname();

  const handleOpen = () => {
    setIsOpen((prev) => !prev);
  };

  const handleOpenModal = () => {
    setIsOpenModal((prev) => !prev);
  };

  const closeModal = () => {
    setIsOpenModal(false);
  };
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      borderRadius: "30px",
      backgroundColor: modalBackground,
    },
  };

  return (
    <>
      {isMobile ? (
        <>
          {isOpenModal ? (
            <>
              <Modal
                onRequestClose={closeModal}
                style={customStyles}
                isOpen={isOpenModal}
                shouldCloseOnEsc
              >
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <div>
                    <li
                      className={cls.menuItem}
                      style={{
                        cursor: "pointer",
                        color: isWhite ? "white" : "#000",
                      }}
                      onClick={handleOpenModal}
                    >
                      Услуги
                    </li>
                    {Services.map(({ href, text }) => {
                      return (
                        <li className={cls.menuItem} key={text}>
                          <Link href={href}>
                            <span
                              style={{
                                color: isWhite ? "white" : "#000",
                                borderBottom:
                                  pathname === href ? "1px solid #000" : "none",
                              }}
                              className={cls.menuItemText}
                            >
                              {text}
                            </span>
                          </Link>
                        </li>
                      );
                    })}
                  </div>
                  <div>
                    <Image onClick={closeModal} src={minus} alt='minus' />
                  </div>
                </div>
              </Modal>
            </>
          ) : (
            <li
              className={cls.menuItem}
              style={{ cursor: "pointer", color: isWhite ? "white" : "#000" }}
              onClick={handleOpenModal}
            >
              Услуги
            </li>
          )}
        </>
      ) : (
        <>
          {isOpen ? (
            <>
              <li
                className={cls.menuItem}
                style={{ cursor: "pointer", color: isWhite ? "white" : "#000" }}
                onClick={handleOpen}
              >
                Услуги
              </li>
              {Services.map(({ href, text }) => {
                return (
                  <li className={cls.menuItem} key={text}>
                    <Link href={href}>
                      <span
                        style={{
                          color: isWhite ? "white" : "#000",
                          borderBottom:
                            pathname === href ? "1px solid #000" : "none",
                        }}
                        className={cls.menuItemText}
                      >
                        {text}
                      </span>
                    </Link>
                  </li>
                );
              })}
            </>
          ) : (
            <li
              className={cls.menuItem}
              style={{ cursor: "pointer", color: isWhite ? "white" : "#000" }}
              onClick={handleOpen}
            >
              Услуги
            </li>
          )}
        </>
      )}
    </>
  );
};

export default ServicesComponent;
