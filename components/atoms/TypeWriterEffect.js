"use client";
import Typewriter from "typewriter-effect";

export default function TypeWriterEffect() {
  return (
    <Typewriter
      options={{
        strings: [
          "passionate competitive programmer.",
          "prominent web application developer.",
          "UI/UX developer.",
        ],
        autoStart: true,
        loop: true,
      }}
    />
  );
}
