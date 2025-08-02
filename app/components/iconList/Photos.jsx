import AppIconWithWindow from "../AppIconWithWindow";
import styles from "../../styles/Photos.module.css";

export default function Photos() {
  return (
    <AppIconWithWindow
      iconSrc="/gallery.png"
      label="Photos"
      windowTitle="Photos"
      windowContent={<></>}
    />
  );
}
