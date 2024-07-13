'use client'
import React, { useState } from 'react'
import './header.scss'
import Button from '../button/Button'
import { FaBars, FaSearch, FaShoppingCart, FaUser } from 'react-icons/fa'
import Link from 'next/link'
import { useCart } from '@/context/CartContext'
const Header = () => {

    const [toggle, setToggle] = useState(false)
    const { state, dispatch } = useCart()
    const { cartItems } = state
    return (
        <header>

            <div className="container">
                <nav>
                    <div className="logo">
                        <span onClick={() => setToggle(prev => !prev)}><FaBars /></span>
                        <h2>VEECKER</h2>
                    </div>
                    <ul className={toggle ? 'responsive' : ''}>
                        <li><a href="/" onClick={() => setToggle(prev => !prev)}>Home</a></li>
                        <li><a href="#" onClick={() => setToggle(prev => !prev)}>Discounted Products</a></li>
                    </ul>

                    <div className="right-section">
                        <Link href="/cart" className='shopping-link'><FaShoppingCart /> <span className='cart-total'>{cartItems.length}</span></Link>

                        <Link href="/cart" className='user'><FaUser /></Link>
                        <span><FaSearch /></span>
                        <Button text="Login" />
                    </div>
                </nav>
            </div>

        </header>
    )
}

export default Header