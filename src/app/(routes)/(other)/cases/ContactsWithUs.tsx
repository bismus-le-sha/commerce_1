import classnames from "classnames";
import cls from "./ContactsWithUs.module.css";
import Link from "next/link";

const ContactsWithUs = () => {
  return (
    <div className={[cls.main10, cls.bg].join(" ")}>
      <div className={classnames(cls.many, cls.whiteColor)}>
        <h2
          className={classnames(
            cls.mainTitleIntel,
            cls.whiteColor,
            cls.manyText
          )}
        >
          ОСТАЛИСЬ ВОПРОСЫ?
        </h2>
        <Link href={"/contactsWithUs"}>
          <button>СВЯЗАТЬСЯ С НАМИ</button>
        </Link>
      </div>
    </div>
  );
};

export default ContactsWithUs;
