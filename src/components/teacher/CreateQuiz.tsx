import React, { useState } from 'react';
import { FormControl, FormLabel, Input } from "@chakra-ui/react";



// 퀴즈 생성 컴포넌트
const CreateQuiz: React.FC = () => {
  interface QuizData {
    // 수업 고유 ID
    lectureId: number,
    // 퀴즈 번호
    quizNumber: number,
    // 퀴즈 문제 내용
    question: string,
    // 퀴즈 정답 여부
    isAnswer: number[],
    // 퀴즈 선택지 문항(리스트)
    choiceSentence: string[],
    //   `lecture_id`  INTEGER(11)  NOT NULL,                -- 수업 고유 ID 1
    //   `quiz_number` TINYINT(4)   NOT NULL,                -- 퀴즈 번호(몇 번째 퀴즈인지) 1
    //   `question`    VARCHAR(255) NOT NULL, --퀴즈 문제 내용 1
    //   `is_answer`       BIT(1)       NOT NULL,                -- 정답 여부(정답 : 1(true), 오답 : 0(false)) 1
    //   `choice_sentence` VARCHAR(255) NOT NULL,                -- 선택지 문장(제공해야 하는 선택지들 내용) 1
    
  }
  
  const [quizData, setQuizData] = useState<QuizData>({
    lectureId: 0,
    quizNumber: 0,
    question: '',
    isAnswer: [],
    choiceSentence: [],
  })
  
  const [tab, setTab] = useState(1)
  
  return (
    <div className="grid grid-cols-12 gap-4">
      <div className="col-span-2 bg-blue-500">2/12</div>

        <div className=" flex col-span-8 bg-green-500">
          <div className="flex">
          <button
            onClick={() => setTab(1)}
            className={`text-gray-600 py-4 px-6 block hover:text-blue-500 focus:outline-none ${tab === 1 ? 'text-blue-500 border-b-2 font-medium border-blue-500' : ''}`}>
              Tab 1
            </button>
          <button
          onClick={() => setTab(2)}
          className={`text-gray-600 py-4 px-6 block hover:text-blue-500 focus:outline-none ${tab === 2 ? 'text-blue-500 border-b-2 font-medium border-blue-500' : ''}`}>
              Tab 2
          </button>
          <button
            onClick={() => setTab(3)}
            className={`text-gray-600 py-4 px-6 block hover:text-blue-500 focus:outline-none ${tab === 3 ? 'text-blue-500 border-b-2 font-medium border-blue-500' : ''}`}>
              Tab 3
          </button>
          <button
              onClick={() => setTab(4)}
              className={`text-gray-600 py-4 px-6 block hover:text-blue-500 focus:outline-none ${tab === 4 ? 'text-blue-500 border-b-2 font-medium border-blue-500' : ''}`}>
              Tab 4
            </button>
          </div>
        </div>
      <div className="col-span-2 bg-red-500">2/12</div>
      
      <div className="col-span-2 bg-red-500">2/12</div>
      <div className="col-span-8 bg-red-500">
        <div className='p-4'>
        <FormControl>
        <FormLabel htmlFor="question" className="mt-3 mx-3 text-2xl ">문제 - question</FormLabel>
          <Input 
            type='text'
            id='question'
            name='question'
            value={quizData.question}
            // onChange={handleChange}
            className="border-2 rounded-lg w-1/3 p-2 mt-3"
            required
            />
        <FormLabel htmlFor="choiceSentence" className="mt-3 mx-3 text-2xl ">답 - choiceSentence</FormLabel>
          <Input 
            type='text'
            id='choiceSentence1'
            name='choiceSentence1'
            value={quizData.question}
            // onChange={handleChange}
            className="border-2 rounded-lg w-1/3 p-2 mt-3"
            required
            />
            <Input 
              type='checkbox'
              id='isAnswer1'
              name='isAnswer1'
              value={quizData.question}
              // onChange={handleChange}
              className="border-2 rounded-lg w-1/3 p-2 mt-3"
              required
              />
          <Input 
            type='text'
            id='choiceSentence2'
            name='choiceSentence2'
            value={quizData.question}
            // onChange={handleChange}
            className="border-2 rounded-lg w-1/3 p-2 mt-3"
            required
            />
            <Input 
              type='checkbox'
              id='isAnswer2'
              name='isAnswer2'
              value={quizData.question}
              // onChange={handleChange}
              className="border-2 rounded-lg w-1/3 p-2 mt-3"
              required
              />
          <Input 
            type='text'
            id='choiceSentence3'
            name='choiceSentence3'
            value={quizData.question}
            // onChange={handleChange}
            className="border-2 rounded-lg w-1/3 p-2 mt-3"
            required
            />
            <Input 
              type='checkbox'
              id='isAnswer3'
              name='isAnswer3'
              value={quizData.question}
              // onChange={handleChange}
              className="border-2 rounded-lg w-1/3 p-2 mt-3"
              required
              />
          <Input 
            type='text'
            id='choiceSentence4'
            name='choiceSentence4'
            value={quizData.question}
            // onChange={handleChange}
            className="border-2 rounded-lg w-1/3 p-2 mt-3"
            required
            />
          <Input 
            type='checkbox'
            id='isAnswer4'
            name='isAnswer4'
            value={quizData.question}
            // onChange={handleChange}
            className="border-2 rounded-lg w-1/3 p-2 mt-3"
            required
            />
            </FormControl>
          {tab === 1 &&
            <div>1번임

            </div>
          }
          {tab === 2 && <div>2번임</div>}
          {tab === 3 && <div>3번임</div>}
          {tab === 4 && <div>4번임</div>}
      {/* // 수업 고유 ID
      lectureId: number,
      // 퀴즈 번호
      quizNumber: number,
      // 퀴즈 문제 내용
      question: string,
      // 퀴즈 정답 여부 (리스트)
      isAnswer: number[],
      // 퀴즈 선택지 문항(리스트)
      choiceSentence: string[], */}
          </div>
      </div>
      <div className="col-span-2 bg-red-500">2/12</div>
    </div>
  )
};

export default CreateQuiz;
