import TeacherUpdateInfoModal from "./TeacherUpdateInfoModal";
import { AppDispatch, RootState } from "../../../store";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { teacherInfo } from "../../../store/userInfo/profileSlice";

interface TeacherMyInfoProps {
  handleIsUpdateInfoSubmit: (password: string) => void;
}

const TeacherMyInfoForm: React.FC<TeacherMyInfoProps> = ({
  handleIsUpdateInfoSubmit,
}) => {
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(teacherInfo());
  }, [dispatch]);
  const teacherData = useSelector((state: RootState) => state.profile.info);
  return (
    <div className="w-9/12 bg-moreBeige rounded-xl shadow-md p-6 my-12 mx-auto relative">
      <form>
        <h1 className="my-2 p-2 text-center text-4xl text-lightNavy">내정보</h1>
        <div className="my-4 p-2">
          <label className="my-2 text-2xl text-lightNavy">닉네임</label>
          <p>{teacherData?.nickname}</p>
        </div>
        <div className="my-4 p-2">
          <label className="my-2 text-2xl text-lightNavy">이메일</label>
          <p>{teacherData?.email}</p>
        </div>
        <div className="my-4 p-2">
          <label className="my-2 text-2xl text-lightNavy">
            간단한 소개 문구
          </label>
          <p>
            {teacherData?.brief_introduction === null
              ? "nothing"
              : teacherData?.brief_introduction}
          </p>
        </div>
        <div className="my-4 p-2">
          <label className="my-2 text-2xl text-lightNavy">학력</label>
          <p>
            {teacherData?.academic_background === null
              ? "nothing"
              : teacherData?.academic_background}
          </p>
        </div>
        <div className="my-4 p-2">
          <label className="my-2 text-2xl text-lightNavy">전공분야</label>
          <p>
            {teacherData?.specialization === null
              ? "nothing"
              : teacherData?.specialization}
          </p>
        </div>
        <div className="my-4 p-2">
          <label className="my-2 text-2xl text-lightNavy">봉사 시간</label>
          <p>{teacherData?.volunteer_time} 시간</p>
        </div>
      </form>
      <TeacherUpdateInfoModal
        handleIsUpdateInfoSubmit={handleIsUpdateInfoSubmit}
      />
    </div>
  );
};

export default TeacherMyInfoForm;
