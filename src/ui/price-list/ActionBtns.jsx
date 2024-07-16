'use client'
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import './price-list.scss'

const ActionBtns = ({ chairList, size }) => {
    const [loading, setIsLoading] = useState(false)
    const router = useRouter();

    const handlePageChange = (pageNumber) => {
        setIsLoading(true)
        if (pageNumber === null) return
        const url = pageNumber.replace('/products', '/')
        router.push(url);
        setIsLoading(false)

    };

    const number = [...Array(Math.ceil(chairList.total / size))].map((_, i) => {
        return <span key={i} className='' onClick={() => handlePageChange(`/?page=${i + 1}&size=${10}`)}>{i + 1}</span>
    })

    return (
        <>
            <div className='pagination'>

                <button onClick={() => handlePageChange(chairList.previous_page)}>PREV</button>
                {number}
                <button onClick={() => handlePageChange(chairList.next_page)}>NEXT</button>
            </div>
            {
                loading && <div className="loader"></div>

            }
        </>
    )
}

export default ActionBtns