"use client";
import { useState, useRef } from "react";
import styles from "../styles/Window.module.css";

export default function Window({
  title = "window",
  initialPosition = { x: 100, y: 100 },
  onClose,
  children,
}) {
  const [position, setPosition] = useState(initialPosition);
  const dragging = useRef(false);
  const offset = useRef({ x: 0, y: 0 });

  const mouseDown = (e) => {
    dragging.current = true;
    offset.current = {
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    };
  };
  const mouseMove = (e) => {
    if (dragging.current) {
      setPosition({
        x: e.clientX - offset.current.x,
        y: e.clientY - offset.current.y,
      });
    }
  };

  const mouseUp = () => {
    dragging.current = false;
  };

  return (
    <>
      <div
        className={styles.frameWindow}
        onMouseDown={mouseDown}
        onMouseMove={mouseMove}
        onMouseUp={mouseUp}
        style={{
          left: position.x,
          top: position.y,
          position: "absolute",
        }}
      >
        <p className={styles.frameText}>{title}</p>
        <button className={styles.closeBtn} onClick={(e) => {e.stopPropagation(); onClose();}}>
          x
        </button>

        <div
          className={styles.introBox}
          onMouseDown={(e) => e.stopPropagation()
          }
        >
          {children}
        </div>
      </div>
    </>
  );
}
