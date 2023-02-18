import React from 'react'
import { Carousel } from 'react-responsive-carousel'

const Banner = () => {
  return (
    <div className="relative mt-24 z-10 w-full overflow-hidden">
      <div className="absolute w-full h-44 bg-gradient-to-t from-gray-100 to-transparent bottom-0 z-20"/>
        <Carousel autoPlay infiniteLoop showStatus={false}
        interval={6000}
        showThumbs={false}
        >
          <div>
            <img loading='lazy' src="https://images.pexels.com/photos/5728302/pexels-photo-5728302.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className='w-full object-contain h-full' alt="" />
          </div>
          <div>
            <img loading='lazy' src="https://images.pexels.com/photos/7319301/pexels-photo-7319301.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className='w-full object-contain h-full' alt="" />
          </div>
          <div>
            <img loading='lazy' src="https://images.pexels.com/photos/5638813/pexels-photo-5638813.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className='w-full object-contain h-full' alt="" />
          </div>

        </Carousel>
    </div>
  )
}

export default Banner