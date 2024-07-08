import React from 'react'
import './cart.scss'
import Link from 'next/link'
import { FaArrowLeft, FaCircle, FaTrash } from 'react-icons/fa'

const page = () => {
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
                            <div className="cart-card">
                                <div className="img">
                                    <img src="/img/image 10.png" alt="" />
                                </div>
                                <div className="">
                                    <div className="">
                                        <p>Red Oval Mide Chair</p>
                                        <p>Select Color: <span><FaCircle /><FaCircle /><FaCircle /></span></p>
                                        <p>$520.00</p>

                                    </div>
                                    <div className="">
                                        <p><button>-</button> <span>2</span> <button>+</button></p>
                                        <p><FaCircle /><FaCircle /><FaCircle /></p>
                                        <p><FaTrash /> <span>Remove</span></p>

                                    </div>
                                    <div className="price">
                                        <p>$520.00</p>
                                    </div>
                                </div>
                            </div>
                            <div className="cart-card">
                                <div className="img">
                                    <img src="/img/image 10.png" alt="" />
                                </div>
                                <div className="">
                                    <div className="">
                                        <p>Red Oval Mide Chair</p>
                                        <p>Select Color: <span><FaCircle /><FaCircle /><FaCircle /></span></p>
                                        <p>$520.00</p>

                                    </div>
                                    <div className="">
                                        <p><button>-</button> <span>2</span> <button>+</button></p>
                                        <p><FaCircle /><FaCircle /><FaCircle /></p>
                                        <p><FaTrash /> <span>Remove</span></p>

                                    </div>
                                    <div className="price">
                                        <p>$520.00</p>
                                    </div>
                                </div>
                            </div>
                            <div className="cart-card">
                                <div className="img">
                                    <img src="/img/image 10.png" alt="" />
                                </div>
                                <div className="">
                                    <div className="">
                                        <p>Red Oval Mide Chair</p>
                                        <p>Select Color: <span><FaCircle /><FaCircle /><FaCircle /></span></p>
                                        <p>$520.00</p>

                                    </div>
                                    <div className="">
                                        <p><button>-</button> <span>2</span> <button>+</button></p>
                                        <p> <FaCircle /><FaCircle /><FaCircle /></p>
                                        <p><FaTrash /> <span>Remove</span></p>

                                    </div>
                                    <div className="price">
                                        <p>$520.00</p>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>

                    <div className="order">
                        <div className="">
                            <h3>Order Summary</h3>
                            <div className="">
                                <p>Subtotal <span>$1,200.00</span></p>
                                <p>Shipping Fees<span>$300.00</span></p>
                                <hr />
                                <p>Total<span>$1,4200.00</span></p>
                                <Link href="/checkout">Proceed To Checkout</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default page