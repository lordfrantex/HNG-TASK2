'use client'
import React, { useState } from 'react'
import './header.scss'
import Button from '../button/Button'
import { FaBars, FaSearch, FaShoppingCart, FaUser } from 'react-icons/fa'
import Link from 'next/link'
const Header = () => {

    const [toggle, setToggle] = useState(false)
    return (
        <header>

            <div className="container">
                <nav>
                    <ul className={toggle && 'responsive'}>
                        <li><a href="#" onClick={() => setToggle(prev => !prev)}>Mide Chair</a></li>
                        <li><a href="#" onClick={() => setToggle(prev => !prev)}>Seun Chair</a></li>
                        <li><a href="#" onClick={() => setToggle(prev => !prev)}>Fae Chair</a></li>
                        <li><a href="#" onClick={() => setToggle(prev => !prev)}>Zoe Chair</a></li>
                        <li><a href="#" onClick={() => setToggle(prev => !prev)}>Discounted Products</a></li>
                    </ul>
                    <div className="logo">
                        <span onClick={() => setToggle(prev => !prev)}><FaBars /></span>
                        <h2>VEECKER</h2>
                    </div>
                    <div className="right-section">
                        <Link href="/cart"><FaShoppingCart /></Link>
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