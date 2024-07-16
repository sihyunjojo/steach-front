import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios';
import ax from '../../assets/teacher.png'


const LectureDetail: React.FC = () => {
  

  return (
    <>
      <header className="flex bg-[#1C2151] text-white text-left py-2.5 justify-center">
        <div className='w-3/5'>
          <div>
            {/* 아래 axios 받아서 작성해야함 */}
            <p>IT 프로그래밍-과목 분류</p>
            <h1 className='text-7xl p-3'>김호경의 따라하며 배우는 C++ - 과목명</h1>
            <p className='p-1'>초보도 따라할 수 있는 c++ 개발 입문! 게임학과 - 과목 설명</p>
            <Link to={'/'}>
              <div className="flex items-center">
                <img src={ax} className='w-10 h-10 m-5' />
                <span>유니티 신 김호경 - 강사상세페이지, 만들어야함</span>
              </div>
            </Link>
          </div>
        </div>
        <div className='w-1/5'>
          <div>
            <img src={ax} className='w-full'/>
          </div>
        </div>

      </header>
      <section className='flex justify-center bg-[#000000]'>dd
        <div className='items-center bg-[#999999]'>
          dddddddddddddddddddddddddddddddddddddddddd
          dddddddddddddddddddddddddddddddddddddddddd
          dddddddddddddddddddddddddddddddddddddddddd
      </div>


      </section>
      <div></div>
    </>
  );
}

export default LectureDetail;