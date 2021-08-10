import React from "react";
import basket from "../images/basket.svg";
import styled from "styled-components";
import Apple from "./Apple";
const BasketImg = styled.img`
  position: absolute;
  bottom: -52vh;
  left: -225px;
  width: 300px;
  
`;
const Wrapper = styled.div`
  position: absolute;
  width: 300px;
  left: -225px;
  bottom: -35vh;
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
const Basket = ({ applesWrapper, apple, number }) => {
  return (
    <>
      <BasketImg src={basket} alt="basket" />
      <Wrapper number={number}>
        <Apple/>
      </Wrapper>
    </>
  );
};

export default Basket;
