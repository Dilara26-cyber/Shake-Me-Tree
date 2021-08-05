import React from 'react'

const Button = ({handleClick}) => {
    return (
        <div>
            <button onClick={handleClick}>Click</button>
        </div>
    )
}

export default Button
