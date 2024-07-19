import React, { useState } from 'react';
import CKEditor from '../main/CKEditor'
import { FormControl, FormLabel, Input } from "@chakra-ui/react";
// HTML Entity library
import he from 'he';

  // 이진송
  // 틀만 짜서 디자인 정하고 서버받고 난 후 axios 해야함

  
const LectureUpdate: React.FC = () => {
  interface FormData {
    // 부제목
    sub_title : string;
    // 강의 중분류
    sub_category : string;
    // 배너 이미지
    banner_img_url : File | null;
    // 강의 소개
    intro : string;
    // 강의 시작일
    start_date : Date;
    // 강의 종료일
    end_date : Date;
    // 강의 시작 시간
    lecture_start_time : Date;
    // 강의 종료 시간
    lecture_close_time : Date;
  }
  
  // 데이터를 담기 위한 박스 개념, 함수를 위의 interface에 맞춰서 작성
  const [formData, setFormData] = useState<FormData>({
    sub_title: '',
    sub_category: '',
    banner_img_url: null,
    intro: '',
    start_date: new Date(),
    end_date: new Date(),
    lecture_start_time: new Date(),
    lecture_close_time: new Date(),
  });
  

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
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

// 날짜를 업데이트하는 함수 예시
  const handleDateChange = (date: Date, fieldName: keyof FormData) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [fieldName]: date,
    }));
  };

  
  const decode = () => {
    const decodedData = he.decode(formData.intro);
    console.log(decodedData)
    setFormData((prevFormData) => ({
      ...prevFormData,
      intro: decodedData
    }));
  }
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    decode();
  }

  return (
    <div className='grid grid-cols-12'>
    <div className='col-span-2'></div>
    <div className='col-span-8 p-4'>
      <form onSubmit={handleSubmit}>
        <FormControl>
          <FormLabel htmlFor="sub_title" className="text-2xl">강의 제목</FormLabel>
          <Input 
            type='text'
            id='sub_title'
            name='sub_title'
            value={formData.sub_title}
            onChange={handleChange}
            className="border-2 rounded-lg w-full p-2 mb-5"
            required
          />
          <FormLabel htmlFor="sub_category" className="text-2xl">강의 중분류</FormLabel>
          <Input 
            type='text'
            id='sub_category'
            name='sub_category'
            value={formData.sub_category}
            onChange={handleChange}
            className="border-2 rounded-lg w-full p-2 mb-5"
            required
          />
          {/* url 이니까 assets에 이미지가 등록되고, url을 받는것인지? 토론 필요 */}
          <FormLabel htmlFor="banner_img_url" className="text-2xl">강의 배너 이미지</FormLabel>
          <Input 
            type='file'
            id='banner_img_url'
            name='banner_img_url'
            // value={formData.banner_img_url}
            onChange={handleChange}
            className="border-2 rounded-lg w-full p-2 mb-5"
            // required
          />
          <FormLabel htmlFor="intro" className="text-2xl">강의 소개</FormLabel>
          <CKEditor 
                    data={formData.intro} 
                    onChange={handleEditorChange}
          />
        <h1 className='text-6xl'>강의 소개-intro</h1>
        {/* <CKEditor /> */}
      

        <h1 className='text-6xl'>강의 커리큘럼</h1>

        <p>강의 시작일 : </p>
          <input type="date" /><br/>
        <p>강의 종료일 : </p>
          <input type="date" /><br/>
        <p>시작 시간 : </p>
          <input type="time" /><br/>
        <p>종료 시간 : </p>
          <input type="time" /><br/>

        월<input type="checkbox" />
        화<input type="checkbox" />
        수<input type="checkbox" />
        목<input type="checkbox" />
        금<input type="checkbox" />
        토<input type="checkbox" />
        일<input type="checkbox" />

        <p>최대 수강정원 : max_attendees </p>
        <input type="text" />
        
        
        <p>상세 설명-information</p>
        {/* <CKEditor /> */}
        강의대상, 학습 요구사항, 강의 설명
        



          <button type='submit'>dd</button>
          </FormControl>
        </form>
              </div>
          <div className='col-span-2'></div>
      </div>
  );
};

export default LectureUpdate;
