import { Carousel } from 'antd';
import React from 'react';

const contentStyle: React.CSSProperties = {
  height: '600px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};

const HomeBanner = () => (
  <Carousel autoplay>
    <div className=" bg-teal-700 md:max-h-[83.5vh]">
        <img className='w-full' src="https://i.ibb.co/0GHJ55Y/slider1.webp" alt="Slider-1" />
    </div>
    <div className=" bg-teal-700 md:max-h-[83.5vh]">
        <img className='w-full' src="https://i.ibb.co/jgfY1SH/slider2.webp" alt="" />
    </div>
    <div className=" bg-teal-700 md:max-h-[83.5vh]">
        <img className='w-full' src="https://i.ibb.co/mhR7pdj/slider3.webp" alt="" />
    </div>
  </Carousel>
);

export default HomeBanner;

