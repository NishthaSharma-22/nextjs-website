"use client";
import { useState } from "react";

import IntroCard from "./IntroCard";
import Linkedin from "./iconList/Linkedin";
import Photos from "./iconList/Photos";
import Contact from "./iconList/Contact";
import Blog from "./iconList/Blog";
import Video from "./iconList/Game";
import Projects from "./iconList/Projects";
import Github from "./iconList/Github";

export default function Desktop() {
  const [showWelcome, setShowWelcome] = useState(true);

  return (
    <>
      {showWelcome && <IntroCard onClose={() => setShowWelcome(false)} />}
      <div className="grid grid-flow-col auto-cols-max grid-rows-5 gap-1">
        <Photos />
        <Projects />
        <Contact />
        <Github />
        <Linkedin />
        <Video />
        <Blog />
      </div>
    </>
  );
}
