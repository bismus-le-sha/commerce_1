import Cards from "@/components/cards/Cards";
import cls from "./realEstate.module.css";
import SelectedText from "@/components/selectedText/SelectedText";
import Title from "@/components/Title/Title";

const ArbitrationSelectedComponent = ({
  children,
}: {
  children: ReactNode;
}) => (
  <SelectedText
    textAlign='left'
    isBorderRadius
    padding='20px'
    borderColor='#404040'
  >
    {children}
  </SelectedText>
);

const Page = () => {
  return (
    <>
      <div className={cls.contentContainer}>
        <Title>НЕДВИЖИМОСТЬ И СТРОИТЕЛЬСТВО</Title>

        <Title isSubTitle>
          Услуги и помощь по недвижимости и строительству от юридического бюро
          "Де-Юрекс"
        </Title>
        <div className={cls.textBlock}>
          <p>
            Владение недвижимостью и вопросы строительства сопряжены с
            множеством юридических аспектов, начиная от покупки и продажи
            объектов до разрешения строительных и земельных споров. Юридическое
            бюро "Де-Юрекс" предоставляет полный спектр услуг в области
            недвижимости и строительства, обеспечивая наших клиентов надежной
            правовой поддержкой на каждом этапе их взаимодействия с недвижимым
            имуществом.
          </p>
        </div>

        <h2>Основные услуги:</h2>
        <div className={cls.mainStrategyBlock}>
          <ol>
            <ArbitrationSelectedComponent>
              <h3>
                <li>Правовая экспертиза и консультации:</li>
              </h3>
              <ul className={cls.nestedListItems}>
                <li>
                  <p>
                    Предварительная проверка юридической чистоты объекта
                    недвижимости;
                  </p>
                </li>
                <li>
                  <p>
                    Консультации по вопросам купли-продажи, аренды и ипотеки;
                  </p>
                </li>
                <li>
                  <p>
                    Разъяснение сложных вопросов земельного и градостроительного
                    законодательства.
                  </p>
                </li>
              </ul>
            </ArbitrationSelectedComponent>
            <ArbitrationSelectedComponent>
              <h3>
                <li>Сопровождение сделок с недвижимостью:</li>
              </h3>
              <ul className={cls.nestedListItems}>
                <li>
                  <p>
                    Подготовка и анализ договоров купли-продажи, аренды, дарения
                    и прочих;
                  </p>
                </li>
                <li>
                  <p>
                    Помощь в получении необходимых документов из государственных
                    регистров и кадастров
                  </p>
                </li>
                <li>
                  <p>
                    Представление интересов клиента при переговорах с
                    продавцами, покупателями и арендаторами.
                  </p>
                </li>
              </ul>
            </ArbitrationSelectedComponent>
            <ArbitrationSelectedComponent>
              <h3>
                <li>Регистрационные процедуры:</li>
              </h3>
              <ul className={cls.nestedListItems}>
                <li>
                  <p>
                    Подача и контроль за процессом регистрации прав
                    собственности
                  </p>
                </li>
                <li>
                  <p>Регистрация перехода прав при смене владельца;</p>
                </li>
                <li>
                  <p>Регистрация залогов и обременений на недвижимость.</p>
                </li>
              </ul>
            </ArbitrationSelectedComponent>
            <ArbitrationSelectedComponent>
              <h3>
                <li>Юридическая поддержка строительства:</li>
              </h3>
              <ul className={cls.nestedListItems}>
                <li>
                  <p>
                    Подготовка и согласование проектно-сметной документации;
                  </p>
                </li>
                <li>
                  <p>
                    Консультации по вопросам получения разрешений на
                    строительство;
                  </p>
                </li>
                <li>
                  <p>
                    Сопровождение строительных проектов с точки зрения
                    соблюдения законодательства.
                  </p>
                </li>
              </ul>
            </ArbitrationSelectedComponent>
            <ArbitrationSelectedComponent>
              <h3>
                <li>Разрешение споров:</li>
              </h3>
              <ul className={cls.nestedListItems}>
                <li>
                  <p>Юридическое сопровождение в судебных разбирательствах;</p>
                </li>
                <li>
                  <p>Разрешение земельных и соседских споров;</p>
                </li>
                <li>
                  <p>
                    Защита прав собственников и арендаторов в спорах с
                    государственными органами.
                  </p>
                </li>
              </ul>
            </ArbitrationSelectedComponent>
          </ol>
        </div>
        <div style={{ marginBottom: 20 }}>
          <p>
            Юридическое бюро "Де-Юрекс" обладает многолетним опытом работы в
            сфере недвижимости и строительства, предоставляя клиентам
            высококвалифицированную помощь в решении самых разнообразных задач.
            Наши специалисты постоянно отслеживают изменения в законодательстве,
            что позволяет оперативно реагировать на нововведения и защищать
            интересы клиентов с максимальной эффективностью.
          </p>
          <p>
            Мы гарантируем индивидуальный подход к каждому клиенту и готовы
            предложить оптимальные решения для ваших юридических задач в области
            недвижимости и строительства. Обращайтесь в юридическое бюро
            "Де-Юрекс" за профессиональной поддержкой и защитой ваших прав.
          </p>
        </div>
        <Title isSubTitle>
          Для получения консультации или детальной информации о наших услугах,
          пожалуйста, свяжитесь с нами!
        </Title>
      </div>
      <div>
        <div style={{ position: "sticky", top: "100px" }}>
          <div className='price'>
            <span>От 7.000 Р</span>
          </div>
          <Cards />
        </div>
      </div>
    </>
  );
};

export default Page;
