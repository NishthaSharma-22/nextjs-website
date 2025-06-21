"use client";
import { useState, useRef } from "react";
import Image from "next/image";
import styles from "../styles/IntroCard.module.css";

export default function IntroCard() {
  const [position, setPosition] = useState({ x: 100, y: 100 });
  const [isVisible, setIsVisible] = useState(true);
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

  if (!isVisible) return null;

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
        <p className={styles.frameText}>Welcome</p>
        <button className={styles.closeBtn} onClick={()=> setIsVisible(false)}>x</button>

        <div
          className={styles.introBox}
          onMouseDown={(e) => e.stopPropagation()}
        >
          <Image
            src="/nspfp.jpeg"
            alt="Nishtha S"
            width={100}
            height={100}
            style={{ borderRadius: "200px" }}
          />
          <h1>nishthaOS</h1>
          <p>
            NishthaOS is a feature-limites{" "}
            <abbr title={"Operating System"}>OS</abbr> to answer the
            unanswerable question of <code>'who is Nishtha'</code>
          </p>
        </div>
      </div>
    </>
  );
}
