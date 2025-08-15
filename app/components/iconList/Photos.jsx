import AppIconWithWindow from "../AppIconWithWindow";
import styles from "../../styles/Photos.module.css";
import { IoMdPhotos } from "react-icons/io";

export default function Photos() {
  return (
    <AppIconWithWindow
      iconSrc={<IoMdPhotos size={64} color="#e5e7e8ff" />}
      label="Photos"
      windowTitle="Photos"
      windowContent={<></>}
    />
  );
}
