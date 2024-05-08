import casePortfolio from "../../../../assets/casePortfolio.svg";
import CaseCard from "../../../../components/caseCard/CaseCard";
import cls from "../../../../_pages/cases/menu.module.css";

const Cards = () => {
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
    </div>
  );
};

export default Cards;
