import React, { useEffect, useState } from 'react';
import Froala from '../main/FroalaEditor.tsx'
import { FormControl, FormLabel, Input } from "@chakra-ui/react";
import { TbArrowsRight } from "react-icons/tb";
import he from 'he';
import checkimg from '../../assets/checked.jpg'
import uncheckimg from '../../assets/unchecked.jpg'
import banner from '../../assets/banner2.jpg'
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store.tsx';
import { getCurriculaDetail } from '../../store/curriculaSlice.tsx';
import { AsyncThunkAction, AnyAction } from '@reduxjs/toolkit';
import { Curricula } from '../../interface/Curriculainterface.tsx';
import { useParams } from 'react-router-dom';

  // 이진송
  // 틀만 짜서 디자인 정하고 서버받고 난 후 axios 해야함
  // 해당 페이지 axios로 기존 데이터를 받아서 띄워주는게 필요함.(필수x 중요도 low) 
  
  const LectureUpdate: React.FC = () => {
    
    const lectures = useSelector(
      (state: RootState) => state.curriculum.selectlectures
    );
    const { id } = useParams<{ id: string }>();
    const dispatch = useDispatch<AppDispatch>();
    console.log(lectures?.category)
    const [formData, setFormData] = useState<Partial<Curricula | null>>(null);

  useEffect(() => {
    if (id) {
      dispatch(getCurriculaDetail(id));
    }
  }, [id, dispatch]);

  useEffect(() => {
    if (lectures) {
      setFormData({
        title: lectures?.title,
        sub_title: lectures?.sub_title,
        intro: lectures?.intro,
        information: lectures?.information,
        category: lectures?.category,
        sub_category: lectures?.sub_category,
        banner_img_url: lectures?.banner_img_url,
        start_date: lectures?.start_date,
        end_date: lectures?.end_date,
        lecture_start_time: lectures?.lecture_start_time,
        lecture_end_time: lectures?.lecture_end_time,
        weekdays_bitmask: lectures?.weekdays_bitmask,
        max_attendees: lectures?.max_attendees,
      });
    }
  }, [lectures])  

  const [activeDays, setActiveDays] = useState<{ [key: string]: boolean }>({
    월: false,
    화: false,
    수: false,
    목: false,
    금: false,
    토: false,
    일: false,
  });
  // 데이터를 담기 위한 박스 개념, 함수를 위의 interface에 맞춰서 작성

  console.log(lectures?.lecture_end_time)
  const WEEKDAY_VALUES = {
    월: 64,
    화: 32,
    수: 16,
    목: 8,
    금: 4,
    토: 2,
    일: 1,
  }

  

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = event.target;
    setFormData({
    ...formData,
    [name]: value,
    });
  };

  const handleEditorChange = (data: string) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      intro: data,
    }));
  };

  const handleCheckboxChange = (day: string) => {
    const value = WEEKDAY_VALUES[day as keyof typeof WEEKDAY_VALUES];
    const isActive = !activeDays[day];

    setActiveDays((prevActiveDays) => ({
      ...prevActiveDays,
      [day]: isActive,
    }));

    // setFormData((prevFormData) => ({
    //   ...prevFormData,
    //   weekdays_bitmask: isActive
    //     ? prevFormData.weekdays_bitmask + value
    //     : prevFormData.weekdays_bitmask - value,
    // }));
  };
  
  // const decode = () => {
  //   const decodedData = he.decode(formData.intro);
  //   console.log(formData)
  //   setFormData((prevFormData) => ({
  //     ...prevFormData,
  //     intro: decodedData
  //   }));
  // }
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // decode();
  }

  return (
    <div className='grid grid-cols-12'>
    <div className='col-span-2'></div>
      <div className=' col-span-8 p-4'>
      <img src={banner} className='mx-auto w-2/3 rounded-2xl' />
        <p className="self-start text-5xl pt-20 pl-5 pb-3">강의 등록</p>
        <hr></hr>
      <form onSubmit={handleSubmit}>
          <FormControl>
            <div className='flex items-center mb-5'>
          <FormLabel htmlFor="title" className="mt-3 ml-3 mr-8 text-2xl ">강의 제목</FormLabel>
          <Input 
            type='text'
            id='title'
            name='title'
            value={formData.title}
            onChange={handleChange}
            className="border-2 rounded-lg w-1/3 p-2 mt-3"
            required
            />
          <FormLabel htmlFor="sub_title" className="mt-3 mx-3 text-2xl ">강의 부제목</FormLabel>
          <Input 
            type='text'
            id='sub_title'
            name='sub_title'
            value={formData.sub_title}
            onChange={handleChange}
            className="border-2 rounded-lg w-1/3 p-2 mt-3"
            required
            />
          </div>
          <hr></hr>
            <div className='flex items-center mb-5'>
          <FormLabel htmlFor="category" className="mt-3 mx-3 text-2xl">강의 대분류</FormLabel>
          <select
            id='category'
            name='category'
            value={formData.category}
            onChange={handleChange}
            className="border-2 rounded-lg w-1/3 p-2 mt-3"
            >
              <option value="1">KOREAN</option>
              <option value="2">MATH</option>
              <option value="3">FOREIGN_LANGUAGE</option>
              <option value="4">SCIENCE</option>
              <option value="5">ENGINEERING</option>
              <option value="6">ARTS_AND_PHYSICAL</option>
              <option value="7">EDUCATION</option>
              <option value="8">ETC</option>
            </select>
          <FormLabel htmlFor="sub_category" className="mt-3 mx-3 text-2xl">강의 중분류</FormLabel>
          <Input 
            type='text'
            id='sub_category'
            name='sub_category'
            value={formData.sub_category}
            onChange={handleChange}
            className="border-2 rounded-lg w-1/3 p-2 mt-3"
            required
            />
          </div>
          <hr></hr>
          <FormLabel htmlFor="banner_img_url" className="mt-3 mx-3 text-2xl">강의 배너 이미지</FormLabel>
          <Input 
            type='file'
            id='banner_img_url'
            name='banner_img_url'
            // value={formData.banner_img_url}
            onChange={handleChange}
            className="border-2 rounded-lg w-4/5 p-2 mb-3"
            required
            />
          <hr></hr>
          <FormLabel htmlFor="intro" className="my-3 mx-3 text-2xl">강의 소개</FormLabel>
          <Input 
            type='text'
            id='intro'
            name='intro'
            value={formData.intro}
            onChange={handleChange}
            className="border-2 rounded-lg w-full p-2 mt-3"
            required
            />
            <hr className='my-3'></hr>
            <FormLabel htmlFor="datetime" className="mt-3 mx-3 text-2xl">강의 커리큘럼</FormLabel>
            <div className='flex items-center mb-5'>
              <div className='w-1/2'>
            <FormLabel htmlFor="date" className="mt-3 mx-3 text-1xl">강의 시작일 - 강의 종료일</FormLabel>
              </div>
              <div className='w-1/2'>
            <FormLabel htmlFor="lecture_time" className="mt-3 mx-3 text-1xl">시작 시간 - 종료 시간</FormLabel>
              </div>
              </div>
            <div className='flex items-center mb-5'>
              <div className='w-1/2'>
          <Input 
            type='date'
            id='start_date'
            name='start_date'
            value={formData.start_date}
            onChange={handleChange}
            className="border-2 rounded-lg w-40 p-2 mb-5"
            required
            />
          <span className='inline-block align-middle p-3'><TbArrowsRight /></span>  
          <Input 
            type='date'
            id='end_date'
            name='end_date'
            value={formData.end_date}
            onChange={handleChange}
            className="border-2 rounded-lg w-40 p-2 mb-5"
            required
            />
            </div>
            <div className='w-1/2'>
          <Input 
            type='time'
            id='lecture_start_time'
            name='lecture_start_time'
            value={formData.lecture_start_time}
            onChange={handleChange}
            className="border-2 rounded-lg w-40 p-2 mb-5"
            required
            />
          <span className='inline-block align-middle p-3'><TbArrowsRight /></span>  
          <Input 
            type='time'
            id='lecture_end_time'
            name='lecture_end_time'
            value={formData.lecture_end_time}
            onChange={handleChange}
            className="border-2 rounded-lg w-40 p-2 mb-5"
            required
          />
            </div>
            </div>
            <hr className='my-3'></hr>
            <FormLabel htmlFor="datetime" className="mt-3 mx-3 text-2xl">수업 요일</FormLabel>
            <div className='flex justify-center'>
              {Object.keys(WEEKDAY_VALUES).map((day) => (
                <label key={day}>
                  <img
                    src={activeDays[day as Weekday] ? checkimg : uncheckimg}
                    onClick={() => handleCheckboxChange(day as Weekday)}
                    style={{ cursor: 'pointer', width: '80px', height: '80px', marginRight: '8px' }}
                    alt={day}
                  />
                  {day}
                </label>
              ))}
            </div>
            
            <FormLabel htmlFor="datetime" className="text-2xl">최대 수강 정원</FormLabel>
            <select
            id='max_attendees'
            name='max_attendees'
            value={formData.max_attendees}
            onChange={handleChange}
            className="border-2 rounded-lg p-2 mb-5"
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>


        
        
        <FormLabel htmlFor="datetime" className="text-2xl">강의 상세 설명</FormLabel>
          <Froala
            data={formData.information} 
            onChange={handleEditorChange}
          />
        <div className='p-5 border my-5'>
        <h1 className='text-6xl'>강의 등록시 주의사항</h1>
        <ul>
          <li>- 이해하기 쉬운 언어 사용: 학생들의 연령대에 맞는 쉬운 언어와 예시를 사용해 강의를 준비하세요.</li>
          <li>- 적절한 강의 시간 설정: 집중력이 떨어지지 않도록 강의 시간을 적절하게 조절하고, 쉬는 시간을 포함하세요.</li>
          <li>- 참여 유도: 학생들이 적극적으로 참여할 수 있도록 질문을 유도하고, 활동적인 학습 방법을 도입하세요.</li>
          <li>- 안전과 윤리 준수: 강의 내용과 활동은 안전하고 윤리적이어야 하며, 학생들의 개인정보 보호에 유의하세요.</li>
        </ul>
        </div>
          <button type='submit'>버튼임</button>
          </FormControl>
        </form>
              </div>
          <div className='col-span-2'></div>
          
      </div>
  );
};

export default LectureUpdate;

