import Image from 'next/image'
import React from 'react'
import { AiOutlineShoppingCart, AiOutlineSearch } from 'react-icons/ai'
import { MdAccountCircle } from 'react-icons/md'
import {BsCardChecklist} from 'react-icons/bs'

const Header = () => {
    return (
        <header className='fixed px-2 xs:px-1 top-0 left-0 bg-black w-screen h-16 flex items-center justify-between z-50'>
            <Image width={150} height={40} src={"/logo.png"} className="object-contain xs:w-16 " alt='logo' />

            <div className="w-2/3 bg-white h-10 rounded-md flex overflow-hidden">
                <input type="text" className="w-[90%] xs:w-[80%] bg-transparent placeholder:text-gray-500 h-full focus:outline-none p-2" placeholder="Search here" />
                <button type='button' className="w-[10%] xs:w-[20%]  h-full bg-red-600 text-white hover:bg-red-500 text-center flex justify-center items-center text-3xl xs:text-sm"><AiOutlineSearch/></button>
            </div>

            <div className="flex gap-4 xs:gap-1 text-3xl xs:text-lg text-white">
                <div className='cursor-pointer hover:text-red-600 transition-all ease-in-out p-2 rounded-full flex flex-col items-center relative'><AiOutlineShoppingCart /><span className="text-sm">Cart</span>
                <span className="absolute bg-red-700 w-4 h-4 text-center rounded-full text-white top-2 right-0 text-xs ">5</span>
                </div>
                <div className='cursor-pointer hover:text-red-600 transition-all ease-in-out p-2 rounded-full flex flex-col items-center'><MdAccountCircle />
                <span className="text-sm">Account</span></div>

                <div className='cursor-pointer hover:text-red-600 transition-all ease-in-out p-2 rounded-full flex flex-col items-center xs:hidden sm:hidden'><BsCardChecklist />
                <span className="text-sm">Orders</span></div>
            </div>

        </header>
    )
}

export default Header