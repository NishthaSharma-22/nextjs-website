"use client";
import styles from "../styles/Taskbar.module.css";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Taskbar() {
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleString());
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date().toLocaleString());
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  return (
    <div className={styles.taskbar}>
      <Image
        src="/taskbar-icon.jpeg"
        alt="taskbar windows icon"
        height={40}
        width={40}
        className={styles.image}
      />
      <div className={styles.taskbarText}>
        <p>NishthaOS</p>
        <p id="timeText" className={styles.taskbarText}>
          {currentTime}
        </p>
      </div>
    </div>
  );
}
