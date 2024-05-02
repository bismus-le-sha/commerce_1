import classnames from "classnames";
import cls from "./caseCard.module.css";
import Link from "next/link";
import Image from "next/image";

interface CaseCardProps {
  className: string;
  name: string;
  position: string;
  email: string;
  tel: string;
  img: string;
  linkHref: string;
}

const CaseCard = (props: CaseCardProps) => {
  const { className, name, position, email, tel, img, linkHref } = props;

  return (
    <div className={cls.caseCard}>
      <div className={cls.caseImgContainer}>
        <div className={classnames(cls.img, className, cls.otherCases)}></div>
      </div>
      <div className={cls.cardInfo}>
        <h2 className={cls.name}>{name}</h2>
        <p className={cls.position}>{position}</p>
        <div>
          <span>
            <a
              className={classnames(cls.link, cls.emailLink)}
              href={`mailto:${email}`}
            >
              {email}
            </a>
            <a
              className={classnames(cls.link, cls.telLink)}
              href={`tel:${tel}`}
            >
              {tel}
            </a>
          </span>
        </div>
        <Link href={`/pdf/${linkHref}`}>
          <Image className={cls.casePortfolio} src={img} alt={"logo"} />
        </Link>
      </div>
    </div>
  );
};

export default CaseCard;
