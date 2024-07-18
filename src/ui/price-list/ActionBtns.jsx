// 'use client'
// import { useRouter } from 'next/navigation';
// import React, { useState } from 'react'
// import './price-list.scss'

// const ActionBtns = ({ chairList, size }) => {
//     const [loading, setIsLoading] = useState(false)
//     const router = useRouter();

//     const handlePageChange = async (pageNumber) => {

//         try {
//             setIsLoading(true)
//             if (pageNumber === null) return
//             const url = await pageNumber.replace('/products', '/')
//             await router.push(url);
//         } catch (error) {
//             setIsLoading(false)

//         } finally {
//             setIsLoading(false)

//         }

//     };

//     const number = [...Array(Math.ceil(chairList.total / size))].map((_, i) => {
//         return <span key={i} className=''>{i + 1}</span>
//         return <span key={i} className='' onClick={() => handlePageChange(`/?page=${i + 1}&size=${10}`)}>{i + 1}</span>
//     })

//     return (
//         <>
//             <div className='pagination'>

//                 <button onClick={() => handlePageChange(chairList.previous_page)}>PREV</button>
//                 {number}
//                 <button onClick={() => handlePageChange(chairList.next_page)}>NEXT</button>
//             </div>
//             {loading || <div className="loader"></div>}
//         </>
//     )
// }

// export default ActionBtns





'use client'
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import './price-list.scss';

const ActionBtns = ({ chairList, size }) => {
    const [loading, setIsLoading] = useState(false);
    const router = useRouter();
    console.log(loading);

    const handlePageChange = async (pageNumber) => {
        if (pageNumber === null) return;

        try {
            setIsLoading(true);
            const url = pageNumber.replace('/products', '/');
            await new Promise(resolve => setTimeout(resolve, 200));
            await router.push(url);
            setIsLoading(false);

        } catch (error) {
            console.error("Error during page navigation:", error);
        } finally {
            setIsLoading(false);
        }
    };

    const number = [...Array(Math.ceil(chairList.total / size))].map((_, i) => {
        return (
            <span
                key={i}
                className=''
                onClick={() => handlePageChange(`/?page=${i + 1}&size=${size}`)}
            >
                {i + 1}
            </span>
        );
    });

    return (
        <>
            <div className='pagination'>
                <button onClick={() => handlePageChange(chairList.previous_page)}>PREV</button>
                {number}
                <button onClick={() => handlePageChange(chairList.next_page)}>NEXT</button>
            </div>
            {loading && <div className="loader"></div>}
        </>
    );
};

export default ActionBtns;
