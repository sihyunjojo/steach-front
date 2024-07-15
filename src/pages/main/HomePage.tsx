import React from 'react';
import aa from '../../assets/banner.jpg'

const HomePage: React.FC = () => {
  return (
    <div className='flex'>
    <div className='w-1/2 border border-black'>
      <h2>내용</h2>
      <img src={aa} alt="" />
    </div>
    <div className='w-1/2 border border-black'>
      <h2>내용</h2>
    </div>
    </div>
  );
}

export default HomePage;