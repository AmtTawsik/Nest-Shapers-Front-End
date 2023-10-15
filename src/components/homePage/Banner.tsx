import { Carousel } from 'antd';
import React from 'react';

const contentStyle: React.CSSProperties = {
  height: '500px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};

const HomeBanner = () => (
  <Carousel autoplay>
    <div className=" bg-teal-700 h-[500px]">
      <h3>Hello house crafters</h3>
    </div>
    <div className=" bg-teal-700 h-[500px]">
      <h3>Hello house crafters</h3>
    </div>
    <div className=" bg-teal-700 h-[500px]">
      <h3>Hello house crafters</h3>
    </div>
  </Carousel>
);

export default HomeBanner;
