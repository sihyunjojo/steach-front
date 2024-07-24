import { useState } from "react";
import student from "../../../assets/student.png";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { authActions } from "../../../store/AuthSlice";
import axios from "axios";

// 이진송
const StudentSignUp: React.FC = () => {
  // dispatch
  const dispatch = useDispatch();

  // useNavigate
  const navigate = useNavigate();

  // FormData 타입 포함해서 만듦
  interface FormData {
    userId: string;
    password: string;
    name: string;
    email: string;
    AuthCode: string;
  }

  // 데이터를 담기 위한 박스 개념, 함수를 위의 interface에 맞춰서 작성
  const [formData, setFormData] = useState<FormData>({
    userId: "",
    password: "",
    name: "",
    email: "",
    AuthCode: "",
  });

  // 비밀번호 확인 검증
  const [confirmPassword, setComfirmPassword] = useState("");

  //사용자가 값을 입력할 때 마다, onChange로 데이터가 입력됨.
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // 비밀번호 확인 양방향 바인딩
  const handleComfirmPassword = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setComfirmPassword(event.target.value);
  };

  // 버튼 눌렀을때 나타나는 이벤트,
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // 만약 8자이상 16자이하라면 axios요청 보내기
    if (formData.password.length >= 8 && formData.password.length <= 16) {
      axiosSignUp();
      // 아니면 경고 alert
    } else {
      toast.warn("비밀번호를 다시 입력해주세요.", {
        position: "top-center",
      });
    }
  };

  // formData를 확인해서 빈 곳이 잇다면 alert 뜸
  const axiosSignUp = () => {
    // form의 id값 따라서 받은 값을 넣어줌
    const formDataToSend = new FormData();
    formDataToSend.append("username", formData.userId);
    formDataToSend.append("password", formData.password);
    formDataToSend.append("name", formData.name);
    formDataToSend.append("email", formData.email);
    formDataToSend.append("auth_code", formData.AuthCode);

    // API 통신
    axios
      .post("http://43.202.1.52:8080/api/v1/student/join", formDataToSend, {
        headers: { "Content-Type": "application/json" },
      })
      .then((response) => {
        toast.success("회원가입이 완료되었습니다.", {
          position: "top-center",
        });
        const info = {
          username: formData.userId,
          password: formData.password,
        };

        dispatch(authActions.login(info));
        navigate("/");
      })
      .catch((err) => {
        toast.error("회원가입에 실패했습니다.", {
          position: "top-center",
        });
        console.log(err);
      });
  };

  return (
    <>
      <ToastContainer autoClose={2000} />
      <div>
        <img src={student} />
      </div>
      <form
        className="max-w-md mx-auto border-2 rounded-xl p-6 mb-28"
        onSubmit={handleSubmit}
      >
        <section>
          <label htmlFor="userId" className="text-2xl">
            아이디
          </label>
          <input
            type="text"
            id="userId"
            name="userId"
            value={formData.userId}
            onChange={handleChange}
            className="border-2 rounded-lg w-full p-2 mb-5"
            required
          />
        </section>
        <section>
          <label htmlFor="password" className="text-2xl">
            비밀번호
          </label>
          <div className="mb-5">
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="border-2 rounded-lg w-full p-2 "
              required
            />
            {<p className="mt-2 text-sm">비밀번호는 8 ~ 16자리여야 합니다.</p>}
          </div>
        </section>
        <section>
          <label htmlFor="confirmPassword" className="text-2xl">
            비밀번호확인
          </label>
          <div className="mb-5">
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={confirmPassword}
              onChange={handleComfirmPassword}
              className="border-2 rounded-lg w-full p-2"
              required
            />
            {formData.password.length >= 8 &&
              confirmPassword.length >= 8 &&
              formData.password === confirmPassword && (
                <p className="mt-2 text-sm text-red-500">
                  비밀번호가 일치합니다.
                </p>
              )}
          </div>
        </section>
        <section>
          <label htmlFor="email" className="text-2xl">
            이름
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="border-2 rounded-lg w-full p-2 mb-5"
            required
          />
        </section>
        <section>
          <label htmlFor="email" className="text-2xl">
            이메일
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="border-2 rounded-lg w-full p-2 mb-5"
            required
          />
        </section>
        <section>
          <label htmlFor="AuthCode" className="text-2xl">
            인증코드
          </label>
          <input
            type="text"
            id="AuthCode"
            name="AuthCode"
            value={formData.AuthCode}
            onChange={handleChange}
            className="border-2 rounded-lg w-full p-2 mb-5"
            required
          />
        </section>
        <button
          type="submit"
          className="w-full text-center bg-orange-300 p-2 rounded-lg hover:bg-orange-400 hover:text-white"
        >
          회원가입
        </button>
      </form>
    </>
  );
};

export default StudentSignUp;
