'use client'
import React, { useState } from 'react'
import './price-list.scss'
import Link from 'next/link'
import Image from 'next/image'
import { FaHeart, FaStar } from 'react-icons/fa'
import Button from '../button/Button'
import Card from '../card/Card'

const PriceList = () => {

    const [chairList, setChairList] = useState([
        {
            id: 1,
            title: 'Snow Latte Mide Chair',
            price: 100,
            desc: 'The Mide Chair combines modern design with exceptional comfort, With its sleek lines and ergonomic support, this chair is designed to enhance your seating experience. ',
            mainImg: '/img/PLAY Chair Counter Fabric Height 65 - Re-Wool _ Re-Wool 718 1.png',
            img1: '/img/PLAY Chair Counter Fabric Height 65 - Re-Wool _ Re-Wool 718 1.png',
            img2: '/img/PLAY Chair Counter Fabric Height 65 - Re-Wool _ Re-Wool 718 1.png',

        },
        {
            id: 2,
            title: 'Snow Latte Mide Chair',
            price: 100,
            desc: 'The Mide Chair combines modern design with exceptional comfort, With its sleek lines and ergonomic support, this chair is designed to enhance your seating experience. ',
            mainImg: '/img/PLAY Chair Counter Fabric Height 65 - Re-Wool _ Re-Wool 718 1-1.png',
            img1: '/img/Rectangle 3-1.png',
            img2: '/img/Rectangle 3-1.png',

        },
        {
            id: 3,
            title: 'Snow Latte Mide Chair',
            price: 100,
            desc: 'The Mide Chair combines modern design with exceptional comfort, With its sleek lines and ergonomic support, this chair is designed to enhance your seating experience. ',
            mainImg: '/img/PLAY Chair Counter Fabric Height 65 - Re-Wool _ Re-Wool 718 1-2.png',
            img1: '/img/Rectangle 3-2.png',
            img2: '/img/Rectangle 3-2.png',

        },
        {
            id: 4,
            title: 'Snow Latte Mide Chair',
            price: 100,
            desc: 'The Mide Chair combines modern design with exceptional comfort, With its sleek lines and ergonomic support, this chair is designed to enhance your seating experience. ',
            mainImg: '/img/image 10-1.png',
            img1: '/img/Rectangle 3-3.png',
            img2: '/img/Rectangle 3-3.png',

        },
        {
            id: 5,
            title: 'Snow Latte Mide Chair',
            price: 100,
            desc: 'The Mide Chair combines modern design with exceptional comfort, With its sleek lines and ergonomic support, this chair is designed to enhance your seating experience. ',
            mainImg: '/img/PLAY Chair Counter Fabric Height 65 - Re-Wool _ Re-Wool 718 1-4.png',
            img1: '/img/Rectangle 3-4.png',
            img2: '/img/Rectangle 3-4.png',

        },
        {
            id: 6,
            title: 'Snow Latte Mide Chair',
            price: 100,
            desc: 'The Mide Chair combines modern design with exceptional comfort, With its sleek lines and ergonomic support, this chair is designed to enhance your seating experience. ',
            mainImg: '/img/PLAY Chair Counter Fabric Height 65 - Re-Wool _ Re-Wool 718 1-5.png',
            img1: '/img/Rectangle 3-5.png',
            img2: '/img/Rectangle 3-5.png',

        },
        {
            id: 7,
            title: 'Snow Latte Mide Chair',
            price: 100,
            desc: 'The Mide Chair combines modern design with exceptional comfort, With its sleek lines and ergonomic support, this chair is designed to enhance your seating experience. ',
            mainImg: '/img/PLAY Chair Counter Fabric Height 65 - Re-Wool _ Re-Wool 718 1-6.png',
            img1: '/img/Rectangle 3-6.png',
            img2: '/img/Rectangle 3-6.png',

        },
        {
            id: 8,
            title: 'Snow Latte Mide Chair',
            price: 100,
            desc: 'The Mide Chair combines modern design with exceptional comfort, With its sleek lines and ergonomic support, this chair is designed to enhance your seating experience. ',
            mainImg: '/img/PLAY Chair Counter Fabric Height 65 - Re-Wool _ Re-Wool 718 1-7.png',
            img1: '/img/Rectangle 3-7.png',
            img2: '/img/Rectangle 3-7.png',

        },
        {
            id: 9,
            title: 'Snow Latte Mide Chair',
            price: 100,
            desc: 'The Mide Chair combines modern design with exceptional comfort, With its sleek lines and ergonomic support, this chair is designed to enhance your seating experience. ',
            mainImg: '/img/PLAY Chair Counter Fabric Height 65 - Re-Wool _ Re-Wool 718 1-8.png',
            img1: '/img/Rectangle 3-8.png',
            img2: '/img/Rectangle 3-8.png',

        },
        {
            id: 10,
            title: 'Snow Latte Mide Chair',
            price: 100,
            desc: 'The Mide Chair combines modern design with exceptional comfort, With its sleek lines and ergonomic support, this chair is designed to enhance your seating experience. ',
            mainImg: '/img/PLAY Chair Counter Fabric Height 65 - Re-Wool _ Re-Wool 718 1-9.png',
            img1: '/img/Rectangle 3-9.png',
            img2: '/img/Rectangle 3-9.png',

        },
        {
            id: 11,
            title: 'Snow Latte Mide Chair',
            price: 100,
            desc: 'The Mide Chair combines modern design with exceptional comfort, With its sleek lines and ergonomic support, this chair is designed to enhance your seating experience. ',
            mainImg: '/img/PLAY Chair Counter Fabric Height 65 - Re-Wool _ Re-Wool 718 1-10.png',
            img1: '/img/Rectangle 3-10.png',
            img2: '/img/Rectangle 3-10.png',

        },
        {
            id: 12,
            title: 'Snow Latte Mide Chair',
            price: 100,
            desc: 'The Mide Chair combines modern design with exceptional comfort, With its sleek lines and ergonomic support, this chair is designed to enhance your seating experience. ',
            mainImg: '/img/PLAY Chair Counter Fabric Height 65 - Re-Wool _ Re-Wool 718 1-11.png',
            img1: '/img/Rectangle 3-11.png',
            img2: '/img/Rectangle 3-11.png',

        },
    ])

    const mapChair = chairList.map((chair, index) => {
        return (
            <Card key={chair.id} chair={chair} index={index} />
        )

    })
    return (
        <section>
            <div className="container">
                <div className="best-selling">
                    <h2>Best Selling Products</h2>
                    <div className="">
                        <button className='active'><Link href="#">Mide Chair</Link></button>
                        <button><Link href="#">Seun Chair</Link></button>
                        <button><Link href="#">Fae Chair</Link></button>
                        <button><Link href="#">Zoe Chair</Link></button>
                    </div>
                </div>

                <div className="">
                    <div className="chair-wrapper">
                        {mapChair}
                    </div>
                    <div className='explore'>
                        <Button text="Explore More" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PriceList