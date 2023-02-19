import React from 'react'
import { Rating } from 'react-simple-star-rating'
import Button from './UI/Button'
import { cartActions } from '../redux/cartReducer';
import { useDispatch, useSelector } from 'react-redux';

function CartItem({ formatPrice, item }) {
    // const items = useSelector(state => state.cartReducer.items);
    const dispatch = useDispatch()
    return (
        <div className="flex sm:flex-wrap xs:flex-wrap w-8/12 xs:w-full sm:w-full md:w-full lg:w-10/12 gap-4 xs:gap-2 items-center h-40 md:h-44 xs:h-max sm:h-max xs:py-2 sm:py-2 shadow shadow-gray-400">
            <img src={item.image} alt={item.title} title={item.title} className="w-40 xs:w-full sm:w-full h-full xs:h-32 sm:h-32 object-contain p-2" />

            <div className='w-1/2 md:w-5/12 xs:w-full sm:w-full xs:px-2 sm:px-2'>
                <h3 className="text-lg whitespace-nowrap w-full overflow-hidden text-ellipsis font-semibold">
                    {item.title}
                </h3>
                <p className='text-sm text-gray-500'>
                    {item.description.slice(0, 100) + "..."}
                </p>
                <Rating SVGclassName="inline w-5 h-5" readonly allowFraction initialValue={item.rating.rate} />
                <div className="flex gap-3 mt-2">
                    <span className="p-1 rounded-md bg-gray-600 text-white text-xs ">{item.category}</span>
                </div>
            </div>
            <div className='w-1/4 xs:w-full sm:w-full xs:px-5 sm:px-5'>
                <p className="text-sm flex items-center justify-between text-gray-500">
                    <span>Quantity</span>
                    <span className='flex items-center gap-3'>
                        <Button onClick={() => dispatch(cartActions.subtractOne(item.title))} text={"-"} />
                        {item.quantity}
                        <Button onClick={() => dispatch(cartActions.addOne(item.title))} text={"+"} />
                    </span>
                </p>
                <p className="text-sm flex justify-between text-gray-500">
                    <span>Price</span>
                    <span>₹{formatPrice(item.price)}</span>
                </p>
                <p className="text-sm mb-2 flex justify-between text-gray-500">
                    <span>Discount</span>
                    <span>₹0</span>
                </p>
                <hr />
                <h1 className="text-xl flex justify-between font-semibold">
                    <span>Total:</span>
                    <span>₹{(formatPrice(item.price) * item.quantity)}</span>
                </h1>
            </div>
        </div>
    )
}

export default CartItem