import { AppDispatch, RootState } from "../../../store";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { teacherInfo } from "../../../store/userInfo/profileSlice";
import { useNavigate } from "react-router-dom";
import { teacherInfoPatch } from "../../../store/userInfo/profileSlice";

export interface TeacherInfoUpdateForm {
  nickname: string;
  email: string;
  password: string;
  brief_introduction: string;
  academic_background: string;
  specialization: string;
  password_auth_token: string | null;
}

const TeacherMyInfoUpdateForm: React.FC = () => {
  const temporaryToken = localStorage.getItem("passwordAuthToken");
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const teacherData = useSelector((state: RootState) => state.profile.info);
  useEffect(() => {
    dispatch(teacherInfo());
  }, [dispatch]);

  // 폼 값 바인딩
  const [formData, setFormData] = useState<TeacherInfoUpdateForm>({
    nickname: teacherData?.nickname || "",
    password: "",
    email: teacherData?.email || "",
    brief_introduction: teacherData?.brief_introduction,
    academic_background: teacherData?.academic_background,
    specialization: teacherData?.specialization,
    password_auth_token: temporaryToken,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  // 내 정보 수정 요청
  const handleUpdateSubmit = async () => {
    await dispatch(teacherInfoPatch(formData));
    localStorage.removeItem("passwordAuthToken");
    navigate("/teacher/profile");
  };
  return (
    <div className="w-9/12 bg-moreBeige rounded-xl shadow-md p-6 my-12 mx-auto relative">
      <form onSubmit={handleUpdateSubmit}>
        <h1 className="my-2 p-2 text-center text-4xl text-lightNavy">
          내정보 수정
        </h1>
        <div className="my-4 p-2">
          <label className="my-2 text-2xl text-lightNavy">닉네임</label>
          <input
            name="nickname"
            value={formData.nickname}
            onChange={handleChange}
            required
          />
        </div>
        <div className="my-4 p-2">
          <label className="my-2 text-2xl text-lightNavy">비밀번호</label>
          <input
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <div className="my-4 p-2">
          <label className="my-2 text-2xl text-lightNavy">이메일</label>
          <input
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="my-4 p-2">
          <label className="my-2 text-2xl text-lightNavy">
            간단한 소개 문구
          </label>
          <textarea
            name="brief_introduction"
            value={formData.brief_introduction}
            onChange={handleChange}
          />
        </div>
        <div className="my-4 p-2">
          <label className="my-2 text-2xl text-lightNavy">학력</label>

          <input
            name="academic_background"
            value={formData.academic_background}
            onChange={handleChange}
            required
          />
        </div>
        <div className="my-4 p-2">
          <label className="my-2 text-2xl text-lightNavy">전공분야</label>
          <input
            name="specialization"
            value={formData.specialization}
            onChange={handleChange}
            required
          />
        </div>
        <button onClick={handleUpdateSubmit}>수정하기</button>
      </form>
    </div>
  );
};

export default TeacherMyInfoUpdateForm;
