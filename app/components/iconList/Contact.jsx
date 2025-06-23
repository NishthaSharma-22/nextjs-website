import AppIconWithWindow from "../AppIconWithWindow";

export default function Contact() {
  return (
    <AppIconWithWindow
      iconSrc="/email.png"
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
