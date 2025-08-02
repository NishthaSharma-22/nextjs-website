import AppIconWithWindow from "../AppIconWithWindow";

export default function Video() {
  return (
    <AppIconWithWindow
      iconSrc="/email.png"
      label="Video"
      windowTitle="video"
      windowContent={
        <>
          {/* <iframe
            src="/games/banana_jump/index.html"
            style={{
              width: "1200px",
              height: "675px",
              border: "none",
            }}
          /> */}
        </>
      }
    />
  );
}
