import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  PopoverArrow,
  PopoverCloseButton,
  Button,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import hokyung from "../../assets/futureHokyung.jpg";
const CurriculumList: React.FC = () => {
  const navigate = useNavigate();
  const tableBorder: string = "border-b-2 rounded-md border-gray-300 p-4";

  return (
    <div className="p-9 bg-Beige">
      <header className="text-4xl text-indigo-900">
        내 강의 / 김호경과 함께하는 C++ 강의
      </header>

      <section className="flex items-center my-7">
        <img
          src={hokyung}
          alt="no-image"
          className="mx-3 w-72 h-48 rounded-md shadow-md"
        />
        <main className="mx-4">
          <h1 className="my-3 text-2xl">김호경과 함께하는 C++ 교실</h1>
          <text className="text-sm text-slate-500">
            매주 화, 수 15:00 ~ 17:00
          </text>
        </main>
      </section>

      <section className="mx-3 mt-12 mb-3">
        <h1 className="my-3 text-3xl text-lightNavy">커리큘럼</h1>
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

export default CurriculumList;
