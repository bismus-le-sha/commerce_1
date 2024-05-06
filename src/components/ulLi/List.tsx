"use client";

import { CSSProperties } from "react";
import cls from "./List.module.css";

interface ListProps {
  items: Array<string>;
  type?: CSSProperties["listStyle"];
  margin?: CSSProperties["margin"];
}

const List = (props: ListProps) => {
  const { items, type = "disc", margin } = props;


  return (
    <>
      <div className={cls.List}>
        <ol>
          {items.map((str) => {
            return (
              <li style={{ listStyle: type, margin }}>
                <p>{str}</p>
              </li>
            );
          })}
        </ol>
      </div>
    </>
  );
};

export default List;
