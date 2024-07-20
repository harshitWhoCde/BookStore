import React from 'react';
import NavBar from '../NavBar';
import Footer from '../Footer';
import list from '../../../public/list.json';
import Cards from '../Cards';
import { Link } from 'react-router-dom';

function Course() {
  return (
    <>
      <NavBar />
      <div className='max-w-screen-2xl container mx-auto md:px-20' dark:bg-slate-900 dark:text-white>
        <div className='mt-5 justify-center text-center content-center'>
          <h1 className='font-semibold md:4x1 mt-24 text-4xl'>
            We are Delighted to have you<span className='text-pink-500'> here! :)</span>
          </h1>
          <p className='mt-5 mr-10'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt quas quaerat dolor ex molestias ullam. Rerum accusamus provident repellendus pariatur quam neque blanditiis corporis voluptates quibusdam culpa, expedita quisquam deleniti!
          </p>
          <Link to={"/"}>
            <button className='bg-pink-500 text-white px-3 py-3 rounded-md hover:bg-pink-900 duration-300 mt-3'>Back</button>
          </Link>
        </div>
        <div className='mt-7 grid grid-cols-1 md:grid-cols-4 gap-2'>
          {list.map((item) => (<Cards key={item.id} item={item} />))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Course;
