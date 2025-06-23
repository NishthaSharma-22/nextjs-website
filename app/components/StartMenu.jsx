"use client";
import styles from "../styles/StartMenu.module.css";

export default function StartMenu({ isOpen, onClose }) {
  if (!isOpen) return null;

  const handleClickOutside = (e) => {
    e.stopPropagation();
    onClose();
  };

  return (
    <div className={styles.startMenu} onClick={handleClickOutside}>
      <div className={styles.menuContent} onClick={(e) => e.stopPropagation()}>
        <h3>Start Menu</h3>
        <ul>
          <li>Resume</li>
          <li>Projects</li>
          <li>Command</li>
        </ul>
      </div>
    </div>
  );
}
