"use client";

import casePortfolio from "../../../../assets/casePortfolio.svg";
import cls from "../../../../_pages/cases/menu.module.css";
import CaseCard from "@/components/caseCard/CaseCard";

const Cards = () => {
  return (
    <div className={cls.casesCards}>
      <CaseCard
        className={cls["case-2"]}
        img={casePortfolio}
        email={"deureks@deureks.ru"}
        name={"Олег Дейнеко"}
        position={"Адвокат, Управляющий партнер"}
        tel={"+7 (812) 942-32-90"}
        linkHref={"oleg.pdf"}
      />
    </div>
  );
};

export default Cards;
