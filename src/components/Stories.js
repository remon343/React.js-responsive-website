import React from 'react'

var title = ["Learn How to Pre-render Pages Using Static Generation with Next.js","Deploying Next.js Apps"]
function StoryTitle(){
    return(
        <div className='pt-10 pb-8 text-5xl font-bold md:text-6xl'>More Stories</div>
    );
}
function StoryOne(){
    return(
        <div className='flex flex-col pt-6'>
            <img src='https://next-blog-wordpress.vercel.app/_next/image?url=https%3A%2F%2Fvercelsolutions.com%2Fwp-content%2Fuploads%2F2022%2F06%2Fhamman-mohamed-C69xTC5q_pE-unsplash-scaled.jpg&w=3840&q=75' className='w-full'></img>
            <div className='text-3xl pt-3 pb-3 underline  md:no-underline'>{title[0]}</div>
            <div className='pt-3 text-xl'>June 2,2022</div>
            <div className='pt-4 text-xl font-normal spacing-'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quid dubitas igitur mutare principia naturae? Ita multo sanguine profuse in laetitia et in victoria est mortuus. </div>
            <div className='pt-4 pl-5 text-xl font-bold'>Username LastName</div>
        </div>
    );
}
function StoryTwo(){
    return(
        <div className='flex flex-col pt-16 md:pt-6'>
            <img src='https://next-blog-wordpress.vercel.app/_next/image?url=https%3A%2F%2Fvercelsolutions.com%2Fwp-content%2Fuploads%2F2022%2F06%2Fhamman-mohamed-C69xTC5q_pE-unsplash-scaled.jpg&w=3840&q=75' className='w-full'></img>
            <div className='text-3xl pt-3 pb-3 underline  md:no-underline'>{title[1]}</div>
            <div className='pt-3 text-xl'>June 2,2022</div>
            <div className='pt-4 text-xl font-normal spacing-'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quid dubitas igitur mutare principia naturae? Ita multo sanguine profuse in laetitia et in victoria est mortuus. </div>
            <div className='pt-4 pl-5 text-xl font-bold'>Username LastName</div>
        </div>
    );
}
function Stories() {
  return (
    <div>
      <StoryTitle/>
      <div className='md:flex md:flex-row md:gap-16'>
        <StoryOne/>
        <StoryTwo/>
      </div>
    </div>
  )
}

export default Stories
