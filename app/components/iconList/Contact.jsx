"use client";
import { MdOutlineMail } from "react-icons/md";
import Icon from "../Icon";

export default function Contact() {
  const openMail = () => {
    window.open(
      "https://mail.google.com/mail/?view=cm&to=nishthapinjore@gmail.com",
      "_blank",
    );
  };

  return (
    <Icon
      iconSrc={<MdOutlineMail size={64} color="#e5e7e8ff" />}
      label="Contact"
      onClick={openMail}
    />
  );
}
