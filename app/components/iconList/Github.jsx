"use client";
import { FaGithub } from "react-icons/fa6";
import Icon from "../Icon";

export default function Github() {
  const openGithub = () => {
    window.open("https://github.com/NishthaSharma-22/", "_blank");
  };

  return (
    <Icon
      iconSrc={<FaGithub size={64} color="#e5e7e8ff" />}
      label="Github"
      onClick={openGithub}
    />
  );
}
