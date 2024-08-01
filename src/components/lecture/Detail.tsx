import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store";
import { getCurriculaDetail } from "../../store/curriculaSlice";
import { getLecturelist } from "../../store/lectureSlice";
import { useDispatch } from "react-redux";
import img1 from "../../../src/assets/checked.jpg";
import img2 from "../../../src/assets/unchecked.jpg";
import img3 from "../../../src/assets/human.png";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Text,
} from "@chakra-ui/react";

const LectureDetail: React.FC = () => {
  // 이진송
  // 틀만 짜서 디자인 정하고 서버받고 난 후 axios 해야함
  const [_, setToday] = useState("");
  const [arr, setArr] = useState([]);
  const { id } = useParams<{ id: string }>();
  const dispatch = useDispatch<AppDispatch>();
  const lectures = useSelector(
    (state: RootState) => state.curriculum.selectlectures
  );
  const lectureslist = useSelector(
    (state: RootState) => state.curriculum.lectureslist
  );
  const status = useSelector((state: RootState) => state.curriculum.status);
  const error = useSelector((state: RootState) => state.curriculum.error);

  console.log(lectures);
  console.log(lectureslist);
  const bitday = lectures?.weekdays_bitmask.split("");
  const url = lectures?.banner_img_url;

  useEffect(() => {
    if (id) {
      dispatch(getCurriculaDetail(id));
      dispatch(getLecturelist(id));
    }
  }, [id, dispatch]);

  useEffect(() => {
    const currentDate = new Date();
    const formattedDate = `${currentDate.getFullYear()}-${
      currentDate.getMonth() + 1
    }-${currentDate.getDate()}`;
    setToday(formattedDate);
  }, []);

  let startLecture: any;
  let daysAgo: any;
  function calculateDaysAgo(dateString: any) {
    const targetDate: any = new Date(dateString);
    const today: any = new Date();
    const difference = today - targetDate;
    const daysAgo = Math.floor(difference / (1000 * 60 * 60 * 24)); // 밀리초를 일 단위로 변환

    return daysAgo;
  }

  return (
    <>
      <header className="flex bg-hoverNavy text-white text-left py-2.5 justify-center">
        <div className="w-3/5">
          <div>
            <p>
              {lectures?.category} &gt; {lectures?.sub_category}
            </p>
            <h1 className="text-7xl p-3">{lectures?.title}</h1>
            <p className="p-1">{lectures?.sub_title}</p>
            <p className="p-1">{lectures?.intro}</p>
            <Link to={"/teacher/profiledetail"}>
              <div className="flex items-center">
                <img src={img3} className="w-10 h-10 m-5" />
                <span>
                  {lectures?.teacher_name} 강사님 - 강사상세페이지, 만들어야함
                </span>
              </div>
            </Link>
          </div>
        </div>
        <div className="mt-60 mr-10"></div>
        <div className="w-1/5">
          <div>
            <img src={url} className="w-60 h-60" />
          </div>
        </div>
      </header>
      <div className="bg-ivory grid grid-cols-12">
        <div className="hidden lg:col-span-1 lg:block"></div>
        <div className="lg:col-span-6 col-span-8 bg-ivory border-x-2 border-x-hardBeige p-4">
          <br className="text-black"></br>
          <ul className="flex lg:flex-row text-lg font-bold ml-4">
            <li className="mr-5 mb-10">
              <a href="#intro" className="hover:text-orange-300">
                강의 소개
              </a>
            </li>
            <li className="mr-5 mb-10">
              <a href="#day" className="hover:text-orange-300">
                강의 요일
              </a>
            </li>
            <li className="mr-5 mb-10">
              <a href="#curriculum" className="hover:text-orange-300">
                커리큘럼
              </a>
            </li>
          </ul>
          <div className="whitespace-pre-line break-words">
            <h1 className="text-5xl" id="intro">
              강의 소개
            </h1>
            <div className="bg-lightBeige rounded-lg p-10 my-10">
              <p className="text-xl">{lectures?.information}</p>
            </div>
          </div>
          <h1 className="text-5xl pt-10" id="day">
            강의 요일
          </h1>
          <p className="flex justify-center p-5">
            {bitday?.map((a: string, i: number) => {
              return (
                <div key={i} className="px-2">
                  {a === "1" ? (
                    <img src={img1} className="w-20 h-20" />
                  ) : (
                    <img src={img2} className="w-20 h-20" />
                  )}
                </div>
              );
            })}
          </p>
          <h1 className="text-5xl py-10" id="curriculum">
            커리큘럼
          </h1>
          <Accordion className="shadow-lg" defaultIndex={[]} allowMultiple>
            <h2>
              {Array.from(
                { length: lectureslist?.week_count ?? 0 },
                (_, index) => (
                  <AccordionItem key={index} className="rounded-lg">
                    <AccordionButton className="bg-lightBeige hover:bg-darkerBeige">
                      <Box as="span" flex="1" textAlign="left" className="p-2">
                        <Text className="text-2xl">
                          [{lectures?.title}] {index + 1}주차 강의
                        </Text>
                        <Text className="text-base text-gray-600">
                          <p>
                            {daysAgo > 0
                              ? `이미 끝난 강의입니다.`
                              : daysAgo < 0
                              ? `${-daysAgo}일 후 강의입니다.`
                              : "오늘 강의입니다."}
                          </p>
                        </Text>
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                    <AccordionPanel pb={4} className="p-3 bg-white">
                      {Array.from(
                        {
                          length: lectureslist?.lectures[index + 1].length ?? 0,
                        },
                        (_, index2) => (
                          <div className="grid grid-cols-4 border-b border-b-2 border-hardBeige pt-1">
                            <div className="col-span-2">
                              <h2 className="text-xl">
                                {
                                  lectureslist?.lectures[index + 1][index2]
                                    .lecture_title
                                }
                              </h2>
                            </div>
                            <div className="col-span-1 text-right">
                              <text>강의 날짜 : </text>
                              <p>시작 시간 : </p>
                            </div>
                            <div className="col-span-1">
                              <text>
                                {lectureslist?.lectures[index + 1][
                                  index2
                                ].lecture_start_time.slice(0, 10)}
                              </text>
                              <p>
                                {lectureslist?.lectures[index + 1][
                                  index2
                                ].lecture_start_time.slice(11, 19)}
                              </p>
                              <text className="hidden">
                                {
                                  (daysAgo = calculateDaysAgo(
                                    lectureslist?.lectures[index + 1][
                                      index2
                                    ].lecture_start_time.slice(0, 10)
                                  ))
                                }
                              </text>
                            </div>
                          </div>
                        )
                      )}
                    </AccordionPanel>
                  </AccordionItem>
                )
              )}
            </h2>
          </Accordion>
          <div></div>
        </div>
        <div className="sticky top-24 lg:right-24 xl:right-44 right-0 h-96 w-96 bg-Beige ml-10 mt-3 p-4 flex flex-col rounded-lg border-2 border-hardBeige">
          <h3 className="text-3xl font-bold ml-4 mb-4 text-red-600">무료</h3>
          <h3 className="text-2xl font-bold mb-4">{lectures?.title}</h3>
          <button className="w-full mb-5 py-2 px-4 bg-pink-500 hover:bg-pink-700 text-white font-bold rounded self-center">
            수강 신청
          </button>
          <div className="grid grid-cols-2">
            <div>
              <ul>
                <li>지식공유자</li>
                <li>총 강의수</li>
                <li>분류</li>
                <li>현재 수강 인원</li>
                <li>수료증 발급 유무</li>
              </ul>
            </div>
            <div>
              <ul>
                <text className="hidden">
                  {(startLecture = calculateDaysAgo(lectures?.start_date))}
                </text>
                <li>{lectures?.teacher_name} 강사님</li>
                <li>{lectureslist?.lecture_count}개 강의</li>
                <li>{lectures?.category}</li>
                <li>
                  {lectures?.current_attendees} / {lectures?.max_attendees}
                </li>
                <li>발급</li>
              </ul>
            </div>
          </div>
          <p className="text-center mt-auto text-xl">
            {startLecture > 0
              ? `이미 ${startLecture}일 전에 강의가 시작했어요!`
              : startLecture < 0
              ? `${-startLecture}일 후에 시작하는 강의에요!`
              : "오늘부터 시작하는 강의에요!"}
          </p>
        </div>
        <div className="lg:col-span-3 col-span-1"></div>
      </div>
      <div></div>
    </>
  );
};

export default LectureDetail;
