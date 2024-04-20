"use client";

import React, { useState } from "react";
import styles from "./links.module.css";
import NavLink from "./navLink/NavLink";
import Image from "next/image";

const session: boolean = true;
const isAdmin: boolean = true;

const Links = () => {
  const [open, setOpen] = useState(false);

  const links = [
    {
      title: "ЧатБот",
      path: "/",
    },
    {
      title: "CityPass",
      path: "https://astana.citypass.kz/ru/",
    },
    {
      title: "О нас",
      path: "/about",
    },
    {
      title: "Новости",
      path: "https://astana.citypass.kz/ru/category/novosti/",
    },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.links}>
        {links.map((link) => (
          <NavLink item={link} key={link.title} />
        ))}
        {session ? (
          <>
            {isAdmin && <NavLink item={{ title: "Admin", path: "/admin" }} />}
            <button className={styles.logout}>Выйти</button>
          </>
        ) : (
          <NavLink item={{ title: "Войти", path: "/login" }} />
        )}
      </div>
      <Image
        src="/burger.svg"
        alt="menu"
        width={30}
        height={30}
        onClick={() => setOpen((prev) => !prev)}
        className={styles.menuBtn}
      />
      {open && (
        <div className={styles.mobileLinks}>
          {links.map((link) => (
            <NavLink item={link} key={link.title} />
          ))}
          {session ? (
            <>
              {isAdmin && <NavLink item={{ title: "Admin", path: "/admin" }} />}
              <button className={styles.logout}>Выйти</button>
            </>
          ) : (
            <NavLink item={{ title: "Войти", path: "/login" }} />
          )}
        </div>
      )}
    </div>
  );
};

export default Links;
