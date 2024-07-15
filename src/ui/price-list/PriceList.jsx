'use client'
import './price-list.scss'
import Link from 'next/link'
import Image from 'next/image'
import { FaHeart, FaStar } from 'react-icons/fa'
import Button from '../button/Button'
import Card from '../card/Card'
import axios from 'axios'
import ActionBtns from './ActionBtns'


const PriceList = ({ chairList, size }) => {

    const mapChair = chairList.items.map((chair, index) => {

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
                        <ActionBtns chairList={chairList} size={size} />
                        <Button text="Explore More" />

                    </div>
                </div>
            </div>
        </section>
    )
}

export default PriceList

