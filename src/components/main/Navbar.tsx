import React, { useState } from "react";
import logoImage from "../../assets/LOGO.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faBars,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";

// 김헌규 - Navbar 반응형 구현
const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="flex flex-wrap items-center justify-between p-2 bg-Beige border-b-2 border-hardBeige">
      {/* Navbar 로고 */}
      <Link to={"/"}>
        <div className="w-28 ml-4">
          <img src={logoImage} alt="logo" className="w-full h-20" />
        </div>
      </Link>

      {/* 검색창 */}
      <div className="flex-1 flex items-center justify-between lg:justify-around">
        <form className="relative mx-2 lg:mx-4 flex-grow lg:flex-grow-0 lg:w-1/2">
          <input
            type="text"
            placeholder="나의 성장을 도와줄 강의를 검색해보세요."
            className="p-2 border-2 w-full h-10 rounded-md border-hardBeige"
          />
          <button className="absolute right-3 inset-y-2 hover:text-orange-300">
            <FontAwesomeIcon icon={faMagnifyingGlass} className="size-6" />
          </button>
        </form>

        {/* 메뉴 */}
        <ul className="hidden lg:flex lg:flex-row lg:justify-between text-lg font-bold ml-4 lg:ml-0">
          <li className="mx-4 lg: m-2 lg:px-2 lg:py-0">
            <a href="#" className="hover:text-orange-300">
              강의
            </a>
          </li>
          <li className="mx-4 lg: m-2 lg:px-2 lg:py-0">
            <Link to="/student/profile" className="hover:text-orange-300">
              내 강의실
            </Link>
          </li>
          <li className="mx-4 lg: m-2 lg:px-2 lg:py-0">
            <a href="#" className="hover:text-orange-300">
              문의하기
            </a>
          </li>
        </ul>
      </div>

      {/* 로그인 및 회원가입 버튼 */}
      <div className="hidden mr-3 lg:flex items-center ml-4 lg:ml-0">
        <button
          className="w-auto ml-2 p-2 border-2 border-hardBeige rounded-md"
          onClick={() => {
            navigate("/user/login");
          }}
        >
          로그인
        </button>
        <button
          className="w-auto ml-2 p-2 text-white bg-red-400 border-2 border-hardBeige rounded-md hover:bg-red-500"
          onClick={() => {
            navigate("/user/signup");
          }}
        >
          회원가입
        </button>
      </div>
      {/* 햄버거 메뉴 아이콘 */}
      <div className="lg:hidden">
        <button onClick={toggleMenu} className="focus:outline-none">
          <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} size="2x" />
        </button>
      </div>

      {/*  ------------------------------------------------------------------------------------------------------- */}
      {/* 모바일 메뉴 */}
      {isMenuOpen && (
        <div className="w-full flex flex-col lg:hidden">
          <ul className="flex flex-col w-full text-lg font-bold mt-4">
            <li className="p-2">
              <a href="#" className="hover:text-orange-300">
                강의
              </a>
            </li>
            <li className="p-2">
              <Link to="/student/profile" className="hover:text-orange-300">
                내 강의실
              </Link>
            </li>
            <li className="p-2">
              <a href="#" className="hover:text-orange-300">
                문의하기
              </a>
            </li>
          </ul>

          <div className="flex flex-col items-center mt-4 mx-2">
            <button
              className="w-full mb-2 p-2 border-2 border-hardBeige rounded-md"
              onClick={() => {
                navigate("/user/login");
              }}
            >
              로그인
            </button>
            <button
              className="text-white bg-red-400 border-2 p-2 rounded-md hover:bg-red-500 w-full"
              onClick={() => {
                navigate("/user/signup");
              }}
            >
              회원가입
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
