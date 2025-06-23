import AppIconWithWindow from "../AppIconWithWindow";

export default function Photos() {
  return (
    <AppIconWithWindow
      iconSrc="/gallery.png"
      label="Photos"
      windowTitle="Photos"
      windowContent={
        <div>
        </div>
      }
    />
  );
}
