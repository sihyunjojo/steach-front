import TeacherUpdateInfoModal from "./TeacherUpdateInfoModal";
import { AppDispatch, RootState } from "../../../store";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { teacherInfo } from "../../../store/userInfo/profileSlice";
import TeacherMyInfoForm from "./TeacherMyInfoForm";

const TeacherMyInfo: React.FC = () => {
  return (
    <>
      <TeacherMyInfoForm />
    </>
  );
};

export default TeacherMyInfo;
