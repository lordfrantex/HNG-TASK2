import React from 'react'
import './page.scss'
import Image from 'next/image'
import Link from 'next/link'

const page = () => {
    return (
        <section>
            <div className="success-wrapper">
                <div className="container">
                    <div className="success">
                        <p>Payment Success</p>
                        <Image src='/img/Vector_success.png' alt='' width={126} height={126} />
                        <Link href='/'><button>Go Home</button></Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default page
