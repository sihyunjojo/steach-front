import Footer from "./components/main/Footer.tsx";
import Navbar from "./components/main/Navbar.tsx";
import { Route, Routes } from "react-router-dom";
import LoginPage from "./pages/user/LoginPage.tsx";
import SignUpPage from "./pages/user/SignUpPage.tsx";
import ProfilePage from "./pages/student/ProfilePage.tsx";
import HomePage from "./pages/main/HomePage.tsx";
import JosihyeonTest from "./tests/JosihyeonTest.tsx";
import LectureSignUpPage from "./pages/lecture/DetailPage.tsx";
import { useEffect } from "react";
import { useDispatch } from 'react-redux'
// import { fetchLectures } from './store/lecturesSlice.tsx';
import { AppDispatch } from './store';

const App: React.FC = () => {
  // const dispatch = useDispatch<AppDispatch>();

  // useEffect(() => {
  //   dispatch(fetchLectures());
  // }, [dispatch]);

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/student/profile" element={<ProfilePage />}></Route>
        <Route path="/user/login" element={<LoginPage />}></Route>
        <Route path="/user/signup" element={<SignUpPage />}></Route>
        <Route path="/JosihyeonTest" element={<LectureSignUpPage />}></Route>
      </Routes>
      <Footer />
    </div>
  );


}

export default App;