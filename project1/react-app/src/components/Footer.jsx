import React from 'react'

const Footer = () => {
  return (
    <div className='flex justify-center bg-gray-900 text-white py-10'>
      <div className='rounded-md p-8 text-center'>
        <p className='text-4xl font-bold mb-2'>Product Page</p>
        <p className='text-2xl mb-4'>Your style. Your store. Your way.</p>
        <div className='text-2xl flex justify-center gap-6'>
          <i class="fa-brands fa-facebook text-3xl"></i>
          <i class="fa-brands fa-instagram text-3xl"></i>
          <i class="fa-brands fa-whatsapp text-3xl"></i>
        </div>
      </div>
    </div>
  )
}

export default Footer
