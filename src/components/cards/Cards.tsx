"use client";

import casePortfolio from "../../assets/casePortfolio.svg";
import CaseCard from "../../components/caseCard/CaseCard";
import cls from "../../_pages/cases/menu.module.css";
import { usePathname } from "next/navigation";

const Cards = () => {
  const pathname = usePathname();
  const isTaxes = pathname === "/taxes";
  const isRealEstate = pathname === "/realEstate";
  const isIntellectualRight = pathname === "/intellectualRight";

  return (
    <div className={cls.casesCards}>
      <CaseCard
        className={cls["case-1"]}
        img={casePortfolio}
        email={"deureks.law@gmail.com"}
        name={"Анатолий Грабовский"}
        position={"Адвокат, Управляющий партнер"}
        tel={"+7 (812) 942-32-90"}
        linkHref={"anatoly.pdf"}
      />
      <CaseCard
        className={cls["case-2"]}
        img={casePortfolio}
        email={"deureks.law@gmail.com"}
        name={"Олег Дейнеко"}
        position={"Адвокат, Управляющий партнер"}
        tel={"+7 (812) 942-32-90"}
        linkHref={"oleg.pdf"}
      />
      {!isTaxes && !isRealEstate && !isIntellectualRight && (
        <CaseCard
          className={cls["case-3"]}
          img={casePortfolio}
          email={"deureks.law@gmail.com"}
          name={"Максим Задорожный"}
          position={"Главный юрист"}
          tel={"+7 (812) 942-32-90"}
          linkHref={"maksim.pdf"}
        />
      )}
      {!isTaxes && !isRealEstate && !isIntellectualRight && (
        <CaseCard
          className={cls["case-4"]}
          img={casePortfolio}
          email={"deureks.law@gmail.com"}
          name={"Денис Чигир"}
          position={"Старший юрист"}
          tel={"+7 (812) 942-32-90"}
          linkHref={"denis.pdf"}
        />
      )}
      {!isTaxes && !isRealEstate && !isIntellectualRight && (
        <CaseCard
          className={cls["case-5"]}
          img={casePortfolio}
          email={"deureks.law@gmail.com"}
          name={"Марина Исакова"}
          position={"Главный юрист"}
          tel={"+7 (812) 942-32-90"}
          linkHref={"marina.pdf"}
        />
      )}
      {!isRealEstate && !isIntellectualRight && (
        <CaseCard
          className={cls["case-6"]}
          img={casePortfolio}
          email={"deureks.law@gmail.com"}
          name={"Светлана Брешенкова"}
          position={"Аудитор"}
          tel={"+7 (812) 942-32-90"}
          linkHref={"svetlana.pdf"}
        />
      )}
    </div>
  );
};

export default Cards;
