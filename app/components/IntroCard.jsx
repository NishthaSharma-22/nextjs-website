"use client";
import Image from "next/image";
import Window from "./Window";
export default function IntroCard() {
  return (
    <Window title="Welcome" initialPosition={{ x: 200, y: 150 }}>
      <Image
        src={"/nspfp.jpeg"}
        width={100}
        height={100}
        alt={"Nishtha S's profile picture"}
        style={{ borderRadius: "50%" }}
      />
      <h1>nishthaOS</h1>
      <p>
        NishthaOS is a feature-limites{" "}
        <abbr title={"Operating System"}>OS</abbr> to answer the unanswerable
        question of <code>'who is Nishtha'</code>
      </p>
    </Window>
  );
}
