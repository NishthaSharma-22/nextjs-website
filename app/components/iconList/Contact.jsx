import AppIconWithWindow from "../AppIconWithWindow";
import { MdOutlineMail } from "react-icons/md";

export default function Contact() {
  return (
    <AppIconWithWindow
      iconSrc={<MdOutlineMail size={64} color="#e5e7e8ff"/>}
      label="Contact"
      windowTitle="contact"
      windowContent={
        <>
          <p>My github link!</p>
          <a href="https://github.com/NishthaSharma-22" target="_blank">
            Github
          </a>
        </>
      }
    />
  );
}
