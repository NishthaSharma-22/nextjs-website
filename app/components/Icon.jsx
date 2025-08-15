"use client";
import Image from "next/image";
import styles from "../styles/Icon.module.css";

export default function Icon({ iconSrc, label, onClick }) {
  return (
    <div className={styles.iconI} onClick={onClick}>
      {iconSrc && (
        <div className={styles.iconWrapper}>
          {iconSrc}
        </div>
      )}
      <p>{label}</p>
    </div>
  );
}
