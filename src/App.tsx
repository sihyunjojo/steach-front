import Footer from "./components/main/Footer.tsx";
import Navbar from "./components/main/Navbar.tsx";
import { Route, Routes } from "react-router-dom";
import LoginPage from "./pages/user/LoginPage.tsx";
import SignUpPage from "./pages/user/SignUpPage.tsx";
import ProfilePage from "./pages/student/ProfilePage.tsx";
import HomePage from "./pages/main/HomePage.tsx";
import LectureUpdatePage from "./pages/lecture/UpdatePage.tsx";
import LectureSignUpPage from "./pages/lecture/SignUpPage.tsx";
import TeacherProfilePage from "./pages/teacher/MyRoomPage.tsx";
import MyInfoDetailPage from "./pages/teacher/MyInfoDetailPage.tsx";
import MyInfoDetailUpdate from "./pages/teacher/MyInfoDetailUpdatePage.tsx";
import CurriculumList from "./components/teacher/CurriculumList.tsx";
import ProfileLectureHistory from "./components/teacher/LectureReport.tsx";
import CreateQuiz from "./components/teacher/CreateQuiz.tsx";
import LectureReport from "./components/teacher/LectureReport.tsx";

const App: React.FC = () => {

  return (
    <div>
      <Navbar />
      <Routes>
        <Route 
        path="/" 
        element={<HomePage />}
        ></Route>
        <Route 
        path="/student/profile" 
        element={<ProfilePage />}
        ></Route>
        <Route 
        path="/user/login" 
        element={<LoginPage />}
        ></Route>
        <Route 
        path="/user/signup" 
        element={<SignUpPage />}
        ></Route>
        <Route 
        path="/lecture/signup" 
        element={<LectureSignUpPage />}
        ></Route>
        <Route 
        path="/lecture/update" 
        element={<LectureUpdatePage />}
        ></Route>
        <Route 
        path="/teacher/profile" 
        element={<TeacherProfilePage />}
        ></Route>
        <Route
          path="/teacher/profile/lecture"
          element={<CurriculumList />}
        ></Route>
        <Route
          path="/teacher/profiledetail"
          element={<MyInfoDetailPage />}
        ></Route>
        <Route
          path="/teacher/profiledetail/update"
          element={<MyInfoDetailUpdate />}
        ></Route>
        <Route
          path="/teacher/profile/lecture/createQuiz"
          element={<CreateQuiz />}
        ></Route>
        <Route
          path="/teacher/profile/lecture/lectureReport"
          element={<LectureReport />}
        ></Route>
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
