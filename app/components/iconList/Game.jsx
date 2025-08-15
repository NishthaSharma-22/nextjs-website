import AppIconWithWindow from "../AppIconWithWindow";
import { FaGamepad } from "react-icons/fa";

export default function Video() {
  return (
    <AppIconWithWindow
      iconSrc={<FaGamepad size={64} color="#e5e7e8ff" />}
      label="Game"
      windowTitle="Game"
      windowContent={
        <>
          <iframe
            src="/games/banana_jump/index.html"
            style={{
              width: "1200px",
              height: "675px",
              border: "none",
            }}
          />
        </>
      }
    />
  );
}
