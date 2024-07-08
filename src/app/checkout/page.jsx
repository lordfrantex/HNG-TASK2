import React from 'react'
import './page.scss'
import { LuSend } from "react-icons/lu";
import { FaArrowLeft, FaTelegram, FaUser, } from 'react-icons/fa'
import { FaRegCircleDot, FaRegCircle, FaGooglePay, FaCcPaypal, FaApplePay, FaAngleDown } from "react-icons/fa6";
import Link from 'next/link';

const page = () => {
    return (
        <section>
            <div className="checkout-wrapper">
                <div className="container">
                    <div className="checkout">
                        <div className="left">
                            <Link href="/cart" className="back">
                                <FaArrowLeft /> <span>Back to cart</span>
                            </Link>
                            <div className="heading">
                                <h3>Checkout</h3>
                                <p>Pay for the things you are buying here</p>
                            </div>

                            <div className="contact-info">
                                <h4>1. Contact Information</h4>


                                <div className="">
                                    <div className="form-group">
                                        <span><FaUser /></span>
                                        <div className="">
                                            <span>First Name</span>
                                            <input placeholder='Input Your Details Here.' type="text" name="" id="" />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <span><FaUser /></span>
                                        <div className="">
                                            <span>First Name</span>
                                            <input placeholder='Input Your Details Here.' type="text" name="" id="" />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <span>+234 <FaAngleDown /></span>
                                        <div className="">
                                            <span>Phone Number</span>
                                            <input placeholder='Input Your Details Here.' type="text" name="" id="" />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <span><LuSend /></span>
                                        <div className="">
                                            <span>Email Address</span>
                                            <input placeholder='Input Your Details Here.' type="text" name="" id="" />
                                        </div>
                                    </div>

                                </div>


                            </div>
                            <div className="delivery">
                                <p>2. Delivery Method</p>
                                <div className="">
                                    <button><span><FaRegCircleDot /></span><span>Same-day</span></button>
                                    <button><span><FaRegCircle /></span><span>Express</span></button>
                                    <button><span><FaRegCircle /></span><span>Normal</span></button>
                                </div>
                            </div>
                            <div className="payment">
                                <p>2. Payment Method</p>

                                <div className="">
                                    <button><span><FaRegCircleDot /></span><span><FaGooglePay /></span></button>
                                    <button><span><FaRegCircle /></span><span><FaCcPaypal /></span></button>
                                    <button><span><FaRegCircle /></span><span><FaApplePay /></span></button>
                                </div>
                            </div>
                        </div>

                        <div className="right">
                            <div className="">
                                <h3>Payment Information</h3>
                                <div className="form-container">
                                    <div className="form-group">
                                        <div className="form-row">
                                            <div className="">
                                                <p>First Name</p>
                                                <input type="text" placeholder='Enter Your First Name' />
                                            </div>
                                            <div className="">
                                                <p>Last Name</p>
                                                <input type="text" placeholder='Enter Your Last Name' />
                                            </div>
                                        </div>
                                        <div className="card-number">
                                            <p>Card Number</p>
                                            <input type="text" placeholder='Enter Your Card Number' />
                                        </div>
                                        <div className="form-row">
                                            <div className="">
                                                <p>Expiry Date</p>
                                                <input type="text" placeholder='Enter Your Expiry Date' />
                                            </div>
                                            <div className="">
                                                <p>CVV</p>
                                                <input type="text" placeholder='Enter Your CVV' />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="btn">
                                        <Link href='/success'><button>Proceed To Payment</button></Link>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default page