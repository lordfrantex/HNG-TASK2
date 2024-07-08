import React from 'react'
import './footer.scss'
import Button from '../button/Button'
import { FaFacebook, FaInstagram, FaTiktok, FaTwitter } from 'react-icons/fa'
import Link from 'next/link'

const Footer = () => {
    return (
        <footer>
            <div className="container">

                <div className="upper">
                    <div className="">
                        <h3>Upgrade Your Seating Experience today!</h3>
                        <p>Shop now and transform your space with a touch of modern elegance.</p>
                        <div className="btn">
                            <Button text="See Catalogue" />
                        </div>
                    </div>
                    <img src="/img/Coaster Adjustable Height Office Chair White and Silver 800150 - The Home Depot 1.png" alt="" width={500} height={500} className='img1' />
                    <img src="/img/Ellie Dining Chair Dark Grey Sale _ Furniture 1.png" alt="" width={340} height={340} className='img2' />
                    <img src="/img/Elevate Your Space with Top 25 Bar Chair Designs for 2024 - placeideal_com 1.png" alt="" width={500} height={500} className='img3' />
                </div>
                <div className="main-footer">
                    <div className="left-side">
                        <div className="">
                            <h2>VEECKER</h2>
                            <p>Style Meets Comfort</p>
                            <div className="">
                                <Link href=""> <FaTwitter /></Link>
                                <Link href=""> <FaInstagram /></Link>
                                <Link href=""> <FaFacebook /></Link>
                                <Link href=""> <FaTiktok /></Link>

                            </div>
                            <p> CopyRight @ 2024 Veecker</p>
                            <ul>
                                <li>Privacy Policy</li>
                                <li>Terms & Conditions</li>
                                <li>Customers Support</li>
                            </ul>

                        </div>
                    </div>
                    <div className="right-side">
                        <div className="">
                            <ul>
                                <h3>Our Products</h3>
                                <li><Link href="#">Mide Design</Link></li>
                                <li><Link href="#">Seun Design</Link></li>
                                <li><Link href="#">Fae Design</Link></li>
                                <li><Link href="#">Zoey Design</Link></li>
                                <li><Link href="#">Kefa Design</Link></li>
                            </ul>
                            <ul>
                                <h3>Company</h3>
                                <li><Link href="#">About Us</Link></li>
                                <li><Link href="#">Contact Us </Link></li>
                                <li><Link href="#">Careers</Link></li>
                                <li><Link href="#">Testimonials</Link></li>
                                <li><Link href="#">FAQs</Link></li>
                            </ul>
                            <ul>
                                <h3>Useful Links</h3>
                                <li><Link href="#"> Blog</Link></li>
                                <li><Link href="#">Resources</Link></li>
                                <li><Link href="#">Subscribe to our Newsletter</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer >
    )
}

export default Footer