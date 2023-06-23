"use client";
import React, { useContext } from "react";
import styles from "./darkModeToogle.module.css";
import { ThemeContext } from "../../../context/ThemeContext";

export const DarkModeToogle = () => {
  const { toogle, mode } = useContext(ThemeContext);

  return (
    <div className={styles.container} onClick={toogle}>
      <div className={styles.icon}>🌕</div>
      <div className={styles.icon}>🌑</div>
      <div
        className={styles.ball}
        style={mode === "light" ? { left: "4px" } : { right: "4px" }}
      />
    </div>
  );
};
