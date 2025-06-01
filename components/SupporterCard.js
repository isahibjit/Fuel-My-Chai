import React from 'react'

const SupporterCard = () => {
  return (
    <div className='flex gap-2 '>
        <img 
        className='rounded-full w-[60px] h-[60px] object-cover'
        src="/Creators Image/girl 2.jpg" alt="Supporter Profile Image" />
        <div className='text-lg'>
            <p className='manrope-font'>Arjun Kapoor Says </p>
            <p className='text-[#4e524d] '>Rs.100</p>
        </div>
    </div>
  )
}

export default SupporterCard