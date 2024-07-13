'use client'
import React from 'react'
import CartContext, from './CartContext'
import OtherContext from './OtherContext'
const IndexContext = ({ children }) => {

    return (
        <CartContext>
            <OtherContext>
                {children}
            </OtherContext>
        </CartContext>
    )
}

export default IndexContext