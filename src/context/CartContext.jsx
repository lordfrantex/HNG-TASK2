// 'use client'

// import { cartReducer, initialCartObject } from '@/reducers/CartReducer'
// import React, { createContext, useContext, useReducer, useState, useEffect } from 'react'

// export const CartContext = createContext()

// const CartContextProvider = ({ children }) => {
//     const persistedLocalStorage = JSON.parse(localStorage.getItem('cart'))
//     const initialCartState = persistedLocalStorage || initialCartObject;
//     const [state, dispatch] = useReducer(cartReducer, initialCartState)


//     useEffect(() => {
//         localStorage.setItem('cart', JSON.stringify(state));
//     }, [state]);
//     return (
//         <CartContext.Provider value={{ state, dispatch }}>{children}</CartContext.Provider>
//     )
// }

// export default CartContextProvider



// export function useCart() {
//     const context = useContext(CartContext);

//     if (!context) {
//         throw new Error('useCart must be used within a CartProvider');
//     }
//     return context;
// }



'use client';

import { cartReducer, initialCartObject } from '@/reducers/CartReducer';
import React, { createContext, useContext, useReducer, useEffect, useState } from 'react';

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(cartReducer, initialCartObject);
    const [isInitialized, setIsInitialized] = useState(false);

    useEffect(() => {
        const persistedLocalStorage = JSON.parse(localStorage.getItem('cart'));
        if (persistedLocalStorage) {
            dispatch({ type: 'INITIALIZE', payload: persistedLocalStorage });
        }
        setIsInitialized(true);
    }, []);

    useEffect(() => {
        if (isInitialized) {
            localStorage.setItem('cart', JSON.stringify(state));
        }
    }, [state, isInitialized]);

    return (
        <CartContext.Provider value={{ state, dispatch }}>
            {children}
        </CartContext.Provider>
    );
};

export default CartContextProvider;

export function useCart() {
    const context = useContext(CartContext);

    if (!context) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
}
