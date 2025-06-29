"use client";
import { useState } from "react";

import IntroCard from "./IntroCard";
import Linkedin from "./iconList/Linkedin";
import Photos from "./iconList/Photos";
import Contact from "./iconList/Contact";
import Blog from "./iconList/Blog";
import Video from "./iconList/Video";

export default function Desktop() {
  const [showWelcome, setShowWelcome] = useState(true);

  return (
    <>
      {showWelcome && <IntroCard onClose={() => setShowWelcome(false)} />}
      <Blog />
      <Linkedin />
      <Photos />
      <Contact />
      <Video />
    </>
  );
}
