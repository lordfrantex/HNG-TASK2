import Image from 'next/image';
import React from 'react'
import { FaCircle, FaTrash } from 'react-icons/fa'

const CartCard = ({ item, dispatch }) => {
    const otherPhoto = item.photos[1].url

    return (
        <div className="cart-card" key={item.id}>
            <div className="img">
                <Image src={`https://api.timbu.cloud/images/${otherPhoto}`} alt='' width={120} height={60} />


            </div>
            <div className="">
                <div className="">
                    <p>{item.name}</p>
                    <p>Select Color: <span><FaCircle /><FaCircle /><FaCircle /></span></p>
                    <p>{item.current_price}</p>

                </div>
                <div className="">
                    <p>
                        <button onClick={() => { dispatch({ type: "DECREASE_QUANTITY", payload: item }) }}>-</button>
                        <span>{item.quantityOrdered}</span>
                        <button onClick={() => dispatch({ type: "INCREASE_QUANTITY", payload: item })}>+</button>
                    </p>
                    <p><FaCircle /><FaCircle /><FaCircle /></p>
                    <p><FaTrash /> <span onClick={() => dispatch({ type: 'REMOVE_FROM_CART', payload: item })}>Remove</span></p>

                </div>
                <div className="price">
                    <p>{item.current_price}</p>
                </div>
            </div>
        </div>
    )
}

export default CartCard