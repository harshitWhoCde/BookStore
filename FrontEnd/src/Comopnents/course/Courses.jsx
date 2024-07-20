import React from 'react'
import Course from './Course'
import NavBar from '../NavBar'
import Footer from '../Footer'

function Courses() {
  return (
    
      <>
      <NavBar/>
      <div className='min-h-screen dark:bg-slate-900 dark:text-white'>
      <Course/>
      </div>
      
      </>
    
  )
}

export default Courses
