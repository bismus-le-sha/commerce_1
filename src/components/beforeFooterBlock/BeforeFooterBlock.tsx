import { items } from "../menu/items";
import cls from "./BeforeFooterBlock.module.css";

const BeforeFooterBlock = () => {
  return (
    <div>
      <div className={cls.linksBeforeFooterContainer}>
        <ul className={cls.linksBeforeFooterList}>
          {items.map(({ text, href }) => {
            return (
              <li key={text} className={cls.linksBeforeFooterItem}>
                <a className={cls.linksBeforeFooterLink} href={href}>
                  {text}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default BeforeFooterBlock;
