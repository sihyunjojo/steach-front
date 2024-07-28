import { useSelector } from "react-redux";
import { RootState } from "../../../store";
// import { authActions } from "../../../store/AuthSlice";
import NavbarLogin from "./NavbarLogin";
import NavbarStudent from "./NavbarStudent";
import NavbarTeacher from "./NavbarTeacher";

// 김헌규 - Navbar 반응형 구현
const Navbar: React.FC = () => {
  const role = useSelector((state: RootState) => state.auth.role);
  const username = useSelector((state: RootState) => state.auth.username);

  return (
    <>
      {role === "" && <NavbarLogin />}
      {role === "STUDENT" && <NavbarStudent username={username} />}
      {role === "TEACHER" && <NavbarTeacher username={username} />}
    </>
  );
};

export default Navbar;
