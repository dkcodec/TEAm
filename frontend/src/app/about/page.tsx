import Image from "next/image";
import React from "react";
import styles from "./about.module.css";

function AboutPage() {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h2 className={styles.subTitle}>About agency</h2>
        <h1 className={styles.title}>
          We crate digital ideas that are bigger, bolder, braver and better.
        </h1>
        <p className={styles.desc}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia
          natus necessitatibus modi inventore molestias cupiditate, sequi
          reiciendis ipsa a nulla quae laboriosam exercitationem nesciunt saepe
          tempora, repudiandae vel officiis corrupti.
        </p>
        <div className={styles.boxes}>
          <div className={styles.box}>
            <h1>100K+</h1>
            <p>Year of experience</p>
          </div>
          <div className={styles.box}>
            <h1>100K+</h1>
            <p>Year of experience</p>
          </div>
          <div className={styles.box}>
            <h1>100K+</h1>
            <p>Year of experience</p>
          </div>
        </div>
      </div>
      <div className={styles.imgContainer}>
        <Image src="/about.png" alt="About" fill className={styles.Img} />
      </div>
    </div>
  );
}

export default AboutPage;
