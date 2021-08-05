import React, {useState} from 'react'
import tree from "../images/tree.svg"
import "../styles/tree.scss"
import Apples from './Apples'
import Button from './Button'
const Tree = () => {
    const [isShaken, setIsShaken] = useState(false)
    const [numberOfApples, setNumberOfApples] = useState(0)
    const handleClick =  () =>{
        setIsShaken(!isShaken)
        setNumberOfApples(Math.floor(Math.random() * 10 + 1))
        console.log(numberOfApples !== numberOfApples)
    }

     return (
        <>
        <div className={isShaken ? "tree shaken" : "tree"}>
            <img src={tree} alt="Tree"/>
            <Button handleClick={handleClick}/>
        </div>
        <Apples numberOfApples={numberOfApples}/>
        </>
    )
}

export default Tree
