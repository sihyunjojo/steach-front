import TeacherUpdateInfoModal from "./TeacherUpdateInfoModal";
import { AppDispatch, RootState } from "../../../store";
import { useSelector } from "react-redux";
import { useState } from "react";
import { teacherInfo } from "../../../store/userInfo/profileSlice";
import TeacherMyInfoForm from "./TeacherMyInfoForm";
// import { RootState } from "../../../store";

const TeacherMyInfo: React.FC = () => {
  // store에서 password 가져오기
  // const authorizedPassword = useSelector((state:RootState) => state.auth.)
  // 내정보 수정 여부
  const [isUpdateInfo, setIsUpdateInfo] = useState(false);

  // 비밀번호 확인이 된 후 내 정보 수정 폼을 띄우기 위한 핸들러 함수
  const handleIsUpdateInfo = (password) => {
    // 입력한 password와
    setIsUpdateInfo(true);
  };

  // 비밀번호를 확인하여 확인이 되면 내정보 폼을 띄워주는 용도
  return (
    <>
      {!isUpdateInfo && (
        <TeacherMyInfoForm handleIsUpdateInfoSubmit={handleIsUpdateInfo} />
      )}
    </>
  );
};

export default TeacherMyInfo;
