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
            title: 'Marshmallow Mide Bar stool',
            price: 100,
            desc: 'The Marshmallow Mide Bar Chair is the epitome of elegance and comfort, designed to bring a touch of sophistication to any bar or kitchen counter.',
            mainImg: '/img/PLAY Chair Counter Fabric Height 65 - Re-Wool _ Re-Wool 718 1-1.png',
            img1: '/img/Rectangle 3-1.png',
            img2: '/img/Rectangle 3-1.png',

        },
        {
            id: 3,
            title: 'Gymax Adjustable Mide Chair',
            price: 100,
            desc: 'The Gymax Adjustable Mide Chair offers a perfect blend of modern design and versatile functionality, ideal for any workspace or home office.',
            mainImg: '/img/PLAY Chair Counter Fabric Height 65 - Re-Wool _ Re-Wool 718 1-2.png',
            img1: '/img/Rectangle 3-2.png',
            img2: '/img/Rectangle 3-2.png',

        },
        {
            id: 4,
            title: 'Hector Velvet Mide Chair',
            price: 100,
            desc: 'The Hector Velvet Mide Chair combines luxurious comfort with timeless elegance, making it a standout piece in any room. this chair provides a plush seating experience while exuding sophistication.',
            mainImg: '/img/image 10-1.png',
            img1: '/img/Rectangle 3-3.png',
            img2: '/img/Rectangle 3-3.png',

        },
        {
            id: 5,
            title: 'Nordic Minimalistic Mide Chair',
            price: 100,
            desc: 'The Nordic Minimalistic Mide Chair is the epitome of Scandinavian design, offering a sleek and stylish seating solution that complements any modern interior.',
            mainImg: '/img/PLAY Chair Counter Fabric Height 65 - Re-Wool _ Re-Wool 718 1-4.png',
            img1: '/img/Rectangle 3-4.png',
            img2: '/img/Rectangle 3-4.png',

        },
        {
            id: 6,
            title: 'Vintage Ivory Mide Chair',
            price: 100,
            desc: 'The Vintage Ivory Mide Chair exudes classic elegance and timeless charm, making it a perfect addition to any sophisticated interior. With its beautifully crafted details and luxurious comfort.',
            mainImg: '/img/PLAY Chair Counter Fabric Height 65 - Re-Wool _ Re-Wool 718 1-5.png',
            img1: '/img/Rectangle 3-5.png',
            img2: '/img/Rectangle 3-5.png',

        },
        {
            id: 7,
            title: 'Red oval Mide Chair',
            price: 100,
            desc: 'The Red Oval Mide Chair is a stunning blend of contemporary design and exceptional comfort. Its bold color and unique oval shape  offering both visual appeal and practical seating.',
            mainImg: '/img/PLAY Chair Counter Fabric Height 65 - Re-Wool _ Re-Wool 718 1-6.png',
            img1: '/img/Rectangle 3-6.png',
            img2: '/img/Rectangle 3-6.png',

        },
        {
            id: 8,
            title: 'Hayneedle Mide Chair',
            price: 100,
            desc: 'The Hayneedle Mide Chair brings a touch of classic elegance and modern functionality to any space. With its sophisticated design and high-quality craftsmanship, making it perfect addition to your home.',
            mainImg: '/img/PLAY Chair Counter Fabric Height 65 - Re-Wool _ Re-Wool 718 1-7.png',
            img1: '/img/Rectangle 3-7.png',
            img2: '/img/Rectangle 3-7.png',

        },
        {
            id: 9,
            title: 'Waffle Mide Chair',
            price: 100,
            desc: 'The Waffle Mide Chair combines contemporary design with exceptional comfort, making it an ideal choice for modern interiors. With its unique waffle-patterned, this chair offer style and support.',
            mainImg: '/img/PLAY Chair Counter Fabric Height 65 - Re-Wool _ Re-Wool 718 1-8.png',
            img1: '/img/Rectangle 3-8.png',
            img2: '/img/Rectangle 3-8.png',

        },
        {
            id: 10,
            title: 'Sejour Mide Chair',
            price: 100,
            desc: 'The Sejour Mide Chair blends timeless elegance with modern comfort, making it a standout piece for any interior. This chair offers a luxurious seating experience that complements a variety of decor styles.',
            mainImg: '/img/PLAY Chair Counter Fabric Height 65 - Re-Wool _ Re-Wool 718 1-9.png',
            img1: '/img/Rectangle 3-9.png',
            img2: '/img/Rectangle 3-9.png',

        },
        {
            id: 11,
            title: 'Ochre arm Mide Chair',
            price: 100,
            desc: 'The Ochre Arm Mide Chair brings a touch of modern sophistication to any space with its bold color and sleek design. Featuring comfortable armrests this chair is designed to offer both style and support.',
            mainImg: '/img/PLAY Chair Counter Fabric Height 65 - Re-Wool _ Re-Wool 718 1-10.png',
            img1: '/img/Rectangle 3-10.png',
            img2: '/img/Rectangle 3-10.png',

        },
        {
            id: 12,
            title: 'Galerie Mide Chair',
            price: 100,
            desc: 'The Galerie Mide Chair combines artistic flair with modern comfort, making it a perfect centerpiece for any stylish interior. this chair offers a unique seating experience that is functional and visually appealing.',
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