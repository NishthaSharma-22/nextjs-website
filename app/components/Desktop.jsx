"use client";
import IntroCard from "./IntroCard";
import { useState } from "react";
import Linkedin from "./folders/Linkedin";
import Photos from "./folders/photos";

export default function Desktop() {
  const [showWelcome, setShowWelcome] = useState(true);

  return (
    <>
      {showWelcome && <IntroCard onClose={() => setShowWelcome(false)} />}
      <Linkedin />
      <Photos />
    </>
  );
}
