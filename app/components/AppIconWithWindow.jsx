"use client";
import { useState } from "react";
import Icon from "./Icon";
import Window from "./Window";


let lastWinPos = {x:200, y:200};
export default function AppIconWithWindow({
  iconSrc,
  label,
  windowTitle,
  windowContent,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [position, setPosition] = useState({ x: 100, y: 100 });

  const openWindow = () => {
    const shiftAmt = 20;
    let newX = lastWinPos.x + shiftAmt;
    let newY = lastWinPos + shiftAmt;
    const newPosition = {x:newX, y:newY};
    setPosition(newPosition);
    lastWinPos=newPosition;
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
