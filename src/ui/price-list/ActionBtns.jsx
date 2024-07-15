'use client'
import { useRouter } from 'next/navigation';
import React from 'react'
import './price-list.scss'

const ActionBtns = ({ chairList, size }) => {
    const router = useRouter();

    const handlePageChange = (pageNumber) => {
        if (pageNumber === null) return
        const url = pageNumber.replace('/products', '/')
        router.push(url);
    };

    const number = [...Array(Math.ceil(chairList.total / size))].map((_, i) => {
        return <span key={i} className=''>{i + 1}</span>
    })

    return (
        <div className='pagination'>

            <button onClick={() => handlePageChange(chairList.previous_page)}>PREV</button>
            {number}
            <button onClick={() => handlePageChange(chairList.next_page)}>NEXT</button>
        </div>
    )
}

export default ActionBtns