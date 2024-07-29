import { AppDispatch, RootState } from "../../../store";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { teacherInfo } from "../../../store/userInfo/profileSlice";

const TeacherMyInfoUpdateForm: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(teacherInfo());
  }, [dispatch]);
  const teacherData = useSelector((state: RootState) => state.profile.info);
  return (
    <div className="w-9/12 bg-moreBeige rounded-xl shadow-md p-6 my-12 mx-auto relative">
      <form>
        <h1 className="my-2 p-2 text-center text-4xl text-lightNavy">
          내정보 수정
        </h1>
        <div className="my-4 p-2">
          <label className="my-2 text-2xl text-lightNavy">이름</label>
          <input value={teacherData?.name} />
        </div>
        <div className="my-4 p-2">
          <label className="my-2 text-2xl text-lightNavy">이메일</label>
          <input value={teacherData?.email} />
        </div>
        <div className="my-4 p-2">
          <label className="my-2 text-2xl text-lightNavy">
            간단한 소개 문구
          </label>
          <textarea value={teacherData?.brief_introduction} />
        </div>
        <div className="my-4 p-2">
          <label className="my-2 text-2xl text-lightNavy">학력</label>

          <input value={teacherData?.academic_background} />
        </div>
        <div className="my-4 p-2">
          <label className="my-2 text-2xl text-lightNavy">전공분야</label>
          <input value={teacherData?.specialization} />
        </div>
        <button>수정하기</button>
      </form>
    </div>
  );
};

export default TeacherMyInfoUpdateForm;
