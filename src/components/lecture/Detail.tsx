import React, { useState, Component } from 'react';
import { Link } from 'react-router-dom'
import ax from '../../assets/teacher.png'
import { useSelector } from 'react-redux';
import { RootState } from '../../store'
import { Lecture } from '../../store/lecturesSlice';

const LectureDetail: React.FC = () => {

  // 이진송
  // 틀만 짜서 디자인 정하고 서버받고 난 후 axios 해야함
  const lectures = useSelector((state: RootState) => state.lectures.lectures)
  const status = useSelector((state: RootState) => state.lectures.status);
  const error = useSelector((state: RootState) => state.lectures.error);
  console.log(lectures)

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'failed') {
    return <div>Error: {error}</div>;
  }
  // 윗부분 분석 필요

  return (
    <>
      {
        lectures.map((lecture: Lecture) => (
          <li key={lecture.id}>
          <h2>{lecture.sub_title}</h2>
        </li>
      ))}
      <header className="flex bg-[#1C2151] text-white text-left py-2.5 justify-center">
        <div className='w-3/5'>
          <div>
            {/* 아래 axios 받아서 작성해야함 */}
            <p>IT 프로그래밍-sub_category</p>
            <h1 className='text-7xl p-3'>김호경의 따라하며 배우는 C++ - sub_title</h1>
            <p className='p-1'>초보도 따라할 수 있는 c++ 개발 입문! 게임학과 - intro</p>
            <Link to={'/teacher/profiledetail'}>
              <div className="flex items-center">
                <img src={ax} className='w-10 h-10 m-5' />
                <span>유니티 신 김호경 - 강사상세페이지, 만들어야함</span>
              </div>
            </Link>
            </div>
            </div>
                <button className='mt-60 mr-10'>강의 신청하기</button>
        <div className='w-1/5'>
          <div>
            <img src={ax} className='w-full'/>
          </div>
        </div>

      </header>
      <div className='bg-[#000000] grid grid-cols-12'>
      <div className='col-span-2'></div>
      <div className='col-span-8 bg-[#999999] p-4'>
        <div className='whitespace-pre-line break-words'>
          <h1 className='text-6xl'>강의 소개-information</h1>
            informationinformationinformationinformationinformationinformationinformationinformationinformationinformationinformationinformationinformationinformationinformationinformationinformationinformationinformationinformation
          </div>
          <br className='text-black'></br>

          <h1 className='text-6xl'>커리큘럼</h1>
          <img/> weekdays - 이미지로 나타낼 듯 함 비트마스킹 이진
          <p> 변환해서 사용</p>
          <p> start_date : 시작일</p>
          <p> end_date : 종료일</p>
          <p> lecture_start_time : 시작시간</p>
          <p> lecture_end_time : 종료시간</p>
          
          <h1 className='text-6xl'>강의 대상</h1>
        <div className='whitespace-pre-line break-words'>
          <p>target</p>
            informationinformationinformationinformationinformationinformationinformationinformationinformationinformationinformationinformationinformationinformationinformationinformationinformationinformationinformationinformation
          </div>
          <h1 className='text-6xl'>학습 요구사항</h1>
        <div className='whitespace-pre-line break-words'>
          <p>requirement</p>
          <li>dd</li>
            informationinformationinformationinformationinformationinformationinformationinformationinformationinformationinformationinformationinformationinformationinformationinformationinformationinformationinformationinformation
          </div>
           

          {/* sub_title : 서브 제목
          intro : 강의 소개
          target : 강의를 들으면 좋겠는 대상
          requirement : 학습 요구사항(선수과목)
          information : 강의 정보
          sub_category : 과목 카테고리
          weekdays : 월화수목금토일
          start_date : 시작일
          end_date : 종료일
          lecture_start_time : 시작시간
          lecture_end_time : 종료시간 */}



      </div>
      <div className='col-span-2'></div>
      </div>
      <div>
      </div>

    </>
  );
}

export default LectureDetail;