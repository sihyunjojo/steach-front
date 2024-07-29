import React, { useState, Component, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom'
import ax from '../../assets/teacher.png'
import { useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store'
import { Lecture } from '../../store/lecturesSlice';
import { getLectureDetails, getLecturelist } from '../../store/lecturesSlice'
import { useDispatch } from 'react-redux';
import img1 from '../../../src/assets/checked.jpg'
import img2 from '../../../src/assets/unchecked.jpg'
import img3 from '../../../src/assets/human.png'


const LectureDetail: React.FC = () => {

  // 이진송
  // 틀만 짜서 디자인 정하고 서버받고 난 후 axios 해야함

  const { id } = useParams<{ id: string }>();
  const dispatch = useDispatch<AppDispatch>();
  const lectures = useSelector((state: RootState) => state.lectures.selectlectures)
  const lectureslist = useSelector((state: RootState) => state.lectures.lectureslist)
  const status = useSelector((state: RootState) => state.lectures.status);
  const error = useSelector((state: RootState) => state.lectures.error);
  const bitday = lectures?.weekdays_bitmask.split('');
  console.log(id)
  const url:string = lectures?.banner_img_url
  useEffect(() => {
    if (id) {
      dispatch(getLectureDetails(id))
      dispatch(getLecturelist(id))
    }
  },[id, dispatch])
  console.log(lectures, 1)
  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'failed') {
    return <div>Error: {error}</div>;
  }
  return (
    <>

      <header className="flex bg-hoverNavy text-white text-left py-2.5 justify-center">
        <div className='w-3/5'>
          <div>
            {/* 아래 axios 받아서 작성해야함 */}
            <p>{lectures?.category} &gt; {lectures?.sub_category}</p>
            <h1 className='text-7xl p-3'>{lectures?.title}</h1>
            <p className='p-1'>{lectures?.sub_title}</p>
            <p className='p-1'>{lectures?.intro}</p>
            <Link to={'/teacher/profiledetail'}>
              <div className="flex items-center">
                <img src={img3} className='w-10 h-10 m-5' />
                <span>{lectures?.teacher_name} 강사님 - 강사상세페이지, 만들어야함</span>
              </div>
            </Link>
            </div>
            </div>
                <button className='mt-60 mr-10'>강의 신청하기</button>
        <div className='w-1/5'>
          <div>
            <img src={url} className='w-60 h-60'/>
          </div>
        </div>

      </header>
      <div className='bg-ivory grid grid-cols-12'>
      <div className='hidden lg:col-span-1 lg:block'></div>
      <div className='lg:col-span-9 col-span-10 bg-ivory border-x-2 border-x-hardBeige p-4'>
          <br className='text-black'></br>

          <ul className="hidden lg:flex lg:flex-row text-lg font-bold ml-4 lg:ml-0">
          <li className="mx-4 lg: m-2 lg:px-2 lg:py-0">
            <a href="#" className="hover:text-orange-300">
              강의
            </a>
          </li>
          <li className="mx-4 lg: m-2 lg:px-2 lg:py-0">
            <Link to="/teacher/profile" className="hover:text-orange-300">
              내 강의실
            </Link>
          </li>
          <li className="mx-4 lg: m-2 lg:px-2 lg:py-0">
            <a href="#" className="hover:text-orange-300">
              문의하기
            </a>
          </li>
          </ul>
          
          <h1 className='text-6xl'>커리큘럼</h1>
          <p className='flex'> {
            bitday?.map((a) => {
              return (
                <>
                  {
                    a === '1'
                      ? <img src={img1} className='w-20 h-20'/>
                      : <img src={img2} className='w-20 h-20'/>
                  }
                {a}
                </>
              )
            })
          }</p>
          <p> {lectures?.start_date} {lectures?.end_date}</p>
          <p> {lectures?.lecture_start_time} {lectures?.lecture_end_time}</p>
          <h1 className='text-6xl'>강의 대상</h1>
        <div className='whitespace-pre-line break-words'>
          <p>현재 신청 인원 {lectures?.current_attendees}</p>
          <p>최대 인원 {lectures?.max_attendees}</p>
          </div>
        <div className='whitespace-pre-line break-words'>
          <h1 className='text-6xl'>강의 소개-information</h1>
           {lectures?.information}  
          <Content />
          </div>
      </div>
          <Sidebar />
      <div className='lg:col-span-2 col-span-2'></div>
      </div>
      <div>
      </div>

    </>
  );
}

const Sidebar = () => {
  return (
    <div className="sticky top-24 lg:right-24 xl:right-44 right-0 h-64 w-64 bg-gray-800 text-white p-4">
      <h2 className="text-2xl font-bold mb-4">Sidebar</h2>
      <ul>
        <li className="mb-2"><a href="#home" className="text-white">Home</a></li>
        <li className="mb-2"><a href="#about" className="text-white">About</a></li>
        <li className="mb-2"><a href="#services" className="text-white">Services</a></li>
        <li className="mb-2"><a href="#contact" className="text-white">Contact</a></li>
      </ul>
    </div>
  );
}

const Content = () => {
  return (
    <div className="mr-64 p-4">
      <h1 className="text-4xl font-bold mb-4">Content Area</h1>
      <p>Scroll down to see the fixed sidebar in action.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod malesuada.</p>
      <p style={{height: '1500px'}}>This is just some filler content to make the page scrollable.</p>
    </div>
  );
}

export default LectureDetail;