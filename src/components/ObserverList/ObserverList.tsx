import { CSSProperties, MutableRefObject } from "react";
import cls from "./ObserverList.module.css";
import Link from "next/link";

interface ObserverListProps {
  items: Array<{ text: string; linkRef: string }>;
  type?: CSSProperties["listStyle"];
  margin?: CSSProperties["margin"];
  allRef: MutableRefObject<HTMLOListElement | null>;
  isWHite?: boolean;
}

const ObserverList = (props: ObserverListProps) => {
  const { items, type = "disc", margin, allRef, isWHite = false } = props;

  return (
    <>
      <div className={cls.ObserverList}>
        <ol ref={allRef}>
          {items.map((props) => {
            const { text, linkRef } = props;
            return (
              <li id={linkRef} style={{ listStyle: type, margin }}>
                <Link
                  style={{ color: isWHite ? "#fff" : "#000" }}
                  href={`#${linkRef}`}
                >
                  {text}
                </Link>
              </li>
            );
          })}
        </ol>
      </div>
    </>
  );
};

export default ObserverList;
