import React, { useState, useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { generateRandomNumber } from "../actions/treeActions";
import tree from "../images/tree.svg";
import Apples from "./Apples";
import Button from "./Button";

const Tree = () => {
  const dispatch = useDispatch();

  const randomNumber = useSelector((state) => state.storeState.randomNumber);
  const [numberOfApplesFalling, setNumberOfApplesFalling] =
    useState(randomNumber);
  const sum = useSelector((state) => state.storeState.sumNumber);

  const prevNumberRef = useRef();
  const [isShaken, setIsShaken] = useState(false);

  const generateRandomNum = () => {
    dispatch(generateRandomNumber);
  };
  useEffect(() => {
    prevNumberRef.current = numberOfApplesFalling;
    generateRandomNum();
  }, [numberOfApplesFalling]);
  const prevNumber = prevNumberRef.current;

  const checkTheNumber = () => {
    if (randomNumber > 1 && randomNumber !== prevNumber) {
      setNumberOfApplesFalling(randomNumber);
    } else {
      setNumberOfApplesFalling(Math.floor(Math.random() * 10 + 1));
    }
  };
  const handleClick = () => {
    setIsShaken(true);
    checkTheNumber();
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
      <Apples numberOfApples={sum} isShaken={isShaken} />
    </>
  );
};

export default Tree;
