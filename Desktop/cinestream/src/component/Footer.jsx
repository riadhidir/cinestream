import React from 'react'
import logo from '/logo.svg'
function Footer() {
  return (
    <div className='row md:grid md:grid-cols-12 gap-5 bg-black text-white p-10 border-t-[1px] border-white '>
        
        <div className='row-span-1 md:col-span-3 flex  flex-col self-start gap-10'>
            <img src={logo} className=' md:w-48'   alt="" />
        <p className='text-gray-600'>© CineStream</p>
        </div>
        <div className='row-span-1 md:col-span-9 flex flex-col self-start gap-10'>
            <p className='text-gray-600'>CineStream is a Free Movies streaming site with zero ads. We let you watch movies online without having to register or paying, with over 10000 movies and TV-Series. You can also Download full movies from HDToday and watch it later if you want.</p>
            <div className='inline-flex gap-10'>
                <a href="">Terms of service</a>
            </div>
        </div>

    </div>
  )
}

export default Footer