import React from 'react'
import './button.scss'
const Button = ({ text }) => {
    return (
        <button className='modular-btn'>{text}</button>
    )
}

export default Button