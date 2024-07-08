import React from 'react'
import './footer.scss'
import Button from '../button/Button'
import { FaFacebook, FaInstagram, FaTiktok } from 'react-icons/fa'
import Link from 'next/link'
import { FaXTwitter } from 'react-icons/fa6'

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
                    {/* <img src="/img/Ellie Dining Chair Dark Grey Sale _ Furniture 1.png" alt="" width={340} height={340} className='img2' /> */}
                    <img src="/img/footer_chair.png" alt="" width={500} height={500} className='img3' />
                </div>
                <div className="main-footer-wrapper">
                    <div className="main-footer">

                        <div className="left-side">
                            <div className="">
                                <h2>VEECKER</h2>
                                <p>Style Meets Comfort</p>
                                <div className="links">
                                    <Link href=""> <FaXTwitter /></Link>
                                    <Link href=""> <FaInstagram /></Link>
                                    <Link href=""> <FaFacebook /></Link>
                                    <Link href=""> <FaTiktok /></Link>

                                </div>


                            </div>
                        </div>
                        <div className="right-side">
                            <div className="">

                                <ul>
                                    <h3>Company</h3>
                                    <li><Link href="#">About Us</Link></li>
                                    <li><Link href="#">Contact Us </Link></li>

                                    <li><Link href="#">FAQs</Link></li>
                                </ul>
                                <ul>
                                    <h3>Useful Links</h3>
                                    <li><Link href="#"> Privacy Policy</Link></li>
                                    <li><Link href="#">Terms & Condition</Link></li>
                                    <li><Link href="#">Customer Support</Link></li>
                                </ul>
                                <ul>
                                    <h3>Resources</h3>
                                    <li><Link href="#">Blog</Link></li>
                                    <li><Link href="#">Sunscribe to Newsletter</Link></li>

                                </ul>
                            </div>
                        </div>


                    </div>
                    <div className="copyright">
                        <p>Copyright @2024</p>
                    </div>

                </div>
            </div>

        </footer >
    )
}

export default Footer