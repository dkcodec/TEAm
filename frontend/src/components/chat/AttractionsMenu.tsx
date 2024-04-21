import React from "react";
import styles from "./AttractionsMenu.module.css";

const attractions = [
  {
    name: "МОНУМЕНТ «АСТАНА-БАЙТЕРЕК»",
    work_time: {
      ежедневно: "с 09:00 до 21:00",
      "Күн сайын": "09:00-ден 21:00-ге дейін",
      Daily: "from 09:00 to 21:00",
    },
    address: "Астана, Нуржол бульвар, 14",
  },
  {
    name: "ОКЕАНАРИУМ «AILAND»",
    work_time: {
      ежедневно: "с 09:00 до 20:00",
      "Күн сайын": "09:00-ден 20:00-ге дейін",
      Daily: "from 09:00 to 20:00",
    },
    address: "Астана, Коргалжинское шоссе, 2",
  },
  {
    name: "ТЕАТР АНИМАТРОНИКСОВ «ДЖУНГЛИ»",
    work_time: {
      ежедневно: "с 10:00 до 20:00",
      "Күн сайын": "09:00-ден 20:00-ге дейін",
      Daily: "from 09:00 to 20:00",
    },
    address: "г. Астана, Коргалжинское шоссе, 2",
  },
  {
    name: "КОЛЕСО ОБОЗРЕНИЯ «AILAND»",
    work_time: {
      ежедневно: "с 09:00 до 20:00",
      "Күн сайын": "09:00-ден 20:00-ге дейін",
      Daily: "from 09:00 to 20:00",
    },
    address: "Астана, Коргалжинское шоссе, 2",
  },
  {
    name: "МУЗЕЙ ЭНЕРГИИ БУДУЩЕГО «НУР-АЛЕМ» (ЭКСПО)",
    work_time: {
      ежедневно: "с 10:00 до 20:00, Понедельник - Технический день",
      "Күн сайын": "10:00-ден 20:00-ге дейін, дүйсенбі-техникалық күн",
      Daily: "from 10:00 to 20:00, Monday - Technical day",
    },
    address: "Астана, Орынбор, 55",
  },
];

const AttractionsMenu: React.FC = () => {
  return (
    <div className={styles.attractionsMenu}>
      <h2>Достопримечательности</h2>
      <ul>
        {attractions.map((attraction, index) => (
          <li key={index}>
            <h3>{attraction.name}</h3>
            <p>Адрес: {attraction.address}</p>
            <p>Режим работы:</p>
            <ul>
              {Object.entries(attraction.work_time).map(([day, time]) => (
                <li key={day}>
                  {day}: {time}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AttractionsMenu;
