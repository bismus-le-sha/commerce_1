import { CSSProperties } from "react";
import cls from "./List.module.css";

interface ListBorderProps {
  items: Array<string>;
  type?: CSSProperties["listStyle"];
  border?: boolean;
}

const ListBorder = (props: ListBorderProps) => {
  const { items, type = "disc", border = true } = props;

  return (
    <>
      <div
        style={{
          border: border ? "2px solid #727171" : "none",
        }}
        className={cls.ListBorder}
      >
        <ol>
          {items.map((str) => {
            return (
              <li style={{ listStyle: type }}>
                <p>{str}</p>
              </li>
            );
          })}
        </ol>
      </div>
    </>
  );
};

export default ListBorder;
