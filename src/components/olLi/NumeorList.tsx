import cls from "./NumeorList.module.css";

interface NumeorListProps {
  items: Array<string>;
}

const NumeorList = (props: NumeorListProps) => {
  const { items } = props;
  return (
    <>
      <div className={cls.NumeorList}>
        <ol>
          {items.map((str, index) => {
            return (
              <li key={index}>
                <p>{str}</p>
              </li>
            );
          })}
        </ol>
      </div>
    </>
  );
};

export default NumeorList;
