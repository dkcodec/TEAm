import Image from "next/image";
import React from "react";
import styles from "./about.module.css";
import Counter from "@/components/counter/Counter";

function AboutPage() {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h2 className={styles.subTitle}>О CityPass ChatBot</h2>
        <h1 className={styles.title}>
          Мы разработали очень удобного для наших пользователь бота.
        </h1>
        <p className={styles.desc}>
          Бот в сети 24 на 7. Всегда готов помочь, нашим пользователям. Может
          рассказать о категориях, музеях, специфичных местах куда стоит сходить
          в нашем прекрасном городе!
        </p>
        <div className={styles.boxes}>
          <div className={styles.box}>
            <h1>
              <Counter val={10} time={70} />+
            </h1>
            <p>Лет опыта</p>
          </div>
          <div className={styles.box}>
            <h1>
              <Counter val={100} time={20} />
              K+
            </h1>
            <p>Вариантов ответа</p>
          </div>
          <div className={styles.box}>
            <h1>
              <Counter val={200} time={10} />
              K+
            </h1>
            <p>Активных пользователей</p>
          </div>
        </div>
      </div>
      <div className={styles.imgContainer}>
        <Image
          src="https://images.pexels.com/photos/6153354/pexels-photo-6153354.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="About"
          fill
          className={styles.Img}
        />
      </div>
    </div>
  );
}

export default AboutPage;
