import React from 'react'
import './style.css'

const Button = ({text, onClick, disabled}) => {
    return (
        <div onClick={onClick} className='customBtn' disabled={disabled}>
            {text}
        </div>
    )
}

export default Button

