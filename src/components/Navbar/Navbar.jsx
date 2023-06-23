"use client";
import Link from "next/link";
import React, { useContext } from "react";
import style from "./navbar.module.css";
import { DarkModeToogle } from "../DarkModeToogle/DarkModeToogle";
import { THEME_LIGHT, ThemeContext } from "../../../context/ThemeContext";

const LIST_LINKS = [
  { id: 1, title: "Home", url: "/" },
  { id: 2, title: "Portfolio", url: "/portfolio" },
  { id: 3, title: "Blog", url: "/blog" },
  { id: 4, title: "About", url: "/about" },
  { id: 5, title: "Contact", url: "/contact" },
];

const Navbar = () => {
  const { mode } = useContext(ThemeContext);

  return (
    <div className={style.container}>
      <Link className={style.logo} href="/">
        Lamamia
      </Link>
      <div className={style.links}>
        <DarkModeToogle />
        {LIST_LINKS.map((link) => (
          <Link key={link.id} href={link.url}>
            {link.title}
          </Link>
        ))}
        <button className={style.logout}>Logout</button>
      </div>
      <div
        className={style.background}
        style={
          mode === THEME_LIGHT
            ? {
                backgroundColor: "#ffffff",
                boxShadow: "rgba(17, 17, 17,1.5) 1px -20px 50px",
              }
            : {
                backgroundColor: "#111",
                boxShadow: "rgba(255, 255, 255,1.5) 1px -20px 50px",
              }
        }
      />
    </div>
  );
};

export default Navbar;
