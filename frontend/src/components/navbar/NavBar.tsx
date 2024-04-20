import React from "react";
import Links from "./links/Links";
import styles from "./navbar.module.css";
import Link from "next/link";
import Image from "next/image";
const NavBar = () => {
  return (
    <div className={styles.container}>
      <Link href="/">
        <Image src="/Logo.png" alt="logo" width={150} height={50} />
      </Link>

      <div>
        <Links />
      </div>
    </div>
  );
};

export default NavBar;
