"use client";
import Image from "next/image";
import Window from "./Window";
export default function IntroCard({ onClose }) {
  return (
    <Window
      title="Welcome"
      initialPosition={{ x: 450, y: 200 }}
      onClose={onClose}
    >

      <h1>nishthaOS</h1>
      <p>
        NishthaOS is a feature-limited{" "}
        <abbr title={"Operating System"}>OS</abbr> to answer the unanswerable <br />
        question of <code>'who is Nishtha'</code>
      </p>
    </Window>
  );
}
