import React from 'react'
import './header.scss'
import Button from '../button/Button'
import { FaBars, FaSearch, FaShoppingCart, FaUser } from 'react-icons/fa'
import Link from 'next/link'
const Header = () => {
    return (
        <header>

            <div className="container">
                <nav>
                    <ul>
                        <li><a href="#">Mide Chair</a></li>
                        <li><a href="#">Seun Chair</a></li>
                        <li><a href="#">Fae Chair</a></li>
                        <li><a href="#">Zoe Chair</a></li>
                        <li><a href="#">Discounted Products</a></li>
                    </ul>
                    <div className="logo">
                        <span><FaBars /></span>
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