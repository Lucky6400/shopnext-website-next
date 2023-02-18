import React from 'react'

const HeaderBottom = ({ categoryData }) => {
  return (
    <div className="fixed top-16 bg-red-600 text-white flex items-center gap-4 overflow-x-scroll w-screen whitespace-nowrap px-2 py-1 no-scrollbar cursor-pointer z-50">
      <span>All</span>
      {categoryData?.map((item, index) => <span key={index}>{item[0].toUpperCase() + item.slice(1)}</span>)}

    </div>
  )
}

export default HeaderBottom