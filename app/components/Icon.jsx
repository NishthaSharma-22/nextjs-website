"use client";
import Image from "next/image";
import styles from "../styles/Icon.module.css";

export default function Icon({ iconSrc, label, onClick }) {
  return (
    <div className={styles.iconI} onClick={onClick}>
      {iconSrc ? (
        <Image src={iconSrc} alt={label} width={100} height={100} />
      ) : null}
      <p>{label}</p>
    </div>
  );
}
