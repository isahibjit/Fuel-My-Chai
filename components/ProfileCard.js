import React from 'react'

const ProfileCard = () => {
  return (
    <div className='w-[200px]  h-[200px] my-5 '>
        <img className=' rounded-full w-[200px] h-[200px] cursor-pointer hover:scale-110 active:scale-100 transition-all duration-200 object-cover' src="Creators Image/girl 2.jpg" alt="" />
        <div className='mt-2'>
            <p className='jakarta-font-bold text-center'>@Sophia_Writes</p>
            <p className='text-[#5C738A] text-center'>Author and poet sharing her insights.</p>
        </div>
    </div>
  )
}

export default ProfileCard