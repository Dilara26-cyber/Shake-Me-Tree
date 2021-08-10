import React from "react";
import styled from "styled-components";
const Btn = styled.button`
background-color: #758C35;
border: none;
text-transform: uppercase;
padding: 1em 2em;
color: white;
font-weight: 700;
border-radius: 30px 0 0 30px;
box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
transition: all 0.3s ease-in;
cursor: pointer;
&:hover{
    background-color: #7FB239;
    transform: scale(1.1);
}
`
const Button = ({ handleClick }) => {
  return <Btn onClick={handleClick}>Click</Btn>;
};

export default Button;
