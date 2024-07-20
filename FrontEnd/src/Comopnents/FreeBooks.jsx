import React from 'react'
import list from '../../public/list.json'
import ah from '../../public/ah.jpg'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from './Cards';
function FreeBooks() {
  const freedata=list.filter((data)=>data.Categories==="free");
  console.log(freedata);
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]}
  return (<>
  <div>
    <div className="text-3xl font-extrabold ml-16 mt-24"><h1>Our Free Books</h1> </div>

    <div className='max-w-screen-2xl container mx-auto  md:px-20 px-4 mt-10'>
     
      
   
    <div className="slider-container">
      <Slider {...settings}>
        {
          freedata.map(item=>(<Cards item={item} key={item.id}/>))
        }
      </Slider>
    </div>
    </div>
   </div>
    </>
  )
}

export default FreeBooks
