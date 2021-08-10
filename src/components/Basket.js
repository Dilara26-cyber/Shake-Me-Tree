import React from "react";
import basket from "../images/basket.svg";
import styled from "styled-components";
import Apple from "./Apple";
//STYLING
//I USED STYLED COMPONENTS BECAUSE OF PROPS USAGE. NTH-CHILD PSEUDO-ELEMENT USES PROPS TO DECIDE WHICH ELEMENT TO ANIMATE.
const Wrapper = styled.div`
  position: absolute;
  width: 275px;
  left: -250px;
  bottom: -30vh;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  & img {
    opacity: 0;
    pointer-events: none;
    margin-top: -10px;
  }
  & img:nth-last-child(-n + ${(props) => props.number}) {
    opacity: 1;
    transition: opacity 1s 5s;
    z-index: -1;
  }
`;
const BasketImg = styled.img`
  position: absolute;
  bottom: -45vh;
  left: -250px;
  width: 275px;
`;
const Basket = ({ number }) => {
  return (
    <>
      <BasketImg src={basket} alt="basket" />
      <Wrapper number={number}>
        <Apple />
      </Wrapper>
    </>
  );
};

export default Basket;
