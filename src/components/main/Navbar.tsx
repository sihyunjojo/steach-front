import React, { useState } from "react";
import logoImage from "../../assets/LOGO.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faBars,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="flex flex-wrap items-center justify-between bg-white border-b-2 lg:p-4 xl:p-1 2xl:p-2">
      {/* Navbar 로고 */}
      <Link to={"/"}>
        <div className="w-28">
          <img src={logoImage} alt="no-image" className="w-full h-24" />
        </div>
      </Link>

      {/* 햄버거 메뉴 아이콘 */}
      <div className="lg:hidden">
        <button onClick={toggleMenu} className="focus:outline-none">
          <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} size="2x" />
        </button>
      </div>

      {/* 검색창 */}
      <form className="hidden w-full lg:flex lg:w-1/3 xl:w-1/2 2xl:w-2/5 relative mx-4">
        <input
          type="text"
          placeholder="나의 성장을 도와줄 강의를 검색해보세요."
          className="border-2 w-full h-12 rounded-xl p-3"
        />
        <button className="absolute right-3 inset-y-3 hover:text-orange-300">
          <FontAwesomeIcon icon={faMagnifyingGlass} className="size-6" />
        </button>
      </form>

      {/* 메뉴 */}
      <div
        className={`w-full lg:flex lg:items-center lg:justify-between lg:w-auto ${
          isMenuOpen ? "block" : "hidden"
        }`}
      >
        <ul className="flex flex-col lg:flex-row lg:justify-evenly w-full lg:w-auto text-xl font-bold mt-4 lg:mt-0 lg:mr-4">
          <li className="py-2 lg:py-0 lg:px-4">
            <a href="#" className="hover:text-orange-300">
              강의
            </a>
          </li>
          <li className="py-2 lg:py-0 lg:px-4">
            <Link to="/student/profile" className="hover:text-orange-300">
              내 강의실
            </Link>
          </li>
          <li className="py-2 lg:py-0 lg:px-4">
            <a href="#" className="hover:text-orange-300">
              문의하기
            </a>
          </li>
          {/* <li className="py-2 lg:py-0 lg:px-4">
            <Link to="/JosihyeonTest" className="hover:text-orange-300">
              조시현 test용
            </Link>
          </li> */}
        </ul>

        {/* 로그인 및 회원가입 버튼 */}
        <div className="flex flex-col lg:flex-row lg:items-center">
          <button
            className="border-2 p-3 rounded-md w-full lg:w-auto lg:ml-4"
            onClick={() => {
              navigate("/user/login");
            }}
          >
            로그인
          </button>
          <button
            className="text-white bg-red-400 border-2 p-3 rounded-md hover:bg-red-500 w-full lg:w-auto lg:ml-4"
            onClick={() => {
              navigate("/user/signup");
            }}
          >
            회원가입
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
