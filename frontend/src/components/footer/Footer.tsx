import React from "react";
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>Astana Pass ChatBot</div>
      <div className={styles.text}>
        ©2024 «CityPass Kazakhstan» All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
