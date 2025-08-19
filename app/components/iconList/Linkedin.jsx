"use client";
import AppIconWithWindow from "../AppIconWithWindow";
import { FaLinkedin } from "react-icons/fa6";
export default function Linkedin() {
  return (
    <AppIconWithWindow
      iconSrc={<FaLinkedin size={64} color="#e5e7e8ff" />}
      label="Linkedin"
      windowTitle="Linkedin"
      windowContent={<div></div>}
    />
  );
}
