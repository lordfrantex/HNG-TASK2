import React from 'react'
import './card.scss'
import { FaHeart, FaStar } from 'react-icons/fa'
import Image from 'next/image'
import Link from 'next/link'

const Card = ({ chair, index }) => {
    const mainPhoto = chair.photos[0].url
    const otherPhoto = chair.photos[1].url
    const price = chair.current_price[0].GBP[0]


    return (
        <div key={chair.id} className='card'>


            <div className="floating">
                <div className="">
                    <Image src={`https://api.timbu.cloud/images/${mainPhoto}`} alt='' width={47} height={47} />
                    <Image src={`https://api.timbu.cloud/images/${mainPhoto}`} alt='' width={47} height={47} />
                </div>
                <span><FaHeart /></span>
            </div>
            <Image src={`https://api.timbu.cloud/images/${otherPhoto}`} className='main-img' alt='' width={199} height={186} />

            <hr />

            <p className='title'>{chair.name}</p>
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
            <p className='desc'>{chair.description}</p>
            <div className="price">
                <div className="">
                    <p>Price</p>
                    <p>${price}</p>
                </div>

                <Link href={`/products/${chair.id}`}>View Details</Link>
            </div>


        </div>
    )
}

export default Card