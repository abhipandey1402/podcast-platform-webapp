import React from 'react'
import './style.css'

const Button = ({text, onClick}) => {
    return (
        <div onClick={onClick} className='customBtn'>
            {text}
        </div>
    )
}

export default Button

