import React from 'react'

function Navbar() {
  return (
    <div className='flex flex-col flex-wrap items-center w-screen p-8 pt-16 md:flex-row md:gap-3 md:flex-nowrap'>
      <div className='text-4xl font-bold md:text-8xl'>Blog.</div>
      <div className='flex flex-wrap gap-1 p-4 text-lg md:flex-wrap'><div className='flex-nowrap'>A statically generated blog example using </div><a href="#" className='underline'>Next.js</a><div>and</div><a href="#" className='underline'>Wordpress</a> </div>
    </div>
  )
}

export default Navbar
