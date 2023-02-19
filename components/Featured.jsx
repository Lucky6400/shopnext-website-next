import React from 'react'
import Product from './Product'
const Featured = ({ data }) => {

    return (
        <div className="flex justify-evenly xs:gap-5 w-full -mt-24 xs:-mt-16 flex-wrap">
            {data?.slice(0, 4).map((item, index) => (

                <Product item={item} key={item.id}/>
            ))}
        </div>
    )
}

export default Featured