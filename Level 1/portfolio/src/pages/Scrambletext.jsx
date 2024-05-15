import React, { useState, useEffect } from "react";
import { useScramble } from "use-scramble";

const ScrambleText = ({ strings }) => {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");

  const { ref } = useScramble({
    text: strings[index],
    autoPlay: true,
    speed: 0.18,
    tick: 2,
    chance: 0,
    seed: 5,
    ignore: [" "],
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % strings.length);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return <p ref={ref}>{text}</p>;
};

export default ScrambleText;
