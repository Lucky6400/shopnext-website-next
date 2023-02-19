import Image from 'next/image'
import React from 'react'
import { AiOutlineShoppingCart, AiOutlineSearch } from 'react-icons/ai'

import { BsCardChecklist } from 'react-icons/bs';
import { useSession, signIn, signOut } from "next-auth/react"
import SearchButton from './UI/SearchButton'
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import Account from '../components/Menu/Account'
const Header = () => {
    const { data: session } = useSession();
    //console.log(session)

    const items = useSelector(state => state.cartReducer.items)
    const quantity = items.reduce((acc, item) => acc + item.quantity, 0);
    const router = useRouter();
    
    return (
        <header className='fixed px-2 xs:px-1 top-0 left-0 bg-black w-screen h-16 flex items-center justify-between z-50'>
            <Image onClick={() => router.push('/')} width={150} height={40} src={"/logo.png"} className="object-contain xs:w-16 cursor-pointer " alt='logo' />

            <div className="w-2/5 bg-white h-10 rounded-md flex overflow-hidden">
                <input type="text" className="w-[91%] xs:w-[80%] bg-transparent placeholder:text-gray-500 h-full focus:outline-none p-2" placeholder="Search here" />
                <SearchButton/>
            </div>

            <div className="flex gap-4 items-center xs:gap-1 text-3xl xs:text-lg text-white">
                <div onClick={() => router.push('/cart')} className='cursor-pointer hover:text-red-600 transition-all ease-in-out p-2 rounded-full flex flex-col items-center relative'><AiOutlineShoppingCart /><span className="text-sm">Cart</span>
                    <span className="absolute bg-red-700 w-4 h-4 text-center rounded-full text-white top-2 right-0 text-xs ">{quantity}</span>
                </div>

                <Account/>
            </div>

        </header>
    )
}

export default Header