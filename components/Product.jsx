import React from 'react'
import { Rating } from 'react-simple-star-rating'
import Button from './UI/Button';
import { useDispatch, useSelector } from 'react-redux';
import { cartActions } from '../redux/cartReducer';

const Product = ({ item }) => {
    const dispatch = useDispatch();
    const items = useSelector(state => state.cartReducer.items)
    console.log("items are these -->", items)


    return (
        <div key={item.id} className="w-1/5 xs:w-4/5 shadow-sm shadow-gray-400 hover:lg:scale-105 hover:xl:scale-105 transition-all ease-in-out cursor-pointer bg-white py-3 px-3 h-max z-30">
            <p className="text-gray-500 mb-2 text-xs font-semibold">{item.category.toUpperCase()}</p>
            <img src={item.image} alt="" className="w-full px-5 h-32 object-contain" />

            <h3 className="font-bold my-2 whitespace-nowrap text-ellipsis overflow-hidden w-full">
                {item.title}
            </h3>
            <p className="text-sm h-20 mb-2 overflow-hidden">
                {item.description.slice(0, 100) + "..."}
            </p>
            <p className="text-xl font-semibold">
                ₹{Math.floor(item.price * 80).toString().slice(0, -2) + "99"}
            </p>

            <div className="flex gap-1">
                <Rating SVGclassName="inline w-5 h-5" readonly allowFraction initialValue={item.rating.rate} />
                <p className="mt-2 text-xs text-gray-600">
                    {item.rating.count}
                </p>
            </div>


            <p className="text-xs text-gray-600 mt-2">{item.rating.rate} out of 5</p>

            <Button onClick={() => {
                dispatch(cartActions.addToCart({quantity: 1, ...item}))
            }} text={"Add to Cart"}/>
        </div>
    )
}

export default Product