import cls from "./MapCard.module.css";

interface MapCardProps {
  cityText: string;
  addressText: string;
}

const MapCard = (props: MapCardProps) => {
  const { addressText, cityText } = props;
  return (
    <div className={cls.mapInfoCard}>
      <div>
        <span className={cls.cityText}>{cityText}</span>
      </div>
      <div>
        <span className={cls.addressText}>{addressText}</span>
      </div>
      <div>
        <span className={cls.phone}>Номер телефона:</span>{" "}
        <span className={cls.number}> +7 (812) 942-31-90</span>
      </div>
      <div>
        <span className={cls.email}>E-mail:</span>{" "}
        <span className={cls.emailAddress}>deureks@deureks.ru</span>
      </div>
    </div>
  );
};

export default MapCard;
