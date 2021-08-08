import React, {useEffect}from 'react'
import apple from "../images/apple.svg"
import "../styles/apples.scss"
import styled from 'styled-components'
const AppleContainer = styled.div`
  display: flex;
  gap: 0.5em;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  width: 40%;
  position: absolute;
  top: 20%;
  left: 50%;
  transform: translateX(-50%);
  & img{
    transition: transform 1s ease-in;
    transition-delay: 1s;
  }
  & img:nth-child(-n + ${props => props.number}){
      transform: translateY(75vh);
      
  }
`
const Apples = ({numberOfApples, applesOnTheTree}) => {
    const applesWrapper = []

for(let i = 0; i < 100; i++){
            const count = i;
            applesWrapper.push(count)
         }

    return (
        <AppleContainer className="apple-container" number={numberOfApples}>
         {applesWrapper.map((i) =><img src={apple} alt="apple" key={i} className="apple"/>)}
        </AppleContainer>
    )
}

export default Apples
