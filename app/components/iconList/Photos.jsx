import AppIconWithWindow from "../AppIconWithWindow";
import styles from "../../styles/Photos.module.css";
import { IoMdPhotos } from "react-icons/io";
import { photos } from "@/app/data/photos";

export default function Photos() {
  return (
    <AppIconWithWindow
      iconSrc={<IoMdPhotos size={64} color="#e5e7e8ff" />}
      label="Photos"
      windowTitle="Photos"
      windowContent={
        <div className={styles.photosContainer}>
          {photos.map((photo, idx) => (
            <div key={idx} className={styles.galleryItem}>
              <img src={photo.src} alt={photo.caption} />
              <div className={styles.overlay}>{photo.caption}</div>
            </div>
          ))}
        </div>
      }
    />
  );
}
