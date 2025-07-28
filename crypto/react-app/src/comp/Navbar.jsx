import React from 'react'

const Navbar = () => {
  return (
  <>
  <nav className='flex justify-between items-center px-[20%] pt-[15px] '>
    <p className='text-4xl font-bold'>CryptoM5</p>
    <ul className='flex gap-3 items-center text-2xl'>
      <li>Home</li>
      <li>About</li>
      <li>Features</li>
      <li>Contacts</li>
      <button className='bg-purple-700 rounded-4xl px-[20px] pt-[9px] pb-[9px]'>Get Started</button>
    </ul>
    
  </nav>
  </>
  )
}

export default Navbar


