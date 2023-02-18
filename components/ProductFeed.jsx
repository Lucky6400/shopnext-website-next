import React from 'react'
import Product from './Product'

const ProductFeed = ({data}) => {
  return (
    <>
    <h1 className="text-5xl font-bold my-3">
      Other Products
    </h1>
    <hr />
    <div className="flex justify-evenly flex-wrap w-full gap-5 py-3">
        {data?.slice(4)?.map(item => <Product item={item} key={item.id}/>)}
    </div>
    </>
  )
}

export default ProductFeed