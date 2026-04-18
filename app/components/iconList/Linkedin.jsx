"use client";
import { FaLinkedin } from "react-icons/fa6";
import Icon from "../Icon";

export default function Linkedin() {
  const openLinkedin = () => {
    window.open("https://www.linkedin.com/in/nishthas22/", "_blank");
  };

  return (
    <Icon
      iconSrc={<FaLinkedin size={64} color="#e5e7e8ff" />}
      label="Linkedin"
      onClick={openLinkedin}
    />
  );
}
