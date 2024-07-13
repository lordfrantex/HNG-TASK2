'use client'
import React, { useContext } from 'react'
import './button.scss'
import { useCart } from '@/context/CartContext'
const Button = ({ text }) => {
    return (
        <>
            <button className='modular-btn'>{text}</button>
        </>
    )
}

export default Button





export const AddToCart = ({ item }) => {
    const { state, dispatch } = useCart()
    return (
        <>
            <button onClick={() => dispatch({ type: "ADD_TO_CART", payload: item })}>Add To Cart</button>
        </>
    )

}