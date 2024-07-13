'use client'
import React, { useEffect } from 'react'
import './cart.scss'
import Link from 'next/link'
import { FaArrowLeft, FaCircle, FaTrash } from 'react-icons/fa'
import CartCard from './CartCard'
import { useCart } from '@/context/CartContext'


const Page = () => {
    const { state, dispatch } = useCart()
    const { cartItems } = state

    const findSum = cartItems.reduce((total, current) => {
        return total + (current.current_price * current.quantityOrdered)
    }, 0);
    useEffect(() => {
        dispatch({ type: "UPDATE_TOTAL_CART", payload: findSum })
    }, [findSum])

    const shippingFee = 300

    const mapCartItems = cartItems && cartItems.length > 0 ?
        cartItems.map(item => <CartCard key={item.id} item={item} dispatch={dispatch} />)
        :
        <p>No item in cart</p>

    return (
        <section className='cart-parent'>
            <div className="container">
                <div className="cart-wrapper">
                    <div className="cart">
                        <div className="heading">
                            <h3>Shopping Cart</h3>
                            <Link href="/"> <FaArrowLeft /> <span>Continue Shopping</span></Link>
                        </div>


                        <div className="main-cart-wrapper">
                            {mapCartItems}
                        </div>


                    </div>

                    <div className="order">
                        <div className="">
                            <h3>Order Summary</h3>
                            <div className="">
                                <p>Subtotal <span>${state.cartTotal}.00</span></p>
                                <p>Shipping Fees<span>${shippingFee}.00</span></p>
                                <hr />
                                <p>Total<span>${findSum + shippingFee}.00</span></p>
                                <Link href="/checkout">Proceed To Checkout</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Page