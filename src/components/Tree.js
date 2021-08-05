import React, {useState, useRef, useEffect} from 'react'
import tree from "../images/tree.svg"
import "../styles/tree.scss"
import Apples from './Apples'
import Button from './Button'
const Tree = () => {
    const [isShaken, setIsShaken] = useState(false)
    const [numberOfApples, setNumberOfApples] = useState(0)
    const [random, setRandom] = useState(1)
    const [sumNumber, setSumNumber] = useState(0)
    const [dropped, setDropped] = useState([0])
    const prevNumberRef = useRef();
    let applesCount = 13;
    useEffect(() => {
        prevNumberRef.current = numberOfApples;
      },[numberOfApples]);
      const prevNumber = prevNumberRef.current;
      const generateRandom = (min, max) => {
          setRandom(Math.floor(Math.random() * (max - min) + min));
          setDropped([...dropped, random])
          setSumNumber(dropped.reduce((sum, number) => {
            return sum + number ;
          }, 0))
          console.log(sumNumber)
      }
      const generateNumberForApples = () => {
          generateRandom(1, 10)
        setNumberOfApples(random);
        if(applesCount - sumNumber <= 0){
            console.log("Outof apples")
        }
        
    }

    const handleClick =  () =>{
        setIsShaken(!isShaken)
            generateNumberForApples()
        console.log(prevNumber, numberOfApples)
    }
    
     return (
        <>
        <div className={isShaken ? "tree shaken" : "tree"}>
            <img src={tree} alt="Tree"/>
            <Button handleClick={handleClick}/>
        </div>
        <Apples numberOfApples={numberOfApples}/>
        <div><p>{numberOfApples}</p>
        <p>{prevNumber}</p></div>
        
        </>
    )
}

export default Tree
