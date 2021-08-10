import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Basket from "./Basket";
import Apple from "./Apple";

//STYLING
const Wrapper = styled.div`
  position: absolute;
  width: 400px;
  top: 38%;
  left: 48%;
  transform: translate(-50%, -50%);
`;
//I USED STYLED COMPONENTS BECAUSE OF PROPS USAGE. NTH-CHILD PSEUDO-ELEMENT USES PROPS TO DECIDE WHICH ELEMENT TO ANIMATE.
const AppleContainer = styled.div`
  display: flex;
  gap: 0.5em;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  & img {
    pointer-events: none;
    width: 30px;
    height: 30px;
    transition: opacity 1s ease-in 4s;
  }
  & img:nth-child(-n + ${(props) => props.number}) {
    animation: drop 1s ease-in 4s;
    opacity: 0;
  }
`;

const Apples = ({ isShaken }) => {
  const [isThereAnyApplesLeft, setIsThereAnyApplesLeft] = useState(true);
  
  //Get state from Redux Store
  const numberOfApplesFalling = useSelector(
    (state) => state.storeState.sumNumber
  );

  //Original Number of Apples on Tree
  const applesOnTheTree = useSelector(
    (state) => state.storeState.applesOnTheTree
  );

  //Check and decide if there is still apples on the tree.
  useEffect(() => {
    applesOnTheTree < numberOfApplesFalling && setIsThereAnyApplesLeft(false);
  }, [numberOfApplesFalling]);

  return (
    <Wrapper>
      {/* numberOfApples state passed to styled component as number prop. */}
      <AppleContainer
        className={isShaken ? "apple-container shaken" : "apple-container"}
        number={numberOfApplesFalling}
      >
        <Apple />
      </AppleContainer>
      {/* Same prop will be used in Basket Component's apples. */}
      <Basket number={numberOfApplesFalling} />
      <div className={isThereAnyApplesLeft ? "hide" : "show"}>
        <p>There is no apple left. You hungry monster!</p>
        <button className="restart" onClick={() => window.location.reload()}>Restart the game.</button>
      </div>
    </Wrapper>
  );
};

export default Apples;
