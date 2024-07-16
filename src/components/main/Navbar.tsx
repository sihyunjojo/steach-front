import logoImage from "../../assets/LOGO.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  let navigate = useNavigate();

  return (
    <nav className="flex justify-between items-center border-b-2 p-2">
      {/* Nabar 로고 */}
      <Link to={"/"}>
        <div>
          <img src={logoImage} alt="no-image" className="w-5/5 h-24" />
        </div>
      </Link>
      {/* 검색창 */}
      <form className="w-2/5 flex relative">
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
      <ul className="flex justify-around w-1/5 text-3xl font-bold">
        <li>
          <a href="" className="hover:text-orange-300">
            강의
          </a>
        </li>
        <li>
          <Link to={"/student/profile"} className="hover:text-orange-300">
            내 강의실
          </Link>
        </li>
        <li>
          <a href="" className="hover:text-orange-300">
            문의하기
          </a>
        </li>
        <li>
          <Link to={"/JosihyeonTest"} className="hover:text-orange-300">
            조시현 test용
          </Link>
        </li>
      </ul>
      {/* 로그인 및 회원가입 버튼 */}
      <ul className="flex justify-evenly w-1/5 text-3xl font-bold">
        <li>
          {/* <Link to={'/login'}> */}
          <button
            className="border-2 p-3 rounded-md"
            onClick={() => {
              navigate("/user/login");
            }}
          >
            로그인
          </button>
          {/* </Link> */}
        </li>
        <li>
          <button
            className="text-white bg-red-400 border-2 p-3 rounded-md hover:bg-red-500"
            onClick={() => {
              navigate("/user/signup");
            }}
          >
            회원가입
          </button>
        </li>
      </ul>
    </nav>
  );
}
