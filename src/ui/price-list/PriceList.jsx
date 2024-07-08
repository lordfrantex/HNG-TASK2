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
            mainImg: '/img/PLAY Chair Counter Fabric Height 65 - Re-Wool _ Re-Wool 718 1.png',
            img1: '/img/PLAY Chair Counter Fabric Height 65 - Re-Wool _ Re-Wool 718 1.png',
            img2: '/img/PLAY Chair Counter Fabric Height 65 - Re-Wool _ Re-Wool 718 1.png',

        },
        {
            id: 3,
            title: 'Snow Latte Mide Chair',
            price: 100,
            desc: 'The Mide Chair combines modern design with exceptional comfort, With its sleek lines and ergonomic support, this chair is designed to enhance your seating experience. ',
            mainImg: '/img/PLAY Chair Counter Fabric Height 65 - Re-Wool _ Re-Wool 718 1.png',
            img1: '/img/PLAY Chair Counter Fabric Height 65 - Re-Wool _ Re-Wool 718 1.png',
            img2: '/img/PLAY Chair Counter Fabric Height 65 - Re-Wool _ Re-Wool 718 1.png',

        },
        {
            id: 4,
            title: 'Snow Latte Mide Chair',
            price: 100,
            desc: 'The Mide Chair combines modern design with exceptional comfort, With its sleek lines and ergonomic support, this chair is designed to enhance your seating experience. ',
            mainImg: '/img/PLAY Chair Counter Fabric Height 65 - Re-Wool _ Re-Wool 718 1.png',
            img1: '/img/PLAY Chair Counter Fabric Height 65 - Re-Wool _ Re-Wool 718 1.png',
            img2: '/img/PLAY Chair Counter Fabric Height 65 - Re-Wool _ Re-Wool 718 1.png',

        },
        {
            id: 5,
            title: 'Snow Latte Mide Chair',
            price: 100,
            desc: 'The Mide Chair combines modern design with exceptional comfort, With its sleek lines and ergonomic support, this chair is designed to enhance your seating experience. ',
            mainImg: '/img/PLAY Chair Counter Fabric Height 65 - Re-Wool _ Re-Wool 718 1.png',
            img1: '/img/PLAY Chair Counter Fabric Height 65 - Re-Wool _ Re-Wool 718 1.png',
            img2: '/img/PLAY Chair Counter Fabric Height 65 - Re-Wool _ Re-Wool 718 1.png',

        },
        {
            id: 6,
            title: 'Snow Latte Mide Chair',
            price: 100,
            desc: 'The Mide Chair combines modern design with exceptional comfort, With its sleek lines and ergonomic support, this chair is designed to enhance your seating experience. ',
            mainImg: '/img/PLAY Chair Counter Fabric Height 65 - Re-Wool _ Re-Wool 718 1.png',
            img1: '/img/PLAY Chair Counter Fabric Height 65 - Re-Wool _ Re-Wool 718 1.png',
            img2: '/img/PLAY Chair Counter Fabric Height 65 - Re-Wool _ Re-Wool 718 1.png',

        },
    ])

    const mapChair = chairList.map((chair, index) => {
        return (
            <Card chair={chair} index={index} />
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