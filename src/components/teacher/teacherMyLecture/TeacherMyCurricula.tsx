import React from "react";
// import TodayLecture from "./TodayLecture";
// import ScheduledLecture from "./ScheduledLecture";

interface Sample {
  image: string;
  title: string;
  time: string;
  teacher: string;
}

const samples: Sample[] = [
  {
    image:
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    title: "김호경의 Unity 커리큘럼",
    time: "매주 화, 목 오후 4시 0분 ~ 오후 5시 0분",
    teacher: "김호경",
  },
  {
    image:
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    title: "김호경의 Unity 커리큘럼",
    time: "매주 화, 목 오후 4시 0분 ~ 오후 5시 0분",
    teacher: "김호경",
  },
  {
    image:
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    title: "김호경의 Unity 커리큘럼",
    time: "매주 화, 목 오후 4시 0분 ~ 오후 5시 0분",
    teacher: "김호경",
  },
  {
    image:
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    title: "김호경의 Unity 커리큘럼",
    time: "매주 화, 목 오후 4시 0분 ~ 오후 5시 0분",
    teacher: "김호경",
  },
  {
    image:
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    title: "김호경의 Unity 커리큘럼",
    time: "매주 화, 목 오후 4시 0분 ~ 오후 5시 0분",
    teacher: "김호경",
  },
  {
    image:
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    title: "김호경의 Unity 커리큘럼",
    time: "매주 화, 목 오후 4시 0분 ~ 오후 5시 0분",
    teacher: "김호경",
  },
  {
    image:
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    title: "김호경의 Unity 커리큘럼",
    time: "매주 화, 목 오후 4시 0분 ~ 오후 5시 0분",
    teacher: "김호경",
  },
  {
    image:
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    title: "김호경의 Unity 커리큘럼",
    time: "매주 화, 목 오후 4시 0분 ~ 오후 5시 0분",
    teacher: "김호경",
  },
  {
    image:
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    title: "김호경의 Unity 커리큘럼",
    time: "매주 화, 목 오후 4시 0분 ~ 오후 5시 0분",
    teacher: "김호경",
  },
];

const TeacherMyCurricula: React.FC = () => {
  return (
    <>
      <h1 className="text-4xl text-lightNavy">내가 강의하는 커리큘럼</h1>
      <div className="bg-white">
        <div className="flex flex-col space-y-8 mx-20 my-4">
          {samples.map((sample, index) => (
            <div
              key={index}
              className="flex border rounded-lg overflow-hidden shadow-md w-full bg-white"
            >
              <img
                src={sample.image}
                alt="no-image"
                className="w-1/3 object-cover"
              />
              <div className="p-4 flex flex-col justify-center">
                <h2 className="text-2xl font-bold mb-2">{sample.title}</h2>
                <p className="text-gray-700 mb-4">{sample.time}</p>
                <p className="text-gray-700 mb-4">{sample.teacher} 선생님</p>
                <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700">
                  자세히 보기
                </button>
              </div>
            </div>
          ))}
          <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
            <div className="flex flex-1 justify-between sm:hidden">
              <a
                href="#"
                className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
              >
                Previous
              </a>
              <a
                href="#"
                className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
              >
                Next
              </a>
            </div>
            <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
              <div>
                <p className="text-sm text-gray-700">
                  Showing <span className="font-medium">1</span> to{" "}
                  <span className="font-medium">10</span> of{" "}
                  <span className="font-medium">97</span> results
                </p>
              </div>
              <div>
                <nav
                  aria-label="Pagination"
                  className="isolate inline-flex -space-x-px rounded-md shadow-sm"
                >
                  <a
                    href="#"
                    className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                  >
                    <span className="sr-only">Previous</span>
                    {/* <ChevronLeftIcon aria-hidden="true" className="h-5 w-5" /> */}
                  </a>
                  <a
                    href="#"
                    aria-current="page"
                    className="relative z-10 inline-flex items-center bg-indigo-600 px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    1
                  </a>
                  <a
                    href="#"
                    className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                  >
                    2
                  </a>
                  <a
                    href="#"
                    className="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex"
                  >
                    3
                  </a>
                  <span className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-700 ring-1 ring-inset ring-gray-300 focus:outline-offset-0">
                    ...
                  </span>
                  <a
                    href="#"
                    className="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex"
                  >
                    8
                  </a>
                  <a
                    href="#"
                    className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                  >
                    9
                  </a>
                  <a
                    href="#"
                    className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                  >
                    10
                  </a>
                  <a
                    href="#"
                    className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                  >
                    <span className="sr-only">Next</span>
                    {/* <ChevronRightIcon aria-hidden="true" className="h-5 w-5" /> */}
                  </a>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TeacherMyCurricula;

// <>
//   <TodayLecture />
//   <ScheduledLecture />
// </>
