import React, { useState } from 'react'
import Header from '../../components/Header'
import { useSelector } from 'react-redux';
import CartItem from '../../components/CartItem';
import Head from 'next/head'
import Checkout from '../../components/Checkout';
import Button from '../../components/UI/Button';
import { MdShoppingCart } from 'react-icons/md';
const Cart = () => {
    const [open, setOpen] = useState(false);
    const items = useSelector(state => state.cartReducer.items);
    //const dispatch = useDispatch()
    function formatPrice(price) {
        let newPrice = Math.floor(price * 80).toString().slice(0, -2) + "99";
        return +newPrice;
    }
    return (
        <div>
            <Head>
                <title>View cart items</title>
            </Head>
            <Header />
            <div className="flex flex-wrap lg:justify-center gap-5 mt-16 w-full px-8 md:px-0">
                <h1 className="text-xl font-bold border-b pb-2 border-gray-300 w-full my-4 ">Cart Items</h1>

                {items.length > 0 && items.map(item => (
                    item.quantity > 0 &&
                    <CartItem formatPrice={formatPrice} item={item} key={item.id} />
                ))}
                    <Checkout open={open} setOpen={setOpen} items={items} formatPrice={formatPrice} />
               
                <Button onClick={() => setOpen(true)} className={"fixed lg-hidden xl:hidden bottom-0 right-2 rounded-full w-10 h-10 text-2xl"} text={<MdShoppingCart />} />
            </div>
        </div>
    )
}

export default Cart