import { useSelector } from "react-redux";
import styled from "styled-components";
import Basket from "./Basket";
import Apple from "./Apple";

//STYLES
const Wrapper = styled.div`
  width: 90%;
  margin: 0 auto;
  position: absolute;
  max-width: 400px;
  top: 35%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
//USED STYLED COMPONENTS BECAUSE OF PROPS USAGE. NTH-CHILD PSEUDO-ELEMENT USES PROPS TO DECIDE WHICH ELEMENT TO ANIMATE.
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
  //Get state from Redux Store
  const numberOfApples = useSelector((state) => state.storeState.sumNumber);
  return (
    <Wrapper>
      {/* numberOfApples state passed to styled component as number prop. */}
      <AppleContainer
        className={isShaken ? "apple-container shaken" : "apple-container"}
        number={numberOfApples}
      >
       <Apple/>
      </AppleContainer>
      {/* Same prop will be used in Basket Component's apples. */}
      <Basket number={numberOfApples}/>
    </Wrapper>
  );
};

export default Apples;
