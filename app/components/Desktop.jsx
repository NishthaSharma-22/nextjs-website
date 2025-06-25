"use client";
import IntroCard from "./IntroCard";
import { useState } from "react";
import Linkedin from "./iconList/Linkedin";
import Photos from "./iconList/Photos";
import Contact from "./iconList/Contact";
import Blog from "./iconList/Blog";

export default function Desktop() {
  const [showWelcome, setShowWelcome] = useState(true);

  return (
    <>
      {showWelcome && <IntroCard onClose={() => setShowWelcome(false)} />}
      <Linkedin />
      <Photos />
      <Contact />
      <Blog />
    </>
  );
}
