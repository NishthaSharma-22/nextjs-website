"use client";
import { useState } from "react";
import Icon from "./Icon";
import Window from "./Window";

export default function AppIconWithWindow({
  iconSrc,
  label,
  windowTitle,
  windowContent,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [position, setPosition] = useState({ x: 100, y: 100 });

  const openWindow = () => {
    const randomX = Math.floor(Math.random() * (window.innerWidth - 400));
    const randomY = Math.floor(Math.random() * (window.innerHeight - 300));
    setPosition({ x: randomX, y: randomY });
    setIsOpen(true);
  };

  return (
    <>
      <Icon iconSrc={iconSrc} label={label} onClick={openWindow} />

      {isOpen && (
        <Window
          title={windowTitle}
          initialPosition={position}
          onClose={() => setIsOpen(false)}
        >
          {windowContent}
        </Window>
      )}
    </>
  );
}
