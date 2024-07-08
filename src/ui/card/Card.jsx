import React from 'react'
import './card.scss'
import { FaHeart, FaStar } from 'react-icons/fa'
import Image from 'next/image'
import Link from 'next/link'

const Card = ({ chair, index }) => {
    return (
        <div key={chair.id} className='card'>


            <div className="floating">
                <div className="">

                    <Image src={chair.img2} alt='' width={47} height={47} />
                    <Image src={chair.img1} alt='' className='active' width={47} height={47} />
                </div>
                <span><FaHeart /></span>
            </div>
            <Image src={chair.mainImg} alt='' className='main-img' width={199} height={186} />
            <hr />

            <p className='title'>{chair.title}</p>
            <div className='review'>
                <p>
                    <span><FaStar /></span>
                    <span><FaStar /></span>
                    <span><FaStar /></span>
                    <span><FaStar /></span>
                    <span><FaStar /></span>
                </p>
                <p>10k+ Reviews</p>

            </div>
            <p className='desc'>{chair.desc}</p>
            <div className="price">
                <div className="">
                    <p>Price</p>
                    <p>${chair.price}</p>
                </div>

                <Link href={`/products/${chair.id}`}>View Details</Link>
            </div>


        </div>
    )
}

export default Card