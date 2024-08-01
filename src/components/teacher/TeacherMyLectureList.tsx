import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  PopoverArrow,
  PopoverCloseButton,
  Button,
  AccordionPanel,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  Box,
  Text,
} from "@chakra-ui/react";
import { useNavigate, useParams } from "react-router-dom";
import hokyung from "../../assets/futureHokyung.jpg";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { AppDispatch, RootState } from "../../store";
import { getCurriculaDetail, getCurriculaLectureList } from "../../store/curriculaSlice";

const TeacherMyLectureList: React.FC = () => {
  const navigate = useNavigate();
  const tableBorder: string = "border-b-2 rounded-md border-gray-300 p-4";
  const { curricula_id } = useParams<{ curricula_id: string }>();
  const dispatch = useDispatch<AppDispatch>();
  const lectures = useSelector(
    (state: RootState) => state.curriculum.selectlectures
  );
  const lectureslist = useSelector(
    (state: RootState) => state.curriculum.lectureslist
  );

  let daysAgo: any;

  function calculateDaysAgo(dateString: any) {
    const targetDate: any = new Date(dateString);
    const today: any = new Date();
    const difference = today - targetDate;
    const daysAgo = Math.floor(difference / (1000 * 60 * 60 * 24)); // 밀리초를 일 단위로 변환

    return daysAgo;
  }

  useEffect(() => {
    if (curricula_id) {
      dispatch(getCurriculaDetail(curricula_id));
      dispatch(getCurriculaLectureList(curricula_id));
    }
  }, [curricula_id, dispatch]);

  return (
    <div className="p-9 bg-Beige">
      <header className="text-4xl text-indigo-900">
        내 커리큘럼 {"->"} {lectures?.title}
      </header>

      <section className="flex items-center my-7">
        <img
          src={hokyung}
          alt="no-image"
          className="mx-3 w-72 h-48 rounded-md shadow-md"
        />
        <main className="mx-4">
          <h1 className="my-3 text-2xl">{lectures?.sub_title}</h1>
          <p className="text-sm text-slate-500">
            {lectures?.start_date} ~ {lectures?.end_date}
          </p>
          <p className="text-sm text-slate-500">
            {lectures?.lecture_start_time}시 ~ {lectures?.lecture_end_time}시
          </p>
        </main>
      </section>

      <section className="mx-3 mt-12 mb-3">
        <h1 className="my-3 text-3xl text-lightNavy">강의목록</h1>
        <Accordion className="shadow-lg" defaultIndex={[]} allowMultiple>
          <h2>
            {Array.from(
              { length: lectureslist?.week_count ?? 0 },
              (_, index) => (
                <AccordionItem key={index} className="rounded-lg">
                  <AccordionButton className="bg-hardBeige hover:bg-darkerBeige">
                    <Box as="span" flex="1" textAlign="left" className="p-2">
                      <Text className="text-2xl">
                        [{lectures?.title}] {index + 1}주차 강의
                      </Text>
                      <Text className="text-base text-gray-600">
                        {" "}
                        {daysAgo > 0
                          ? `이미 끝난 강의입니다.`
                          : daysAgo < 0
                          ? `${-daysAgo}일 후 강의입니다.`
                          : "오늘 강의입니다."}
                      </Text>
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                  <AccordionPanel pb={4} className="p-3 bg-white">
                    {Array.from(
                      { length: lectureslist?.lectures[index + 1].length ?? 0 },
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
                          <div className="flex col-span-1 text-right md:justify-left lg:justify-end">
                            <header>
                              <p>강의 날짜 : </p>
                              <p>시작 시간 : </p>
                            </header>
                            <main>
                              <p>
                                {lectureslist?.lectures[index + 1][
                                  index2
                                ].lecture_start_time.slice(0, 10)}
                              </p>
                              <p>
                                {lectureslist?.lectures[index + 1][
                                  index2
                                ].lecture_start_time.slice(11, 19)}
                              </p>
                              <p className="hidden">
                                {
                                  (daysAgo = calculateDaysAgo(
                                    lectureslist?.lectures[index + 1][
                                      index2
                                    ].lecture_start_time.slice(0, 10)
                                  ))
                                }
                              </p>
                            </main>
                          </div>
                          <div className="flex justify-end items-center col-span-1">
                            {daysAgo > 0 ? (
                              <Button
                                className="mx-5 p-3 bg-sky-300 rounded-md shadow text-white hover:bg-sky-400"
                                onClick={() =>
                                  navigate(
                                    "/teacher/profile/lecture/lectureReport"
                                  )
                                }
                              >
                                리포트 보기
                              </Button>
                            ) : daysAgo < 0 ? (
                              <td
                                className={`${tableBorder} text-sm text-red-500 text-center`}
                              >
                                예정된 강의
                              </td>
                            ) : (
                              <Button className="p-3 bg-pink-300 rounded-md shadow text-white hover:bg-pink-400">
                                강의 시작하기
                              </Button>
                            )}

                            <Popover placement="right-start">
                              <PopoverTrigger>
                                <Button className="mx-5">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="size-7 text-center hover:text-white"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 0 1 1.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.559.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.894.149c-.424.07-.764.383-.929.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 0 1-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.398.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 0 1-.12-1.45l.527-.737c.25-.35.272-.806.108-1.204-.165-.397-.506-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.108-1.204l-.526-.738a1.125 1.125 0 0 1 .12-1.45l.773-.773a1.125 1.125 0 0 1 1.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894Z"
                                    />
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                                    />
                                  </svg>
                                </Button>
                              </PopoverTrigger>
                              <PopoverContent className="p-6 bg-green-100 relative rounded-md shadow-md">
                                <PopoverArrow />
                                <PopoverCloseButton className="absolute top-2 right-3" />
                                <PopoverBody className="grid grid-cols-1">
                                  <Button className="m-3">수정하기</Button>
                                  <Button className="m-3">삭제하기</Button>
                                </PopoverBody>
                              </PopoverContent>
                            </Popover>
                          </div>
                          <hr></hr>
                        </div>
                      )
                    )}
                  </AccordionPanel>
                </AccordionItem>
              )
            )}
          </h2>
        </Accordion>
        <table className="table-auto rounded-md bg-gray-200 shadow-md">
          <tbody>
            <tr>
              <td className={`${tableBorder} text-xl`}>1강</td>
              <td className={`${tableBorder} text-xl`}>
                개발환경을 세팅해보자!
              </td>
              <td className={`${tableBorder} text-sm text-gray-500`}>
                7월 16일
              </td>
              <td className={`${tableBorder} text-sm text-gray-500`}>
                <Button
                  className="p-3 bg-sky-300 rounded-md shadow text-white hover:bg-sky-400"
                  onClick={() =>
                    navigate("/teacher/profile/lecture/lectureReport")
                  }
                >
                  리포트 보기
                </Button>
              </td>
              <td className={tableBorder}>
                <Popover placement="right-start">
                  <PopoverTrigger>
                    <Button>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-7 text-center hover:text-white"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 0 1 1.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.559.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.894.149c-.424.07-.764.383-.929.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 0 1-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.398.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 0 1-.12-1.45l.527-.737c.25-.35.272-.806.108-1.204-.165-.397-.506-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.108-1.204l-.526-.738a1.125 1.125 0 0 1 .12-1.45l.773-.773a1.125 1.125 0 0 1 1.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894Z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                        />
                      </svg>
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="p-6 bg-green-100 relative rounded-md shadow-md">
                    <PopoverArrow />
                    <PopoverCloseButton className="absolute top-2 right-3" />
                    <PopoverBody className="grid grid-cols-1">
                      <Button className="m-3">수정하기</Button>
                      <Button className="m-3">삭제하기</Button>
                    </PopoverBody>
                  </PopoverContent>
                </Popover>
              </td>
            </tr>
            <tr>
              <td className={`${tableBorder} text-xl`}>2강</td>
              <td className={`${tableBorder} text-xl`}>연산을 해보자!</td>
              <td className={`${tableBorder} text-sm text-gray-500`}>
                7월 17일
              </td>
              <td
                className={`${tableBorder} flex justify-center text-sm text-gray-500`}
              >
                <Button className="p-3 bg-pink-300 rounded-md shadow text-white hover:bg-pink-400">
                  강의 시작하기
                </Button>
              </td>
              <td className={tableBorder}>
                <Popover placement="right-start">
                  <PopoverTrigger>
                    <Button>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-7 text-center hover:text-white"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 0 1 1.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.559.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.894.149c-.424.07-.764.383-.929.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 0 1-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.398.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 0 1-.12-1.45l.527-.737c.25-.35.272-.806.108-1.204-.165-.397-.506-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.108-1.204l-.526-.738a1.125 1.125 0 0 1 .12-1.45l.773-.773a1.125 1.125 0 0 1 1.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894Z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                        />
                      </svg>
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="p-6 bg-green-100 relative rounded-md shadow-md">
                    <PopoverArrow />
                    <PopoverCloseButton className="absolute top-2 right-3" />
                    <PopoverBody className="grid grid-cols-1">
                      <Button className="m-3">타이틀 수정</Button>
                      <Button
                        className="m-3"
                        onClick={() =>
                          navigate("/teacher/profile/lecture/createQuiz")
                        }
                      >
                        퀴즈 관리
                      </Button>
                    </PopoverBody>
                  </PopoverContent>
                </Popover>
              </td>
            </tr>
            <tr>
              <td className={`${tableBorder} text-xl`}>3강</td>
              <td className={`${tableBorder} text-xl`}>객체들의 세상~</td>
              <td className={`${tableBorder} text-sm text-gray-500`}>
                7월 23일
              </td>
              <td className={`${tableBorder} text-sm text-red-500 text-center`}>
                예정된 강의
              </td>
              <td className={tableBorder}>
                <Popover placement="right-start">
                  <PopoverTrigger>
                    <Button>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-7 text-center hover:text-white"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 0 1 1.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.559.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.894.149c-.424.07-.764.383-.929.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 0 1-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.398.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 0 1-.12-1.45l.527-.737c.25-.35.272-.806.108-1.204-.165-.397-.506-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.108-1.204l-.526-.738a1.125 1.125 0 0 1 .12-1.45l.773-.773a1.125 1.125 0 0 1 1.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894Z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                        />
                      </svg>
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="p-6 bg-green-100 relative rounded-md shadow-md">
                    <PopoverArrow />
                    <PopoverCloseButton className="absolute top-2 right-3" />
                    <PopoverBody className="grid grid-cols-1">
                      <Button className="m-3">타이틀 수정</Button>
                      <Button className="m-3">퀴즈 관리</Button>
                    </PopoverBody>
                  </PopoverContent>
                </Popover>
              </td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default TeacherMyLectureList;
