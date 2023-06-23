"use client";
// import Link from "next/link";
import React, { useContext } from "react";
import style from "./footer.module.css";
import Image from "next/image";
import { ThemeContext, THEME_LIGHT } from "../../../context/ThemeContext";

const SIZE_ICONS = 15;

const Footer = () => {
  const { mode } = useContext(ThemeContext);
  return (
    <div className={style.container}>
      <span>© 2023 Lamamia. All rights reserved.</span>
      <div
        className={style.social}
        style={
          mode === THEME_LIGHT
            ? { border: "3px solid rgba(11, 11, 11, 0.5)" }
            : { border: "3px solid rgba(255, 255, 255, 0.5)" }
        }
      >
        <span>Follow Us</span>
        <Image
          src={"/SocialMedia/Facebook-Logo.png"}
          height={SIZE_ICONS}
          width={SIZE_ICONS}
          className={style.icons}
          alt="Facebook Logo"
        />
        <Image
          src={"/SocialMedia/Instagram-Logo.png"}
          height={SIZE_ICONS}
          width={SIZE_ICONS}
          className={style.icons}
          alt="Instagram Logo"
        />
        <Image
          src={"/SocialMedia/Youtube-Logo.png"}
          height={SIZE_ICONS}
          width={SIZE_ICONS + 5}
          className={style.icons}
          alt="Youtube Logo"
        />
      </div>
    </div>
  );
};

export default Footer;
