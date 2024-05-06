import cls from "./NumeorList.module.css";

interface NumeorListBorderAroundProps {
  items: Array<string>;
}

const NumeorListBorderAround = (props: NumeorListBorderAroundProps) => {
  const { items } = props;
  return (
    <>
      <div className={cls.NumeorListBorderAround}>
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

export default NumeorListBorderAround;
