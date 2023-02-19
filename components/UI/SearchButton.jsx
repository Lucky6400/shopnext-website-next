import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai'

const SearchButton = () => {
  return (
    <button type='button' className="w-[10%] xs:w-[20%]  h-full bg-red-600 text-white hover:bg-red-500 text-center flex justify-center items-center text-3xl xs:text-sm"><AiOutlineSearch /></button>
  )
}

export default SearchButton