import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import './page.scss'
import { FaArrowLeft, FaGreaterThan, FaStar } from 'react-icons/fa'
import Card from '@/ui/card/Card'
import { useCart } from '@/context/CartContext'
import { AddToCart } from '@/ui/button/Button'


const fetchSpecific = async (id) => {
    const URL = `${process.env.ROOT_URL}/products/${id}?currency_code=GBP&organization_id=${process.env.ORGANIZATION_ID}&Appid=${process.env.APP_ID}&Apikey=${process.env.API_KEY}`

    const fetchItem = await fetch(URL)
    return fetchItem.json()
}

const Page = async ({ params }) => {
    // const [similarProduct, setSimilarProduct] = [


    //     {
    //         id: 1,
    //         title: 'Snow Latte Mide Chair',
    //         price: 100,
    //         desc: 'The Mide Chair combines modern design with exceptional comfort, With its sleek lines and ergonomic support, this chair is designed to enhance your seating experience. ',
    //         mainImg: '/img/image 10-1.png',
    //         img1: '/img/Rectangle 2-2.png',
    //         img2: '/img/Rectangle 3-3.png',

    //     },
    //     {
    //         id: 2,
    //         title: 'Hayneedle Mide Chair',
    //         price: 100,
    //         desc: 'The Hayneedle Mide Chair brings a touch of classic elegance and modern functionality to any space. With its sophisticated design and high-quality craftsmanship, making it perfect addition to your home.',
    //         mainImg: '/img/PLAY Chair Counter Fabric Height 65 - Re-Wool _ Re-Wool 718 1-7.png',
    //         img1: '/img/Rectangle 2-6.png',
    //         img2: '/img/Rectangle 2-6.png',

    //     },
    //     {
    //         id: 3,
    //         title: 'Waffle Mide Chair',
    //         price: 100,
    //         desc: 'The Waffle Mide Chair combines contemporary design with exceptional comfort, making it an ideal choice for modern interiors. With its unique waffle-patterned, this chair offer style and support.',
    //         mainImg: '/img/PLAY Chair Counter Fabric Height 65 - Re-Wool _ Re-Wool 718 1-8.png',
    //         img1: '/img/Rectangle 2-7.png',
    //         img2: '/img/Rectangle 2-7.png',

    //     },
    // ]

    // const mapSimilarProducts = similarProduct.map(prod => {
    //     return <Card key={prod.id} chair={prod} />
    // })






    const { id } = params
    const item = await fetchSpecific(id)

    const mainPhoto = item.photos[0].url
    const otherPhoto = item.photos[1].url
    // const price = item.current_price[0].GBP[0]

    return (
        <section>
            <div className="container">
                <div className='navigation'>
                    <Link href="/" className="back">
                        <span><FaArrowLeft fontSize={12} /></span>
                        <span>Back</span>
                    </Link>
                    <ul className="">
                        <li><span><Link href='#'>Catalogue</Link></span> <span><FaGreaterThan fontSize={12} /><FaGreaterThan fontSize={12} /></span></li>
                        <li><Link href='#'>Mide Chair</Link> <span><FaGreaterThan fontSize={12} /><FaGreaterThan fontSize={12} /></span></li>
                        <li><Link href='#'>Red Oval Mide Chair</Link></li>

                    </ul>
                </div>

                <div className="single-product-body">
                    <div className="main-img">
                        <Image src={`https://api.timbu.cloud/images/${otherPhoto}`} alt='' width={466} height={466} />
                    </div>

                    <div className="main-content">
                        {item.categories && item.categories.map(itms => {
                            console.log('ITEMS ARE: ', itms.id);
                            return (
                                <span key={itms.id} className='title'>{itms.name}</span>
                            )
                        })}
                        {item.categories && item.categories.map(itms => <span key={itms.id} className='title'>{itms.name}</span>)}

                        <div className="" key={item.id}>
                            <p>{item.name}</p>


                            <div className="review">

                                <p><FaStar />  4.5k <span>15k+ Reviews</span></p>
                                <p>{item.description}</p>
                                <div className="price">
                                    <p>${item.current_price}</p>
                                    <AddToCart item={item} />
                                </div>
                                <hr />
                                <div className="colors">
                                    <div>
                                        <p>Colors</p>
                                        <p>Red</p>

                                    </div>
                                    <div className="">
                                        <Image src={`https://api.timbu.cloud/images/${otherPhoto}`} alt='' width={70} height={70} />
                                        <Image src={`https://api.timbu.cloud/images/${otherPhoto}`} alt='' width={70} height={70} />
                                        <Image src={`https://api.timbu.cloud/images/${otherPhoto}`} alt='' width={70} height={70} />

                                    </div>
                                </div>
                                <hr />

                                {/* RESPONSIVENESS HANDLE IT HERE */}
                                {/* <div className="product-details">
                                    <div className="nav">
                                        <Link href="#" className='active'>Product Details</Link>
                                        <Link href="#">Packaging Details</Link>
                                        <Link href="#">Shipping Details</Link>
                                    </div>
                                    <div className="content">
                                        <p>
                                            Make a bold statement with the Red Oval Mide Chair, where contemporary design meets comfort, offering a stylish and functional addition to any room.
                                        </p>
                                    </div>
                                </div> */}
                                <div className="product-desc">
                                    <div className="size">
                                        <p><img src="/img/ruler.png" alt="" />Size</p>
                                        <li>Height <span>28 Inches</span></li>
                                        <li>Width <span>24 Inches</span></li>

                                    </div>
                                    <div className="make">
                                        <p><img src="/img/Vector.png" alt="" />Make</p>
                                        <li>Seat <span>Upholstery</span></li>
                                        <li>Legs <span>Sturdy Iron</span></li>

                                    </div>
                                </div>
                                <hr />
                                <div className="reviews">
                                    <div className="">
                                        <p>Reviews & Ratings</p>
                                        <p>See all Reviews</p>
                                    </div>
                                    <div className="comments">
                                        <div className="">
                                            <div className='heading'>
                                                <div className="">
                                                    <img src="/img/Ellipse 1.png" alt="" />
                                                    <div className="">
                                                        <p>Fae_Vour</p>
                                                        <p>10 June 2024</p>
                                                    </div>
                                                </div>
                                                <div className="">
                                                    <FaStar />
                                                    <span>4.5k </span>
                                                </div>

                                            </div>
                                            <div className='writeup'>
                                                <p>
                                                    &quot; I absolutely love the Red Oval Mide Chair! It has completely transformed the look of my living room. The vibrant red color adds such a lively touch, and the unique oval shape makes it a real conversation piece. It&apos;s not just beautiful to look at – it&apos;s incredibly comfortable too. The padding is just right, and the fabric feels very high-quality. The iron legs are sturdy and give it a solid feel. Ive received so many compliments from friends and family. Definitely worth the purchase!&quot;
                                                </p>
                                            </div>

                                        </div>
                                    </div>
                                    <div className="comments">
                                        <div className="">
                                            <div className='heading'>
                                                <div className="">
                                                    <img src="/img/Ellipse 2.png" alt="" />
                                                    <div className="">
                                                        <p>Kefe</p>
                                                        <p>24 June 2024</p>
                                                    </div>
                                                </div>
                                                <div className="">
                                                    <FaStar />
                                                    <span>4.5k </span>
                                                </div>

                                            </div>
                                            <div className='writeup'>
                                                <p>
                                                    "I absolutely love the Red Oval Mide Chair! It has completely transformed the look of my living room. The vibrant red color adds such a lively touch, and the unique oval shape makes it a real conversation piece. It's not just beautiful to look at – it's incredibly comfortable too. The padding is just right, and the fabric feels very high-quality. The iron legs are sturdy and give it a solid feel. I’ve received so many compliments from friends and family. Definitely worth the purchase!"
                                                </p>
                                            </div>

                                        </div>
                                    </div>


                                </div>


                            </div>
                        </div>
                    </div>
                </div>

                <div className="similar-product-container">
                    <div className="title">
                        <h2> Similar Products</h2>
                    </div>
                    <div className="similar-product">

                        {/* {mapSimilarProducts} */}
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Page