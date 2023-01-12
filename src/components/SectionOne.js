import React from 'react'

function Date(){
return(
    <div className='flex flex-col md:w-1/2'>
        <div className='text-4xl'>From Server-Side Rendering to Static Generation</div>
        <div className='text-lg pt-4'>June 2,2022</div>
    </div>
);
}
function Paragraph(){
    return(
        <div className='mt-4 text-lg flex flex-col md:w-1/2 md:mt-0'>
            <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quid dubitas igitur mutare principia naturae? Ita multo sanguine profuse in laetitia et in victoria est mortuus. Omnia contraria, quos etiam insanos esse vultis. Hinc ceteri particulas arripere retching suam quisque saw voluit afferre sententiam. Quis non odit sordidos, vanos, leves, futtiles? Quasi ego id curem, quid ille aiat aut neget.</div>
            <div className='pt-4 pl-5 text-xl font-bold'>Username LastName</div>
        </div>
    );
}

function SectionOne() {
  return (
    <div className='flex flex-col p-4 md:flex-row'>
      <Date/>
      <Paragraph/>
    </div>
  );
}

export default SectionOne
