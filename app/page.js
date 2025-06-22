import Hero from "./components/Hero";
import Icon from "./components/Icon";
import IntroCard from "./components/IntroCard";
import Navbar from "./components/Navbar";
import Taskbar from "./components/Taskbar";
import Desktop from "./components/Desktop";

export default function Home() {
  return (
    <main>
      <Desktop />
      <Taskbar />
    </main>
  );
}
