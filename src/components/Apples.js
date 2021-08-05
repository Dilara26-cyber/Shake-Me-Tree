import React from 'react'
import apple from "../images/apple.svg"
import "../styles/apples.scss"
import styled from 'styled-components'
const AppleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 40%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  & img:nth-child(-n + ${props => props.number}){
      transform: translateY(-100px);
  }
`
const Apples = ({numberOfApples}) => {
    return (
        <AppleContainer className="apple-container" number={numberOfApples}>
            <img src={apple} alt="apple" className="apple"/>
            <img src={apple} alt="apple" className="apple"/>
            <img src={apple} alt="apple" className="apple"/>
            <img src={apple} alt="apple" className="apple"/>
            <img src={apple} alt="apple" className="apple"/>
            <img src={apple} alt="apple" className="apple"/>
            <img src={apple} alt="apple" className="apple"/>
            <img src={apple} alt="apple" className="apple"/>
            <img src={apple} alt="apple" className="apple"/>
            <img src={apple} alt="apple" className="apple"/>
            <img src={apple} alt="apple" className="apple"/>
            <img src={apple} alt="apple" className="apple"/>
            <img src={apple} alt="apple" className="apple"/>
        </AppleContainer>
    )
}

export default Apples
