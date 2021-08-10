import { useState } from "react";
import { useDispatch } from "react-redux";
import { generateRandomNumber } from "../actions/treeActions";
import tree from "../images/tree.svg";
import Apples from "./Apples";
import Button from "./Button";

const Tree = () => {
  const dispatch = useDispatch();
  //Get action from Redux Store
  const generateRandomNum = () => dispatch(generateRandomNumber);

  //I animated elements with classes and I controlled the classes with a local state.
  const [isShaken, setIsShaken] = useState(false);

  const handleClick = () => {
    setIsShaken(true);
    generateRandomNum();
  };

  return (
    <>
      {/* isShaken local state is controlled by click event and animationEnd event. */}
      <div
        className={isShaken ? "tree shaken" : "tree"}
        onAnimationEnd={() => setIsShaken(false)}
      >
        <img src={tree} alt="Tree" />
        <Button handleClick={handleClick} />
      </div>
      <Apples isShaken={isShaken} />
    </>
  );
};

export default Tree;
