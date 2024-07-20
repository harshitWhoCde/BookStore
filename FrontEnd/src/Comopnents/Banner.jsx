import React from 'react'
import banner from '../../public/banner.jpg'
function Banner() {
  return (
    <>
    <div>
        <div className='flex'>
     <div className='container ml-70 h-80 mt-8 '>
     <h1 className='text-4xl font-bold mt-16 ml-20'>Hello, Welcome Here To Learn Something <span className='text-pink-700'>New Every Day!!!</span></h1>
     <p className='mt-10 ml-20'>
     Books are crucial in every student's life because they introduce children to a world of imagination, provide information of the outside world, improve their reading, writing, and speaking abilities, and improve memory and intellect.</p>
     <label className="input input-bordered flex items-center mt-4 ml-20">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fill="currentColor"
    className="h-4 w-4 opacity-70 ">
    <path
      d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
    <path
      d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
  </svg>
  <input type="text" className="" placeholder="Email" />
</label> 
<button className="btn btn-secondary ml-20 mt-3">Submit</button>
</div>
     <div className='container mr--24 h-80'>
  <img src={banner} className='banner h-80 w-92 ml-40 mt-24'></img>
  
      </div>
      
      </div>
        </div>
        </>
  )
}

export default Banner
