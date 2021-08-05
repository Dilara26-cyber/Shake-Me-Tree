import React, {useState} from 'react'
import tree from "../images/tree.svg"
import "../styles/tree.scss"
import Button from './Button'
const Tree = () => {
    const [isShaken, setIsShaken] = useState(false)
    const handleClick =  () =>{
        setIsShaken(!isShaken)
    }
     return (
        <>
        <div className={isShaken ? "tree shaken" : "tree"}>
            <img src={tree} alt="Tree"/>
            <Button handleClick={handleClick}/>
        </div>
        
        </>
    )
}

export default Tree
