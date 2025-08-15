"use client";
import AppIconWithWindow from "../AppIconWithWindow";
import { FaBeer, FaLinkedin } from "react-icons/fa";

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
