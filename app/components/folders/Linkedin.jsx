"use client";
import AppIconWithWindow from "../AppIconWithWindow";

export default function Linkedin() {
  return (
    <AppIconWithWindow
      iconSrc="/taskbar-icon.jpeg"
      label="Linkedin"
      windowTitle="Linkedin"
      windowContent={
        <div>
          <h2>Folder 1</h2>
        </div>
      }
    />
  );
}
