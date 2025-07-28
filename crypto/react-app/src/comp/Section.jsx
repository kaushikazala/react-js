import React from 'react'

const Section = () => {
  return (
    <>
    <div className=' w-[100%] flex '>
        <div className='w-[50%]  pl-[20%] pt-[10%]'>
      <p className='text-purple-700 text-2xl'>CRYPTO PLATFORM</p>
       <p className='font-bold text-6xl pt-[10px] pb-[10px] '>Crypto Trade Agency</p>
       <div>
       <p className='text-gray-600 pt-[10px] pb-[10px]'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor, iure laborum. Odit ducimus tenetur facere ratione neque eum, nihil recusandae</p></div>
       <button className='bg-purple-700 rounded-4xl px-[20px] pt-[9px] pb-[9px]'>Get Started</button>
    </div>
    <div className='w-[50%] pt-[5%]'>
     <img src="https://mobirise.com/extensions/cryptom5/trade-agency/assets/images/features4.jpg" className='w-[600px] rounded-4xl' alt="" />
    </div>
    </div>
    </>
  )
}

export default Section

