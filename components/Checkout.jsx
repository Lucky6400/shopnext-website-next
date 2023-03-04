import React from 'react'
import Button from './UI/Button'

const Checkout = ({ items, formatPrice, setOpen, open }) => {
    let totalPrice = items.reduce((acc, curr) => acc + (formatPrice(curr.price) * curr.quantity), 0);
    let totalItems = items.reduce((acc, curr) => acc + curr.quantity, 0)

    return (
        <div className={"fixed right-12 bg-white top-32 w-80 max-w-full  border border-gray-400 xs:right-0 xs:w-full " + `${open ? "xs:block sm:block md:block" : "sm:hidden xs:hidden md:hidden"}`}>
            <div className="w-full relative px-3 py-5">

                <div onClick={() => setOpen(false)} className="absolute lg-hidden xl:hidden -top-2 right-2 w-6 h-6 bg-black text-white rounded-full text-center flex items-center justify-center" >x</div>

                <div className="flex justify-between my-3 w-full">
                    <span className="text-sm text-gray-500">Items:</span>
                    <span className="text-sm text-gray-500">{totalItems}</span>
                </div>

                <div className="flex justify-between my-3 w-full">
                    <span className="text-sm text-gray-500">Cost:</span>
                    <span className="text-sm text-gray-500">₹{totalPrice}</span>
                </div>

                <div className="flex justify-between my-3 w-full">
                    <span className="text-sm text-gray-500">Total discount:</span>
                    <span className="text-sm text-gray-500">0</span>
                </div>

                <hr />
                <div className="flex font-bold justify-between my-3 w-full">
                    <span className="text-xl text-black">Total:</span>
                    <span className="text-xl text-black">₹{totalPrice}</span>
                </div>

                <Button text="Proceed to checkout" className={"my-2"} />
            </div>

        </div>
    )
}

export default Checkout