import React from "react";
import styled from "styled-components";

//STYLING FOR BUTTON
const Btn = styled.button`
background-color: #758C35;
text-transform: uppercase;
color: white;
font-weight: 600;
border-radius: 30px 0 0 30px;
transition: background-color 0.3s, transform 0.3s ease-in;
&:hover{
    background-color: #7FB239;
    transform: translateX(-30px);
}
`
const Button = ({ handleClick }) => {
  return <Btn onClick={handleClick}>Click Me.</Btn>;
};

export default Button;
