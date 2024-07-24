import { useState } from "react";
// 김헌규 - tostify 추가
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// 김헌규 - 기존 자바스크립트 방식의 코드를 타입스크립트 방식으로 수정 후 핸들러 함수를 줄였음.
// 김헌규 - 입력 폼 크기 조정 및 항목 수정 완료
const UpdateMyInfo: React.FC = () => {
  interface FormData {
    name: string;
    passwordChange: string;
    confirmPasswordChange: string;
    email: string;
    lectureField: string;
    educationalBackground: string;
    introduce: string;
  }

  const password = "1q2w3e4r";
  // 비밀번호 확인 상태
  const [checkPassword, setCheckPassword] = useState(false);
  const [inputPassword, setInputPassword] = useState("");

  // interface로 생성된 FormData 객체의 정보에 대한 입력을 업데이트 하는 상태 및 함수
  const [formData, setFormData] = useState<FormData>({
    name: "",
    passwordChange: "",
    confirmPasswordChange: "",
    email: "",
    lectureField: "",
    educationalBackground: "",
    introduce: "",
  });

  // 비밀번호 확인 핸들러 함수
  function handleInputPassword(event: React.ChangeEvent<HTMLInputElement>) {
    setInputPassword(event.target.value);
  }

  // 현재 비밀번호 일치 여부 핸들러 함수
  function handleCheckPassword(
    event:
      | React.KeyboardEvent<HTMLInputElement>
      | React.MouseEvent<HTMLButtonElement>
  ) {
    if (
      event.type === "click" ||
      (event.type === "keydown" &&
        (event as React.KeyboardEvent<HTMLInputElement>).key === "Enter")
    ) {
      if (inputPassword === password) {
        setCheckPassword(true);
        toast.success("비밀번호가 정상적으로 일치합니다!", {
          position: "top-center",
        });
      } else {
        toast.error("비밀번호가 일치하지 않습니다!", {
          position: "top-center",
        });
      }
    }
  }
  // Form 객체의 정보에 대한 입력을 업데이트 하는 핸들러 함수
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  return (
    <div>
      <ToastContainer />
      {!checkPassword && (
        <div className="flex flex-col items-center mt-24">
          <h1 className="text-4xl m-2">비밀번호 확인</h1>
          <div className="w-96 relative m-2">
            <input
              type="password"
              placeholder="비밀번호를 입력해주세요."
              className="p-2 w-full text-base border-2 rounded-lg border-hardBeige"
              value={inputPassword}
              onChange={handleInputPassword}
              onKeyDown={handleCheckPassword}
            />
            <button
              onClick={handleCheckPassword}
              className="absolute right-2 rounded-xl p-2 w-14 h-8 text-sm bg-orange-200 inset-y-1 hover:text-white hover:bg-orange-300"
            >
              확인
            </button>
          </div>
        </div>
      )}
      {/* 이름, 이메일, 비밀번호, 비밀번호 변경 확인, 강사 소개, 강의 분야, 학력 */}
      {checkPassword && (
        <div className="w-9/12 bg-moreBeige rounded-xl shadow-md p-6 mt-12 mx-auto">
          <form>
            <h1 className="my-2 p-2 text-center text-4xl text-lightNavy">
              내정보 수정
            </h1>
            <div className="my-4 p-2">
              <label className="my-2 text-2xl text-lightNavy">이름</label>
              <input
                required
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-2 border-2 rounded-lg border-hardBeige"
              />
            </div>
            <div className="my-4 p-2">
              <label className="my-2 text-2xl text-lightNavy">
                비밀번호 변경
              </label>
              <input
                required
                name="passwordChange"
                type="password"
                value={formData.passwordChange}
                onChange={handleChange}
                className="w-full p-2 border-2 rounded-lg border-hardBeige"
              />
            </div>
            <div className="my-4 p-2">
              <label className="my-2 text-2xl text-lightNavy">
                비밀번호 변경 확인
              </label>
              <input
                required
                name="confirmPasswordChange"
                type="password"
                value={formData.confirmPasswordChange}
                onChange={handleChange}
                className="w-full p-2 border-2 rounded-lg border-hardBeige"
              />
            </div>
            <div className="my-4 p-2">
              <label className="my-2 text-2xl text-lightNavy">이메일</label>
              <input
                required
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-2 border-2 rounded-lg border-hardBeige"
              />
            </div>
            <div className="my-4 p-2">
              <label className="my-2 text-2xl text-lightNavy">강의분야</label>
              <input
                required
                name="lectureField"
                type="password"
                value={formData.lectureField}
                onChange={handleChange}
                className="w-full p-2 border-2 rounded-lg border-hardBeige"
              />
            </div>
            <div className="my-4 p-2">
              <label className="my-2 text-2xl text-lightNavy">학력</label>
              <input
                required
                name="educationalBackground"
                type="file"
                value={formData.educationalBackground}
                onChange={handleChange}
                className="w-full p-2 border-2 rounded-lg border-hardBeige"
              />
            </div>
            <div className="my-4 p-2">
              <label className="my-2 text-2xl text-lightNavy">자기소개</label>
              <input
                required
                name="introduce"
                type="text"
                value={formData.introduce}
                onChange={handleChange}
                className="w-full p-2 border-2 rounded-lg border-hardBeige"
              />
            </div>
            <button className="w-full text-center bg-red-400 p-2 rounded-lg hover:bg-red-500 hover:text-white">
              변경하기
            </button>
          </form>
        </div>
      )}
    </div>
  );
};
export default UpdateMyInfo;
