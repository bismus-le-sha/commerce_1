import { CSSProperties, MutableRefObject } from "react";
import cls from "./ObserverList.module.css";
import Link from "next/link";

interface ObserverListProps {
  items: Array<{ text: string; linkRef: string }>;
  type?: CSSProperties["listStyle"];
  margin?: CSSProperties["margin"];
  allRef: MutableRefObject<Element | null>;
}

const ObserverList = (props: ObserverListProps) => {
  const { items, type = "disc", margin, allRef } = props;

  return (
    <>
      <div className={cls.ObserverList}>
        <ol ref={allRef}>
          {items.map((props) => {
            const { text, linkRef } = props;
            return (
              <li style={{ listStyle: type, margin }}>
                <Link href={`#${linkRef}`}>{text}</Link>
              </li>
            );
          })}
        </ol>
      </div>
    </>
  );
};

export default ObserverList;
