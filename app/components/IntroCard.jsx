import Image from "next/image";
import styles from "../styles/IntroCard.module.css"

export default function IntroCard() {
  return (
    <>
      <div className={styles.introBox}>
        <Image
          src="/nspfp.jpeg"
          alt="Nishtha S"
          width={100}
          height={100}
          style={{ borderRadius: "200px" }}
        />
        <h1>nishthaOS</h1>
        <p>
          NishthaOS is a feature-limites{" "}
          <abbr title={"Operating System"}>OS</abbr> to answer the unanswerable
          question of <code>'who is Nishtha'</code>
        </p>
      </div>
    </>
  );
}
