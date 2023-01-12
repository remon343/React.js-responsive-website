import React from 'react'

function Footer() {
  return (
    <div className='mt-24 flex flex-col items-center pt-20 pb-20 bg-gray-200 lg:flex-row lg:justify-center lg:gap-10'>
      <div className='text-4xl font-semibold tracking-tight lg:w-1/2 lg:text-5xl'>
        Statically Generated with React.js        
      </div>
      <div className='flex flex-col items-center lg:flex-row lg:gap-10 lg:justify-center'>
        <button className='bg-black text-white pt-3 pb-3 pl-6 pr-6 mt-4 font-bold'>Read Documentation</button>
        <div className='mt-3 font-bold'>
            <a href='https://github.com/remon343/React.js-responsive-website/tree/files'>View on GitHub</a>
        </div>
      </div>
    </div>
  )
}

export default Footer
