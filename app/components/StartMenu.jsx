"use client";
import { useState } from "react";
import styles from "../styles/StartMenu.module.css";
import IntroCard from "./IntroCard";

export default function StartMenu({ isOpen, onClose }) {
  if (!isOpen) return null;

  const handleClickOutside = (e) => {
    e.stopPropagation();
    onClose();
  };

  const [showIntro, setShowIntro] = useState(false);

  return (
    <>
      <div className={styles.startMenu} onClick={handleClickOutside}>
        <div
          className={styles.menuContent}
          onClick={(e) => e.stopPropagation()}
        >
          <h3>Start Menu</h3>
          <ul>
            <li>Resume</li>
            <li>Projects</li>
            <li onClick={() => setShowIntro(true)}>Command</li>
          </ul>
          {showIntro && <IntroCard onClose={() => setShowIntro(false)} />}
        </div>
      </div>
    </>
  );
}
