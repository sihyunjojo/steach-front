import { useState } from "react";
import LoginBannerBgImg from "../../assets/banner.jpg";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";

// 이진송
// 디자인 변경 필요함
const Login: React.FC = () => {
  const navigate = useNavigate();

  interface FormData {
    username: string;
    password: string;
  }

  const [formData, setFormData] = useState<FormData>({
    username: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // 로그인 검증
    if (Object.values(formData).some((value) => value === "")) {
      alert("아이디, 비밀번호를 입력해주세요.");
    } else {
      axios
        .post("http://localhost:8080/api/v1/login", formData, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          withCredentials: true,
        })
        .then((response) => {
          console.log(response.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <>
      <div className="main-content relative h-screen background-image bg-cover bg-center bg-no-repeat">
        <img
          src={LoginBannerBgImg}
          className="absolute opacity-60 z-0 w-full"
        />
        <div className="flex items-center justify-center h-full ">
          <form
            className="relative max-w-md mx-auto p-6 bg-white shadow-md rounded-lg z-10"
            onSubmit={handleSubmit}
          >
            <div>
              <label htmlFor="userId" className="text-2xl">
                아이디
              </label>
              <input
                type="text"
                id="userId"
                name="userId"
                value={formData.username}
                onChange={handleChange}
                className="w-full border-2 rounded-lg p-2 mb-4"
                required
              />
              <label htmlFor="password" className="text-2xl">
                비밀번호
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full border-2 rounded-lg p-2w-full border-2 rounded-lg p-2"
                required
              />
              {/* 해당부분 로그인 버튼 확인하고 수정해야겠음 - 이진송이 할거임 */}
              <button
                type="submit"
                className="w-full text-center bg-orange-300 p-2 mt-4 mb-2 rounded-lg hover:bg-orange-400 hover:text-white"
              >
                로그인
              </button>
              <button
                type="submit"
                className="w-full text-center bg-orange-300 p-2 mt-2 rounded-lg hover:bg-orange-400 hover:text-white"
                onClick={() => {
                  navigate("/user/signup");
                }}
              >
                회원가입
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
export default Login;
