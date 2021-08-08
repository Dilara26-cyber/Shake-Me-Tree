import React, { useState, useRef, useEffect } from "react";
import tree from "../images/tree.svg";
import "../styles/tree.scss";
import Apples from "./Apples";
import Button from "./Button";
const Tree = () => {
  const [isShaken, setIsShaken] = useState(false);
  const applesOnTheTree = 100;
  const [numberOfApplesFalling, setNumberOfApplesFalling] = useState(
    Math.floor(Math.random() * 10 + 1)
  );
  const [sumNumber, setSumNumber] = useState(0);
  const [dropped, setDropped] = useState([]);
  const prevNumberRef = useRef();

  useEffect(() => {
    prevNumberRef.current = numberOfApplesFalling;
    setSumNumber(
      dropped.length > 0 && dropped.reduce((sum, number) => sum + number)
    );
  }, [numberOfApplesFalling]);
  const prevNumber = prevNumberRef.current;

  const generateRandom = () => {
    const randomNumber = Math.floor(Math.random() * 10 + 1)
    if (randomNumber > 1 && randomNumber !== prevNumber) {
      setNumberOfApplesFalling(randomNumber);
    } else {
      setNumberOfApplesFalling(Math.floor(Math.random() * 10 + 1));
    }
    console.log(numberOfApplesFalling)
    setDropped([...dropped, numberOfApplesFalling]);
  };
  const handleClick = () => {
    setIsShaken(true);
    generateRandom();
  };

  return (
    <>
      <div
        className={isShaken ? "tree shaken" : "tree"}
        onAnimationEnd={() => setIsShaken(false)}
      >
        <img src={tree} alt="Tree" />
        <Button handleClick={handleClick} />
      </div>
      <Apples numberOfApples={sumNumber} applesOnTheTree={applesOnTheTree} />
      <div>
        <p>{applesOnTheTree - sumNumber <= 0 ? "No apples left" : ""}</p>
        <p>{numberOfApplesFalling}</p>
      </div>
    </>
  );
};

export default Tree;
