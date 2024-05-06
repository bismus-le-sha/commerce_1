import cls from "./NumeorList.module.css";

interface NumeorListBorderProps {
  items: Array<string>;
}

const NumeorListBorder = (props: NumeorListBorderProps) => {
  const { items } = props;
  return (
    <>
      <div className={cls.NumeorListBorder}>
        <ol>
          {items.map((str) => {
            return (
              <li>
                <p>{str}</p>
              </li>
            );
          })}
        </ol>
      </div>
    </>
  );
};

export default NumeorListBorder;
